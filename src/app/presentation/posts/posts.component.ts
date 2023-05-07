import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPostsUseCase } from '@domain/usecases/post/get-posts-usecase';
import { PostModel } from '@domain/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$!: Observable<PostModel[]>;
  constructor(private getPostsUseCase: GetPostsUseCase) {}

  ngOnInit(): void {
    this.posts$ = this.getPostsUseCase.execute();
  }
}
