/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import CONST from '@src/CONST';
import darkTheme from './default';
import lightTheme from './light';
import ThemeContext from './ThemeContext';
import {ThemePreferenceWithoutSystem} from './types';
import useThemePreference from './useThemePreference';

const propTypes = {
    /** Rendered child component */
    children: PropTypes.node.isRequired,
};

type ThemeProviderProps = React.PropsWithChildren & {
    theme?: ThemePreferenceWithoutSystem;
};

function ThemeProvider({children, theme: staticThemePreference}: ThemeProviderProps) {
    const themePreference = useThemePreference();

    const isLightTheme = (staticThemePreference ?? themePreference) === CONST.THEME.LIGHT;

    const theme = useMemo(() => (isLightTheme ? lightTheme : darkTheme), [isLightTheme]);

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
