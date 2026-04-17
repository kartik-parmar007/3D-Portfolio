import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import {
  ExternalLink,
  Github,
  X,
  Globe,
  Database,
  Code,
  Server,
  ShieldCheck,
  ShoppingCart,
  MapPin,
  Zap,
  Trophy,
  Filter,
  ArrowUpRight,
  Mail,
  CheckCircle2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   PROJECT DATA
══════════════════════════════════════════════════════════════ */
const projects = [
  {
    id: 1,
    title: 'EagleByte',
    description:
      'A professional business website focused on delivering digital solutions and cutting-edge tech services.',
    longDescription:
      'EagleByte is a professional business website built to showcase digital solutions and tech services. It features a clean, modern UI/UX, fully responsive design across all devices, and optimized performance metrics. Built with Next.js and TypeScript, the site delivers an exceptional user experience with fast load times and smooth interactions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://eaglebyte.in',
    github: null as string | null,
    category: ['frontend'],
    features: ['Modern UI/UX', 'Fully responsive design', 'Optimized performance'],
    accentColor: '#8b5cf6',
    icon: Globe,
    iconColor: 'text-violet-400',
    bgFrom: '#1e1033',
    bgTo: '#0f0a24',
  },
  {
    id: 2,
    title: 'CityTrail',
    description:
      'A location-based exploration platform that helps users discover places and city highlights around them.',
    longDescription:
      'CityTrail is a location-based exploration platform designed to help users discover places, attractions, and city highlights. It leverages dynamic content rendering with React.js, a robust Node.js/Express.js backend, and MongoDB for data storage. The interactive UI offers seamless API-based architecture for real-time data fetching and geolocation features.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    live: 'https://citytrail.site',
    github: null as string | null,
    category: ['fullstack'],
    features: ['Dynamic content rendering', 'Interactive UI', 'API-based architecture'],
    accentColor: '#10b981',
    icon: MapPin,
    iconColor: 'text-emerald-400',
    bgFrom: '#042f1e',
    bgTo: '#0a1f19',
  },
  {
    id: 3,
    title: 'V2 Enterprise',
    description:
      'A full-stack e-commerce platform for showcasing and selling products online with a scalable backend.',
    longDescription:
      'V2 Enterprise is a comprehensive full-stack e-commerce platform built with the MERN stack. It offers a complete product catalog system, add-to-cart functionality, secure checkout, and robust backend API integration. The platform\'s responsive UI ensures a seamless shopping experience across all devices, while the scalable architecture handles high traffic with ease.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    live: 'https://v2enterprise.in',
    github: null as string | null,
    category: ['fullstack', 'ecommerce'],
    features: [
      'Product catalog system',
      'Add to cart & checkout',
      'Backend API integration',
      'Responsive UI',
      'Scalable architecture',
    ],
    accentColor: '#f59e0b',
    icon: ShoppingCart,
    iconColor: 'text-orange-400',
    bgFrom: '#2a1a00',
    bgTo: '#1a1100',
    featured: true,
  },
  {
    id: 4,
    title: 'ByteSpark',
    description:
      'A modern tech-focused web platform showcasing innovative UI and advanced frontend capabilities.',
    longDescription:
      'ByteSpark is a modern tech-focused web platform that demonstrates cutting-edge frontend capabilities. Built with Next.js and TypeScript, it features a clean and polished UI design with a mobile-first approach. The platform showcases fast performance, smooth animations, and modern design patterns that push the boundaries of frontend development.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://byte-spark.vercel.app/',
    github: null as string | null,
    category: ['frontend'],
    features: ['Clean UI design', 'Fast performance', 'Mobile-first approach'],
    accentColor: '#0ea5e9',
    icon: Zap,
    iconColor: 'text-sky-400',
    bgFrom: '#001a2c',
    bgTo: '#000f1a',
  },
  {
    id: 5,
    title: 'IIT Gandhinagar Hackathon',
    description:
      'A hackathon project built to solve real-world problems with a scalable backend system and efficient data handling.',
    longDescription:
      'This project was developed as part of the IIT Gandhinagar Odoo Hackathon to solve real-world problems with an efficient, scalable system. Built with Python and PostgreSQL, it features a backend-heavy architecture deployed on Railway. The system is designed for efficient data handling and scalable system design.',
    tech: ['Python', 'PostgreSQL', 'Railway'],
    live: 'https://iit-gandhinagar-odoo-hackathon-production.up.railway.app/',
    github: null as string | null,
    category: ['backend'],
    features: [
      'Backend-heavy architecture',
      'Scalable system design',
      'Efficient data handling',
    ],
    accentColor: '#f43f5e',
    icon: Trophy,
    iconColor: 'text-rose-400',
    bgFrom: '#2a0010',
    bgTo: '#18000b',
  },
  {
    id: 6,
    title: 'Public Grievance System',
    description:
      'A full-stack web app that allows users to report, track, and manage public grievances efficiently.',
    longDescription:
      'The Public Grievance Reporting System is a full-stack MERN application designed to bridge the gap between citizens and authorities. It features a robust user authentication system, an intuitive complaint submission and tracking interface, a powerful admin dashboard for managing grievances, and a well-structured REST API for seamless data flow. Deployed on Vercel + Render.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Vercel', 'Render'],
    live: 'https://public-grievance-reporting-system.vercel.app/',
    github: null as string | null,
    category: ['fullstack'],
    features: [
      'User authentication system',
      'Complaint submission & tracking',
      'Admin dashboard',
      'REST API integration',
    ],
    accentColor: '#3b82f6',
    icon: ShieldCheck,
    iconColor: 'text-blue-400',
    bgFrom: '#001229',
    bgTo: '#000b1a',
  },
] as const;

type Project = (typeof projects)[number];

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
══════════════════════════════════════════════════════════════ */
const filterTabs = [
  { id: 'all', label: 'All', icon: Filter },
  { id: 'fullstack', label: 'Full Stack', icon: Database },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
];

const techColors: Record<string, string> = {
  'Next.js': 'bg-neutral-800 text-neutral-200 border-neutral-600',
  TypeScript: 'bg-blue-950 text-blue-300 border-blue-700',
  'Tailwind CSS': 'bg-cyan-950 text-cyan-300 border-cyan-700',
  'React.js': 'bg-sky-950 text-sky-300 border-sky-700',
  'Node.js': 'bg-green-950 text-green-300 border-green-700',
  'Express.js': 'bg-stone-800 text-stone-300 border-stone-600',
  MongoDB: 'bg-emerald-950 text-emerald-300 border-emerald-700',
  Python: 'bg-yellow-950 text-yellow-300 border-yellow-700',
  PostgreSQL: 'bg-indigo-950 text-indigo-300 border-indigo-700',
  Railway: 'bg-purple-950 text-purple-300 border-purple-700',
  Vercel: 'bg-neutral-900 text-neutral-200 border-neutral-600',
  Render: 'bg-violet-950 text-violet-300 border-violet-700',
};
const getTechColor = (t: string) => techColors[t] ?? 'bg-primary/10 text-primary border-primary/30';

/* ═══════════════════════════════════════════════════════════════
   SPRING PHYSICS CARD (3D tilt + magnetic CTA)
══════════════════════════════════════════════════════════════ */
function useCardSpring() {
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 260, damping: 28 });
  const sRotY = useSpring(rotY, { stiffness: 260, damping: 28 });
  const gX = useTransform(sRotY, [-18, 18], ['0%', '100%']);
  const gY = useTransform(sRotX, [-18, 18], ['0%', '100%']);
  return { rotX, rotY, sRotX, sRotY, gX, gY };
}

/* ── Card preview thumbnail ── */
const CardThumbnail: React.FC<{ project: Project; hovered: boolean }> = ({ project, hovered }) => {
  const Icon = project.icon;
  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5"
      style={{ background: `linear-gradient(135deg, ${project.bgFrom}, ${project.bgTo})` }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(${project.accentColor} 1px, transparent 1px),
                            linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Centre orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={hovered ? { scale: 1.12, opacity: 1 } : { scale: 1, opacity: 0.85 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="relative flex items-center justify-center"
        >
          <div
            className="absolute w-20 h-20 rounded-full blur-2xl"
            style={{ background: `${project.accentColor}55` }}
          />
          <div
            className="relative w-16 h-16 rounded-full flex items-center justify-center border"
            style={{
              background: `radial-gradient(circle, ${project.accentColor}30, transparent 70%)`,
              borderColor: `${project.accentColor}40`,
            }}
          >
            <Icon className={`w-8 h-8 ${project.iconColor}`} />
          </div>
        </motion.div>
      </div>

      {/* Tech pills slide-up on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute bottom-0 inset-x-0 p-2.5 flex flex-wrap gap-1.5"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 60%, transparent)' }}
          >
            {project.tech.slice(0, 4).map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: `${project.accentColor}22`,
                  border: `1px solid ${project.accentColor}50`,
                  color: project.accentColor,
                }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live pulse dot */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inset-0 rounded-full opacity-75"
            style={{ background: project.accentColor }}
          />
          <span className="relative rounded-full h-2 w-2" style={{ background: project.accentColor }} />
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Live</span>
      </div>

      {/* Featured ribbon */}
      {'featured' in project && project.featured && (
        <div
          className="absolute top-2.5 left-0 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white rounded-r-full"
          style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}aa)` }}
        >
          ⭐ Featured
        </div>
      )}
    </div>
  );
};

/* ── Main card component ── */
const ProjectCard: React.FC<{ project: Project; index: number; onOpen: () => void }> = ({
  project,
  index,
  onOpen,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { rotX, rotY, sRotX, sRotY, gX, gY } = useCardSpring();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const px = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 .. 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotY.set(px * 14);
      rotX.set(-py * 14);
    },
    [rotX, rotY]
  );
  const handleLeave = useCallback(() => {
    setHovered(false);
    rotX.set(0);
    rotY.set(0);
  }, [rotX, rotY]);

  // Shimmer border color
  const borderColor = hovered ? `${project.accentColor}70` : 'hsl(var(--border))';

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.96 }}
      transition={{
        layout: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.4, delay: index * 0.08 },
        y: { type: 'spring', stiffness: 200, damping: 22, delay: index * 0.08 },
        scale: { type: 'spring', stiffness: 200, damping: 22, delay: index * 0.08 },
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.article
        ref={cardRef}
        style={{
          rotateX: sRotX,
          rotateY: sRotY,
          transformStyle: 'preserve-3d',
          transformPerspective: 1000,
          border: `1px solid ${borderColor}`,
          boxShadow: hovered
            ? `0 0 0 1px ${project.accentColor}30, 0 24px 60px ${project.accentColor}18, 0 8px 20px rgba(0,0,0,0.3)`
            : '0 4px 24px rgba(0,0,0,0.18)',
          transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
          background: 'hsl(var(--card) / 0.75)',
          backdropFilter: 'blur(16px)',
        }}
        className="relative flex flex-col rounded-2xl cursor-pointer overflow-hidden h-full will-change-transform"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        onMouseMove={handleMouseMove}
        onClick={onOpen}
        role="button"
        aria-label={`Open details for ${project.title}`}
        whileTap={{ scale: 0.985 }}
      >
        {/* Shimmer gradient overlay (tracks mouse) */}
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-[0.06] z-10"
            style={{
              background: `radial-gradient(circle at ${gX.get()} ${gY.get()}, white 0%, transparent 70%)`,
            }}
          />
        )}

        {/* Thumbnail */}
        <div className="p-3 pb-0" style={{ transform: 'translateZ(12px)' }}>
          <CardThumbnail project={project} hovered={hovered} />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-3" style={{ transform: 'translateZ(8px)' }}>
          {/* Title row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
              {project.title}
            </h3>
            <motion.div
              animate={hovered ? { x: 2, y: -2, opacity: 1 } : { x: 0, y: 0, opacity: 0.35 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ color: project.accentColor }}
            >
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full border font-semibold ${getTechColor(t)}`}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full border font-semibold bg-white/5 text-white/40 border-white/10">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 my-1" />

          {/* Action buttons */}
          <div className="flex gap-2 mt-auto">
            {project.github && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-foreground/70 hover:text-foreground transition-colors"
                onClick={(e) => { e.stopPropagation(); window.open(project.github!, '_blank', 'noopener,noreferrer'); }}
              >
                <Github className="w-3.5 h-3.5" /> Code
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white transition-all"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}dd, ${project.accentColor}88)`,
                boxShadow: hovered ? `0 4px 18px ${project.accentColor}55` : 'none',
                transition: 'box-shadow 0.3s ease',
              }}
              onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank', 'noopener,noreferrer'); }}
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </motion.button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   DETAIL MODAL
══════════════════════════════════════════════════════════════ */
const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handle);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handle); document.body.style.overflow = ''; };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(10px)' }}
          onClick={(e) => e.target === overlayRef.current && onClose()}
          role="dialog"
          aria-modal
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl"
            style={{
              background: 'hsl(var(--card))',
              border: `1px solid ${project.accentColor}40`,
              boxShadow: `0 30px 90px ${project.accentColor}22, 0 0 0 1px ${project.accentColor}18`,
            }}
          >
            {/* Close */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Hero banner */}
            <div
              className="relative w-full aspect-video rounded-t-2xl overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${project.bgFrom}, ${project.bgTo})` }}
            >
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `linear-gradient(${project.accentColor} 1px, transparent 1px),
                                    linear-gradient(90deg, ${project.accentColor} 1px, transparent 1px)`,
                  backgroundSize: '36px 36px',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div
                    className="absolute inset-0 rounded-full blur-3xl"
                    style={{ background: `${project.accentColor}50` }}
                  />
                  <div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center border"
                    style={{
                      background: `radial-gradient(circle, ${project.accentColor}40, transparent 70%)`,
                      borderColor: `${project.accentColor}40`,
                      boxShadow: `0 0 60px ${project.accentColor}70`,
                    }}
                  >
                    <project.icon className={`w-14 h-14 ${project.iconColor}`} />
                  </div>
                </motion.div>
              </div>
              {/* Status pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inset-0 rounded-full opacity-75" style={{ background: project.accentColor }} />
                  <span className="relative rounded-full h-2 w-2" style={{ background: project.accentColor }} />
                </span>
                <span className="text-xs text-white/70 font-medium">Production Live</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-7 space-y-5">
              {/* Title */}
              <div className="flex flex-wrap items-center gap-2">
                <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-foreground">
                  {project.title}
                </h2>
                {'featured' in project && project.featured && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold text-white uppercase tracking-widest"
                    style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}aa)` }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed -mt-3">
                {project.longDescription}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-xs font-bold text-foreground/60 uppercase tracking-widest mb-2.5">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: project.accentColor }} />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-xs font-bold text-foreground/60 uppercase tracking-widest mb-2.5">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full border font-semibold ${getTechColor(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                {project.github && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-white/12 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => window.open(project.github!, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4" /> View Source Code
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}99)`,
                    boxShadow: `0 6px 28px ${project.accentColor}50`,
                  }}
                  onClick={() => window.open(project.live, '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink className="w-4 h-4" /> Open Live Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SECTION ROOT
══════════════════════════════════════════════════════════════ */
export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === 'all'
      ? [...projects]
      : projects.filter((p) => (p.category as readonly string[]).includes(activeFilter));

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" aria-label="Featured Projects">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border"
            style={{
              background: 'hsl(var(--accent) / 0.1)',
              borderColor: 'hsl(var(--accent) / 0.28)',
              color: 'hsl(var(--accent))',
            }}
          >
            <Code className="w-3 h-3" />
            Portfolio Showcase
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4">
            Featured{' '}
            <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcase of my real-world projects demonstrating full-stack development,
            problem-solving, and scalable system design.
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14"
          role="tablist"
        >
          {filterTabs.map((tab) => {
            const TabIcon = tab.icon;
            const active = activeFilter === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                role="tab"
                aria-selected={active}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200"
                style={
                  active
                    ? {
                        background: 'hsl(var(--accent))',
                        borderColor: 'hsl(var(--accent))',
                        color: 'hsl(var(--accent-foreground))',
                        boxShadow: '0 4px 18px hsl(var(--accent) / 0.45)',
                      }
                    : {
                        background: 'hsl(var(--card) / 0.5)',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--muted-foreground))',
                      }
                }
              >
                <TabIcon className="w-3.5 h-3.5" />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Projects grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 xl:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Empty state ── */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-muted-foreground text-sm"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </AnimatePresence>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Want to see more or collaborate on a project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm gradient-primary text-white hero-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4" />
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
