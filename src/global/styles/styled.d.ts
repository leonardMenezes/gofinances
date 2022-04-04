import 'styled-components';
import theme from './teme';

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {} 
}