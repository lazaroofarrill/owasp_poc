import { CommonEntity } from '../../../common/infra/typeorm/common.entity'
import { Entity } from 'typeorm'

@Entity()
export class Permission extends CommonEntity {
  name: string
  route: string
}
