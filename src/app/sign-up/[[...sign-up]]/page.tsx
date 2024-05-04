import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <SignUp path="/sign-up" />
    </main>
  );
}

export default SignUpPage;
