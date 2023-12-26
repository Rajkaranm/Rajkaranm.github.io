import { PiDevToLogoFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

export default function Skills() {
  return (
    <div id="skills" className="p-8">
      <h1 className="text-6xl font-bold text-center">WHAT DO I OFFER</h1>

      <div className="mx-40 flex justify-evenly">
        
        <div className="h-96 flex flex-col justify-center items-center">
          <PiDevToLogoFill className="text-7xl" />
          <h2 className="py-5 w-52 text-center text-3xl font-bold">
            Full Stack Development
          </h2>
          <div className="text-center w-[22rem]">
            <p>
              I build high performing and robust application mainly using MERN Stack.
            </p>
          </div>
        </div>

        <div className="h-96 flex flex-col justify-center items-center">
          <FaServer className="text-7xl" />
          <h2 className="pb-14 py-5 text-3xl font-bold">DevOps</h2>
          <p className="text-center w-[22rem]">
            I improve performance of the application using various tools liks Docker, kubernetes, etc.
          </p>
        </div>

        <div className="h-96 flex flex-col justify-center items-center">
          <MdOutlineSecurity className="text-7xl" />
          <h2 className="py-5 w-52 text-center text-3xl font-bold">
            Penetration Testing
          </h2>
          <p className="text-center w-[22rem]">
            I find vulnerabilities in the application and provide solutions to fix the problem.
          </p>
        </div>
      </div>
    </div>
  );
}
