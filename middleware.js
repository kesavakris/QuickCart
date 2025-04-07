import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Exclude static files and internal paths
    "/(api|trpc)(.*)",
  ],
};
