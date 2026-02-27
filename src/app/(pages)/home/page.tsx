import { NavigationViewer } from "@/components/NavigationViewer";
import { NextPage } from "@/components/NextPage";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <PageContainer>
      <NavigationViewer />
      <SectionContainer>
        <div className="mb-12 mt-8 flex flex-col items-center gap-6 md:mt-16">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl">
              Olá, eu sou o{" "}
              <span className="block md:inline">Sergio Winkelstroter</span>
            </h1>
            <p className="text-lg font-medium text-black/70 md:text-xl">
              Desenvolvedor Full-stack
            </p>
          </div>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://github.com/sergiowinkelstroter"
                target="_blank"
                rel="noreferrer"
                className="text-black/50 transition-smooth hover:text-black"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sergio-winkelstroter/"
                target="_blank"
                rel="noreferrer"
                className="text-black/50 transition-smooth hover:text-black"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sergiowinkelstroter.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-black/50 transition-smooth hover:text-black"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <Link href="/skills">
            <Card className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white p-8 text-black transition-smooth hover:border-black/25 hover:shadow-sm">
              <Wrench className="h-8 w-8 text-black/70" />
              <span className="font-medium">Habilidades</span>
            </Card>
          </Link>
          <Link href="/projetos">
            <Card className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white p-8 text-black transition-smooth hover:border-black/25 hover:shadow-sm">
              <Briefcase className="h-8 w-8 text-black/70" />
              <span className="font-medium">Projetos</span>
            </Card>
          </Link>
          <Link href="/contatos">
            <Card className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white p-8 text-black transition-smooth hover:border-black/25 hover:shadow-sm">
              <Mail className="h-8 w-8 text-black/70" />
              <span className="font-medium">Contatos</span>
            </Card>
          </Link>
        </div>
      </SectionContainer>
      <NextPage next="Sobre Mim" link="/sobre-mim" />
    </PageContainer>
  );
}
