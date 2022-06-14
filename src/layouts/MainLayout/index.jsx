import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import st from './styles.module.scss';

const tabs = [
  {
    title: 'Time',
    link: '/',
  },
  {
    title: 'Routine',
    link: '/routine',
  },
  {
    title: 'Todo',
    link: '/todo',
  },
];

export default function MainLayout({ children }) {
  const location = useLocation();
  return (
    <div className={st.mainLayoutContainer}>
      <div className={st.tabs}>
        {tabs.map(({ link, title }, i) => (
          <Link className={cn(st.tab, { [st.active]: link === location.pathname })} to={link} key={i}>
            {title}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
