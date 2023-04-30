import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '55349e76acf4908ff1d1',
      clientSecret: 'be4f0579983a7b02b1c02c477877b119437518c3',
    }),
  ],
  secret : 'qwer1234',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 