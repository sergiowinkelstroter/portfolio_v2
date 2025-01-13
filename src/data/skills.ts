import { FaDatabase, FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiSpringboot,
  SiSpringsecurity,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

export const skills = [
  {
    title: "Front-end",
    items: [
      {
        title: "HTML",
        icon: FaHtml5,
      },
      {
        title: "CSS",
        icon: FaCss3Alt,
      },
      {
        title: "Javascript",
        icon: FaJs,
      },
      {
        title: "Typescript",
        icon: SiTypescript,
      },
      {
        title: "React",
        icon: FaReact,
      },
      {
        title: "Next.js",
        icon: RiNextjsFill,
      },
      {
        title: "Tailwind",
        icon: RiTailwindCssFill,
      },
    ],
  },
  {
    title: "Back-end",
    items: [
      {
        title: "Node.js",
        icon: FaNodeJs,
      },
      {
        title: "Express",
        icon: SiExpress,
      },
      {
        title: "Prisma",
        icon: SiPrisma,
      },
      {
        title: "Docker",
        icon: FaDocker,
      },
      {
        title: "MongoDB",
        icon: SiMongodb,
      },
      {
        title: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
];
