import actions from './actions'
import themes from "../../components/ThemeSwitcher/ThemeStore";

const initState = {
    current: themes.light
}

export default function (state = initState, action) {
    switch (action.type) {
        case actions.CHANGE_THEME:
            return {current: action.theme};
        default:
            return state;
    }
}