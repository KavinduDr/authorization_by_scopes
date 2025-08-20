import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserProfile,
} from "@asgardeo/react";

export default function SignupPage() {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <div>You are already signed in.</div>
        <UserProfile />
      </SignedIn>
    </div>
  );
}
