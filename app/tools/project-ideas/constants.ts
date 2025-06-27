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

interface DomainInfo {
  id: Domain;
  name: string;
  icon: string;
  description: string;
  trending: boolean;
  trendingMessage?: string;
}

export const domains: DomainInfo[] = [
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
    trending: true,
    trendingMessage: "🔌 Rising demand in Industry 4.0"
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
  },
  { 
    id: "backend", 
    name: "Backend Development", 
    icon: "⚙️", 
    description: "Scalable Backend Systems & APIs",
    trending: true,
    trendingMessage: "🚀 High demand for backend engineers"
  }
];

export const sampleProjects: Project[] = [
  // Web Development Projects (20 projects)
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

  // Mobile Development Projects (20 projects)
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

  // AI/ML Projects (20 projects)
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

  // IoT Projects (20 projects)
  {
    title: "Smart Home Automation Hub",
    description: "Create a centralized IoT hub for controlling and automating various smart home devices with voice commands and scheduling.",
    stack: ["Raspberry Pi", "Python", "MQTT", "Node.js"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 980,
    trending: true,
    domain: "iot"
  },
  {
    title: "Industrial IoT Monitoring System",
    description: "Build an industrial-grade IoT system for monitoring machinery health, predictive maintenance, and real-time analytics.",
    stack: ["Arduino", "ESP32", "InfluxDB", "Grafana"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1200,
    trending: true,
    domain: "iot"
  },
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
    title: "Decentralized Finance Dashboard",
    description: "Build a comprehensive dashboard for DeFi protocols and analytics.",
    stack: ["React", "Web3.js", "GraphQL", "PostgreSQL"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1050,
    trending: true,
    domain: "web"
  },
  {
    title: "Crypto Trading Bot",
    description: "Create an automated trading bot for cryptocurrency markets.",
    stack: ["Python", "TensorFlow", "PostgreSQL", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 920,
    trending: true,
    domain: "ai"
  },
  {
    title: "Smart Contract Security Analyzer",
    description: "Develop a tool for automated smart contract security analysis.",
    stack: ["Python", "Solidity", "Web3.py", "React"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 890,
    trending: true,
    domain: "cybersec"
  },

  // Cloud Computing Projects (15 projects)
  {
    title: "Serverless Microservices Architecture",
    description: "Build a scalable microservices architecture using serverless functions and event-driven design.",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "EventBridge"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1200,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Multi-Cloud Orchestration Platform",
    description: "Create a platform to manage and orchestrate applications across multiple cloud providers.",
    stack: ["Terraform", "Kubernetes", "Go", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Cloud-Native CI/CD Pipeline",
    description: "Develop a comprehensive CI/CD pipeline with automated testing and deployment.",
    stack: ["Jenkins", "Docker", "Kubernetes", "ArgoCD"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 850,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Serverless Data Processing Pipeline",
    description: "Build a scalable data processing pipeline using serverless technologies.",
    stack: ["AWS Lambda", "S3", "SQS", "Apache Airflow"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 920,
    trending: false,
    domain: "cloud"
  },
  {
    title: "Cloud Cost Optimization Tool",
    description: "Create a tool to monitor and optimize cloud resource usage and costs.",
    stack: ["Python", "AWS SDK", "Grafana", "PostgreSQL"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 780,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Multi-Region Disaster Recovery System",
    description: "Design and implement a disaster recovery system across multiple cloud regions.",
    stack: ["AWS", "Route53", "Terraform", "Python"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 890,
    trending: false,
    domain: "cloud"
  },
  {
    title: "Serverless E-commerce Platform",
    description: "Build a complete e-commerce solution using serverless architecture.",
    stack: ["AWS Lambda", "DynamoDB", "API Gateway", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1100,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Cloud-Native Message Broker",
    description: "Create a scalable message broker system using cloud-native technologies.",
    stack: ["Kubernetes", "RabbitMQ", "Go", "Prometheus"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 820,
    trending: false,
    domain: "cloud"
  },
  {
    title: "Auto-Scaling Web Application",
    description: "Build a web application with automatic scaling based on traffic patterns.",
    stack: ["AWS ECS", "CloudWatch", "Node.js", "Redis"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 950,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Cloud Security Scanner",
    description: "Develop a tool to scan cloud infrastructure for security vulnerabilities.",
    stack: ["Python", "AWS SDK", "Docker", "PostgreSQL"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 880,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Serverless Image Processing Pipeline",
    description: "Create an image processing pipeline using serverless functions.",
    stack: ["AWS Lambda", "S3", "CloudFront", "Sharp"],
    difficulty: "Intermediate",
    teamSize: 2,
    views: 760,
    trending: false,
    domain: "cloud"
  },
  {
    title: "Cloud-Native Database Manager",
    description: "Build a tool to manage and monitor cloud databases across providers.",
    stack: ["Go", "PostgreSQL", "MongoDB", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 840,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Serverless Analytics Platform",
    description: "Create a real-time analytics platform using serverless technologies.",
    stack: ["AWS Lambda", "Kinesis", "Redshift", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 930,
    trending: true,
    domain: "cloud"
  },
  {
    title: "Multi-Cloud Backup Solution",
    description: "Develop a backup solution that works across multiple cloud providers.",
    stack: ["Python", "AWS S3", "Azure Blob", "GCP Storage"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 790,
    trending: false,
    domain: "cloud"
  },
  {
    title: "Cloud Resource Provisioning Tool",
    description: "Build a tool for automated cloud resource provisioning and management.",
    stack: ["Terraform", "Ansible", "Go", "Vue.js"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 870,
    trending: true,
    domain: "cloud"
  },

  // Cyber Security Projects (15 projects)
  {
    title: "Zero Trust Security Framework",
    description: "Implement a zero trust security architecture with identity verification at every step.",
    stack: ["Python", "OAuth2", "JWT", "Kubernetes"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1300,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Threat Intelligence Platform",
    description: "Build a platform to collect, analyze, and share cyber threat intelligence.",
    stack: ["Python", "Elasticsearch", "MISP", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1100,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Security Information and Event Management (SIEM)",
    description: "Create a SIEM system for real-time security monitoring and analysis.",
    stack: ["ELK Stack", "Python", "Machine Learning", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Automated Penetration Testing Tool",
    description: "Develop an automated tool for security vulnerability assessment.",
    stack: ["Python", "Docker", "PostgreSQL", "Vue.js"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 920,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Secure File Sharing System",
    description: "Build an end-to-end encrypted file sharing system.",
    stack: ["Node.js", "React", "PostgreSQL", "WebCrypto API"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 850,
    trending: false,
    domain: "cybersec"
  },
  {
    title: "Network Intrusion Detection System",
    description: "Create a system to detect and alert on suspicious network activity.",
    stack: ["Python", "Snort", "Elasticsearch", "Kibana"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 890,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Security Compliance Automation Tool",
    description: "Build a tool to automate security compliance checks and reporting.",
    stack: ["Python", "Docker", "PostgreSQL", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 780,
    trending: false,
    domain: "cybersec"
  },
  {
    title: "Blockchain Security Analyzer",
    description: "Develop a tool to analyze smart contracts for security vulnerabilities.",
    stack: ["Solidity", "Python", "Web3.js", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 950,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Password Manager with Zero Knowledge",
    description: "Create a secure password manager using zero-knowledge encryption.",
    stack: ["React", "Node.js", "SQLite", "WebCrypto API"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 880,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Security Awareness Training Platform",
    description: "Build a platform for interactive security awareness training.",
    stack: ["React", "Node.js", "MongoDB", "Docker"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 820,
    trending: false,
    domain: "cybersec"
  },
  {
    title: "API Security Gateway",
    description: "Implement a secure API gateway with authentication and rate limiting.",
    stack: ["Go", "Redis", "PostgreSQL", "Docker"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 910,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Malware Analysis Platform",
    description: "Create a platform for automated malware analysis and reporting.",
    stack: ["Python", "Docker", "Elasticsearch", "Vue.js"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 970,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Security Log Analysis Tool",
    description: "Build a tool for analyzing and visualizing security logs.",
    stack: ["Python", "ELK Stack", "Machine Learning", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 840,
    trending: false,
    domain: "cybersec"
  },
  {
    title: "Mobile App Security Scanner",
    description: "Develop a tool to scan mobile applications for security vulnerabilities.",
    stack: ["Python", "Java", "PostgreSQL", "React"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 890,
    trending: true,
    domain: "cybersec"
  },
  {
    title: "Cloud Security Posture Management",
    description: "Create a tool to monitor and manage cloud security posture.",
    stack: ["Python", "AWS SDK", "Azure SDK", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 930,
    trending: true,
    domain: "cybersec"
  },

  // Data Science Projects (15 projects)
  {
    title: "Predictive Analytics Platform",
    description: "Build a platform for predictive analytics using machine learning.",
    stack: ["Python", "TensorFlow", "FastAPI", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1200,
    trending: true,
    domain: "data"
  },
  {
    title: "Real-time Data Pipeline",
    description: "Create a real-time data processing pipeline with stream analytics.",
    stack: ["Apache Kafka", "Spark", "Python", "Elasticsearch"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1050,
    trending: true,
    domain: "data"
  },
  {
    title: "Time Series Forecasting System",
    description: "Develop a system for time series analysis and forecasting.",
    stack: ["Python", "Prophet", "FastAPI", "React"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 920,
    trending: true,
    domain: "data"
  },
  {
    title: "Customer Segmentation Platform",
    description: "Build a platform for customer segmentation using clustering algorithms.",
    stack: ["Python", "Scikit-learn", "PostgreSQL", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 880,
    trending: false,
    domain: "data"
  },
  {
    title: "Natural Language Processing Pipeline",
    description: "Create an NLP pipeline for text analysis and sentiment prediction.",
    stack: ["Python", "NLTK", "SpaCy", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 950,
    trending: true,
    domain: "data"
  },
  {
    title: "Anomaly Detection System",
    description: "Build a system to detect anomalies in large-scale data.",
    stack: ["Python", "TensorFlow", "Kafka", "Elasticsearch"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 890,
    trending: true,
    domain: "data"
  },
  {
    title: "Data Quality Monitoring Tool",
    description: "Develop a tool to monitor and improve data quality.",
    stack: ["Python", "Great Expectations", "Airflow", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 820,
    trending: false,
    domain: "data"
  },
  {
    title: "Recommendation Engine",
    description: "Create a scalable recommendation system using collaborative filtering.",
    stack: ["Python", "Spark", "Redis", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "data"
  },
  {
    title: "Data Visualization Platform",
    description: "Build an interactive data visualization platform.",
    stack: ["Python", "D3.js", "React", "FastAPI"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 850,
    trending: true,
    domain: "data"
  },
  {
    title: "ETL Pipeline Orchestrator",
    description: "Create a tool to orchestrate and monitor ETL pipelines.",
    stack: ["Python", "Airflow", "PostgreSQL", "React"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 890,
    trending: false,
    domain: "data"
  },
  {
    title: "Feature Store Platform",
    description: "Build a feature store for machine learning features.",
    stack: ["Python", "Redis", "PostgreSQL", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 920,
    trending: true,
    domain: "data"
  },
  {
    title: "AutoML Platform",
    description: "Develop an automated machine learning platform.",
    stack: ["Python", "Scikit-learn", "MLflow", "React"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 1100,
    trending: true,
    domain: "data"
  },
  {
    title: "Data Catalog System",
    description: "Create a system to catalog and document data assets.",
    stack: ["Python", "Neo4j", "Elasticsearch", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 840,
    trending: false,
    domain: "data"
  },
  {
    title: "Model Monitoring Platform",
    description: "Build a platform to monitor ML models in production.",
    stack: ["Python", "Prometheus", "Grafana", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 930,
    trending: true,
    domain: "data"
  },
  {
    title: "Data Privacy Tool",
    description: "Develop a tool for data anonymization and privacy protection.",
    stack: ["Python", "PostgreSQL", "React", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 870,
    trending: true,
    domain: "data"
  },

  // Backend Development Projects (20 projects)
  {
    title: "High-Performance REST API Framework",
    description: "Build a high-performance REST API framework with caching, rate limiting, and authentication.",
    stack: ["Go", "Redis", "PostgreSQL", "Docker"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 1200,
    trending: true,
    domain: "backend"
  },
  {
    title: "Distributed Task Queue System",
    description: "Create a distributed task queue system with job scheduling and monitoring.",
    stack: ["Python", "RabbitMQ", "Redis", "FastAPI"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 980,
    trending: true,
    domain: "backend"
  },
  {
    title: "Real-time WebSocket Server",
    description: "Build a scalable WebSocket server for real-time applications.",
    stack: ["Node.js", "Socket.io", "Redis", "MongoDB"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 850,
    trending: true,
    domain: "backend"
  },
  {
    title: "GraphQL API Gateway",
    description: "Develop a GraphQL API gateway with schema stitching and microservices integration.",
    stack: ["Node.js", "GraphQL", "Apollo", "Redis"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 920,
    trending: true,
    domain: "backend"
  },
  {
    title: "Event Sourcing System",
    description: "Create an event sourcing system with CQRS pattern implementation.",
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 890,
    trending: true,
    domain: "backend"
  },
  {
    title: "Microservices Monitoring System",
    description: "Build a comprehensive monitoring system for microservices architecture.",
    stack: ["Go", "Prometheus", "Grafana", "OpenTelemetry"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 950,
    trending: true,
    domain: "backend"
  },
  {
    title: "API Rate Limiting Service",
    description: "Develop a sophisticated rate limiting service with multiple algorithms.",
    stack: ["Python", "Redis", "FastAPI", "PostgreSQL"],
    difficulty: "Intermediate",
    teamSize: 2,
    views: 780,
    trending: false,
    domain: "backend"
  },
  {
    title: "OAuth2 Authorization Server",
    description: "Create a complete OAuth2 authorization server with multiple grant types.",
    stack: ["Java", "Spring Security", "PostgreSQL", "Redis"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 880,
    trending: true,
    domain: "backend"
  },
  {
    title: "Distributed Caching System",
    description: "Build a distributed caching system with cache invalidation strategies.",
    stack: ["Go", "Redis", "Memcached", "gRPC"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 920,
    trending: true,
    domain: "backend"
  },
  {
    title: "Message Broker System",
    description: "Create a reliable message broker with multiple queue types.",
    stack: ["Rust", "RocksDB", "Protocol Buffers", "gRPC"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 850,
    trending: true,
    domain: "backend"
  },
  {
    title: "Database Migration Tool",
    description: "Build a tool for managing database schema migrations and versioning.",
    stack: ["Python", "SQLAlchemy", "PostgreSQL", "Click"],
    difficulty: "Intermediate",
    teamSize: 2,
    views: 760,
    trending: false,
    domain: "backend"
  },
  {
    title: "API Documentation Generator",
    description: "Create an automated API documentation generator with interactive testing.",
    stack: ["Node.js", "OpenAPI", "Express", "React"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 820,
    trending: false,
    domain: "backend"
  },
  {
    title: "Service Discovery System",
    description: "Build a service discovery system for microservices architecture.",
    stack: ["Go", "etcd", "gRPC", "Docker"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 890,
    trending: true,
    domain: "backend"
  },
  {
    title: "Distributed Lock Manager",
    description: "Create a distributed lock manager for coordinating distributed systems.",
    stack: ["Java", "ZooKeeper", "Spring Boot", "Redis"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 840,
    trending: true,
    domain: "backend"
  },
  {
    title: "Backend Testing Framework",
    description: "Develop a comprehensive testing framework for backend services.",
    stack: ["Python", "pytest", "Docker", "PostgreSQL"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 780,
    trending: false,
    domain: "backend"
  },
  {
    title: "API Analytics Engine",
    description: "Build an analytics engine for tracking API usage and performance.",
    stack: ["Go", "ClickHouse", "Kafka", "Grafana"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 910,
    trending: true,
    domain: "backend"
  },
  {
    title: "Webhook Management System",
    description: "Create a system for managing and delivering webhooks at scale.",
    stack: ["Node.js", "RabbitMQ", "MongoDB", "Redis"],
    difficulty: "Intermediate",
    teamSize: 3,
    views: 830,
    trending: false,
    domain: "backend"
  },
  {
    title: "Database Proxy Server",
    description: "Build a database proxy server with connection pooling and query analysis.",
    stack: ["Go", "PostgreSQL", "Redis", "InfluxDB"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 870,
    trending: true,
    domain: "backend"
  },
  {
    title: "API Gateway Authentication Service",
    description: "Develop a centralized authentication service for API gateways.",
    stack: ["Python", "FastAPI", "Redis", "JWT"],
    difficulty: "Advanced",
    teamSize: 3,
    views: 900,
    trending: true,
    domain: "backend"
  },
  {
    title: "Backend Deployment Pipeline",
    description: "Create an automated deployment pipeline for backend services.",
    stack: ["Go", "Kubernetes", "Terraform", "ArgoCD"],
    difficulty: "Advanced",
    teamSize: 4,
    views: 950,
    trending: true,
    domain: "backend"
  },
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