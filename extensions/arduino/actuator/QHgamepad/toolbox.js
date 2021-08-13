/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QHGAMEPAD_CATEGORY}" id="QHGAMEPAD_CATEGORY" colour="#DEB887" secondaryColour="#9900FF">
    <block type="IOT_REMOTE_CONTROL_BUTTON_EVENT"></block>
    <block type="IOT_REMOTE_CONTROL_get_the_joystick_value"></block>
</category>`;
}

exports = addToolbox;
