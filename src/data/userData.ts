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
  title: 'B.Tech, IIT Jodhpur | Interdisciplinary Technologist | Machine Learning & Quantitative Mindset | Web Developer',
  institute: 'Indian Institute of Technology Jodhpur',
  phone: '+91-8960255100',
  email: 'b23ch1017@iitj.ac.in',
  github: 'https://github.com/ektedar225',
  linkedIn: 'https://www.linkedin.com/in/ektedar-ahmad-91915b280/',
  
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
    title: 'Inter IIT Tech Meet 13.0: ISRO, Support Team',
    company: 'ISRO, IIT Jodhpur',
    date: 'Oct 2024 - Dec 2024',
    location: 'Mumbai',
    description: [
      'Developed a real-time pipeline for high-resolution elemental mapping of the lunar surface using XRF spectra from CLASS.',
      'Preprocessed FITS and XSM files, classified data by solar angle, and implemented background subtraction for accurate signal extraction.',
      'Engineered a gridding algorithm to structure irregular lunar regions into a uniform 0.4° x 0.4° grid, enabling consistent geochemical analysis.',
      'Evaluated and compared spatial interpolation models (autoencoders, CNNs, XGBoost, random forest), selecting kriging for its superior accuracy (MSE=0.01, R²≈1).',
      'Integrated MySQL to replace CSV-based backend, reducing data processing time from 8s to <1s per FITS file, enabling real-time heatmap updates.',
      'Automated classification of lunar regions (Highlands, Mare, ilmenite, ISRU, craters, water-ice) and implemented subpixel mapping for enhanced spatial resolution.'
    ],
    technologies: [
      'Python', 'NumPy', 'Pandas', 'Astropy', 'FITS', 'XSM', 'MySQL', 'SQL', 'Kriging', 'Scikit-learn', 'CNN', 'XGBoost', 'Random Forest', 'Autoencoder', 'Data Visualization', 'Matplotlib', 'Seaborn', 'Geospatial Analysis', 'Linux', 'Shell Scripting'
    ],
    link: 'https://ektedar225.github.io/3D-lunar-visualization-model/',
    githubLink: 'https://github.com/ektedar225/3D-lunar-visualization-model',
  },
  {
    title: 'Full Stack Web Development Intern',
    company: 'Main Flow Services',
    date: 'Jun 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Designed and developed a premium subscription web application using React and TypeScript, enabling secure user authentication and onboarding.',
      'Built a responsive, modern UI with Tailwind CSS, optimizing for both desktop and mobile experiences.',
      'Integrated Razorpay payment gateway for seamless and secure subscription transactions.',
      'Implemented Google OAuth and email/password authentication via Firebase to enhance user sign-up options.',
      'Developed protected routes and context-based state management for secure access control and personalized user flows.',
      'Configured and maintained project tooling with Vite, ESLint, and PostCSS for efficient development and code quality.'
    ],
    technologies: [
      'React',
      'TypeScript',
      'Firebase (Authentication)',
      'Razorpay (Payment Integration)',
      'Tailwind CSS',
      'Vite (Build Tool)',
      'PostCSS',
      'ESLint',
      'Lucide React (Icon Library)'
    ],
    link: 'https://ektedar225.github.io/Main_flow/',
    githubLink: 'https://github.com/ektedar225/Main_flow',
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: 'AI-Driven Algorithmic Trading Bot',
    technologies: ['GenAI', 'Python', 'RSI', 'MACD', 'ADX', 'VWAP', 'Gemini API', 'News API'],
    date: 'Feb 2024 - Apr 2024',
    description: [
      'Built a GenAI trading bot executing 15+ trades daily using RSI, MACD, ADX, VWAP, and sentiment signals.',
      'Leveraged Gemini and News API to enhance profit by using technical indicators and market sentiment analysis.',
      'Implemented trailing stop-loss and conditional trade logic, reducing downside risk by 20% with 99% uptime.',
    ],
    // No link or githubLink provided
  },
  {
    title: 'Medicine Recommendation Model',
    technologies: [
      'Python',
      'Flask',
      'Pandas',
      'Scikit-learn',
      'HTML',
      'CSS',
      'Jinja2',
      'CSV',
      'Windows OS'
    ],
    date: 'Jul 2023 - Sep 2023',
    description: [
      'Developed a Flask-based web application for medical report analysis and symptom prediction under the guidance of Dr. Seema Saini (IIT Jodhpur, SME & Affiliate Faculty in AI & DS).',
      'Integrated machine learning models to predict diseases based on user-input symptoms and processed medical datasets (CSV) for model training and inference.',
      'Implemented secure file upload and preprocessing for medical images and reports, ensuring privacy and reliability.',
      'Designed user-friendly web interfaces using HTML, CSS, and Jinja2 templates for seamless user experience.',
      'Automated medicine recommendation based on predicted diseases, including confirmation of disease, recommended medicines, pre-appointment actions, and home remedies.',
      'Utilized data analysis techniques for symptom arrangement, feature engineering, and robust backend logic.',
      'Overcame major challenges in data collection and ensured accurate, actionable predictions for users.'
    ],
    githubLink: 'https://github.com/ektedar225/medicine_recommendation_by_using_medical_report',
  },
  {
    title: 'AC Service Website',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion (animations)',
      'React Slick (carousel/slider)',
      'Lucide React (icons)',
      'i18next (internationalization)',
      'Vite (build tool)',
      'Google Fonts',
      'Static hosting (InfinityFree, GitHub Pages)'
    ],
    date: 'May 2023 - Jun 2023',
    description: [
      'Developed a modern, fully responsive React web application for an appliance repair business, optimized for both desktop and mobile users.',
      'Designed and implemented dynamic service, pricing, and testimonial sections, including interactive carousels and real-time review submission (local state for static hosting).',
      'Integrated multi-language support (English/Arabic) using i18next for broader audience reach.',
      'Built a custom appointment booking form with WhatsApp integration for instant customer communication.',
      'Ensured SEO optimization with semantic HTML, meta tags, and fast-loading static assets for better search engine visibility.',
      'Deployed the site as a static build on InfinityFree and GitHub Pages, with a clean asset structure and SPA routing support.'
    ],
    link: 'https://riyadh-abdul-qadir-ac-services.com/',
    githubLink: 'https://github.com/ektedar225/Booking_appointment',
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
    // No link or githubLink provided
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
    // No link or githubLink provided
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
    // No link or githubLink provided
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
    githubLink: 'https://github.com/ektedar225/eduhub-interiit-mock',
  },
  {
    title: 'Handwritten Answer Sheet Evaluation System',
    technologies: [
      'Tesseract.js (OCR)',
      'TypeScript',
      'React',
      'Zustand',
      'REST API',
      'Cloud LLM (API)',
      'Serverless Architecture'
    ],
    date: 'Mar 2025 - May 2025',
    description: [
      'Developed an intelligent system for automated evaluation of handwritten student answers under the guidance of Prof. Santhosh Varanasi, IIT Jodhpur.',
      'Utilized Tesseract.js for browser-based OCR to extract text from scanned answer sheets, enabling seamless digitization of handwritten content.',
      'Integrated cloud-based large language models via REST endpoints to perform context-aware answer evaluation without custom ML training.',
      'Designed a fully serverless, client-first architecture, minimizing backend complexity and operational costs.',
      'Implemented rapid prototyping with mock data to simulate real-world educational scenarios and validate the evaluation pipeline.',
      'Leveraged Zustand for lightweight state management and React for a modern, interactive user interface.'
    ],
    link: 'https://ektedar225.github.io/answersheet_evaluator/',
    githubLink: 'https://github.com/ektedar225/Handwritten-Answer-Sheet-Evaluation',
  },
  {
    title: 'Customer Segmentation & Market Basket Analysis',
    technologies: [
      'Python',
      'pandas',
      'numpy',
      'matplotlib',
      'seaborn',
      'plotly',
      'scikit-learn',
      'yellowbrick',
      'mlxtend',
      'Jupyter Notebook',
      'Excel'
    ],
    date: 'Jan 2025 - Mar 2025',
    description: [
      'Worked as a Machine Learning and Data Analyst on a real-world retail dataset with over 500,000 rows, focusing on customer segmentation and market basket analysis.',
      'Spent significant time on data cleaning and preprocessing, ultimately using 300,000 high-quality records for analysis.',
      'Performed exploratory data analysis (EDA) with visualizations (histograms, boxplots, violin plots, heatmaps) to understand feature distributions and data quality.',
      'Engineered features such as Recency, Frequency, Monetary Value, Basket Size, and Number of Returns; applied one-hot encoding for categorical variables.',
      'Standardized features and used PCA for dimensionality reduction prior to clustering.',
      'Applied KMeans and Agglomerative Clustering for customer segmentation, visualizing clusters in 2D/3D and analyzing group characteristics.',
      'Conducted market basket analysis using the Apriori algorithm and generated association rules for actionable product recommendations.',
      'Leveraged Python’s data science ecosystem (pandas, scikit-learn, mlxtend, etc.) for end-to-end analysis and business insight extraction.'
    ],
    githubLink: 'https://github.com/ektedar225/Market-Basket-Analysis-And-Customer-Segmentation',
  },
  {
    title: 'EKT Coin Blockchain Frontend Interface',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'ESLint',
      'PostCSS'
    ],
    date: 'Apr 2025 - May 2025',
    description: [
      'Developed a blockchain-based web application simulating a cryptocurrency (EKT Coin) with core blockchain functionalities including block creation, transaction management, and chain validation.',
      'Built a modular blockchain system from scratch in TypeScript, implementing Block, Blockchain, and Transaction modules for educational and demonstration purposes.',
      'Designed and implemented a user-friendly, responsive frontend interface using React and Tailwind CSS, allowing users to visualize the blockchain, inspect blocks, and submit transactions in real time.',
      'Integrated custom blockchain logic with the frontend for seamless, interactive updates and user engagement.',
      'Ensured code quality, maintainability, and modern development standards with ESLint, TypeScript, and PostCSS tooling.'
    ],
    link: 'https://ektedar225.github.io/EKT_Coin/',
    githubLink: 'https://github.com/ektedar225/EKT_Coin',
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