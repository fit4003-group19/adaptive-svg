import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const RadioButtonsGroup = () => {
  const [value, setValue] = React.useState("null");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Response</FormLabel> */}
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Questionnaire() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onButtonPress = (id, response) => {
    questions[id].response = response;
    console.log(questions);
  };

  let questions = [
    {
      id: 0,
      question: "Do you experience a motor impairment?",
      response: null,
    },
    {
      id: 1,
      question: "Do you experience a colour impairment?",
      response: null,
    },
    {
      id: 2,
      question: "Do you have low vision?",
      response: null,
    },
    {
      id: 3,
      question: "Do you experience total blindness?",
      response: null,
    },
    {
      id: 4,
      question: "Do you have difficulty reading?",
      response: null,
    },
    {
      id: 5,
      question: "Do you have difficulties operating doors?",
      response: null,
    },
    {
      id: 6,
      question: "Do obstacles disrupt your indoor navigation?",
      response: null,
    },
  ];

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Map Questionnaire
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {questions.map((question) => (
            <>
              <ListItem key={question.id}>
                <ListItemText primary={question.question} />
                <RadioButtonsGroup />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
