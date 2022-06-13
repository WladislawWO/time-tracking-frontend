import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '../../assets/icons';
import { getTime } from '../../utils';
import Button from '../Button';
import st from './style.module.scss';

export default function TimeCard({
  time, title, id, handlePlus, onClickCard,
}) {
  return (
    <div
      className={st.card}
      onClick={onClickCard}
    >
      <div className={st.cardContent}>
        <div className={st.title}>
          {title}
        </div>
        <div className={st.value}>
          {getTime(time)}
        </div>
        <div className={st.footer}>
          <Button styles={st.pluseBtn} variant="secondary" onClick={handlePlus}>
            <PlusIcon className={st.icon} />
          </Button>
          <Link to={`/time/${id}`} className={st.link}>
            <Button styles={st.detailsBtn}>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
