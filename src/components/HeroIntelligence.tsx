import { useId } from 'react';
import './HeroIntelligence.css';
import earth from '../assets/images/digital-earth.svg';

/** Geographically projected Earth with lightweight network and blueprint; not live system telemetry. */
export default function HeroIntelligence() {
  const id = useId().replace(/:/g, '');
  return <svg className="agency-network" viewBox="0 0 900 720" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id={`${id}-clip`}><circle cx="440" cy="350" r="290"/></clipPath>
    </defs>
    <image href={earth} width="900" height="720" preserveAspectRatio="xMidYMid meet" />
    <g clipPath={`url(#${id}-clip)`} stroke="#28aaff" strokeWidth=".7" strokeOpacity=".18">
      <path d="M210 260L330 170L460 230L590 140L680 270L550 390L430 315L330 460L230 370L210 260M330 170L430 315L210 260M460 230L550 390L330 460M590 140L430 315L680 270" strokeOpacity=".5"/>
    </g>
    <circle className="agency-orbit" cx="440" cy="350" r="304" stroke="#37baff" strokeOpacity=".25" strokeDasharray="2 19"/>
    <g stroke="#168dc8" strokeOpacity=".22"><path d="M10 135H100L170 65H290M660 55L775 170H890M705 520H790L865 600M85 555L170 500L210 580M40 200V370H130M780 210V360H875"/><path d="M810 60V85H835M110 635H160V615M755 455H855M755 465H825"/></g>
    {[[210,260],[330,170],[460,230],[590,140],[680,270],[550,390],[430,315],[330,460],[230,370],[100,135],[775,170],[790,520]].map(([cx,cy],i) => <circle className={i % 4 === 0 ? 'agency-node' : undefined} key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3 : 1.7} fill="#66d4ff" style={{animationDelay:`${i * -2}s`}}/>) }
  </svg>;
}
