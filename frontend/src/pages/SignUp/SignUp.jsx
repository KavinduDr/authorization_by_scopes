import { SignedOut, SignUpButton } from "@asgardeo/react";

const SignUp = () => (
  <div className="page-container">
    <SignedOut>
      <SignUpButton>Sign Up</SignUpButton>
    </SignedOut>
  </div>
);

export default SignUp;
