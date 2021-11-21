/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_BUTTON_LABEL:'---BUTTON---',
        QH_SENSOR_LABEL:'---SENSOR---',
        QH_COLOR_LABEL:'---COLOR---',
        QH_MPU6050_LABEL:'---GYRO---',
        QH_RELAY_LABEL:'---RELAY---',
        QH_BUZZER_LABEL:'---BUZZER---',
        QH_SERVO_LABEL:'---SERVO---',
        QH_DCMOTO_LABEL:'---DCMOTOR---',
        QH_SYNTHESIS_LABEL:'---SYNTHESIS---',
        QH_RECOGNITION_LABEL:'---RECOGNITION---',
        QH_IR_LABEL:'---IR---',
        QH_BLUETOOTH_LABEL:'---BLUETOOTH---',
        QH_CLASS_BLUETOOTH_LABEL:'---CLASS BLUETOOTH---',
        QH_BLEKEYBOARD_LABEL:'---BLE KEYBOARD---',
        QH_SERIAL_LABEL:'---SERIAL---',
        QH_ANNOTATION_LABEL:'---ANNOTATION---',
        QH_VARIABLE_LABEL:'---VARIABLE---',
        QH_SCOOP_LABEL:'---Scoop---',
        QH_OPERATOR_LABEL:'---OPERATOR---',
        QH_WEATHER_LABEL:'---WEATHER---',
        QH_TIMER_LABEL:'---TIMER---',
        QH_C02_COLOR_SCREEN_CATEGORY:'COLOR SCREEN',
        QH_C02_SENSOR_CATEGORY:'SENSOR',
        QH_ACTUATOR_CATEGORY:'ACTUATOR',
        QH_SPEECH_CATEGORY:'SPEECH',
        QH_COMMUNICATE_CATEGORY:'COMMUNICATE',
        QH_MP3_CATEGORY:'MP3',
        QH_SMG_CATEGORY:'Display',
        QH_OLED_CATEGORY:'OLED',
        QH_SDISPLAY_CATEGORY:'SDisplay',
        QH_LCD_CATEGORY:'LCD',
        QH_HDISPLAY_CATEGORY:'HDisplay',
        QH_STORAGE_CATEGORY:'STORAGE',
        QH_OTHER_CATEGORY:'Other',
        DHT_INIT: 'init dht %1 pin %2 mode %3',
        QDP_blink_32:'Learn QR Code',
        QDP_esp32_display_samll_init:'Color screen initialization %1 Port %2 Baud rate %3',
        QDP_esp32_display_samll_refresh_display:'%1 Color screen refresh display %2',
        QDP_esp32_display_samll_HV:'Color screen direction Port %1 %2',
        QDP_display_samll_HV0:'vertica l90',
        QDP_display_samll_HV1:'transverse 90',
        QDP_display_samll_HV2:'transverse 180',
        QDP_display_samll_HV3:'vertica 270',
        QDP_esp32_display_samll_BL:'Color screen brightness Port %1 brightness 0~255 %2',
        QDP_esp32_display_samll_clr:'Colour screen Port %1 %2 Colour 0~63 %3',
        QDP_display_samll_clr1:'refresh',
        QDP_display_samll_clr2:'background',
        QDP_esp32_display_samll_pic:'Image shows Port %1 %2 address %3  starting point X %4 Y %5 width %6 high %7',
        QDP_display_samll_pic0:'normal',
        QDP_display_samll_pic1:'lucency',
        QDP_esp32_customize_display_define_bitmap_data:'Colour screen image name %1 image data %2',
        QDP_esp32_customize_display:'Color screen custom display Port %1 image name %2 starting point X %3 Y %4 width %5 high %6 colour 0~63 %7',
        QDP_esp32_display_samll_PS:'Draw  point Port %1 X %2 Y %3 colour 0~63 %4',
        QDP_esp32_display_samll_PL:'Draw line/box Port %1 %2 starting point X %3 Y %4 end point X %5 Y %6 colour 0~63 %7',
        QDP_display_samll_pl1:'line',
        QDP_display_samll_pl2:'box',
        QDP_display_samll_pl3:'box fill',
        QDP_esp32_display_samll_CIR:'Draw circle Port %1 %2 Center X %3 Y %4 radius %5 colour 0~63 %6',
        MIXLY_QDP_displayhollowround:'hollow',
        MIXLY_QDP_displaysolidround:'solid',
        QDP_esp32_display_samll_DC:'Text Port %1 Font %2 colour 0~63 %3 starting point X %4 Y %5 content %6',
        QDP_esp32_display_samll_SBCDC:'Background colour text Port %1 Font %2 Back colour %3 colour 0~63 %4 starting point X %5 Y %6 content %7',
        QDP_esp32_display_samll_order:'Custom order Port %1 %2',
        QDP_esp32_display_samll_btl:'Color screen Baud rate Port %1 %2',
        QDP_inout_esp32_touchRead:'Touch Pin # %1 value',
        QDP_inout_esp32_touchEvents:'Touch event Port# %1 mode %2 ',
        MIXLY_ESP32_TOUCH_Events_changed:'changed',
        MIXLY_ESP32_TOUCH_Events_touching:'touching',
        MIXLY_ESP32_TOUCH_Events_touched:'touched',
        qdp_esp32_buttonl:'Button Port %1',
        qdp_esp32_buttonx:'Right or left button Port %1',
        qdp_esp32_buttonfuction1:'Enable multi-function button Port %1',
        qdp_esp32_button1:'Multi-function button Port %1 trigger mode %2',
        MIXLY_QDP_BUTTONSingleClick:'single click',
        MIXLY_QDP_BUTTONDoubleClick:'double click',
        MIXLY_QDP_BUTTONTripleClick:'triple click',
        MIXLY_QDP_BUTTONSingleLongClick:'single long click',
        MIXLY_QDP_BUTTONDoubleLongClick:'double long click',
        MIXLY_QDP_BUTTONTripleLongClick:'triple long click',
        qdp_esp32_chaoshengbo:'Utrasonic ranging Port %1 unit %2',
        qdp_esp32_chaoshengboI2C:'QH Utrasonic ranging(IIC)',
        qdp_esp32_chaoshengboSerial:'QH Utrasonic ranging %1 Port %2',
        qdp_esp32_grayscale:'Line follower Port %1 Left %2 Right %3',
        qdp_esp32_lightSensor:'Light sensor Port %1',
        qdp_esp32_sound:'Sound sensor Port %1',
        qdp_esp32_potentiometer:'Potentiometer sensor Port %1',
        qdp_esp32_Soilmoisture:'Soilmoisture sensor Port %1',
        qdp_esp32_dht11:'Temperature and humidity sensor Port %1 parameter %2',
        QH_Temperature:'Temperature',
        QH_Humidity:'Humidity',
        qdp_esp32_yscgq:'Enable color recognition Time delay %1 MS Photosensitive gain %2  value  %3 I2C Address 0x29',
        QH_noPrint:'No Print',
        QH_Print:'Print',
        qdp_yscgq2:'Get the color value %1',
        qdp_yscgq3:'Color if %1 = %2 offset ± %3',
        QDP_ESP32_MPU6050_update:'MPU6050 (IIC) updata',
        QDP_ESP32_MPU6050_GETDATA:'Read the value of the gyroscope %1',
        QH_Accel_X:"X Axis Accel", 
        QH_Accel_Y:"Y Axis Accel", 
        QH_Accel_Z:"Z Axis Accel",
        QH_Gyro_X:"X Gyro Accel",
        QH_Gyro_Y:"Y Gyro Accel",
        QH_Gyro_Z:"Z Gyro Accel",
        QH_readTempC:"Temperature",
        QDP_ESP32_hallRead:'EPS32 hall read',
        qdp_esp32_ledlight:'LED light Port %1 state %2',
        qdp_esp32_read_ledlight:'Read LED light Port %1',
        qdp_esp32_ledlight3:'LED Port %1 Value %2',
        qdp_esp32_relay:'Relay Port %1 state %2',
        qdp_esp32_read_relay:'Read relay Port %1',
        rgb_esp32_led:'RGB LED Port %1 total %2  NO %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED Port %1 total %2  NO %3 Colour %4',
        qdp_esp32_buzzer3:'Buzzer Port %1  frequency %2 duration %3 channel %4',
        qdp_esp32_buzzer_music:'Buzzer Port %1 play music %2 channel %3',
        qdp_esp32_motor:'DC motor Port %1 connect %2 speed(-255~255) %3',
        qdp_esp32_servomotor360:'Servo 360° Port %1 Direction %2 Speed(0~10) %3',
        QH_CW:'CW',
        QH_CCW:'CCW',
        qdp_esp32_servomotor2:'Servo 180° Port %1 Angle(0~180) %2 ',
        qdp_esp32_servomotorread:'Servo read angle Port %1',
        qdp_esp32_servomotorPWM_set180:'Servo board N0 %1 [parameter setting] Lower limit range of PWM(1-4095) %2 PWM upper limit range (2-4096) %3',
		qdp_esp32_servomotorPWM:'Servo board N0 %1 Servo NO(0~15) %2 Angle %3 ',
		qdp_esp32_servomotorPWM_set360:'Servo board360° NO %1 [parameter setting] PWM stop value %2 PWM forward lower limit %3 PWM forward upper limit  %4 PWM reverses lower limit %5 PWM reverses upper limit %6 ',
		qdp_esp32_servomotorPWM360:'Servo board360° N0 %1 Direction %2 NO(0`15)  %3 Speed(0`10) %4',
        QDP32_ASR_SendData:'Send to QH-ASR Port %1 Order %2',
        QDP32_ASR_ReceiveData:'QH-ASR start Port %1',
        QDP32_ASR_CompareData:'QH-ASR CompareData Port %1 Order %2',
        speech_recognition_initialization:'AI Speech recognition initialization Port %1 auth %2',
        speech_recognition:'AI Speech recognition returns the result target language %1',
        AI_SPEECH_RECOGNITION3:'mandarin',
        AI_SPEECH_RECOGNITION4:'mandarin/Simple English',
        AI_SPEECH_RECOGNITION5:'English',
        AI_SPEECH_RECOGNITION6:'Cantonese',
        identification_switch:'AI Speech recognition stop recording',
        qdp_esp32_QF_hc_init:'Speech synthesis initialization %1 Port %2',
        qdp_esp32_QF_hc:'Text to speech Pronunciation people %1 interrupt %2 volume(0-11) %3 speed(0-11) %4 intonnation(0-11) %5 Details %6',
        QH_Donotinterrupt:'Do not interrupt',
        QH_Interruptible:'Interruptible',
        qdp_esp32_QF_sound:'Play prompt tone Type %1 Number(01~25) %2',
        qdp_esp32_QF_stophc:'Stop speech',
        qdp_esp32_QF_startstopsb:'Start voice recognition Play result %1 ',
        QH_Sayresult:'Say result',
        QH_NoSayresult:'No Say result',
        qdp_esp32_QF_sbjg:'Identify results Recognized %1',
        qdp_esp32_ir_re2:'Remote control input RC5 Port %1 Keybord %2 Mode %3',
        QH_IrPress:'Press',
        QH_IrPressOn:'Press on',
        qdp_ESP32_ir_recv_raw:'IR receive decode Port %1',
        qdp_esp32_ir_send_nec:'IR send %1 Port %2 value %3',
        QDP_esp32_ir_send_raw:'Infrared emission Port %1  %2 Array %3 Array length %4 frequency %5',
        qdp_esp32_BT_START:'Enable Bluetooth Reception name %1 %2',
        qdp_esp32_BT_button:'Bluetooth key %1',
        qdp_esp32_BT_variable:'Bluetooth variable %1',
        qdp_esp32_BT_print:'Bluetooth send variable  variable 1 %1 variable 2 %2 variable 3 %3 variable 4 %4 variable 5 %5',
        qdp_esp32_BT_MASTER_CONNECT:'Bluetooth Master connect slave %1 %2 %3',
        QDPROBOT_NAME:'name',
        qdp_esp32_BT_MASTER_AVAILABLE:'Bluetooth Master available?',
        qdp_esp32_BT_MASTER_CONNECTED:'Bluetooth Master connected? timeout %1',
        qdp_esp32_BT_MASTER_CONNECT_CONTROL:'Bluetooth Master connect control %1',
        QDPROBOT_CONNECT:'connect',
        QDPROBOT_DISCONNECT:'disconnect',
        qdp_esp32_BT_MASTER_READ:'Bluetooth Master read',
        qdp_esp32_BT_MASTER_WRITE:'Bluetooth Master write %1 %2',
        qdp_esp32_serial_jieshouzhi:'Serial received Port %1 if data= %2',
        qdp_esp32_serial_fasong:'Serial send Port %1 Mode %2 Detai1 %3',
        QH_SERIAL_WRITE:'WRITE',
        QH_SERIAL_PRINT:'PRINT',
        QH_SERIAL_PRINTLN:'PRINTLN',
        qdp_esp32_serial_jieshou:'Serial received Port %1 return string',
        qdp_esp32_serial_suju:'Serial available Port %1',
        esp32_BleKeyboard_init:'Bluetooth keyboard initialization name %1 device manufacturer %2',
        esp32_BleKeyboard_isConnected:'Bluetooth keyboard enable, is connected?',
        esp32_BleKeyboard_KeyValue:'Key value %1',
        esp32_BleKeyboard_write_press:'Bluetooth keyboard %1 Key value ‘ %2 ’',
        esp32_BleKeyboard_print :'print', 
        esp32_BleKeyboard_write :'write',
        esp32_BleKeyboard_press :'press',
        esp32_BleKeyboard_release : 'release',
        esp32_BleKeyboard_releaseAll : 'releaseAll',
        esp32_Mp3_init:'Mp3 initialize %1 Port %2',
        qdp_esp32_MP3_bofangx:'Play the specified volume(0-30) %1 Designated track number %2',
        qdp_esp32_MP3_yingliang:'Volume adjustment volume(0-30) %1',
        qdp_esp32_MP3_loopplay:'Loop play Volume(0-30) %1 Designated track number %2',
        qdp_esp32_MP3_startpause:'Play/Pause Mode %1',
        QH_START:'PLAY',
        QH_PAUSE:'PAUSE',
        qdp_esp32_MP3_previous_next:'Previous/Next Mode %1',
        QH_PREVIOUS:'PREVIOUS',
        QH_NEXT:'NEXT',
        qdp_esp32_MP3_play:'Play sound sound %1 Volume(0-30) %2',
        QH_play1:'1laughter',
        QH_play2:'2cry',
        QH_play3:'3tank ',
        QH_play4:'4strafe',
        QH_play5:'5shot',
        QH_play6:'6transformers',
        QH_play7:'7speed up',
        QH_play8:'8braking',
        QH_play9:'9flight',
        QH_play10:'10copter',
        QH_play11:'11cat',
        QH_play12:'12dog',
        QH_play13:'13tiger',
        QH_play14:'14chicken',
        qdp_ESP32_define_mp3_directory:'Define the MP3 SD card file directory %1 ',
        qdp_ESP32_mp3_designated_play:'Mode %1 Volume(0-30) %2 Designated track number %3',
        QH_BOFANGX:'Play specified',
        QH_LOOPPLAY:'Loop play',
        qdp_esp32_display:'Digit Port %1 %2 display %3',
        qdp_esp32_display_no:'integer',
        qdp_esp32_display_no2:'alphabet',
        qdp_esp32_display_clear:'Digit Clear Screen Port %1',
        qdp_esp32_displayoff:'Digit off Port %1',
        esp32_oled_init:'OLED initialization Port# %1',
        esp32_oled_page:'%1 OLED Refresh the page',
        esp32_oled_showBitmap:'OLED Display image Start point X %1 Y %2 Width %3 Height %4 Image name %5',
        esp32_oled_set_EN_Font:'OLED Setting En Font %1 size %2 style %3',
        esp32_oled_set_CN_Font:'OLED Setting Cn Font %1 size %2',
        OLED_FONT_chinese1:'Songti small font set 1 (411 words)',
        OLED_FONT_chinese2:'Songti small font set 2 (574 characters)',
        OLED_FONT_chinese3:'Songti small font set 3 (993 characters)',
        OLED_FONT_gb2312a:'Songti large font set A (4041 words)',
        OLED_FONT_gb2312b:'Songti font set B (4531 words)',
        OLED_FONT_gb2312:'Complete Song Dynasty (7539 words)',
        esp32_oled_print:'OLED text view starting point X %1 Y %2 content %3',
        tool_modulus_show:'Image name %1 [%2] save to flash %3 %4',
        tool_modulus:'Bitmap format %1 Mode %2 Direction %3 Font %4 Size %5 px Width %6 px Height %7 px Content %8',
        esp32_oled_clear:'OLED Clear screen ',
        esp32_u8g2_setContrast:'OLED  Backlight brightness %1',
        esp32_oled_face:'OLED Display image Start point X %1 Y %2 Built-in ICONS %3',
        esp32_oled_drawPixel:'OLED Draw point Start point X %1 Y %2 ',
        esp32_oled_drawLine:'OLED  Draw line Start point X %1 Y %2 End point X %3 Y %4',
        esp32_oled_draw_Str_Line:'OLED Draw straight line Start point X %1 Y %2 Length X %3 Mode %4',
        QH_OLED_HOR:'Horizontal',
        QH_OLED_VER:'Vertical',
        esp32_oled_drawFrame:'OLED  Draw rect Mode %1 Start poin X %2 Y %3 Width  %4 Height %5',
        esp32_oled_drawRFrame:'OLED Draw rect Mode %1 Start poin X %2 Y %3 Width  %4 Height %5 Radius %6',
        esp32_oled_drawCircle:'OLED Circle Mode %1 Center X %2 Y %3 Radius %4 Type %5',
        QH_OLED_WHOLE_CICILE:'Full circle',
        QH_OLED_UP_R:'Upper right',
        QH_OLED_UP_L:'Upper left',
        QH_OLED_LOW_R:'Down right',
        QH_OLED_LOW_L:'Down left',
        esp32_oled_drawEllipse:'OLED Draw Ellipse Mode %1 Center X %2 Y %3 Radius X %4 Y %5 Type %6',
        QH_OLED_HOLLOW:'Hollow',
        QH_OLED_SOLID:'Solid',
        esp32_oled_drawTriangle:'OLED Draw Triangle A point X %1 Y %2 B point X %3 Y %4 C point X %5 Y %6',
        group_lcd_init2:'Initialization LCD %1 Name %2 Device address %3 SCL %4 SDA %5',
        group_lcd_print:'LCD %1 Print Line 1 %2 Print Line 2 %3',
        group_lcd_print2:'LCD %1 Row %2 column %3 Print %4',
        group_lcd_power:'LCD %1 Mode %2',
        QH_ON:'ON',
        QH_OFF:'OFF',
        QH_LCD_STAT_CURSOR:'CURSOR',
        QH_LCD_STAT_NOCURSOR:'NO CURSOR',
        QH_LCD_STAT_BLINK:'BLINK',
        QH_LCD_STAT_NOBLINK:'NO BLINK',
        QH_LCD_STAT_CLEAR:'CLEAR',
        QH_LCD_NOBACKLIGHT:'NO BACKLIGHT',
        QH_LCD_BACKLIGHT:'BACKLIGHT',

        qdp_esp32_ZKDisplay_init:'Display Initialization %1',
        qdp_esp32_display_START:' %1 Display start ',
        qdp_esp32_display_button:'Display key = %1',
        qdp_display_variable:'Display variable  %1',
        qdp_display_print:'Send variable to display V %1 Value %2',
        qdp_zkpdisplay_sleep:'Screen Sleep  %1',
        QH_displaysleep1:'Sleep',
        QH_displaysleep0:'Wakeup',qdp_zkpdisplay_buzzer:'Screen buzzer  frequency %1 Volume(0-100) %2',
        qdp_zkpdisplay_clscolor:'Brush color screen  Color %1',
        qdp_zkpdisplay_color:'Color %1',
        qdp_zkpdisplay_pic:'Face brush  %1',
        QH_displaypic1:'love',
        QH_displaypic2:'surprised',
        QH_displaypic3:'sad',
        QH_displaypic4:'Over your face',
        QH_displaypic5:'Smiling face',
        QH_displaypic6:'dizzy',
        QH_displaypic7:'Blink of an eye',
        QH_displaypic8:'praise',
        QH_displaypic9:'Learn the qr code',
        qdp_zkpdisplay_page:'Page jump  %1',
        QH_displaypage1:'Menu',
        QH_displaypage2:'Remote control/slider',
        QH_displaypage3:'Remote control/variable',
        QH_displaypage4:'Slider',
        QH_displaypage5:'Variable',
        QH_displaypage6:'Keys',
        QH_displaypage7:'Serial',
        QH_displaypage8:'The random number',
        QH_displaypage9:'blank pages',
        qdp_zkpdisplay_drawinground:'Circle  Type %1 X %2 Y %3 R %4 Decimal color %5',
        QH_displaysolidround:'Solid round',
        QH_displayhollowround:'The hollow circle',
        qdp_zkpdisplay_function1:'Draw  Type %1 X %2 Y %3 X2W %4 Y2H %5 Decimal color %6',
        QH_displayfunction1fill:'Area filling',
        QH_displayfunction1line:'Line drawing',
        QH_displayfunction1draw:'Draw a rectangular',
        qdp_zkpdisplay_TEXT:'TEXT message  fill %1 X %2 Y %3 W %4 H %5 Text color %6 Background color %7 Content %8',
        QH_displaybackcolor0:'Cut the figure',
        QH_displaybackcolor1:'monochromatic',
        QH_displaybackcolor2:'picture',
        QH_displaybackcolor3:'No background',
        qdp_zkpdisplay_TEXT_CN:'TEXT message  fill %1 X %2 Y %3 W %4 H %5 Text color %6 Background color %7 Content %8',
        qdp_zkpdisplay_order:'Custom instruction  %1',
        QDP_Preferences_Open:'Power failure data store open file %1 %2',
        QDP_Preferences_Read:'Power failure data store read key  %1 data type %2 ',
        QDP_Preferences_Write:'Power failure data store write key %1 data type %2 Value %3',
        QDP_Preferences_Close:'Power failure data store close file ',
        QDP_Preferences_R_W:'Read/Write',
        QDP_Preferences_R:'Read',
        QDP_esp32_smartConfig_:'Web smart config',
        QDP_esp32_config_access_point:'ESP Enable WIFI AP ssid %1 password :%2',
        QDP_esp32_config_station:'ESP connection WIFI  ssid %1 password :%2',
        QDP_WiFi_status:'WIFI was connected?',
        QDP_esp32_wifi_IP:'IP address',
        QDP32_mac_address:'MAC address',
        QDP_esp32_config_multi_station:'ESP config multi station WIFI ssid %1 password :%2',
        QDP_multi_status:'WIFI multi station was connected?',
        QDP_esp32_config_domaine_name_mDNS:'ESP config DNS http:// %1 .local',
        qdp_ESP32_set_mac_address:'set MAC address %1',
        QDP32_esp_now_send:'%1 espnow seed MAC %2 data %3 %4 succeeded %5 failed %6',
        QDP32_esp_now_receive:'%1 espnow received %2  %3',
        qdpWeatherGetToday:'Get today\'s data %1',
        TodayShidu:'humidity',
        TodayQuality:'air quality',
        TodayWendu:'temperature',
        qdpWeatherGetForecast:'Get 15 day\'s data %1 date(0~14) %2',
        ForecastDate:'date',
        ForecastHigh:'highest temperature',
        ForecastLow:'lowest temperature',
        ForecastYmd:'YMD',
        ForecastWeek:'week',
        ForecastAqi:'AQI',
        ForecastFx:'wind direction',
        ForecastFl:'wind power',
        ForecastType:'weather',
        qdpWeatherGet:'Refresh the weather city %1 %2',
        QH_variables_declare:'Declare %1 variable Type %2 Name %3 Assigned to %4',
        QH_variables_set:'Set %1 variable by %2',
        QH_variables_change:'Change %1 variable mode %2',
        QH_global:'Global',
        QH_local:'Local',
        QH_MATH_INT: 'int',
        QH_MATH_LONG: 'long',
        QH_MATH_FLOAT: 'float',
        QH_MATH_BOOLEAN: 'boolean',
        QH_MATH_BYTE: 'byte',
        QH_MATH_CHAR: 'char',
        QH_MATH_STRING: 'string',
        QH_MATH_UNSIGNED_INT: 'unsigned int',
        QH_MATH_WORD: 'word',
        QH_MATH_UNSIGNED_LONG: 'unsigned long',
        QH_MATH_UNSIGNED_CHAR: 'unsigned char',
        QH_MATH_DOUBLE: 'double',
        controls_runnig_core: 'cooperative scheduler %1 setup',
        control_core_delay: 'cooperative scheduler delay %1 ms',
        QH_EQU:'EQU(==)',
        QH_NEQ:'(NEQ!=)',
        QH_GTR:'GTR(>)',
        QH_LSS:'LSS(<)',
        QH_GEQ:'GEQ(>=)',
        QH_LEQ:'LEQ(<=)',
        QH_bit_operator:'Bit operator %1 %2 %3',
        QH_AND:'And(&))',
        QH_OR:'Or(|)',
        QH_XOR:'Xor(^)',
        QH_SHIFT_R:'SHIFT_R(>>)',
        QH_SHIFT_L:'SHIFT_L(<<)',
        QH_constrain:'Constrain %1 Min %2 Max %3 ',
        QH_map:'Map %1 From[ %2 , %3 ] To [ %4 , %5 ]',
        C02_controls_hw_timer:'%1 Hardware timer No # %2 %3 run %4',
        C02_controls_hw_timer_start:'Hardware timer No# %1 start duration %2 MS pattern %3',
        C02_controls_hw_timer_stop:'Hardware timer No# %1 stop',
        MIXLY_PYTHON_ONE_SHOT:'Single Trigger',
        MIXLY_PYTHON_PERIODIC:'Multi Trigger',
        NTP_server:'NTP server address %1 timezone %2 Interval %3',
        NTP_server_get_time:'NTP get %1',
        MIXLY_YEAR:'YEAR',
        MIXLY_MONTH:'MONTH',
        MIXLY_DAY:'DAY',
        MIXLY_HOUR:'HOUR',
        MIXLY_MINUTE:'MINUTE',
        MIXLY_SECOND:'SECOND',
        qdp_PS2_init:'initialization PS2 DAT %1 CMD %2 SEL %3 CLK %4 vibration feedback %5 press feedback %6',
        qdp_PS2_update:'PS2 refreshes data vibrate motor 1 (true/false) %1 vibrate motor 2 (0~255) %2',
        qdp_PS2_Button:'PS2 button %1 state %2',
        qdp_PS2_stk:'PS2 joystick %1',
        MIXLY_BUTTON_HOLD:'hold',
        MIXLY_BUTTON_PRESSED:'pressed',
        MIXLY_BUTTON_RELEASED:'released',
        MIXLY_CHANGE:'change',
        PS2_RX:'right X value',
        PS2_RY:'right Y value',
        PS2_LX:'left X value',
        PS2_LY:'left Y value',
        utf8togbk:'UTF8 to GBK %1',
        type_conversion:'Data type conversion %1 %2',
        LANG_MATH_STRING:'string',
        LANG_MATH_CHAR:'char',
        LANG_MATH_BYTE:'byte',
        LANG_MATH_INT:'int',
        LANG_MATH_LONG:'long',
        LANG_MATH_FLOAT:'float',
        LANG_MATH_WORD:'word'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_BUTTON_LABEL:'---按钮---',
        QH_SENSOR_LABEL:'---传感器---',
        QH_COLOR_LABEL:'---颜色---',
        QH_MPU6050_LABEL:'---陀螺仪---',
        QH_LED_LABEL:'---陀螺仪---',
        QH_RELAY_LABEL:'---继电器---',
        QH_BUZZER_LABEL:'---蜂鸣器---',
        QH_SERVO_LABEL:'---舵机---',
        QH_DCMOTO_LABEL:'---直流电机---',
        QH_SYNTHESIS_LABEL:'---语音合成---',
        QH_RECOGNITION_LABEL:'---语音识别---',
        QH_IR_LABEL:'---红外---',
        QH_BLUETOOTH_LABEL:'---蓝牙---',
        QH_CLASS_BLUETOOTH_LABEL:'---经典蓝牙---',
        QH_BLEKEYBOARD_LABEL:'---蓝牙键盘---',
        QH_SERIAL_LABEL:'---串口---',
        QH_ANNOTATION_LABEL:'---注释---',
        QH_VARIABLE_LABEL:'---变量---',
        QH_SCOOP_LABEL:'---多任务---',
        QH_OPERATOR_LABEL:'---运算---',
        QH_WEATHER_LABEL:'---天气---',
        QH_TIMER_LABEL:'---定时器---',
        QH_C02_COLOR_SCREEN_CATEGORY:'彩屏',
        QH_C02_SENSOR_CATEGORY:'传感器',
        QH_ACTUATOR_CATEGORY:'执行器',
        QH_SPEECH_CATEGORY:'语音',
        QH_COMMUNICATE_CATEGORY:'通讯',
        QH_MP3_CATEGORY:'MP3',
        QH_SMG_CATEGORY:'数码管',
        QH_OLED_CATEGORY:'OLED',
        QH_SDISPLAY_CATEGORY:'小彩屏',
        QH_LCD_CATEGORY:'LCD',
        QH_HDISPLAY_CATEGORY:'掌控屏',
        QH_STORAGE_CATEGORY:'储存',
        QH_OTHER_CATEGORY:'其它',
        DHT_INIT: '初始化 dht %1 引脚 %2 型号 %3',
        QDP_blink_32:'学习二维码',
        QDP_esp32_display_samll_init:'彩屏初始化 %1 端口 %2 波特率 %3',
        QDP_esp32_display_samll_refresh_display:'%1 彩屏刷新显示 %2',
        QDP_esp32_display_samll_HV:'彩屏方向 端口 %1 %2',
        QDP_display_samll_HV0:'竖屏90度',
        QDP_display_samll_HV1:'横屏90度',
        QDP_display_samll_HV2:'横屏180度',
        QDP_display_samll_HV3:'竖屏270度',
        QDP_esp32_display_samll_BL:'彩屏亮度 端口 %1 亮度0~255 %2',
        QDP_esp32_display_samll_clr:'颜色 端口 %1 %2 颜色 0~63 %3',
        QDP_display_samll_clr1:'刷屏',
        QDP_display_samll_clr2:'背景',
        QDP_esp32_display_samll_pic:'图片显示 端口 %1 %2 地址 %3 起点 X %4 Y %5 宽 %6 高 %7',
        QDP_display_samll_pic0:'正常',
        QDP_display_samll_pic1:'透明',
        QDP_esp32_customize_display_define_bitmap_data:'彩屏 图像名称 %1 图像数据 %2',
        QDP_esp32_customize_display:'彩屏自定义显示 端口 %1 图像名称 %2 起点 X %3 Y %4 宽 %5 高 %6 颜色 0~63 %7',
        QDP_esp32_display_samll_PS:'画点 端口 %1 X %2 Y %3 颜色 0~63 %4',
        QDP_esp32_display_samll_PL:'画线/框 端口 %1 %2 起点 X %3 Y %4 终点 X %5 Y %6 颜色 0~63 %7',
        QDP_display_samll_pl1:'画线',
        QDP_display_samll_pl2:'空心框',
        QDP_display_samll_pl3:'实心框',
        QDP_esp32_display_samll_CIR:'画圆 端口 %1 %2 圆心 X %3 Y %4 半径 %5 颜色 0~63 %6',
        MIXLY_QDP_displayhollowround:'空心',
        MIXLY_QDP_displaysolidround:'实心',
        QDP_esp32_display_samll_DC:'文本 端口 %1 字号 %2 颜色 0~63 %3 起点 X %4 Y %5 内容 %6',
        QDP_esp32_display_samll_SBCDC:'带底色文本 端口 %1 字号 %2 底色 %3 颜色 0~63 %4 起点 X %5 Y %6 内容 %7',
        QDP_esp32_display_samll_order:'自定义指令 端口 %1 %2',
        QDP_esp32_display_samll_btl:'彩屏波特率 端口 %1 %2',
        QDP_inout_esp32_touchRead:'触摸 管脚 # %1 的值',
        QDP_inout_esp32_touchEvents:'触摸事件 管脚# %1 模式 %2 ',
        MIXLY_ESP32_TOUCH_Events_changed:'改变',
        MIXLY_ESP32_TOUCH_Events_touching:'按住',
        MIXLY_ESP32_TOUCH_Events_touched:'单按',
        qdp_esp32_buttonl:'按钮 端口 %1',
        qdp_esp32_buttonx:'左或右 按钮 端口 %1',
        qdp_esp32_buttonfuction1:'启用多功能按钮 端口 %1',
        qdp_esp32_button1:'多功能按钮 端口 %1 触发方式 %2',
        MIXLY_QDP_BUTTONSingleClick:'单击',
        MIXLY_QDP_BUTTONDoubleClick:'双击',
        MIXLY_QDP_BUTTONTripleClick:'三击',
        MIXLY_QDP_BUTTONSingleLongClick:'长按',
        MIXLY_QDP_BUTTONDoubleLongClick:'单击后长按',
        MIXLY_QDP_BUTTONTripleLongClick:'双击后长按',
        qdp_esp32_chaoshengbo:'超声波测距 端口 %1 单位 %2',
        qdp_esp32_chaoshengboI2C:'QH 超声波测距(IIC)',
        qdp_esp32_chaoshengboSerial:'QH 超声波测距 %1 端口 %2',
        qdp_esp32_grayscale:'巡线 端口 %1 左路 %2 右路 %3',
        qdp_esp32_lightSensor:'光线传感器 端口 %1',
        qdp_esp32_sound:'声音传感器 端口 %1',
        qdp_esp32_potentiometer:'电位传感器 端口 %1',
        qdp_esp32_Soilmoisture:'土壤湿度传感器 端口 %1',
        qdp_esp32_dht11:'温湿度传感器 端口 %1 参数 %2',
        QH_Temperature:'温度',
        QH_Humidity:'湿度',
        qdp_esp32_yscgq:'初始化颜色识别 延时 %1 MS 光敏增益 %2 倍 值 %3 I2C地址0x29',
        QH_noPrint:'不打印',
        QH_Print:'打印',
        qdp_yscgq2:'获取颜色值 %1',
        qdp_yscgq3:'颜色 如果 %1 = %2 偏差 ± %3',
        QDP_ESP32_MPU6050_update:'启用陀螺仪(IIC)刷新数据',
        QDP_ESP32_MPU6050_GETDATA:'读取陀螺仪的值 %1',
        QH_Accel_X:"X轴加速度", 
        QH_Accel_Y:"Y轴加速度", 
        QH_Accel_Z:"Z轴加速度",
        QH_Gyro_X:"X轴角度",
        QH_Gyro_Y:"Y轴角度",
        QH_Gyro_Z:"Z轴角度",
        QH_readTempC:"温度",
        QDP_ESP32_hallRead:'EPS32片内霍尔值',
        qdp_esp32_ledlight:'LED 引脚 %1 状态 %2',
        qdp_esp32_read_ledlight:'读取 LED 引脚 %1',
        qdp_esp32_ledlight3:'LED 引脚 %1 值(0~255) %2',
        qdp_esp32_relay:'继电器 引脚 %1 状态 %2',
        qdp_esp32_read_relay:'读取 继电器 引脚 %1 ',
        rgb_esp32_led:'RGB LED 端口 %1 总数 %2  灯号 %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED 端口 %1 总数 %2  灯号 %3 颜色 %4',
        qdp_esp32_buzzer3:'蜂鸣器 端口 %1 频率 %2 持续时间 %3 通道 %4',
        qdp_esp32_buzzer_music:'蜂鸣器 端口 %1 演奏音乐 %2 通道 %3',
        qdp_esp32_motor:'直流电机 端口 %1 连接 %2 速度(-255~255) %3',
        qdp_esp32_servomotor360:'舵机360° 端口 %1 方向 %2 速度(0~10) %3',
        QH_CW:'正转',
        QH_CCW:'反转',
        qdp_esp32_servomotor2:'舵机180° 端口 %1 角度(0~180) %2 ',
        qdp_esp32_servomotorread:'舵机读取角度 端口 %1',
        qdp_esp32_servomotorPWM_set180:'舵机板180° 板号 %1 [参数设置] PWM下限值 范围(1-4095) %2 PWM 上限值 范围(2-4096) %3',
		qdp_esp32_servomotorPWM:'舵机板180° 板号 %1 舵机号(0~15) %2 角度 %3 ',
		qdp_esp32_servomotorPWM_set360:'舵机板360° 板号 %1 [参数设置] PWM停止值 %2 PWM 正转下限值  %3 PWM 正转上限值  %4 PWM 反转下限值  %5 PWM 反转上限值  %6 ',
		qdp_esp32_servomotorPWM360:'舵机板360° 板号 %1 方向 %2 舵机号(0-15)  %3 速度(0-10) %4',
        QDP32_ASR_SendData:'发送到齐护语音识别 端口 %1 指令 %2',
        QDP32_ASR_ReceiveData:'齐护语音识别 开启 端口 %1',
        QDP32_ASR_CompareData:'齐护语音识别到 端口 %1 指令 %2',
        speech_recognition_initialization:'AI语音识别初始化 端口 %1 授权码 %2',
        speech_recognition:'AI语音识别返回结果 目标语言 %1',
        AI_SPEECH_RECOGNITION3:'普通话',
        AI_SPEECH_RECOGNITION4:'普通话/简单英语',
        AI_SPEECH_RECOGNITION5:'英语',
        AI_SPEECH_RECOGNITION6:'粤语',
        identification_switch:'AI 语音识别录音停止',
        qdp_esp32_QF_hc_init:'语音合成 初始化 %1 端口 %2',
        qdp_esp32_QF_hc:'语音合成 发音人 %1 中断 %2 音量(0-11) %3 语速(0-11) %4 语调(0-11) %5 内容 %6',
        QH_Donotinterrupt:'不中断',
        QH_Interruptible:'中断',
        qdp_esp32_QF_sound:'播放提示音 类型 %1 编号(01~25) %2',
        qdp_esp32_QF_stophc:'停止合成',
        qdp_esp32_QF_startstopsb:'开启语音识别 播报识别 %1 ',
        QH_Sayresult:'播报识别结果',
        QH_NoSayresult:'不播报识别结果',
        qdp_esp32_QF_sbjg:'识别结果 识别到 %1',
        qdp_esp32_ir_re2:'红外遥控 RC5 端口 %1 按键 %2 模式 %3',
        QH_IrPress:'按下',
        QH_IrPressOn:'按住',
        qdp_ESP32_ir_recv_raw:'红外接收转码 端口 %1',
        qdp_esp32_ir_send_nec:'红外发射 %1 端口 %2 数值 %3',
        QDP_esp32_ir_send_raw:'红外发射 端口  %1  %2 数组 %3 数组长度 %4 频率 %5',
        qdp_esp32_BT_START:'启用蓝牙接收 名称 %1 %2',
        qdp_esp32_BT_button:'蓝牙按钮 %1',
        qdp_esp32_BT_variable:'蓝牙变量 %1',
        qdp_esp32_BT_print:'蓝牙发送变量 变量1 %1 变量2 %2 变量3 %3 变量4 %4 变量5 %5',
        qdp_esp32_BT_MASTER_CONNECT:'蓝牙Master连接 从机 %1  %2 %3',
        QDPROBOT_NAME:'名称',
        qdp_esp32_BT_MASTER_AVAILABLE:'蓝牙Master是否有数据可读',
        qdp_esp32_BT_MASTER_CONNECTED:'蓝牙Master是否连接? 超时 %1',
        qdp_esp32_BT_MASTER_CONNECT_CONTROL:'蓝牙Master连接控制 %1',
        QDPROBOT_CONNECT:'连接',
        QDPROBOT_DISCONNECT:'断开',
        qdp_esp32_BT_MASTER_READ:'蓝牙Master读取数据',
        qdp_esp32_BT_MASTER_WRITE:'蓝牙Master写数据 %1 %2',
        qdp_esp32_serial_jieshouzhi:'串口接收数据比较 端口 %1 如果数据= %2',
        qdp_esp32_serial_fasong:'串口发送 端口 %1 模式 %2 内容 %3',
        QH_SERIAL_WRITE:'原始输出',
        QH_SERIAL_PRINT:'打印',
        QH_SERIAL_PRINTLN:'打印(自动换行)',
        qdp_esp32_serial_jieshou:'串口接收 端口 %1 返回字符串',
        qdp_esp32_serial_suju:'串口有数据可读 端口 %1',
        esp32_BleKeyboard_init:'蓝牙键盘初始化 设备名称 %1 设备厂商 %2',
        esp32_BleKeyboard_isConnected:'蓝牙键盘启用 已连接?',
        esp32_BleKeyboard_KeyValue:'键值 %1',
        esp32_BleKeyboard_write_press:'蓝牙键盘 %1 键值 ‘ %2 ’',
        esp32_BleKeyboard_print :'打印',
        esp32_BleKeyboard_write :'按下',
        esp32_BleKeyboard_press :'按住',
        esp32_BleKeyboard_release :'释放',
        esp32_BleKeyboard_releaseAll :'释放所有',
        esp32_Mp3_init:'Mp3 初始化 %1 端口 %2',
        qdp_esp32_MP3_bofangx:'播放指定 音量(0-30) %1 曲目 %2',
        qdp_esp32_MP3_yingliang:'音量调节 音量(0-30) %1',
        qdp_esp32_MP3_loopplay:'循环播放 音量(0-30) %1 曲目 %2',
        qdp_esp32_MP3_startpause:'播放/暂停 模式 %1',
        QH_START:'播放',
        QH_PAUSE:'暂停',
        qdp_esp32_MP3_previous_next:'上一首/下一首 模式 %1',
        QH_PREVIOUS:'上一首',
        QH_NEXT:'下一首',
        qdp_esp32_MP3_play:'播放音效 音效 %1 音量(0-30) %2',
        QH_play1:'1笑声',
        QH_play2:'2哭声',
        QH_play3:'3坦克',
        QH_play4:'4扫射',
        QH_play5:'5枪声',
        QH_play6:'6变形',
        QH_play7:'7加速',
        QH_play8:'8刹车',
        QH_play9:'9飞行',
        QH_play10:'10直升机',
        QH_play11:'11猫',
        QH_play12:'12狗',
        QH_play13:'13老虎',
        QH_play14:'14鸡',
        qdp_ESP32_define_mp3_directory:'定义MP3 SD卡文件目录 %1 ',
        qdp_ESP32_mp3_designated_play:'模式 %1 音量(0-30) %2 曲目 %3',
        QH_BOFANGX:'播放指定',
        QH_LOOPPLAY:'循环播放',
        qdp_esp32_display:'数码管 端口 %1 %2 显示 %3',
        qdp_esp32_display_no:'整数',
        qdp_esp32_display_no2:'字母',
        qdp_esp32_display_clear:'数码管 清屏 端口 %1',
        qdp_esp32_displayoff:'数码管 关闭 端口 %1',
        esp32_oled_init:'OLED 初始化 管脚# %1',
        esp32_oled_page:'%1 OLED 刷新页面',
        esp32_oled_showBitmap:'OLED 显示图像 起点 X %1 Y %2 宽度 %3 高度 %4 图像名称 %5',
        esp32_oled_set_EN_Font:'OLED 设置英文字体 %1 字号 %2 字形 %3',
        esp32_oled_set_CN_Font:'OLED 设置中文字体 %1 字号 %2',
        OLED_FONT_chinese1:'宋体小字体集1(411字)',
        OLED_FONT_chinese2:'宋体小字体集2(574字)',
        OLED_FONT_chinese3:'宋体小字体集3(993字)',
        OLED_FONT_gb2312a:'宋体大字体集A(4041字)',
        OLED_FONT_gb2312b:'宋体大字体集B(4531字)',
        OLED_FONT_gb2312:'宋体全集(7539字)',
        esp32_oled_print:'OLED 显示文本 起点 X %1 Y %2 内容 %3',
        tool_modulus_show:'图像名称 %1 [%2] 保存到 flash %3 %4',
        tool_modulus:'点阵格式 %1 取模方式 %2 取模走向 %3 字体 %4 字号 %5 px 宽 %6 px 高 %7 px 内容 %8',
        esp32_oled_clear:'OLED  清屏 ',
        esp32_u8g2_setContrast:'OLED  背光亮度 %1',
        esp32_oled_face:'OLED 显示图像 起点 X %1 Y %2 内置图标 %3',
        esp32_oled_drawPixel:'OLED 画点 起点 X %1 Y %2 ',
        esp32_oled_drawLine:'OLED 画线 起点 X %1 Y %2 终点 X %3 Y %4',
        esp32_oled_draw_Str_Line:'OLED 画直线 起点 X %1 Y %2 长度 X %3 模式 %4',
        QH_OLED_HOR:'水平',
        QH_OLED_VER:'垂直',
        esp32_oled_drawFrame:'OLED 画矩形 模式 %1 起点 X %2 Y %3 宽  %4 高 %5',
        esp32_oled_drawRFrame:'OLED 画圆角矩形 模式 %1 起点 X %2 Y %3 宽  %4 高 %5 半径 %6',
        esp32_oled_drawCircle:'OLED 画圆 模式 %1 圆心 X %2 Y %3 半径  %4 类型 %5',
        QH_OLED_WHOLE_CICILE:'整圆',
        QH_OLED_UP_R:'右上',
        QH_OLED_UP_L:'左上',
        QH_OLED_LOW_R:'右下',
        QH_OLED_LOW_L:'左下',
        esp32_oled_drawEllipse:'OLED 画椭圆 模式 %1 圆心 X %2 Y %3 半径 X %4 Y %5 类型 %6',
        QH_OLED_HOLLOW:'空心',
        QH_OLED_SOLID:'实心',
        esp32_oled_drawTriangle:'OLED 画三角形 A点 X %1 Y %2 B点 X %3 Y %4 C点 X %5 Y %6',
        group_lcd_init2:'初始化 LCD %1 名称 %2 设备地址 %3 SCL %4 SDA %5',
        group_lcd_print:'LCD %1 打印行1 %2 打印行2 %3',
        group_lcd_print2:'LCD %1 在第 %2 行第 %3 列 打印 %4',
        group_lcd_power:'LCD %1 类型 %2',
        QH_ON:'开',
        QH_OFF:'关',
        QH_LCD_STAT_CURSOR:'有光标',
        QH_LCD_STAT_NOCURSOR:'无光标',
        QH_LCD_STAT_BLINK:'闪烁',
        QH_LCD_STAT_NOBLINK:'不闪烁',
        QH_LCD_STAT_CLEAR:'清屏',
        QH_LCD_NOBACKLIGHT:'关闭背光',
        QH_LCD_BACKLIGHT:'打开背光',
        qdp_esp32_ZKDisplay_init:'掌控屏 初始化 端口 %1',
        qdp_esp32_display_START:' %1 启用接收屏数据 ',
        qdp_esp32_display_button:'屏按钮 = %1',
        qdp_display_variable:'屏变量  %1',
        qdp_display_print:'发送变量到屏 V %1 值 %2',
        qdp_zkpdisplay_sleep:'屏睡眠  %1',
        QH_displaysleep1:'睡眠',
        QH_displaysleep0:'唤醒',
        qdp_zkpdisplay_buzzer:'屏蜂鸣器  频率 %1 音量(0-100) %2',
        qdp_zkpdisplay_clscolor:'颜色刷屏  颜色 %1',
        qdp_zkpdisplay_color:'颜色 %1',
        qdp_zkpdisplay_pic:'表情刷屏  %1',
        QH_displaypic1:'爱心',
        QH_displaypic2:'惊讶',
        QH_displaypic3:'伤心',
        QH_displaypic4:'捂脸',
        QH_displaypic5:'笑脸',
        QH_displaypic6:'晕',
        QH_displaypic7:'眨眼',
        QH_displaypic8:'赞',
        QH_displaypic9:'学习二维码',
        qdp_zkpdisplay_page:'页面跳转  %1',
        QH_displaypage1:'主菜单',
        QH_displaypage2:'遥控/滑块',
        QH_displaypage3:'遥控/变量',
        QH_displaypage4:'滑块',
        QH_displaypage5:'变量V',
        QH_displaypage6:'按键',
        QH_displaypage7:'串口',
        QH_displaypage8:'随机数',
        QH_displaypage9:'空白页',
        qdp_zkpdisplay_drawinground:'画圆  类型 %1 X %2 Y %3 R %4 十进制颜色 %5',
        QH_displaysolidround:'实心圆',
        QH_displayhollowround:'空心圆',
        qdp_zkpdisplay_function1:'画图  类型 %1 X %2 Y %3 X2W %4 Y2H %5 十进制颜色 %6',
        QH_displayfunction1fill:'区域填充',
        QH_displayfunction1line:'画线',
        QH_displayfunction1draw:'画矩形',
        qdp_zkpdisplay_TEXT:'文字信息  填充 %1 X %2 Y %3 W %4 H %5 文字颜色 %6 背景颜色 %7 内容 %8',
        QH_displaybackcolor0:'切图',
        QH_displaybackcolor1:'单色',
        QH_displaybackcolor2:'图片',
        QH_displaybackcolor3:'无背景',
        qdp_zkpdisplay_TEXT_CN:'文字信息  填充 %1 X %2 Y %3 W %4 H %5 文字颜色 %6 背景颜色 %7 内容 %8',
        qdp_zkpdisplay_order:'自定义指令  %1',
        QDP_Preferences_Open:'掉电存储 打开文件 %1 %2',
        QDP_Preferences_Read:'掉电存储 读取 键名 %1 数据类型 %2 ',
        QDP_Preferences_Write:'掉电存储 写入 键名 %1 数据类型 %2 值 %3',
        QDP_Preferences_Close:'掉电存储 关闭文件',
        QDP_Preferences_R_W:'读/写',
        QDP_Preferences_R:'只读',
        QDP_esp32_smartConfig_:'Web一键配网',
        QDP_esp32_config_access_point:'ESP 开启WIFI热点 名称 %1 密码 :%2',
        QDP_esp32_config_station:'ESP 连接WIFI 名称 %1 密码 :%2',
        QDP_WiFi_status:'WIFI连接状态',
        QDP_esp32_wifi_IP:'IP 地址',
        QDP32_mac_address:'MAC 地址',
        QDP_esp32_config_multi_station:'ESP 配置多站点 WIFI 名称 %1 密码 :%2',
        QDP_multi_status:'WIFI多站点连接状态',
        QDP_esp32_config_domaine_name_mDNS:'ESP 配置域名http:// %1 .local',
        qdp_ESP32_set_mac_address:'设置MAC地址 %1',
        QDP32_esp_now_send:'%1 ESPNOW发送 MAC %2 数据 %3 %4 发送成功 %5 发送失败 %6',
        QDP32_esp_now_receive:'%1 ESPNOW接收 %2  %3',
        qdpWeatherGetToday:'获取今日数据 %1',
        TodayShidu:'湿度',
        TodayQuality:'空气质量',
        TodayWendu:'温度',
        qdpWeatherGetForecast:'获取15日数据 %1 日期(0~14) %2',
        ForecastDate:'日期',
        ForecastHigh:'最高温',
        ForecastLow:'最低温',
        ForecastYmd:'年月日',
        ForecastWeek:'周',
        ForecastAqi:'空气指数',
        ForecastFx:'风向',
        ForecastFl:'风力',
        ForecastType:'天气',
        qdpWeatherGet:'刷新天气 城市 %1 %2',
        QH_variables_declare:'声明 %1 变量 类型 %2 名称 %3 赋值为 %4',
        QH_variables_set:'设置 %1 变量 为 %2',
        QH_variables_change:'设置 %1 变量 模式 %2',
        QH_global:'全局',
        QH_local:'局部',
        QH_MATH_INT: '整数',
        QH_MATH_LONG: '长整数',
        QH_MATH_FLOAT: '小数',
        QH_MATH_BOOLEAN: '布尔',
        QH_MATH_BYTE: '字节',
        QH_MATH_CHAR: '字符',
        QH_MATH_STRING: '字符串',
        QH_MATH_UNSIGNED_INT: '无符号整数',
        QH_MATH_WORD: '字',
        QH_MATH_UNSIGNED_LONG: '无符号长整数',
        QH_MATH_UNSIGNED_CHAR: '无符号字符',
        QH_MATH_DOUBLE: '双精度浮点数',
        controls_runnig_core: '多任务调度器 %1 setup',
        control_core_delay: '多任务调度器延时 %1 ms',
        QH_EQU:'等于(==)',
        QH_NEQ:'不等于(!=)',
        QH_GTR:'大于(>)',
        QH_LSS:'小于(<)',
        QH_GEQ:'大于等于(>=)',
        QH_LEQ:'小于等于(<=)',
        QH_bit_operator:'位运算 %1 %2 %3',
        QH_AND:'与(&))',
        QH_OR:'或(|)',
        QH_XOR:'异或(^)',
        QH_SHIFT_R:'右移(>>)',
        QH_SHIFT_L:'左移(<<)',
        QH_constrain:'约束 %1 最小 %2 最大 %3 ',
        QH_map:'映射 %1 从[ %2 , %3 ] 到 [ %4 , %5 ]',
        C02_controls_hw_timer:'%1 硬件定时器 编号# %2 %3 执行 %4',
        C02_controls_hw_timer_start:'硬件定时器 编号# %1 启动 每隔 %2 毫秒 模式 %3',
        C02_controls_hw_timer_stop:'硬件定时器 编号# %1 停止',
        MIXLY_PYTHON_ONE_SHOT:'单次触发',
        MIXLY_PYTHON_PERIODIC:'多次触发',
        NTP_server:'NTP时间服务器 地址 %1 时区 %2 同步间隔 %3',
        NTP_server_get_time:'NTP获取 %1',
        MIXLY_YEAR:'年',
        MIXLY_MONTH:'月',
        MIXLY_DAY:'日',
        MIXLY_HOUR:'时',
        MIXLY_MINUTE:'分',
        MIXLY_SECOND:'秒',
        qdp_PS2_init:'初始化PS2 DAT %1 CMD %2 SEL %3 CLK %4 振动反馈 %5 按压反馈 %6',
        qdp_PS2_update:'PS2手柄刷新数据 振动电机1(true/false) %1 振动电机2(0~255) %2',
        qdp_PS2_Button:'PS2 按键 %1 状态 %2',
        qdp_PS2_stk:'PS2摇杆 %1',
        MIXLY_BUTTON_HOLD:'按住',
        MIXLY_BUTTON_PRESSED:'按下',
        MIXLY_BUTTON_RELEASED:'松开',
        MIXLY_CHANGE:'改变',
        PS2_RX:'右侧X值',
        PS2_RY:'右侧Y值',
        PS2_LX:'左侧X值',
        PS2_LY:'左侧Y值',
        utf8togbk:'UTF8转GBK %1',
        type_conversion:'数据类型转换 %1 %2',
        LANG_MATH_STRING:'字符串',
        LANG_MATH_CHAR:'字符',
        LANG_MATH_BYTE:'字节',
        LANG_MATH_INT:'整数',
        LANG_MATH_LONG:'长整数',
        LANG_MATH_FLOAT:'浮点',
        LANG_MATH_WORD:'字'
    });
    return Blockly;
}

exports = addMsg;
