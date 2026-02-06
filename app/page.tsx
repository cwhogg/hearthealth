'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"CardioGuard","url":"https://cardioguard.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"CardioGuard","url":"https://cardioguard.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an excellent ApoB level and why does it matter more than cholesterol?","acceptedAnswer":{"@type":"Answer","text":"An optimal ApoB level is under 80 mg/dL, with excellent levels below 60 mg/dL. Unlike total cholesterol, ApoB counts actual atherogenic particles that cause heart attacks, making it a superior predictor of cardiovascular risk."}},{"@type":"Question","name":"What is the most accurate heart health test for early detection?","acceptedAnswer":{"@type":"Answer","text":"Advanced lipid panels including ApoB and Lp(a) combined with inflammatory markers like hs-CRP provide the most comprehensive cardiac risk assessment. These tests detect problems decades before standard cholesterol panels show abnormalities."}},{"@type":"Question","name":"How can I prevent heart disease if it runs in my family?","acceptedAnswer":{"@type":"Answer","text":"Family history makes advanced biomarker testing even more critical since genetic risk isn't captured by basic cholesterol screening. Early detection through ApoB and Lp(a) testing allows for targeted interventions that can dramatically reduce inherited cardiovascular risk."}},{"@type":"Question","name":"At what age should you have a comprehensive cardiac workup?","acceptedAnswer":{"@type":"Answer","text":"Preventive cardiologists recommend advanced biomarker testing by age 40, or earlier with family history of heart disease. Starting cardiac risk assessment in your 30s-40s allows maximum time for lifestyle and medical interventions to prevent future events."}},{"@type":"Question","name":"What causes high apolipoprotein B and how do I lower it?","acceptedAnswer":{"@type":"Answer","text":"High ApoB is primarily driven by genetics, insulin resistance, and dietary saturated fat intake. Lowering ApoB requires targeted interventions including specific dietary changes, exercise protocols, and sometimes medications like statins or PCSK9 inhibitors."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            CardioGuard
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Get the Best Heart Health Tests Before 50 That Your Doctor Won't Order
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Access advanced cardiac biomarkers like ApoB and Lp(a) without insurance barriers. Join the membership that bridges inadequate standard screening with cardiologist-recommended prevention.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Join Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why CardioGuard?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Advanced Biomarkers Beyond Basic Cholesterol" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Advanced Biomarkers Beyond Basic Cholesterol</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Test ApoB, Lp(a), and hs-CRP – the markers preventive cardiologists consider essential but insurance rarely covers. Get the complete cardiac risk picture your annual physical misses.</p>
          </section>
          <section aria-label="Skip Insurance Hassles for Heart Disease Prevention" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Skip Insurance Hassles for Heart Disease Prevention</h3>
            <p className="text-text-secondary text-sm leading-relaxed">No more arguing with doctors about 'unnecessary' tests. Direct access to advanced cardiac panels with transparent pricing and actionable results interpretation.</p>
          </section>
          <section aria-label="Cardiologist-Level Interpretation Made Simple" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Cardiologist-Level Interpretation Made Simple</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Transform complex biomarker results into clear action plans. Learn what your ApoB levels actually mean and get specific next steps for optimization.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What is an excellent ApoB level and why does it matter more than cholesterol?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">An optimal ApoB level is under 80 mg/dL, with excellent levels below 60 mg/dL. Unlike total cholesterol, ApoB counts actual atherogenic particles that cause heart attacks, making it a superior predictor of cardiovascular risk.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What is the most accurate heart health test for early detection?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Advanced lipid panels including ApoB and Lp(a) combined with inflammatory markers like hs-CRP provide the most comprehensive cardiac risk assessment. These tests detect problems decades before standard cholesterol panels show abnormalities.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How can I prevent heart disease if it runs in my family?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Family history makes advanced biomarker testing even more critical since genetic risk isn't captured by basic cholesterol screening. Early detection through ApoB and Lp(a) testing allows for targeted interventions that can dramatically reduce inherited cardiovascular risk.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">At what age should you have a comprehensive cardiac workup?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Preventive cardiologists recommend advanced biomarker testing by age 40, or earlier with family history of heart disease. Starting cardiac risk assessment in your 30s-40s allows maximum time for lifestyle and medical interventions to prevent future events.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What causes high apolipoprotein B and how do I lower it?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">High ApoB is primarily driven by genetics, insulin resistance, and dietary saturated fat intake. Lowering ApoB requires targeted interventions including specific dietary changes, exercise protocols, and sometimes medications like statins or PCSK9 inhibitors.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 CardioGuard. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
