import { Projeto } from "@/app/(pages)/projetos/page";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface DrawerContentProps {
  projeto: Projeto;
}

export function ProjetoDrawer({ projeto }: DrawerContentProps) {
  return (
    <DrawerContent className="border-t border-black/10 bg-white">
      <div className="mx-auto w-full md:max-w-xl xl:max-w-2xl">
        <DrawerHeader>
          <DrawerTitle className="text-black">{projeto.title}</DrawerTitle>
          <DrawerDescription className="text-black/70">
            Detalhes do projeto
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 p-4 pb-0">
          <div className="flex justify-center">
            <div
              className={`flex h-[150px] w-[150px] items-center justify-center rounded-lg border border-black/5 ${projeto.color}`}
            >
              <Image
                alt={projeto.title}
                src={projeto.image}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <p className="text-justify text-sm leading-relaxed text-black/80">
            {projeto.description}
          </p>
          <div className="text-sm">
            <h4 className="font-medium text-black">Tecnologias</h4>
            <ul className="mt-1 grid grid-cols-2 gap-0.5 text-black/70">
              {projeto.tecs.map((tec) => (
                <li key={tec}>• {tec}</li>
              ))}
            </ul>
          </div>
        </div>
        <DrawerFooter className="gap-2 border-t border-black/10 pt-4">
          <Button asChild className="bg-black text-white hover:bg-black/90">
            <Link href={projeto.link} target="_blank" rel="noreferrer">
              Acessar projeto
            </Link>
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="border-black/20 bg-white text-black hover:bg-black/5"
            >
              Fechar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
