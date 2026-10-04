/* @ds-bundle: {"format":4,"namespace":"SnehalKumarPortfolioDesignSystem_b299f1","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"DataRow","sourcePath":"components/data/DataRow.jsx"},{"name":"MetadataBar","sourcePath":"components/data/MetadataBar.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/SidebarItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dropdown","sourcePath":"components/overlays/Dropdown.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"},{"name":"Block","sourcePath":"components/surfaces/Block.jsx"},{"name":"Callout","sourcePath":"components/surfaces/Callout.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"DocumentPageBlock","sourcePath":"patterns/blocks/DocumentPageBlock.jsx"},{"name":"LinkedPageCard","sourcePath":"patterns/blocks/LinkedPageCard.jsx"},{"name":"QuoteBlock","sourcePath":"patterns/blocks/QuoteBlock.jsx"},{"name":"SideNoteBlock","sourcePath":"patterns/blocks/SideNoteBlock.jsx"},{"name":"ToggleBlock","sourcePath":"patterns/blocks/ToggleBlock.jsx"},{"name":"SidebarLayout","sourcePath":"patterns/layout/SidebarLayout.jsx"},{"name":"DatabasePreview","sourcePath":"patterns/previews/DatabasePreview.jsx"},{"name":"KanbanPreview","sourcePath":"patterns/previews/KanbanPreview.jsx"},{"name":"CapabilityCard","sourcePath":"portfolio/cards-a/CapabilityCard.jsx"},{"name":"CaseStudyCard","sourcePath":"portfolio/cards-a/CaseStudyCard.jsx"},{"name":"MetricCard","sourcePath":"portfolio/cards-a/MetricCard.jsx"},{"name":"ProjectBlock","sourcePath":"portfolio/cards-a/ProjectBlock.jsx"},{"name":"DecisionCard","sourcePath":"portfolio/cards-b/DecisionCard.jsx"},{"name":"ExperienceCard","sourcePath":"portfolio/cards-b/ExperienceCard.jsx"},{"name":"ImpactCard","sourcePath":"portfolio/cards-b/ImpactCard.jsx"},{"name":"InsightCard","sourcePath":"portfolio/cards-b/InsightCard.jsx"},{"name":"PrincipleCard","sourcePath":"portfolio/cards-b/PrincipleCard.jsx"},{"name":"ProblemCard","sourcePath":"portfolio/cards-b/ProblemCard.jsx"},{"name":"StatGroup","sourcePath":"portfolio/groups/StatGroup.jsx"},{"name":"TagGroup","sourcePath":"portfolio/groups/TagGroup.jsx"},{"name":"ProcessStep","sourcePath":"portfolio/process/ProcessStep.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"14e85f363d63","components/core/Badge.jsx":"85ba90a1f0fc","components/core/Button.jsx":"ef6c96fc8470","components/core/Divider.jsx":"07b9c604800b","components/core/ThemeToggle.jsx":"b6ade46212b4","components/data/Avatar.jsx":"8806ec2879cd","components/data/DataRow.jsx":"03cce2244433","components/data/MetadataBar.jsx":"6da4945935e3","components/data/Table.jsx":"869cc3901041","components/feedback/EmptyState.jsx":"e39e83e59bb2","components/forms/Checkbox.jsx":"c658eed8169a","components/forms/Input.jsx":"176f0cc2558f","components/forms/Select.jsx":"ba4683deb352","components/forms/Textarea.jsx":"55999e633351","components/navigation/Accordion.jsx":"370138a9cc69","components/navigation/Breadcrumb.jsx":"4da404911d8c","components/navigation/SidebarItem.jsx":"fdd805e9db79","components/navigation/Tabs.jsx":"7559a0ba48f3","components/overlays/Dropdown.jsx":"b3688407fc69","components/overlays/Tooltip.jsx":"af341102758b","components/surfaces/Block.jsx":"c34f3eeaf725","components/surfaces/Callout.jsx":"2fff478510f9","components/surfaces/Card.jsx":"373b0416f1e2","patterns/blocks/DocumentPageBlock.jsx":"8e074fabf49a","patterns/blocks/LinkedPageCard.jsx":"f81f02130ebb","patterns/blocks/QuoteBlock.jsx":"fd295a6bb6c2","patterns/blocks/SideNoteBlock.jsx":"2fa98750fe99","patterns/blocks/ToggleBlock.jsx":"b86d4c8b05aa","patterns/layout/SidebarLayout.jsx":"930e59d5fb7a","patterns/previews/DatabasePreview.jsx":"4aa7636534ad","patterns/previews/KanbanPreview.jsx":"d257080bede3","portfolio/cards-a/CapabilityCard.jsx":"b82f55ee0e86","portfolio/cards-a/CaseStudyCard.jsx":"8223f816f1ee","portfolio/cards-a/MetricCard.jsx":"e7ab0dd09372","portfolio/cards-a/ProjectBlock.jsx":"f276d264d2fa","portfolio/cards-b/DecisionCard.jsx":"25364e94f01a","portfolio/cards-b/ExperienceCard.jsx":"973960cfeef9","portfolio/cards-b/ImpactCard.jsx":"caa562f257f8","portfolio/cards-b/InsightCard.jsx":"ce31f454403b","portfolio/cards-b/PrincipleCard.jsx":"6234c48b63a5","portfolio/cards-b/ProblemCard.jsx":"6704de30c335","portfolio/groups/StatGroup.jsx":"7ff28963711e","portfolio/groups/TagGroup.jsx":"09572c505d38","portfolio/process/ProcessStep.jsx":"a9f5e9ed492f","ui_kits/portfolio/AboutScreen.jsx":"08eb343763eb","ui_kits/portfolio/CaseStudyScreen.jsx":"464adefd3c56","ui_kits/portfolio/HomeScreen.jsx":"4d5df9b10edb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SnehalKumarPortfolioDesignSystem_b299f1 = window.SnehalKumarPortfolioDesignSystem_b299f1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
/** Plain-type wordmark — no logo mark exists for this brand; always render as text. */
function Wordmark({
  size = 'md',
  variant = 'sans'
}) {
  const sizes = {
    sm: '16px',
    md: '20px',
    lg: '28px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: variant === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)',
      fontWeight: variant === 'serif' ? 500 : 600,
      fontSize: sizes[size] || sizes.md,
      letterSpacing: '-0.01em',
      color: 'var(--text-body)'
    }
  }, "Snehal Kumar");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--surface-muted)',
    color: 'var(--text-secondary)',
    border: 'var(--border-default)'
  },
  accent: {
    bg: 'var(--accent-extra-soft)',
    color: 'var(--accent-primary-hover)',
    border: 'var(--accent-soft)'
  },
  success: {
    bg: 'var(--color-success-soft)',
    color: 'var(--color-success)',
    border: 'transparent'
  },
  warning: {
    bg: 'var(--color-warning-soft)',
    color: 'var(--color-warning)',
    border: 'transparent'
  },
  danger: {
    bg: 'var(--color-danger-soft)',
    color: 'var(--color-danger)',
    border: 'transparent'
  }
};
function Badge({
  tone = 'neutral',
  pill = false,
  children
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      background: t.bg,
      color: t.color,
      border: `1px solid ${t.border}`,
      borderRadius: pill ? 'var(--radius-full)' : 'var(--radius-sm)',
      padding: '2px 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.5,
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '6px 12px',
    fontSize: '13px',
    minHeight: '32px'
  },
  md: {
    padding: '9px 16px',
    fontSize: '14px',
    minHeight: '44px'
  }
};
const variantStyles = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--accent-primary)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-medium)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  link: {
    background: 'transparent',
    color: 'var(--text-link)',
    border: 'none',
    padding: 0,
    minHeight: 'auto',
    textDecoration: 'underline',
    textUnderlineOffset: '3px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    ...sizeStyles[variant === 'link' ? 'md' : size],
    ...variantStyles[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-hover)';else if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-hover)';
    },
    onMouseLeave: e => {
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary)';else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-card)';else if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  spacing = 'md',
  label
}) {
  const gap = spacing === 'sm' ? 'var(--space-3)' : spacing === 'lg' ? 'var(--space-8)' : 'var(--space-6)';
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: `${gap} 0`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--border-default)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--border-default)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: 'var(--border-default)',
      margin: `${gap} 0`
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
/** Toggles data-theme="dark" on <html>, persisting the choice to localStorage. */
function ThemeToggle({
  size = 'md'
}) {
  const [dark, setDark] = useState(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.getAttribute('data-theme') === 'dark';
  });
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute('data-theme', 'dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (e) {}
    } else {
      root.removeAttribute('data-theme');
      try {
        localStorage.setItem('theme', 'light');
      } catch (e) {}
    }
  }, [dark]);
  const px = size === 'sm' ? 28 : 32;
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setDark(d => !d),
    "aria-label": dark ? 'Switch to light mode' : 'Switch to dark mode',
    "aria-pressed": dark,
    style: {
      width: px,
      height: px,
      minWidth: '44px',
      minHeight: '44px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      color: 'var(--text-body)',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--surface-card)'
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '14px'
    }
  }, dark ? '☀' : '☾'));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const sizes = {
  sm: 24,
  md: 32,
  lg: 44
};
function Avatar({
  name = '',
  size = 'md',
  src
}) {
  const px = sizes[size] || sizes.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--accent-soft)',
      color: 'var(--color-primary-hover)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: px * 0.4,
      border: '1px solid var(--border-light)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/DataRow.jsx
try { (() => {
function DataRow({
  primary,
  secondary,
  meta,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      padding: 'var(--space-3) var(--space-4)',
      borderRadius: 'var(--radius-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      if (onClick) e.currentTarget.style.background = 'var(--surface-hover)';
    },
    onMouseLeave: e => {
      if (onClick) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-body",
    style: {
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, primary), secondary && /*#__PURE__*/React.createElement("div", {
    className: "text-body-sm",
    style: {
      color: 'var(--text-secondary)'
    }
  }, secondary)), meta && /*#__PURE__*/React.createElement("div", {
    className: "text-metadata",
    style: {
      flexShrink: 0
    }
  }, meta));
}
Object.assign(__ds_scope, { DataRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataRow.jsx", error: String((e && e.message) || e) }); }

// components/data/MetadataBar.jsx
try { (() => {
function MetadataBar({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '14px'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "text-metadata",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, item.icon), item.label)));
}
Object.assign(__ds_scope, { MetadataBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetadataBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      textAlign: 'left',
      padding: '8px 12px',
      borderBottom: '1px solid var(--border-medium)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? i
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    style: {
      padding: '10px 12px',
      borderBottom: '1px solid var(--border-light)',
      fontSize: '14px',
      color: 'var(--text-body)'
    }
  }, row[col.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = '◇',
  title,
  description,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-12) var(--space-6)',
      border: '1px dashed var(--border-medium)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '28px',
      color: 'var(--text-muted)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "text-h3"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "text-body-sm",
    style: {
      maxWidth: '340px'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  id
}) {
  const cbId = id || `checkbox-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      minHeight: 'var(--hit-target-min)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '18px',
      borderRadius: '4px',
      border: `1.5px solid ${checked ? 'var(--color-primary)' : 'var(--border-medium)'}`,
      background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5L4 7.5L10 1",
    stroke: "white",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-body-sm",
    style: {
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
const fieldBase = {
  fontFamily: 'var(--font-sans)',
  fontSize: '14px',
  color: 'var(--text-body)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-medium)',
  borderRadius: 'var(--radius-md)',
  padding: '10px 12px',
  minHeight: '44px',
  width: '100%',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
};
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled,
  id,
  type = 'text'
}) {
  const [focused, setFocused] = useState(false);
  const inputId = id || `input-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "text-label",
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": !!error,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...fieldBase,
      borderColor: error ? 'var(--color-danger)' : focused ? 'var(--color-primary)' : 'var(--border-medium)',
      boxShadow: focused ? 'var(--shadow-focus-ring)' : 'none',
      opacity: disabled ? 0.55 : 1
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    className: "text-caption",
    style: {
      color: 'var(--color-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  id
}) {
  const [focused, setFocused] = useState(false);
  const selId = id || `select-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    className: "text-label",
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: selId,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-medium)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 36px 10px 12px',
      minHeight: '44px',
      width: '100%',
      appearance: 'none',
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value ?? opt,
    value: opt.value ?? opt
  }, opt.label ?? opt))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      fontSize: '11px',
      pointerEvents: 'none'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
const {
  useState
} = React;
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  id
}) {
  const [focused, setFocused] = useState(false);
  const areaId = id || `textarea-${label ? label.replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).slice(2)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: areaId,
    className: "text-label",
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    id: areaId,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: rows,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-medium)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      width: '100%',
      resize: 'vertical',
      outline: 'none',
      boxShadow: focused ? 'var(--shadow-focus-ring)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items = [],
  defaultOpen = -1
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.title ?? i,
    style: {
      borderTop: i === 0 ? 'none' : '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4)',
      minHeight: 'var(--hit-target-min)',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, item.title, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-muted)',
      transform: open === i ? 'rotate(90deg)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }, "\u203A")), open === i && /*#__PURE__*/React.createElement("div", {
    className: "text-body-sm",
    style: {
      padding: '0 var(--space-4) var(--space-4)',
      color: 'var(--text-secondary)'
    }
  }, item.content))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: item.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-muted)',
      fontSize: '12px'
    }
  }, "/"), item.href ? /*#__PURE__*/React.createElement("a", {
    href: item.href,
    className: "text-body-sm",
    style: {
      color: i === items.length - 1 ? 'var(--text-body)' : 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, item.label) : /*#__PURE__*/React.createElement("span", {
    className: "text-body-sm",
    style: {
      color: i === items.length - 1 ? 'var(--text-body)' : 'var(--text-muted)'
    }
  }, item.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarItem.jsx
try { (() => {
function SidebarItem({
  label,
  icon,
  active = false,
  depth = 0,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      padding: '7px 10px',
      paddingLeft: `${10 + depth * 16}px`,
      minHeight: '36px',
      background: active ? 'var(--surface-selected)' : 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textAlign: 'left',
      color: active ? 'var(--color-primary-hover)' : 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: active ? 500 : 400,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = 'var(--surface-hover)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      width: '16px',
      textAlign: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { SidebarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultActive = 0,
  onChange
}) {
  const [active, setActive] = useState(defaultActive);
  const select = i => {
    setActive(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label ?? i,
    role: "tab",
    "aria-selected": active === i,
    onClick: () => select(i),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      fontWeight: 500,
      padding: '10px 14px',
      minHeight: 'var(--hit-target-min)',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: active === i ? 'var(--text-body)' : 'var(--text-muted)',
      borderBottom: active === i ? '2px solid var(--color-primary)' : '2px solid transparent',
      marginBottom: '-1px',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-4)'
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dropdown.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
function Dropdown({
  label,
  items = [],
  onSelect
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 12px',
      minHeight: '40px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '10px',
      color: 'var(--text-muted)'
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      minWidth: '180px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: '4px',
      zIndex: 20
    }
  }, items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.label,
    role: "menuitem",
    onClick: () => {
      onSelect && onSelect(item);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 10px',
      minHeight: '36px',
      background: 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, item.label))));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children,
  side = 'top'
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '6px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '6px'
    }
  }[side] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--color-text-primary)',
      color: '#FFF9F4',
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Block.jsx
try { (() => {
/** A single content block in a document-style page — the atomic unit of Notion-like layout. */
function Block({
  as: Tag = 'div',
  hoverable = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      position: 'relative',
      padding: 'var(--space-2) var(--space-3)',
      marginLeft: '-12px',
      borderRadius: 'var(--radius-sm)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      if (hoverable) e.currentTarget.style.background = 'var(--surface-hover)';
    },
    onMouseLeave: e => {
      if (hoverable) e.currentTarget.style.background = 'transparent';
    }
  }, hoverable && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '-14px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      fontSize: '13px',
      opacity: 0,
      transition: 'opacity var(--duration-fast)'
    },
    className: "block-handle",
    "aria-hidden": "true"
  }, "\u22EE\u22EE"), children);
}
Object.assign(__ds_scope, { Block });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Block.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Callout.jsx
try { (() => {
const icons = {
  note: '◆',
  warning: '▲',
  success: '✓',
  tip: '✦'
};
const tones = {
  neutral: {
    bg: 'var(--surface-muted)',
    border: 'var(--border-default)',
    fg: 'var(--text-body)'
  },
  accent: {
    bg: 'var(--accent-extra-soft)',
    border: 'var(--accent-soft)',
    fg: 'var(--accent-primary-hover)'
  },
  success: {
    bg: 'var(--color-success-soft)',
    border: 'transparent',
    fg: 'var(--color-success)'
  },
  warning: {
    bg: 'var(--color-warning-soft)',
    border: 'transparent',
    fg: 'var(--color-warning)'
  }
};
function Callout({
  tone = 'accent',
  icon = 'note',
  children
}) {
  const t = tones[tone] || tones.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      fontSize: '14px',
      lineHeight: '1.6'
    },
    "aria-hidden": "true"
  }, icons[icon] || icons.note), /*#__PURE__*/React.createElement("div", {
    className: "text-body-sm",
    style: {
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Callout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  interactive = false,
  selected = false,
  children,
  style,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--border-selected)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      boxShadow: selected ? 'var(--shadow-focus-ring)' : 'var(--shadow-xs)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = selected ? 'var(--shadow-focus-ring)' : 'var(--shadow-xs)';
      }
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// patterns/blocks/DocumentPageBlock.jsx
try { (() => {
/** Full document-page frame: title, metadata bar, and flowing content blocks — the top-level Notion-style page shell. */
function DocumentPageBlock({
  icon,
  title,
  metadata,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontSize: '32px',
      marginBottom: 'var(--space-4)'
    }
  }, icon), /*#__PURE__*/React.createElement("h1", {
    className: "text-h1",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, title), metadata && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, metadata), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--block-gap)'
    }
  }, children));
}
Object.assign(__ds_scope, { DocumentPageBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/blocks/DocumentPageBlock.jsx", error: String((e && e.message) || e) }); }

// patterns/blocks/LinkedPageCard.jsx
try { (() => {
function LinkedPageCard({
  icon = '📄',
  title,
  breadcrumb,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      textAlign: 'left',
      padding: '8px 10px',
      minHeight: '40px',
      background: 'var(--surface-muted)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--surface-muted)'
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'underline',
      textUnderlineOffset: '2px'
    }
  }, title), breadcrumb && /*#__PURE__*/React.createElement("span", {
    className: "text-caption",
    style: {
      marginLeft: 'auto'
    }
  }, breadcrumb));
}
Object.assign(__ds_scope, { LinkedPageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/blocks/LinkedPageCard.jsx", error: String((e && e.message) || e) }); }

// patterns/blocks/QuoteBlock.jsx
try { (() => {
function QuoteBlock({
  quote,
  attribution
}) {
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      borderLeft: '3px solid var(--color-text-primary)',
      paddingLeft: 'var(--space-4)',
      fontFamily: 'var(--font-serif)',
      fontSize: '19px',
      fontStyle: 'italic',
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, "\u201C", quote, "\u201D", attribution && /*#__PURE__*/React.createElement("footer", {
    className: "text-caption",
    style: {
      marginTop: 'var(--space-2)',
      fontStyle: 'normal'
    }
  }, "\u2014 ", attribution));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/blocks/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// patterns/blocks/SideNoteBlock.jsx
try { (() => {
function SideNoteBlock({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      padding: 'var(--space-3) var(--space-4)',
      background: 'transparent',
      borderLeft: '2px solid var(--border-medium)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "text-caption",
    style: {
      flexShrink: 0
    }
  }, "Note"), /*#__PURE__*/React.createElement("p", {
    className: "text-caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { SideNoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/blocks/SideNoteBlock.jsx", error: String((e && e.message) || e) }); }

// patterns/blocks/ToggleBlock.jsx
try { (() => {
const {
  useState
} = React;
function ToggleBlock({
  label,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 6px',
      marginLeft: '-6px',
      borderRadius: 'var(--radius-sm)',
      minHeight: '32px',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: open ? 'rotate(90deg)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-standard)',
      color: 'var(--text-muted)',
      fontSize: '11px'
    }
  }, "\u25B6"), label), open && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: '20px',
      marginTop: '4px'
    },
    className: "text-body-sm"
  }, children));
}
Object.assign(__ds_scope, { ToggleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/blocks/ToggleBlock.jsx", error: String((e && e.message) || e) }); }

// patterns/layout/SidebarLayout.jsx
try { (() => {
/** Minimal document-workspace layout: fixed narrow sidebar + flowing content column. */
function SidebarLayout({
  sidebar,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '220px',
      flexShrink: 0,
      background: 'var(--bg-page-warm)',
      borderRight: '1px solid var(--border-light)',
      padding: 'var(--space-4) var(--space-2)'
    }
  }, sidebar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-8)',
      background: 'var(--bg-page)'
    }
  }, children));
}
Object.assign(__ds_scope, { SidebarLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/layout/SidebarLayout.jsx", error: String((e && e.message) || e) }); }

// patterns/previews/DatabasePreview.jsx
try { (() => {
function DatabasePreview({
  columns = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      background: 'var(--surface-muted)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      padding: '8px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      borderRight: '1px solid var(--border-default)'
    }
  }, c))), rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      borderTop: '1px solid var(--border-light)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      padding: '8px 12px',
      fontSize: '13px',
      color: 'var(--text-body)',
      borderRight: '1px solid var(--border-light)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, row[c])))));
}
Object.assign(__ds_scope, { DatabasePreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/previews/DatabasePreview.jsx", error: String((e && e.message) || e) }); }

// patterns/previews/KanbanPreview.jsx
try { (() => {
function KanbanPreview({
  columns = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      overflowX: 'auto'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      minWidth: '200px',
      background: 'var(--surface-muted)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-label",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, (col.cards || []).map(card => /*#__PURE__*/React.createElement("div", {
    key: card,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 10px',
      fontSize: '13px',
      color: 'var(--text-body)'
    }
  }, card))))));
}
Object.assign(__ds_scope, { KanbanPreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "patterns/previews/KanbanPreview.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-a/CapabilityCard.jsx
try { (() => {
function CapabilityCard({
  icon,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontSize: '20px',
      color: 'var(--color-primary)',
      marginBottom: 'var(--space-3)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, description));
}
Object.assign(__ds_scope, { CapabilityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-a/CapabilityCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-a/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  title,
  summary,
  tags = [],
  year,
  image,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: image ? `url(${image}) center/cover` : 'var(--surface-muted)',
      borderBottom: '1px solid var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-h3"
  }, title), year && /*#__PURE__*/React.createElement("span", {
    className: "text-metadata"
  }, year)), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, summary), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)',
      background: 'var(--surface-muted)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, t)))));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-a/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-a/MetricCard.jsx
try { (() => {
function MetricCard({
  value,
  label,
  delta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '32px',
      letterSpacing: '-0.02em',
      color: 'var(--color-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "text-body-sm",
    style: {
      marginTop: 'var(--space-1)'
    }
  }, label), delta && /*#__PURE__*/React.createElement("div", {
    className: "text-metadata",
    style: {
      marginTop: 'var(--space-2)',
      color: 'var(--color-success)'
    }
  }, delta));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-a/MetricCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-a/ProjectBlock.jsx
try { (() => {
function ProjectBlock({
  label,
  title,
  description,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 'var(--space-6)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-label",
    style: {
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-1)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, description), meta && /*#__PURE__*/React.createElement("div", {
    className: "text-metadata",
    style: {
      marginTop: 'var(--space-2)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { ProjectBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-a/ProjectBlock.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-b/DecisionCard.jsx
try { (() => {
function DecisionCard({
  decision,
  rationale,
  tradeoff
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-label",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Decision"), /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, decision), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm",
    style: {
      marginBottom: tradeoff ? 'var(--space-3)' : 0
    }
  }, rationale), tradeoff && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-metadata"
  }, "Trade-off: "), /*#__PURE__*/React.createElement("span", {
    className: "text-body-sm"
  }, tradeoff)));
}
Object.assign(__ds_scope, { DecisionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-b/DecisionCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-b/ExperienceCard.jsx
try { (() => {
function ExperienceCard({
  company,
  role,
  period,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '110px'
    },
    className: "text-metadata"
  }, period), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: '2px'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    className: "text-body-sm",
    style: {
      color: 'var(--color-primary-hover)',
      fontWeight: 500,
      marginBottom: 'var(--space-2)'
    }
  }, company), description && /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, description)));
}
Object.assign(__ds_scope, { ExperienceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-b/ExperienceCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-b/ImpactCard.jsx
try { (() => {
function ImpactCard({
  metric,
  description,
  tone = 'accent'
}) {
  const color = tone === 'success' ? 'var(--color-success)' : 'var(--color-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '24px',
      color,
      minWidth: '90px'
    }
  }, metric), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, description));
}
Object.assign(__ds_scope, { ImpactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-b/ImpactCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-b/InsightCard.jsx
try { (() => {
function InsightCard({
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      background: 'var(--bg-page-warm)',
      borderRadius: 'var(--radius-lg)',
      borderLeft: '3px solid var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-label",
    style: {
      color: 'var(--color-primary-hover)',
      marginBottom: 'var(--space-2)'
    }
  }, "Insight"), /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, body));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-b/InsightCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-b/PrincipleCard.jsx
try { (() => {
function PrincipleCard({
  number,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-h2-serif",
    style: {
      color: 'var(--color-primary)',
      minWidth: '36px'
    }
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-1)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, description)));
}
Object.assign(__ds_scope, { PrincipleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-b/PrincipleCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/cards-b/ProblemCard.jsx
try { (() => {
function ProblemCard({
  title,
  context
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      background: 'var(--surface-muted)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-label",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, "Problem"), /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, context));
}
Object.assign(__ds_scope, { ProblemCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/cards-b/ProblemCard.jsx", error: String((e && e.message) || e) }); }

// portfolio/groups/StatGroup.jsx
try { (() => {
function StatGroup({
  stats = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '28px',
      color: 'var(--text-body)',
      letterSpacing: '-0.01em'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "text-caption"
  }, s.label))));
}
Object.assign(__ds_scope, { StatGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/groups/StatGroup.jsx", error: String((e && e.message) || e) }); }

// portfolio/groups/TagGroup.jsx
try { (() => {
function TagGroup({
  tags = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--text-secondary)',
      background: 'var(--surface-muted)',
      border: '1px solid var(--border-light)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, t)));
}
Object.assign(__ds_scope, { TagGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/groups/TagGroup.jsx", error: String((e && e.message) || e) }); }

// portfolio/process/ProcessStep.jsx
try { (() => {
function ProcessStep({
  index,
  title,
  description,
  isLast = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: 'var(--radius-full)',
      border: '1.5px solid var(--color-primary)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      flexShrink: 0
    }
  }, index), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1px',
      flex: 1,
      background: 'var(--border-default)',
      marginTop: '4px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: isLast ? 0 : 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-h3",
    style: {
      marginBottom: 'var(--space-1)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-body-sm"
  }, description)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/process/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
function AboutScreen({
  go
}) {
  const {
    Wordmark,
    Button,
    PrincipleCard,
    ExperienceCard,
    Divider,
    Input,
    Textarea
  } = window.SnehalKumarPortfolioDesignSystem_b299f1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('home')
  }, "\u2190 Back to work")), /*#__PURE__*/React.createElement("h1", {
    className: "text-h1",
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    className: "text-body",
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 'var(--space-8)',
      maxWidth: '560px'
    }
  }, "I'm a senior product designer focused on SaaS workspaces \u2014 the tools teams live in every day. I care about clarity, calm interfaces, and systems that make a whole team's output more consistent."), /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "How I design"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PrincipleCard, {
    number: "01",
    title: "Clarity over cleverness",
    description: "If a pattern needs a tooltip to explain itself, it needs to be simplified, not annotated."
  }), /*#__PURE__*/React.createElement(PrincipleCard, {
    number: "02",
    title: "Systems, not screens",
    description: "A one-off layout is a maintenance debt. I design the reusable pattern first."
  }), /*#__PURE__*/React.createElement(PrincipleCard, {
    number: "03",
    title: "Write the copy myself",
    description: "Interface language is a design decision. I draft real copy before final visuals."
  })), /*#__PURE__*/React.createElement(Divider, {
    label: "Experience"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ExperienceCard, {
    period: "2022\u2013Now",
    role: "Senior Product Designer",
    company: "Acme Workspace",
    description: "Leading design for the core collaboration product; built and shipped the company's first design system."
  }), /*#__PURE__*/React.createElement(ExperienceCard, {
    period: "2019\u20132022",
    role: "Product Designer",
    company: "Fieldnote",
    description: "Owned onboarding, billing, and settings surfaces for a B2B analytics tool."
  }), /*#__PURE__*/React.createElement(ExperienceCard, {
    period: "2017\u20132019",
    role: "UX Designer",
    company: "Studio Loam",
    description: "Early-stage product design across three client SaaS launches."
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@studio.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    placeholder: "Tell me about the project\u2026",
    rows: 4
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Send message"));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
function CaseStudyScreen({
  go
}) {
  const {
    Wordmark,
    Breadcrumb,
    MetadataBar,
    TagGroup,
    ProblemCard,
    InsightCard,
    ProcessStep,
    DecisionCard,
    ImpactCard,
    QuoteBlock,
    SideNoteBlock,
    Button,
    StatGroup
  } = window.SnehalKumarPortfolioDesignSystem_b299f1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('home')
  }, "\u2190 Back to work")), /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Work',
      href: '#'
    }, {
      label: 'Onboarding Redesign'
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    className: "text-h1",
    style: {
      margin: 'var(--space-4) 0 var(--space-3)'
    }
  }, "Onboarding Redesign"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MetadataBar, {
    items: [{
      label: 'Senior Product Designer'
    }, {
      label: '2025'
    }, {
      label: '6 min read'
    }]
  })), /*#__PURE__*/React.createElement(TagGroup, {
    tags: ['Onboarding', 'SaaS', 'B2B']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: 'var(--surface-muted)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      margin: 'var(--space-8) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ProblemCard, {
    title: "Signup felt like a form, not a welcome",
    context: "34% of new users dropped off before finishing setup. Interviews pointed to a permissions screen that felt like a wall."
  }), /*#__PURE__*/React.createElement(InsightCard, {
    title: "Users abandoned setup at step 3",
    body: "Session recordings showed people re-reading the same permissions copy three or four times before giving up."
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Process"), /*#__PURE__*/React.createElement(ProcessStep, {
    index: "1",
    title: "Research",
    description: "Interviewed 12 users and reviewed 8 weeks of funnel analytics."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    index: "2",
    title: "Prototype",
    description: "Tested three onboarding structures with a moderated study."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    index: "3",
    title: "Ship",
    description: "Rolled the winning flow out to 100% of new signups.",
    isLast: true
  })), /*#__PURE__*/React.createElement(DecisionCard, {
    decision: "Single-column, one-step-at-a-time onboarding",
    rationale: "Reduced the number of decisions visible at once, which testing showed lowered abandonment.",
    tradeoff: "Slightly longer total scroll on mobile devices."
  }), /*#__PURE__*/React.createElement(QuoteBlock, {
    quote: "This is the first onboarding that didn't make me feel lost.",
    attribution: "Beta user, October 2025"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }, "Outcomes"), /*#__PURE__*/React.createElement(ImpactCard, {
    metric: "+34%",
    description: "Setup completion rate, first week post-launch.",
    tone: "success"
  }), /*#__PURE__*/React.createElement(ImpactCard, {
    metric: "+18%",
    description: "Activation within the first session.",
    tone: "success"
  })), /*#__PURE__*/React.createElement(SideNoteBlock, null, "Metrics reflect a 4-week post-launch measurement window against the prior flow.")));
}
window.CaseStudyScreen = CaseStudyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    CaseStudyCard,
    TagGroup,
    StatGroup,
    Wordmark,
    Button,
    SidebarItem,
    CapabilityCard
  } = window.SnehalKumarPortfolioDesignSystem_b299f1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-default)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SidebarItem, {
    label: "Work",
    active: true,
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(SidebarItem, {
    label: "About",
    onClick: () => go('about')
  }))), /*#__PURE__*/React.createElement("h1", {
    className: "text-display",
    style: {
      maxWidth: '620px',
      marginBottom: 'var(--space-4)'
    }
  }, "Product design, written down."), /*#__PURE__*/React.createElement("p", {
    className: "text-body",
    style: {
      maxWidth: '520px',
      color: 'var(--text-secondary)',
      marginBottom: 'var(--space-6)'
    }
  }, "I'm Snehal Kumar, a senior product designer. This is a working notebook of case studies, decisions, and the process behind them."), /*#__PURE__*/React.createElement(TagGroup, {
    tags: ['Product Strategy', 'Design Systems', 'B2B SaaS']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-16) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(StatGroup, {
    stats: [{
      value: '8',
      label: 'Years in product design'
    }, {
      value: '40+',
      label: 'Shipped features'
    }, {
      value: '6',
      label: 'Design systems built'
    }]
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Case studies"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    title: "Onboarding Redesign",
    summary: "Cut first-week drop-off by 34% with a single guided setup flow.",
    tags: ['Onboarding', 'SaaS'],
    year: "2025",
    onClick: () => go('case-study')
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    title: "Design System v2",
    summary: "Rebuilt tokens and components for a 40-person product org.",
    tags: ['Design Systems'],
    year: "2026",
    onClick: () => go('case-study')
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "What I do"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(CapabilityCard, {
    icon: "\u25C6",
    title: "Product Strategy",
    description: "Turning ambiguous problems into shippable roadmaps."
  }), /*#__PURE__*/React.createElement(CapabilityCard, {
    icon: "\u2726",
    title: "Design Systems",
    description: "Tokens, components, and docs that scale a team."
  }), /*#__PURE__*/React.createElement(CapabilityCard, {
    icon: "\u25A4",
    title: "Research",
    description: "Grounding decisions in real user behavior."
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.DataRow = __ds_scope.DataRow;

__ds_ns.MetadataBar = __ds_scope.MetadataBar;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SidebarItem = __ds_scope.SidebarItem;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Block = __ds_scope.Block;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DocumentPageBlock = __ds_scope.DocumentPageBlock;

__ds_ns.LinkedPageCard = __ds_scope.LinkedPageCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.SideNoteBlock = __ds_scope.SideNoteBlock;

__ds_ns.ToggleBlock = __ds_scope.ToggleBlock;

__ds_ns.SidebarLayout = __ds_scope.SidebarLayout;

__ds_ns.DatabasePreview = __ds_scope.DatabasePreview;

__ds_ns.KanbanPreview = __ds_scope.KanbanPreview;

__ds_ns.CapabilityCard = __ds_scope.CapabilityCard;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.ProjectBlock = __ds_scope.ProjectBlock;

__ds_ns.DecisionCard = __ds_scope.DecisionCard;

__ds_ns.ExperienceCard = __ds_scope.ExperienceCard;

__ds_ns.ImpactCard = __ds_scope.ImpactCard;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.PrincipleCard = __ds_scope.PrincipleCard;

__ds_ns.ProblemCard = __ds_scope.ProblemCard;

__ds_ns.StatGroup = __ds_scope.StatGroup;

__ds_ns.TagGroup = __ds_scope.TagGroup;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

})();
