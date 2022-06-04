import React from 'react';
import cn from 'classnames';
import st from './style.module.scss';

export default function Button({ children, styles, variant }) {
  return (
    <button
      className={cn(st.button, styles, st[variant])}
      type="button"
    >
      {children}
    </button>
  );
}
