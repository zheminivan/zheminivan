# zheminivan

zheminivan is a Node.js module that provides helpful functions for working with musical harmony, such as retrieving chord notes, scale notes, and chord progressions.

## Installation

You can install zheminivan via npm: `npm install zheminivan`

## Usage

```javascript
const harmonyUtils = require('harmony-utils');

// Get the notes of a chord
const chordNotes = harmonyUtils.getChordNotes('Cmaj7');
console.log(chordNotes); // Output: ['C', 'E', 'G', 'B']

// Get the notes of a scale
const scaleNotes = harmonyUtils.getScaleNotes('C major');
console.log(scaleNotes); // Output: ['C', 'D', 'E', 'F', 'G', 'A', 'B']

// Get chord progressions in a specific key
const progression = ['I', 'IV', 'V'];
const chordProgression = harmonyUtils.getChordProgression('C', progression);
console.log(chordProgression); // Output: [['C', 'E', 'G'], ['F', 'A', 'C'], ['G', 'B', 'D']]
```

