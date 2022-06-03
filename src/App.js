import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import st from './App.module.scss';

function App() {
  const timeTracking = [1,1,1,1];
  return (
    <Grid className={st.app}>
      <Grid className={st.trackingContainer}>
        {timeTracking.map(() => (
          <Card className={st.card}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                1
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Details</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
