import { EducationItem, ExperienceItem, ProjectItem, SkillCategory, AchievementItem, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Education', path: '#education' },
  { label: 'Experience', path: '#experience' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Achievements', path: '#achievements' },
  { label: 'Contact', path: '#contact' },
];

export const personalInfo = {
  name: 'Ektedar Ahmad',
  title: 'B.Tech Chemical Engineering | Minor in Artificial Intelligence',
  institute: 'Indian Institute of Technology Jodhpur',
  phone: '+91-8960255100',
  email: 'b23ch1017@iitj.ac.in',
  github: 'ektedar225',
  linkedIn: 'https://linkedin.com/in/',
  website: 'https://ektedar-portfolio.com',
};

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech',
    institute: 'Indian Institute of Technology Jodhpur',
    gpa: '8.10',
    year: '2023–2027',
  },
  {
    degree: 'Senior Secondary',
    institute: 'DPS Kalyanpur (CBSE)',
    gpa: '94.7%',
    year: '2022',
  },
  {
    degree: 'Secondary',
    institute: 'DPS Kalyanpur (CBSE)',
    gpa: '94.8%',
    year: '2020',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    title: 'Amazon ML Summer School',
    company: 'Amazon',
    date: 'Aug 2025',
    location: 'Remote',
    description: [
      'Selected among top students across India to participate in Amazon’s flagship ML Summer School, focused on core and advanced AI concepts.',
      'Completed an intensive curriculum covering supervised learning, unsupervised learning, sequential models, reinforcement learning, generative AI, and causal inference.',
      'Gained hands-on experience implementing ML models, neural networks, and policy gradient algorithms in practical coding labs guided by Amazon ML scientists.',
      'Explored state-of-the-art ML applications in real-world scenarios like recommendation systems, forecasting, and natural language understanding.',
      'Earned Letter of Acknowledgement from Amazon for successfully completing the program.',
    ],
    technologies: [
      'Machine Learning',
      'Deep Learning',
      'Reinforcement Learning',
      'Generative AI',
      'Causal Inference',
    ],
  },
  {
    title: 'McKinsey Forward Program',
    company: 'McKinsey & Company',
    date: '2025',
    location: 'Global Online Program',
    description: [
      'Selected for McKinsey’s Forward Program (competitive leadership training) designed for high-potential students and early professionals.',
      'Trained in problem-solving frameworks, critical thinking, and structured communication, modeled after McKinsey’s consulting toolkit.',
      'Completed modules on digital transformation, business analytics, and strategic decision-making, applying learnings to simulated client case studies.',
      'Collaborated in cross-functional global teams, strengthening skills in leadership, teamwork, and decision-making under constraints.',
      'Recognized for developing an action-oriented growth mindset and adopting McKinsey’s MECE (Mutually Exclusive, Collectively Exhaustive) problem structuring approach.',
    ],
    technologies: [
      'Leadership',
      'Problem Solving',
      'Business Analytics',
      'Digital Transformation',
    ],
  },
  {
    title: 'Inter IIT Tech Meet 13.0: ISRO, Support Team',
    company: 'Three.js, WebGL, XRF Analysis, Python',
    date: 'Oct 2024 - Dec 2024',
    location: 'Mumbai',
    description: [
      'Secured 2nd runner-up among 23 IITs by developing a real-time 3D lunar surface visualization using Three.js and WebGL.',
      'Processed and mapped XRF line intensity data from 50+ lunar samples, achieving 90% spatial mapping accuracy.',
      'Conducted compositional analysis on 100+ elemental maps to identify heterogeneity with 95% detection accuracy.',
    ],
    technologies: ['Three.js', 'WebGL', 'Python', 'Data Analysis'],
    link: '#',
  },
  {
    title: 'Full Stack Web Development Intern',
    company: 'Main Flow Services',
    date: 'Jun 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Designed a subscription-based portfolio platform using the MERN stack, onboarding 200+ users in Month 3.',
      'Optimized React + Tailwind UI to reduce average page load from 1.5s to 1.1s (25% faster) across desktop and mobile.',
      'Integrated Razorpay and Google OAuth, lifting sign-up conversions by 30% and boosted user engagement by 40%.',
    ],
    technologies: ['MERN Stack', 'React', 'Tailwind CSS', 'Razorpay', 'Google OAuth'],
    link: '#',
  },
  {
    title: 'Capital Markets Analyst',
    company: 'Tradeshala',
    date: 'May 2025 – Jun 2025',
    location: 'Remote',
    description: [
      'Gained practical exposure to global and Indian financial markets, derivatives, and market microstructure.',
      'Presented market outlooks and trading strategies using data-driven technical and macroeconomic analysis.',
      'Backtested intraday and positional strategies on TradersQuote; and improved edge via performance metrics.'
    ],
    technologies: [
      'Equity Markets', 'Technical Analysis', 'Fundamental Analysis', 'Strategy Backtesting', 'Derivatives', 'Market Microstructure'
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: 'HackRx Document Q&A Service: Backend with FastAPI & Pinecone',
    technologies: [
      'FastAPI', 'LangChain', 'OpenAI Embeddings', 'Pinecone', 'SemanticChunker', 'PyPDFLoader', 'AsyncIO'
    ],
    date: 'May 2025 – Aug 2025',
    description: [
      'Built an asynchronous FastAPI microservice to parse, chunk, and index large unstructured documents (PDFs/ZIPs) into Pinecone vector store for scalable semantic search.',
      'Engineered a namespace-based caching strategy, reducing repeated query latency by >80% while maintaining retrieval accuracy (≥0.95 cosine similarity).',
      'Integrated OpenAI Embeddings + LangChain pipeline with custom RetrievalQA prompts to ensure concise, numerical, and document-grounded answers.',
      'Implemented async workflows with AsyncIO, supporting multi-user concurrent queries and reducing average response time to sub-second.',
      'Enhanced document ingestion pipeline with SemanticChunker + PyPDFLoader, enabling accurate contextual retrieval across 1,000+ pages.'
    ],
    link: '',
    githubLink: '',
  },
  {
    title: 'AI-Driven Algorithmic Trading Bot',
    technologies: ['GenAI', 'Python', 'RSI', 'MACD', 'ADX', 'VWAP', 'Gemini API', 'News API'],
    date: 'Feb 2024 - Apr 2024',
    description: [
      'Built a GenAI trading bot executing 15+ trades daily using RSI, MACD, ADX, VWAP, and sentiment signals.',
      'Leveraged Gemini and News API to enhance profit by using technical indicators and market sentiment analysis.',
      'Implemented trailing stop-loss and conditional trade logic, reducing downside risk by 20% with 99% uptime.',
    ],
    link: '#',
  },
  {
    title: 'Medicine Recommendation Model',
    technologies: ['KNN', 'Naïve Bayes', 'Random Forest', 'Data Analysis', 'Python', 'Flask'],
    date: 'Jul 2023 - Sep 2023',
    description: [
      'Developed an intelligent model under Dr. Seema Saini to predict diseases with 85% accuracy using KNN, Naïve Bayes, and Random Forest on 10,000+ reports, assisting doctors in disease analysis and medication suggestion.',
      'Deployed a Flask-based interface supporting 20+ concurrent files, improving report processing speed by 30%.',
    ],
    link: '#',
  },
  {
    title: 'AC Service Website',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'SEO'],
    date: 'May 2023 - Jun 2023',
    description: [
      'Launched a PHP+MySQL-based AC service portal attracting 300+ monthly visitors and processing 40+ bookings.',
      'Built responsive front-end using HTML, CSS, and JavaScript, and added SEO optimizations to boost traffic by 25%.',
      'Added responsiveness to ensure fast loading and seamless experience across various devices and screen sizes.',
    ],
    link: '#',
  },
  {
    title: 'GenAI-Powered Trading System with Sentiment Technical Indicators',
    technologies: ['Python', 'Generative AI', 'RSI', 'MACD', 'ADX', 'VWAP', 'NLP', 'Gemini API', 'SmartAPI'],
    date: 'Jan 2024 - Apr 2024',
    description: [
      'Built a real-time trading bot using RSI, MACD, ADX, VWAP, and news sentiment for signal generation.',
      'Integrated Google Gemini API and NLP-based analysis to enhance accuracy under volatile market conditions.',
      'Automated SmartAPI trades with TOTP login, trailing stop-loss, and dynamic capital management for risk control.',
    ],
    link: '#',
  },
  {
    title: 'Stock Movement Prediction - CNN-LSTM + LGBM',
    technologies: ['CNN', 'LSTM', 'LightGBM', 'Keras', 'Time-Series Forecasting'],
    date: 'Oct 2023 - Dec 2023',
    description: [
      'Built CNN-LSTM and LightGBM hybrid model to predict NIFTY Midcap 50 stock movement direction accurately.',
      'Engineered time-series features using sliding windows and technical indicators like RSI, MACD, and ADX.',
      'Applied early stopping and regularization techniques to reduce overfitting and boost predictive performance.',
    ],
    link: '#',
  },
  {
    title: 'Statistical Arbitrage - Pairs Trading',
    technologies: ['Python', 'Pandas', 'Cointegration', 'Backtesting'],
    date: 'Aug 2023 - Oct 2023',
    description: [
      'Discovered cointegrated stock pairs via Johansen test to build a profitable, mean-reverting statistical arbitrage strategy.',
      'Executed long-short trades using z-score triggers with dynamic capital allocation for each selected stock pair.',
      'Backtested strategy using efficient frontier to reduce portfolio risk and generate alpha in market-neutral conditions.',
    ],
    link: '#',
  },
  {
    title: 'Classroom Management System',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs', 'React', 'Tailwind', 'TypeScript'],
    date: 'Aug 2023 - Oct 2023',
    description: [
      'Architected a full-stack solution with secure role-based access control using JWT authentication.',
      'Structured RESTful APIs to handle classes, assignments, and user data with robust Mongoose schema validation.',
      'Delivered a sleek, real-time frontend experience using React and Tailwind with responsive design principles.',
    ],
    link: '#',
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C/C++', 'PHP', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Bash'],
  },
  {
    category: 'Libraries/Frameworks',
    skills: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'scikit-learn', 'Flask', 'React.js', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'Docker', 'Postman', 'VS Code', 'Jupyter', 'Colab', 'XAMPP', 'Canva', 'Figma'],
  },
  {
    category: 'Technologies/Platforms',
    skills: ['Azure AI', 'OCR', 'REST APIs', 'JWT Authentication', 'Firebase', 'WebSockets', 'SmartApi'],
  },
  {
    category: 'Operating Systems',
    skills: ['Linux', 'MacOS', 'Windows'],
  },
];

export const coursesData = [
  'Data Structures & Algorithms',
  'Artificial Intelligence',
  'Machine Learning',
  'Linear Algebra',
  'Probability',
  'Differential Equations',
  'Statistics Stochastic Process',
  'Calculus',
  'Intro. to Electrical Engineering',
  'Signals and Systems',
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Inter IIT Tech Meet 13.0',
    description: 'Secured 3rd position among 23 IITs in ISRO Data Analysis Problem Statement',
  },
  {
    title: 'Academic Excellence',
    description: 'Ranked in the top 2% with an A grade in Machine Learning and Data Structures',
  },
  {
    title: 'Inter IIT Math Bowl (Tessellate, CMI)',
    description: 'Achieved 12th rank in a national-level mathematics competition',
  },
  {
    title: 'JEE Main 2023',
    description: 'Secured 99.01th percentile, placing in the top 1% among 11.13 lakh candidates',
  },
  {
    title: 'Research Consultant in WorldQuant Brain',
    description: 'Ran 217+ simulations',
  },
];