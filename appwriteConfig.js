import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite Cloud endpoint
  .setProject('YOUR_PROJECT_ID'); // Replace with your actual Project ID

export const account = new Account(client);
