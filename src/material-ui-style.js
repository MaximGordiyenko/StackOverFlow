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
    borderRadius: 8,
  },
}));

export const buttonStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
  },
  secondary: {
    position: "absolute",
    left: 330,
    bottom: 215,
    padding: 0,
  }
}));


export const modStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: 400,
    top: 'calc(50vh - 30%)',
    left: 'calc(100vw - 70%)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
  },
}));

export const formStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
