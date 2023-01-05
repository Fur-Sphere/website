import { Button } from "@mui/material";

const AppButton = ({ children,  ...props }) => {
	return (
		<Button
			{ ...props }
			sx={{
				'&:hover': {
					background: 'initial'
				}
			}}
		>
			{ children }
		</Button>	
	)
}

export default AppButton;