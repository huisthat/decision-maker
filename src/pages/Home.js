
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
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

const options = [
  "Eeting's House",
  "NTU North Spine",
  "Beauty In The Pot",
  "HaiDiLao",
  "Eat NOTHING",
  "make up your own DAMN MIND or roll again",
  "Find something and cook at home",
  "Grab", 
  "Deliveroo", 
  "KBBQ at Clementi Mall",
  "Ask your mum to cook for you", 
  "Jem Genki Sushi", 
  "ToastBox",
  "Don Don Donki",
  "McDonalds",
  "Jurong East Mall foodcourt", 
  "Bingsu at Westgate",
  "Ippudo",
  "Star Vista Watami",
  "Bugis Four Seasons Ramen",
  "Ichiban Sushi/Boshi",
  "Changi Village Hawker Centre",
  "Newton Food Centre",
  "Two Men Bagel House",
  "Fat Burger",
  "Chir Chir",
  "So Pho",
  "Bubble Tea (nearest one)",
  "Find sth in Fairprice/Giant",
  "Mos Burger",
  "Tamago-En",
  "Three Meals A Day",
  "Hansang Korean Family Restaurant",
  "Seoul Yummy",
  "Bimi Kaiho Restaurant",
  "Kushikatsu Tanaka",
  "Misato",
  "Kabe No Ana @ Serangoon",
  "Kei Kaisendon", 
  "Dog Food",
  "Ask your dad to cook steak",
  "Bread with jam",
  "Go ask your sister",
  "Soi Thai Kitchen",
  "Astons at JCube",
  "Big Fish Small Fish",
  "18 Chefs",
  "Swee Choon",
  "Canton Paradise",
  "Pizza Hut",
  "Guzman y Gomez",
  "Dumplings",
  "Lok Lok",
  "Chicken Rice",
  "Aburi-EN",
  "Monster Curry",
  <a target="_blank" href="https://eatbook.sg/orchard-food/">Orchard places</a>,
  <a target="_blank" href="https://thehoneycombers.com/singapore/bugis-food-restaurants-cafes/">Places in Bugis</a>,
  <a target="_blank" href="https://eatbook.sg/jurong-point/">Places in Jurong Point</a>,
  <a target="_blank" href="https://danielfooddiary.com/2021/02/15/clementicafes/">Cafes in Clementi</a>,
  <a target="_blank" href="https://eatbook.sg/woodlands-food/">Food Gems at Woodlands Part 1</a>,
  <a target="_blank" href="https://sethlui.com/places-eat-woodlands-food-guide/">Food Gems at Woodlands Part 2</a>,
  <a target="_blank" href="https://eatbook.sg/city-hall-food/">Food Gems at City Hall</a>,
  <a target="_blank" href="https://eatbook.sg/cheap-japanese-food/">Cheap Japanese Food</a>
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function Deciding(props) {
  const classes = useStyles();
  const index = props.index;
  return (
    <Typography variant="h5" align="center" className={classes.custom}>
        {options[index]}
    </Typography>
);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#d0f0c0',
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
      marginTop: theme.spacing(2),
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
      setCount(getRandomInt(options.length))
  }

  return (
    <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} className={classes.image}>
            <div className={classes.paper}>
                <Icon icon={catIcon} color="#D6485F" width="5em" height="5em" />
              <Typography variant="h5" align="center" className={classes.custom}>
                Zhi Ying's Food Decision Maker
              </Typography>

              <Typography variant="h7" align="center" className={classes.descriptions}>
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
