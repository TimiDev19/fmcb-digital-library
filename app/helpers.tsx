export type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  year?: string;
};

export type CourseWeek = {
  id: string;
  title: string;
  files: Resource[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  weeks: CourseWeek[];
};

export const books: Resource[] = [
  {
    id: "1",
    title: "Demography Analysis and Synthesis.",
    description: "A treatise in population.",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/file/d/1lmKfuSjZwn5AY08D3JrQWcKtBZd2RT31/view?usp=drive_link",
    year: "Download Now",
  },
  {
    id: "2",
    title: "Using ArcGIS Spatial Analyst",
    description: "GIS by ESRI",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/file/d/13brRDiVR7kutUXsbSZs92spBG7J3K7nd/view?usp=drive_link",
    year: "Download Now",
  },
  {
    id: "3",
    title: "Fundamentals of Biostatistics (7th Edition)",
    description: "",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/file/d/1QmWYp49IMASE5L14XAWMD8BhtJrttm5i/view?usp=drive_link",
    year: "Download Now",
  },
  {
    id: "4",
    title: "Handbook of Epidemiology",
    description: "",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/file/d/1Jz2iHjDcPLovcA-kQ7ktbd9NOHoNn1nJ/view?usp=drive_link",
    year: "Download Now",
  },
  {
    id: "5",
    title: "Principles and Practice of Surgery",
    description: "Including pathology in the tropics",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/file/d/1Jz2iHjDcPLovcA-kQ7ktbd9NOHoNn1nJ/view?usp=drive_link",
    year: "Download Now",
  },
  {
    id: "6",
    title: "Oxford Textbook of Public Health 4th Edition",
    description: "",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/file/d/1u9uEKBuj45p5DYOYuQegG67TEArlkhvj/view?usp=drive_link",
    year: "Download Now",
  },
];

// Example structure: give every week its own `files` array. Replace this
// sample course and sample links with the department's actual materials.
export const courses: Course[] = [
  {
    id: "1",
    title: "CMH Course",
    description: "",
    weeks: [
      {
        id: "1",
        title: "Week 2",
        files: [
          {
            id: "1",
            title:
              "Updated Recommendations On First-Line and Second-Line Antiretroviral Regimens and Post-Exposure Prophylaxis and Recommendations on Early Infant Diagnosis of HIV",
            description:
              "SUPPLEMENT TO THE 2016 CONSOLIDATED GUIDELINES ON THE USE OF ANTIRETROVIRAL DRUGS FOR TREATING AND PREVENTING HIV INFECTION",
            category: "Lecture notes",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1nMD0yU9cg4BGx12q_O4HysilhiF5FBRV/view?usp=sharing",
          },
        ],
      },
      {
        id: "2",
        title: "Week 5",
        files: [
          {
            id: "1",
            title: "Evaluation and Management of Virologic Failure",
            description: "",
            category: "Lecture notes",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1WdvRiKozJTLKvXMflwHoSg-cPzxJLWZ6/view?usp=sharing",
          },
        ],
      },
      {
        id: "3",
        title: "Week 7",
        files: [
          {
            id: "1",
            title:
              "UPDATED RECOMMENDATIONS ON HIV PREVENTION, INFANT DIAGNOSIS, ANTIRETROVIRAL INITIATION AND MONITORING",
            description: "",
            category: "Lecture notes",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/17tSfL5EPq6Yw7llUZ5g4qra-Nkb9O6rW/view?usp=sharing",
          },
          {
            id: "2",
            title:
              "CONSOLIDATED GUIDELINES ON THE USE OF ANTIRETROVIRAL DRUGS FOR TREATING AND PREVENTING HIV INFECTION",
            description: "RECOMMENDATIONS FOR A PUBLIC HEALTH APPROACH",
            category: "Lecture notes",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/111Vh1hPMqVHYRh4S5fRzlNSuLhArXuLd/view?usp=sharing",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "EEGH Course",
    description: "",
    weeks: [
      {
        id: "1",
        title: "Week 4",
        files: [
          {
            id: "1",
            title: "3 case study carol levin Lower Resolution",
            description: "",
            category: "Lecture Video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1MrJ4WUbsV-_4fV_NBRyq-KEzRRn7GEzV/view?usp=sharing",
          },
          {
            id: "2",
            title:
              "3 GHCC BP Understanding Interpreting Cost Data Downloadable",
            description: "",
            category: "Lecture Video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1zyBit46ZPNFDK6IvMU_69pfCJytqk6nc/view?usp=sharing",
          },
          {
            id: "3",
            title:
              "4 Guidelines For Reporting Health Economic Evaluations Part 3 download",
            description: "",
            category: "Lecture Video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/17_1Reuut9KLg3esQQ5trLI60aZHO1EYy/view?usp=sharing",
          },
          {
            id: "4",
            title: "4 Microcosting download",
            description: "",
            category: "Lecture Video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1KvDTj24k9RoH_H8ln2GAOO0zV4x5yFGr/view?usp=sharing",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "GHR Course",
    description: "",
    weeks: [
      {
        id: "1",
        title: "Week 5",
        files: [
          {
            id: "1",
            title: "Statistical Resources and Sample Size",
            description: "",
            category: "Lecture video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1srAGO7CNSb77vMapgnJkeHGWA7tIBhXZ/view?usp=sharing",
          },
        ],
      },
      {
        id: "2",
        title: "Week 6",
        files: [
          {
            id: "1",
            title: "6 Biosketch",
            description: "",
            category: "Lecture video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1zOMQx_MNJ6g-4aUw5WIO5N5UjvXgdOuQ/view?usp=sharing",
          },
          {
            id: "2",
            title: "6 Budget",
            description: "",
            category: "Lecture video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1Nom6TA8CKHmodBRyrjO3ug19VPtSL3n6/view?usp=sharing",
          },
          {
            id: "3",
            title: "6 Critical Grant Components",
            description: "",
            category: "Lecture video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/11Hk3dRLgehWlH69hZqqbL_wWufGl6e6i/view?usp=sharing",
          },
          {
            id: "4",
            title: "6 Peer Review",
            description: "",
            category: "Lecture video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1JD8zeWiA222yKP7Q-WolCDA9GYjDc2-h/view?usp=sharing",
          },
          {
            id: "5",
            title: "Budget Template",
            description: "",
            category: "Lecture file",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://docs.google.com/spreadsheets/d/1NPeeqr1ZcQIzelKh_AqnqHdvW52VVcoD/edit?usp=sharing&ouid=115141053448120915969&rtpof=true&sd=true",
          },
          {
            id: "6",
            title: "GHR NIH Mock Review Document",
            description: "",
            category: "Lecture notes",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1A_ePTtdU6EZviPjfHPvWJbB3Ef3NCWB8/view?usp=sharing",
          },
          {
            id: "7",
            title: "CONDUCTING RESEARCH RESPONSIBLY IN GLOBAL HEALTH",
            description: "Fiscal Responsibility",
            category: "Lecture notes",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1ItqnWJSfw8eCaeeOoZnaJoG0uGg7n-xU/view?usp=sharing",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "M&E University of Washington",
    description: "",
    weeks: [
      {
        id: "1",
        title: "Module 8",
        files: [
          {
            id: "1",
            title: "Designing Data Collection Tools",
            description: "",
            category: "Lecture video",
            image:
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
            link: "https://drive.google.com/file/d/1bLPodVrdC6M-we4OUQSQwAYdy1Fw215r/view?usp=sharing",
          },
        ],
      },
    ],
  },
];

export const journals: Resource[] = [
  {
    id: "journal-african",
    title: "African Journal of Primary Health Care",
    description: "Research advancing primary healthcare across the continent.",
    category: "Research journal",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "Latest issue",
  },
  {
    id: "journal-nigerian",
    title: "Nigerian Medical Journal",
    description: "Peer-reviewed evidence relevant to local clinical practice.",
    category: "Research journal",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "Current volume",
  },
  {
    id: "journal-community",
    title: "Community Health Review",
    description:
      "Interdisciplinary perspectives on care, equity and prevention.",
    category: "Research journal",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "Latest issue",
  },
];

export const pictures: Resource[] = [
  {
    id: "picture-outreach",
    title: "Community Outreach",
    description:
      "Snapshots from preventive care and health education activities.",
    category: "Department gallery",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=80",
    link: "https://drive.google.com/",
  },
  {
    id: "picture-learning",
    title: "Learning Together",
    description: "Training, mentoring and shared practice in the department.",
    category: "Department gallery",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80",
    link: "https://drive.google.com/",
  },
  {
    id: "picture-care",
    title: "Care in Context",
    description: "A visual record of compassionate community health services.",
    category: "Department gallery",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    link: "https://drive.google.com/",
  },
];
