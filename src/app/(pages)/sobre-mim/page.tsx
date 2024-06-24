import { NavigationViewer } from "@/components/NavigationViewer";
import { NextPage } from "@/components/NextPage";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Sobre() {
  return (
    <PageContainer>
      <div className="flex justify-between w-full">
        <NavigationViewer
          data={[{ prefix: "Sobre Mim", href: "/sobre-mim" }]}
        />
        <Link href={"/skills"} className="md:hidden">
          <ArrowRightCircle className="" />
        </Link>
      </div>
      <SectionContainer>
        <h1 className="text-3xl font-bold">Sobre Mim</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="hidden md:flex justify-center items-center">
            <div className=" group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-72 md:w-72 md:text-base">
              <span className="text-[100px] font-bold">S</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-justify">
              Desenvolvedor Full-Stack com experiência em Node.js, React.js,
              Next.js e TailwindCSS, cursando Sistemas para Internet. Atuo como
              freelancer, criando soluções personalizadas desde interfaces
              intuitivas até back-ends escaláveis. Sempre em busca de novos
              desafios e oportunidades para crescer.
            </p>
            <p className="text-justify mt-4">
              Ao longo da minha jornada como freelancer, desenvolvi uma forte
              compreensão das melhores práticas de desenvolvimento e um olhar
              atento para design. Trabalho constantemente para entregar projetos
              que não apenas atendam, mas superem as expectativas dos meus
              clientes, independentemente do tamanho ou escopo do projeto.
            </p>
            <p className="text-justify mt-4">
              Valorizo a comunicação clara e eficaz, acreditando que a
              colaboração próxima com clientes é essencial para o sucesso de
              qualquer projeto. Estou sempre em busca de novos desafios e
              oportunidades para crescer, tanto profissionalmente quanto
              pessoalmente, mantendo-me atualizado com as últimas tendências e
              tecnologias do setor.
            </p>
          </div>
        </div>
      </SectionContainer>
      <NextPage next="Habilidades" link={"/skills"} />
    </PageContainer>
  );
}
