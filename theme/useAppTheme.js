import componentsOptions from "./options/components"
import paletteOptions from "./options/palette"
import typographyOptions from "./options/typography"

const { createTheme } = require("@mui/material")

const useAppTheme = () => {
	const theme = createTheme({
		typography: typographyOptions,
		components: componentsOptions,
		palette: paletteOptions
	})

	return theme
}

export default useAppTheme