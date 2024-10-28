import { Controller, Post, Body } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { MakePurchaseDto } from './dto/make-purchase.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly apiService: ApiService) {}
  @Post('purchase')
  async makePurchase(@Body() purchaseDto: MakePurchaseDto) {
    return this.apiService.post('transactions/purchase', purchaseDto);
  }
  @Post('confirm')
  async confirmPayment(@Body() confirmDto: ConfirmPaymentDto) {
    return this.apiService.post('transactions/confirm', confirmDto);
  }
}
