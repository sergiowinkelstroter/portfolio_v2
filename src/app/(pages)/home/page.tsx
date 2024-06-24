import { NavigationViewer } from "@/components/NavigationViewer";
import { NextPage } from "@/components/NextPage";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/ui/card";
import { Briefcase, Github, Linkedin, Mail, Wrench } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <PageContainer>
      <NavigationViewer />
      <SectionContainer>
        <div className="mb-16 mt-6 md:mt-16 flex flex-col gap-2 justify-center items-center">
          <div className="text-center">
            <h1 className="mb-1 font-extrabold text-3xl  md:text-6xl">
              Olá, eu <br className="block md:hidden" />
              <span>sou o Sergio Winkelstroter 👋</span>
            </h1>
            <div className="text-lg font-semibold md:text-3xl">
              Desenvolvedor <span className="text-blue-600">Full-stack</span>
            </div>
          </div>
          <div className="">
            <ul className="flex gap-4 container">
              <li className="">
                <a
                  href="https://github.com/sergiowinkelstroter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={28} />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/sergio-winkelstroter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link href={"/skills"}>
            <Card className="flex flex-col items-center justify-center p-8 bg-foreground text-white hover:scale-110 ease-in duration-300 hover:cursor-pointer">
              <Wrench />
              <span>Habilidades</span>
            </Card>
          </Link>
          <Link href={"/projetos"}>
            <Card className="flex flex-col items-center justify-center p-8 bg-foreground text-white hover:scale-110 ease-in duration-300 hover:cursor-pointer">
              <Briefcase />
              <span>Projetos</span>
            </Card>
          </Link>
          <Link href={"/contatos"}>
            <Card className="flex flex-col items-center justify-center p-8 bg-foreground text-white hover:scale-110 ease-in duration-300 hover:cursor-pointer">
              <Mail />
              <span>Contatos</span>
            </Card>
          </Link>
        </div>
      </SectionContainer>
      <NextPage next="Sobre Mim" link={"/sobre-mim"} />
    </PageContainer>
  );
}
