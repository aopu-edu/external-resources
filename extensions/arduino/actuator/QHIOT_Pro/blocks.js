/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_IOTPRO_COLOR = '#DEB887';


    const coderIconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODI2NDg2MzczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc2OCA1NzZ2LTEyOGgxOTJ2MTI4aC0xOTJ6IG0tMTIwLjMyLTI5MC4yNGwxMzYtMTM1LjY4IDkwLjI0IDkwLjI0LTEzNS42OCAxMzZ6TTQ0OCA3NjhoMTI4djE5MmgtMTI4di0xOTJ6IG0wLTcwNGgxMjh2MTkyaC0xMjhWNjR6TTE1MC4wOCA3ODMuNjhsMTM1LjY4LTEzNiA5MC41NiA5MC41Ni0xMzYgMTM1LjY4eiBtMC01NDMuMzZsOTAuMjQtOTAuMjQgMTM2IDEzNS42OC05MC41NiA5MC41NnpNMjU2IDU3Nkg2NHYtMTI4aDE5MnYxMjh6IG02MTcuOTIgMjA3LjY4bC05MC4yNCA5MC4yNC0xMzYtMTM1LjY4IDkwLjU2LTkwLjU2eiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iNDQ1MiI+PC9wYXRoPjwvc3ZnPg==';

   const motorIconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODI2NTYyMjgxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkyMS42IDMzMi44aC01MS4yYy02LjYgMC0xMyAwLjYtMTkuMyAxLjgtMjAuNy0yOC43LTU0LjUtNTMtODMuMS01M0g1MTJWMTI4YzAtMjguMy0yMi45LTUxLjItNTEuMi01MS4yaC0yNTZjLTI4LjMgMC01MS4yIDIyLjktNTEuMiA1MS4ydjE1My42Yy0yNy41IDAtNTkuOCAyMi40LTgwLjYgNDkuNy01LjEtMS41LTEwLjUtMi4zLTE2LjEtMi4zQzI1LjUgMzI4LjkgMCAzNTQuNCAwIDM4NS44djM0OS45YzAgMzEuNCAyNS41IDU2LjkgNTYuOSA1Ni45IDMuNSAwIDYuOC0wLjIgOS44LTAuNyAxOC4zIDMyLjYgNTAuMSA2Mi41IDc5LjYgNjIuNWgyLjVsLTQ2LjQgOTIuN2g3NjhsLTUxLjItMTAyLjRoLTIuMWM0LjQtMi40IDguNi01LjIgMTIuNy04LjQgMTIuNSA1LjQgMjYuMiA4LjQgNDAuNiA4LjRoNTEuMmM1Ni42IDAgMTAyLjQtNDUuOCAxMDIuNC0xMDIuNFY0MzUuMmMwLTU2LjYtNDUuOC0xMDIuNC0xMDIuNC0xMDIuNHpNNDA5LjYgMTI4YzI4LjMgMCA1MS4yIDIyLjkgNTEuMiA1MS4ycy0yMi45IDUxLjItNTEuMiA1MS4yLTUxLjItMjIuOS01MS4yLTUxLjIgMjIuOS01MS4yIDUxLjItNTEuMnpNMjU2IDEyOGMyOC4zIDAgNTEuMiAyMi45IDUxLjIgNTEuMnMtMjIuOSA1MS4yLTUxLjIgNTEuMi01MS4yLTIyLjktNTEuMi01MS4yUzIyNy43IDEyOCAyNTYgMTI4eiBtNTEyIDY2NS42SDE1My42di01MS4ySDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNlY2NDBINzY4djUxLjJ6IG0wLTEwMi40SDE1My42di01MS4ySDc2OHY1MS4yeiBtMC0xMDIuNEgxNTMuNnYtNTEuMkg3Njh2NTEuMnogbTAtMTAyLjRIMTUzLjZ2LTUxLjJINzY4VjM4NHoiIGZpbGw9IiMyQzJDMkMiIHAtaWQ9IjUxNDciPjwvcGF0aD48L3N2Zz4=';

   const IOT_PRO_io_IconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODI3NTAxNzg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkyMTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYyMi40IDgyMS4xSDQxMy41Yy00Ni42IDAtODQuNS0zNy45LTg0LjUtODQuNXYtNC44YzAtMTEuMi05LjEtMjAuMi0yMC4zLTIwLjJIMjI1Yy04NC4yIDAtMTU1LjQtNjguNi0xNTUuNC0xNDkuOVYzMzguNWMwLTc0LjEgNjAuMy0xMzQuNCAxMzQuNC0xMzQuNGg2MTEuNWM3NC4xIDAgMTM0LjQgNjAuMyAxMzQuNCAxMzQuNHYyMzguN2MwIDc0LjEtNjAuMyAxMzQuNC0xMzQuNCAxMzQuNEg3MjdjLTExLjIgMC0yMC4zIDkuMS0yMC4zIDIwLjJ2NC44YzAuMiA0Ni42LTM3LjcgODQuNS04NC4zIDg0LjV6TTIwNC4xIDI0NS40Yy01MS4zIDAtOTMuMSA0MS43LTkzLjEgOTN2MjIzLjFjMCA1Ny44IDUzLjMgMTA4LjYgMTE0LjEgMTA4LjZoODMuN2MzMy45IDAgNjEuNiAyNy42IDYxLjYgNjEuNnY0LjhjMCAyMy44IDE5LjQgNDMuMiA0My4yIDQzLjJoMjA4LjljMjMuOCAwIDQzLjItMTkuNCA0My4yLTQzLjJ2LTQuOGMwLTMzLjkgMjcuNi02MS42IDYxLjYtNjEuNmg4OC41YzUxLjMgMCA5My4xLTQxLjcgOTMuMS05My4xVjMzOC41YzAtNTEuMy00MS43LTkzLTkzLjEtOTNIMjA0LjF6IiBmaWxsPSIjMTE2RDZEIiBwLWlkPSI5MjExIj48L3BhdGg+PHBhdGggZD0iTTc1MyA0MTMuOWg3NWMyLjggMCA1LTIuMiA1LTV2LTUuN2MwLTQxLTMzLjItNzQuMy03NC4zLTc0LjNINzUzYy0yLjggMC01IDIuMi01IDV2NzVjMCAyLjggMi4zIDUgNSA1ek01NjkuMiA0MTMuOWg3NWMyLjggMCA1LTIuMiA1LTV2LTUuN2MwLTQxLTMzLjItNzQuMy03NC4zLTc0LjNoLTUuN2MtMi44IDAtNSAyLjItNSA1djc1YzAgMi44IDIuMiA1IDUgNXpNMzg1LjkgNDEzLjloNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zaC01LjdjLTIuOCAwLTUgMi4yLTUgNXY3NWMwIDIuOCAyLjIgNSA1IDV6TTIwMiA0MTMuOWg3NWMyLjggMCA1LTIuMiA1LTV2LTUuN2MwLTQxLTMzLjItNzQuMy03NC4zLTc0LjNIMjAyYy0yLjggMC01IDIuMi01IDV2NzVjMCAyLjggMi4zIDUgNSA1ek03NTMgNTcwLjNoNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zSDc1M2MtMi44IDAtNSAyLjItNSA1djc1YzAgMi43IDIuMyA1IDUgNXpNNTY5LjIgNTcwLjNoNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zaC01LjdjLTIuOCAwLTUgMi4yLTUgNXY3NWMwIDIuNyAyLjIgNSA1IDV6TTM4NS45IDU3MC4zaDc1YzIuOCAwIDUtMi4yIDUtNXYtNS43YzAtNDEtMzMuMi03NC4zLTc0LjMtNzQuM2gtNS43Yy0yLjggMC01IDIuMi01IDV2NzVjMCAyLjcgMi4yIDUgNSA1ek0yMDIgNTcwLjNoNzVjMi44IDAgNS0yLjIgNS01di01LjdjMC00MS0zMy4yLTc0LjMtNzQuMy03NC4zSDIwMmMtMi44IDAtNSAyLjItNSA1djc1YzAgMi43IDIuMyA1IDUgNXoiIGZpbGw9IiMxMTZENkQiIHAtaWQ9IjkyMTIiPjwvcGF0aD48L3N2Zz4='

   const IOT_PRO_patrol_line_IconUrl ='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI4ODM1MjMzNzE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyODAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMDY2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xMjgwIDYxNC40YzAtMzItMzItNjQtNjQtNjQtMzguNCAwLTY0IDMyLTY0IDY0IDAgNDQuOC0xMi44IDE3Mi44LTcwLjQgMjM2LjgtMzIgMzItNzAuNCA0NC44LTEyMS42IDQ0LjgtODkuNiAwLTE1My42LTI0My4yLTIwNC44LTQxNi02NC0yNDkuNi0xMjgtNDgwLTI5NC40LTQ4MEMyMjQgMCAxMTUuMiAzNjQuOCA0NC44IDYwMS42Yy0xMi44IDUxLjItMjUuNiA5Ni0zOC40IDEyMS42LTEyLjggMzIgNi40IDcwLjQgMzguNCA4My4yIDMyIDEyLjggNzAuNC02LjQgODMuMi0zOC40IDEyLjgtMzIgMjUuNi03Ni44IDQ0LjgtMTM0LjRDMjE3LjYgNDYwLjggMzIwIDEyOCA0NjAuOCAxMjggNTMxLjIgMTI4IDU5NS4yIDM1OC40IDY0MCA1MTJjNzAuNCAyNDkuNiAxNDAuOCA1MTIgMzI2LjQgNTEyIDgzLjIgMCAxNTMuNi0yNS42IDIwNC44LTgzLjIgMTE1LjItMTIxLjYgMTA4LjgtMzIwIDEwOC44LTMyNi40eiIgcC1pZD0iMTAwNjciPjwvcGF0aD48L3N2Zz4=';


    //电机运行
    Blockly.Blocks.IOT_PRO_MOTOR_RUN = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_MOTOR_RUN,
                args0: [
                    {
                        type: 'field_image',
                        src: motorIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }     
                ],
                "tooltip": "IOT_PRO电机控制",
                colour: QH_IOTPRO_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //电机刹车
    Blockly.Blocks.IOT_PRO_MOTOR_BRAKE = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_MOTOR_BRAKE,
                args0: [
                    {
                        type: 'field_image',
                        src: motorIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    }  
                ],
                "tooltip": "IOT_PRO电机控制",
                colour: QH_IOTPRO_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //电机编码暂停计数
    Blockly.Blocks.IOT_PRO_ENCODER_PAUSE_COUNT = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_ENCODER_PAUSE_COUNT,
                args0: [
                    {
                        type: 'field_image',
                        src: coderIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options:[[Blockly.Msg.RESUME_COUNT,"resumeCount()"],[Blockly.Msg.PAUSE_COUNT,"pauseCount()"],[Blockly.Msg.CLEAR_COUNT,"clearCount()"]]
                    }      
                ],
                "tooltip": "IOT-Pro电机编码器计数/暂停/清除计数",
                colour: QH_IOTPRO_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //电机编码获取计数值
    Blockly.Blocks.IOT_PRO_ENCODER_GET_COUNT = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_ENCODER_GET_COUNT,
                args0: [
                    {
                        type: 'field_image',
                        src: coderIconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]
                    }        
                ],
                "tooltip": "IOT-Pro电机编码器获取计数值,返回int64_t类型数据,在打印输出和运算中请注意此数据类型,arduino无法直接打印此类型,注意数据转换。",
                colour: QH_IOTPRO_COLOR,
                extensions: ['output_number']
            });
        }
    };

    //IO数字输出
    Blockly.Blocks.IOT_PRO_IO_DIGITAL_WRITE = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_IO_DIGITAL_WRITE,
                args0: [
                    {
                        type: 'field_image',
                        src: IOT_PRO_io_IconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:[["D0","0"],["D1","1"],["D2","2"],["D3","3"],["D4","4"],["D5","5"],["D6","6"],["D7(KEY)","7"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STAT',
                        options:[['HIGH',"HIGH"], ['LOW',"LOW"]]
                    }      
                ],
                "tooltip": "D0~D7只能设置为数字输入或输出",
                colour: QH_IOTPRO_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //IO数字输入
    Blockly.Blocks.IOT_PRO_IO_DIGITAL_READ = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_IO_DIGITAL_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: IOT_PRO_io_IconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options:[["D0","0"],["D1","1"],["D2","2"],["D3","3"],["D4","4"],["D5","5"],["D6","6"],["D7(KEY)","7"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[Blockly.Msg.IOT_PRO_IO_INPUT,"1"], [Blockly.Msg.IOT_PRO_IO_PULLUP,"2"]]
                    }        
                ],
                "tooltip": "D0~D7只能设置为数字输入或输出,可选内部上拉输入",
                colour: QH_IOTPRO_COLOR,
                extensions: ['output_boolean']
            });
        }
    };



    //获取巡线传感器状态
    Blockly.Blocks.IOT_PRO_GET_LINESENSOR_STATE = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.IOT_PRO_GET_LINESENSOR_STATE,
                args0: [
                    {
                        type: 'field_image',
                        src: IOT_PRO_patrol_line_IconUrl,
                        width: 30,
                        height: 30
                    }
                ],
                args1: [
                    {
                        type: "field_checkbox",
                        name: "S1",
                    },
                    {
                        type: "field_checkbox",
                        name: "S2",
                    },
                    {
                        type: "field_checkbox",
                        name: "S3",
                    },       
                    {
                        type: "field_checkbox",
                        name: "S4",
                    },
                    {
                        type: "field_checkbox",
                        name: "S5",
                    },
                ],
                "tooltip": "勾选对应功能为ON时，主控板D0~D4对应接传感器D1~D5,如果状态符合返回True.否则返回False.碰撞传感器可以使用数字读取块读取状态,",
                colour: QH_IOTPRO_COLOR,
                extensions: ['output_boolean']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
