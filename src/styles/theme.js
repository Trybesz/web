import { colorsLight, colorsDark, colorsDim } from './colors';
import breakpoints from './breakpoints';

const basic = {
    borderRadius: 6,
    breakpoints,
    z: {
        modal: 9000,
        snackbar: 9001,
    },
};

const light = {
    ...basic,
    type: 'light',
    color: {
        ...colorsLight,
        text: colorsLight.dark,
        placeholder: colorsLight.dark,
        background: '#fff',
        button: colorsLight.teal,
        link: colorsLight.teal,
        danger: colorsLight.red,
        modal: colorsLight.transparentGrey,
    },
};

const dark = {
    ...basic,
    type: 'dark',
    color: {
        ...colorsDark,
        text: colorsDark.dark,
        placeholder: colorsDark.dark,
        background: '#111',
        button: colorsDark.teal,
        link: colorsDark.teal,
        danger: colorsDark.red,
        modal: colorsDark.transparentGrey,
    },
};

const dim = {
    ...basic,
    type: 'dim',
    color: {
        ...colorsDim,
        text: colorsDim.dark,
        placeholder: colorsDim.dark,
        background: '#132335',
        button: colorsDim.teal,
        link: colorsDim.teal,
        danger: colorsDim.red,
        modal: colorsDim.transparentGrey,
    },
};

const themes = { light, dark, dim };

export default (mode) => themes[mode];
