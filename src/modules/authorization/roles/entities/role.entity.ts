import { CommonEntity } from '../../../common/infra/typeorm/common.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class Role extends CommonEntity {
  @Column()
  name: string
}
