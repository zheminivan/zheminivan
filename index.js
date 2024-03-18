const tonal = require('tonal');

function getChordNotes(chordName) {
    return tonal.Chord.notes(chordName);
}

function getScaleNotes(scaleName) {
    return tonal.Scale.notes(scaleName);
}

function getChordProgression(key, progression) {
    return progression.map(chord => tonal.Chord.progression(chord, key));
}

module.exports = {
    getChordNotes,
    getScaleNotes,
    getChordProgression
};
