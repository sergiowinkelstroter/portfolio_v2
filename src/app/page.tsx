import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skills } from "@/data/skills";
import {
  Briefcase,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Pin,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const skillsFr = skills.find((skill) => skill.title === "Front-end");
  const skillsBe = skills.find((skill) => skill.title === "Back-end");

  return (
    <PageContainer>
      {/* Hero / topo */}
      <SectionContainer id="top">
        <div className="mb-10 mt-10 flex flex-col items-center gap-6 text-center">
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl">
              Sergio Winkelstroter
            </h1>
            <p className="text-lg font-medium text-black/70 md:text-xl">
              Desenvolvedor Full-stack
            </p>
          </div>
          <p className="max-w-xl text-sm text-black/70 md:text-base">
            Sou Desenvolvedor Full-Stack na Sysga – Soluções em Tecnologia,
            atuando na criação de sistemas para cartórios e soluções internas
            que otimizam processos e aumentam a eficiência operacional.
          </p>
          {/* <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/cv.pdf"
              download="CV.pdf"
              className="rounded-md border border-black/20 bg-black px-4 py-2.5 text-sm font-medium text-white transition-smooth hover:bg-black/90"
            >
              Baixar currículo
            </a>
            <a
              href="#experiencia"
              className="rounded-md border border-black/20 bg-white px-4 py-2.5 text-sm font-medium text-black transition-smooth hover:bg-black/5"
            >
              Ver experiência
            </a>
          </div> */}
          <ul className="mt-2 flex gap-6">
            <li>
              <a
                href="https://github.com/sergiowinkelstroter"
                target="_blank"
                rel="noreferrer"
                className="text-black/50 transition-smooth hover:text-black"
                aria-label="GitHub"
              >
                <Github size={22} />
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
                <Linkedin size={22} />
              </a>
            </li>

          </ul>
        </div>
      </SectionContainer>

      {/* Sobre mim */}
      <SectionContainer id="sobre-mim" items="a">
        <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
          Sobre mim
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="hidden items-center justify-center md:flex">
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-5xl font-bold text-black">
              S
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 text-sm leading-relaxed text-black/80 md:text-base">
            <p>
              Sou formado em Sistemas para Internet e trabalho como
              Desenvolvedor Full-Stack na Sysga – Soluções em Tecnologia,
              utilizando principalmente Node.js, TypeScript, Next.js e
              PostgreSQL para construir aplicações bem estruturadas, seguras e
              escaláveis.
            </p>
            <p>
              Antes da atuação atual, tive um período intenso de estudos e
              graduação em desenvolvimento web e atuei como freelancer,
              entregando soluções completas para pequenos negócios. Gosto de
              transformar necessidades reais em sistemas organizados e
              funcionais, com interfaces simples e foco em clareza e
              manutenção.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Habilidades */}
      <SectionContainer id="skills" items="a">
        <h2 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl">
          Habilidades
        </h2>
        <Tabs defaultValue="front-end" className="mt-4 w-full">
          <div className="flex justify-end">
            <TabsList className="border border-black/10 bg-white">
              <TabsTrigger
                value="front-end"
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Front-end
              </TabsTrigger>
              <TabsTrigger
                value="back-end"
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Back-end
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="front-end" className="pt-4">
            <Card className="border-black/10 bg-white shadow-none">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  Front-end
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {skillsFr?.items.map((skill) => (
                  <Card
                    key={skill.title}
                    className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white py-6 text-black transition-smooth hover:border-black/20"
                  >
                    <skill.icon className="h-8 w-8 text-black/70" />
                    <span className="text-sm font-medium">{skill.title}</span>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="back-end" className="pt-4">
            <Card className="border-black/10 bg-white shadow-none">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  Back-end
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {skillsBe?.items.map((skill) => (
                  <Card
                    key={skill.title}
                    className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white py-6 text-black transition-smooth hover:border-black/20"
                  >
                    <skill.icon className="h-8 w-8 text-black/70" />
                    <span className="text-sm font-medium">{skill.title}</span>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SectionContainer>

      {/* Experiência rápida em cards (opcional simples) */}
      <SectionContainer items="a">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="flex flex-col items-start gap-2 border border-black/10 bg-white p-6 text-black">
            <Wrench className="mb-1 h-5 w-5 text-black/70" />
            <h3 className="text-sm font-semibold">Stack principal</h3>
            <p className="text-xs text-black/70">
              React, Next.js, Node.js, TypeScript, TailwindCSS.
            </p>
          </Card>
          <Card className="flex flex-col items-start gap-2 border border-black/10 bg-white p-6 text-black">
            <Briefcase className="mb-1 h-5 w-5 text-black/70" />
            <h3 className="text-sm font-semibold">Experiência</h3>
            <p className="text-xs text-black/70">
              Projetos completos para web, do design ao deploy em produção.
            </p>
          </Card>
          <Card className="flex flex-col items-start gap-2 border border-black/10 bg-white p-6 text-black">
            <Mail className="mb-1 h-5 w-5 text-black/70" />
            <h3 className="text-sm font-semibold">Disponibilidade</h3>
            <p className="text-xs text-black/70">
              Aberto a novas oportunidades (freelancer ou remoto).
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Experiência */}
      <SectionContainer id="experiencia" items="a">
        <h2 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl">
          Experiência
        </h2>
        <div className="mt-8 space-y-6 border-l border-black/10 pl-7 text-sm text-black/80 md:text-base">
          <div className="relative">
            <div className="absolute -left-[17px] top-2 h-3 w-3 rounded-full border border-black/40 bg-white" />
            <p className="text-xs font-medium uppercase tracking-wide text-black/60">
              jan/2022 — jun/2024
            </p>
            <h3 className="mt-1 text-sm font-semibold text-black">
              Graduação & estudos em desenvolvimento
            </h3>
            <p className="mt-1 text-sm text-black/75">
              Período focado em formação em Sistemas para Internet e estudo
              intenso de desenvolvimento web, construindo bases sólidas em
              programação, front-end e back-end.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[17px] top-2 h-3 w-3 rounded-full border border-black/40 bg-white" />
            <p className="text-xs font-medium uppercase tracking-wide text-black/60">
              jul/2024 — dez/2024
            </p>
            <h3 className="mt-1 text-sm font-semibold text-black">
              Freelancer em desenvolvimento web
            </h3>
            <p className="mt-1 text-sm text-black/75">
              Atuação como freelancer, desenvolvendo aplicações web completas
              para pequenos negócios e clientes independentes, do layout ao
              backend e deploy.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[17px] top-2 h-3 w-3 rounded-full border border-black/40 bg-white" />
            <p className="text-xs font-medium uppercase tracking-wide text-black/60">
              jan/2025 — atual
            </p>
            <h3 className="mt-1 text-sm font-semibold text-black">
              Desenvolvedor Full-stack · Sysga - Soluções em Tecnologia
            </h3>
            <p className="mt-1 text-sm text-black/75">
              Atuação como desenvolvedor Full-stack na Sysga, participando do
              desenvolvimento de soluções em tecnologia com foco em qualidade de
              código, boa arquitetura e entrega contínua de valor para os
              clientes.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Contatos */}
      <SectionContainer id="contatos">
        <h2 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl">
          Contatos
        </h2>
        <div className="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-black">
              Informações de contato
            </h3>
            <ul className="mt-6 flex flex-col gap-5 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">Email</span>
                  <a
                    href="mailto:winksousa0@gmail.com"
                    className="text-black/70 hover:underline"
                  >
                    winksousa0@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">Telefone</span>
                  <span className="text-black/70">(99) 99152-9825</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">LinkedIn</span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sergio-winkelstroter/"
                    className="text-black/70 hover:underline"
                  >
                    /in/sergio-winkelstroter
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Github className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">GitHub</span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sergiowinkelstroter"
                    className="text-black/70 hover:underline"
                  >
                    github.com/sergiowinkelstroter
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Pin className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">Localização</span>
                  <span className="text-black/70">Açailândia-MA</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center md:flex">
            <Image
              src="/contato.png"
              alt=""
              width={400}
              height={400}
              className="rounded-lg border border-black/5 object-cover"
            />
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
