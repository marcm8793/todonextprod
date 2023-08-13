import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    name: string;
  }
  interface Session {
    user: User & {
      /** The user's postal address. */
      name: string;
    };
    token: {
      name: string;
    };
  }
}
