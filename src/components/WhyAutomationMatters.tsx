import { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Clock,
  Zap,
  Users,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Calculator,
  Flame
} from 'lucide-react';

export default function WhyAutomationMatters() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'calculator'>('comparison');
  
  // ROI Calculator state
  const [teamSize, setTeamSize] = useState<number>(8);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(12);
  const [hourlyWage, setHourlyWage] = useState<number>(45);

  // Calculations
  const totalWeeklyHoursWasted = teamSize * manualHoursPerWeek;
  const annualHoursSaved = Math.round(totalWeeklyHoursWasted * 50 * 0.85); // 85% automated
  const annualDollarSaved = Math.round(annualHoursSaved * hourlyWage);
  const leadSpeedMultiplier = '12x Faster';

  const impactCards = [
    {
      icon: Clock,
      title: 'Save 25+ Hours Every Week',
      description: 'Eliminate tedious manual copy-pasting across CRMs, email inboxes, and spreadsheets so your team focuses on high-ticket revenue tasks.',
      metric: '85% Time Reclaimed',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/50'
    },
    {
      icon: Zap,
      title: 'Sub-Minute Lead Response Time',
      description: 'Convert leads while their buying temperature is high. Auto-qualify and dispatch personalized calendar invites in under 45 seconds.',
      metric: '< 45s SLA',
      color: 'text-amber-400',
      border: 'hover:border-amber-500/50'
    },
    {
      icon: TrendingUp,
      title: '3.4x Higher Lead Conversion',
      description: 'Multi-touch empathy sequences ensure no lead ever falls through the cracks, reviving 38%+ of cold drop-offs and no-shows.',
      metric: '+38% Revival',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/50'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Data Entry Mistakes',
      description: 'Deterministic API logic and AI verification eliminate human typo errors in invoices, addresses, and customer CRM records.',
      metric: '99.9% Accuracy',
      color: 'text-indigo-400',
      border: 'hover:border-indigo-500/50'
    },
    {
      icon: Users,
      title: 'World-Class Client Experience',
      description: 'Instant onboarding packets, automated calendar locks, and dynamic review engines create an unforgettable 5-star brand impression.',
      metric: '4.9 ⭐ CSAT',
      color: 'text-purple-400',
      border: 'hover:border-purple-500/50'
    },
    {
      icon: Flame,
      title: 'Infinite Operational Scaling',
      description: 'Handle 100 or 10,000 inquiries per day without hiring a bloated operational support team or paying unnecessary overhead.',
      metric: '10x Capacity',
      color: 'text-rose-400',
      border: 'hover:border-rose-500/50'
    }
  ];

  const comparisonData = [
    {
      area: 'Lead Response Time',
      manual: '4 to 8 hours (Leads cool down and book competitors)',
      automated: 'Under 45 seconds with dynamic calendar booking'
    },
    {
      area: 'Appointment Show-Up Rate',
      manual: '58% - 65% with high no-show abandonment',
      automated: '92%+ with 2-way SMS confirmation & self-reschedule'
    },
    {
      area: 'Invoice & Billing Processing',
      manual: '2–4 days of typing, PDF squinting, and reconciliation',
      automated: 'Instant vision parsing & QuickBooks sync in 2 minutes'
    },
    {
      area: 'Weekend & After-Hours Inquiries',
      manual: 'Ignored until Monday morning; deals lost',
      automated: '24/7 autonomous qualification and appointment lock'
    },
    {
      area: 'Human Administrative Cost',
      manual: 'High payroll overhead, burnout, and frequent turnover',
      automated: 'Predictable zero-payroll system running 24/7/365'
    }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-800/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS IMPACT & ROI MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Why Automation Matters.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            In modern business, speed and consistency are the ultimate competitive moat. Companies with autonomous systems out-convert and out-scale manual teams every time.
          </p>

          {/* Toggle between Impact View and Live ROI Calculator */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Enterprise Impact Pillars
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'calculator'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI Calculator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Impact Pillars & Before vs After Matrix */}
        {activeTab === 'comparison' && (
          <div className="space-y-16">
            {/* 6 Key Impact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-900/90 ${card.border} hover:shadow-xl group`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-300">
                        {card.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Before vs After Comparison Table */}
            <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
              <div className="p-6 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Manual Friction vs Autonomous Execution
                  </h3>
                  <p className="text-xs text-slate-400">
                    How YAS Automation transforms daily operational performance.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                  <span>The Autonomous Advantage</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {comparisonData.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-slate-900/30 transition-colors"
                  >
                    <div className="md:col-span-3 text-xs sm:text-sm font-bold text-slate-200 font-heading">
                      {row.area}
                    </div>

                    {/* Manual Way */}
                    <div className="md:col-span-4 flex items-start gap-2 text-xs text-rose-300/80 bg-rose-950/20 p-3 rounded-xl border border-rose-900/30">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.manual}</span>
                    </div>

                    {/* Arrow on desktop */}
                    <div className="hidden md:flex md:col-span-1 justify-center text-slate-600">
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </div>

                    {/* YAS Automation Way */}
                    <div className="md:col-span-4 flex items-start gap-2 text-xs text-emerald-300 bg-emerald-950/20 p-3 rounded-xl border border-emerald-900/30">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{row.automated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive ROI Calculator */}
        {activeTab === 'calculator' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Input (6 Cols) */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Estimate Your Agency's ROI
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Adjust the sliders below to calculate projected time and capital reclaimed.
                  </p>
                </div>

                {/* Slider 1: Team Size */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Team Size (Full-Time Staff)</span>
                    <span className="text-cyan-400 font-mono">{teamSize} People</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Slider 2: Hours spent on manual tasks / week */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Manual Hours Per Person / Week</span>
                    <span className="text-cyan-400 font-mono">{manualHoursPerWeek} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={manualHoursPerWeek}
                    onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Slider 3: Average Hourly Cost */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">Avg Hourly Staff Cost ($/hr)</span>
                    <span className="text-cyan-400 font-mono">${hourlyWage}/hr</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="150"
                    step="5"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Assumes an 85% reduction in repetitive manual workflows using GoHighLevel & n8n architecture.</span>
                </div>
              </div>

              {/* Output Result Box (5 Cols) */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 text-center space-y-5 shadow-inner">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Projected Annual Value
                </div>

                {/* Dollar Savings */}
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    ${annualDollarSaved.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Annual Payroll & Overhead Reclaimed
                  </div>
                </div>

                {/* Hours Reclaimed */}
                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-lg font-bold text-white font-heading">
                      {annualHoursSaved.toLocaleString()} hrs
                    </div>
                    <div className="text-[10px] text-slate-400">Hours Saved / Year</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-lg font-bold text-emerald-400 font-heading">
                      {leadSpeedMultiplier}
                    </div>
                    <div className="text-[10px] text-slate-400">Response Speed</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer block"
                >
                  <span>Reclaim This Value Today</span>
                  <ArrowRight className="w-3.5 h-3.5 inline" />
                </a>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
