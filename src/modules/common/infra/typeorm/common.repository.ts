import { DeepPartial, EntityManager, FindManyOptions, FindOneOptions, Repository } from 'typeorm'
import { Inject, Type } from '@nestjs/common'

import { ICommonRepository } from '../../domain/common-repository.interface'

export function CommonRepository<Entity>(entityCtr: any): Type<ICommonRepository<Entity>> {
  class CommonRepository implements ICommonRepository<Entity> {
    private _repo: Repository<Entity>

    constructor(@Inject(EntityManager) entityManager: EntityManager) {
      this._repo = entityManager.getRepository(entityCtr)
    }

    save(saveDao: DeepPartial<Entity> | DeepPartial<Entity>[]): Promise<(DeepPartial<Entity> & Entity)[]> {
      return this._repo.save(saveDao as any)
    }

    findOne(options: FindOneOptions<Entity>) {
      return this._repo.findOne(options)
    }

    find(options: FindManyOptions<Entity>) {
      return this._repo.find(options)
    }
  }

  return CommonRepository
}
