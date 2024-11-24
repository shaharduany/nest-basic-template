import { AxiosRequestConfig } from 'axios';
import { HttpMethods } from '../constants/my-http-request.constants';

export interface IJsonRequestParams {
  url: string;
  method: HttpMethods;
  params?: Record<string, unknown>;
  data?: unknown;
  config?: AxiosRequestConfig;
}
