import React from "react";

const MyPortfolio = () => {
  return (
    <div className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <h3 className="tracking-widest text-center lg:text-left text-secondary text-xs uppercase mb-4 font-bold">
        My Portfolio
      </h3>
      <h2 className="mb-1 font-bold text-neutral text-center lg:text-left lg:text-4xl text-2xl">
        Azizur Rahman
      </h2>
      <p className="text-sm pb-4">Email: azizurrahman.zero@gmail.com</p>
      <p className="font-bold text-xl">Educational Background:</p>
      <div className="overflow-x-auto">
        <table className="table w-full mt-3">
          <thead>
            <tr>
              <th></th>
              <th>Exam</th>
              <th>Year</th>
              <th>Result (GPA)</th>
              <th>Institute</th>
              <th>Board</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>JSC</td>
              <td>2016</td>
              <td>5</td>
              <td>NKM High School And Homes</td>
              <td>Dhaka</td>
            </tr>
            <tr>
              <th>2</th>
              <td>SSC</td>
              <td>2019</td>
              <td>5</td>
              <td>NKM High School And Homes</td>
              <td>Dhaka</td>
            </tr>
            <tr>
              <th>3</th>
              <td>HSC</td>
              <td>2021</td>
              <td>5</td>
              <td>Dhaka</td>
              <td>National COllege of Education</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="font-bold text-xl">Skills:</p>
      <p className="font-bold">
        HTML, CSS, BootStrap, Tailwind, JavaScript, ES6, RestAPI, React, MongoDB
        etc.
      </p>
      <p className="font-bold mt-3 text-xl">Projects:</p>
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
