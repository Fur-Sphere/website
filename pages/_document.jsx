import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<base target='_blank' />
				<link 
					rel='icon' 
					href='/favicon-on-light.ico'
					media='(prefers-color-scheme: light)' 
				/>
				<link 
					rel='icon' 
					href='/favicon-on-dark.ico'
					media='(prefers-color-scheme: dark)' 
				/>
				<meta 
					name='description' 
					content='furSphere, being the ultimate fur-care for your tiny pets empowers you with all the emergency help by getting you the specific details of the Pet centers, Training centers, Pet NGOs, Vet Hospitals, and accessories.'
				/>
			</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
