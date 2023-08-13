import React, { FC } from "react";
import { signIn } from "next-auth/react";
import { GithubLoginButton } from "react-social-login-buttons";

interface GithubSignInBtnProps {
  children: React.ReactNode;
}

const GithubSignInBtn: FC<GithubSignInBtnProps> = ({ children }) => {
  const loginWithGithub = () => {
    signIn("github");
  };

  return (
    <GithubLoginButton className="w-full" onClick={loginWithGithub} type="dark">
      {children}
    </GithubLoginButton>
  );
};

export default GithubSignInBtn;
