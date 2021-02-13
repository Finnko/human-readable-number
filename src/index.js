module.exports = function toReadable(number) {
    if (!number) {
        return 'zero';
    }

    const result = [];
    const hundreds = Math.trunc(number / 100);
    number %= 100;

    if (hundreds) {
        result.push(`${getReadableNumber(hundreds)} hundred`);
    }

    if (number > 10 && number < 20) {
        result.push(`${getReadableNumber(number)}`);
    } else {
        const decimals = Math.trunc(number / 10);
        number %= 10;

        if (decimals) {
            result.push(`${getReadableNumber(decimals * 10)}`)
        }

        if (number > 0) {
            result.push(`${getReadableNumber(number)}`)
        }

    }

    return result.join(' ');
}

const getReadableNumber = (number) => readableDigitsMap[number];

const readableDigitsMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
};
