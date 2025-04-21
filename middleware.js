 import { authMiddleware } from "@clerk/nextjs";

 export default authMiddleware();

 export const config = {
   matcher: [
     "/((?!_next|.*\\..*).*)", // Exclude static files and internal paths
    "/(api|trpc)(.*)",
   ],
 };


