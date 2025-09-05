"use client";

import Link from "next/link";
import Image from "next/image";

function AboutDeveloper() {
  return (
    <div className="border h-screen w-full md:p-10 sm:p-4">
      <div className="border flex flex-col justify-center items-center p-4 md:flex-row gap-3">
        <Image
          className="rounded-bl-[100px]  border-cyan-300 border-8 shadow-2xl shadow-cyan-400 "
          src="/developerImg2.jpg"
          alt="developer profile"
          width={200}
          height={200}
        />
        <div>
            <h1 className="text-3xl font-bold p-2 text-cyan-400">Full Stack Developer!</h1>

            <p className="text-center text-md">Hi, I'm Gezahegn Birhanu, a passionate and self-motivated web developer with a strong foundation in HTML, CSS, JavaScript,React, Next.js,TypeScript,PostgreSQL, PHP, and mySQL. I enjoy turning ideas into functional and user-friendly websites, and I'm constantly looking to improve my skills and stay updated with the latest technologies.</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
      <Link href="/" className="bg-cyan-400 p-2 rounded-lg font-bold text-black">Back To App</Link>
      </div>

      <div>
       
        <Link href="https://bekiportfolio.infinityfreeapp.com/?i=2" className="bg-cyan-400 p-1 rounded-lg font-bold text-black">Portfolio</Link>
      </div>
    </div>
  );
}

export default AboutDeveloper;
