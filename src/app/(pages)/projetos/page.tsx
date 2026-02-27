import { NavigationViewer } from "@/components/NavigationViewer";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projetos } from "@/data/projetos";
import Image from "next/image";
import Link from "next/link";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ProjetoDrawer } from "@/components/ProjetoDrawer";
import { ArrowRightCircle } from "lucide-react";

export interface Projeto {
  title: string;
  description: string;
  link: string;
  image: string;
  tecs: string[];
  color: string;
}

export default function Servicos() {
  return (
    <PageContainer>
      <div className="flex w-full justify-between px-4 pt-6 sm:px-8">
        <NavigationViewer data={[{ prefix: "Projetos", href: "/projetos" }]} />
        <Link
          href="/contatos"
          className="text-black/50 transition-smooth hover:text-black"
          aria-label="Próximo: Contatos"
        >
          <ArrowRightCircle className="h-5 w-5" />
        </Link>
      </div>
      <SectionContainer>
        <h1 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl">
          Projetos
        </h1>
        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {projetos.map((pj) => (
            <Card
              key={pj.title}
              className="overflow-hidden border border-black/10 bg-white shadow-none transition-smooth hover:border-black/20"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  {pj.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div
                  className={`flex h-[280px] w-full max-w-[350px] items-center justify-center rounded-lg border border-black/5 ${pj.color}`}
                >
                  <Image
                    alt={pj.title}
                    src={pj.image}
                    width={280}
                    height={280}
                    className="rounded-lg object-cover"
                  />
                </div>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="w-full border border-black/20 bg-black text-white hover:bg-black/90">
                      Saiba mais
                    </Button>
                  </DrawerTrigger>
                  <ProjetoDrawer projeto={pj} />
                </Drawer>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-medium text-black/60 transition-smooth hover:text-black"
          href="https://github.com/sergiowinkelstroter"
        >
          Ver mais no GitHub →
        </Link>
      </SectionContainer>
    </PageContainer>
  );
}
