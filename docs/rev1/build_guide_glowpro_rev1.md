# Egret Glow-Profile Build Guide

## Required parts

### Parts for the case (laser cut)

The difference between the low-profile and the glow-profile model, aside from the LEDs, is the bottom plate(s). The top plate, top gasket, pcb, and bottom grip are the same between the two models. The lowpro model uses the lowpro bottom gasket, and the lowpro bottom plate.

The top and bottom plates are made from 1.5mm (1/16") acrylic and the top gasket is made from 0.7mm (1/32") silicone.

The bottom grip can be made from any sticky-back padded sheet, including silicone, epdm rubber, or eva foam. The bottom grip is somewhat optional. If you want to use the Egret only on your desk, then you can skip the bottom grip and just use the little silicone bumpers. However, for the lowest profile and the ability to use the keyboard directly on top of your laptop, I recommend the bottom grip layer.

Please note that *once you put LEDs on the PCB you are stuck with the glow-profile case,* the low-profile case won't fit.

### A note on hardware

There are two ways to build the case, either using wafer head screws or countersunk flat heads. The latter requires you to have a drill press and countersink bit, so if you don't have those, stop reading and go with the wafer heads.

Going with countersunk screws has the advantage of being cheaper, more readily available, and totally flat. In testing this board with the prototype LDSA keycaps, the wafer heads did interfere with the keycaps *ever so slightly,* which I and others reported in our feedback. It's not known at this time whether the designer of those keycaps will make the skirt slightly higher to clear wafer heads or not... so if that concerns you then countersink.

| Part                            | Quantity | Comments                                                     |
| ------------------------------- | -------- | ------------------------------------------------------------ |
| Egret top plate                 | 1        | 1.5mm (1/16") acrylic                                        |
| Egret lowpro bottom plate inner | 1        | 1.5mm (1/16") frosted acrylic. Make sure you use the correct file. I like this "satin ice" acrylic from [Canal Plastic](https://www.canalplastic.com/collections/acrylic-sheets/products/0d010-df-frosted-satin-ice-acrylic-sheet?variant=32918342606) |
| Egret lowpro bottom plate outer | 1        | 1.5mm (1/16") frosted acrylic, same as the inner layer.      |
| Egret cover plate               | 1        | 3mm or 1.5mm acrylic. If you go with 1.5, you'll probably want 4mm instead of the 6mm pan head screws below |
| Egret top gasket                | 1        | 0.7mm silicone [Amazon](https://www.amazon.com/gp/product/B088LKLSTG/) (what I used), or [McMaster](https://www.mcmaster.com/86465K21) (would probably work) |
| Egret bottom grip               | 1        | Many options, including: 1mm clear sticky-backed silicone [Amazon](https://www.amazon.com/dp/B01N311P9D) [McMaster](https://www.mcmaster.com/86465K34/), 1/64" black EPDM rubber [McMaster](https://www.mcmaster.com/8610K102), or 1mm EVA foam [Amazon](https://www.amazon.com/dp/B07T5L7756/). Note that all of these are laser-safe, neoprene rubber is not. For maximum glow I would choose clear silicone or white EVA. |
| 6mm M2 wafer head screws        | 12       | **Option 1 of 2.** Use this option if you do not have a drill press. [Metric Screws US](https://www.metricscrews.us/index.php?main_page=index&cPath=155_156_162&zenid=ehth7nvdt09u23fh2sd1oqksk7) has singles |
| 6mm M2 flat head screws         | 12       | **Option 2 of 2.** Use this option if you have a drill press and countersink bit, to get the flattest possible design and because they're cheaper and easier to get. [McMaster](https://www.mcmaster.com/screws/system-of-measurement~metric/thread-size~m2/length~6-mm/flat-head-screws-4/material~stainless-steel/) |
| 8mm M2 wafer head screws        | 4        | **Option 1 of 2.** Use this option if you do not have a drill press. [Metric Screws US](https://www.metricscrews.us/index.php?main_page=product_info&cPath=155_156_164&products_id=49&zenid=ehth7nvdt09u23fh2sd1oqksk7) has singles |
| 8mm M2 flat head screws         | 4        | **Option 2 of 2.** Use this option if you have a drill press and countersink bit, to get the flattest possible design and because they're cheaper and easier to get. [McMaster](https://www.mcmaster.com/screws/system-of-measurement~metric/thread-size~m2/length~8-mm/flat-head-screws-4/material~stainless-steel/) |
| 3mm M2 thraded inserts          | 8        | PEM MSO4-M2-3 [McMaster](https://www.mcmaster.com/92985A818/) |
| 8mm M2 standoffs                | 4        | [DigiKey](https://www.digikey.com/en/products/detail/würth-elektronik/970080244/9488540) or anywhere |

### Parts for the circuit board

| Part                        | Quantity | Comments                                                     |
| --------------------------- | -------- | ------------------------------------------------------------ |
| Egret PCB                   | 1        |                                                              |
| Pro-micro footprint MCU     | 1        | I used a [Nice!Nano](https://nicekeyboards.com/nice-nano/) on the wireless build and a [Bit-C](https://nullbits.co/bit-c/) on the wired |
| 12-pin socket headers       | 2        | Optional. Mill-Max 310 series for wireless ([DigiKey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/310-43-112-41-001000/1212186?s=N4IgTCBcDaIMwEYAMBaALHFCFnQlSSyhIAugL5A)), or low profile Mill-Max 315 series for wired ([DigiKey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/315-43-112-41-003000/4455232?s=N4IgTCBcDaIMwEYCsBaALHFCFnQlADAXEQSALoC%2BQA)) |
| Socket pins                 | 48       | Optional. Mill-Max 3320-0-00-15-00-00-03-0 [DigiKey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/3320-0-00-15-00-00-03-0/4147392?s=N4IgTCBcDaIMxzABgLSqagjAVje9caAOgC4gC6AvkA) or diode legs. Buy like 5 extras, you'll lose them. |
| LEDs                        | 11       | WS2812B 5050, aka Neopixels. There are several compatble chips, just makes sure you get the 5050 package. [DigiKey](https://www.digikey.com/en/products/detail/sparkfun-electronics/COM-16347/11630204) |
| Kailh Choc hot swap sockets | 36       | [DigiKey](https://www.digikey.com/en/products/detail/adafruit-industries-llc/5118/14671678) |
| Diodes                      | 36       | 1N4148W SOD123 [DigiKey](https://www.digikey.com/en/products/detail/smc-diode-solutions/1N4148W/6022450) |
| Tactile reset switch        | 1        | 6.0 x 3.5mm, same one used on Corne. TL1107AF180WQ [DigiKey](https://www.digikey.com/en/products/detail/e-switch/TL1107AF180WQ/378977?s=N4IgTCBcDaICoBkCMSAMB2AggMSQDlQHUBFEAXQF8g) are black, 1489 [DigiKey](https://www.digikey.com/en/products/detail/adafruit-industries-llc/1489/10670004) are white |
| Slider switch               | 1        | Required for wireless, not needed for wired. MSK-12C02, or pretty sure CUS-12TB ([Digikey](https://www.digikey.com/en/products/detail/nidec-copal-electronics/CUS-12TB/1124222?s=N4IgTCBcDaIMYFcDOBaAjGALgIxAXQF8g)) will work but I haven't tried it. |
| JST PH2.0 battery jack      | 1        | Required for wireless, not needed for wired. S2B-PH-K-S(LF)(SN) [DigiKey](https://www.digikey.com/en/products/detail/jst-sales-america-inc/S2B-PH-K-S-LF-SN/926626) |

## PCB Assembly

I like to paint the edges of my PCBs with paint marker to match whatever case I'm putting it in, so consider doing that now.

Gotta start somewhere, lets do the power switch first. Put a small dot of solder on one of the pads on the board, place the reset switch, then heat that dot to tack it in place. Now with the switch tacked in place you can do the rest of the pads.

At this point, you can choose to etiher solder the LEDs on one-at-a-time and test them as you go, or you can yolo them all at once and test them later. If you choose to do one-at-a-time then you'll need to solder on the MCU now and flash it. I did this once but it was really annoying, so subsequent builds I have just soldered them all at once. I put the LED numbers on the silk screen for easy debugging. 

Next solder on all the LEDs. There is a great [video of how to solder these LEDs](https://twitter.com/GTIPS_SH/status/1204244088867807234?s=20) courtesy of Reviung. Please pay attention to the silk screen on the board, there is a little notch cut out of the component, that will need to align with the corresponding notch on the silk screen. I like about 300ºC on the soldering iron. 

Next solder on all the hotswap sockets in a similar fashion.

Flip the board over and solder on all the diodes. Mind the direction.

Finally, solder on the JST connector, reset button, and headers for the MCU board.

## Case Assembly

If using counter sunk screws, then drill counter sinks on all the holes on the top plate. Also counter sink the four center holes on the bottom plate, and the four holes on the MCU cover plate. To counter sink acrylic, I like the five-flute bits, use a low speed and light pressure and it will cut like butter. Skip this step if using wafer heads.

Press the eight threaded inserts into the bottom plate with the flange on the bottom side.

Next apply the bottom grip to the bottom plate. The best way to do this is with a spray bottle of water with a small drop of soap. Spray a good mist of water onto the bottom plate, peel the backing paper off the grip adhesive, spray a good mist of water on the adhesive, then float the grip into place. More water is better than less. Once it's lined up, lightly squeegee the water out with an old credit card or similar. This technique is how people who do vinyl graphics get a perfect placement every time. Obviously do this before you put the bottom plate onto the PCB.

While the above is drying, install the switches and MCU. I like to do this now with the PCB sitting on the table, so that the force of setting the switche home is directed into the tabletop instaed of the solder holding the hotswap sockets on. Put the assembled PCB onto a table, put on the top gasket and top plate. You can slide a few screws into the holes to align all the layers. Then start installing switches. I like to install some on the corners and thumb cluster to help align everything, then do them all.

Install the MCU and battery. Please be careful with the battery polarity, it is marked on the PCB with a small  `+`, and is the so-called standard (according to Adafruit) of the positive (red) wire on the left. 

Once the bottom plate is completely dry from the above, place the inner bottom plate (be careful, it only goes on one way), and the outer bottom plate. Note that unlike the low-profile case, there is no bottom gasket between the pcb and the plate. Install the screws down from the top plate, then the ones for the MCU cover and standoffs. Install the cover and you're good to go.

## Battery and Power

The battery connector polarity is marked on the PCB. The positive (red) wire should be on the left side of the connector.

The power slider switch goes to the right-hand side for on, left-hand side for off when viewed from the keys side of the board.

And yes, you totally can run the glow-profile model with a battery and a Nice Nano, but be aware that running the LEDs off battery power will drain your battery extremely rapidly. What I do is only turn on the LEDs when I am plugged into USB. Use ZMK's [external power control](https://zmk.dev/docs/behaviors/power#external-power-control-command-defines) to turn the LEDs on and off by adding  `&ext_power EP_TOG` to your keymap.
