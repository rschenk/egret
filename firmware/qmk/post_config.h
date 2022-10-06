#ifndef IOS_DEVICE_ENABLE
  // USB_MAX_POWER_CONSUMPTION value for this keyboard
  #define USB_MAX_POWER_CONSUMPTION 400
#else
  // fix iPhone and iPad power adapter issue
  // iOS device need lessthan 100
  #define USB_MAX_POWER_CONSUMPTION 100
#endif

#ifdef RGBLIGHT_ENABLE
  #ifndef IOS_DEVICE_ENABLE
    #ifndef RGBLIGHT_LIMIT_VAL
      #define RGBLIGHT_LIMIT_VAL 250
    #endif
    #ifndef RGBLIGHT_VAL_STEP
      #define RGBLIGHT_VAL_STEP 17
    #endif
  #else
    #ifndef RGBLIGHT_LIMIT_VAL
      #define RGBLIGHT_LIMIT_VAL 35
    #endif
    #ifndef RGBLIGHT_VAL_STEP
      #define RGBLIGHT_VAL_STEP 4
    #endif
  #endif
  #ifndef RGBLIGHT_HUE_STEP
    #define RGBLIGHT_HUE_STEP 10
  #endif
  #ifndef RGBLIGHT_SAT_STEP
    #define RGBLIGHT_SAT_STEP 17
  #endif
#endif
