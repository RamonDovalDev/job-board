import React, { ReactNode } from "react";

const ClerkLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

export default ClerkLayout;
