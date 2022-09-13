// Kailh Choc PG1350
// rschenk updated socket silk screen and outline from
//  https://github.com/daprice/keyswitches.pretty/blob/49083b8f0d1c8a68a1b5c4ac9bc81b3870e9aa68/Kailh_socket_PG1350.kicad_mod
//
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously
const bottom_plate_cutout_layer = "B.Adhes"

module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
    class: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    bottom_plate_cutouts: false,
    hotswap_vias: false,
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))

      ${'' /* user outline */}
      (fp_line (start -2.6 6.3) (end 2.6 6.3) (layer Eco2.User) (width 0.15))
      (fp_line (start -6.9 6.9) (end 6.9 6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start 2.6 3.1) (end 2.6 6.3) (layer Eco2.User) (width 0.15))
      (fp_line (start -2.6 3.1) (end -2.6 6.3) (layer Eco2.User) (width 0.15))
      (fp_line (start -6.9 6.9) (end -6.9 -6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start 2.6 3.1) (end -2.6 3.1) (layer Eco2.User) (width 0.15))
      (fp_line (start 6.9 -6.9) (end -6.9 -6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start 6.9 -6.9) (end 6.9 6.9) (layer Eco2.User) (width 0.15))

      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask ${p.param.bottom_plate_cutouts ? bottom_plate_cutout_layer : ''}))

      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask ${p.param.bottom_plate_cutouts ? bottom_plate_cutout_layer : ''}))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask ${p.param.bottom_plate_cutouts ? bottom_plate_cutout_layer : ''}))

      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      if(p.param.hotswap) {
        return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))

          ${'' /* net pads */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.net.from.str})
          (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.net.to.str})

          ${'' /* vias for easier routing */}
          ${ p.param.hotswap_vias ? `
          (pad 3 thru_hole circle (at ${def_neg}3.275 -3.9 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.from.str})
          (pad 4 thru_hole circle (at ${def_pos}8.275 -1.55 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.to.str})

          ${'' /* connect pad and via */}
          (pad 5 smd rect (at ${def_neg}3.275 -4.4 ${p.rot}) (size 0.25 1) (layers ${def_side}.Cu)  ${p.net.from.str})
          (pad 6 smd rect (at ${def_pos}8.275 -2.1 ${p.rot}) (size 0.25 1) (layers ${def_side}.Cu)  ${p.net.to.str})
          ` : ''}

          ${'' /* silk screen */}
          (fp_line (start ${def_pos}7 -5.6) (end ${def_pos}7 -6.2) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_neg}1.5 -3.7) (end ${def_pos}1 -3.7) (layer ${def_side}.SilkS) (width 0.15))
          (fp_arc  (start ${def_pos}1 -2.2) (end ${def_pos}2.5 -2.2) (angle ${def_neg}90) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}1.5 -8.2) (end ${def_pos}2 -7.7) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}2 -6.7) (end ${def_pos}2 -7.7) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}7 -6.2) (end ${def_pos}2.5 -6.2) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_neg}2 -4.2) (end ${def_neg}1.5 -3.7) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_neg}2 -7.7) (end ${def_neg}1.5 -8.2) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_neg}1.5 -8.2) (end ${def_pos}1.5 -8.2) (layer ${def_side}.SilkS) (width 0.15))
          (fp_arc  (start ${def_pos}2.5 -6.7) (end ${def_pos}2 -6.7) (angle ${def_neg}90) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}2.5 -2.2) (end ${def_pos}2.5 -1.5) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}2.5 -1.5) (end ${def_pos}7 -1.5) (layer ${def_side}.SilkS) (width 0.15))
          (fp_line (start ${def_pos}7 -1.5) (end ${def_pos}7 -2) (layer ${def_side}.SilkS) (width 0.15))

          ${'' /* bottom plate cutouts */}
          ${p.param.bottom_plate_cutouts ? hotswap_plate_cutout(def_neg, def_side) : ''}
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.from.str})
            (pad 2 thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.to.str})
          `
      }
    }
    if(p.param.reverse) {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    } else {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `
    }
  }
}

function hole_plate_cutout(x, y, d) {
  return `(fpcircle (center ${x} ${y}) (end ${x + d/2} ${y}) (layer B.Adhes)(width 0.15))`
}

function hotswap_plate_cutout(def_neg) {
  const offset = 0.1

  const layer = bottom_plate_cutout_layer
  const mirror = def_neg == '-' ? 1 : -1
  const points = [
    {x: -4.575, y: -7.250, dx: -1, dy: -1}, // pad1 tl
    {x: -2.00, y: -7.250, dx: -8, dy: -1},    // pad1 tr
    {x: -2.00, y: -7.7, dx: -8, dy: -3},  // pad1
    {x: -1.50, y: -8.2, dx: -8, dy: -3},  // pin1 top
    {x: 1.5, y: -8.2, dx: 3, dy: -3},
    {x: 2, y: -7.7, dx: 3, dy: -3},
    {x: 2, y: -6.7, dx: 3, dy: -5}, // top corner
    {x: 2.5, y: -6.2, dx: 5, dy: -3}, // top corner
    {x: 7, y: -6.2, dx: 8, dy: -3}, // pin2 top
    {x: 7, y: -5.05, dx: 8, dy: -1}, // pad2 tl
    {x: 9.575, y: -5.05, dx: 1, dy: -1}, // pad2 tr
    {x: 9.575, y: -2.45, dx: 1, dy: 1}, // pad2 br
    {x: 7, y: -2.45, dx: 8, dy: 1}, // pad2 bl
    {x: 7, y: -1.5, dx: 8, dy: 3}, // pin2 bot
    {x: 2.5, y: -1.5, dx: -3, dy: 3}, //
    {x: 2.5, y: -2.2, dx: -3, dy: 3}, // bot corner
    {x: 2.3, y: -2.95, dx: -3, dy: 3}, // bot corner
    {x: 1.75, y: -3.5, dx: -3, dy: 3}, // bot corner
    {x: 1, y: -3.7, dx: -3, dy: 3}, // bot corner
    {x: -1.5, y: -3.7, dx: -8, dy: 3}, // pin1 bot
    {x: -2.00, y: -4.2, dx: -8, dy: 3}, //
    {x: -2.00, y: -4.65, dx: -8, dy: 1}, // pad1 br
    {x: -4.575, y: -4.65, dx: -1, dy: 1}, // pad1 bl
  ]

  const point_list = points
    .map( ({x, y, dx, dy} = p) => ({x: x + dx * offset, y: y + dy * offset}) )
    .map( ({x, y}) => ({x: mirror * x, y}) )
    .map( ({x, y}) => `(xy ${x} ${y})` )
    .join(" ")

  return `(fp_poly (pts ${point_list}) (layer ${layer}) (width 0.15))`
}
