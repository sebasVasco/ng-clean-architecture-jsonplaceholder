import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostRepository } from '@domain/repositories/post.repository';
import { GetPostsUseCase } from '@domain/usecases/post/get-posts-usecase';
import { PostImplementationRepository } from '@data/repositories/post/implementations/post-implementation.repository';

const getPostsUseCaseFactory = (postRepository: PostRepository) =>
  new GetPostsUseCase(postRepository);
export const getPostsUseCaseProvider: Provider = {
  provide: GetPostsUseCase,
  useFactory: getPostsUseCaseFactory,
  deps: [PostRepository],
};

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    getPostsUseCaseProvider,
    {
      provide: PostRepository,
      useClass: PostImplementationRepository,
    },
  ],
})
export class DataModule {}
