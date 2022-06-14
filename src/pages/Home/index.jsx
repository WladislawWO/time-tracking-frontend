import { Link } from 'react-router-dom';
import st from './style.module.scss';
import TimeCard from '../../components/TimeCard';
import { ADD_TIME_MODAL } from '../../constants/modals';
import { DEFAULT_ADD_TIME } from '../../constants';
import { useHome } from './useHome';
import { AddTimeModal } from '../../modals/AddTimeModal';
import { useModal } from '../../contexts/modals';
import Loader from '../../components/Loader';

function Home() {
  const {
    list, total, isLoading, handleAddTime, updateList,
  } = useHome();
  const { open, onOpen, onClose } = useModal();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={st.home}>
      <Link to="time/total">
        <div className={st.todayTotal}>
          {total}
        </div>
      </Link>
      <div className={st.trackingContainer}>
        {list.map(({ time, name, _id }) => (
          <TimeCard
            key={_id}
            time={time}
            title={name}
            id={_id}
            onClickCard={() => handleAddTime(_id, DEFAULT_ADD_TIME)}
            handlePlus={() => onOpen(ADD_TIME_MODAL, _id)}
          />
        ))}
      </div>
      <AddTimeModal onClose={onClose} open={open} updateList={updateList} />
    </div>
  );
}

export default Home;
