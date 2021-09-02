import {Post} from "./post/post.component";

export class PostModel implements Post{
  description: string;
  id: number;
  likes: number;
  title: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.id = Math.random();
    this.likes = 0;
  }
}
