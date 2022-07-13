import { Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'
import { CommonRepository } from '../../common/infra/typeorm/common.repository'

@Injectable()
export class UserRepository extends CommonRepository<User>(User) {}
