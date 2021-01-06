import React from 'react';
import './required.css'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0C87C8',
      },
      '&:hover fieldset': {
        borderColor: '#0C87C8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0C87C8',
      },
            
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    width:'355px',
    height:'32px'
  },
}));



export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>      
      <CssTextField
         required
        className={classes.margin}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
        InputLabelProps={{className:"text"}}

      />        
    </form>
  );
}
