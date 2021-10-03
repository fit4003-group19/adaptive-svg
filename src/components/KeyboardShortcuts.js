import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import { FormLabel } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { MapContext } from "../context/MapContext";
import useQuestions from "../hooks/useQuestions";
import { QuestionnaireContext } from "../context/QuestionnaireContext";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Questions from "./Questions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  header: {
    display: "flex",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 200,
    paddingRight: 200,
  },
  questionRow: {
    display: "flex",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  question: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function KeyboardShortcuts() {
  const { editableResponse, makeEdits, commitEdits, resetEdits } =
    useContext(QuestionnaireContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const shortcuts = [
    {
      key: "q",
      description: "Open questionnaire dialog",
    },
    {
      key: "k",
      description: "Open keyboard shortcuts dialog",
    },
    {
      key: "tab",
      description: "Move through elements",
    },
    {
      key: "Shift +  - / + / r",
      description: "Zoom out/in/reset on map",
    },
    {
      key: "Shift + arrow-keys (on main screen)",
      description: "Pan map",
    },
    {
      key: "esc when focused on map",
      description: "Move focus off map to the control menu",
    },
  ];

  return (
    <div>
      <KeyboardEventHandler
        handleFocusableElements={true}
        //className={classes.map}
        handleKeys={["k"]}
        onKeyEvent={handleClickOpen}
      />
      <Button
        variant="outlined"
        color="black"
        onClick={handleClickOpen}
        className={classes.button}
      >
        Open Keyboard Shortcuts
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
              Keyboard Shortcuts
            </Typography>
          </Toolbar>
        </AppBar>
        <>
          <div className={classes.header}>
            <span>Key</span>
            <span>Description</span>
          </div>
          {shortcuts.map(({ key, description }, i) => (
            <React.Fragment key={i}>
              <div className={classes.questionRow}>
                <span>{key}</span>
                <span>{description}</span>
              </div>
              <Divider />
            </React.Fragment>
          ))}
        </>
      </Dialog>
    </div>
  );
}
