import { authClient } from "./auth-client";

const { data } = await authClient.twoFactor.disable({
  password: "password",
  // issuer: "Clausify",
});

console.log(data);
