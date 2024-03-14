import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/beamsaber',
  },
  providers: [],
} satisfies NextAuthConfig;