import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const Username = (updateStage, updateUser) => {
    const [username, setUsername] = useState('');

    const goToNextStage = () => {
        updateUser({ username });
        updateStage('email');
    };

    return (
        <>
            <Button label={'interests'} onClick={goToNextStage} />
        </>
    );
};

export default Username;
