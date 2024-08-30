import Sun from "../assets/sun_change-removebg-preview.png";
import Moon from "../assets/moon-removebg-preview.png";
import {useSelector,useDispatch} from "react-redux";
import {toggleTheme} from "../store/slices/themeSlice.jsx";
import "../styles/themeChange.scss";

export function ThemeChangeButton() {
    const dispatch = useDispatch();
    const theme = useSelector(store => store.themeReducer)

    return (
        <div className={"changeTheme"} onClick={() => dispatch(toggleTheme())}>
            <img src={theme ? Moon : Sun} alt="Change Theme" />
        </div>
    );
}
