import React from 'react'
import styled from 'styled-components/macro'
import {ArrowsIcon} from 'components/Icon'

const ArrowsIconWrap = styled(ArrowsIcon)`
    fill: ${({theme})=> theme.color.medGrey};
    position: absolute;
    right: 8px;
    z-index: 3;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        right: 15px;
    }
`;

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 16px;
    position: relative;
    text-align: left;

    .no-touch &:hover ${ArrowsIconWrap} {
        fill: #ccc;
    }
`;

const SwitchRow = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs - 1}px) {
        flex-direction: column;
    }
`;

const NoteRow = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        margin: 0 0 0 120px;
    }
`;

const Note = styled.div`
    color: ${({ theme }) => theme.color.white};
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.4;
    margin: 10px 15px 0 0;
`;

const LabelRow = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs - 1}px) {
        margin: 0 0 8px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        align-self: center;
        justify-content: flex-end;
    }
`;

const ControlRow = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

const Control = styled.select`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.medGrey};
    border-radius: 0;
    color: transparent;
    cursor: pointer;
    font-size: 1.6em;
    display: block;
    outline: none;
    padding: 20px 16px;
    position: relative;
    text-transform: capitalize;
    transition: border-color 0.2s ease-in-out;
    width: 100%;
    z-index: 4;

    option {
        color: #000;
    }
`;

const Label = styled.label`
    font-size: 1.4em;
    font-weight: 600;
    margin: 0 15px 0 0;
    user-select: none;
    color: ${({ theme }) => theme.color.medGrey}

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
        margin-right: 20px;
    }
`;

const FauxValue = styled.div`
    color: ${({ theme }) => theme.color.darkGrey};
    font-size: 1.4em;
    padding: 0 28px 0 16px;
    position: absolute;
    user-select: none;
`;

const upperCase = (str) => {
    const uppercase = str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return uppercase.join(' ');
};

const Select = ({ className, label, note, value, fauxValue, options, onChange, showUpperCase, style}) => (
    <Root className={className} style={style}>
        <SwitchRow>
            {label && (
                <LabelRow>
                    <Label>{label}</Label>
                </LabelRow>
            )}
            <ControlRow>
                <ArrowsIconWrap height={25} width={25} />
                {fauxValue && <FauxValue>{upperCase(fauxValue)}</FauxValue>}
                <Control onChange={onChange} value={value}>
                    {options.map((e) => (
                        <option value={e} key={e}>
                             {showUpperCase ? upperCase(e) : e}
                        </option>
                    ))}
                </Control>
            </ControlRow>
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

export default Select;



