import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const Username = (updateStage, updateUsername) => {
    const [username, setUsername] = useState('');

    const goToNextStage = async () => {
        updateUsername({ username });
        updateStage('email');
    };

    return (
        <>
            <Button label={'email'} onClick={goToNextStage} />
        </>
    );
};

export default Username;
