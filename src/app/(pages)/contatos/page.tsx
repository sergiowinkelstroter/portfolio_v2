import { NavigationViewer } from "@/components/NavigationViewer";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Mail, Phone, Pin } from "lucide-react";
import Image from "next/image";

import React from "react";

export default function Contatos() {
  return (
    <PageContainer>
      <NavigationViewer data={[{ prefix: "Contatos", href: "/contatos" }]} />
      <SectionContainer>
        <h1 className="text-3xl font-bold text-center">Contatos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full">
          {/* <form
            action="mailto:winksousa0@gmail.com"
            method="post"
            encType="text/plain"
            className="flex-1"
          >
            <h3 className="text-xl font-bold mb-8">Enviar uma mensagem</h3>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="text-center flex justify-end">
              <Button type="submit" className="">
                Enviar
              </Button>
            </div>
          </form> */}
          <Image
            src="/contato.png"
            alt=""
            width={800}
            height={800}
            className="hidden md:block"
          />
          <div className="flex flex-col  items-center">
            <h3 className="text-xl font-bold">Informações de contato</h3>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-2 items-center">
                <Mail className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Email</span>
                  <span className="text-sm">winksousa0@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Telefone</span>
                  <span className="text-sm">(99) 99152-9825</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <LinkedinIcon className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Linkedin</span>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sergio-winkelstroter/"
                    className="text-sm"
                  >
                    /in/sergio-winkelstroter
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <GithubIcon className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">GitHub</span>
                  <a
                    target="_blank"
                    href="https://github.com/sergiowinkelstroter"
                    className="text-sm"
                  >
                    github.com/sergiowinkelstroter
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Pin className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Localização</span>
                  <span className="text-sm">Açailândia-MA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
