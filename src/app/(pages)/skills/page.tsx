import { NavigationViewer } from "@/components/NavigationViewer";
import { PageContainer } from "@/components/PageContainer";
import { SectionContainer } from "@/components/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/data/skills";
import { TabsContent } from "@radix-ui/react-tabs";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Skills() {
  const skillsFr = skills.find((skill) => skill.title === "Front-end");
  const skillsBe = skills.find((skill) => skill.title === "Back-end");

  return (
    <PageContainer>
      <div className="flex w-full justify-between px-4 pt-6 sm:px-8">
        <NavigationViewer data={[{ prefix: "Habilidades", href: "/skills" }]} />
        <Link
          href="/projetos"
          className="text-black/50 transition-smooth hover:text-black"
          aria-label="Próximo: Projetos"
        >
          <ArrowRightCircle className="h-5 w-5" />
        </Link>
      </div>
      <SectionContainer items="a">
        <h1 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl">
          Habilidades
        </h1>
        <Tabs defaultValue="front-end" className="w-full">
          <div className="flex justify-end">
            <TabsList className="mt-4 border border-black/10 bg-white sm:mt-0">
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
                    className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white py-6 text-black transition-smooth hover:border-black/20"
                    key={skill.title}
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
                    className="flex flex-col items-center justify-center gap-2 border border-black/10 bg-white py-6 text-black transition-smooth hover:border-black/20"
                    key={skill.title}
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
    </PageContainer>
  );
}
