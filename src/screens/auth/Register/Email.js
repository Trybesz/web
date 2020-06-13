import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const Email = ({updateStage, updateUser}) => {
    const [email, setEmail] = useState('');

    const goToNextStage = () => {
        updateUser({ email });
        updateStage('password');
    };

    return (
        <>
            <Button label={'password'} onClick={goToNextStage} />
        </>
    );
};

export default Email;
