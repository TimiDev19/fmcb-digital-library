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
    id: "32",
    title: "Jekel’s Epidemiology, Biostatistics, Preventive Medicine, and Public",
    description: "",
    category: "Core text",
    image:
      "/books/book32.png",
    link: "https://drive.google.com/file/d/1752M44Qj-RkOj2yp56llaUWMkXTd_qAD/view?usp=sharing",
    year: "",
  },
  {
    id: "33",
    title: "Leon Gordis Epidemioly  6th Edition",
    description: "",
    category: "Core text",
    image:
      "/books/book33.png",
    link: "https://drive.google.com/file/d/1R21Twd6PEnubjdw_pG34GovuIlzdl2v5/view?usp=sharing",
    year: "",
  },
  {
    id: "1",
    title: "QUANTITATIVE METHODS IN HEALTH CARE MANAGEMENT",
    description: "Techniques and Applications",
    category: "Core text",
    image:
      "/books/book1.png",
    link: "https://drive.google.com/file/d/1S5aHh41S7GY0Jxpx6n4fS3hzaldikkGJ/view?usp=sharing",
    year: "Yasar A. Ozcan",
  },
  {
    id: "2",
    title: "Data Analysis Using Regression and Multilevel/Heirarchial Models",
    description: "",
    category: "Core text",
    image:
      "/books/book2.png",
    link: "https://drive.google.com/file/d/1uTY1uNxN6eXNcNAqojYulkkfDr32x9qy/view?usp=sharing",
    year: "Andrew Gelhan & Jennifer Hill",
  },
  {
    id: "3",
    title: "A Handbook of Statistical Analyses using Stata",
    description: "",
    category: "Core text",
    image:
      "/books/book3.png",
    link: "https://drive.google.com/file/d/1IK3XnI8FXy1BtklJgIoYR8-wQA0ll1m_/view?usp=sharing",
    year: "Sophia Rabe-Hesketh & Brian Everitt",
  },
  {
    id: "4",
    title: "A Practical Guide for Health Researchers",
    description: "",
    category: "Core text",
    image:
      "/books/book4.png",
    link: "https://drive.google.com/file/d/1qhU7lBQrx8lSzAiFZPyHTSiSg9dWDEZ5/view?usp=sharing",
    year: "Mahmoud F. Fathalla",
  },
  {
    id: "5",
    title: "A Primer for Benefit Cost Analysis",
    description: "",
    category: "Core text",
    image:
      "/books/book5.png",
    link: "https://drive.google.com/file/d/1NOCdQBcEaQ3sbC3ZCF-CE97oHJ2hFwRv/view?usp=sharing",
    year: "Richard O. Zerbe Jr. & Allen S. Bellas",
  },
  {
    id: "6",
    title: "A Short Introduction to Epidemiology",
    description: "",
    category: "Core text",
    image:
      "/books/book6.png",
    link: "https://drive.google.com/file/d/1oVwWtWnoqD-zwyU_zt_is-29BRAEQjE0/view?usp=sharing",
    year: "Neil Pearce",
  },
  {
    id: "7",
    title: "Advanced modelling in finance using Excel and VBA",
    description: "",
    category: "Core text",
    image:
      "/books/book7.png",
    link: "https://drive.google.com/file/d/1eRDkggJ_plrRbp6WbkhmG75lTJJIMPUL/view?usp=sharing",
    year: "Mary Jackson & Mike Staunton",
  },
  {
    id: "8",
    title: "An Introduction to Regression Graphics",
    description: "",
    category: "Core text",
    image:
      "/books/book8.png",
    link: "https://drive.google.com/file/d/1mK4VOaDOhGVZlykDSJVqAQy1BILFgmSg/view?usp=sharing",
    year: "R. Dennis Cook & Sanford Weisberg",
  },
  {
    id: "9",
    title: "Applied Cost Benefit Analysis",
    description: "",
    category: "Core text",
    image:
      "/books/book9.png",
    link: "https://drive.google.com/file/d/1VB2FOsiFwqn0cYC5Q1SmrPNP9jLlIcsX/view?usp=sharing",
    year: "Robert J. Brent",
  },
  {
    id: "10",
    title: "Applied Longitudinal Data Analysis for Epidemiology",
    description: "",
    category: "Core text",
    image:
      "/books/book10.png",
    link: "https://drive.google.com/file/d/1tsP_OU-dCFhSQoHUWTROsGg8ciBvN5wt/view?usp=sharing",
    year: "Jos Twisk",
  },
  {
    id: "11",
    title: "Studies in Empirical Economics",
    description: "",
    category: "Core text",
    image:
      "/books/book11.png",
    link: "https://drive.google.com/file/d/1edMgnFOpDAAKLsyFQC_2MVHjffjKaaVm/view?usp=sharing",
    year: "",
  },
  {
    id: "12",
    title: "ASSESSING QUALITY, OUTCOME AND PERFORMANCE MANAGEMENT",
    description: "",
    category: "Core text",
    image:
      "/books/book12.png",
    link: "https://drive.google.com/file/d/19H0OI5Z3EvR-Nxk-Mnz7_DEDRSfax0y5/view?usp=sharing",
    year: "Dr Javier Martinez",
  },
  {
    id: "13",
    title: "Advances in Statistical Methods for the Health Sciences",
    description: "",
    category: "Core text",
    image:
      "/books/book13.png",
    link: "https://drive.google.com/file/d/1y9xRDhqmlM7k9Y4fsqsi-n7c2XALY3kF/view?usp=sharing",
    year: "",
  },
  {
    id: "14",
    title: "Basic Epidemiology",
    description: "",
    category: "Core text",
    image:
      "/books/book14.png",
    link: "https://drive.google.com/file/d/1lFJ-H2N7cEOffRoqiq1qaz83lUK5gzIp/view?usp=sharing",
    year: "R. Bonita & R. Baeglehole & T. Kjellstrom",
  },
  {
    id: "15",
    title: "Basic Epidemiology",
    description: "",
    category: "Core text",
    image:
      "/books/book15.png",
    link: "https://drive.google.com/file/d/1lz-oARm_JZeCrt94yPChlTkRPDsTQguP/view?usp=sharing",
    year: "R. Bonita & R. Baeglehole & T. Kjellstrom",
  },
  {
    id: "16",
    title: "Basic Statistics For Clinicians",
    description: "",
    category: "Core text",
    image:
      "/books/book16.png",
    link: "https://drive.google.com/file/d/1jWJeYkBO4BXE0A8vP1j9l5mzlogf8LxI/view?usp=sharing",
    year: "Gordon Guyatt, Md; & Roman Jaeschke, Md; & Nancy Heddle, Msc; & Deborah Cook, Md; & Harry Shannon, Phd; & Stephen Walter, Phd",
  },
  {
    id: "17",
    title: "Bayesian Computation With R (2nd Edition)",
    description: "",
    category: "Core text",
    image:
      "/books/book17.png",
    link: "https://drive.google.com/file/d/178-vyf8NxtMFp6hmdSWH0SIfsc41ApPe/view?usp=sharing",
    year: "Jim Albert",
  },
  {
    id: "18",
    title: "Bayesian Modelling with winBUGS",
    description: "",
    category: "Core text",
    image:
      "/books/book18.png",
    link: "https://drive.google.com/file/d/1mW6tnqeefNDnJFpGTcrgbENYqKFbi2x4/view?usp=sharing",
    year: "Ioannis Ntzoufras",
  },
  {
    id: "19",
    title: "Biostatistics for Health Sciences",
    description: "",
    category: "Core text",
    image:
      "/books/book19.png",
    link: "https://drive.google.com/file/d/125SjckqzCjLj6KJ_vdYSksG-wpYFA3Id/view?usp=sharing",
    year: "Wayne W. Daniel & Chad L. Cross",
  },
  {
    id: "20",
    title: "Applied Epidemiology",
    description: "",
    category: "Core text",
    image:
      "/books/book20.png",
    link: "https://drive.google.com/file/d/1k6fsTQrxkpU9P6WV_OK6jCgisIGDcTGi/view?usp=sharing",
    year: "Ross C. Brownson & Diana B. Petitti",
  },
  {
    id: "21",
    title: "An Introduction to Categorical Data Analysis",
    description: "",
    category: "Core text",
    image:
      "/books/book21.png",
    link: "https://drive.google.com/file/d/12MY223Rbm76L34jm1L4pBgNzpyo0r-Ww/view?usp=sharing",
    year: "Alan Agresti",
  },
  {
    id: "22",
    title: "Principles of EPIDEMIOLOGY",
    description: "An Introduction to Applied Epidemiology and Biostatistics",
    category: "Core text",
    image:
      "/books/book22.png",
    link: "https://drive.google.com/file/d/1F8lPNQ3OsBs2qDIKgGXW4NHCP86BdYoU/view?usp=sharing",
    year: "",
  },
  {
    id: "23",
    title: "Statistical Analysis of Cost-Effectiveness Data",
    description: "",
    category: "Core text",
    image:
      "/books/book23.png",
    link: "https://drive.google.com/file/d/1hiEOqVQ8hFjQuB4rk5jYfgCxYkOmREtj/view?usp=sharing",
    year: "Andrew R. Willian & Andrew H. Briggs",
  },
  {
    id: "24",
    title: "Clinical Epidemiology",
    description: "",
    category: "Core text",
    image:
      "/books/book24.png",
    link: "https://drive.google.com/file/d/1AWT0ZVkrPee8rpPJOHVhNyJexmDfdKWO/view?usp=sharing",
    year: "Robert H. Fletcher & Suzanne W. Fletcher & Grant S. Fletcher",
  },
  {
    id: "25",
    title: "Cochrane Handbook for Systematic Reviews of Interventions",
    description: "",
    category: "Core text",
    image:
      "/books/book25.png",
    link: "https://drive.google.com/file/d/1GyCQ9D17F4jy2plolQmXgubrZKc74Tq7/view?usp=sharing",
    year: "Julian PT Higgins and Sally Green",
  },
  {
    id: "26",
    title: "Data Manipulation with R (Use R)",
    description: "",
    category: "Core text",
    image:
      "/books/book26.png",
    link: "https://drive.google.com/file/d/1BkCl_1KEgIa-_WQf81gQAIwXDToSvJlG/view?usp=sharing",
    year: "Robert Gentleman & Kurt Hornik & Giovanni Parmigiani",
  },
  {
    id: "27",
    title: "Demography Analysis and Synthesis",
    description: "A Treatis in Population",
    category: "Core text",
    image:
      "/books/book27.png",
    link: "https://drive.google.com/file/d/1LFHXMd3_WHZ2iTIN8-w_pWvjsABvRz-y/view?usp=sharing",
    year: "",
  },
  {
    id: "28",
    title: "Designing and conducting health system research projects VOL 1",
    description: "",
    category: "Core text",
    image:
      "/books/book28.png",
    link: "https://drive.google.com/file/d/1Lu8YWyEM504xd26nLtSapFc-zZBs0E4A/view?usp=sharing",
    year: "Corlien M. Varkevisser & Indra Pathmanathan & Ann Brownlee",
  },
  {
    id: "29",
    title: "Designing and conducting health system research projects VOL 2",
    description: "",
    category: "Core text",
    image:
      "/books/book29.png",
    link: "https://drive.google.com/file/d/1mj7i8KCxXxCBhXP4WAnK9NG76eRD0sXM/view?usp=sharing",
    year: "Corlien M. Varkevisser & Indra Pathmanathan & Ann Brownlee",
  },
  {
    id: "30",
    title: "Building Capacities for Risk Reduction",
    description: "",
    category: "Core text",
    image:
      "/books/book30.png",
    link: "https://drive.google.com/file/d/1ChkcW38D1CY55_YeTOaYHsluU1-NDtWK/view?usp=sharing",
    year: "Corlien M. Varkevisser & Indra Pathmanathan & Ann Brownlee",
  },
  {
    id: "31",
    title: "Evidence-based Medicine Toolkit",
    description: "",
    category: "Core text",
    image:
      "/books/book31.png",
    link: "https://drive.google.com/file/d/1cGZz064c4IbzqQk05ORGpwl7gs5GqurT/view?usp=sharing",
    year: "Carl Heneghan and Douglas Badenoch",
  },
];

// Example structure: give every week its own `files` array. Replace this
// sample course and sample links with the department's actual materials.
export const courses: Course[] = [
  {
    id: "1",
    title: "Clinical Management of HIV Course",
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
    title: "Economic Evaluation in Global Health Course",
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
    title: "Global Health Research Course",
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
    title: "Monitoring & Evaluation in Global Health",
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
  // {
  //   id: "picture-outreach",
  //   title: "Community Outreach",
  //   description:
  //     "Snapshots from preventive care and health education activities.",
  //   category: "Department gallery",
  //   image:
  //     "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=80",
  //   link: "https://drive.google.com/",
  // },
  // {
  //   id: "picture-learning",
  //   title: "Learning Together",
  //   description: "Training, mentoring and shared practice in the department.",
  //   category: "Department gallery",
  //   image:
  //     "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80",
  //   link: "https://drive.google.com/",
  // },
  {
    id: "1",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/1.jpg",
    link: "https://drive.google.com/file/d/1Zu3GElFVylwxbcr3yXO0NW3wTp5Masct/view?usp=drive_link",
  },
  {
    id: "2",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/2.jpg",
    link: "https://drive.google.com/file/d/1xJdz9PhGec-9-PlKl56In00G03ZMojeJ/view?usp=drive_link",
  },
  {
    id: "3",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/3.jpg",
    link: "https://drive.google.com/file/d/1j19lyYvk-Smzj9WynwXyb05dXktn5nCB/view?usp=drive_link",
  },
  {
    id: "4",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/4.jpg",
    link: "https://drive.google.com/file/d/1vtQNJIwQEldYxhzXSAOrXAcG8z8XBRxH/view?usp=drive_link",
  },
  {
    id: "5",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/5.jpg",
    link: "https://drive.google.com/file/d/1Aei6pCjOgi2g-GpmEHCegdqCM0CFcTEm/view?usp=drive_link",
  },
  {
    id: "6",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/6.jpg",
    link: "https://drive.google.com/file/d/1QjXtHDxUYAgGjgNgJIcLwlViJn0LXHvy/view?usp=drive_link",
  },
  {
    id: "7",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/7.jpg",
    link: "https://drive.google.com/file/d/1gmCzAkIudZB6EaQck9QJuVmaw-krgg5f/view?usp=drive_link",
  },
  {
    id: "8",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/8.jpg",
    link: "https://drive.google.com/file/d/1qF-vLym1DA3GxY238-OJaHM7qVm2o63b/view?usp=drive_link",
  },
  {
    id: "9",
    title: "",
    description: "",
    category: "Department gallery",
    image:
      "/pictures/9.jpg",
    link: "https://drive.google.com/file/d/1677pa9wZAb5wYvkFCjgtYR7Y13QtK8DN/view?usp=drive_link",
  },
  {
    id: "10",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/10.jpg",
    link: "https://drive.google.com/file/d/1ls08BSHSqJg6at04bRiXm8MrMfb0_g4T/view?usp=drive_link",
  },
  {
    id: "11",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/11.jpg",
    link: "https://drive.google.com/file/d/1_oQQL_x8H74GT8QCcSO9nvGXP9C-aVsA/view?usp=drive_link",
  },
  {
    id: "12",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/12.jpg",
    link: "https://drive.google.com/file/d/1mXtvnD4p6cmoafE6NHdTHPH3T2DYDDuU/view?usp=drive_link",
  },
  {
    id: "13",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/13.jpg",
    link: "https://drive.google.com/file/d/1PNrp7DsW-HvujL1YvBA-B9fvx01JUKaX/view?usp=drive_link",
  },
  {
    id: "14",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/14.jpg",
    link: "https://drive.google.com/file/d/1TfDLwff6xJkt5SZRa9-pej2qDVJ1aKGk/view?usp=drive_link",
  },
  {
    id: "15",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/15.jpg",
    link: "https://drive.google.com/file/d/1NKO_p6DTFbTt-38TXhOiAiNDdNqL059S/view?usp=drive_link",
  },
  {
    id: "16",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/16.jpg",
    link: "https://drive.google.com/file/d/1q5sRhm6hCiByj7cJs2GA-sL3rH_PJBxr/view?usp=drive_link",
  },
  {
    id: "17",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/17.jpg",
    link: "https://drive.google.com/file/d/1pnhNrdEzRyIZuGdFnBLwF0d0kJWHMF9O/view?usp=drive_link",
  },
  {
    id: "18",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/18.jpg",
    link: "https://drive.google.com/file/d/1y4u1j395TMo93kE48GB3SFT8ycw-NW5Q/view?usp=drive_link",
  },
  {
    id: "19",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/19.jpg",
    link: "https://drive.google.com/file/d/1l5liS4kShGQlnTSB6-Y3tepp94lEj7TB/view?usp=drive_link",
  },
  {
    id: "20",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/20.jpg",
    link: "https://drive.google.com/file/d/1afBk6WvIFTjSF6zp8G9WzQMh_z48yvg5/view?usp=drive_link",
  },
  {
    id: "21",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/21.jpg",
    link: "https://drive.google.com/file/d/1IBHPHr3lnhSoO_zTDOdjLUjGzxKsHRmL/view?usp=drive_link",
  },
  {
    id: "22",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/22.jpg",
    link: "https://drive.google.com/file/d/11X5VrARgw4XDD5yVgsBaBVi4tU_fhYAJ/view?usp=drive_link",
  },
  {
    id: "23",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/23.jpg",
    link: "https://drive.google.com/file/d/1fQT9aqs7NtupbUMrLmR0pGwaTu1tzkSc/view?usp=drive_link",
  },
  {
    id: "24",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/24.jpg",
    link: "https://drive.google.com/file/d/12XoSPfFN12JLxNkoAIZjZWhARW0v1KLG/view?usp=drive_link",
  },
  {
    id: "25",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/25.jpg",
    link: "https://drive.google.com/file/d/1PDlwJmB8K3AEfjicykxQ3lzLOISRdGsM/view?usp=drive_link",
  },
  {
    id: "26",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/26.jpg",
    link: "https://drive.google.com/file/d/15RqIO8b9r3ng8XbPlHy_aEROXWeE35UR/view?usp=drive_link",
  },
  {
    id: "27",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/27.jpg",
    link: "https://drive.google.com/file/d/12xxvvA0s2_3qtUkRo7_auLbbtSobftSc/view?usp=drive_link",
  },
  {
    id: "28",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/28.jpg",
    link: "https://drive.google.com/file/d/1jxa9UJFPS63vb0_euOI3Bs4qyZT1ZThc/view?usp=drive_link",
  },
  {
    id: "29",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/29.jpg",
    link: "https://drive.google.com/file/d/1sIforXWRfr1JF-ZvrVDx2kMwp3yoE9rT/view?usp=drive_link",
  },
  {
    id: "30",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/30.jpg",
    link: "https://drive.google.com/file/d/1YBtO7PCEPjRi9aBIZrSMsQ7K7vxXdi6Z/view?usp=drive_link",
  },
  {
    id: "31",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/31.jpg",
    link: "https://drive.google.com/file/d/1gm-iuhqoqwpcNm-0ZGlf_lDRmL_onwEZ/view?usp=drive_link",
  },
  {
    id: "32",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/32.jpg",
    link: "https://drive.google.com/file/d/1Os667-YprYUYll3whZl5FoPs_NOzYaqw/view?usp=drive_link",
  },
  {
    id: "33",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/33.jpg",
    link: "https://drive.google.com/file/d/1bzMkhSCtZUuJIKlke6g8rBdHPBCzXh9U/view?usp=drive_link",
  },
  {
    id: "34",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/34.jpg",
    link: "https://drive.google.com/file/d/1tPVoM_4mlM7XjzQJazBwRO-6pTrzosJm/view?usp=drive_link",
  },
  {
    id: "35",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/35.jpg",
    link: "https://drive.google.com/file/d/1eF1IQU2FoML09pRWELt4-78YpHX2xODY/view?usp=drive_link",
  },
  {
    id: "36",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/36.jpg",
    link: "https://drive.google.com/file/d/17harVe0ua29XWf7dc6LZ-n1H3LTfjfva/view?usp=drive_link",
  },
  {
    id: "37",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/37.jpg",
    link: "https://drive.google.com/file/d/1IA34StKdWb0mF23NUS5ei8VSUHQAq5K9/view?usp=drive_link",
  },
  {
    id: "38",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/38.jpg",
    link: "https://drive.google.com/file/d/1oraN69GAA7vMSaanvbeZvrvNs0LNZ4Db/view?usp=drive_link",
  },
  {
    id: "39",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/39.jpg",
    link: "https://drive.google.com/file/d/1jN3ohWtZocxGbomq9i0dM0UFxmjjEYAq/view?usp=drive_link",
  },
  {
    id: "40",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/40.jpg",
    link: "https://drive.google.com/file/d/1EGjlQOfnS7IMav6dnBgVG9ympUf1LQzO/view?usp=drive_link",
  },
  {
    id: "41",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/41.jpg",
    link: "https://drive.google.com/file/d/1pwsuGAScVgp9wt2N8En9hBB9D2zp9rFk/view?usp=drive_link",
  },
  {
    id: "42",
    title: "",
    description: "",
    category: "Department gallery",
    image: "/pictures/42.jpg",
    link: "https://drive.google.com/file/d/1I6r3C2IYv-ujx9d6E-tQWa95D8llRcE2/view?usp=drive_link",
  },
];
