import st from './style.module.scss';
import { useRoutine } from './useRoutine';
import Loader from '../../components/Loader';
import Checkbox from '../../components/CheckBox';

function Routine() {
  const {
    list, isLoading, handleCompleted,
  } = useRoutine();

  return (
    <div className={st.wrapper}>
      <Loader isLoading={isLoading} />
      <div className={st.container}>
        {list.map(({ completed, name, _id }, i) => (
          <Checkbox
            key={i}
            checked={completed}
            title={name}
            onChange={(completed) => handleCompleted(_id, completed)}
          />
        ))}
      </div>
    </div>
  );
}

export default Routine;
