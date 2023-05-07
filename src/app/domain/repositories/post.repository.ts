import { Observable } from 'rxjs';
import { PostModel } from '../models/posts.model';

export abstract class PostRepository {
  abstract get(): Observable<PostModel[]>;
}
