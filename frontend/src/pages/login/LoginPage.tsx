import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@asgardeo/react";

export default function LoginPage() {
  return (
    <>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
