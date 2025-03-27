// types
import {
	DefaultConfigProps,
	MenuOrientation,
	ThemeDirection,
	ThemeMode,
} from './src/types/config';

// ==============================|| THEME CONSTANT ||============================== //

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const APP_DEFAULT_PATH = '/';
export const HORIZONTAL_MAX_ITEM = 7;
export const DRAWER_WIDTH = 200;
export const MINI_DRAWER_WIDTH = 60;

// ==============================|| THEME CONFIG ||============================== //

const config: DefaultConfigProps = {
	fontFamily: `'Inter', sans-serif`,
	i18n: 'en',
	menuOrientation: MenuOrientation.VERTICAL,
	miniDrawer: false,
	container: false,
	mode: window.matchMedia('(prefers-color-scheme: dark)').matches
		? ThemeMode.DARK
		: ThemeMode.LIGHT,
	presetColor: 'default',
	themeDirection: ThemeDirection.LTR,
};

export default config;
