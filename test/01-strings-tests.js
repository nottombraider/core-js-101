const assert = require('assert');
const tasks = require('../src/01-strings-tasks');
it.optional = require('../extensions/it-optional');

describe('01-strings-tasks', () => {
  it.optional('concatenateStrings should return concatenation of two strings', () => {
    assert.strictEqual(tasks.concatenateStrings('aa', 'bb'), 'aabb');
    assert.strictEqual(tasks.concatenateStrings('aa', ''), 'aa');
    assert.strictEqual(tasks.concatenateStrings('', 'bb'), 'bb');
  });

  it.optional('getStringLength should return the length of string', () => {
    assert.strictEqual(tasks.getStringLength('aaaaa'), 5, "'aaaaa' length should be 5");
    assert.strictEqual(tasks.getStringLength(''), 0, "'' length should be 0");
  });

  it.optional('getStringFromTemplate should create a string from template using given parameters', () => {
    assert.strictEqual(tasks.getStringFromTemplate('John', 'Doe'), 'Hello, John Doe!');
    assert.strictEqual(tasks.getStringFromTemplate('Chuck', 'Norris'), 'Hello, Chuck Norris!');
  });

  it.optional('getFirstChar should return the first char from given string', () => {
    assert.strictEqual(tasks.getFirstChar('John Doe'), 'J');
    assert.strictEqual(tasks.getFirstChar('cat'), 'c');
  });

  it.optional('extractNameFromTemplate should parse the name from given string', () => {
    assert.strictEqual(tasks.extractNameFromTemplate('Hello, John Doe!'), 'John Doe');
    assert.strictEqual(tasks.extractNameFromTemplate('Hello, Chuck Norris!'), 'Chuck Norris');
  });

  it.optional('removeLeadingAndTrailingWhitespaces should remove leading and trailing whitespaces from the string', () => {
    assert.strictEqual(tasks.removeLeadingAndTrailingWhitespaces('  Abracadabra'), 'Abracadabra');
    assert.strictEqual(tasks.removeLeadingAndTrailingWhitespaces('cat'), 'cat');
    assert.strictEqual(tasks.removeLeadingAndTrailingWhitespaces('\tHello, World! '), 'Hello, World!');
  });

  it.optional('repeatString should repeat string specified number of times', () => {
    assert.strictEqual(tasks.repeatString('A', 5), 'AAAAA');
    assert.strictEqual(tasks.repeatString('cat', 3), 'catcatcat');
  });

  it.optional('removeFirstOccurrences should remove all specified values from a string', () => {
    assert.strictEqual(tasks.removeFirstOccurrences('To be or not to be', ' not'), 'To be or to be');
    assert.strictEqual(tasks.removeFirstOccurrences('I like legends', 'end'), 'I like legs');
    assert.strictEqual(tasks.removeFirstOccurrences('ABABAB', 'BA'), 'ABAB');
  });

  it.optional('unbracketTag should remove first and last angle brackets from tag string', () => {
    assert.strictEqual(tasks.unbracketTag('<div>'), 'div');
    assert.strictEqual(tasks.unbracketTag('<span>'), 'span');
    assert.strictEqual(tasks.unbracketTag('<a>'), 'a');
  });

  it.optional('convertToUpperCase should convert all chars from specified string into upper case', () => {
    assert.strictEqual(tasks.convertToUpperCase('Thunderstruck'), 'THUNDERSTRUCK');
    assert.strictEqual(tasks.convertToUpperCase('abcdefghijklmnopqrstuvwxyz'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });

  it.optional('extractEmails should extract emails from string list delimeted by semicolons', () => {
    assert.deepEqual(
      tasks.extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'),
      ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com'],
    );
    assert.deepEqual(
      tasks.extractEmails('info@gmail.com'),
      ['info@gmail.com'],
    );
  });

  it.optional('getRectangleString should return the string reprentation of rectangle with specified size', () => {
    assert.strictEqual(
      tasks.getRectangleString(6, 4),
      // eslint-disable-next-line indent
        '┌────┐\n'
      + '│    │\n'
      + '│    │\n'
      + '└────┘\n',
    );
    assert.deepEqual(
      tasks.getRectangleString(2, 2),
      // eslint-disable-next-line indent
        '┌┐\n'
      + '└┘\n',
    );
    assert.deepEqual(
      tasks.getRectangleString(12, 3),
      // eslint-disable-next-line indent
        '┌──────────┐\n'
      + '│          │\n'
      + '└──────────┘\n',
    );
  });

  it.optional('encodeToRot13 should encode-decode string using ROT13 algorithm', () => {
    assert.strictEqual(tasks.encodeToRot13('hello'), 'uryyb');
    assert.strictEqual(tasks.encodeToRot13('Why did the chicken cross the road?'), 'Jul qvq gur puvpxra pebff gur ebnq?');
    assert.strictEqual(tasks.encodeToRot13('Gb trg gb gur bgure fvqr!'), 'To get to the other side!');
    assert.strictEqual(
      tasks.encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'),
      'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm',
    );
  });

  it.optional('isString should return true if argument is a string', () => {
    assert.strictEqual(tasks.isString(), false, 'undefined');
    assert.strictEqual(tasks.isString(null), false, 'null');
    assert.strictEqual(tasks.isString([]), false, '[]');
    assert.strictEqual(tasks.isString('test'), true, 'test');
    // eslint-disable-next-line no-new-wrappers
    assert.strictEqual(tasks.isString(new String('test')), true, "new String('test')");
  });

  it.optional('getCardId should return the index of card in the initial deck', () => {
    [
      'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
      'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
      'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
      'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
    ].forEach((val, index) => {
      assert.strictEqual(
        tasks.getCardId(val),
        index,
        `Invalid id for card '${val}':`,
      );
    });
  });
});
