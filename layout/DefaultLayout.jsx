import { Stack } from "@mui/material";
import DefaultAppBar from "./appbars/DefaultAppBar";
import DefaultFooter from "./footers/DefaultFooter";

const DefaultLayout = ({ children }) => {
	return (
		<Stack
			minHeight='100vh'
		>
			<DefaultAppBar />
			<Stack
				flexGrow={1}
			>
				{children}
			</Stack>
			<DefaultFooter />
		</Stack>
	);
}

export default DefaultLayout