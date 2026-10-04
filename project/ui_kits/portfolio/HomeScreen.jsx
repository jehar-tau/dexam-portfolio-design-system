function HomeScreen({ go }) {
  const { CaseStudyCard, TagGroup, StatGroup, Wordmark, Button, SidebarItem, CapabilityCard } = window.SnehalKumarPortfolioDesignSystem_b299f1;
  return (
    <div style={{ maxWidth: 'var(--container-default)', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-16)' }}>
        <Wordmark size="md" />
        <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
          <SidebarItem label="Work" active onClick={() => {}} />
          <SidebarItem label="About" onClick={() => go('about')} />
        </div>
      </div>

      <h1 className="text-display" style={{ maxWidth: '620px', marginBottom: 'var(--space-4)' }}>Product design, written down.</h1>
      <p className="text-body" style={{ maxWidth: '520px', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
        I'm Snehal Kumar, a senior product designer. This is a working notebook of case studies, decisions, and the process behind them.
      </p>
      <TagGroup tags={['Product Strategy', 'Design Systems', 'B2B SaaS']} />

      <div style={{ margin: 'var(--space-16) 0 var(--space-8)' }}>
        <StatGroup stats={[{ value: '8', label: 'Years in product design' }, { value: '40+', label: 'Shipped features' }, { value: '6', label: 'Design systems built' }]} />
      </div>

      <h2 className="text-h2" style={{ marginBottom: 'var(--space-6)' }}>Case studies</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}>
        <CaseStudyCard
          title="Onboarding Redesign"
          summary="Cut first-week drop-off by 34% with a single guided setup flow."
          tags={['Onboarding', 'SaaS']}
          year="2025"
          onClick={() => go('case-study')}
        />
        <CaseStudyCard
          title="Design System v2"
          summary="Rebuilt tokens and components for a 40-person product org."
          tags={['Design Systems']}
          year="2026"
          onClick={() => go('case-study')}
        />
      </div>

      <h2 className="text-h2" style={{ marginBottom: 'var(--space-6)' }}>What I do</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
        <CapabilityCard icon="◆" title="Product Strategy" description="Turning ambiguous problems into shippable roadmaps." />
        <CapabilityCard icon="✦" title="Design Systems" description="Tokens, components, and docs that scale a team." />
        <CapabilityCard icon="▤" title="Research" description="Grounding decisions in real user behavior." />
      </div>
    </div>
  );
}
window.HomeScreen = HomeScreen;
