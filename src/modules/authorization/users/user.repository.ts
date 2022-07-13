import { Injectable } from '@nestjs/common'
import { EntityManager, Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UserRepository {
  private _repo: Repository<User>

  constructor(entityManager: EntityManager, transactionalManager: EntityManager) {
    if (transactionalManager) {
      entityManager = transactionalManager
    }
    this._repo = entityManager.getRepository(User)
  }

  save(saveDao) {
    return this._repo.save(saveDao)
  }
}
