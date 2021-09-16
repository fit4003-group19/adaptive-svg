import { makeStyles } from '@material-ui/styles';
import React from 'react'
import SVG from 'react-inlinesvg';
function Map() {

    // CSS
    const useStyles = makeStyles((theme)=>({
        map: { flex: 3, backgroundColor: "blue", margin: 10 }
    }))

    // Placeholder
    const onError = (e) => {

    }

    // Placeholder
    const onLoad = (e) => {

    }

    const classes = useStyles();

    return (
        
        <div className={classes.map}>
            <SVG 
                src={`${process.env.PUBLIC_URL}/svg/focus-test.svg`} 
                onError={onError}
                onLoad={onLoad}
            />
        </div>

    )
}

export default Map
