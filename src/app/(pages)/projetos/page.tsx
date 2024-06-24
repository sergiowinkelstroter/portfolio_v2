import { NavigationViewer } from "@/components/NavigationViewer";
import { NextPage } from "@/components/NextPage";
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
}

export default function Servicos() {
  return (
    <PageContainer>
      <div className="flex justify-between w-full">
        <NavigationViewer data={[{ prefix: "Projetos", href: "/projetos" }]} />
        <Link href={"/contatos"} className="">
          <ArrowRightCircle className="" />
        </Link>
      </div>

      <SectionContainer>
        <h1 className="text-3xl font-bold text-center">Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
          {projetos.map((pj) => (
            <Card key={pj.title}>
              <CardHeader>
                <CardTitle>{pj.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 items-center">
                <Image
                  alt=""
                  src={pj.image}
                  width={350}
                  height={350}
                  className="rounded-lg"
                />
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="w-full">Saiba mais</Button>
                  </DrawerTrigger>
                  <ProjetoDrawer projeto={pj} />
                </Drawer>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link
          target="_blank"
          className="mt-4 text-muted-foreground hover:text-foreground transition-colors"
          href="https://github.com/sergiowinkelstroter"
        >
          Ver mais
        </Link>
      </SectionContainer>
      {/* <NextPage next="Contatos" link={"/contatos"} /> */}
    </PageContainer>
  );
}
