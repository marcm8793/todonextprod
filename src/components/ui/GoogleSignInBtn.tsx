import React, { FC } from "react";
import { signIn } from "next-auth/react";
import { GoogleLoginButton } from "react-social-login-buttons";

interface GoogleSignInBtnProps {
  children: React.ReactNode;
}

const GoogleSignInBtn: FC<GoogleSignInBtnProps> = ({ children }) => {
  const loginWithGoogle = () => {
    signIn("google");
  };

  return (
    <GoogleLoginButton className="w-full" onClick={loginWithGoogle} type="dark">
      {children}
    </GoogleLoginButton>
  );
};

export default GoogleSignInBtn;
