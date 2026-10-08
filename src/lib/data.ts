
import React from "react";
import { User, Briefcase, Code2, GraduationCap } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science (B.Sc) in Physics",
    location: "Jagan's Degree & PG College, Nellore",
    description:
      "Completed my Bachelor's degree in Physics, building a strong foundation in analytical thinking and problem-solving skills.",
    icon: React.createElement(GraduationCap),
    date: "Jun 2017 - May 2020",
  },
  {
    title: "Master of Science (M.Sc) in Physics",
    location: "Sri Padmavathi Mahila University, Tirupathi",
    description:
      "Pursued advanced studies in Physics while developing interest in technology and programming.",
    icon: React.createElement(GraduationCap),
    date: "Jul 2020 - May 2022",
  },
  {
    title: "AI Full Stack Developer",

    location: "Zelarsoft Private Limited, Hyderabad",

    description:
      "AI Full Stack Developer with 4 years of experience building scalable web and mobile applications using React, Next.js, React Native, Node.js, and Python. Experienced in developing AI-powered enterprise platforms using LangGraph, CopilotKit, OpenAI APIs, and RAG. Skilled in building responsive UIs, RESTful and real-time APIs, optimizing application performance, and delivering reliable software solutions.",

    icon: React.createElement(Code2),

    date: "Oct 2022 - Present",
  },

] as const;

export const projectsData = [

  {
    title: "Cokpit",

    description:
      "Built an AI-powered enterprise automation platform using Next.js, CopilotKit, and LangGraph, enabling intelligent automation across DevOps, Jira, SRE incident management, and employee onboarding. Implemented AI chat, Human-in-the-Loop workflows, Knowledge Base, MCP integrations, and reusable GenUI components.",

    tags: ["Next.js", "CopilotKit", "LangGraph", "Python", "PostgreSQL", "OpenAI"],

    imageUrl: `${import.meta.env.BASE_URL}Images/cockpit.png`,
  },

  {
    title: "Mindly",
    description:
      "Developed a US-based healthcare platform supporting children with neurological and psychological challenges. Built responsive, cross-platform UI using React and React Native, ensuring feature parity between web and mobile.",
    tags: ["React", "React Native", "Firebase", "Material UI", "JavaScript"],
    imageUrl: `${import.meta.env.BASE_URL}Images/mindly.png`,
  },
  {
    title: "Inside-View",
    description:
      "Developed an admin and customer portal for Canadian utility billing using Next.js and Supabase. Implemented secure user authentication, managed login/logout flows, and created customer enrollment forms with email confirmations.",
    tags: ["Next.js", "Supabase", "JavaScript", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    title: "Review Deals",
    description:
      "Developed a responsive e-commerce app with React and Supabase, integrating Google Authentication and Gmail API for data fetching. Built dynamic UI components including navbar, card grids, and collapsible tables for improved product browsing and status tracking.",
    tags: ["React", "Supabase", "Google Authentication", "CSS", "Flexbox"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "REST APIs",
  "WebSockets",
  "Webhooks",
  "LangGraph",
  "LangChain",
  "CopilotKit",
  "OpenAI API",
  "RAG",
  "LLMs",
  "Human-in-the-Loop",
  "MCP",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "GCP",
  "Docker",
  "Kubernetes",
  "Microsoft Graph",
  "Google Calendar",
  "Stripe",
  "Git",
  "Postman",
  "Swagger",
  "Figma",
] as const;
