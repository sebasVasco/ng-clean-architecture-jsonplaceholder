import { Mapper } from '@base/index';
import { PostModel } from '@domain/models/posts.model';
import { PostEntity } from '../entities/post.entity';

export class PostImplementationRepositoryMapper extends Mapper<
  PostEntity,
  PostModel
> {
  override mapFrom(param: PostEntity): PostModel {
    return {
      id: param.id,
      title: param.title,
      body: param.body,
      userId: param.userId,
    };
  }

  override mapTo(param: PostModel): PostEntity {
    return {
      id: param.id,
      title: param.title,
      body: param.body,
      userId: param.userId,
    };
  }
}
