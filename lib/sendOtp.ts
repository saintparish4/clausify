import { authClient } from "./auth-client";

const { data, error } = await authClient.twoFactor.sendOtp()
if (data) {
    // redirect or show the user to enter the code
}

console.log(data, error);