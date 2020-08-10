import { Provider } from '@nestjs/common'
import { Pool } from 'pg'

export class DbProvider {
  public static createProviders(): Provider[] {
    return [this.createConnectionProvider()]
  }

  public static createConnectionProvider(): Provider {
    return {
      provide: 'DB_CONNECTION',
      useFactory: () =>
        new Pool({
          connectionString: process.env.DB_URL,
        }),
    }
  }
}
