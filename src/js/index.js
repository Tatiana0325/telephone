export default function changePhone(number) {
    if (typeof(number) != 'string') { 
        number = String(number);
    };

    const phoneMask =/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i;

    if(phoneMask.test(number)) {
        let newNumber = number.replace(/[\-_(),+ ]/g, '');
        let code = newNumber.substring(0, (newNumber.length - 10));
        let phone = newNumber.replace(code, '');

        if((code == '8') || (code == '')) {
            code = '+7';
        } else {
            code = '+' + code;
        }

        return code + phone;
    }
}