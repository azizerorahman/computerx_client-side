import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blogs = () => {
  return (
    <section className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-3 font-bold">
        Blogs
      </h3>
      <h2 className="mb-10 font-bold text-neutral text-center lg:text-5xl text-2xl lg:px-20">
        Questions &#38; Answers!
      </h2>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          How will you improve the performance of a React Application?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            Methods Of improving and optimizing performance of a React
            Application are:
          </p>
          <ul className="pl-6">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>
                Using <span className="font-mono">React.Fragment</span> to Avoid
                Adding Extra Nodes to the DOM. Also by using the short syntax
                &#62;&#62;&#62;/&#62; for declaring a Fragment.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>
                By Virtualizing a large list by using{" "}
                <span className="font-mono">react-window</span>.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Removing inline functions from all components.</p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>By using Conditional Rendering.</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            There are mainly four ways to manage a state in a React application.
            These are:
          </p>
          <ul className="pl-6">
            <li>
              1. Local State -{" "}
              <span className="font-normal">
                Date is managed in one component in Local State. It is managed
                by <span className="font-mono font-bold">useState</span> hook.{" "}
              </span>
            </li>
            <li>
              2. Global State -{" "}
              <span className="font-normal">
                We can manage data across multiple components by Global State
              </span>
            </li>
            <li>
              3. Server State -{" "}
              <span className="from-normal">
                Here data comes from an external server.
              </span>
            </li>
            <li>
              4. URL State -
              <span className="font-normal">We get data from URL here.</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            In JavaScript, sharing objects properties between them works like a
            chain, this is prototypical chain. All JavaScript objects follow the
            chain and inherit properties and methods from a prototype. When we
            try to read a property from object, and it's missing, JavaScript
            automatically takes it from the prototype.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          Why you do not set the state directly in React. For example, if you
          have{" "}
          <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
            const [products, setProducts] = useState([])
          </code>
          . Why you do not set{" "}
          <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
            products = [...]
          </code>{" "}
          instead, you use the{" "}
          <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
            setProducts
          </code>
          ?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            If I use{" "}
            <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
              products = [...]
            </code>{" "}
            it will mutate the state but it will not trigger re-render. On the
            other hand, if I use{" "}
            <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
              setProducts
            </code>{" "}
            it doesn't mutate the state directly and triggers a re-render. So
            for this, I use{" "}
            <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
              setProducts
            </code>{" "}
            as after using it, the re-render function is triggered.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            Here we used JavaScript to solve the problem. If we find products by
            name, we will be ger array of result products. Here is the code:
          </p>
          <div className="mockup-code my-3 min-w-full">
            <pre data-prefix="1">
              <code>
                const searchProducts = (products, searchText) =&#62; &#123;
              </code>
            </pre>
            <pre data-prefix="2">
              <code className="pl-6">const searchResult = [];</code>
            </pre>
            <pre data-prefix="3">
              <code className="pl-6">
                for (const product of products) &#123;
              </code>
            </pre>
            <pre data-prefix="4">
              <code className="pl-12">
                if (product.name.includes(searchText)) &#123;
              </code>
            </pre>
            <pre data-prefix="5">
              <code className="pl-20">searchResult.push(product);</code>
            </pre>
            <pre data-prefix="6">
              <code className="pl-12">&#123;</code>
            </pre>
            <pre data-prefix="7">
              <code className="pl-6">&#123;</code>
            </pre>
            <pre data-prefix="8">
              <code className="pl-6">return searchResult;</code>
            </pre>
            <pre data-prefix="9">
              <code>&#125;;</code>
            </pre>
            <pre data-prefix="10"></pre>
            <pre data-prefix="11">
              <code>const results = searchProducts(products, "laptop");</code>
            </pre>
            <pre data-prefix="11">
              <code>console.log(results);</code>
            </pre>
          </div>
          <p className="lg:text-sm text-xs text-black text-center">
            *searchProducts &#62; Function Name, products &#62; Array of
            Products &#38; searchText &#62; Text that used for Search.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
