import LineChart from '../../components/LineChart';
import Loader from '../../components/Loader';
import st from './style.module.scss';
import { useTimeDetails } from './useTimeDetails';

function TimeDetails() {
  const {
    labels, values, title, isLoading,
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
    </div>
  );
}

export default TimeDetails;
