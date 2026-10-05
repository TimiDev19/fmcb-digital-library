export type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  year?: string;
};

export const books: Resource[] = [
  {
    id: "book-primary-health",
    title: "Primary Health Care",
    description:
      "A practical foundation for accessible, person-centred community care.",
    category: "Core text",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "2024 edition",
  },
  {
    id: "book-epidemiology",
    title: "Essentials of Epidemiology",
    description:
      "Tools for understanding patterns of health and disease in populations.",
    category: "Public health",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "Reference",
  },
  {
    id: "book-family",
    title: "Family Medicine Handbook",
    description: "Clinical guidance for the first-contact healthcare setting.",
    category: "Clinical care",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "Reference",
  },
  {
    id: "book-health-promotion",
    title: "Health Promotion in Practice",
    description:
      "Community-led strategies for healthier lives and better outcomes.",
    category: "Community health",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    link: "https://drive.google.com/",
    year: "2023 edition",
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
