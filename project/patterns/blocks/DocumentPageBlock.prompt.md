Top-level page shell — icon, big title, metadata bar, then stacked content blocks at consistent block-gap spacing. Use as the outer wrapper for a case-study or long-form page.

```jsx
<DocumentPageBlock icon="📄" title="Onboarding Redesign" metadata={<MetadataBar items={[{label:'2025'}]} />}>
  <Block>Paragraph...</Block>
</DocumentPageBlock>
```
