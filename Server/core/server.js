const app = require('./app')

const APP_PORT = process.env.PORT || 5000;

app.listen(APP_PORT, () => {
    console.log(`Listen to post ${APP_PORT}`);
})