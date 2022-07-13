import { DataSource } from 'typeorm'
import { config } from 'dotenv'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { User } from '../../../authorization/users/entities/user.entity'

config()
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.RDBMS_HOST,
  port: +process.env.RDBMS_PORT,
  username: process.env.RDBMS_USERNAME,
  password: process.env.RDBMS_PASSWORD,
  database: process.env.RDBMS_DATABASE,
  synchronize: process.env.RDBMS_SYNC === 'true',
  namingStrategy: new SnakeNamingStrategy(),
})

export { AppDataSource }
