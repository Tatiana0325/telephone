export default function changePhone(number) {
    if (typeof(number) != 'string') { 
        number = String(number);
    };

    const phoneMask =/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i;

    if(phoneMask.test(number)) {
        const phoneSigns = ['(', ')', ' ', '-'];
        let newNumber = '';

        for (let i = 0; i < number.length; i++) {
            if (phoneSigns.indexOf(number[i]) == -1) {
                newNumber += number[i];
            }
        }

        let phone = newNumber.substring((newNumber.length - 10), 15);

        let code = newNumber.substring(0, (newNumber.length - 10));

        if (code == '8') {
            code = '+7';
        };

        if (code[0] != '+') {
            code = '+' + code;
        }

        return `${code}${phone}`;
    }
}