import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    // TODO: Replace with actual endpoint (Cloudflare Worker, Formspree, etc.)
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
      <div class="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
        <p class="text-accent font-semibold">Tack för ditt meddelande!</p>
        <p class="text-sm text-gray-600 mt-1">Vi återkommer så snart vi kan.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-5">
      <div>
        <label htmlFor="name" class="block text-sm font-medium text-gray-700 mb-1">
          Namn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" class="block text-sm font-medium text-gray-700 mb-1">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="company" class="block text-sm font-medium text-gray-700 mb-1">
          Företag
        </label>
        <input
          type="text"
          id="company"
          name="company"
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" class="block text-sm font-medium text-gray-700 mb-1">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        class="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
      </button>

      {status === 'error' && (
        <p class="text-red-600 text-sm text-center">
          Något gick fel. Försök igen eller kontakta oss direkt via e-post.
        </p>
      )}
    </form>
  );
}
