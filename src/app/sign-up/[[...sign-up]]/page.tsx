import { ClerkConnection } from "~/app/components/ui/SignIn";
import { SignUpRoot, SignUpStep } from "~/app/components/ui/SignUp";

function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="bg-card text-card-foreground rounded-xl border px-8 py-4 shadow-sm">
        <SignUpRoot>
          <SignUpStep name="start">
            <h1 className="text-2xl font-semibold">Create your account</h1>
          </SignUpStep>
          <div className="mt-4 grid gap-y-2 p-2">
            <ClerkConnection name="google">Sign up with Google</ClerkConnection>
            <ClerkConnection name="apple">Sign up with Apple</ClerkConnection>
          </div>
        </SignUpRoot>
      </div>
    </main>
  );
}

export default SignUpPage;
