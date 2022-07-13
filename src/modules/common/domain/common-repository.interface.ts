import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm'

export interface ICommonRepository<Entity> {
  save(
    saveDao: DeepPartial<Entity> | DeepPartial<Entity>[],
  ): Promise<(DeepPartial<Entity> & Entity)[] | (DeepPartial<Entity> & Entity)>

  findOne(options: FindOneOptions<Entity>): Promise<(DeepPartial<Entity> & Entity) | null>

  find(options: FindManyOptions<Entity>): Promise<(DeepPartial<Entity> & Entity)[]>
}
