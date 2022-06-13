import st from './style.module.scss';
import TimeCard from '../../components/TimeCard';
import { ADD_TIME_MODAL } from '../../constants/modals';
import { DEFAULT_ADD_TIME } from '../../constants';
import { useHome } from './useHome';
import { AddTimeModal } from '../../modals/AddTimeModal';
import { useModal } from '../../contexts/modals';

function Home() {
  const {
    list, total, handleAddTime, updateList,
  } = useHome();
  const { open, onOpen, onClose } = useModal();

  return (
    <div className={st.home}>
      <div className={st.todayTotal}>
        {total}
      </div>
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
