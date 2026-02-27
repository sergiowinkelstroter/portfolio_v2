import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative min-h-screen">
      {/* Efeito tech sutil: grid de pontos no fundo */}
      <div
        className="pointer-events-none fixed inset-0 top-0 left-0 right-0 z-0 opacity-[0.04] sm:left-44"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 0.8px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col sm:min-h-screen">
        {children}
      </div>
    </main>
  );
};
