module.exports = {
  nets: {
      from: undefined,
      to: undefined
  },
  params: {
      class: 'D',
      through_hole: true,
      via: false,
      front: true,
      back: true,
  },
  body: p => `

  (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* diode symbols */}
      ${ p.param.front ?
        `
        (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
        ` : '' }
      ${ p.param.back ?
        `
        (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))
        ` : '' }

      ${ ''/* SMD pads */ }
      ${ p.param.front ?
        `
        (pad 1 smd rect (at -1.65 0 ${ p.rot }) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${ p.net.to.str })
        (pad 2 smd rect (at 1.65 0 ${ p.rot }) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${ p.net.from.str })
        ` : '' }

      ${ p.param.back ?
        `
        (pad 1 smd rect (at -1.65 0 ${ p.rot }) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${ p.net.to.str })
        (pad 2 smd rect (at 1.65 0 ${ p.rot }) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${ p.net.from.str })
        ` : '' }

      ${ p.param.through_hole === false ?
          p.param.via ?
          `
          ${''/* Vias next to smd pads */}
          (pad 3 thru_hole circle (at -2.6 1.1 ${ p.rot }) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.net.to.str})

          ${'' /* connect pad and via */}
          ${ p.param.front ? `(pad 4 smd rect (at -2.25 0.75 ${p.rot - 45}) (size 0.25 1) (layers F.Cu)  ${p.net.to.str})` : ''}
          ${ p.param.back ? `(pad 5 smd rect (at -2.25 0.75 ${p.rot - 45}) (size 0.25 1) (layers B.Cu)  ${p.net.to.str})` : ''}
          ` : ''
      :
          `
           ${''/* THT terminals */}
           (pad 1 thru_hole circle (at 3.81 0 ${ p.rot }) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${ p.net.from.str })
          `
      }
  )
  `
}
