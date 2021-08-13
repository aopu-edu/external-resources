/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_QHIOT_PRO_CATEGORY}" id="QHIOT_PRO_CATEGORY" colour="#DEB887" secondaryColour="#9900FF">
<block type="IOT_PRO_MOTOR_RUN">
            <value name="speed">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="IOT_PRO_MOTOR_BRAKE"></block>
    <block type="IOT_PRO_ENCODER_PAUSE_COUNT"></block>
        <block type="IOT_PRO_ENCODER_GET_COUNT"></block>
        <block type="IOT_PRO_IO_DIGITAL_WRITE"></block>
        <block type="IOT_PRO_IO_DIGITAL_READ"></block>      
        <block type="IOT_PRO_GET_LINESENSOR_STATE"></block>
</category>`;
}

exports = addToolbox;
