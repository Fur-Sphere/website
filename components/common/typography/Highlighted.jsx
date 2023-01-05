import { Typography } from "@mui/material";

const Highlighted = ({ children, bgcolor, ...props }) => {
	return (
		<Typography
			variant='inherit'
			component='span'
			sx={{
				backgroundColor: bgcolor
			}}
			{ ...props }
		>
			{ children }
		</Typography>
	);
}

export default Highlighted;