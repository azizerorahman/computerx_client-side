import {
  faAt,
  faCircleArrowRight,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiUserSettingsFill } from "react-icons/ri";
import React from "react";

const MyPortfolio = () => {
  return (
    <div className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-4 font-bold">
        My Portfolio
      </h3>
      <h2 className="mb-1 pb-1 font-bold text-neutral text-center lg:text-6xl text-2xl">
        Azizur Rahman
      </h2>
      <p className="pb-4 flex justify-center items-center gap-1 text-xl text-info text-center">
        <FontAwesomeIcon icon={faAt} />
        <span className="pb-2 text-accent">azizurrahman.zero@gmail.com</span>
      </p>
      <p className="flex items-center gap-1 font-bold text-neutral text-2xl my-4">
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
      <p className="flex items-center gap-1 font-bold text-neutral text-2xl mt-4 mb-2">
        <RiUserSettingsFill />
        <span>Skills as Web Developer</span>
      </p>
      <ul className="pl-10">
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          HTML
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          CSS
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          Tailwind
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          JavaScript
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          ES6
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          RestAPI
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          React
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          Firebase Authentication
        </li>
        <li className="text-info font-medium">
          <FontAwesomeIcon className="pr-2" icon={faCircleArrowRight} />
          MongoDB and others
        </li>
      </ul>
      <p className="flex items-center gap-1 font-bold text-neutral text-2xl mt-6">
        <span>Projects</span>
      </p>
      <a href="https://jackson-photography-zero.web.app/">
        <button className="btn btn-active btn-link">Jackson Photography</button>
      </a>
      <br />
      <a href="https://bbook-zero.web.app/">
        <button className="btn btn-active btn-link">BBook</button>
      </a>
      <br />
      <a href="https://dancing-puppy-880606.netlify.app/">
        <button className="btn btn-active btn-link">BMW Review Hub</button>
      </a>
    </div>
  );
};

export default MyPortfolio;
