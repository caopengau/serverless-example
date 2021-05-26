import Container, { Service } from "typedi";
import { PostRepo } from "./post.repo";
import { Post } from "./post.type";

@Service()
export class PostService {
  constructor(private readonly postRepo: PostRepo) {
    this.postRepo = Container.get(PostRepo);
  }
  async getAll(): Promise<Post[]> {
    return await this.postRepo.getAll();
  }
}
