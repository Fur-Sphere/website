import { Stack } from "@mui/material";

const Container = ({ children, maxWidth = '880px', ...props }) => {
	return (
		<Stack
			alignItems='center'
		>
			<Stack
				width='100%'
				maxWidth={maxWidth}
				{ ...props }
			>
				{ children }
			</Stack>
		</Stack>
	);
}

export default Container;