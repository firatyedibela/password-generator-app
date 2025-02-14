export class Password {
  static numbers = '0123456789';
  static lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  static uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  constructor(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  ) {
    this.length = length;
    this.includeUppercase = includeUppercase;
    this.includeLowercase = includeLowercase;
    this.includeNumbers = includeNumbers;
    this.includeSymbols = includeSymbols;
  }

  generatePassword() {
    if (this.length === 0) {
      return '';
    }

    let chars = '';

    if (this.includeUppercase) chars += Password.uppercaseLetters;
    if (this.includeLowercase) chars += Password.lowercaseLetters;
    if (this.includeNumbers) chars += Password.numbers;
    if (this.includeSymbols) chars += Password.symbols;

    const randomIndexes = new Uint32Array(this.length);
    crypto.getRandomValues(randomIndexes);

    const passwordArray = new Array(this.length);
    for (let i = 0; i < this.length; i++) {
      const randomIndex = randomIndexes[i] % chars.length; // Select a random index betwen 0 and chars.length
      passwordArray[i] = chars[randomIndex];
    }

    return passwordArray.join('');
  }

  static evaluatePasswordStrength(
    length,
    uppercase,
    lowercase,
    numbers,
    symbols
  ) {
    if (length < 8) {
      return { level: 1, text: 'Too Weak!' };
    }

    let strengthPoints = 0;
    let mixCount = 0;
    [uppercase, lowercase, numbers, symbols].forEach((preference) => {
      if (preference) mixCount += 1;
    });
    strengthPoints += mixCount - 1;

    if (length <= 11) strengthPoints += 1;
    else if (length <= 15) strengthPoints += 3;
    else if (length <= 20) strengthPoints += 5;

    if (strengthPoints <= 3) return { level: 2, text: 'Weak' };
    else if (strengthPoints <= 5) return { level: 3, text: 'Medium' };
    else if (strengthPoints >= 6) return { level: 4, text: 'Strong' };
  }
}
