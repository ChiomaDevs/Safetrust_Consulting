// src/constants.js
import { Target, Users2, Rocket, ShieldCheck, Workflow, Layers3, Waypoints, BookOpen } from "lucide-react";
import React from "react";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Training Solutions" },
  { to: "/courses", label: "Course Details" },
  { to: "/recommended", label: "Recommended" },
  { to: "/methodology", label: "Methodology" },
  { to: "/contact", label: "Contact" },
];

export const BRAND = {
  name: "Safetrust Consulting",
  tagline: "Technology. Strategy. People.",
  colors: {
    primary: "#0F766E",
    secondary: "#1D4ED8",
    accent: "#F59E0B",
  },
};

export const VISION =
  "To become the benchmark for unparalleled quality consulting solutions in our chosen industry.";
export const MISSION =
  "Leveraging our expertise, technology and best practices to provide strategic solutions to our clients, facilitating business transformation and optimal returns to clients and stakeholders.";
export const VALUES = ["Collaboration", "Integrity", "Continuous Improvement", "Client-Driven", "Adaptability"];

export const TRAINING_OVERVIEW = {
  title: "Mastering Behavioral Skills for Personal Impact & Workplace Excellence",
  summary:
    "A high-impact behavioral training designed to reshape how employees engage at all levels. It emphasizes professional conduct, emotional intelligence, and self-leadership to build a positive personal brand and a values-driven culture.",
  audience: ["Junior", "Mid-level", "Senior"],
  outcomes: [
    "Embody personal branding and self-leadership in daily roles",
    "Build strong, trust-based working relationships",
    "Apply empathy to improve team interactions and reduce friction",
    "Navigate difficult conversations with constructive feedback",
    "Demonstrate professionalism and etiquette across communication, punctuality, dress, and conduct",
  ],
};

export function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.417 3 13.229 3 10.5 3 8.015 4.99 6 7.5 6c1.357 0 2.637.56 3.545 1.464L12 8.414l.955-.95A4.96 4.96 0 0116.5 6C19.01 6 21 8.015 21 10.5c0 2.729-1.688 4.917-3.989 6.997a25.18 25.18 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.003a.75.75 0 01-.684 0z"/>
    </svg>
  );
}

export const MODULES = [
  { id: "personal-branding", title: "Personal Branding & Self-Leadership", icon: <Target className="w-5 h-5" />, synopsis: "Understand how presence, communication, and mindset shape reputation and influence at work." },
  { id: "professionalism-etiquette", title: "Professionalism & Office Etiquette", icon: <ShieldCheck className="w-5 h-5" />, synopsis: "Reinforce workplace standards around communication, punctuality, dress code, boundaries, digital conduct, and collaboration." },
  { id: "strong-relationships", title: "Developing Strong Working Relationships", icon: <Users2 className="w-5 h-5" />, synopsis: "Master interpersonal skills to build trust, respect, and mutual support across teams and departments." },
  { id: "empathy", title: "Working with Empathy", icon: <HeartIcon />, synopsis: "Cultivate emotional intelligence and empathy to improve collaboration and create inclusive team dynamics." },
  { id: "difficult-conversations", title: "Managing Difficult Conversations", icon: <Workflow className="w-5 h-5" />, synopsis: "Learn practical frameworks for approaching high-stakes or uncomfortable discussions with confidence and clarity." },
  { id: "team-player", title: "Becoming a Team Player", icon: <Layers3 className="w-5 h-5" />, synopsis: "Explore the attitudes and behaviors that make individuals valued contributors to any team or project." },
  { id: "resilience", title: "Resilience & Adaptability in the Workplace", icon: <Rocket className="w-5 h-5" />, synopsis: "Equip participants with techniques to manage stress, embrace change, and thrive in high-pressure environments." },
];

export const RECOMMENDED = [
  { title: "Personal Effectiveness & Productivity", objectives: ["Prioritization", "Focus systems", "Outcome-based execution"] },
  { title: "Unlocking Leadership Potential", objectives: ["Growth mindset", "Innovation", "Coaching for performance"] },
  { title: "Driving a Risk Management Culture", objectives: ["Risk awareness", "Controls & ownership", "Continuous monitoring"] },
  { title: "Leveraging Data for Strategic Decision Making", objectives: ["Data literacy", "Insight to action", "KPIs & dashboards"] },
  { title: "Cybersecurity Awareness & Best Practices", objectives: ["Threat hygiene", "Phishing defense", "Secure habits"] },
  { title: "Effective Communication & Collaboration", objectives: ["Clarity", "Active listening", "Stakeholder alignment"] },
  { title: "Working with Emotional Intelligence", objectives: ["Self-awareness", "Empathy", "Relationship management"] },
  { title: "Driving Sustainable Business Operations", objectives: ["ESG basics", "Resource efficiency", "Culture & accountability"] },
];

export const METHODOLOGY = [
  { icon: <BookOpen className="w-5 h-5" />, title: "Blended Learning (Instructor-led)", points: ["Interactive, practice-based sessions", "Case studies, videos, discussions, and exercises", "Expert-led presentations with high engagement"] },
  { icon: <Waypoints className="w-5 h-5" />, title: "Digital Learning (Online & Virtual)", points: ["Cost-effective", "Reliable", "Engaging content for ROI"] },
  { icon: <Workflow className="w-5 h-5" />, title: "Delivery Style & Feedback", points: ["Video-based and case-based learning", "Group practicals & role plays aligned to objectives", "Assessments with actionable feedback"] },
];

export const TEAM = [
  { name: "James Okarimia", title: "Governance, Risk & Financial Solutions (25+ yrs)", bio: "Ex-Citi Bank UK, ABN AMRO, Delta Lloyd, Fortis Bank; ex-KPMG NL, IBM GBS Benelux, Grant Thornton. MSc Financial Studies (Strathclyde). IIA (UK/USA), IMA (USA), GARP.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
  { name: "Idris Oko-osi", title: "Head, Enterprise Risk Management, Africa Prudential", bio: "22+ yrs in banking & consulting. MBA (Leicester). ERMCP, Certified Basel II Professional. Member, CIBN ERM Community of Practice.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
  { name: "Austin Agwaraonye", title: "Leadership & Human Capital Consultant (22+ yrs)", bio: "Ex-Diamond Bank; facilitator for First Bank, Union Bank, NNPC, Total. CIPM (Nig.), Certified Management Trainer (CIBN).", photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop" },
  { name: "Obinna Opara", title: "Organizational Development & Learning Design", bio: "14+ yrs across financial services, consulting, oil & gas, telecom. FMC, CMS (London Graduate School). MBA; B.Sc. Computer Science.", photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" },
];
export const FOOTER_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Training Solutions" },
  { to: "/courses", label: "Course Details" },
  { to: "/recommended", label: "Recommended" },
  { to: "/methodology", label: "Methodology" },
  { to: "/contact", label: "Contact" },
];

export const SOCIALS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/safetrust-consulting/", icon: "linkedin" },
  { label: "Twitter", url: "https://twitter.com/SafetrustCons", icon: "twitter" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} Safetrust Consulting. All rights reserved.`;        