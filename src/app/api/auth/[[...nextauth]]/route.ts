import NextAuth from "next-auth/next";
import { AuthOptions } from "@/lib/auth";

const AuthHandler = NextAuth(AuthOptions)

export { AuthHandler as GET , AuthHandler as POST }