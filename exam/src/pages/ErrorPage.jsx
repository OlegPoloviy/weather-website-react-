import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Video from '../assets/8016-206146117_small.mp4';
import "../styles/errorPage.scss";

export function ErrorPage(){
    return(
        <>
            <div className={'errorContainer'}>
                <video autoPlay loop muted>
                    <source src={Video}/>
                </video>
                <Card variant={'elevation'} className={'errorContainer-card'}>
                    <h2>This is error, you should`t be there</h2>
                    <NavLink to={'/'}>
                        <Button variant={"outlined"} color={'error'}>Go home</Button>
                    </NavLink>
                </Card>
            </div>
        </>
    )
}