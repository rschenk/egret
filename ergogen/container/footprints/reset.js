/* Combination of Ergogen's button footprint
 *   [link](https://github.com/ergogen/ergogen/blob/c12e8d288e6eb9184b30e601398883830bce7b5b/src/footprints/button.js)
 * and foostan's reset switch
 *   [link](https://github.com/foostan/kbd/blob/69e615ed677a6f4eb16d0626eccaa4dea8a6872e/kicad-footprints/kbd.pretty/ResetSW_1side.kicad_mod)
 */
const bottom_plate_cutout_layer = "B.Adhes"

module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Button
        side: 'F',
        bottom_plate_cutout_layer: false,
    },
    body: p => `

    (module ResetSW_1side (layer F.Cu) (tedit 5F8C82CB)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 2.55) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 -2.55) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* outline */}
        (fp_line (start -2.85 1.6) (end 2.85 1.6) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.85 1.6) (end 2.85 1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.85 1.6) (end -2.85 1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.85 -1.6) (end -2.85 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.85 -1.6) (end 2.85 -1.6) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.85 -1.6) (end 2.85 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_text user RESET (at 0 0 ${p.rot}) (layer ${p.param.side}.SilkS) (effects (font (size 0.75 0.75) (thickness 0.15))))

        ${'' /* pins */}
        (pad 1 thru_hole circle (at 3.25 0) (size 2 2) (drill 1.3) (layers *.Cu *.Mask) ${p.net.from.str})
        (pad 2 thru_hole circle (at -3.25 0) (size 2 2) (drill 1.3) (layers *.Cu *.Mask) ${p.net.to.str})

        ${'' /* bottom plate cutouts */}
        ${p.param.bottom_plate_cutouts ? `
            (pad "" smd circle (at 3.25 0) (size 2.4 2.4) (layers ${bottom_plate_cutout_layer}))
            (pad "" smd circle (at -3.25 0) (size 2.4 2.4) (layers ${bottom_plate_cutout_layer}))
        ` : '' }
    )

    `
}

