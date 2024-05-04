"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/">
        <h1 className="text-2xl font-semibold">Clerk Elements Demo</h1>
      </Link>
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <div>
          <SignedOut>
            <div className="flex items-center gap-x-4">
              <SignInButton />
              <SignUpButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
