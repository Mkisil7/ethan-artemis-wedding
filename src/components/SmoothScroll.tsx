"use client";

import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Disabled ReactLenis to improve layout performance and scrolling speed
  return <>{children}</>;
}
