import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import st from './style.module.scss';

export default function Card({ title, id }) {
  return (
    <div className={st.card}>
      <div className={st.cardContent}>
        <div className={st.cardTitle}>
          {title}
        </div>
        <div className={st.footer}>
          <Button styles={st.pluseBtn} variant="secondary">+</Button>
          <Link to={`/time/${id}`}>
            <Button styles={st.detailsBtn}>View Details</Button>
          </Link>
        </div>
      </div>
      {Array.from({ length: 20 }, () => <div className={st.particle} />)}
    </div>
  );
}
