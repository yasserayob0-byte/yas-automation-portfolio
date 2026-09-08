interface LogoProps {
  className?: string;
  size?: number;
}

export function GhlLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ghl-grad1" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Official GoHighLevel stylized upward growth chevron & lightning crest */}
      <rect width="120" height="120" rx="24" fill="#0A101D" />
      <path
        d="M28 84L52 36H68L44 84H28Z"
        fill="#3B82F6"
      />
      <path
        d="M52 84L76 36H92L68 84H52Z"
        fill="#F97316"
      />
      <path
        d="M40 60H80L72 76H32L40 60Z"
        fill="#FFFFFF"
        fillOpacity="0.95"
      />
      <circle cx="60" cy="36" r="6" fill="#F97316" />
      <circle cx="84" cy="36" r="6" fill="#3B82F6" />
    </svg>
  );
}

export function N8nLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official n8n logo with coral connected nodes */}
      <path
        d="M40 40C40 28.9543 48.9543 20 60 20C71.0457 20 80 28.9543 80 40C80 51.0457 71.0457 60 60 60C48.9543 60 40 51.0457 40 40Z"
        fill="#EA4B71"
      />
      <path
        d="M100 40C100 28.9543 108.954 20 120 20C131.046 20 140 28.9543 140 40C140 51.0457 131.046 60 120 60C108.954 60 100 51.0457 100 40Z"
        fill="#FF6D5A"
      />
      <path
        d="M140 40C140 28.9543 148.954 20 160 20C171.046 20 180 28.9543 180 40C180 51.0457 171.046 60 160 60C148.954 60 140 51.0457 140 40Z"
        fill="#FF9344"
      />
      <path
        d="M60 34H120V46H60V34Z"
        fill="#EA4B71"
      />
      <path
        d="M120 34H160V46H120V34Z"
        fill="#FF6D5A"
      />
      <circle cx="60" cy="40" r="9" fill="#FFFFFF" />
      <circle cx="120" cy="40" r="9" fill="#FFFFFF" />
      <circle cx="160" cy="40" r="9" fill="#FFFFFF" />
    </svg>
  );
}

export function OpenAiLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official OpenAI spiral vortex mark */}
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1239 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4116-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1636a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813v6.7219zm1.088-2.616l2.6054-1.5045 2.6054 1.5045v3.0184l-2.6054 1.5045-2.6054-1.5045z"
        fill="#10A37F"
      />
    </svg>
  );
}

export function GeminiLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E3" />
          <stop offset="0.35" stopColor="#5471F1" />
          <stop offset="0.7" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
      {/* Official Google Gemini 4-point sparkle star */}
      <path
        d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}

export function SlackLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 124 124" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Slack 4-color Octothorpe */}
      <g>
        <path d="M25.8 49.6C25.8 42.7 31.4 37.1 38.3 37.1C45.2 37.1 50.8 42.7 50.8 49.6V74.6H38.3C31.4 74.6 25.8 69 25.8 62.1V49.6Z" fill="#36C5F0" />
        <path d="M13.3 49.6C13.3 56.5 18.9 62.1 25.8 62.1C32.7 62.1 38.3 56.5 38.3 49.6C38.3 42.7 32.7 37.1 25.8 37.1C18.9 37.1 13.3 42.7 13.3 49.6Z" fill="#36C5F0" />
        <path d="M49.6 98.2C42.7 98.2 37.1 92.6 37.1 85.7C37.1 78.8 42.7 73.2 49.6 73.2H74.6V85.7C74.6 92.6 69 98.2 62.1 98.2H49.6Z" fill="#2EB67D" />
        <path d="M49.6 110.7C42.7 110.7 37.1 105.1 37.1 98.2C37.1 91.3 42.7 85.7 49.6 85.7C56.5 85.7 62.1 91.3 62.1 98.2C62.1 105.1 56.5 110.7 49.6 110.7Z" fill="#2EB67D" />
        <path d="M98.2 74.4C98.2 81.3 92.6 86.9 85.7 86.9C78.8 86.9 73.2 81.3 73.2 74.4V49.4H85.7C92.6 49.4 98.2 55 98.2 61.9V74.4Z" fill="#ECB22E" />
        <path d="M110.7 74.4C110.7 67.5 105.1 61.9 98.2 61.9C91.3 61.9 85.7 67.5 85.7 74.4C85.7 81.3 91.3 86.9 98.2 86.9C105.1 86.9 110.7 81.3 110.7 74.4Z" fill="#ECB22E" />
        <path d="M74.4 25.8C81.3 25.8 86.9 31.4 86.9 38.3C86.9 45.2 81.3 50.8 74.4 50.8H49.4V38.3C49.4 31.4 55 25.8 61.9 25.8H74.4Z" fill="#E01E5A" />
        <path d="M74.4 13.3C67.5 13.3 61.9 18.9 61.9 25.8C61.9 32.7 67.5 38.3 74.4 38.3C81.3 38.3 86.9 32.7 86.9 25.8C86.9 18.9 81.3 13.3 74.4 13.3Z" fill="#E01E5A" />
      </g>
    </svg>
  );
}

export function AirtableLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Airtable Folded Geometric Shapes */}
      <path
        d="M45.5 5.5L8.5 24.5C6.9 25.3 6.9 27.7 8.5 28.5L45.5 47.5C47.1 48.3 49 48.3 50.6 47.5L87.6 28.5C89.2 27.7 89.2 25.3 87.6 24.5L50.6 5.5C49 4.7 47.1 4.7 45.5 5.5Z"
        fill="#FCB400"
      />
      <path
        d="M48.1 52.8L11.1 33.8C9.5 33 8 34.3 8 36.1V71.9C8 73.1 8.7 74.2 9.7 74.7L46.7 93.7C48.3 94.5 50.2 93.3 50.2 91.5V54.7C50.2 53.5 49.3 52.3 48.1 52.8Z"
        fill="#18BFFF"
        transform="translate(0, -18)"
      />
      <path
        d="M51.9 52.8L88.9 33.8C90.5 33 92 34.3 92 36.1V71.9C92 73.1 91.3 74.2 90.3 74.7L53.3 93.7C51.7 94.5 49.8 93.3 49.8 91.5V54.7C49.8 53.5 50.7 52.3 51.9 52.8Z"
        fill="#ED1C24"
        transform="translate(0, -18)"
      />
    </svg>
  );
}

export function GmailLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Gmail 4-color envelope */}
      <path d="M8 18.5V48C8 51.3137 10.6863 54 14 54H20V32L8 23V18.5Z" fill="#4285F4" />
      <path d="M56 18.5V48C56 51.3137 53.3137 54 50 54H44V32L56 23V18.5Z" fill="#34A853" />
      <path d="M44 14L32 23L20 14H14C10.6863 14 8 16.6863 8 20L32 38L56 20C56 16.6863 53.3137 14 50 14H44Z" fill="#EA4335" />
      <path d="M20 14V32L32 23L20 14Z" fill="#FBBC04" />
      <path d="M44 14V32L32 23L44 14Z" fill="#EA4335" />
    </svg>
  );
}

export function GoogleDocsLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 192 192" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Google Docs blue dog-eared document */}
      <path d="M120 16H48C39.16 16 32 23.16 32 32V160C32 168.84 39.16 176 48 176H144C152.84 176 160 168.84 160 160V56L120 16Z" fill="#4285F4" />
      <path d="M120 16V56H160L120 16Z" fill="#A1C2FA" />
      {/* Text lines */}
      <path d="M56 88H136V100H56V88Z" fill="#FFFFFF" />
      <path d="M56 112H136V124H56V112Z" fill="#FFFFFF" />
      <path d="M56 136H104V148H56V136Z" fill="#FFFFFF" />
    </svg>
  );
}

export function GoogleSheetsLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 192 192" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Google Sheets green dog-eared spreadsheet */}
      <path d="M120 16H48C39.16 16 32 23.16 32 32V160C32 168.84 39.16 176 48 176H144C152.84 176 160 168.84 160 160V56L120 16Z" fill="#0F9D58" />
      <path d="M120 16V56H160L120 16Z" fill="#87CEAC" />
      {/* Spreadsheet Grid */}
      <rect x="56" y="80" width="80" height="68" rx="4" fill="#FFFFFF" />
      <rect x="62" y="86" width="31" height="15" fill="#0F9D58" />
      <rect x="99" y="86" width="31" height="15" fill="#0F9D58" />
      <rect x="62" y="107" width="31" height="15" fill="#0F9D58" />
      <rect x="99" y="107" width="31" height="15" fill="#0F9D58" />
      <rect x="62" y="128" width="31" height="14" fill="#0F9D58" />
      <rect x="99" y="128" width="31" height="14" fill="#0F9D58" />
    </svg>
  );
}

export function GoogleDriveLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 87.3 78" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official Google Drive 3-color triangular prism */}
      <path d="M6.6 66.85L0 78H58.15L64.75 66.85H6.6Z" fill="#2684FC" />
      <path d="M29.1 27.5L14.55 52.3L29.1 77.25L43.65 52.3L29.1 27.5Z" fill="#0066DA" opacity="0.1" />
      <path d="M58.15 78L87.25 27.85H74.05L45 78H58.15Z" fill="#00AC47" />
      <path d="M74.05 27.85L59.5 2.75C58.35 0.75 56.2 0 54.05 0H33.25C31.1 0 28.95 0.75 27.8 2.75L13.25 27.85H74.05Z" fill="#FFBA00" />
      <path d="M0 78L13.25 55.15L27.8 30.05L42.35 55.15L29.1 78H0Z" fill="#0066DA" />
    </svg>
  );
}

export function WebhookLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="webhook-grad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* Modern Webhook Event Vector Node & Pulse */}
      <rect width="64" height="64" rx="16" fill="#0C1322" />
      <circle cx="32" cy="18" r="7" fill="url(#webhook-grad)" />
      <circle cx="32" cy="18" r="3" fill="#FFFFFF" />
      
      <path
        d="M32 25V39M32 39C32 44.5228 27.5228 49 22 49C16.4772 49 12 44.5228 12 39C12 33.4772 16.4772 29 22 29H26"
        stroke="url(#webhook-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="39" r="4" fill="#06B6D4" />
      
      <path
        d="M32 39C32 44.5228 36.4772 49 42 49C47.5228 49 52 44.5228 52 39C52 33.4772 47.5228 29 42 29H38"
        stroke="url(#webhook-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="42" cy="39" r="4" fill="#8B5CF6" />
      
      {/* Pulse Rings */}
      <circle cx="32" cy="18" r="10" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
    </svg>
  );
}

export function RestApiLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rest-grad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="0.5" stopColor="#06B6D4" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* REST API Cloud Endpoints & Curly JSON Braces Badge */}
      <rect width="64" height="64" rx="16" fill="#0C1322" />
      <rect x="8" y="14" width="48" height="36" rx="8" stroke="url(#rest-grad)" strokeWidth="2.5" fill="#0F172A" />
      
      {/* JSON Brackets < / > and API Text */}
      <path d="M17 26L12 32L17 38" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47 26L52 32L47 38" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      <text x="32" y="36" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="bold" textAnchor="middle">
        REST
      </text>
      <circle cx="32" cy="44" r="2" fill="#10B981" />
    </svg>
  );
}

export function HttpRequestLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="http-grad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* HTTP Bidirectional Request / Response Network Nodes */}
      <rect width="64" height="64" rx="16" fill="#0C1322" />
      
      {/* Top Request arrow */}
      <path d="M16 24H44M44 24L36 17M44 24L36 31" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Bottom Response arrow */}
      <path d="M48 40H20M20 40L28 33M20 40L28 47" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      <circle cx="12" cy="24" r="3" fill="#F59E0B" />
      <circle cx="52" cy="40" r="3" fill="#8B5CF6" />
      
      <rect x="22" y="27" width="20" height="10" rx="3" fill="#1E293B" stroke="#475569" strokeWidth="1" />
      <text x="32" y="34.5" fill="#E2E8F0" fontSize="6.5" fontFamily="JetBrains Mono, monospace" fontWeight="bold" textAnchor="middle">
        HTTP
      </text>
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official JavaScript Yellow Shield / Badge */}
      <rect width="64" height="64" rx="14" fill="#F7DF1E" />
      <path
        d="M20 48L24 45.5C24.8 47.1 26 48.2 28.2 48.2C30.4 48.2 31.8 47.1 31.8 44.8V28H37.5V44.9C37.5 49.3 34.6 52.4 28.3 52.4C23.6 52.4 20.9 49.9 20 48ZM40.5 47.3L44.8 44.8C46 46.8 47.6 48.1 50.3 48.1C52.6 48.1 54 47 54 45.4C54 43.6 52.7 42.9 49.4 41.5C45.2 39.7 41.5 37.8 41.5 33.2C41.5 29.3 44.6 26.2 49.6 26.2C53.3 26.2 56 27.7 57.5 30.6L53.3 33.2C52.4 31.6 51.1 30.6 49.5 30.6C47.7 30.6 46.7 31.6 46.7 33C46.7 34.5 47.7 35.2 50.8 36.5C55.3 38.4 59.2 40.2 59.2 45.1C59.2 49.7 55.4 52.4 50.1 52.4C44.7 52.4 41.7 49.7 40.5 47.3Z"
        fill="#000000"
      />
    </svg>
  );
}

export function JsonLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="json-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F172A" />
          <stop offset="1" stopColor="#020617" />
        </linearGradient>
      </defs>
      {/* Official JSON curly bracket notation badge */}
      <rect width="64" height="64" rx="14" fill="url(#json-grad)" stroke="#334155" strokeWidth="2" />
      
      {/* Left bracket { */}
      <path
        d="M20 18C16 18 16 22 16 26C16 29 13 32 11 32C13 32 16 35 16 38C16 42 16 46 20 46"
        stroke="#38BDF8"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right bracket } */}
      <path
        d="M44 18C48 18 48 22 48 26C48 29 51 32 53 32C51 32 48 35 48 38C48 42 48 46 44 46"
        stroke="#38BDF8"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text x="32" y="37" fill="#F8FAFC" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="800" textAnchor="middle">
        JSON
      </text>
      
      <circle cx="32" cy="46" r="2.5" fill="#38BDF8" />
    </svg>
  );
}
