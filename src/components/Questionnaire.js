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
import { GlobalContext } from "../context/GlobalContext";
import useQuestions from "../hooks/useQuestions";
import { QuestionnaireContext } from "../context/QuestionnaireContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const RadioButtonsGroup = ({ onChange, value }) => {

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Response</FormLabel> */}
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={onChange}
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
  const { editableResponse, commitedResponse, editResponse, commitResponse, resetResponse} = useContext(QuestionnaireContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetResponse();
    setOpen(false);
  };

  const handleSave = () => {
    // updatingBinary
    commitResponse()
    setOpen(false);
  }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
        <List>
          {
          editableResponse &&
            editableResponse.map((question, i) => (
              <React.Fragment key={i}>
                <ListItem >
                  <ListItemText primary={question.question} />
                  <RadioButtonsGroup
                    onChange={(e)=>{editResponse(i, e.target.value)}}
                    value={question.response}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
        </List>
      </Dialog>
    </div>
  );
}
