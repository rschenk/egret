// Copyright 2022 Ryan Schenk (@rschenk)
// SPDX-License-Identifier: GPL-2.0-or-later

#pragma once

#define MATRIX_ROWS 4
#define MATRIX_COLS 10

#define MATRIX_ROW_PINS { F4, F5, D1, D0 }
#define MATRIX_COL_PINS { B5, B4, E6, D7, C6, F7, B1, B3, B2, B6 }

#define DIODE_DIRECTION COL2ROW

#define DEBOUNCE 5

#define RGB_DI_PIN D3

#ifdef RGBLIGHT_ENABLE
  #define RGBLED_NUM 11

  // remove
  #define RGBLIGHT_EFFECT_RAINBOW_SWIRL   // enable _only_ rainbow swirl
  #define RGBLIGHT_SLEEP                  // turn off LEDs when host sleeps
  #define RGBLIGHT_LAYERS                 // per-layer LED effects
  #define RGBLIGHT_DEFAULT_MODE RGBLIGHT_MODE_RAINBOW_SWIRL
  #define RGBLIGHT_DEFAULT_HUE 220        // purple rain
#endif
