import  React from 'react';
import ThemeSwitcherWrapper from "./style";
import {useDispatch} from "react-redux";
import actions from "../../Redux/ThemeSwitcher/actions";
import themes from "./ThemeStore";
import {Switch} from "antd";

export default function (props) {
    const dispatch = useDispatch();

    const changeTheme = (checked) => {
        if (checked) {
            dispatch(actions.changeTheme(themes.dark));
        } else {
            dispatch(actions.changeTheme(themes.light));
        }
    }

    return (
        <ThemeSwitcherWrapper>
            <Switch onChange={changeTheme} checkedChildren={"Dark"} unCheckedChildren={"Light"}/>
        </ThemeSwitcherWrapper>
    )

}