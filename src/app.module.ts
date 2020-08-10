import { Module } from '@nestjs/common'
import { DbModule } from './db/db.module'

@Module({
  imports: [DbModule.forRoot()],
  providers: [],
  controllers: [],
})
export class AppModule {}
