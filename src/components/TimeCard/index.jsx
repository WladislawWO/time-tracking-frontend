import React from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, FlameIcon, PlusIcon } from '../../assets/icons';
import { getTime } from '../../utils';
import Button from '../Button';
import st from './style.module.scss';

export default function TimeCard({
  time, title, id, type, handlePlus, onClickCard, streak, minTime,
}) {
  const onPlus = (e) => {
    e.stopPropagation();
    handlePlus();
  };
  const percent = Math.min(time * 100 / (minTime || 1), 100);

  return (
    <div
      className={st.card}
      onClick={onClickCard}
    >
      {!!streak && (
      <div className={st.streak}>
        <FlameIcon className={st.flameIcon} />
        {streak}
      </div>
      )}
      <div className={st.title}>
        {title}
      </div>
      <div
        className={st.value}
        style={{
          ...(time > 0 && minTime > +time && { color: '#77A1D3' }),
          ...(time > 0 && minTime <= +time && { color: '#02AAB0' }),
        }}
      >
        {getTime(time)}
      </div>
      <div className={st.footer}>
        <div className={st.progress} style={{ width: `${percent}%` }} />
        <Button styles={st.pluseBtn} variant="secondary" onClick={onPlus}>
          <PlusIcon className={st.icon} />
        </Button>
        <Link to={`/time/${type}`} className={st.link} onClick={(e) => e.stopPropagation()}>
          <Button styles={st.detailsBtn}>
            <div className={st.detailText}>View Details</div>
            <EyeIcon className={st.eyeIcon} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
