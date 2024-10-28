import { Controller, Post, Body } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly apiService: ApiService) {}

  @Post('register')
  async registerClient(@Body() createClientDto: CreateClientDto) {
    return this.apiService.post('clients/register', createClientDto);
  }
}
