import { Lexend } from '@next/font/google'
import "@fontsource/lexend"

const lexend = Lexend({
	weight: ['400', '500']
})

const typographyOptions = {
	fontFamily: 'lexend',
	'displayLarge': {
		fontFamily: 'lexend',
		fontSize: '57px',
		lineHeight: '64px'
	},
	'displayMedium': {
		fontFamily: 'lexend',
		fontSize: '45px',
		lineHeight: '52px'
	},
	'displaySmall': {
		fontFamily: 'lexend',
		fontSize: '36px',
		lineHeight: '44px'
	},
	'headlineLarge': {
		fontFamily: 'lexend',
		fontSize: '32px',
		lineHeight: '40px'
	},
	'headlineMedium': {
		fontFamily: 'lexend',
		fontSize: '28px',
		lineHeight: '36px'
	},
	'headlineSmall': {
		fontFamily: 'lexend',
		fontSize: '24px',
		lineHeight: '32px'
	},
	'titleLarge': {
		fontFamily: 'lexend',
		fontSize: '22px',
		lineHeight: '28px'
	},
	'titleMedium': {
		fontFamily: 'lexend',
		fontSize: '16px',
		lineHeight: '24px',
		fontWeight: 500
	},
	'titleSmall': {
		fontFamily: 'lexend',
		fontSize: '14px',
		lineHeight: '20px',
		fontWeight: 500
	},
	'labelLarge': {
		fontFamily: 'lexend',
		fontSize: '14px',
		lineHeight: '20px',
		fontWeight: 500
	},
	'labelMedium': {
		fontFamily: 'lexend',
		fontSize: '12px',
		lineHeight: '16px',
		fontWeight: 500
	},
	'labelSmall': {
		fontFamily: 'lexend',
		fontSize: '11px',
		lineHeight: '16px',
		fontWeight: 500
	},
	'bodyLarge': {
		fontFamily: 'lexend',
		fontSize: '16px',
		lineHeight: '24px',
	},
	'bodyMedium': {
		fontFamily: 'lexend',
		fontSize: '14px',
		lineHeight: '20px',
	},
	'bodySmall': {
		fontFamily: 'lexend',
		fontSize: '12px',
		lineHeight: '16px',
	}
}

export default typographyOptions