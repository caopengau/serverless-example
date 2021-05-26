import { MongoClient } from "mongodb";
import { Container } from "typedi";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const contextDb = async (context: unknown) => {
  try {
    Container.get("db");
  } catch (error) {
    const mongoClient = new MongoClient("mongodb://localhost:27777/devdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await mongoClient.connect();
    Container.set("db", mongoClient.db());
  }
  return context;
};
