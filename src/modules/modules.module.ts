import { Module } from '@nestjs/common'
import { CommonModule } from './common/common.module'
import { AuthorizationModule } from './authorization/authorization.module'

@Module({
  imports: [CommonModule, AuthorizationModule],
})
export class ModulesModule {}
