import React from 'react';
import cn from 'classnames';
import st from './style.module.scss';

export default function Input({
  styles, variant, onChange, ...rest
}) {
  return (
    <input
      {...rest}
      className={cn(st.input, styles, st[variant])}
      onChange={onChange}
    />
  );
}
