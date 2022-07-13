import { CommonEntity } from '../../../common/domain/CommonEntity'
import { Entity } from 'typeorm'

@Entity()
export class Permission extends CommonEntity {
  name: string
  route: string
}
