import { Component, type ReactNode } from 'react';

/** Recover from a stale deployment chunk without leaving an empty detail page. */
export default class CaseStudyBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <div role="alert" className="max-w-3xl mx-auto px-6 py-24 space-y-5">
      <h1 className="text-2xl font-heading text-white">This case study could not load.</h1>
      <p className="text-slate-300">Reload to try again, or return to the portfolio.</p>
      <div className="flex flex-wrap gap-4">
        <button onClick={() => window.location.reload()} className="px-5 py-3 rounded-xl bg-cyan-300 text-slate-950">Reload case study</button>
        <a href="#projects" className="px-5 py-3 rounded-xl border border-slate-700">Back to projects</a>
      </div>
    </div>;
  }
}
