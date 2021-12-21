import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PriceService } from './../src/price/price.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PriceService)
      .useValue({
        getPrice: async () => {
          return 44.44;
        }
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/price?from=BTC&to=USD (GET)', () => {
    return request(app.getHttpServer())
      .get('/price?from=BTC&to=USD')
      .expect(200)
      .expect('{"price":44.44}');
  });
});
