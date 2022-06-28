import Button from '../../components/Button';
import Input from '../../components/Input';
import LineChart from '../../components/LineChart';
import Loader from '../../components/Loader';
import { useTimeDetails } from './useTimeDetails';
import st from './style.module.scss';

function TimeDetails() {
  const {
    labels,
    values,
    title,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
  } = useTimeDetails();

  if (isLoading) return <Loader />;

  return (
    <div className={st.timeDetailsContainer}>
      <div className={st.title}>
        Time details for
        <div className={st.name}>{title}</div>
      </div>
      <div className={st.chartContainer}>
        <LineChart
          title="chart"
          bgColor="#ff4d4d"
          labels={labels}
          values={values}
          gradient={['#29901e', '#77c91a']}
        />
      </div>
      <div className={st.timeForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('minTime')}
            containerStyles={st.containerInput}
            label="Minimum time"
          />

          <Button type="submit" styles={st.button}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}

export default TimeDetails;
