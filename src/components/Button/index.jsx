/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import st from './style.module.scss';

export default function Button({
  children, styles, variant, onClick, type,
}) {
  return (
    <button
      className={cn(st.button, styles, st[variant])}
      onClick={onClick}
      type={type || 'button'}
    >
      {children}
    </button>
  );
}
