"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useThemeContext } from "@/context/store";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    // Root class for text color toggle
    <div className="text-[--dark-bg] dark:text-[--light-bg]">
      <Navbar /> {/* Navbar */}
      {/* Short About us || Landing Page */}
      <div className="w-full h-[40rem] flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">Hi, I'm Rajkaran</h1>
        <p className="w-[45rem] text-3xl mt-5 mb-10">
          I have build many Full Stack Application from Blockchain to
          E-commerce, I Also have a lot interest Cyber Security.
        </p>
        <div className="">
          <Link
            className="py-3 px-10 m-5 border-2 rounded-3xl bg-[--dark-bg] text-white dark:bg-white dark:text-black"
            href="https://medium.com/@imrajkaran"
          >
            Read My Articles
          </Link>
          <Link
            className="py-3 px-10 m-5 border-2 rounded-3xl bg-[--dark-bg] text-white dark:bg-white dark:text-black"
            href="#projects"
          >
            View My Projects
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-2/3 h-px my-8 bg-gray-200 border-1 border-dashed dark:bg-gray-700" />
      </div>

      {/* Skills Section */}
      <Skills />

      <div className="flex justify-center">
        <hr className="w-2/3 h-px my-8 bg-gray-200 border-1 border-dashed dark:bg-gray-700" />
      </div>

      {/* Projects Section */}
      <Projects />

      <div className="flex justify-center">
        <hr className="w-2/3 h-px my-8 bg-gray-200 border-1 border-dashed dark:bg-gray-700" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
