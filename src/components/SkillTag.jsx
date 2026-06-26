import React from 'react';

export default function SkillTag({ icon: Icon, children, className = '', title }) {
  return (
    <span
      title={title}
      className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold shadow ${className}`}
    >
      {Icon ? <Icon aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  );
}