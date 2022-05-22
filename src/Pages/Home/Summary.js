import {
  faClipboardList,
  faEarthAmericas,
  faThumbsUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Summary = () => {
  return (
    <section className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-3 font-bold">
        Business Facts
      </h3>
      <h2 className="mb-6 font-bold text-neutral text-center lg:text-5xl text-2xl lg:px-20">
        We are trusted by over 5000+ clients. Join us now and grow your
        business.
      </h2>
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow py-5 mt-7 mb-9">
          <div className="stat">
            <div className="stat-figure text-secondary text-6xl">
              <FontAwesomeIcon icon={faEarthAmericas} />
            </div>
            <div className="stat-title">Countries</div>
            <div className="stat-value text-accent">63</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-6xl">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
            <div className="stat-title">Complete Projects</div>
            <div className="stat-value text-accent">714</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-6xl">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="stat-title">Happy Clients</div>
            <div className="stat-value text-accent">5107</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-6xl">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="stat-title">Feedbacks</div>
            <div className="stat-value text-accent">514</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
