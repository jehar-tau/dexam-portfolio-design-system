Grid-lined table preview mimicking a Notion database view — muted header row, vertical + horizontal hairlines. Distinct from the plain `Table` component by its full grid ruling (evokes a live database, not a simple list).

```jsx
<DatabasePreview columns={['Project','Status']} rows={[{Project:'Onboarding', Status:'Shipped'}]} />
```
