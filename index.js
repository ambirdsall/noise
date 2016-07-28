window._ = require('lodash/fp')
window.$ = require('browserify-zepto')
window.Tone = require('tone')

var mono = new Tone.Synth().toMaster()
var poly = new Tone.PolySynth(10, Tone.Synth).toMaster()

$('#chord').click(function() {
  poly.triggerAttackRelease(
    [ 'a4'
    , 'c4'
    , 'e4'
    , 'g4'
    ]
  , [ '2n'
    , '2n'
    , '8n'
    , '2n'
    ]
  )
})

$('#melody').click(function() {
  mono.triggerAttackRelease('a4', '2n')
})
