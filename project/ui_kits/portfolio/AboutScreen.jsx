function AboutScreen({ go }) {
  const {
    Wordmark, Button, PrincipleCard, ExperienceCard, Divider, Input, Textarea,
  } = window.SnehalKumarPortfolioDesignSystem_b299f1;

  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
        <Wordmark size="sm" />
        <Button variant="ghost" onClick={() => go('home')}>← Back to work</Button>
      </div>

      <h1 className="text-h1" style={{ marginBottom: 'var(--space-4)' }}>About</h1>
      <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '560px' }}>
        I'm a senior product designer focused on SaaS workspaces — the tools teams live in every day. I care about clarity, calm interfaces, and systems that make a whole team's output more consistent.
      </p>

      <h2 className="text-h2" style={{ marginBottom: 'var(--space-6)' }}>How I design</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
        <PrincipleCard number="01" title="Clarity over cleverness" description="If a pattern needs a tooltip to explain itself, it needs to be simplified, not annotated." />
        <PrincipleCard number="02" title="Systems, not screens" description="A one-off layout is a maintenance debt. I design the reusable pattern first." />
        <PrincipleCard number="03" title="Write the copy myself" description="Interface language is a design decision. I draft real copy before final visuals." />
      </div>

      <Divider label="Experience" />

      <div style={{ marginBottom: 'var(--space-8)' }}>
        <ExperienceCard period="2022–Now" role="Senior Product Designer" company="Acme Workspace" description="Leading design for the core collaboration product; built and shipped the company's first design system." />
        <ExperienceCard period="2019–2022" role="Product Designer" company="Fieldnote" description="Owned onboarding, billing, and settings surfaces for a B2B analytics tool." />
        <ExperienceCard period="2017–2019" role="UX Designer" company="Studio Loam" description="Early-stage product design across three client SaaS launches." />
      </div>

      <h2 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Get in touch</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
        <Input label="Name" placeholder="Your name" />
        <Input label="Email" placeholder="you@studio.com" />
      </div>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Textarea label="Message" placeholder="Tell me about the project…" rows={4} />
      </div>
      <Button variant="primary">Send message</Button>
    </div>
  );
}
window.AboutScreen = AboutScreen;
