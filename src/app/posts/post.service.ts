import { Injectable } from '@angular/core';
import {Post} from "./post/post.component";

@Injectable()
export class PostService {
  posts: Post[] = [
    {
      id: 1,
      title: 'Something',
      description: 'Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.',
      likes: 20,
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'This process is called contextual typing because the context that the function occurred within informs what type it should have.',
      likes: 30
    }
  ]
  constructor() { }
}
