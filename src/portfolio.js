
const settings = {
  isSplash: false, 
};

const seo = {
  title: "Chaitanya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Chaitanya Deshmukh",
    type: "website",
    url: "https://chaitanya276.github.io/chaitanya-deshmukh/",
  },
};

const typeWriterText = [
  "A pragmatic developer",
  4000,
  "I create secure and scalable salesforce apps",
  7000,
  "Develop aesthic and modern apps",
  5000,
];

//Home Page
const greeting = {
  wish: "Hi, there!",
  iam: "I am ",
  title: "Chaitanya Deshmukh",
  logo_name: "AshutoshHathidara",
  subTitle:
    "A passionate individual who always thrives to work on end to end " +
    "products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1v-IeEjvsLsS7tDrNNvUgiu3_JLThaY_3/view?usp=sharing",
  githubProfile: "https://github.com/Chaitanya276",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Chaitanya276",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/chaitanya-deshmukh-b7aa72164/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:chaitanyadeshmukh321@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
];
const importantWords = ["sharing", "rules", "security settings"];
const skills = {
  data: [
    {
      title: "Salesforce",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in TRIGGERS, FLOWS, APPROVAL PROCESS enhancing the system's robustness and efficiency.",
        "⚡ Expertise in sharing rules and security settings for maintaining sensitive information, data integrity and confidentiality.",
        "⚡ Capable of integrating Platform Events, Change Data Capture, API to facilitate system interoperability and responsiveness.",
        "⚡ Skilled in integrating Salesforce with external systems and applications using APIs and middleware, enabling seamless data exchange and process automation.",
      ],
      softwareSkills: [
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "simple-icons:salesforce",
          style: {
            // backgroundColor: "transparent",
            color: "#00A1E0",
          },
        },
        {
          skillName: "Triggers",
          imageSrc: "triggers.png",
        },
        {
          skillName: "Flows",
          imageSrc: "flow.png",
        },
        {
          skillName: "Integration",
          imageSrc: "integration.png",
        },
        {
          skillName: "Sharing and Security",
          imageSrc: "sharing_security.png",
        },
        {
          skillName: "Reports and Dashboards",
          imageSrc: "Reports_And_Dashboards.png",
        },
        {
          skillName: "Platform Events",
          imageSrc: "platform_events.png",
        },
        {
          skillName: "Approval Process",
          imageSrc: "approval_process.png",
        },
        {
          skillName: "Entitlement Management",
          imageSrc: "entitlement_management.png",
        },
        {
          skillName: "User Management",
          imageSrc: "user_management.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing backend using Spring Boot, leveraging features for dependency injection, RESTful APIs, and Microservices Architecture.",
        "⚡ Proficient in Java programming language, and utilizing security.",
        "⚡ Building interactive user interfaces with React.js, follwing the UI guidlines, harnessing its component-based architecture and virtual DOM for efficient rendering, etc.",
        "⚡ Worked with PostgreSQL, MySQL and Firebase, utilizing its advanced features for data integrity, performance, and scalability.",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#77BC1F",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#F7C427",
          },
        },
      ],
    },
    {
      title: "Android Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Achieving optimal Android app performance involves thorough testing, debugging, and optimization techniques to deliver a superior user experience.",
        "⚡ Crafting feature-rich Android applications using Java and Kotlin, employing their expressive syntax and robust libraries for efficient development.",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3BD482E",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#EB7D1E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#55C0F1",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#045599",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#022E38",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "S. B. Jain Institute of Technology, Management & Research",
      subtitle: "B.E. in Computer Science and Engineering",
      logo_path: "sbjain_logo.png",
      alt_name: "S. B. Jain Institute of Technology, Management & Research",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, etc.",
        "⚡ Apart from this, I have done courses on  Java, Gen AI, land earnt Android Development, HTML, CSS, Basics of JS, etc.",
        "⚡ Our team got qalified for the Smart India Hackathod in the 2nd year.",
        "⚡ I spearheaded the forum committee of CSE branch by working as a Vice-President, and served as a mentor next year.",
      ],
      website_link: "https://www.sbjit.edu.in/",
    },
    {
      title: "Maharashtra State Board",
      subtitle: "12th in Computer Science",
      logo_path: "hscboard_logo.png",
      alt_name:
        "Maharashtra State Board of Secondary and Higher Secondary Education",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have developed intrest in computer engineering and started learning C, C++, HTML, CSS, etc.",
        "⚡ Secured 1st rank from CSE branch in college.",
      ],
      website_link: "https://mahahsscboard.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "With a diverse professional background spanning nearly 2 years in the dynamic landscape of IT, I've navigated various roles from SFDC developer and Java developer to Android developer in burgeoning startups and esteemed corporations, primarily focusing on Salesforce development. As an enthusiastic programmer, I make it a habit to keep up with the freshest in tech by watching news and also love reading books regularly.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Salesforce Developer",
          company: "Cybage .",
          company_url: "https://www.cybage.com/",
          logo_path: "cybage_logo.png",
          duration: "Aug 2022 - Present",
          location: "Pune, MH, India",
          descriptions: [
            "I played a pivotal role in the development of our monitoring dashboard, ensuring seamless tracking of integration failures with a remarkable 30% increase in speed for our admin team. Moreover, my innovative UI enhancements not only heightened user engagement by 25% but also slashed bounce rates by 15%, ultimately accelerating our website launch timeline.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Java Intern",
          company: "Infosane.",
          company_url: "https://infosane.co.in/",
          logo_path: "infosane_logo.png",
          duration: "Jan 2022 - Apr 2022",
          location: "Nagpur, Maharashtra",
          descriptions: [
            "I effectively resolved a persistent mic issue in our video calling feature on Android WebView, ensuring smooth functionality. Furthermore, I identified and fixed performance bottlenecks in the backend, resulting in a 20% faster app loading speed and a 25% decrease in crashes. Additionally, I provided valuable UI design input, fixed critical bugs, and conducted code reviews, boosting stability and satisfaction.",
          ],
          color: "#ee3c26",
        },
        {
          title: "Flutter Intern",
          company: "India JobIn",
          company_url: "",
          logo_path: "indiajobin_logo.jpg",
          duration: "Sept 2021 - Dec 2021",
          location: "Nagpur, MH, India",
          descriptions: [
            "I led the development of the backend infrastructure, implementing a scalable architecture to accommodate a high volume of users. Additionally, I seamlessly integrated various APIs and optimized the profile page code, reducing its length from 1036 lines to 530 lines. Furthermore, I designed and implemented a filter functionality, enhancing user interaction by 20%. I successfully integrated Razorpay for a smooth and seamless payment processing experience.",
          ],
          color: "#000000",
        },
        {
          title: "Android Intern",
          company: "ReConnectin Technologies Pvt. Ltd. ",
          company_url: "https://www.reconnectintech.com/",
          logo_path: "reconnectin_technologies_logo.jpg",
          duration: "Jun 2021 - Aug 2021",
          location: "Work From Home",
          descriptions: [
            "I created an Android app facilitating efficient doctor appointment bookings for patients. I tackled the issue of preventing simultaneous bookings for the same day and time. Additionally, I presented UI design recommendations to enhance the user experience and streamline the appointment booking process.",
          ],
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  // description:
  //   "Project headline will be here",
  description: "Details will be uploaded soon...",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  description: "Details will be uploaded soon...",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "chaitanya_deshmukh_circle1.png",
    // description:
    //   "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
  },
  addressSection: {
    title: "Address",
    subtitle: "Nagpur, Maharashtra, India",
    locality: "Indian",
    country: "India",
    region: "Maharashtra",
    postalCode: "440035",
    // streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  importantWords,
  typeWriterText,
};
