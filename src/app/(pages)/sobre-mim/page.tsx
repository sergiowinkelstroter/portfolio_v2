import { NavigationViewer } from "@/components/NavigationViewer";
import { NextPage } from "@/components/NextPage";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Sobre() {
  return (
    <PageContainer>
      <div className="flex w-full justify-between px-4 pt-6 sm:px-8">
        <NavigationViewer
          data={[{ prefix: "Sobre Mim", href: "/sobre-mim" }]}
        />
        <Link
          href="/skills"
          className="text-black/50 transition-smooth hover:text-black"
          aria-label="Próximo: Habilidades"
        >
          <ArrowRightCircle className="h-5 w-5" />
        </Link>
      </div>
      <SectionContainer>
        <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
          Sobre Mim
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="hidden items-center justify-center md:flex">
            <div className="flex h-48 w-48 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-6xl font-bold text-black">
              S
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-justify text-black/80 leading-relaxed">
              Desenvolvedor Full-Stack com experiência em Node.js, Express,
              React.js, Next.js, TailwindCSS e muito mais. Formado em Sistemas
              para Internet. Atualmente atuo como freelancer, criando soluções
              personalizadas desde interfaces intuitivas até back-ends
              escaláveis. Sempre em busca de novos desafios e oportunidades
              para crescer.
            </p>
            <a
              download="CV.pdf"
              href="/cv.pdf"
              className="mt-6 inline-flex w-full justify-center rounded-md border border-black/20 bg-black px-4 py-2.5 text-sm font-medium text-white transition-smooth hover:bg-black/90 sm:w-auto"
            >
              Baixar currículo
            </a>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
