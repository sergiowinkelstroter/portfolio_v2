import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  items?: string;
  id?: string;
};

export const SectionContainer = ({ children, items, id }: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`mx-auto mt-8 w-full max-w-6xl flex-1 px-4 pb-12 sm:px-8 ${
        items ? "" : "flex flex-col items-center"
      }`}
    >
      {children}
    </section>
  );
};
