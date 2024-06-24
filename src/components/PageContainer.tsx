import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex  m-4 sm:-0 flex-col sm:ml-48">{children}</div>;
};
