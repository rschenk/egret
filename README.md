# Egret

A 36 key Choc monoblock keyboard that's wireless compatible, hot swappable, gasket mounted, and very thin. Inspired by the [chocV](https://github.com/brickbots/chocV).

The Egret shares the super-thin constuction method of the chocV and the [Horizon](https://github.com/skarrmann/horizon/) to make essentially the thinnest board physically possible with hotswap sockets.

## Features

* On/off slider switch and JST plug for battery power
* Totally flat bottom, so you can put it right on top of your laptop keyboard and Miyoku on the go
* LED underglow for wired mode, if underglow is your thing. It's very much my thing
* Two bottom plate options: lowpro mode for the thinnest board physically possible, or glowpro mode for epic underglow at the expense of a couple mm of thickess.

## Dockerized Ergogen

This board is generated with the amazing ergogen tool, then post-processed with KiCad and vector graphics drawing tools. I used several custom footrpints to pull off the "horizon construction" on the bottom plate. Since ergogen does not currently support adding footprints at runtime, I Dockerized it and copied my footprints into the image. The Dockerfile lives in `ergogen/container` and can be run with a little wrapper script I wrote in `ergogen/bin/ergogen`. 

To generate the board (which you should not need to unless you want to change something):

```shell
$ cd ergogen
$ bin/ergogen egret.yml
```

If you decide to edit a footprint, you'll need to remove the image and rebuild it.
```shell
# Only if you modify a footprint, rebuild the image like so:
$ docker image rm -f ergogen-egret && bin/ergogen egret.yml
```
