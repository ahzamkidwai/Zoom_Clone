import { authMiddleware } from "@clerk/nextjs";

const protectedRoutes = [
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)",
];

export default authMiddleware({});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all routes except static files and next.js specific routes
    ...protectedRoutes, // Add protected routes
    "/(api|trpc)(.*)", // Match API routes
  ],
};
