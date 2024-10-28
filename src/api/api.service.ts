import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async post(path: string, data: any) {
    try {
        const url = `${process.env.DB_SERVICE_URL || 'http://localhost:5100'}/${path}`;
        const response = await firstValueFrom(this.httpService.post(url, data));
        console.log(response);
        return response.data;
    } catch (error) {
        // console.error(error.response.data);
        return error.response.data;
        
    }
  }
}
