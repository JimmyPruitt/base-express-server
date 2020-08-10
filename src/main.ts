import { config } from 'dotenv'
config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ResponseTransformInterceptor } from './interceptors/ResponseTransformInterceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new ResponseTransformInterceptor())
  await app.listen(3000)
}
bootstrap()
