import { NextAuthOptions } from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./db"

export const AuthOptions : NextAuthOptions = {
    adapter : MongoDBAdapter(clientPromise),
    session : {
        strategy : "jwt"
    },
    providers : [
        LinkedInProvider({
            clientId :  process.env.LINKEDIN_CLIENT_ID ?? "",
            clientSecret : process.env.LINKEDIN_CLIENT_SECRET ?? ""
        })
    ],
    debug : process.env.NODE_ENV === "development"
}