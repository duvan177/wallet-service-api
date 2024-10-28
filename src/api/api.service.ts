import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async post(path: string, data: any) {
    const url = `${process.env.DB_SERVICE_URL}/${path}`;
    const response = await firstValueFrom(this.httpService.post(url, data));
    return response.data;
  }
}
