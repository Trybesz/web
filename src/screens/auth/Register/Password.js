import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const Password = ({updateStage, updateUser}) => {
    const [password, setPassword] = useState('');

    const goToNextStage = () => {
        updateUser({ password });
        updateStage('interests');
    };

    return (
        <>
            <Button label={'interests'} onClick={goToNextStage} />
        </>
    );
};

export default Password;
