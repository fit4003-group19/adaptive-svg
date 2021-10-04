import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { Card, CardContent, CardHeader } from "@material-ui/core";
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
    backgroundColor: "black",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    marginTop: 5,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "whitesmoke",
    width: "75%",
    alignSelf: "center",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Questionnaire() {
  const { editableResponse, makeEdits, commitEdits, resetEdits } =
    useContext(QuestionnaireContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetEdits();
    setOpen(false);
  };

  const handleSave = () => {
    // updatingBinary
    commitEdits();
    setOpen(false);
  };

  return (
    <>
      <KeyboardEventHandler
        handleFocusableElements={true}
        //className={classes.map}
        handleKeys={["q"]}
        onKeyEvent={handleClickOpen}
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="black"
        onClick={handleClickOpen}
        fullWidth={true}
      >
        Open Questionnaire
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
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Card sx={{ width: 275 }} className={classes.card}>
          <CardHeader title="Answer the following questions" />
          <CardContent>
            {editableResponse && (
              <Questions response={editableResponse} makeEdits={makeEdits} />
            )}
          </CardContent>
        </Card>
      </Dialog>
    </>
  );
}
