import st from './style.module.scss';
import Card from '../../components/Card';

function Home() {
  const timeTracking = [1, 1, 1, 1];
  return (
    <div className={st.home}>
      <div className={st.trackingContainer}>
        {timeTracking.map(() => (
          <Card title="5.45h" id={1} />
        ))}
      </div>
    </div>
  );
}

export default Home;
