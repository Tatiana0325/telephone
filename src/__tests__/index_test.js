import changePhone from '../js/index';

test('Change 8 (927) 000-00-00', () => {
    expect(changePhone('8 (927) 000-00-00')).toBe('+79270000000');
});

test('Change +86 000 000 0000', () => {
    expect(changePhone('+86 000 000 0000')).toBe('+860000000000');
});

test('Change +7 960 000 00 00', () => {
    expect(changePhone('+7 960 000 00 00')).toBe('+79600000000');
});

test('Change 79105555555', () => {
    expect(changePhone('79105555555')).toBe('+79105555555');
});

test('Change 89101110000', () => {
    expect(changePhone(89101110000)).toBe('+79101110000');
});