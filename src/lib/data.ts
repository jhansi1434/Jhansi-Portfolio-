
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
    title: "B.Tech",
    location: "Hyderabad",
    description:
      "I studied Electronics and Communication Engineering at CMR Technical Campus to get my degree.",
    icon: React.createElement(GraduationCap),
    date: "2016",
  },
  {
    title: "Front-End Developer",
    location: "Ventro Tech Pvt.Ltd, Hyderabad.",
    description:
      "I worked as a front-end developer for 2.8 years for various static and dynamic web pages using HTML, CSS, JavaScript and Bootstrap.",
    icon: React.createElement(Briefcase),
    date: "Jan 2017 - Sep 2019",
  },
  {
    title: "Front-End Developer",
    location: "Telebu Communications LLP, Hyderabad",
    description:
      "I'm a front-end developer working for healthcare project. My stack includes HTML, CSS, JavaScript, Material UI, RWD.",
    icon: React.createElement(Code2),
    date: "Oct 2019 - Mar 2021",
  },
  {
    title: "Mern Stack Developer",
    location: "Apoyar Software Technologies, Hyderabad",
    description:
      "I'm a Mern stack developer working for freelancencing project. My stack includes React Js, Node Js, Express Js, Mongo DB, RWD, Material UI.",
    icon: React.createElement(Code2),
    date: "May 2021 - Sep 2022",
  },
  {
    title: "Full Stack Developer",
    location: "Zelarsoft Pvt Ltd, Hyderabad",
    description:
      "I'm a Full stack developer and promoted as team lead, I'm working for Healthcare(Neurological Care) project and worked for Drug development project . My stack includes React Js, React Native, Node Js, Express Js, Mongo DB, Firebase, Cloud functions, RWD, Material UI.",
    icon: React.createElement(Code2),
    date: "Sep 2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Mindly Care",
    description:
      "Created a US-based healthcare platform for children with neurological challenges using React and React Native. Implemented real-time messaging with Firebase, secure file uploads for behavioral analysis, and scheduling tools for doctor-patient appointments.",
    tags: ["React", "React Native", "Firebase", "Material UI"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
  },
  {
    title: "Inside-View",
    description:
      "Built an admin and customer portal for Canadian utility billing using Next.js and Supabase. Features include secure authentication, customer enrollment workflows, automated email notifications, and comprehensive admin panel for payment processing and service management.",
    tags: ["Next.Js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    title: "Review Deals",
    description:
      "Developed a responsive e-commerce application with React and Supabase, featuring Google Authentication and Gmail-based data filtering. Built dynamic UI components including collapsible tables, stepper-style checkout flow, and MakeMyTrip-inspired filtering system.",
    tags: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
] as const;
