import { createAuthClient } from "better-auth/react";
import { twoFactorClient } from "better-auth/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // TODO: Change to production URL
  plugins: [twoFactorClient()],
});

