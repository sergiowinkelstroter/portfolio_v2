import { NavigationViewer } from "@/components/NavigationViewer";
import { NextPage } from "@/components/NextPage";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/data/skills";
import { TabsContent } from "@radix-ui/react-tabs";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  const skills_fr = skills.find((skill) => skill.title === "Front-end");

  const skills_be = skills.find((skill) => {
    return skill.title === "Back-end";
  });

  return (
    <PageContainer>
      <div className="flex justify-between w-full">
        <NavigationViewer data={[{ prefix: "Habilidades", href: "/skills" }]} />
        <Link href={"/projetos"} className="">
          <ArrowRightCircle className="" />
        </Link>
      </div>
      <SectionContainer items="a">
        <h1 className="text-3xl font-bold text-center">Habilidades</h1>

        <Tabs defaultValue="front-end" className="w-full">
          <div className="flex justify-end">
            <TabsList className="mt-4 sm:mt-0">
              <TabsTrigger value="front-end">Front-end</TabsTrigger>
              <TabsTrigger value="back-end">Back-end</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="front-end" className="pt-2">
            <Card>
              <CardHeader>
                <CardTitle>Front-end</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {skills_fr &&
                  skills_fr.items.map((skill) => (
                    <Card
                      className="bg-foreground text-white flex flex-col items-center justify-center py-8 rounded-xl gap-3"
                      key={skill.title}
                    >
                      <skill.icon className="h-10 w-10" />
                      <span>{skill.title}</span>
                    </Card>
                  ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="back-end" className="pt-2">
            <Card>
              <CardHeader>
                <CardTitle>Back-end</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {skills_be &&
                  skills_be.items.map((skill) => (
                    <Card
                      className="bg-foreground text-white flex flex-col items-center justify-center py-8 rounded-xl gap-3"
                      key={skill.title}
                    >
                      <skill.icon className="h-10 w-10" />
                      {skill.title}
                    </Card>
                  ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SectionContainer>
      {/* <NextPage next="Serviços" link={"/projetos"} /> */}
    </PageContainer>
  );
}
