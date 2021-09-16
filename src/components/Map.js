import { makeStyles } from '@material-ui/styles';
import React, {useRef} from 'react'
import SVG from 'react-inlinesvg';
const svgPanZoom = require('svg-pan-zoom')


function Map({mapPanZoom, setMapPanZoom}) {
    // useRef References
    const svgEl = useRef(null);

    // CSS
    const useStyles = makeStyles((theme)=>({
        map: { flex: 3, backgroundColor: "blue", margin: 10 },
        svg: {
            height: "100%",
            width: "100%"
        }
    }))

    // Placeholder
    const onError = (e) => {

    }


    // Placeholder
    const onLoad = (e) => {
        setMapPanZoom(
            svgPanZoom(svgEl.current, {
                zoomEnabled: true,
                // controlIconsEnabled: false,
             }
            )
        )
        
    }

    const classes = useStyles();

    return (
        
        <div className={classes.map}>
            <SVG 
                className={classes.svg}
                src={`${process.env.PUBLIC_URL}/svg/focus-test.svg`} 
                onError={onError}
                onLoad={onLoad}
                innerRef={svgEl}
            />
        </div>

    )
}

export default Map
