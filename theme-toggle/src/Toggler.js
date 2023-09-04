import { Moon } from 'heroicons-react';
import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const StyledLabel = styled.label`
    input {
        position: fixed;
        left: -99999999px;
    }
    input ~ div{
        width: 40px;
        height: 16px;
        background: #eee;
        border-radius: 8px;
        position: relative;
    }
    svg {
        height: 14px;
        color: white;
        background-color: #ccc;
        border-radius: 7px;
        position: absolute;
        top: 1px;
        left: 1px;
        transition: all .4s ease;
    }
    input:checked ~ div {
        background: #668;
        svg {
            background-color: #224;
            left: 15px;
        }
    }
`;

export default function Toggler () {
    const theme = useContext(ThemeContext);
    return (
        <StyledLabel>
            <input type="checkbox" checked={theme.darkMode} 
                onChange={() => theme.setDarkMode(oldVal => !oldVal)} 
            />
            <div>
                <Moon />
            </div>
        </StyledLabel>
    );
}