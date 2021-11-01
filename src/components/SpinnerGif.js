import React from 'react';

import spinnerGif from 'assets/Spinner.gif';

const SpinnerGif = ({ theme, ...rest }) => {
    return <img src={spinnerGif} alt='loading' />;
};

export default SpinnerGif;