import { Observable } from 'rxjs';
import { UseCase } from '@domain/base/use-case';
import { PostModel } from '@domain/models/posts.model';
import { PostRepository } from '@domain/repositories/post.repository';

export class GetPostsUseCase implements UseCase<any, PostModel[]> {
  constructor(private postRepository: PostRepository) {}

  execute(): Observable<PostModel[]> {
    return this.postRepository.get();
  }
}
