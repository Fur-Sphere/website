import Head from 'next/head'
import '../styles/globals.css'
import AppTheme from '../theme/AppTheme'

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || (page => page)

	const title = Component.title || 'furSphere'

	return (
		<AppTheme>
			<Head>
				<title>{ title }</title>
			</Head>
			{ getLayout(<Component {...pageProps} />) }
		</AppTheme>
	)
}
