import { Client, Account, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Tera Appwrite endpoint (region specific)
  .setProject("681158bd002c5353d573");              // Tera Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const DB_ID = "682833fa00141eb60122";
export const COLLECTION_ID = "682c9f4d0031798ddd51"; //user_student
export { ID };


