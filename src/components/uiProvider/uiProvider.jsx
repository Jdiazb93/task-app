"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function UiProvider({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
