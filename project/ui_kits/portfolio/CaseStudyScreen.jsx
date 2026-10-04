function CaseStudyScreen({ go }) {
  const {
    Wordmark, Breadcrumb, MetadataBar, TagGroup, ProblemCard, InsightCard, ProcessStep,
    DecisionCard, ImpactCard, QuoteBlock, SideNoteBlock, Button, StatGroup,
  } = window.SnehalKumarPortfolioDesignSystem_b299f1;

  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
        <Wordmark size="sm" />
        <Button variant="ghost" onClick={() => go('home')}>← Back to work</Button>
      </div>

      <Breadcrumb items={[{ label: 'Work', href: '#' }, { label: 'Onboarding Redesign' }]} />

      <h1 className="text-h1" style={{ margin: 'var(--space-4) 0 var(--space-3)' }}>Onboarding Redesign</h1>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <MetadataBar items={[{ label: 'Senior Product Designer' }, { label: '2025' }, { label: '6 min read' }]} />
      </div>
      <TagGroup tags={['Onboarding', 'SaaS', 'B2B']} />

      <div style={{ aspectRatio: '16/9', background: 'var(--surface-muted)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', margin: 'var(--space-8) 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <ProblemCard title="Signup felt like a form, not a welcome" context="34% of new users dropped off before finishing setup. Interviews pointed to a permissions screen that felt like a wall." />

        <InsightCard title="Users abandoned setup at step 3" body="Session recordings showed people re-reading the same permissions copy three or four times before giving up." />

        <div>
          <h2 className="text-h2" style={{ marginBottom: 'var(--space-5)' }}>Process</h2>
          <ProcessStep index="1" title="Research" description="Interviewed 12 users and reviewed 8 weeks of funnel analytics." />
          <ProcessStep index="2" title="Prototype" description="Tested three onboarding structures with a moderated study." />
          <ProcessStep index="3" title="Ship" description="Rolled the winning flow out to 100% of new signups." isLast />
        </div>

        <DecisionCard decision="Single-column, one-step-at-a-time onboarding" rationale="Reduced the number of decisions visible at once, which testing showed lowered abandonment." tradeoff="Slightly longer total scroll on mobile devices." />

        <QuoteBlock quote="This is the first onboarding that didn't make me feel lost." attribution="Beta user, October 2025" />

        <div>
          <h2 className="text-h2" style={{ marginBottom: 'var(--space-3)' }}>Outcomes</h2>
          <ImpactCard metric="+34%" description="Setup completion rate, first week post-launch." tone="success" />
          <ImpactCard metric="+18%" description="Activation within the first session." tone="success" />
        </div>

        <SideNoteBlock>Metrics reflect a 4-week post-launch measurement window against the prior flow.</SideNoteBlock>
      </div>
    </div>
  );
}
window.CaseStudyScreen = CaseStudyScreen;
