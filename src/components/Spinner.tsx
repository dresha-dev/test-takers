import { CircularProgress, Grid } from '@material-ui/core'

interface IProps {
  style?: React.CSSProperties
}

const Spinner: React.FC<IProps> = (props) => (
  <Grid container justify="center" {...props}>
    <CircularProgress disableShrink />
  </Grid>
)

export default Spinner
