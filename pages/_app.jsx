import '../styles/globals.css'
import AppTheme from '../theme/AppTheme'

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || (page => page)

	return (
		<AppTheme>
			{ getLayout(<Component {...pageProps} />) }
		</AppTheme>
	)
}
