import {
  ClerkConnection,
  SignInRoot,
  SignInStep,
} from "~/app/components/ui/SignIn";

function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="bg-card text-card-foreground rounded-xl border px-8 py-4 shadow-sm">
        <SignInRoot>
          <SignInStep name="start">
            <h1 className="text-2xl font-semibold">Sign in to your account</h1>
          </SignInStep>
          <div className="mt-4 grid gap-y-2 p-2">
            <ClerkConnection name="google">Sign in with Google</ClerkConnection>
            <ClerkConnection name="apple">Sign in with Apple</ClerkConnection>
          </div>
        </SignInRoot>
      </div>
    </main>
  );
}

export default SignInPage;
