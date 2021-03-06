import { CommonEntity } from '../../../common/infra/typeorm/common.entity'
import { Column, Entity, Index } from 'typeorm'

@Entity()
@Index(['email'], { unique: true, where: 'deleted_at IS NULL' })
export class User extends CommonEntity {
  @Column()
  name: string

  @Column()
  lastName: string

  @Column()
  email: string
}
