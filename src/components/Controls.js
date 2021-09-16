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
    attribute: { flex: 4, backgroundColor: "white", margin: 10 },
    buttons: { flex: 1, backgroundColor: "white", margin: 10, display:"flex", justify:"space-between", flexDirection:"row" },
  }));

function Controls({mapPanZoom}) {
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
            <div className={classes.buttons}>
            {
                mapPanZoom &&
                <>
                    <label>
                        Zoom In
                        <button onClick={() => mapPanZoom.zoomIn()}>+</button>
                    </label>
                    <label>
                        Zoom Out
                        <button onClick={() => mapPanZoom.zoomOut()}>-</button>
                    </label>
                    <label>
                        Reset
                        <button onClick={() => mapPanZoom.resetZoom()}>x</button>
                    </label>
                </>

            }
            </div>
        </div>
    )
}

export default Controls
