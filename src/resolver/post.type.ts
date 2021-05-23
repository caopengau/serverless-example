import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
