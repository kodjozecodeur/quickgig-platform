import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
export const assets = {
  logo: logo,
  search_icon: search_icon,
};
export const steps = [
  {
    number: "1",
    title: "Browse or Post",
    desc: "Find gigs that match your skills or post a job you need help with.",
  },
  {
    number: "2",
    title: "Connect",
    desc: "Apply for gigs or review applications from interested talent.",
  },
  {
    number: "3",
    title: "Complete",
    desc: "Finish the project, get paid, and build your portfolio or business.",
  },
];

export const gigData = [
  {
    id: "gig1",
    title: "Design a simple logo for my tech blog",
    category: "Design",
    budget: "$50 - $100",
    timeEstimate: "1-3 hours",
    description:
      "I need a clean, minimalist logo for my tech blog called 'CodeNotes'. The blog focuses on JavaScript and React tutorials. I'd like something simple but memorable that represents coding and learning.",
    contactInfo: "johndoe@example.com",
  },
  {
    id: "gig2",
    title: "Fix responsive layout issues on my portfolio",
    category: "Frontend",
    budget: "Under $50",
    timeEstimate: "Under 1 hour",
    description:
      "My portfolio website looks great on desktop but has some layout issues on mobile devices. I need someone to fix the responsive design so it works well on all screen sizes. The site is built with HTML, CSS, and a bit of JavaScript.",
    contactInfo: "jane.smith@example.com",
  },
  {
    id: "gig3",
    title: "Create a simple contact form for WordPress site",
    category: "WordPress",
    budget: "$50 - $100",
    timeEstimate: "1-3 hours",
    description:
      "I need a contact form added to my WordPress site. The form should include name, email, subject, and message fields. When submitted, it should send an email to my business address. I'd prefer not to use plugins if possible.",
    contactInfo: "business@example.com",
  },
  {
    id: "gig4",
    title: "Design social media graphics for product launch",
    category: "Design",
    budget: "$100 - $200",
    timeEstimate: "Over 3 hours",
    description:
      "I'm launching a new fitness app and need a set of social media graphics for Instagram, Facebook, and Twitter. I need 5 different designs that follow my brand guidelines. I'll provide the brand colors, logo, and product screenshots.",
    contactInfo: "marketing@fitnessapp.com",
  },
  {
    id: "gig5",
    title: "Build a simple landing page with a signup form",
    category: "Frontend",
    budget: "$100 - $200",
    timeEstimate: "1-3 hours",
    description:
      "I need a simple but professional landing page for my upcoming ebook. The page should have a hero section, bullet points of benefits, author bio, and a signup form to collect emails. I have the copy and images ready.",
    contactInfo: "author@example.com",
  },
  {
    id: "gig6",
    title: "Update WordPress plugins and fix broken links",
    category: "WordPress",
    budget: "Under $50",
    timeEstimate: "Under 1 hour",
    description:
      "I need someone to update all plugins on my WordPress site and fix a few broken links that have been flagged in Google Search Console. This should be a quick task for someone familiar with WordPress.",
    contactInfo: "site.owner@example.com",
  },
];

export const categoryColors = {
  Frontend: "bg-blue-100 text-blue-800",
  Design: "bg-pink-100 text-pink-800",
  WordPress: "bg-green-100 text-green-800",
};
