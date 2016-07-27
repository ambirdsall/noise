$ = require('browserify-zepto')
tn = require('./j/tones')

$('#chord').click(function() {
  tn.play('a')
    .play('c')
    .play('e')
    .play('g')
})

$('#melody').click(function() {
  tn.play('a')
  tn.play('c')
  tn.play('e')
  tn.play('g')
})
