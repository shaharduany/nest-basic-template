import { Request, Response } from 'express';

export class RequestLogsDto {
  public ip: string;
  public headers: object;
  public method: string;
  public originalUrl: string;
  public userAgent: string;
  public body: unknown;
  public hostname: string;
  public requestedAt: string;

  public statusCode: number;
  public respondedAt: string;

  public static fromRequest(request: Request): RequestLogsDto {
    const requestLogsDto = new RequestLogsDto();
    requestLogsDto.ip = request.ip;
    requestLogsDto.headers = request.headers;
    requestLogsDto.method = request.method;
    requestLogsDto.hostname = request.hostname;
    requestLogsDto.originalUrl = request.originalUrl;
    requestLogsDto.requestedAt =
      request.get('Date') ?? new Date().toISOString();
    requestLogsDto.userAgent = request.get('user-agent');
    requestLogsDto.body = request.body;

    return requestLogsDto;
  }

  public recordResponse(response: Response) {
    this.statusCode = response.statusCode;
    this.respondedAt = new Date().toISOString();
  }
}
