/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Globe, 
  Award, 
  TrendingUp, 
  Cpu, 
  Rocket,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { cn } from './lib/utils';

const EXPERIENCE = [
  {
    company: "Ivy® Professional School",
    role: "Director",
    period: "2007 - Present",
    description: "Strategic decision making, Product Launches, Client Relation, Promoting, Branding, Industry Alliance, Government Alliances.",
    type: "Leadership"
  },
  {
    company: "Srijan Valley School",
    role: "Co-Founder",
    period: "2024 - Present",
    description: "Co-founded and leading strategic direction for educational excellence.",
    type: "Entrepreneurship"
  },
  {
    company: "Time2Justice",
    role: "Co-Founder",
    period: "2023 - Present",
    description: "Building AI Lawyer, Tax Consultant and AI Background Checker with real-time access to Indian legal & tax compliance cases.",
    type: "AI / LegalTech"
  },
  {
    company: "BiGo Bikes",
    role: "Co-Founder",
    period: "2024 - Present",
    description: "Electric bikes fleet management for business errands and parcel delivery.",
    type: "EV / Logistics"
  },
  {
    company: "Propelld",
    role: "Investor",
    period: "2017 - Present",
    description: "First investor and customer for the future of education financing.",
    type: "Fintech"
  },
  {
    company: "The Attitude Designers Limited",
    role: "Director",
    period: "2008 - Present",
    description: "Managing a chain of boutique stores across Central and Eastern India.",
    type: "Retail"
  },
  {
    company: "Paperboat Ivy EduDesign Pvt Ltd",
    role: "Director",
    period: "2018 - 2022",
    description: "Large scale eLearning content and product development for global EdTech firms.",
    type: "EdTech"
  },
  {
    company: "Green Earth Hospitality Pvt Ltd",
    role: "Director",
    period: "2012 - 2022",
    description: "Managed hospitality solutions including Cream Centre restaurant in Kolkata.",
    type: "Hospitality"
  },
  {
    company: "Capgemini",
    role: "Sr. Consultant",
    period: "2005 - 2008",
    description: "Devised & implemented project management strategies, financial data & records management.",
    type: "Consulting"
  }
];

const SKILLS = [
  { name: "Generative AI", icon: Cpu, color: "text-blue-500" },
  { name: "Data Science", icon: TrendingUp, color: "text-emerald-500" },
  { name: "Start-up Ventures", icon: Rocket, color: "text-orange-500" },
  { name: "AI Consulting", icon: Briefcase, color: "text-purple-500" },
  { name: "EdTech Strategy", icon: GraduationCap, color: "text-indigo-500" },
  { name: "Product Launch", icon: Globe, color: "text-cyan-500" },
];

const EDUCATION = [
  {
    school: "Texas A&M University",
    degree: "Master of Science (MS), Management Information Systems",
    period: "2003 - 2005"
  },
  {
    school: "University of Pune",
    degree: "Computer Engg & Science, Engineering",
    period: "1999 - 2003"
  }
];

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">PA.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="relative overflow-hidden pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Strategic Consulting
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                Prateek <br />
                <span className="text-blue-600">Agrawal</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-xl mb-10">
                Founder, Investor, and GenAI Leader with 18 years of global experience in Data Science, Analytics, and Serial Entrepreneurship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:prateek@ivyproschool.com"
                  className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Get in touch <Mail size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/prateekagrawal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold hover:border-slate-400 transition-all flex items-center gap-2"
                >
                  LinkedIn <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-slate-200 group"
            >
              <img 
                src="https://picsum.photos/seed/kolkata/1200/1600" 
                alt="Kolkata Cityscape"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-2">
                    <Award className="text-blue-400" />
                    <span className="text-white font-bold">Top 20 Analytics Academician</span>
                  </div>
                  <p className="text-white/80 text-sm">Recognized as one of India's leading Data Science educators.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8"
            >
              Summary
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-medium leading-snug text-slate-800"
            >
              "Data & GenAI Leader and a Serial Entrepreneur with 18 years of global experience. Helped clients ranging from the US government's largest lending firm to the world's biggest manufacturers."
            </motion.p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Professional Journey</h2>
                <h3 className="text-5xl font-bold tracking-tight">Experience</h3>
              </div>
              <p className="text-slate-500 max-w-md">
                A timeline of leadership, innovation, and strategic growth across multiple industries.
              </p>
            </div>

            <div className="space-y-4">
              {EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {exp.type}
                        </span>
                        <span className="text-slate-400 text-sm font-medium">{exp.period}</span>
                      </div>
                      <h4 className="text-2xl font-bold mb-1 group-hover:text-blue-600 transition-colors">{exp.company}</h4>
                      <p className="text-lg font-semibold text-slate-600 mb-4">{exp.role}</p>
                      <p className="text-slate-500 leading-relaxed max-w-3xl">{exp.description}</p>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">Expertise</h2>
              <h3 className="text-5xl font-bold tracking-tight">Core Skills</h3>
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SKILLS.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                >
                  <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", skill.color)}>
                    <skill.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Extensive experience in implementing {skill.name.toLowerCase()} solutions for global clients.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Academic Background</h2>
                <h3 className="text-5xl font-bold tracking-tight mb-8">Education</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">
                  A strong foundation in Computer Engineering and Management Information Systems from world-class institutions.
                </p>
                <div className="space-y-8">
                  {EDUCATION.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative pl-8 border-l-2 border-slate-100"
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                      <span className="text-sm font-bold text-blue-600 mb-2 block">{edu.period}</span>
                      <h4 className="text-xl font-bold mb-1">{edu.school}</h4>
                      <p className="text-slate-600 font-medium">{edu.degree}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden bg-slate-100 aspect-video lg:aspect-auto">
                <img 
                  src="https://picsum.photos/seed/university/1000/1200" 
                  alt="Education Background"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div className="p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl">
                    <GraduationCap size={48} className="mx-auto mb-4 text-blue-600" />
                    <p className="text-slate-900 font-bold text-xl italic">"Education is the most powerful weapon which you can use to change the world."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Get In Touch</h2>
            <h3 className="text-5xl font-bold tracking-tight mb-8">Let's build the future together.</h3>
            <p className="text-slate-500 text-xl mb-12">
              Interested in GenAI, Data Science, or Start-up consulting? Reach out for collaborations or inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:prateek@ivyproschool.com"
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/prateekagrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2"
              >
                LinkedIn <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Prateek Agrawal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.ivyproschool.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Globe size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
