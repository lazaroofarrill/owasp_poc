import { CommonEntity } from '../../../common/domain/CommonEntity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Role extends CommonEntity {
  @Column()
  name: string
}
