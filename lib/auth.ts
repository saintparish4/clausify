import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { twoFactor } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
    maxPasswordLength: 20,
  },
  plugins: [
    twoFactor({
      otpOptions: {
        async sendOTP({ user, otp }, request) {
          // TODO: Implement OTP sending logic
          // Example: Send email, SMS, or push notification

          // Using console.log to remove the linter erros 
          console.log(`Sending OTP ${otp} to user ${user.email}`);
          console.log(request);
          
          // You would typically implement something like:
          // await sendEmail({
          //   to: user.email,
          //   subject: "Your verification code",
          //   text: `Your verification code is: ${otp}`
          // });
        },
      },
    }),
  ],

  // Trusted Origins
  trustedOrigins: ["http://localhost:3001"], // TODO: Change to production URL

  // Session Configuration
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 1 day
  },

  // User Configuration
  user: {
    additionalFields: {
      // Add any additional fields here that is needed!!!
    },
  },
});
