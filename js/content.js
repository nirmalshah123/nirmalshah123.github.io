/**
 * Portfolio content — edit here and push to GitHub.
 * Project summaries are based on each repository’s README on GitHub.
 */
window.PORTFOLIO = {
  meta: {
    title: "Nirmal Shah — Portfolio",
    description:
      "Nirmal Shah — M.S. in Computer Science at Texas A&M; B.Tech from IIT Bombay. Research on SNNs and ReRAM IMC; portfolio and contact.",
  },

  nav: {
    brand: "Nirmal Shah",
    brandHref: "index.html",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Experience", href: "experience.html" },
      { label: "Research", href: "research.html" },
      { label: "Projects", href: "projects.html" },
      { label: "Contact", href: "index.html#contact" },
    ],
  },

  hero: {
    greeting: "",
    name: "Nirmal Shah",
    tagline:
      "Tinkerer",
    resumeUrl: null,
  },

  about: {
    heading: "About",
    photo: {
      src: "assets/profile.png",
      alt: "Nirmal Shah standing by Westminster Bridge in London",
    },
    paragraphs: [
      `Hi, I'm Nirmal currently pursuing MSCS at Texas A&M University, where I focus on the intersection of AI and hardware. I completed my undergraduate studies at IIT Bombay, where my thesis explored end-to-end neuromorphic circuit design and machine learning algorithms optimized for FPGA platforms. My work emphasized low-power design and near-edge computing. This work resulted in 2 papers being published at <a href="https://2025.ieee-iscas.org/" target="_blank" rel="noopener noreferrer">ISCAS 2025</a>. During this time, I was part of the <a href="https://www.ee.iitb.ac.in/~laxmeesha/" target="_blank" rel="noopener noreferrer">BioNICS research group</a> under <a href="https://www.ee.iitb.ac.in/web/people/laxmeesha-somappa/" target="_blank" rel="noopener noreferrer">Prof. Laxmeesha Somappa</a> and also collaborated with the <a href="https://nanomemorylogic.wordpress.com/" target="_blank" rel="noopener noreferrer">Melode Lab</a> under <a href="https://www.ee.iitb.ac.in/web/people/udayan-ganguly/" target="_blank" rel="noopener noreferrer">Prof. Udayan Ganguly</a>.`,
      
      `I am interested in learning ML and AI systems and how I can bridge the gap between modern AI systems, especially large language models, and hardware design workflows. I enjoy staying up to date with emerging technologies and continuously exploring how advances in AI can be integrated into efficient, high-performance computing systems.`,
    ],
  },

  /**
   * Work experience (mirrors LinkedIn). Profile: https://www.linkedin.com/in/nirmalshah123/
   */
  experience: {
    heading: "Experience",
    intro:
      "",
    linkedInUrl: null,
    items: [
      {
        role: "Post Silicon Validation",
        org: "NVIDIA",
        orgUrl: "https://www.nvidia.com/en-us/",
        employmentType: "",
        location: "",
        dateRange: "Jul 2024 – Jul 2025",
        summary:
          "End-to-end software validation for Blackwell-class GPUs across PVT corners and stress scenarios.",
        tech: ["Python", "C++", "Linux", "Git"]        ,
        bullets: [
          "Owned end-to-end software validation for the Blackwell-class GPU, ensuring production readiness for a $5B product line by testing across all PVT corners and stress scenarios.",
          "Developed automation scripts to optimize file-fetching infrastructure, achieving a 10× latency reduction for remote-based testing systems.",
          "Automated driver installation and firmware flashing pipelines, reducing total system readiness time by 2 hours and accelerating the entire validation workflow.",
          "Created custom voltage margining scripts for high-speed hardware validation, enabling faster coverage of process corners.",
        ],
      },
      {
        role: "AI Hardware Researcher",
        org: "Memory Logic and Design Lab",
        orgUrl: "https://nanomemorylogic.wordpress.com/",
        employmentType: "Full-time",
        location: "Mumbai, Maharashtra, India · On-site",
        dateRange: "Jan 2023 – Jun 2024",
        summary:
          "In Memory Compute Research and end to end ML deployment onto Hardware",
        tech: ["Python","PyTorch", "C++", "ReRAM", "FPGA", "IMC","Linux", "Git"],
        bullets: [
          "Characterized ReRAM IC for quantization of neural networks for in-memory compute.",
          "Integrated the model into an FPGA architecture with op-amp integrators for LIF neuron modeling with the ReRAM IC.",
          "Developed an energy-efficient pruning algorithm and achieved 90.3% accuracy on MNIST classification.",
        ],
      },
      {
        role: "Embedded System Engineer",
        org: "AMI Lab (Université de Sherbrooke)",
        orgUrl: "https://ami-lab.ca/en/about/",
        employmentType: "Internship",
        location: "Sherbrooke, Quebec, Canada · On-site",
        dateRange: "May 2023 – Jul 2023",
        summary:
          "Privacy-preserving thermal imaging for healthcare; supervised by Prof. Bessam Abdulrazak and Prof. Hassan.",
        tech: ["C++", "Python", "Embedded Linux", "Linux", "Git","Multithreading", "OpenCV"],
        bullets: [
          "Developed an IoT-based human detection system that improves privacy using thermal cameras.",
          "Deployed in old-age homes to assist healthcare staff, reducing patient check-up time by 2 hours.",
          "Achieved a 15% performance boost by parallelizing the Gaussian convolution benchmarked on Raspberry Pi 4B.",
        ],
        links: [
          {
            label: "Github Repo",
            href: "https://github.com/nirmalshah123/privacy-aware-thermal-vision",
            external: true,
          },
        ],
      },
      {
        role: "Senior Electrical Designer",
        org: "AUV-IITB",
        orgUrl: "https://www.auv-iitb.org/",
        employmentType: "Full-time",
        location: "Mumbai Metropolitan Region",
        dateRange: "Jul 2021 – Jul 2023",
        summary:
          "Core contributor to autonomous underwater vehicle Matsya 6—from concept through build, integration, and test.",
        tech: ["Verilog", "Xilinx Vivado", "FPGA"],
        bullets: [
          "Integral member in developing AUV Matsya 6 from ideation through manufacturing, integration, and testing.",
          "Developed hardware accelerators for underwater localization of static targets on FPGA.",
          "Achieved approximately 45× speedup versus the software implementation.",
        ],
        links: [
          {
            label: "Github Repo",
            href: "https://github.com/nirmalshah123/pinger_localization_FPGA",
            external: true,
          },
        ],
      },
    ],
  },

  research: {
    heading: "Research",
    intro:
      "",
    scholarUrl: "https://scholar.google.com/citations?user=Zfc8Eh0AAAAJ&hl=en",
    publications: [
      {
        title:
          "A Hardware-Software Co-Design platform to evaluate SNN workloads for ReRAM-based IMC",
        authors: ["N. Shah", "J. Sakhuja", "U. Ganguly", "S. Lashkare", "L. Somappa"],
        highlightAuthor: "N. Shah",
        venue: "IEEE International Symposium on Circuits and Systems (ISCAS)",
        venueUrl: "https://2025.ieee-iscas.org/",
        pages: "1–5",
        year: 2025,
        // tags: [""],
        links: [
          {
            label: "Scholar",
            href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Zfc8Eh0AAAAJ&citation_for_view=Zfc8Eh0AAAAJ:u-x6o8ySG0sC",
            external: true,
          },
        ],
      },
      {
        title: "A neuromodulation-based spiking neural network using ReRAM array",
        authors: ["N. Shah", "J. Sakhuja", "U. Ganguly", "S. Lashkare", "L. Somappa"],
        highlightAuthor: "N. Shah",
        venue: "IEEE International Symposium on Circuits and Systems (ISCAS)",
        venueUrl: "https://2025.ieee-iscas.org/",
        pages: "1–5",
        year: 2025,
        // tags: ["SNN", "Neuromodulation", "ReRAM"],
        links: [
          {
            label: "Scholar",
            href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Zfc8Eh0AAAAJ&citation_for_view=Zfc8Eh0AAAAJ:u5HHmVD_uO8C",
            external: true,
          },
        ],
      },
    ],
  },

  projects: {
    heading: "Projects",
    intro:
      "",
    items: [
      {
        title: "ThermalGuard: Privacy-Aware Occupancy Monitoring",
        description:
          "Built a non-invasive occupancy monitoring system for old-age homes that detects human presence and assists healthcare workers without compromising patient privacy. Utilizing thermal imaging, multithreading and cryptography, it securely processes and transmits real-time data for fall detection and elderly care.",
        tech: ["ESP32", "Raspberry Pi", "C++", "Multithreading"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/privacy-aware-thermal-vision",
            external: true,
          },
        ],
      },
      {
        title: "EchoTrack: FPGA-Based Acoustic Localization",
        description:
          "Designed a low-cost, FPGA-based acoustic pinger localization system to assist Autonomous Underwater Vehicles (AUVs) with underwater navigation. By migrating a Time Difference of Arrival (TDOA) algorithm from software to hardware, the system eliminated the need for expensive DAQs and reduced signal processing time by 95.8%.",
        tech: ["FPGA", "Vivado", "Tcl", "DSP", "Linux", "Git"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/pinger_localization_FPGA",
            external: true,
          },
        ],
      },
      {
        title: "PrimePipe: 300-Bit Hardware Modulo Accelerator",
        description:
          "Developed and benchmarked multiple FPGA-based hardware architectures to efficiently compute modulo operations for 300-bit numbers. Engineered custom pipelined algorithms in Verilog, overcoming the timing limitations of standard combinational operators to achieve reliable, high-speed execution.",
        tech: ["Resource Optimization", "FPGA", "Python"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/pipelined_modulo_machine",
            external: true,
          },
        ],
      },
      {
        title: "SparseMatrix: High Performance ONDC Microservice",
        description:
          'Developed a high-performance REST API using FastAPI to support Open Network for Digital Commerce (ONDC) integrations for the <a href="https://buildforbharat.net/" target="_blank" rel="noopener noreferrer">Build for Bharat</a> hackathon. Containerized the backend with Docker and deployed it as a highly scalable microservice on Google Cloud Run to efficiently process parallel HTTP requests.',
        descriptionHtml: true,
        tech: ["FastAPI", "Python", "Docker", "GCP"],
        links: [
          { label: "Code", href: "https://github.com/nirmalshah123/bfb_ONDC", external: true },
        ],
      },
      {
        title: "IntelliCrop: Edge AI Smart Irrigation",
        description:
          "Developed an IoT-based smart irrigation and crop monitoring system using a Raspberry Pi to track soil moisture, temperature, and humidity in real time. Integrated a custom 5-layer CNN for edge-based crop disease detection, successfully deploying a cloud-trained model locally while navigating strict embedded memory constraints.",
        tech: ["Raspberry Pi", "Python", "PyTorch", "CNN"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/Smart_Irrigation_System",
            external: true,
          },
        ],
      },
      {
        title: "ChargeTrack: Real-Time SoC Estimator",
        description:
          "Developed an embedded Battery Management System (BMS) module using an Atmega328P to monitor a 4-series LiFePo4 battery bank. The system captures real-time terminal voltages and string currents to continuously compute the State of Charge (SoC), ensuring safe and efficient power management for EV and UPS applications.",
        tech: ["C++", "ATmega328", "Embedded"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/SoC-estimation-of-LiFePo4",
            external: true,
          },
        ],
      },
      {
        title: "Silicon Symphony: VHDL Music Synthesizer",
        description:
          "Developed a digital music synthesizer on a custom Altera-V FPGA using VHDL to automatically play programmed classical Indian rhythms. Engineered a dual-module system featuring a rhythm sequencer and a tone generator to accurately calculate precise note durations and drive a hardware speaker.",
        tech: ["VHDL", "FPGA"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/Music-Synthesizer",
            external: true,
          },
        ],
      },
      {
        title: "LogicCore: 16-Bit ALU",
        description:
          "Designed and verified a 16-bit signed Arithmetic Logic Unit (ALU) capable of performing multiplexed addition, subtraction, NAND, and XOR operations. Engineered a high-speed Brent-Kung prefix adder to optimize hardware arithmetic calculations, complete with accurate Zero and Carry flags for overflow detection.",
        tech: ["VHDL"],
        links: [{ label: "Code", href: "https://github.com/nirmalshah123/16-Bit-ALU", external: true }],
      },
      {
        title: "Whac-A-mole",
        description:
          "Developed a hardware-based Whac-A-Mole arcade game on a custom 8051 microcontroller using embedded C. Implemented real-time score tracking, keyboard-to-UART communication, and a custom Linear Feedback Shift Register (LFSR) algorithm to generate pseudo-random mole patterns within a strict 10-second gameplay loop.",
        tech: ["C", "8051", "Embedded", "Linux", "Git"],
        links: [{ label: "Code", href: "https://github.com/nirmalshah123/Whac-A-mole", external: true }],
      },
      // {
      //   title: "Slew-boosted OTA",
      //   description:
      //     "Designed an operational transconductance amplifier in NGspice (130 nm models) and added an auxiliary slew-boost circuit from a reference paper; iterated to meet the assignment specifications.",
      //   tech: ["NGspice", "Analog IC"],
      //   links: [
      //     {
      //       label: "Code",
      //       href: "https://github.com/nirmalshah123/Slew_boosted_OTA",
      //       external: true,
      //     },
      //   ],
      // },
      {
        title: "FaultSim: Parallel Monte-Carlo Engine",
        description:
          "Developed a custom Python-based Monte-Carlo fault-simulation framework designed for seamless shell-script automation via a dedicated Command Line Interface (CLI). Leveraged a hybrid architecture using multiprocessing to run 10,000 parallel simulations, achieving a 5× improvement in overall execution speed.",
        tech: ["Python","Multithreading","Monte-Carlo"],
        links: [
          {
            label: "Code",
            href: "https://github.com/nirmalshah123/fault_simulation_toolkit",
            external: true,
          },
        ],
      },
      // {
      //   title: "CSCE 735 coursework",
      //   description:
      //     "Homework and assignments for CSCE 735 (Texas A&M); code primarily in C. README contains only the course label—see the repo tree for deliverables.",
      //   tech: ["C"],
      //   links: [{ label: "Code", href: "https://github.com/nirmalshah123/CSCE735-HW", external: true }],
      // },
    ],
  },

  skills: {
    heading: "Skills & Tools",
    groups: [
      {
        name: "Languages",
        items: ["C++", "Python", "C", "SystemVerilog", "Verilog"],
      },
      {
        name: "Systems & Performance",
        items: [
          "Low-latency system design",
          "Memory-efficient programming",
          "Concurrency & parallelism",
          "Linux systems",
        ],
      },
      {
        name: "FPGA & Hardware",
        items: [
          "RTL design & verification",
          "FPGA (Zynq-7000)",
          "Digital design (FSMs, pipelining)",
          "Hardware-software co-design",
        ],
      },
      {
        name: "Machine Learning",
        items: [
          "PyTorch",
          "Neural networks",
          "Model optimization for edge",
          "ML systems basics",
        ],
      },
      {
        name: "Tools",
        items: [
          "Vivado",
          "Git",
          "Linux",
          "Jupyter",
          "NGspice",
          "FastAPI",
        ],
      },
    ],
  },
  contact: {
    heading: "Contact",
    intro: "Reach out by email or connect on LinkedIn or GitHub.",
    email: "nirmalshah3012@gmail.com",
    social: [
      { label: "GitHub", href: "https://github.com/nirmalshah123", icon: "github" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nirmalshah123/", icon: "linkedin" },
    ],
  },

  footer: {
    text: "© YEAR Nirmal Shah. Hosted on GitHub Pages.",
  },
};
