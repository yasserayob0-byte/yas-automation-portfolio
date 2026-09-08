export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="ambient-orb ambient-orb-cyan" />
      <div className="ambient-orb ambient-orb-indigo" />
      {[12, 29, 46, 63, 78, 91].map((left, index) => (
        <span key={left} className="ambient-particle" style={{ left: `${left}%`, top: `${18 + (index * 17) % 67}%`, animationDelay: `${index * -4}s` }} />
      ))}
    </div>
  );
}
