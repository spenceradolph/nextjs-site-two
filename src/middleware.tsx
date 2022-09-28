import { withAuth } from "next-auth/middleware";

// https://nextjs.org/docs/advanced-features/middleware
// https://next-auth.js.org/configuration/nextjs#advanced-usage
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      if (!token) return false;

      return true;
    },
  },
});
