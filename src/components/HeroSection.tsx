import DiscoveryCallButton from './DiscoveryCallButton';
﻿import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import HeroIntelligence from './HeroIntelligence';
import { useMagnetic } from './useMagnetic';
import { useMotionPreference } from './MotionPreferences';
import { focusSection } from './navigation';
import { TechnologyLogo } from './BrandLogos';
import transparentPortrait from '../assets/images/yasser-portrait-transparent.png';
import { heroRobotSrc } from '../data/heroVisualAssets';
import './HeroSection.css';

interface HeroSectionProps { onExploreWorkflows: () => void; }
const stats = [['5+', 'Automation Projects'], ['100%', 'Client-Focused'], ['\u221e', 'Continuous Learning'], ['AI', 'Real Business Impact']];
const technologies = ['n8n', 'GoHighLevel', 'OpenAI', 'Airtable', 'Google Sheets', 'Make', 'Twilio', 'Vapi', 'Slack', 'Notion'];

export default function HeroSection({ onExploreWorkflows }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  const { enabled, ambientEnabled } = useMotionPreference();
  const magnetic = useMagnetic();
  const entrance = (delay: number) => ({ initial: enabled ? { opacity: 0, y: 14 } : false as const, animate: { opacity: 1, y: 0 }, transition: { duration: enabled ? .7 : 0, delay: enabled ? delay : 0, ease: [.22, 1, .36, 1] as const } });
  return <section id="home" ref={ref} className="agency-hero" data-ambient-active={ambientEnabled && visible} aria-labelledby="hero-heading">
    <div className="agency-environment" aria-hidden="true" />
    <div className="agency-width agency-stage">
      <div className="agency-copy">
        <motion.div {...entrance(0)} className="agency-badge"><span />AI AUTOMATION SPECIALIST</motion.div>
        <motion.h1 {...entrance(.08)} id="hero-heading">Less Busywork.<br />More Time to<br /><span>Grow Your Business.</span></motion.h1>
        <motion.p {...entrance(.16)}>I help businesses respond to customers sooner, follow up with leads, and book appointments with less manual work. I connect your existing tools with AI and automation so your team can focus on what matters &mdash; your customers.</motion.p>
        <motion.div {...entrance(.24)} className="agency-actions">
          <button {...magnetic} className="agency-button agency-primary magnetic-button" onClick={() => document.getElementById('projects') ? focusSection('projects') : onExploreWorkflows()}>See the Business Use Cases <ArrowRight size={16} aria-hidden="true" /></button>
          <DiscoveryCallButton {...magnetic} className="agency-button agency-secondary magnetic-button"><CalendarDays size={17} aria-hidden="true" />Request a Discovery Call</DiscoveryCallButton>
        </motion.div>
      </div>
      <motion.div {...entrance(.12)} className="agency-visual" data-has-robot={!!heroRobotSrc}>
        <HeroIntelligence />
        {heroRobotSrc && <div className="agency-robot" aria-hidden="true"><img src={heroRobotSrc} alt="" width={1024} height={1536} decoding="async" /></div>}
        <div className="agency-subject"><img src={transparentPortrait} alt="Yasser Usman, AI Automation Specialist" width={1086} height={1448} fetchPriority="high" loading="eager" className="agency-portrait" /></div>
        <div className="agency-panel agency-panel-chart" aria-hidden="true"><span>AUTOMATION<br />REAL RESULTS</span><div className="agency-bars">{[24, 40, 58, 80, 100].map(height => <i key={height} style={{ height: `${height}%` }} />)}</div></div>
        <div className="agency-panel agency-panel-stack" aria-hidden="true"><span>TECHNOLOGY STACK</span>{['n8n', 'GoHighLevel', 'OpenAI', 'Airtable', 'Make', 'Twilio'].map(name => <div key={name}><TechnologyLogo name={name} decorative className="w-5 h-5" />{name}</div>)}</div>
        <div className="agency-panel agency-panel-systems" aria-hidden="true"><span><b />SYSTEMS CONNECTED</span>{['APIs', 'AI Agents', 'Workflows', 'CRM', 'Voice AI'].map(name => <div key={name}><i>&#10003;</i>{name}</div>)}</div>
      </motion.div>
      <motion.dl {...entrance(.32)} className="agency-stats">{stats.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</motion.dl>
    </div>
    <div className="agency-trusted"><div className="agency-width"><h2>TRUSTED TECHNOLOGIES</h2><div className="agency-marquee" data-motion-enabled={enabled}><div className="agency-marquee-track">{[0, 1].map(copy => <ul key={copy} className="agency-marquee-group" aria-hidden={copy === 1 ? true : undefined}>{technologies.map(name => <li key={name}>{name !== 'Vapi' && <TechnologyLogo name={name} decorative className="w-7 h-7" />}<span>{name}</span></li>)}</ul>)}</div></div></div></div>
  </section>;
}
