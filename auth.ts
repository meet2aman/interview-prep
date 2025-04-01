import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    Credentials({
      credentials: {
        identifier: { label: "Username | Email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const { identifier, password } = await credentials;
        console.log({ identifier, password });
        let user = null;

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash);

        if (!user) {
          throw new InvalidLoginError();
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
