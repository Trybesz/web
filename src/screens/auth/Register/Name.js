import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Picture from 'components/Picture';
import Button from 'components/Button';

import complex1 from 'assets/Complex-1.jpg';

const Password = ({ updateStage, updateName }) => {
    const [name, setName] = useState('');
    

    function goToNextStage() {
        updateName({ name });
        updateStage('username');
    }

    const renderName = 
            <form onSubmit={goToNextStage}>
                <label>
                    Name: 
                <input type='text' value={name} onChange={(e) => setName(e)}/>
                </label>
                <Button label={'username'} onClick={goToNextStage} />
            </form>

    return (
        <Picture picture={complex1} node={renderName} />
    );
};

export default Password;
