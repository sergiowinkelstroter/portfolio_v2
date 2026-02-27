"use client";

import Link from "next/link";
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
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";

const sections = [
  { id: "top", label: "Início", icon: Home },
  { id: "sobre-mim", label: "Sobre mim", icon: User },
  { id: "skills", label: "Habilidades", icon: Wrench },
  { id: "experiencia", label: "Experiência", icon: Briefcase },
  { id: "contatos", label: "Contatos", icon: Mail },
];

const navLinkClass =
  "flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium transition-smooth rounded-md text-black/70 hover:text-black hover:bg-black/5";

export const Header = () => {
  return (
    <>
      {/* Sidebar desktop: minimalista, borda fina */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-44 flex-col border-r border-black/10 bg-white sm:flex">
        <nav className="flex flex-col gap-0.5 px-3 py-6">
          <Link
            href="/#top"
            className="mb-6 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-black text-sm font-semibold text-white transition-smooth hover:opacity-90"
            aria-label="Início"
          >
            S
          </Link>
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/#${section.id}`}
              className={navLinkClass}
            >
              <section.icon className="h-4 w-4 shrink-0 opacity-80" />
              <span>{section.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex justify-center gap-5 border-t border-black/10 px-3 py-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sergiowinkelstroter"
            className="text-black/50 transition-smooth hover:text-black"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sergio-winkelstroter/"
            className="text-black/50 transition-smooth hover:text-black"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

        </div>
      </aside>

      {/* Top bar mobile */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-black/10 bg-white px-4 sm:hidden">
        <Link
          href="/#top"
          className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-sm font-semibold text-white"
          aria-label="Início"
        >
          S
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 border-black/20 bg-white text-black hover:bg-black/5"
            >
              <PanelRight className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-black/10 bg-white">
            <nav className="mt-8 flex flex-col gap-0.5">
              {sections.map((section) => (
                <SheetClose asChild key={section.id}>
                  <Link
                    href={`/#${section.id}`}
                    className={navLinkClass}
                  >
                    <section.icon className="h-4 w-4 shrink-0 opacity-80" />
                    {section.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex gap-5 border-t border-black/10 pt-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sergiowinkelstroter"
                className="text-black/50 hover:text-black"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sergio-winkelstroter/"
                className="text-black/50 hover:text-black"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/sergiowinkelstroter.dev/"
                className="text-black/50 hover:text-black"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};
