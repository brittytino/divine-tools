import { Domain, Project, Testimonial, DynamicStat, PopupMessage } from './types';
import { 
  Users, 
  TrendingUp, 
  Star, 
  BookOpen,
  Lightbulb,
  Brain,
  Globe,
  Shield,
  Cloud,
  Database,
  Smartphone,
  Cpu
} from 'lucide-react';

export const domains: Domain[] = [
  { 
    id: "ai", 
    name: "AI/ML", 
    icon: "🤖", 
    description: "Artificial Intelligence & Machine Learning",
    trending: true,
    trendingMessage: "🔥 Most in-demand for 2025"
  },
  { 
    id: "web", 
    name: "Web Development", 
    icon: "🌐", 
    description: "Full-stack & Modern Web Apps",
    trending: true,
    trendingMessage: "⚡ Fastest growing field"
  },
  { 
    id: "iot", 
    name: "IoT", 
    icon: "📡", 
    description: "Internet of Things & Embedded Systems",
    trending: false 
  },
  { 
    id: "cybersec", 
    name: "Cyber Security", 
    icon: "🔒", 
    description: "Security & Privacy Solutions",
    trending: true,
    trendingMessage: "💼 Highest paying domain"
  },
  { 
    id: "mobile", 
    name: "App Development", 
    icon: "📱", 
    description: "Mobile & Cross-platform Apps",
    trending: false
  },
  { 
    id: "cloud", 
    name: "Cloud Computing", 
    icon: "☁️", 
    description: "Cloud Infrastructure & DevOps",
    trending: true,
    trendingMessage: "🚀 Cloud is the future"
  },
  { 
    id: "data", 
    name: "Data Science", 
    icon: "📊", 
    description: "Big Data & Analytics",
    trending: true,
    trendingMessage: "📈 High growth potential"
  }
];

export const sampleProjects: Project[] = [
  // Web Development Projects
  {
    title: "Real-time Collaborative Code Editor",
    description: "Build a web-based code editor that allows multiple users to edit code simultaneously with features like syntax highlighting, live collaboration, and version control.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 1250,
    trending: true,
    domain: "web"
  },
  {
    title: "AI-Powered Job Board Platform",
    description: "Create a job board that uses AI to match candidates with job postings, featuring resume parsing and skill analysis.",
    stack: ["Next.js", "Python", "PostgreSQL", "TensorFlow"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "web"
  },
  {
    title: "E-learning Management System",
    description: "Develop a comprehensive LMS with video courses, quizzes, progress tracking, and certificates.",
    stack: ["Vue.js", "Django", "PostgreSQL", "Redis"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 850,
    trending: false,
    domain: "web"
  },
  {
    title: "Social Media Analytics Dashboard",
    description: "Build a dashboard to track and analyze social media metrics across multiple platforms.",
    stack: ["React", "Node.js", "GraphQL", "MongoDB"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 720,
    trending: true,
    domain: "web"
  },
  {
    title: "Real Estate Virtual Tour Platform",
    description: "Create a platform for virtual property tours with 3D visualization and booking system.",
    stack: ["Three.js", "Next.js", "Node.js", "PostgreSQL"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 890,
    trending: true,
    domain: "web"
  },

  // Mobile Development Projects
  {
    title: "Cross-platform Fitness Tracking App",
    description: "Build a comprehensive fitness app with workout plans, progress tracking, and social features.",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 1100,
    trending: true,
    domain: "mobile"
  },
  {
    title: "AR-based Interior Design App",
    description: "Create an app that lets users visualize furniture and decor in their space using AR.",
    stack: ["Unity", "ARKit", "ARCore", "Node.js"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 950,
    trending: true,
    domain: "mobile"
  },
  {
    title: "Local Food Discovery App",
    description: "Develop an app to discover local restaurants with AI-powered recommendations.",
    stack: ["Flutter", "Firebase", "TensorFlow Lite", "Google Maps API"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 780,
    trending: false,
    domain: "mobile"
  },
  {
    title: "Mental Health Tracking App",
    description: "Create an app for mood tracking, journaling, and mental health resources.",
    stack: ["React Native", "Node.js", "MongoDB", "AWS"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 920,
    trending: true,
    domain: "mobile"
  },
  {
    title: "Smart Home Control App",
    description: "Build an IoT-enabled app to control smart home devices with voice commands.",
    stack: ["Flutter", "Firebase", "MQTT", "TensorFlow Lite"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 850,
    trending: true,
    domain: "mobile"
  },

  // AI/ML Projects
  {
    title: "AI-Powered Personal Finance Manager",
    description: "Build a smart personal finance manager that uses AI to categorize transactions, predict spending patterns, and provide personalized advice.",
    stack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1500,
    trending: true,
    domain: "ai"
  },
  {
    title: "Real-time Sign Language Translator",
    description: "Create an AI system that translates sign language to text and speech in real-time.",
    stack: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1200,
    trending: true,
    domain: "ai"
  },
  {
    title: "Automated Essay Grading System",
    description: "Develop an AI system to grade essays based on various parameters like grammar, coherence, and content.",
    stack: ["Python", "NLTK", "Scikit-learn", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 890,
    trending: false,
    domain: "ai"
  },
  {
    title: "AI Music Composer",
    description: "Build an AI system that can compose original music in different styles and genres.",
    stack: ["Python", "TensorFlow", "Magenta", "Flask"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "ai"
  },
  {
    title: "Smart Agriculture Monitoring System",
    description: "Create an AI-powered system for crop health monitoring and yield prediction.",
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 750,
    trending: false,
    domain: "ai"
  },

  // IoT Projects
  {
    title: "Smart Traffic Management System",
    description: "Build an IoT-based system for real-time traffic monitoring and signal optimization.",
    stack: ["Python", "Raspberry Pi", "MQTT", "TensorFlow"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "iot"
  },
  {
    title: "Smart Parking System",
    description: "Create an IoT solution for parking space detection and management.",
    stack: ["Arduino", "ESP32", "MQTT", "React Native"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 850,
    trending: true,
    domain: "iot"
  },
  {
    title: "Home Energy Management System",
    description: "Develop a system to monitor and optimize home energy consumption.",
    stack: ["Raspberry Pi", "Node.js", "MQTT", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 720,
    trending: false,
    domain: "iot"
  },
  {
    title: "Smart Greenhouse Automation",
    description: "Build an automated greenhouse system with climate control and plant monitoring.",
    stack: ["Arduino", "ESP8266", "MQTT", "Python"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 890,
    trending: true,
    domain: "iot"
  },
  {
    title: "Wearable Health Monitor",
    description: "Create a wearable device for health monitoring with real-time data analysis.",
    stack: ["ESP32", "Arduino", "BLE", "React Native"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 950,
    trending: true,
    domain: "iot"
  },

  // Blockchain Projects
  {
    title: "Decentralized Supply Chain",
    description: "Build a blockchain-based supply chain management system with product tracking.",
    stack: ["Solidity", "React", "Node.js", "IPFS"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1100,
    trending: true,
    domain: "blockchain"
  },
  {
    title: "NFT Marketplace",
    description: "Create a marketplace for creating, buying, and selling NFTs.",
    stack: ["Solidity", "Next.js", "Ethers.js", "IPFS"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1300,
    trending: true,
    domain: "blockchain"
  },
  {
    title: "Decentralized Voting System",
    description: "Develop a secure and transparent voting system using blockchain.",
    stack: ["Solidity", "React", "Web3.js", "Node.js"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 950,
    trending: false,
    domain: "blockchain"
  },
  {
    title: "DeFi Lending Platform",
    description: "Build a decentralized lending platform with smart contracts.",
    stack: ["Solidity", "React", "Web3.js", "The Graph"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1050,
    trending: true,
    domain: "blockchain"
  },
  {
    title: "Blockchain-based Identity Management",
    description: "Create a decentralized identity management system with privacy features.",
    stack: ["Solidity", "Next.js", "IPFS", "Node.js"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 880,
    trending: true,
    domain: "blockchain"
  }
];

export const dynamicStats = [
  {
    label: "Students",
    value: 1200,
    icon: Users
  },
  {
    label: "Projects",
    value: 500,
    icon: BookOpen
  },
  {
    label: "Success Rate",
    value: 94,
    suffix: "%",
    icon: TrendingUp
  },
  {
    label: "Rating",
    value: 4.8,
    icon: Star
  }
];

export const testimonials = [
  {
    name: "Alex Johnson",
    college: "MIT",
    text: "Found my perfect project in minutes! The AI suggestions were spot-on.",
    rating: 5,
    avatar: "AJ"
  },
  {
    name: "Sarah Chen",
    college: "Stanford",
    text: "The secure project sharing feature is amazing. No more worrying about idea theft!",
    rating: 5,
    avatar: "SC"
  }
];

export const popupMessages = [
  {
    text: "🎯 New project idea generated for Machine Learning!",
    type: "success",
    icon: "🎯"
  },
  {
    text: "🔒 Your project ideas are end-to-end encrypted",
    type: "success",
    icon: "🔒"
  },
  {
    text: "🚀 Join 1200+ students who found their perfect project",
    type: "success",
    icon: "🚀"
  }
];

export const collegeLogos = [
  { name: "MIT", logo: "/logos/mit.png" },
  { name: "Stanford", logo: "/logos/stanford.png" },
  { name: "Harvard", logo: "/logos/harvard.png" },
  { name: "Berkeley", logo: "/logos/berkeley.png" }
];

export const domainIcons = {
  ai: Brain,
  web: Globe,
  cybersec: Shield,
  cloud: Cloud,
  data: Database,
  mobile: Smartphone,
  iot: Cpu
}; 