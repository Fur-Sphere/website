const componentsOptions = {
	MuiButton: {
		defaultProps: {
			disableElevation: true,
			disableRipple: true,
		},
		styleOverrides: {
			root: {
				width: 'max-content',
				padding: '10px 24px',
				borderRadius: '100px',
				textTransform: 'none',
			}
		}
	},
	MuiAppBar: {
		defaultProps: {
			elevation: 0
		}
	}
}

export default componentsOptions