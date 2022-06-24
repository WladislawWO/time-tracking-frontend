import React, { useState } from 'react';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import st from './style.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../Input';

export default function Datepicker({
  onChange,
}) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    if (onChange) {
      onChange(date);
    }
    setStartDate(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      customInput={<Input containerStyles={st.input} label="Date:" />}
    />
  );
}
