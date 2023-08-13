import { FC, ReactNode } from "react";

interface AuthlayoutProps {
  children: ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Authlayout;
