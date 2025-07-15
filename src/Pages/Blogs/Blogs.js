import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blogs = () => {
  return (
    <section className="lg:w-11/12 mx-auto lg:px-10 px-5 py-10">
      <h3 className="tracking-widest text-center text-secondary text-xs uppercase mb-3 font-bold">
        Tech Insights
      </h3>
      <h2 className="mb-10 font-bold text-neutral text-center lg:text-5xl text-2xl lg:px-20">
        Computer Hardware &#38; Tech Guide
      </h2>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          What factors should you consider when choosing computer components?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            When building or upgrading a computer, several key factors should
            guide your component selection:
          </p>
          <ul className="pl-6">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>
                <span className="font-mono font-bold">Compatibility</span> -
                Ensure all components work together (CPU socket, RAM type,
                motherboard chipset).
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>
                <span className="font-mono font-bold">
                  Performance Requirements
                </span>{" "}
                - Match components to your intended use (gaming, productivity,
                content creation).
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>
                <span className="font-mono font-bold">Budget Allocation</span> -
                Prioritize spending on components that impact your use case
                most.
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAngleRight} />
              <p>
                <span className="font-mono font-bold">
                  Future Upgradability
                </span>{" "}
                - Choose platforms with upgrade paths for longevity.
              </p>
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
          What are the different types of computer storage solutions?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            There are several types of storage solutions available for modern
            computers, each with unique advantages:
          </p>
          <ul className="pl-6">
            <li>
              1. SSD (Solid State Drive) -{" "}
              <span className="font-normal">
                Fast, reliable storage with no moving parts. Best for operating
                systems and frequently used applications. Uses{" "}
                <span className="font-mono font-bold">NAND flash memory</span>.{" "}
              </span>
            </li>
            <li>
              2. HDD (Hard Disk Drive) -{" "}
              <span className="font-normal">
                Traditional mechanical storage offering large capacity at lower
                cost per GB. Ideal for mass storage of files and media.
              </span>
            </li>
            <li>
              3. NVMe SSD -{" "}
              <span className="font-normal">
                Ultra-fast storage using PCIe interface. Significantly faster
                than SATA SSDs for high-performance applications.
              </span>
            </li>
            <li>
              4. External Storage -{" "}
              <span className="font-normal">
                Portable USB drives, external HDDs/SSDs for backup and file
                transfer between systems.
              </span>
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
          How do CPU and GPU work together in modern computers?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            The CPU (Central Processing Unit) and GPU (Graphics Processing Unit)
            work in tandem to deliver optimal system performance. The CPU
            handles general computing tasks and system management, while the GPU
            specializes in parallel processing for graphics rendering, gaming,
            and computational workloads like AI and video editing. Modern
            systems benefit from this division of labor, where the CPU manages
            system operations and coordinates with the GPU for
            graphics-intensive tasks, resulting in better overall performance
            and efficiency.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          Why is proper power supply selection crucial for your PC build? For
          example, if you have a{" "}
          <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
            RTX 4080 GPU + i7-13700K CPU
          </code>
          . Why shouldn't you use a{" "}
          <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
            450W PSU
          </code>{" "}
          instead, you should use a{" "}
          <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
            750W+ PSU
          </code>
          ?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            If you use a{" "}
            <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
              450W PSU
            </code>{" "}
            with high-end components, it will not provide adequate power and may
            cause system instability, crashes, or component damage. On the other
            hand, a{" "}
            <code className="font-normal rounded-md py-0.5 px-1.5 bg-[rgba(175,184,193,0.2)]">
              750W+ PSU
            </code>{" "}
            ensures stable power delivery with headroom for peak loads and
            future upgrades. Proper PSU selection is crucial for system
            reliability, component longevity, and optimal performance under all
            operating conditions.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse lg:px-3 mx-auto mb-3 w-10/12 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold text-xl">
          You have an inventory of computer parts. Each part has a name, price,
          specifications, etc. How will you implement a search to find parts by
          name or specifications?
        </div>
        <div className="collapse-content lg:text-lg font-medium text-info">
          <p>
            Here's how we can implement a flexible search function for computer
            parts inventory. This function searches through part names and
            specifications to find matching products:
          </p>
          <div className="mockup-code my-3 min-w-full">
            <pre data-prefix="1">
              <code>const searchParts = (parts, searchText) =&#62; &#123;</code>
            </pre>
            <pre data-prefix="2">
              <code className="pl-6">const searchResult = [];</code>
            </pre>
            <pre data-prefix="3">
              <code className="pl-6">
                const query = searchText.toLowerCase();
              </code>
            </pre>
            <pre data-prefix="4">
              <code className="pl-6">for (const part of parts) &#123;</code>
            </pre>
            <pre data-prefix="5">
              <code className="pl-12">
                if (part.name.toLowerCase().includes(query) ||
              </code>
            </pre>
            <pre data-prefix="6">
              <code className="pl-16">
                part.specifications.toLowerCase().includes(query)) &#123;
              </code>
            </pre>
            <pre data-prefix="7">
              <code className="pl-20">searchResult.push(part);</code>
            </pre>
            <pre data-prefix="8">
              <code className="pl-12">&#125;</code>
            </pre>
            <pre data-prefix="9">
              <code className="pl-6">&#125;</code>
            </pre>
            <pre data-prefix="10">
              <code className="pl-6">return searchResult;</code>
            </pre>
            <pre data-prefix="11">
              <code>&#125;;</code>
            </pre>
            <pre data-prefix="12"></pre>
            <pre data-prefix="13">
              <code>const results = searchParts(inventory, "RTX 4080");</code>
            </pre>
            <pre data-prefix="14">
              <code>console.log(results);</code>
            </pre>
          </div>
          <p className="lg:text-sm text-xs text-black text-center">
            *searchParts &#62; Function Name, parts &#62; Array of Computer
            Parts &#38; searchText &#62; Search query for parts or specs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
