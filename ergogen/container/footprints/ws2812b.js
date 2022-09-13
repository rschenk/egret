module.exports = {
  nets: {
      din: undefined,
      dout: undefined,
      VCC: 'VCC',
      GND: 'GND'
  },
  params: {
      class: 'LED',
      side: 'F'
  },
  body: p => {
    const def_pos = p.param.side == 'F' ? '' : '-'
    const def_neg = p.param.side == 'F' ? '-' : ''

    return `

  (module WS2812B (layer ${p.param.side}.Cu) (tedit 53BEE615)

    ${p.at /* parametric position */}

    (fp_text reference "${p.ref}" (at 0 -3.7 0) (layer ${p.param.side}.SilkS)
      ${'' /* p.ref_hide */}
      (effects (font (size 1 1) (thickness 0.2)) ${ p.param.side == 'F' ? '' : '(justify mirror)'})
    )
    (fp_text value VAL** (at 0 4.8) (layer ${p.param.side}.SilkS) hide
      (effects (font (size 1 1) (thickness 0.2)))
    )

    (fp_line (start ${def_neg}1 1) (end ${def_neg}1 -1) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}1 -1) (end ${def_pos}1 -1) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}1 -1) (end ${def_pos}1 0.5) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}1 0.5) (end ${def_pos}0.5 1) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}0.5 1) (end ${def_neg}1 1) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}1 2.5) (end ${def_pos}1 2.5) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}2.5 0.5) (end ${def_pos}2.5 -0.5) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}1 -2.5) (end ${def_pos}1 -2.5) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}2.5 0.5) (end ${def_neg}2.5 -0.5) (layer ${p.param.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}2.5 -2.1) (end ${def_pos}2.5 -2.5) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.5 1.2) (end ${def_pos}2.5 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.5 2.5) (end ${def_pos}2.5 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 -2.1) (end ${def_neg}2.5 -2.5) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 1.2) (end ${def_neg}2.5 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 2.5) (end ${def_neg}2.5 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 2.1) (end ${def_neg}2.7 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 1.2) (end ${def_neg}1.8 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 1.2) (end ${def_neg}1.8 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 2.1) (end ${def_neg}2.7 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 -2.1) (end ${def_neg}2.7 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 -1.2) (end ${def_neg}1.8 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 -1.2) (end ${def_neg}1.8 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 -2.1) (end ${def_neg}2.7 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 2.1) (end ${def_pos}1.8 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 2.1) (end ${def_pos}1.8 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 1.2) (end ${def_pos}2.7 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 1.2) (end ${def_pos}2.7 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 -1.2) (end ${def_pos}1.8 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 -1.2) (end ${def_pos}1.8 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 -2.1) (end ${def_pos}2.7 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 -2.1) (end ${def_pos}2.7 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 -2.5) (end ${def_pos}2.5 -2.5) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.5 2.5) (end ${def_neg}2.5 2.5) (layer Dwgs.User) (width 0.2))

    (pad 1 smd rect (at ${def_neg}2.4 -1.65 ${ p.rot }) (size 1.8 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${ p.net.VCC.str })
    (pad 2 smd rect (at ${def_neg}2.4 1.65 ${ p.rot }) (size 1.8 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${ p.net.dout.str })
    (pad 3 smd rect (at ${def_pos}2.4 1.65 ${ p.rot }) (size 1.8 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${ p.net.GND.str })
    (pad 4 smd rect (at ${def_pos}2.4 -1.65 ${ p.rot }) (size 1.8 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${ p.net.din.str })
  )

`}
}
