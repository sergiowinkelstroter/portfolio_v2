import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NextPage({ next, link }: { next: string; link: string }) {
  return (
    <Link
      href={link}
      className="hidden sm:flex gap-2 p-2 px-4 border border-black rounded-2xl w-[150px] absolute bottom-5 right-5"
    >
      <span>{next}</span>
      <ArrowRight />
    </Link>
  );
}
