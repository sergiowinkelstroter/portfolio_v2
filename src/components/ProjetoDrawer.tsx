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
    <DrawerContent className="bg-gray-200">
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{projeto.title}</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="flex flex-col  gap-4 justify-center space-x-2">
            <div className="flex  justify-center">
              <Image
                alt=""
                src={projeto.image}
                width={150}
                height={150}
                className="rounded-lg "
              />
            </div>
            <p className="text-justify text-muted-foreground text-sm">
              {projeto.description}
            </p>
            <div className="text-sm">
              <h4>Tecnologias:</h4>
              <div className="grid grid-cols-2">
                {projeto.tecs.map((tec) => (
                  <p key={tec}>• {tec}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button asChild>
            <Link href={projeto.link} target="_blank">
              Acessar
            </Link>
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
