/* Draws bottom plate cutouts around pro micro's header pins.
 */

const bottom_plate_cutout_layer = "B.Adhes"

// `hole` and the 13.97 in `w` come straight from promicro.js
const hole = 1.7526
const square_pad_clearance = hole / 2.3 // RAW pin is square, needs a little extra room
const margin = 0.4

const h = hole + margin
const w = 2 * 13.97 + h + square_pad_clearance
const x = -square_pad_clearance / 2

module.exports = {
    params: {
        class: 'PAD',
    },
    body: p => `

    (module ProMicroPadCutouts (layer ${bottom_plate_cutout_layer}) (tedit 58D3FE32)
        (descr "Bottom plate cutouts for Pro Micro header pins")
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 -3.2) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )

        (pad "" smd oval (at ${x}  7.62 ${p.rot}) (size ${w} ${h}) (layers ${bottom_plate_cutout_layer}))
        (pad "" smd oval (at ${x} -7.62 ${p.rot}) (size ${w} ${h}) (layers ${bottom_plate_cutout_layer}))

    )

    `
}
