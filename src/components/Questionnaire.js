import React, { useContext, useState } from "react";
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
import { GlobalContext } from "../context/MapContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const RadioButtonsGroup = ({ onChange, buttonId }) => {
  const [value, setValue] = React.useState("null");

  const handleChange = (event) => {
    onChange(buttonId, event.target.value);
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
  const { setQuestionnaireBinary } = useContext(GlobalContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onButtonPress = (id, response) => {
    questions[id].response = response == "yes" ? 1 : 0;
    console.log(questions);
    updateBinaryNumber();
  };

  const updateBinaryNumber = () => {
    let temp = 0;
    // Binary number would be {question 7 response}{question 6 response}...{question 1 response}
    // 000000001 & 10000000 = 0 = 0
    // 1101 & 1000000101 = 0101 = 5
    // 13 & 69 = 5
    questions.forEach((question) => {
      temp += question.response * 2 ** question.id;
    });
    setQuestionnaireBinary(temp);
  };

  let questions = [
    {
      id: 0,
      question: "Do you experience a motor impairment?",
      response: 0,
    },
    {
      id: 1,
      question: "Do you experience a colour impairment?",
      response: 0,
    },
    {
      id: 2,
      question: "Do you have low vision?",
      response: 0,
    },
    {
      id: 3,
      question: "Do you experience total blindness?",
      response: 0,
    },
    {
      id: 4,
      question: "Do you have difficulty reading?",
      response: 0,
    },
    {
      id: 5,
      question: "Do you have difficulties operating doors?",
      response: 0,
    },
    {
      id: 6,
      question: "Do obstacles disrupt your indoor navigation?",
      response: 0,
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
                <RadioButtonsGroup
                  onChange={onButtonPress}
                  buttonId={question.id}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
