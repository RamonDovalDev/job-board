"use client";

import React, { ReactNode } from "react";
import { ClerkProvider as OrginalClerkProvider } from "@clerk/nextjs";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";
import { dark } from "@clerk/ui/themes";

const ClerkProvider = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useIsDarkMode();

  return (
    <OrginalClerkProvider appearance={isDarkMode ? { theme: dark } : undefined}>
      {children}
    </OrginalClerkProvider>
  );
};

export default ClerkProvider;
