Generic bordered surface — the base for portfolio cards, previews, and document tiles.

```jsx
<Card interactive onClick={...}>content</Card>
```

Only lifts (translateY -2px + slightly larger shadow) when `interactive`; otherwise flat with a hairline border. `selected` swaps the border to earthy orange with a soft focus-ring shadow.
