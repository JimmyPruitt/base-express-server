import { Module, DynamicModule } from '@nestjs/common'
import { DbProvider } from './db.provider'

@Module({})
export class DbModule {
  public static forRoot(): DynamicModule {
    const providers = DbProvider.createProviders()
    return {
      global: true,
      module: DbModule,
      providers,
      exports: providers,
    }
  }
}
