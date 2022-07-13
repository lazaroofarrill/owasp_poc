import { DeepPartial, EntityManager, Repository } from 'typeorm'
import { Type } from '@nestjs/common'

export interface ICommonRepository<Entity> {
  save(saveDao: DeepPartial<Entity> | DeepPartial<Entity>[]): Promise<(DeepPartial<Entity> & Entity)[]>
}

export function CommonRepository<Entity>(entityCtr: any): Type<ICommonRepository<Entity>> {
  class CommonRepository implements ICommonRepository<Entity> {
    private _repo: Repository<Entity>

    constructor(entityManager: EntityManager, transactionalManager: EntityManager) {
      if (transactionalManager) {
        entityManager = transactionalManager
      }
      this._repo = entityManager.getRepository(entityCtr)
    }

    save(saveDao: DeepPartial<Entity> | DeepPartial<Entity>[]): Promise<(DeepPartial<Entity> & Entity)[]> {
      return this._repo.save(saveDao as any)
    }
  }

  return CommonRepository
}
