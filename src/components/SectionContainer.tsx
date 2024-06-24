import { ReactNode } from "react";

export const SectionContainer = ({
  children,
  items,
}: {
  children: ReactNode;
  items?: string;
}) => {
  return (
    <div
      className={`max-w-[1240px] w-full h-full mx-auto mt-10 md:mt-16 flex flex-col justify-center ${
        items ? "" : "items-center"
      }`}
    >
      {children}
    </div>
  );
};
