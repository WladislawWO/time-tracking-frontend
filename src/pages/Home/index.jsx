import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import st from './style.module.scss';
import TimeCard from '../../components/TimeCard';
import { ADD_TIME_MODAL } from '../../constants/modals';
import { DEFAULT_ADD_TIME } from '../../constants';
import { useHome } from './useHome';
import { AddTimeModal } from '../../modals/AddTimeModal';
import { useModal } from '../../contexts/modals';
import Loader from '../../components/Loader';
import { RefreshIcon } from '../../assets/icons';

function Home() {
  const {
    list, total, isLoading, totalLabel, handleAddTime, updateList, updateStatistics,
  } = useHome();
  const { open, onOpen, onClose } = useModal();

  return (
    <div className={st.home}>
      <Loader isLoading={isLoading} />

      <Link to="time/total">
        <div className={st.todayTotal}>
          <CountUp end={total} duration={1} decimals={2} />
          {totalLabel}
        </div>
      </Link>

      <div className={st.trackingContainer}>
        {list.map(({
          time, name, streak, id, minTime, type_id,
        }) => (
          <TimeCard
            key={type_id}
            minTime={minTime}
            streak={streak}
            time={time}
            title={name}
            id={id}
            onClickCard={() => handleAddTime(id, name, time)}
            handlePlus={() => onOpen(ADD_TIME_MODAL, id)}
          />
        ))}
      </div>
      <AddTimeModal onClose={onClose} open={open} updateList={updateList} />
    </div>
  );
}

export default Home;
