"use client";
import Link from "next/link";
import Navbar from "./navbar/page";
import { Span } from "next/dist/trace";
import ArrowButton from "./arrow";
import profilepic from "./profilepic.jpg";
import Image from 'next/image';


const handleButtonClick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}

export default function Home() {
  return (
    <>
      <nav className="flex justify-end p-4 gap-x-8 text-grey-300">
        <Link href="#about-me">
          About Me
        </Link>
        <Link href="#skills">
          Skills
        </Link>
        <Link href="#project">
          Project
        </Link>
      </nav>

      <div className="roundbox flex">
      <div>
          <img src={profilepic.jpg} alt="profilepic" width="100%" height="100%" className="rounded-full" />
        </div>
        <div className="row-container justify">
          <p className="h3">Hi, I am M.Abu Bakar</p>
          <p className="h4">I am a web developer based in Lahore Pakistan,
             CA. working towards creating web applications that make life 
             easier and more meaningful.
          </p>
        </div>
      </div>

      <button className="arrow-button" onClick={handleButtonClick}>
        ▼
      </button>

      <h1 id="about-me" style={{
        paddingTop:"250px",
        textAlign: "center",
        fontSize: "xl", 
        fontWeight:"bold",
        textDecoration:"underline",
      }}>About Me</h1>

      <div className="flex">
        <h1 id="h1">Get to know me!</h1>
        <h1 id="skills" className="h8">Skills</h1>
      </div>

      <div id="container" className="flex">
        <p>My name is Muhammad Abu Bakar, and I've been working as a web developer for the past six months.
          During this time, I've had the opportunity to dive into the exciting world of front-end and back-end development.
          <br/>
          I've honed my skills in HTML, CSS, and JavaScript, creating responsive and user-friendly websites.
          My passion lies in crafting clean code and solving real-world problems through elegant solutions.
          Whether it's building interactive forms, optimizing website performance, or collaborating with designers,
          <br/>
          I thrive on turning ideas into functional web experiences. Beyond coding,
          I'm an avid learner, always exploring new technologies and best practices.
          I'm excited to contribute my expertise and continue growing in this dynamic field.
        </p>
        <div className="grid grid-cols-[repeat(4,auto)] ">
          <span>HTML</span>
          <span>CSS</span>
          <span>Python</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>C++</span>
          <div className="grid grid-cols-[auto,auto,auto,auto]">
            <span>Java</span>
            <span>Next.js</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>

      <h1 id="project" style={{
        paddingTop: "200px",
        textAlign: "center",
        fontSize: "xl", 
      }}>Project</h1>

      <div className="flex justify-evenly">
        <div className="card">
          To-do App is built using React TypeScript and Tailwind CSS
        </div>
        <div className="card">
          Portfolio is built using React TypeScript and Tailwind CSS
          along with HTML 
        </div>
      </div>

      <div className='flex justify-evenly'>
        <div className ="card">
          Image gallery is built using Cloudinary, Next.js, and Shadcn UI.
        </div>

        <div className = "card">
          Have completed various projects in C++ language.
        </div>
      </div>
    </>
  );
}
