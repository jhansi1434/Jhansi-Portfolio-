
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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
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
    title: "FullStatck Developer",
    location: "Zelarsoft Private Limited, Hyderabad",
    description:
      "Full Stack Developer with 3+ years of experience specializing in React, Next.js, and React Native. Skilled in designing and developing dynamic, user-friendly interfaces and building scalable full-stack applications. Experienced in implementing responsive designs, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software solutions.",
    icon: React.createElement(Code2),
    date: "Oct 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Review Deals",
    description:
      "Developed a responsive e-commerce app with React and Supabase, integrating Google Authentication and Gmail API for data fetching. Built dynamic UI components including navbar, card grids, and collapsible tables for improved product browsing and status tracking.",
    tags: ["React", "Supabase", "Google Authentication", "CSS", "Flexbox"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
  },
  {
    title: "Mindly",
    description:
      "Developed a US-based healthcare platform supporting children with neurological and psychological challenges. Built responsive, cross-platform UI using React and React Native, ensuring feature parity between web and mobile.",
    tags: ["React", "React Native", "Firebase", "Material UI", "JavaScript"],
    imageUrl: "/Jhansi-Portfolio-/images/mindly.png",
  },
  {
    title: "Inside-View",
    description:
      "Developed an admin and customer portal for Canadian utility billing using Next.js and Supabase. Implemented secure user authentication, managed login/logout flows, and created customer enrollment forms with email confirmations.",
    tags: ["Next.js", "Supabase", "JavaScript", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
] as const;

export const skillsData = [
  "React JS",
  "React Native",
  "Next.js",
  "HTML, CSS & JavaScript",
  "MongoDB",
  "Supabase",
  "Firebase",
  "Tailwind CSS",
  "Material UI",
  "Shadcn/UI",
  "TypeScript",
  "Git",
] as const;
