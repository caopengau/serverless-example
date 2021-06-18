import { Query, Resolver } from "type-graphql";
import Container, { Service } from "typedi";

import { PostService } from "./post.service";
import { Post } from "./post.type";

@Resolver(Post)
@Service()
export class PostResolver {
  constructor(private readonly postService: PostService) {
    this.postService = Container.get(PostService);
  }
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return await this.postService.getAll();
  }
}
