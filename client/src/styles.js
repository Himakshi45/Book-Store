import { makeStyles } from '@mui/material';

export default makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '100%', 
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    width: '100%',
    height: '40px',

},
}));