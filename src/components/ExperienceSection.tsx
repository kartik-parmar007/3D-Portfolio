import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Calendar,
  ExternalLink,
  Star,
  Code2,
  Globe,
  BookOpen,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE DATA
══════════════════════════════════════════════════════════ */
const experiences = [
  {
    id: 1,
    company: 'OneDiplomas',
    role: 'Software Engineer',
    type: 'Part-time',
    startDate: 'Apr 2024',
    endDate: 'Mar 2026',
    duration: '2 Years',
    location: 'Remote / India',
    website: null,
    highlight: true, // Most important
    description:
      'Spearheaded full-stack engineering for the OneDiplomas platform—a high-availability EdTech product. Designed frontend architecture using Next.js and TypeScript, and engineered highly scalable backend services with Express and Node.js. Optimized MongoDB data models and aggregation pipelines to enhance system performance and reliability.',
    responsibilities: [
      'Architected end-to-end distributed system features using Next.js and Node.js',
      'Designed and documented scalable, high-throughput RESTful APIs',
      'Optimized MongoDB schemas and database queries to significantly reduce latency',
      'Led UI/UX integration with pixel-perfect Figma-to-code implementations',
      'Maintained automated deployment pipelines and production cloud infrastructure',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    accentColor: '#8b5cf6',
    bgFrom: '#1a0d33',
    bgTo: '#0d0a20',
    icon: Star,
    iconColor: 'text-violet-400',
  },
  {
    id: 2,
    company: 'S Kumar & CO.',
    role: 'Frontend Engineer',
    type: 'Internship',
    startDate: 'Sep 2023',
    endDate: 'Feb 2024',
    duration: '6 Months',
    location: 'India',
    website: 'https://skumarco.in',
    highlight: false,
    description:
      'Engineered the official enterprise web presence for S Kumar & CO., delivering a highly responsive, performant user interface. Conducted rigorous performance profiling to resolve rendering bottlenecks and optimize Core Web Vitals, achieving exceptional Lighthouse scores.',
    responsibilities: [
      'Developed a resilient, multi-page business platform from the ground up',
      'Implemented advanced SEO strategies driving measurable organic user acquisition',
      'Optimized client-side rendering performance, significantly improving Core Web Vitals',
      'Interacted extensively with stakeholders to refine requirements and UI deliverables',
      'Executed streamlined deployment to production using scalable delivery practices',
    ],
    tech: ['React', 'Tailwind CSS', 'SEO', 'hostinger'],
    accentColor: '#06b6d4',
    bgFrom: '#012a33',
    bgTo: '#011820',
    icon: Code2,
    iconColor: 'text-cyan-400',
  },
];

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE CARD
══════════════════════════════════════════════════════════ */
const ExperienceCard: React.FC<{
  exp: (typeof experiences)[0];
  index: number;
  isLeft: boolean;
}> = ({ exp, index, isLeft }) => {
  const Icon = exp.icon;

  return (
    <div className={`relative flex items-start gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}>

      {/* ── Timeline dot + line connector (desktop) ── */}
      <div className="hidden lg:flex flex-col items-center mx-6 flex-shrink-0" style={{ marginTop: 28 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.15 + 0.2 }}
          viewport={{ once: true }}
          className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 z-20 bg-background/80 backdrop-blur-md"
          style={{
            borderColor: `${exp.accentColor}60`,
            boxShadow: `0 0 20px ${exp.accentColor}30`,
          }}
        >
          <Icon className={`w-5 h-5 ${exp.iconColor}`} />
          
          {/* Pulse effect for highlight items */}
          {exp.highlight && (
            <div 
              className="absolute -inset-1 rounded-full animate-pulse opacity-50"
              style={{ border: `2px solid ${exp.accentColor}` }}
            />
          )}
        </motion.div>
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 group"
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.01 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
          className="relative rounded-3xl border overflow-hidden transition-all duration-500 glass-effect cursor-default"
          style={{
            background: `linear-gradient(165deg, ${exp.bgFrom}ee, ${exp.bgTo}fb)`,
            borderColor: `${exp.accentColor}20`,
          }}
        >
          {/* Dynamic Glow Layer */}
          <div 
            className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${exp.accentColor}25, transparent 40%)`
            }}
          />

          {/* Top accent bar with animated pulse */}
          <div
            className="h-1.5 w-full relative overflow-hidden"
            style={{ background: `${exp.accentColor}20` }}
          >
            <motion.div 
              className="absolute inset-0 w-full h-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ background: `linear-gradient(90deg, transparent, ${exp.accentColor}, transparent)` }}
            />
          </div>

          {/* Highlight Badge */}
          {exp.highlight && (
            <div
              className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white z-10 shadow-lg shadow-black/20"
              style={{ background: `linear-gradient(135deg, ${exp.accentColor}, ${exp.accentColor}dd)` }}
            >
              <Zap className="w-3 h-3 fill-current" />
              Core Role
            </div>
          )}

          <div className="p-6 sm:p-8 md:p-10 space-y-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-2">
                {/* Role */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight">
                  {exp.role}
                </h3>
                {/* Company */}
                <div className="flex items-center gap-3">
                  <div 
                    className="px-3 py-1 rounded-lg text-sm font-bold shadow-sm"
                    style={{ 
                      background: `${exp.accentColor}15`,
                      color: exp.accentColor,
                      border: `1px solid ${exp.accentColor}30`
                    }}
                  >
                    {exp.company}
                  </div>
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right badges */}
              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-white"
                  style={{ background: exp.accentColor }}
                >
                  {exp.type}
                </span>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{exp.duration}</span>
              </div>
            </div>

            {/* Meta row — dates & location */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/60">
                <div className="p-1.5 rounded-md bg-white/5">
                  <Calendar className="w-4 h-4 text-white/80" style={{ color: exp.accentColor }} />
                </div>
                {exp.startDate} — {exp.endDate}
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-xs font-semibold text-white/60">
                <div className="p-1.5 rounded-md bg-white/5">
                  <MapPin className="w-4 h-4 text-white/80" style={{ color: exp.accentColor }} />
                </div>
                {exp.location}
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <div 
                className="absolute -left-4 top-0 bottom-0 w-1 rounded-full opacity-20"
                style={{ background: exp.accentColor }}
              />
              <p className="text-white/60 text-[15px] leading-relaxed font-medium pl-2">
                {exp.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/30">
                  Core Contributions
                </h4>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {exp.responsibilities.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div 
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110"
                      style={{ background: `${exp.accentColor}15` }}
                    >
                      <ChevronRight className="w-3 h-3" style={{ color: exp.accentColor }} />
                    </div>
                    <span className="text-[13px] sm:text-sm text-white/50 group-hover/item:text-white/80 transition-colors leading-snug">
                      {r}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="group/tag flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl font-bold border transition-all hover:scale-105"
                  style={{
                    background: `${exp.accentColor}08`,
                    borderColor: `${exp.accentColor}20`,
                    color: `${exp.accentColor}bb`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.accentColor }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════════════════ */
export const ExperienceSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden"
      aria-label="Work Experience"
    >
      {/* Dynamic Background elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.25em] mb-6 border glass-effect"
            style={{
              borderColor: 'hsl(var(--primary) / 0.3)',
              color: 'hsl(var(--primary))',
            }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Professional Path
          </motion.div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            Engineering{' '}
            <span className="gradient-primary bg-clip-text text-transparent italic">Impact</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            A track record of designing highly resilient architectures, optimizing systems for scale, and shipping enterprise-grade code.
          </p>
        </motion.div>

        {/* ── Vertical timeline ── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Centre spine (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-violet-600 via-cyan-500 to-transparent"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* ── Total experience summary strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {[
            { icon: Briefcase, label: '2 Companies', color: '#a855f7' },
            { icon: Calendar, label: '2+ Years Total', color: '#06b6d4' },
            { icon: BookOpen, label: 'Full-time & Intern', color: '#10b981' },
            { icon: Globe, label: 'Real Products', color: '#f59e0b' },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl border glass-effect group hover:scale-105 transition-all duration-300"
              style={{
                borderColor: `${color}20`,
              }}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <span className="text-sm font-bold text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
