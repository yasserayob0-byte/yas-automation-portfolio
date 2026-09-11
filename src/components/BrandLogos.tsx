import { Braces, Cable, Code2, Globe, Webhook } from 'lucide-react';
import './BrandLogos.css';

import asset0 from '../assets/logos/airtable.svg';
import asset1 from '../assets/logos/docker.svg';
import asset2 from '../assets/logos/docs.svg';
import asset3 from '../assets/logos/drive.svg';
import asset4 from '../assets/logos/firebase.svg';
import asset5 from '../assets/logos/gemini.svg';
import asset6 from '../assets/logos/github.svg';
import asset7 from '../assets/logos/gmail.svg';
import asset8 from '../assets/logos/gohighlevel.svg';
import asset9 from '../assets/logos/hubspot.svg';
import asset10 from '../assets/logos/make.png';
import asset11 from '../assets/logos/n8n.svg';
import asset12 from '../assets/logos/nextjs.svg';
import asset13 from '../assets/logos/nodejs.svg';
import asset14 from '../assets/logos/notion.svg';
import asset15 from '../assets/logos/openai.svg';
import asset16 from '../assets/logos/postgresql.png';
import asset17 from '../assets/logos/react.svg';
import asset18 from '../assets/logos/sheets.svg';
import asset19 from '../assets/logos/slack.svg';
import asset20 from '../assets/logos/stripe.svg';
import asset21 from '../assets/logos/supabase.svg';
import asset22 from '../assets/logos/twilio.svg';
import asset23 from '../assets/logos/typescript.svg';
import asset24 from '../assets/logos/vercel.svg';
import asset25 from '../assets/logos/workspace.svg';
import asset26 from '../assets/logos/zapier.svg';
const assets: Record<string, string> = {
  '../assets/logos/airtable.svg': asset0,
  '../assets/logos/docker.svg': asset1,
  '../assets/logos/docs.svg': asset2,
  '../assets/logos/drive.svg': asset3,
  '../assets/logos/firebase.svg': asset4,
  '../assets/logos/gemini.svg': asset5,
  '../assets/logos/github.svg': asset6,
  '../assets/logos/gmail.svg': asset7,
  '../assets/logos/gohighlevel.svg': asset8,
  '../assets/logos/hubspot.svg': asset9,
  '../assets/logos/make.png': asset10,
  '../assets/logos/n8n.svg': asset11,
  '../assets/logos/nextjs.svg': asset12,
  '../assets/logos/nodejs.svg': asset13,
  '../assets/logos/notion.svg': asset14,
  '../assets/logos/openai.svg': asset15,
  '../assets/logos/postgresql.png': asset16,
  '../assets/logos/react.svg': asset17,
  '../assets/logos/sheets.svg': asset18,
  '../assets/logos/slack.svg': asset19,
  '../assets/logos/stripe.svg': asset20,
  '../assets/logos/supabase.svg': asset21,
  '../assets/logos/twilio.svg': asset22,
  '../assets/logos/typescript.svg': asset23,
  '../assets/logos/vercel.svg': asset24,
  '../assets/logos/workspace.svg': asset25,
  '../assets/logos/zapier.svg': asset26,
};

// Official artwork is local; provenance is recorded in assets/logos/SOURCES.md.
export const TECHNOLOGY_LOGOS = {
  gohighlevel: 'GoHighLevel', n8n: 'n8n', openai: 'OpenAI', airtable: 'Airtable',
  make: 'Make', zapier: 'Zapier', slack: 'Slack', notion: 'Notion', workspace: 'Google Workspace',
  firebase: 'Firebase', supabase: 'Supabase', vercel: 'Vercel', typescript: 'TypeScript',
  react: 'React', nextjs: 'Next.js', nodejs: 'Node.js', github: 'GitHub', docker: 'Docker',
  postgresql: 'PostgreSQL', stripe: 'Stripe', twilio: 'Twilio', hubspot: 'HubSpot',
  gemini: 'Gemini', gmail: 'Gmail', docs: 'Google Docs', sheets: 'Google Sheets', drive: 'Google Drive',
} as const;

interface LogoProps { className?: string; size?: number; decorative?: boolean; }
const aliases: Record<string, string> = {
  ghl: 'gohighlevel', highlevel: 'gohighlevel', googleworkspace: 'workspace',
  googlegemini: 'gemini', googlegeminiai: 'gemini', googlesheets: 'sheets', googledocs: 'docs', googledrive: 'drive', postgres: 'postgresql',
};

export function TechnologyLogo({ name, className = 'w-8 h-8', size, decorative = false }: LogoProps & { name: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const key = aliases[normalized] ?? normalized;
  const known = Object.prototype.hasOwnProperty.call(TECHNOLOGY_LOGOS, key);
  const src = known ? assets[`../assets/logos/${key}.${['make', 'postgresql'].includes(key) ? 'png' : 'svg'}`] : undefined;
  return (
    <span className={`technology-logo ${className}`} style={size ? { width: size, height: size } : undefined}
      role={!src && !decorative ? 'img' : undefined} aria-label={!src && !decorative ? name : undefined}
      aria-hidden={decorative || undefined}>
      {src ? <img className={`technology-logo__image ${['zapier', 'workspace', 'stripe'].includes(key) ? 'technology-logo__image--plate' : ''}`}
        src={src} alt={decorative ? '' : TECHNOLOGY_LOGOS[key as keyof typeof TECHNOLOGY_LOGOS]} draggable={false} decoding="async" />
        : <Code2 className="w-full h-full" aria-hidden="true" />}
    </span>
  );
}

export function GhlLogo(props: LogoProps) { return <TechnologyLogo name="GoHighLevel" {...props} />; }
export function N8nLogo(props: LogoProps) { return <TechnologyLogo name="n8n" {...props} />; }
export function OpenAiLogo(props: LogoProps) { return <TechnologyLogo name="OpenAI" {...props} />; }
export function GeminiLogo(props: LogoProps) { return <TechnologyLogo name="Gemini" {...props} />; }
export function SlackLogo(props: LogoProps) { return <TechnologyLogo name="Slack" {...props} />; }
export function AirtableLogo(props: LogoProps) { return <TechnologyLogo name="Airtable" {...props} />; }
export function GmailLogo(props: LogoProps) { return <TechnologyLogo name="Gmail" {...props} />; }
export function GoogleDocsLogo(props: LogoProps) { return <TechnologyLogo name="Google Docs" {...props} />; }
export function GoogleSheetsLogo(props: LogoProps) { return <TechnologyLogo name="Google Sheets" {...props} />; }
export function GoogleDriveLogo(props: LogoProps) { return <TechnologyLogo name="Google Drive" {...props} />; }
export function GithubLogo(props: LogoProps) { return <TechnologyLogo name="GitHub" {...props} />; }

// Protocols use consistent UI symbols rather than invented trademarks.
export function WebhookLogo({ className = 'w-8 h-8', size }: LogoProps) { return <Webhook className={className} size={size} aria-hidden="true" strokeWidth={1.6} />; }
export function RestApiLogo({ className = 'w-8 h-8', size }: LogoProps) { return <Cable className={className} size={size} aria-hidden="true" strokeWidth={1.6} />; }
export function HttpRequestLogo({ className = 'w-8 h-8', size }: LogoProps) { return <Globe className={className} size={size} aria-hidden="true" strokeWidth={1.6} />; }
export function JavaScriptLogo({ className = 'w-8 h-8', size }: LogoProps) { return <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="1" y="1" width="30" height="30" rx="2" fill="#F7DF1E" /><path fill="#171717" d="M14 10h3v13c0 4-2 6-6 6-2 0-4-1-5-3l2.5-1.7c.6 1 1.3 1.6 2.5 1.6 2 0 3-1 3-3V10Zm14 3-2.4 1.6c-.7-1.2-1.5-1.7-2.7-1.7-1.2 0-2 .7-2 1.7 0 1.2.8 1.7 2.5 2.5l1 .4c3 1.3 4.6 2.8 4.6 5.5 0 3.1-2.4 5-5.8 5-3.3 0-5.4-1.6-6.5-3.8l2.6-1.5c.9 1.5 1.9 2.4 3.8 2.4 1.6 0 2.6-.8 2.6-2 0-1.3-1-1.9-2.8-2.7l-1-.4c-2.7-1.2-4.3-2.6-4.3-5.3 0-2.8 2.2-4.7 5.3-4.7 2.4 0 4.1 1 5.1 3Z" /></svg>; }
export function JsonLogo({ className = 'w-8 h-8', size }: LogoProps) { return <Braces className={className} size={size} aria-hidden="true" strokeWidth={1.6} />; }
