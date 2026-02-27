import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NextPage({ next, link }: { next: string; link: string }) {
  return (
    <Link
      href={link}
      className="absolute bottom-6 right-6 hidden gap-2 rounded-md border border-black/20 bg-white px-4 py-2 text-sm font-medium text-black transition-smooth hover:border-black/40 hover:bg-black/5 sm:flex"
    >
      <span>{next}</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
