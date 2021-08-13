const QHIOT_Pro = formatMessage => ({
    name: formatMessage({
        id: 'QHIOT_Pro.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'QHIOT_Pro',
    version: '1.0.0',
    supportDevice: ['QDPRobotC02_arduinoEsp32','arduinoEsp32'],
    author: 'QDProbot',
    iconURL: `asset/QHIOT_Pro.png`,
    description: formatMessage({
        id: 'QHIOT_Pro.description',
        default: 'It\'s a wireless remote controller with an ESP32 core'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://qdprobot.taobao.com'
});

module.exports = QHIOT_Pro;
