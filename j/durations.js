var _ = require('lodash/fp')
var durations = {}

var withDuration = _.curry(function(duration, note) {
  return [note, duration]
})
var withDurationList = _.curry(function(duration, notes) {
  var durations = _.map(function() { return duration })(notes)
  return [notes, durations]
})

durations.asQuarterNotes = _.map(withDuration('4n'))
durations.withQuarterNotes = withDurationList('4n')
durations.asEighthNotes = _.map(withDuration('8n'))
durations.withEighthNotes = withDurationList('8n')

module.exports = durations
