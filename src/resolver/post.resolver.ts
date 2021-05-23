import { Query, Resolver } from "type-graphql";
import { Post } from "./post.type";

@Resolver(Post)
export class PostResolver {
  @Query(() => [Post])
  posts(): Post[] {
    return [{ id: "1", title: "Awesome Post" }];
  }
}
