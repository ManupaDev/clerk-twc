import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen"> 
      <SignIn path="/sign-in" />
    </main>
  );
}

export default SignInPage;
