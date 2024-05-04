"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { twc } from "~/lib/utils";

export const SignInRoot = twc(SignIn.Root)``;
export const SignInStep = twc(SignIn.Step)``;
export const ClerkConnection = twc(
  Clerk.Connection,
)`inline-flex items-center justify-center  
whitespace-nowrap rounded-md 
text-sm font-medium 
ring-offset-background transition-colors 
focus-visible:outline-none focus-visible:ring-2 
focus-visible:ring-ring focus-visible:ring-offset-2 
disabled:pointer-events-none disabled:opacity-50 
bg-primary text-primary-foreground hover:bg-primary/90 
h-10 px-4 py-2`;
