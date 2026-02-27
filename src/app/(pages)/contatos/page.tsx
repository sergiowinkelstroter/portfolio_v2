import { NavigationViewer } from "@/components/NavigationViewer";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Github, Linkedin, Mail, Phone, Pin } from "lucide-react";
import Image from "next/image";

export default function Contatos() {
  return (
    <PageContainer>
      <div className="px-4 pt-6 sm:px-8">
        <NavigationViewer data={[{ prefix: "Contatos", href: "/contatos" }]} />
      </div>
      <SectionContainer>
        <h1 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl">
          Contatos
        </h1>
        <div className="mt-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-black">
              Informações de contato
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black">Email</span>
                  <a
                    href="mailto:winksousa0@gmail.com"
                    className="text-sm text-black/70 hover:underline"
                  >
                    winksousa0@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black">Telefone</span>
                  <span className="text-sm text-black/70">(99) 99152-9825</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black">LinkedIn</span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sergio-winkelstroter/"
                    className="text-sm text-black/70 hover:underline"
                  >
                    /in/sergio-winkelstroter
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Github className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black">GitHub</span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sergiowinkelstroter"
                    className="text-sm text-black/70 hover:underline"
                  >
                    github.com/sergiowinkelstroter
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Pin className="h-5 w-5 shrink-0 text-black/60" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black">
                    Localização
                  </span>
                  <span className="text-sm text-black/70">Açailândia-MA</span>
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
