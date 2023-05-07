import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostEntity } from '../entities/post.entity';
import { PostImplementationRepositoryMapper } from '../mappers/post-repository.mapper';
import { PostRepository } from '@domain/repositories/post.repository';
import { PostModel } from '@domain/models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostImplementationRepository extends PostRepository {
  JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';
  postMapper = new PostImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  override get(): Observable<PostModel[]> {
    return this.http.get<PostEntity[]>(this.JSON_PLACEHOLDER_URL);
  }
}
