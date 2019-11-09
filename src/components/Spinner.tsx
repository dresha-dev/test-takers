import { CircularProgress, Grid } from '@material-ui/core'

const Spinner: React.FC = () => (
  <Grid container justify="center">
    <CircularProgress disableShrink />
  </Grid>
)

export default Spinner
