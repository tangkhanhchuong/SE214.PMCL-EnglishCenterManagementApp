const actions = {

    CHANGE_THEME: "CHANGE_THEME",

    changeTheme: (theme) => ({
        type: actions.CHANGE_THEME,
        theme: theme,
    }),
}

export default actions;