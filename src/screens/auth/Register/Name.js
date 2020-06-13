import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const Password = ({updateStage, updateUser}) => {
    const [name, setName] = useState('');

    const goToNextStage = () => {
        updateUser({ name });
        updateStage('username');
    };

    return (
        <>
            <Button label={'username'} onClick={goToNextStage} />
        </>
    );
};

export default Password;
