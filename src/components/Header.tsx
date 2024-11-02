"use client";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  Briefcase,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  PanelRight,
  User,
  Wrench,
} from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "sobre-mim", label: "Sobre Mim", icon: User },
  { id: "skills", label: "Habilidades", icon: Wrench },
  { id: "projetos", label: "Projetos", icon: Briefcase },
  { id: "contatos", label: "Contatos", icon: Mail },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-40 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-6 px-2 sm:py-5">
          <Link
            href="home"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-10 md:w-10 md:text-base"
          >
            <span className="">S</span>
          </Link>
          <div className="flex flex-col gap-2 items-start">
            {sections.map((section) => (
              <Tooltip key={section.id}>
                <TooltipTrigger asChild>
                  <Link
                    href={`${section.id}`}
                    className={`flex justify-start items-center gap-2 p-2 w-full rounded-lg transition-colors   ${
                      pathname === `/${section.id}`
                        ? "bg-foreground text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <section.icon className="h-5 w-5" />
                    <span className="">{section.label}</span>
                  </Link>
                </TooltipTrigger>
                {/* <TooltipContent side="right">{section.label}</TooltipContent> */}
              </Tooltip>
            ))}
          </div>
        </nav>
        <div className="flex justify-center gap-4 absolute bottom-4 left-1/2 -translate-x-1/2">
          <Link target="_blank" href="https://github.com/sergiowinkelstroter">
            <Github className="w-4 h-4 text-muted-foreground" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/sergio-winkelstroter/"
          >
            <Linkedin className="w-4 h-4 text-muted-foreground" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/sergiowinkelstroter.dev/"
          >
            <Instagram className="w-4 h-4 text-muted-foreground" />
          </Link>
        </div>
      </aside>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 justify-between">
        <Link
          href="home"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <span className="">S</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelRight className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-xs">
            <SheetClose />
            <nav className="grid gap-6 text-lg font-medium">
              {sections.map((section) => (
                <SheetClose key={section.id} asChild>
                  <Link
                    href={`${section.id}`}
                    className={`flex items-center gap-4 px-2.5 ${
                      pathname === `/${section.id}`
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <section.icon className="h-5 w-5" />
                    {section.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};
