import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from '@/app/libs/connectDb'
import User from '@/app/models/user';
export const authOptions = ({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          console.log(credentials.address);
          await connectMongoDB();
          const user = await User.findOne({ blockchainAddress: credentials.address });
          const isVerified = user.blockchainAddress == credentials.address;
          console.log(isVerified);
          console.log(user);
          // If user exists, return user object
          if (!user) {
            return null;
          }


          if (!isVerified) {
            return null;

          }else{
          return user;
          }

        } catch (error) {
          // Handle any database or other errors
          console.error('Error during authorization:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async jwt(token, user) {
  //     console.log(token);
  //     console.log(user);
  //     // Set user info in the token
  //     // token.id = user.blockchainAddress;
  //     console.log("updated token :", token);
  //     // if (user) {
  //     //   token.id = user.blockchainAddress;
  //     //   // console.log(user); // Fixed typo: +token -> console.log(token)
  //     // }
  //     return token;
  //   },
  //   async session(session, token) {
  //     // Set session info from token
  //     console.log(token);
  //     // session.user.id = token.id;
  //     console.log(session);
  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET, // Your secret should be set in your environment variables
  pages: {
    signIn: '/login', // Customize the sign-in page route as needed
  }
})

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
