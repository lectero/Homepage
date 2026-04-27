import { useState, type FormEvent } from 'react';

interface Labels {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  error: string;
}

interface Props {
  labels: Labels;
}

export default function ContactForm({ labels }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center"
      >
        <p className="text-accent font-semibold">{labels.successTitle}</p>
        <p className="text-sm text-gray-600 mt-1">{labels.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
        className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        {status === 'sending' ? labels.submitting : labels.submit}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={status === 'error' ? 'text-red-600 text-sm text-center' : 'sr-only'}
      >
        {status === 'error' ? labels.error : ''}
      </p>
    </form>
  );
}
