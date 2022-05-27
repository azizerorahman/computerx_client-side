import {
  faAt,
  faCircleArrowRight,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsFillFileCodeFill } from "react-icons/bs";
import React from "react";

const MyPortfolio = () => {
  return (
    <div className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-4 font-bold">
        My Portfolio
      </h3>
      <h2 className="mb-1 pb-1 font-bold text-neutral text-center lg:text-6xl text-3xl">
        Azizur Rahman
      </h2>
      <p className="pb-4 flex justify-center items-center gap-1 text-xl text-info text-center">
        <FontAwesomeIcon icon={faAt} />
        <span className="pb-2 text-accent">azizurrahman.zero@gmail.com</span>
      </p>
      <p className="flex items-center gap-1 font-bold text-neutral lg:text-3xl justify-center lg:justify-start text-lg lg:my-4 mb-2">
        <FontAwesomeIcon icon={faSchool} />
        <span>Educational Background</span>
      </p>
      <div className="overflow-x-auto pb-6">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Exam</th>
              <th>Year</th>
              <th>Result</th>
              <th>Institute</th>
              <th>Board</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center hover">
              <th>1</th>
              <td className="text-info font-medium">JSC</td>
              <td className="text-info font-medium">2016</td>
              <td className="text-info font-medium">5</td>
              <td className="text-info font-medium">
                NKM High School And Homes
              </td>
              <td className="text-info font-medium">Dhaka</td>
            </tr>
            <tr className="text-center hover">
              <th>2</th>
              <td className="text-info font-medium">SSC</td>
              <td className="text-info font-medium">2019</td>
              <td className="text-info font-medium">5</td>
              <td className="text-info font-medium">
                NKM High School And Homes
              </td>
              <td className="text-info font-medium">Dhaka</td>
            </tr>
            <tr className="text-center hover">
              <th>3</th>
              <td className="text-info font-medium">HSC</td>
              <td className="text-info font-medium">2021</td>
              <td className="text-info font-medium">5</td>
              <td className="text-info font-medium">
                National COllege of Education
              </td>
              <td className="text-info font-medium">Dhaka</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col lg:gap-0 gap-5 lg:flex-row justify-around mt-6 mb-10">
        <div>
          <p className="flex items-center gap-1 font-bold text-neutral mt-4 mb-2 lg:text-3xl justify-center lg:justify-start text-lg lg:my-4">
            <RiUserSettingsFill />
            <span>Skills as Web Developer</span>
          </p>
          <ul className="lg:pl-10 text-center lg:text-left">
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              HTML
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              CSS
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              Tailwind
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              JavaScript
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              ES6
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              RestAPI
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              React
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              Firebase Authentication
            </li>
            <li className="text-info font-medium lg:text-2xl">
              <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
              MongoDB and others
            </li>
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-1 font-bold text-neutral mt-6 lg:text-3xl justify-center lg:justify-start text-lg lg:my-4 lg:pb-0 pb-2">
            <BsFillFileCodeFill />
            <span>Projects</span>
          </p>
          <div className="lg:pl-10">
            <a
              href="https://jackson-photography-zero.web.app/"
              className="flex items-center lg:text-2xl text-info lg:justify-start justify-center"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} />
              <button className="btn btn-active text-accent btn-link lg:btn-lg btn-xs">
                Jackson Photography
              </button>
            </a>
            <a
              href="https://bbook-zero.web.app/"
              className="flex items-center lg:text-2xl text-info lg:justify-start justify-center"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} />
              <button className="btn btn-active text-accent btn-link lg:btn-lg btn-xs">
                BBook
              </button>
            </a>
            <a
              href="https://dancing-puppy-880606.netlify.app/"
              className="flex items-center lg:text-2xl text-info lg:justify-start justify-center"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} />
              <button className="btn btn-active text-accent btn-link lg:btn-lg btn-xs">
                BMW Review Hub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
