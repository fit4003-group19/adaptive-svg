import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    attributes: {
        flex: 1,
        backgroundColor: "green",
        margin: 10,
        display: "flex",
        flexDirection: "column",
      },
    attribute: { flex: 1, backgroundColor: "white", margin: 10 },
  }));

function Controls() {
    const classes = useStyles();

    return (
        <div className={classes.attributes}>
            <div className={classes.attribute}>
                <h1>Hey</h1>
            </div>
            <div className={classes.attribute}>
                <h1>Hey</h1>
            </div>
            <div className={classes.attribute}>
                <h1>Hey</h1>
            </div>
        </div>
    )
}

export default Controls
