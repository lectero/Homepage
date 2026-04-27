import { useState, useEffect, useId } from 'react';

type DemoStrings = {
  heading: string;
  lead: string;
  disclaimerHeader: string;
  disclaimerInline: string;
  pickerLabel: string;
  analyzingLabel: string;
  emailPreviewHeading: string;
  emailFromLabel: string;
  emailSubjectLabel: string;
  emailBodyLabel: string;
  resultHeading: string;
  categoryLabel: string;
  subcategoryLabel: string;
  confidenceLabel: string;
  riskLabel: string;
  riskScale: string;
  riskBuckets: {
    low: string;
    mediumLow: string;
    medium: string;
    mediumHigh: string;
    high: string;
  };
  actionLabel: string;
  actionDraft: string;
  actionForward: string;
  actionManual: string;
  actionEscalate: string;
  draftHeading: string;
  rationaleLabel: string;
  examples: Array<{
    id: string;
    title: string;
    from: string;
    subject: string;
    body: string;
    result: {
      category: string;
      subcategory: string;
      confidence: number;
      risk: 1 | 2 | 3 | 4 | 5;
      action: 'draft' | 'forward' | 'manual' | 'escalate';
      draft: string;
      rationale: string;
    };
  }>;
};

interface Props {
  strings: DemoStrings;
}

type Phase = 'idle' | 'analyzing' | 'result';

const RISK_BAR_COLORS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: 'bg-emerald-500',
  2: 'bg-emerald-400',
  3: 'bg-amber-400',
  4: 'bg-orange-500',
  5: 'bg-red-600',
};

const ACTION_TONE: Record<string, { wrap: string; text: string }> = {
  draft: { wrap: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-800' },
  forward: { wrap: 'bg-blue-50 border-blue-200', text: 'text-blue-800' },
  manual: { wrap: 'bg-amber-50 border-amber-200', text: 'text-amber-900' },
  escalate: { wrap: 'bg-red-50 border-red-200', text: 'text-red-800' },
};

export default function MbotDemo({ strings: s }: Props) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const liveRegionId = useId();

  useEffect(() => {
    if (phase !== 'analyzing') return;
    const t = setTimeout(() => setPhase('result'), 650);
    return () => clearTimeout(t);
  }, [phase]);

  const selected = s.examples.find((e) => e.id === selectedId) ?? null;
  const result = selected?.result;

  function pick(id: string) {
    setSelectedId(id);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPhase(reduced ? 'result' : 'analyzing');
  }

  function actionLabel(action: string): string {
    if (action === 'draft') return s.actionDraft;
    if (action === 'forward') return s.actionForward;
    if (action === 'manual') return s.actionManual;
    return s.actionEscalate;
  }

  function riskBucket(risk: number): string {
    if (risk <= 1) return s.riskBuckets.low;
    if (risk <= 2) return s.riskBuckets.mediumLow;
    if (risk <= 3) return s.riskBuckets.medium;
    if (risk <= 4) return s.riskBuckets.mediumHigh;
    return s.riskBuckets.high;
  }

  const announcement =
    phase === 'result' && result
      ? `${s.categoryLabel} ${result.category}, ${s.subcategoryLabel} ${result.subcategory}, ${s.confidenceLabel} ${result.confidence}%, ${s.riskLabel} ${result.risk} ${s.riskScale}, ${s.actionLabel} ${actionLabel(result.action)}.`
      : '';

  return (
    <section className="bg-surface py-20" aria-labelledby="mbot-demo-heading">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="mbot-demo-heading"
          className="text-3xl font-bold text-primary mb-4 text-center"
        >
          {s.heading}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-3">{s.lead}</p>
        <p className="text-xs text-center text-gray-500 italic max-w-2xl mx-auto mb-10">
          {s.disclaimerHeader}
        </p>

        <fieldset className="mb-8">
          <legend className="sr-only">{s.pickerLabel}</legend>
          <p className="text-sm font-medium text-gray-700 mb-3">{s.pickerLabel}</p>
          <div className="flex flex-wrap gap-2">
            {s.examples.map((ex) => {
              const active = ex.id === selectedId;
              return (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => pick(ex.id)}
                  aria-pressed={active}
                  className={
                    'rounded-full border px-4 py-2 text-sm font-medium transition-all focus:outline-2 focus:outline-offset-2 focus:outline-accent ' +
                    (active
                      ? 'bg-accent text-white border-accent shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-accent/50 hover:text-primary')
                  }
                >
                  {ex.title}
                </button>
              );
            })}
          </div>
        </fieldset>

        <p
          id={liveRegionId}
          className="sr-only"
          role="status"
          aria-live="polite"
        >
          {announcement}
        </p>

        {selected && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Email preview */}
            <article className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-4">
                {s.emailPreviewHeading}
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    {s.emailFromLabel}
                  </dt>
                  <dd className="text-gray-800">{selected.from}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    {s.emailSubjectLabel}
                  </dt>
                  <dd className="text-gray-800 font-medium">{selected.subject}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    {s.emailBodyLabel}
                  </dt>
                  <dd className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {selected.body}
                  </dd>
                </div>
              </dl>
            </article>

            {/* Result */}
            <article
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm relative"
              aria-busy={phase === 'analyzing'}
            >
              <header className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-primary">{s.resultHeading}</h3>
                <span className="text-[11px] uppercase tracking-wide text-gray-400">
                  {s.disclaimerInline}
                </span>
              </header>

              {phase === 'analyzing' && (
                <div className="flex items-center gap-3 text-gray-500 py-12">
                  <span
                    className="inline-block h-3 w-3 rounded-full bg-accent motion-safe:animate-pulse"
                    aria-hidden="true"
                  />
                  <span>{s.analyzingLabel}</span>
                </div>
              )}

              {phase === 'result' && result && (
                <>
                  <dl className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        {s.categoryLabel}
                      </dt>
                      <dd className="text-sm text-gray-900 font-medium">
                        {result.category}
                      </dd>
                      <dd className="text-xs text-gray-500 mt-0.5">
                        {result.subcategory}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                        {s.confidenceLabel}
                      </dt>
                      <dd className="text-sm text-gray-900 font-medium">
                        {result.confidence}%
                      </dd>
                      <div
                        className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden"
                        aria-hidden="true"
                      >
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                    </div>
                  </dl>

                  <div className="mb-6">
                    <dt className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      {s.riskLabel}
                    </dt>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex gap-1"
                        role="img"
                        aria-label={`${s.riskLabel} ${result.risk} ${s.riskScale}, ${riskBucket(result.risk)}`}
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span
                            key={n}
                            className={
                              'block h-3 w-6 rounded-sm ' +
                              (n <= result.risk
                                ? RISK_BAR_COLORS[result.risk]
                                : 'bg-gray-200')
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-700">
                        {result.risk}/5 — {riskBucket(result.risk)}
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      'rounded-lg border px-4 py-3 mb-6 ' +
                      (ACTION_TONE[result.action]?.wrap ?? '')
                    }
                  >
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      {s.actionLabel}
                    </p>
                    <p
                      className={
                        'text-sm font-semibold ' +
                        (ACTION_TONE[result.action]?.text ?? 'text-gray-800')
                      }
                    >
                      {actionLabel(result.action)}
                    </p>
                  </div>

                  {result.draft && (
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                        {s.draftHeading}
                      </p>
                      <pre className="bg-surface rounded-lg p-4 text-sm text-gray-800 whitespace-pre-wrap leading-relaxed font-sans border border-gray-100">
                        {result.draft}
                      </pre>
                    </div>
                  )}

                  <details className="text-sm text-gray-600">
                    <summary className="cursor-pointer font-medium text-primary py-1">
                      {s.rationaleLabel}
                    </summary>
                    <p className="mt-2 leading-relaxed">{result.rationale}</p>
                  </details>
                </>
              )}
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
