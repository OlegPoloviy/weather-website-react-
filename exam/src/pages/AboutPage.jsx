import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {Meteorologist} from "../components/Meteorologist.jsx";
import {MySun} from "../components/MySun.jsx"
import VideoNight from '../assets/night_city.mp4';
import VideoDay from "../assets/8016-206146117_small.mp4";
import "../styles/about.scss"

export function AboutPage(){
    const theme = useSelector(store => store.themeReducer);

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [theme]);

    const videoSrc = theme ? VideoDay : VideoNight;

    return(
        <>
            <div className={"aboutContainer"}>
                <video autoPlay loop muted className="video" ref={videoRef}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
                <div className={"cardContainer"}>
                    <MySun/>
                    <Meteorologist/>
                </div>
            </div>
        </>
    )
}