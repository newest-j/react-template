function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-32 sm:px-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Contact
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        We would love to hear from you.
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-500">
        Have a question or an idea? Send us a note at{" "}
        <a
          className="font-semibold text-emerald-600 underline underline-offset-4"
          href="mailto:hello@northstar.example"
        >
          hello@northstar.example
        </a>
        .
      </p>
    </main>
  );
}

export default ContactPage;
