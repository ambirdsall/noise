window._ = require('lodash/fp')
window.$ = require('browserify-zepto')
window.Tone = require('tone')

var d = require('./j/durations')

var mono = new Tone.Synth().toMaster()
var poly = new Tone.PolySynth(10, Tone.Synth).toMaster()
poly.chord = _.spread(poly.triggerAttackRelease)

var melody = new Tone.Part(function(time, note) {
  poly.triggerAttackRelease(note, '4n', time)
}, [ [ 0
     , 'f2'
     ]
   , [ '0:1'
     , 'c3'
     ]
   , [ '0:2'
     , 'a3'
     ]
   ]
)

$('#chord').click(function() {
  // poly.triggerAttackRelease(
  //   [ 'a4'
  //   , 'c4'
  //   , 'e4'
  //   , 'g4'
  //   ]
  // , [ '8n'
  //   , '8n'
  //   , '8n'
  //   , '8n'
  //   ]
  // )
  poly.chord(d.withEighthNotes([ 'a4'
                               , 'c#4'
                               , 'e4'
                               , 'g4'
                               ]
                              )
            )
})

$('#melody').click(function() {
  var now = Tone.now()

  melody.start(now)
  melody.stop(now + 4)
})

Tone.Transport.start()
