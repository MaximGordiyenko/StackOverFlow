import { makeStyles } from '@material-ui/core/styles';

export const cardsStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  subcontent: {
    paddingRight: 15,
  },
}));


export const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export const inputStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const headerStyles = makeStyles((theme) => ({
  root: {
    background: '#333333',
    height: 80,
  },
}));
