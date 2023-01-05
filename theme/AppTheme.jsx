import { ThemeProvider } from "@mui/material"
import useAppTheme from "./useAppTheme"

const AppTheme = ({ children }) => {
	const theme = useAppTheme()

	return (
		<ThemeProvider
			theme={theme}
		>
			{ children }
		</ThemeProvider>
	)
}

export default AppTheme