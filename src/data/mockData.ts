import {
  JobItem,
  HackathonItem,
  EventItem,
  StartupItem,
  PersonItem,
  DirectoryItem,
  VerticalData,
  CommunityPost,
  DetailedPerson,
  Investor,
} from '@/types';

export const jobs: JobItem[] = [
  ["Backend Engineer", "Acme Labs", "Noida", "Full-time", "₹12–20 LPA", "2–4 yrs", ["Node", "PostgreSQL"], 0],
  ["AI Engineer Intern", "Demo AI Co", "Remote", "Internship", "₹25K/mo", "Fresher", ["Python", "LLMs"], 1],
  ["Frontend Developer", "Sample Studio", "Delhi NCR", "Full-time", "₹8–14 LPA", "1–3 yrs", ["React", "TypeScript"], 0],
  ["Product Design Intern", "Example Apps", "Gurugram", "Internship", "₹15K/mo", "Fresher", ["Figma", "UX"], 0],
  ["DevOps Contractor", "Placeholder Cloud", "Remote", "Contract", "₹80K/mo", "3+ yrs", ["AWS", "Terraform"], 1],
  ["Full-stack Freelancer", "Demo Startup", "Remote", "Freelance", "Project-based", "1+ yrs", ["Next.js", "Prisma"], 1],
].map((j, i) => ({
  id: 'j' + i,
  kind: 'Jobs' as const,
  title: j[0] as string,
  org: j[1] as string,
  loc: j[2] as string,
  type: j[3] as string,
  pay: j[4] as string,
  exp: j[5] as string,
  tags: j[6] as string[],
  remote: j[7] as number,
}));

export const hacks: HackathonItem[] = [
  ["Build for Bharat", "Demo Org", "₹5L prize pool", "Online", "Remote", "12 Nov", ["AI", "Fintech"]],
  ["Campus Code Sprint", "Sample College", "₹1L prize pool", "Offline", "Noida", "28 Nov", ["Web", "Open source"]],
  ["Secure the Stack", "Placeholder Sec", "₹2L prize pool", "Hybrid", "Delhi", "05 Dec", ["Cybersecurity"]],
].map((h, i) => ({
  id: 'h' + i,
  kind: 'Hackathons' as const,
  title: h[0] as string,
  org: h[1] as string,
  prize: h[2] as string,
  mode: h[3] as string,
  loc: h[4] as string,
  date: h[5] as string,
  tags: h[6] as string[],
}));

export const evs: EventItem[] = [
  ["Founder Meetup Noida", "Demo Community", "Founder meetup", "Noida", "15 Oct"],
  ["Intro to LLM Apps", "Sample Org", "Workshop", "Online", "22 Oct"],
  ["Demo Day Vol. 1", "Placeholder Hub", "Demo day", "Delhi", "09 Nov"],
  ["Investor Office Hours", "Example Fund", "Investor session", "Online", "18 Nov"],
].map((e, i) => ({
  id: 'e' + i,
  kind: 'Events' as const,
  title: e[0] as string,
  org: e[1] as string,
  type: e[2] as string,
  loc: e[3] as string,
  date: e[4] as string,
  tags: [e[2] as string],
}));

export const sts: StartupItem[] = [
  ["Sample Pay", "Payments for small shops", "Fintech", "Idea", "Bengaluru"],
  ["Demo Learn", "Peer tutoring for engineers", "EdTech", "MVP", "Noida"],
  ["Placeholder Agri", "Crop advisory in local languages", "AgriTech", "Pre-seed", "Jaipur"],
  ["Example Health", "Appointment scheduling for clinics", "HealthTech", "MVP", "Delhi"],
].map((s, i) => ({
  id: 's' + i,
  kind: 'Startups' as const,
  title: s[0] as string,
  desc: s[1] as string,
  ind: s[2] as string,
  stage: s[3] as string,
  loc: s[4] as string,
  tags: [s[2] as string, s[3] as string],
}));

export const ppl: PersonItem[] = [
  ["Demo Builder", "Developer", "Noida"],
  ["Sample Founder", "Founder", "Delhi"],
  ["Example Designer", "Designer", "Gurugram"],
  ["Placeholder Mentor", "Mentor", "Remote"],
].map((p, i) => ({
  id: 'p' + i,
  kind: 'People' as const,
  title: p[0] as string,
  role: p[1] as string,
  loc: p[2] as string,
  tags: [p[1] as string],
}));

export const allDirectoryItems: DirectoryItem[] = [...jobs, ...hacks, ...evs, ...sts, ...ppl];

export const VC = ["#ec4899", "#10b981", "#2563eb", "#f97316", "#7c3aed"];

export const IC: Record<string, string> = {
  learn: "📖",
  labs: "🧊",
  solutions: "⚙️",
  ventures: "📊",
  community: "👥",
};

export const verts: Record<string, VerticalData> = {
  learn: {
    n: "Learn",
    c: "#10b981",
    t: "Learn. Upgrade. Lead.",
    d: "Education, skills and mentorship.",
    o: [
      "AI and automation courses",
      "Coding and software development",
      "Digital marketing and entrepreneurship",
      "Career prep, resumes and interviews",
      "Live mentorship and certifications",
    ],
    s: "Students, freelancers, founders, professionals and small-business owners",
    e: "Courses, memberships, cohorts, certifications, corporate training, mentorship",
    x: ["Later", "AI learning roadmaps, skill-gap analysis and a 24/7 AI mentor"],
    cta: "Join a cohort",
  },
  labs: {
    n: "Labs",
    c: "#2563eb",
    t: "Imagine. Build. Innovate.",
    d: "AI, SaaS and product research.",
    o: [
      "AI and SaaS platforms",
      "FinTech and EdTech products",
      "Automation, analytics and cloud software",
      "Developer tools and no-code products",
      "Chatbots, CRM and startup dashboards",
    ],
    s: "Businesses and developers who license products, and founders who need MVPs",
    e: "SaaS subscriptions, licensing, API usage, white-label deals, custom builds",
    x: ["Studio flow", "Problem, research, prototype, MVP, feedback, revenue, spin-off"],
    cta: "Pitch an MVP",
  },
  solutions: {
    n: "Solutions",
    c: "#f97316",
    t: "Solve. Simplify. Scale.",
    d: "Technology and business services.",
    o: [
      "Websites, apps and custom software",
      "AI chatbots and workflow automation",
      "CRM, analytics and dashboards",
      "Cloud, cybersecurity and UI/UX",
      "Marketing and e-commerce setup",
    ],
    s: "Startups, MSMEs, D2C brands, colleges, healthcare, real estate and finance",
    e: "Project fees, retainers, consulting, maintenance and implementation fees",
    x: ["Packages", "Starter, Growth, Scale and Enterprise, from branding to dedicated support"],
    cta: "Get a quote",
  },
  ventures: {
    n: "Ventures",
    c: "#7c3aed",
    t: "Invest. Accelerate. Transform.",
    d: "Startup investment and acceleration.",
    o: [
      "Pre-seed and seed investment",
      "Incubation and mentorship",
      "Market validation and product support",
      "Pitch decks and fundraising readiness",
      "Investor introductions and go-to-market",
    ],
    s: "Early-stage founders building in AI, B2B SaaS, FinTech, EdTech, HealthTech, ClimateTech and developer tools",
    e: "Equity, advisory fees, accelerator programmes, fund fees and carry",
    x: ["Screening", "Problem, market, product, founder, traction, moat, scalability, unit economics"],
    cta: "Apply for funding",
  },
  community: {
    n: "Community",
    c: "#ec4899",
    t: "Connect. Collaborate. Grow.",
    d: "Networking and opportunities.",
    o: [
      "Founder meetups and student clubs",
      "Hackathons and demo days",
      "Workshops and expert sessions",
      "Jobs, internships and referrals",
      "Co-founder and mentor matching",
    ],
    s: "Students, founders, developers, designers, investors, mentors and creators",
    e: "(Proposed) event sponsorships, premium membership, marketplace fees, job listings",
    x: ["Platform", "Verified profiles, marketplace, event calendar, private groups, directory"],
    cta: "Join the community",
  },
};

export const vOrder = ["learn", "labs", "solutions", "ventures", "community"] as const;

export const gaps = [
  ["🎓", "Skills gap", "Many learners lack practical AI, technology and business skills, and courses rarely lead to jobs or projects.", "#7c3aed"],
  ["💻", "Technology gap", "MSMEs and startups need websites, automation and cloud systems but lack affordable, trusted partners.", "#2563eb"],
  ["🚀", "Founder gap", "Early-stage founders struggle to find mentors, validation and capital in one place.", "#f97316"],
  ["👥", "Network gap", "Builders, mentors, investors and employers are scattered, with little trust or matching.", "#ec4899"],
] as const;

export const steps = [
  ["Learn", "Skills to jobs", "#10b981"],
  ["Build", "Ideas to products", "#2563eb"],
  ["Solve", "Businesses to scale", "#f97316"],
  ["Invest", "Founders to funding", "#7c3aed"],
  ["Grow", "Bigger impact", "#ec4899"],
] as const;

export const wy = [
  ["📚", "Learn In-Demand Skills", "AI, coding, marketing, career prep and more.", "Explore Courses", "learn", "#10b981"],
  ["🧊", "Build Real Projects", "Turn ideas into products with mentorship and resources.", "Explore Labs", "labs", "#2563eb"],
  ["🛠️", "Get Tech Support", "Websites, apps, automation and cloud solutions.", "Explore Solutions", "solutions", "#f97316"],
  ["💸", "Raise Funding", "Access investors and acceleration programmes.", "Explore Ventures", "ventures", "#7c3aed"],
  ["🤝", "Join a Community", "Meet builders, attend events and find opportunities.", "Join Community", "community", "#ec4899"],
] as const;

export const featuredStartups = [
  ["SaarthiNet", "AI · Voice", "Voice-first AI assistant in Indian languages for Bharat", "#10b981"],
  ["RakshaApp", "Cybersecurity", "India-first digital safety product to protect from scams", "#f97316"],
  ["ScentTrail", "D2C · Brand", "Premium perfume brand for modern India", "#0b1030"],
] as const;

export const colleges = ['IITs', 'NITs', 'IIITs', 'BITS Pilani', 'VIT', 'Manipal', 'Amity'];

export const cats = [
  "AI & Machine Learning",
  "Software Development",
  "Web Development",
  "Backend Engineering",
  "Cloud & DevOps",
  "Cybersecurity",
  "Entrepreneurship",
  "Digital Marketing",
  "Product Management",
  "Career Preparation",
];

export const courses = [
  ["Generative AI for Developers", "Build real AI applications using modern LLM APIs and tools.", "Intermediate", "8 Weeks", "4.8"],
  ["Full-Stack Web Development", "Ship React and Node.js apps with databases and deployment.", "Beginner", "12 Weeks", "4.7"],
  ["Cloud & DevOps Foundations", "Containers, CI/CD and cloud basics for backend engineers.", "Intermediate", "6 Weeks", "4.6"],
] as const;

export const cohorts = [
  ["AI Builders Cohort", "Mentor to be announced", "Start date TBA", "8 weeks", "Seats open", "Price TBA"],
  ["Full-Stack Launch Cohort", "Mentor to be announced", "Start date TBA", "12 weeks", "Seats open", "Price TBA"],
  ["Founder Skills Cohort", "Mentor to be announced", "Start date TBA", "6 weeks", "Seats open", "Price TBA"],
] as const;

export const lab3 = [
  ["🤖", "AI Lab", ["AI agents", "AI SaaS", "Chatbots", "Automation", "AI developer tools"], "Explore AI Products →", "#2563eb"],
  ["🧊", "Product Lab", ["SaaS", "FinTech", "EdTech", "CRM", "Analytics", "Internal tools"], "Explore Products →", "#7c3aed"],
  ["🚀", "Startup Lab", ["MVP development", "Product validation", "Technical co-founders", "Product strategy"], "Build Your MVP →", "#f97316"],
] as const;

export const prods = [
  ["AI Resume Builder", "AI SaaS", "Live", "View Product"],
  ["Founder CRM", "SaaS", "Beta", "Try Demo"],
  ["Startup Analytics", "Analytics", "Coming Soon", "Join Waitlist"],
] as const;

export const groups = [
  "AI Builders",
  "Startup Founders",
  "Frontend Developers",
  "Backend Engineers",
  "College Builders",
  "Indie Hackers",
];

export const ctabs = [
  "Feed",
  "Builders",
  "Founders",
  "Developers",
  "Designers",
  "Mentors",
  "Investors",
  "Events",
  "Groups",
  "Build in Public",
];

export const initialPosts: CommunityPost[] = [
  {
    tag: "Build update",
    author: "Demo Builder",
    role: "Full-Stack Builder · Noida",
    time: "2h ago",
    content: "Day 18: just launched the beta of my AI SaaS. Check it out and let me know your thoughts!",
    likesCount: 12,
  },
  {
    tag: "Progress update",
    author: "Demo Builder",
    role: "AI Engineer · Delhi NCR",
    time: "5h ago",
    content: "Shipped auth + onboarding for my side project this week. Next up: integrating Stripe and webhooks.",
    likesCount: 8,
  },
  {
    tag: "Looking for co-founder",
    author: "Sample Founder",
    role: "Founder · Bengaluru",
    time: "1d ago",
    content: "Building in EdTech, need a technical co-founder in Delhi NCR. MVP is live with 500+ active students.",
    likesCount: 24,
  },
  {
    tag: "Question",
    author: "Example Designer",
    role: "Product Designer · Gurugram",
    time: "2d ago",
    content: "How do you validate a startup idea before writing code? What are your favorite low-code validation methods?",
    likesCount: 16,
  },
];

export const peopleX: DetailedPerson[] = [
  { name: "Rahul Mehta", role: "Developer", title: "AI Engineer · Builder", skills: ["React", "Python", "AI", "Node.js"] },
  { name: "Ananya Rao", role: "Designer", title: "Product Designer", skills: ["Figma", "UX"] },
  { name: "Vikram Singh", role: "Founder", title: "Founder, EdTech", skills: ["EdTech", "Product"] },
  { name: "Neha Gupta", role: "Mentor", title: "Backend Mentor", skills: ["Go", "Systems"] },
  { name: "Demo Investor", role: "Investor", title: "Angel investor (unverified demo)", skills: ["FinTech", "SaaS"] },
];

export const investors: Investor[] = [
  { name: "Demo Angel Network", type: "Angel", focus: ["AI", "SaaS"] },
  { name: "Sample Capital", type: "VC", focus: ["FinTech", "EdTech"] },
  { name: "Placeholder Accelerator", type: "Accelerator", focus: ["HealthTech", "ClimateTech"] },
  { name: "Example Corp Ventures", type: "Corporate", focus: ["SaaS", "AI"] },
  { name: "Demo Family Office", type: "Family Office", focus: ["FinTech", "ClimateTech"] },
];

export const venturesPillars = [
  ["🚀", "Accelerate", ["Founder mentorship", "Product validation", "GTM strategy", "Fundraising preparation"], "Apply to Accelerator →", "#7c3aed"],
  ["🔎", "Discover", ["Startup discovery", "Founder profiles", "Startup showcases", "Demo days"], "Explore Startups →", "#2563eb"],
  ["🤝", "Connect", ["Investors", "Mentors", "Advisors", "Strategic partners"], "Explore Network →", "#ec4899"],
] as const;

export const svc = [
  ["🌐", "Websites", ["Corporate websites", "Landing pages", "E-commerce"], "Build Website →"],
  ["💻", "Software", ["Custom software", "SaaS", "Internal tools"], "Build Software →"],
  ["🤖", "AI", ["AI agents", "Chatbots", "Automation", "AI integrations"], "Build with AI →"],
  ["📊", "Business Systems", ["CRM", "Dashboards", "Analytics", "APIs"], "Build Your System →"],
  ["🔒", "Cloud & Security", ["Cloud infrastructure", "DevOps", "Cybersecurity"], "Secure Your Business →"],
] as const;

export const proc = [
  ["Discover", "Understand your problem"],
  ["Strategy", "Define the solution"],
  ["Design", "Create the experience"],
  ["Build", "Develop the product"],
  ["Deploy", "Launch to production"],
  ["Scale", "Support & improve"],
] as const;

export const tiers = [
  ["Starter", "For early businesses", ["Website", "Landing page", "Basic integrations"], "Request Quote"],
  ["Growth", "For growing businesses", ["Web/app development", "Automation", "Dashboard", "CRM"], "Request Quote"],
  ["Scale", "For established companies", ["Custom software", "AI", "Cloud", "Integrations", "Dedicated support"], "Talk to Us"],
] as const;
