import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceController } from './price/price.controller';
import { PriceService } from './price/price.service';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot()
  ],
  controllers: [PriceController],
  providers: [PriceService],
})
export class AppModule {}
