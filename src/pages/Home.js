
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, InlineIcon } from '@iconify/react';
import alphaMCircle from '@iconify-icons/mdi/alpha-m-circle';
import catIcon from '@iconify-icons/fa-solid/cat';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
           DelusionalDonkey
      {'.'}
    </Typography>
  );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Option1() {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.custom}>
            Eeting's House
        </Typography>
    );
}

function Option2() {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.custom}>
            NTU North Spine
        </Typography>
    );
}

function Option3() {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.custom}>
            Beauty In The Pot
        </Typography>
    );
}

function Option4() {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.custom}>
            Eat NOTHING
        </Typography>
    );
}

function Option5() {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.custom}>
            make up your own DAMN MIND or roll again
        </Typography>
    );
}

function Nothing() {
    const classes = useStyles();
    return (
        <Typography variant="h5" className={classes.custom}>
            
        </Typography>
    );
}

function Deciding(props) {
    const index = props.index;
    if (index == 0) {
        return <Option1 />;
      } else if (index == 1) {
        return <Option2 />;
      } else if (index == 2) {
        return <Option3 />;
      } else if (index == 3) {
        return <Option4 />;
      } else if (index == 4) {
        return <Option5 />;
      } 
    return <Nothing />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/fdlZBWIP0aM/3673x5207)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(25, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(10, 5, 2),
  },
  custom: {
      color: "#D6485F",
      fontWeight: "bold",
      fontFamily: "Arial",
      fontSize: 28,
      marginTop: theme.spacing(2)
    },
  descriptions: {
      color: "#225FA6",
      fontWeight: "400",
      fontFamily: "Arial",
      fontSize: 20,
      marginTop: theme.spacing(5)
    },    
  link: {
      color: "#FFFFFF"
  },
  button: {
        width: "150px",
        height: "70px",
        backgroundColor: "#225FA6",
        color: "#ffffff",
        marginTop: theme.spacing(6),
        fontSize: "25px",
        textAlign: "center",
  },
}));

export default function Login () {
  const classes = useStyles();
  let [Count, setCount] = useState(-1);

  function handleChange(event) {
      setCount(getRandomInt(5))
  }

  return (
    <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={5} className={classes.image} />
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Icon icon={catIcon} color="#D6485F" width="5em" height="5em" />
              <Typography variant="h5" className={classes.custom}>
                Zhi Ying's Food Decision Maker
              </Typography>

              <Typography variant="h7" className={classes.descriptions}>
                Click on the button below to help you decide what to eat!
              </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    component="span"
                    className={classes.button}
                    alignItems="center"
                    onClick={handleChange}
                >
                    Decide
                </Button>
                <Box mt={5} >
                    <Deciding index={Count}/>
                </Box>
            <Box mt={5}>
                <Copyright />
            </Box>
            </div>
          </Grid>
        </Grid>
  );
};
