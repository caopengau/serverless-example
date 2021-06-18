import { Collection, Db } from "mongodb";
import Container, { Service } from "typedi";

import { Post } from "./post.type";

@Service()
export class PostRepo {
  private readonly db: Db;
  private readonly collection: Collection;
  constructor() {
    this.db = Container.get("db");
    this.collection = this.db.collection("posts");
  }
  async getAll(): Promise<Post[]> {
    return await this.collection.find({}).toArray();
  }
}
