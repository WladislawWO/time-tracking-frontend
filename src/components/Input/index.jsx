import React, { forwardRef } from 'react';
import cn from 'classnames';
import st from './style.module.scss';

const Input = forwardRef(({
  styles, containerStyles, variant, onChange, label, ...rest
}, ref) => (
  <div className={cn(st.inputConatiner, containerStyles)}>
    {label && (
    <div className={st.label}>
      {label}
    </div>
    )}
    <input
      {...rest}
      ref={ref}
      className={cn(st.input, styles, st[variant])}
      onChange={onChange}
    />
  </div>
));

export default Input;
