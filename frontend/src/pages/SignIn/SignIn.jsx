import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserDropdown,
  UserProfile,
} from "@asgardeo/react";

const SignIn = () => (
  <div className="page-container">
    <SignedOut>
      <SignInButton>Sign In</SignInButton>
    </SignedOut>
    <SignedIn>
      <UserDropdown />
      <UserProfile />
    </SignedIn>
  </div>
);

export default SignIn;
