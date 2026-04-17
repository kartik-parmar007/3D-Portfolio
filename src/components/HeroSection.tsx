import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code2,
  Cpu,
  Globe,
  Terminal,
  CheckCircle2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
══════════════════════════════════════════════════════════ */
const TITLES = [
  'Software Engineer',
  'Cloud & Microservices Architect',
  'Full-Stack Developer',
  'Distributed Systems Engineer',
  'Agentic AI Specialist',
];

const STATS = [
  { value: 6, label: 'Projects Shipped', suffix: '+' },
  { value: 2, label: 'Years Experience', suffix: '+' },
  { value: 10, label: 'Tech Stack', suffix: '+' },
];

// Terminal lines that animate in
const TERMINAL_LINES = [
  { prefix: '$ ', text: 'whoami', color: '#a78bfa', delay: 0.2 },
  { prefix: '  ', text: 'Kartik Parmar · Software Engineer', color: '#e2e8f0', delay: 0.7 },
  { prefix: '$ ', text: 'cat architecture.yml', color: '#a78bfa', delay: 1.3 },
  { prefix: '  ', text: '["Microservices", "Cloudflare", "Next.js", "NestJS"]', color: '#6ee7b7', delay: 1.8 },
  { prefix: '$ ', text: 'deploy global-infrastructure', color: '#a78bfa', delay: 2.5 },
  { prefix: '  ', text: '✓ Edge networking configured', color: '#34d399', delay: 3.0 },
  { prefix: '  ', text: '✓ Enterprise scale production ready', color: '#34d399', delay: 3.4 },
  { prefix: '$ ', text: '_', color: '#a78bfa', delay: 3.9 },
];

// Skill orbs that orbit the terminal card
const SKILL_ORBS = [
  { label: 'Cloudflare', icon: '☁️', color: '#f38020', bg: '#2b1606', angle: -20, r: 240 },
  { label: 'Microservices', icon: '🏗️', color: '#38bdf8', bg: '#082f49', angle: 45, r: 230 },
  { label: 'Next.js', icon: '▲', color: '#ffffff', bg: '#18181b', angle: 100, r: 220 },
  { label: 'Docker', icon: '🐳', color: '#2496ed', bg: '#02182b', angle: 160, r: 225 },
  { label: 'TypeScript', icon: 'TS', color: '#60a5fa', bg: '#0c1a2e', angle: 220, r: 230 },
  { label: 'NestJS', icon: '🐈', color: '#e0234e', bg: '#2a0810', angle: 280, r: 235 },
];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════════════════ */

// Animated counter
const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !observed.current) {
        observed.current = true;
        let n = 0;
        const step = Math.ceil(value / 40);
        const t = setInterval(() => {
          n += step;
          if (n >= value) { setCount(value); clearInterval(t); }
          else setCount(n);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
};

// Typewriter
const Typewriter: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pause' | 'erasing'>('typing');
  useEffect(() => {
    const target = TITLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < target.length)
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), 60);
      else t = setTimeout(() => setPhase('pause'), 1800);
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('erasing'), 300);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 35);
      else { setIdx((i) => (i + 1) % TITLES.length); setPhase('typing'); }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx]);
  return (
    <span className="gradient-primary bg-clip-text text-transparent">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-[0.85em] bg-accent ml-0.5 align-middle"
      />
    </span>
  );
};

// Magnetic social icon
const SocialBtn: React.FC<{
  href?: string; onClick?: () => void;
  icon: React.ReactNode; label: string;
}> = ({ href, onClick, icon, label }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 20 });
  const sy = useSpring(y, { stiffness: 350, damping: 20 });
  const move = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.4);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  };
  const reset = () => { x.set(0); y.set(0); };
  const inner = (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={move} onMouseLeave={reset}
      whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.93 }}
      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
      title={label}
    >
      {icon}
    </motion.div>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{inner}</a>;
  return <div onClick={onClick} aria-label={label}>{inner}</div>;
};

// Floating ambient orb (background decoration)
const FloatingOrb: React.FC<{ color: string; size: number; style: React.CSSProperties; delay: number }> = ({ color, size, style, delay }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none blur-3xl"
    style={{ width: size, height: size, background: color, ...style }}
    animate={{ y: [0, -28, 0], opacity: [0.1, 0.2, 0.1] }}
    transition={{ duration: 9 + delay, ease: 'easeInOut', repeat: Infinity, delay }}
  />
);

/* ─── Terminal card (right side) ─── */
const TerminalCard: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    // Reveal lines one by one
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => setVisibleLines(i + 1), line.delay * 1000);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* ── Outer glow ring (purely decorative, transparent) ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-8 rounded-[40px] border border-dashed pointer-events-none"
        style={{ borderColor: 'hsl(var(--accent) / 0.18)' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-16 rounded-[56px] border border-dashed pointer-events-none"
        style={{ borderColor: 'hsl(var(--primary) / 0.09)' }}
      />

      {/* ── Ambient glow behind the card ── */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none -z-10 blur-3xl scale-110"
        style={{ background: 'radial-gradient(ellipse, hsl(var(--accent) / 0.22) 0%, transparent 70%)' }}
      />

      {/* ── Terminal window ── */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden border"
        style={{
          background: 'rgba(10, 10, 18, 0.85)',
          borderColor: 'rgba(139, 92, 246, 0.25)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 0 1px rgba(139,92,246,0.1), 0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.12)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-white/25 font-mono ml-2 select-none">kartik@dev ~ portfolio</span>
          </div>
          <Terminal className="w-3.5 h-3.5 text-white/20" />
        </div>

        {/* Code body */}
        <div className="px-5 py-4 font-mono text-xs sm:text-sm space-y-1.5 min-h-[220px]">
          <AnimatePresence>
            {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex items-start gap-1"
              >
                <span style={{ color: line.prefix === '$ ' ? '#6366f1' : 'transparent', userSelect: 'none' }}>
                  {line.prefix}
                </span>
                <span style={{ color: line.color }}>{line.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {/* Blinking cursor at end */}
          {visibleLines < TERMINAL_LINES.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-2 h-4 bg-violet-400 inline-block rounded-sm"
            />
          )}
        </div>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-t text-[10px] font-mono"
          style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(139,92,246,0.08)' }}
        >
          <div className="flex items-center gap-3 text-white/30">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Connected
            </span>
            <span>zsh · UTF-8</span>
          </div>
          <span className="text-violet-400/60">TechSculptor v1.0</span>
        </div>
      </motion.div>

      {/* ── Orbiting skill badges ── */}
      {SKILL_ORBS.map((orb, i) => {
        const angleRad = (orb.angle * Math.PI) / 180;
        const px = Math.cos(angleRad) * (orb.r * 0.45);
        const py = Math.sin(angleRad) * (orb.r * 0.35);
        return (
          <motion.div
            key={orb.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [px, px + Math.sin(i) * 6, px],
              y: [py, py - Math.cos(i) * 8, py],
            }}
            transition={{
              opacity: { delay: 1.2 + i * 0.2, duration: 0.5 },
              scale: { delay: 1.2 + i * 0.2, duration: 0.5, type: 'spring', stiffness: 300 },
              x: { duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 },
              y: { duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 },
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 10 }}
          >
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold border whitespace-nowrap select-none cursor-default"
              style={{
                background: orb.bg,
                borderColor: `${orb.color}35`,
                color: orb.color,
                boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 12px ${orb.color}18`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="text-base leading-none">{orb.icon}</span>
              {orb.label}
            </div>

            {/* Connector line to card (decorative dot) */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{ background: orb.color, boxShadow: `0 0 6px ${orb.color}` }}
            />
          </motion.div>
        );
      })}

      {/* ── Live status pill (bottom center) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md whitespace-nowrap"
        style={{
          background: 'rgba(10,10,18,0.8)',
          borderColor: 'rgba(52,211,153,0.3)',
          color: '#34d399',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inset-0 rounded-full opacity-75 bg-green-400" />
          <span className="relative rounded-full h-1.5 w-1.5 bg-green-400" />
        </span>
        Open to opportunities
      </motion.div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN HERO SECTION
══════════════════════════════════════════════════════════ */
export const HeroSection: React.FC = () => {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const orbX = useSpring(useTransform(mx, [0, 1], [-18, 18]), { stiffness: 70, damping: 28 });
  const orbY = useSpring(useTransform(my, [0, 1], [-12, 12]), { stiffness: 70, damping: 28 });
  const handleMouseMove = (e: React.MouseEvent) => {
    mx.set(e.clientX / window.innerWidth);
    my.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Dot grid background ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Ambient colour orbs ── */}
      <FloatingOrb color="hsl(263 70% 55% / 0.55)" size={520} style={{ top: '-8%', left: '-6%' }} delay={0} />
      <FloatingOrb color="hsl(220 70% 55% / 0.4)" size={420} style={{ top: '45%', right: '-8%' }} delay={2} />
      <FloatingOrb color="hsl(180 60% 50% / 0.25)" size={320} style={{ bottom: '8%', left: '25%' }} delay={4} />

      {/* ── Mouse-reactive glow ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl"
        style={{
          width: 700, height: 700,
          top: '10%', left: '20%',
          x: orbX, y: orbY,
          background: 'radial-gradient(circle, hsl(263 70% 60% / 0.07), transparent 65%)',
        }}
      />

      {/* ── Content ── */}
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* ── LEFT: text ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border"
              style={{
                background: 'hsl(var(--accent) / 0.1)',
                borderColor: 'hsl(var(--accent) / 0.3)',
                color: 'hsl(var(--accent))',
              }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.span>
              Available for hire · Open to opportunities
            </motion.div>

            {/* Name + typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-primary bg-clip-text text-transparent">Kartik</span>
                <motion.span
                  animate={{ rotate: [0, 15, -10, 15, 0], scale: [1, 1.2, 1, 1.15, 1] }}
                  transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
                  className="inline-block ml-2"
                >
                  👋
                </motion.span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 h-10 flex items-center justify-center lg:justify-start">
                <Typewriter />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              I architect robust, enterprise-grade distributed systems and scalable full-stack applications.
              With expertise in Microservices, Cloudflare, and NestJS, I engineer reliable cloud infrastructure and scalable automation workflows.{' '}
              <span className="text-foreground/80 font-medium">
                Delivering high-impact, fault-tolerant solutions for global enterprises.
              </span>
            </motion.p>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {[
                { label: 'Cloud Architecture', icon: <Globe className="w-3 h-3" /> },
                { label: 'Microservices', icon: <Code2 className="w-3 h-3" /> },
                { label: 'Enterprise Systems', icon: <Cpu className="w-3 h-3" /> },
              ].map(({ label, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    background: 'hsl(var(--accent) / 0.08)',
                    borderColor: 'hsl(var(--accent) / 0.22)',
                    color: 'hsl(var(--accent))',
                  }}
                >
                  {icon}{label}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="gradient-primary hero-glow text-white font-semibold px-6 py-3 rounded-xl text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View My Projects <ArrowDown className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/KartikParmarRESUME.pdf"
                download="Kartik_Parmar_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4" /> See Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-3"
            >
              <span className="text-[11px] text-muted-foreground uppercase tracking-widest">Find me</span>
              <div className="h-px w-5 bg-border" />
              <SocialBtn href="https://github.com/kartik-parmar007" icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialBtn href="https://www.linkedin.com/in/kartik-parmar-/" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialBtn onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} icon={<Mail className="w-4 h-4" />} label="Email Me" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex gap-8 pt-1"
            >
              {STATS.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold gradient-primary bg-clip-text text-transparent">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Terminal card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center order-first lg:order-last"
          >
            {/* Extra space so floating badges don't clip */}
            <div className="py-14 px-12 sm:px-16 w-full max-w-[500px]">
              <TerminalCard />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer hidden sm:flex"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
          className="w-5 h-9 rounded-full border-2 border-muted-foreground/25 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-muted-foreground/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};