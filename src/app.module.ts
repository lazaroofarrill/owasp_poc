import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ModulesModule } from './modules/modules.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppDataSource } from './modules/common/infra/typeorm/data-source'

@Module({
  imports: [
    ModulesModule,
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
