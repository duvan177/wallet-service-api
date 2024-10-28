import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ClientsController } from './clients/clients.controller';
import { TransactionsController } from './transactions/transactions.controller';
import { WalletController } from './wallet/wallet.controller';
@Module({
  imports: [ApiModule],
  controllers: [
    AppController,
    ClientsController,
    TransactionsController,
    WalletController,
  ],
  providers: [AppService],
})
export class AppModule {}
