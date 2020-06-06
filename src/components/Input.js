import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 16px;
    position: relative;
    text-align: left;
`;

const SwitchRow = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputArea = styled.div`
    display: flex;
    width: 100%;
`;

const LabelRow = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 120px;
`;

const ControlRow = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const ControlBox = styled.div`
    cursor: ${({ faux }) => (faux ? 'pointer' : null)};
    position: relative;
    width: 100%;

    ${({ faux }) =>
        faux &&
        `
        :before {
            content: '';
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 3;
        }
    `}
`;

const Label = styled.label`
    font-size: 1.4em;
    font-weight: 600;
    margin: 0 15px 0 0;
    user-select: none;
`;

const NoteRow = styled.div`
    display: flex;
    flex-direction: column;
`;

const Note = styled.div`
    color: #aaa;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.4;
    margin: 10px 15px 0 0;
`;

const Control = styled.input`
    background-color: #ddd;
    border: 2px solid #ddd;
    color: #ddd;
    font-size: 1.6em;
    outline: none;
    padding: 20px 16px;
    position: relative;
    width: 100%;
    z-index: 2;
`;

const Error = styled.div`
    color: red;
    font-size: 1.4em;
    line-height: 1.2;
    margin: 5px 0 0;
`;

const Input = ({ className, type, label, note, error, faux, onClick, style, ...rest }) => (
    <Root className={className} style={style}>
        <SwitchRow>
            <InputArea>
                {label && (
                    <LabelRow>
                        <Label>{label}</Label>
                    </LabelRow>
                )}
                <ControlRow onClick={onClick}>
                    <ControlBox faux={faux}>
                        <Control faux={faux} type={type} {...rest} />
                    </ControlBox>
                </ControlRow>
            </InputArea>
            {error && <Error label={label}>{error}</Error>}
        </SwitchRow>
        {note && (
            <SwitchRow>
                <NoteRow>
                    <Note>{note}</Note>
                </NoteRow>
            </SwitchRow>
        )}
    </Root>
);

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    note: PropTypes.string,
    error: PropTypes.string,
    faux: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    faux: false,
};

export default Input;
