import  styled from 'styled-components';
import {palette} from 'styled-theme';

const ThemeSwitcherWrapper = styled.div`
    background: ${palette('background', 0)};
    
    p {
      color: ${palette('text', 0)};
    }
`;

export default ThemeSwitcherWrapper;