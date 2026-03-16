import { About, Resume, Services, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Owais",
  lastName: "Anwer",
  name: `Muhammad Owais Anwer`,
  role: "Full Stack Developer",
  avatar: "/images/Avatar.png",
  email: "mrowaisno30@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Owais746",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-owais-anwer-7115a1360/",
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/profile.php?id=61575004430911",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/coding_with_owais/?next=%2F",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building functional digital experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          MSC Car Rental
        </Text>
      </Row>
    ),
    href: "/work/msc-car-rental",
  },
  subline: (
    <>
      I'm Owais, a <Text as="span" size="xl" weight="strong">Full Stack Developer & Automation Specialist</Text> crafting user-centric web applications and scalable APIs.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! I am a passionate and dedicated Full Stack Web Developer, Graphic Designer, and Automation Specialist. I believe in building solutions that are not only functional, but also scalable, efficient, and future-ready. My foundation is strong in modern web frameworks and I am currently exploring Agentic AI to build autonomous workflows.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "Jan 2023 - Present",
        role: "Freelance Web Developer / Automation Specialist",
        achievements: [
          <>
            Delivered 9+ client projects with focus on SEO, performance, scalability, and automated workflows.
          </>,
          <>
            Built comprehensive full-stack platforms including ecommerce applications using the MERN stack with features like secure authentication, cart management, and serverless deployment on Vercel.
          </>,
        ],
        images: [],
      },
      {
        company: "Local IT Services",
        timeframe: "2021 - 2022",
        role: "IT Support Specialist",
        achievements: [
          <>
            Resolved 50+ hardware/software issues monthly and improved uptime across multiple software platforms.
          </>,
          <>
            Automated diagnostics with Python scripts, reducing IT troubleshooting time by 40%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Superior College, Karachi",
        description: <>Intermediate in Commerce (Expected 2025). Pursuing concurrent development in Python, n8n automations, and Agentic AI.</>,
      },
      {
        name: "National Public School",
        description: <>Matriculation (2022 - 2024). Developed an early foundation and passion for technology and web development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>Building responsive websites and scalable backends.</>
        ),
        tags: [
          {
            name: "React/Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Firebase/MongoDB",
            icon: "firebase",
          },
        ],
        images: [],
      },
      {
        title: "Automation & AI",
        description: (
          <>Scripting workflows and automating tasks.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "n8n",
            icon: "code",
          },
          {
            name: "Agentic AI",
            icon: "robot",
          },
        ],
        images: [],
      },
    ],
  },
};

const resume: Resume = {
  path: "/resume",
  label: "Resume",
  title: `Resume – ${person.name}`,
  description: `Self-driven Full Stack Developer resume of ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const services: Services = {
  path: "/services",
  label: "Services",
  title: `Services – ${person.name}`,
  description: `Web development and automation services by ${person.name}`,
};

export { person, social, newsletter, home, about, resume, work, services };
