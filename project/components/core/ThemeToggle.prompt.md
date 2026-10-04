Small icon button that flips `data-theme="dark"` on `<html>` and remembers the choice in localStorage. Every component reads color via CSS custom properties, so nothing else needs to change to support dark mode.

```jsx
<ThemeToggle />
```

To apply dark mode without the toggle (e.g. system-preference default), set `document.documentElement.setAttribute('data-theme', 'dark')` before paint, or add `data-theme="dark"` directly in HTML.
