const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `{ "label": "${label}", "time": "${timestamp}", "level": "${level}", "message": "${message}" }`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'app' }),
        timestamp(),
        myFormat
    ),
    transports: [new transports.Console()]
});

module.exports = logger;