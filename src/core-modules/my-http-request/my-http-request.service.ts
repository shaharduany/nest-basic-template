import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MyConfigsService } from '../my-configs/my-configs.service';
import { AxiosRequestConfig } from 'axios';
import { HelpersService } from '../helpers/helpers.service';
import { IJsonRequestParams } from './interfaces/json-request.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class MyHttpRequestService {
  constructor(
    private readonly httpService: HttpService,
    private readonly myConfigsService: MyConfigsService,
    private readonly helpersService: HelpersService,
  ) {}

  public jsonRequest({
    url,
    method,
    params,
    data,
    config,
  }: IJsonRequestParams) {
    const normalizedConfig = this.normalizeConfig(url, {
      ...config,
      params,
    });

    return this.httpService
      .request({
        url,
        method,
        data,
        ...normalizedConfig,
      })
      .pipe(map((response) => response.data));
  }

  protected getDefaultHeaders(url: string) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (this.isInternalDomain(url)) {
      headers['x-request-id'] = this.helpersService.generateUUID();
      headers['x-source-service'] = this.myConfigsService.getServiceName();
      headers['x-api-key'] = this.myConfigsService.getInternalApiKey();
    }

    return headers;
  }

  protected isInternalDomain(url: string) {
    const internalDomains: string[] =
      this.myConfigsService.getInternalDomains();
    const { hostname: urlDomain } = new URL(url);
    return internalDomains.some((domain) => {
      const cleanedDomain = domain.replace(/\.$/, '');
      return urlDomain.endsWith(cleanedDomain);
    });
  }

  protected normalizeConfig(url: string, config: AxiosRequestConfig) {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    config.headers = { ...this.getDefaultHeaders(url), ...config.headers };
    return config;
  }
}
