const formatThousands = (number) => {
    if (typeof number === 'undefined' || !number) {
        return 0
    }

    let sign = '';
    let thousand_separator = '.';
    if (number < 0) {
        sign = '-'
    }
    number = _.replace(number.toString(), /\.|,/g, '');
    let reverse = number.toString().split('').reverse().join(''),
        thousands = reverse.match(/\d{1,3}/g);

    return sign + thousands.join(thousand_separator).split('').reverse().join('');
};