import { Controller, Post, Body } from '@nestjs/common';
import { LoadWalletDto } from './dto/load-wallet.dto';
import { ApiService } from 'src/api/api.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly apiService: ApiService) {}
  @Post('load')
  async loadWallet(@Body() loadWalletDto: LoadWalletDto) {
    return this.apiService.post('wallet/load', loadWalletDto);
  }

  @Post('balance')
  async getBalance(@Body() balanceDto: any) {
    return this.apiService.post('wallet/balance', balanceDto);
  }
}
