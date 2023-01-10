import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import { APP_LOGO_ON_LIGHT, APP_NAME } from "../../lib/constants";
import { ArrowForward } from "@mui/icons-material";

const DefaultAppBar = () => {
	return (
		<AppBar
			id='app-bar'
			position='sticky'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				borderBottom: '1px solid',
				borderColor: 'outline.darkVariant',
				backgroundColor: 'surface.1'
			}}
		>
			<Stack
				id='nav-container'
				maxWidth='880px'
				width='100%'
			>
				<Stack
					id='nav'
					width='100%'
					padding='16px 0px 16px 16px'
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					gap='10px'
				>
					<Image 
						alt={ APP_NAME }
						src={ APP_LOGO_ON_LIGHT }
						width={132}
						height={25.01}
					/>
					<Button
						href="https://forms.gle/ccw9bDwPSFUfoU9c7"
						endIcon={ <ArrowForward /> }
					>
						Join the waitlist
					</Button>
				</Stack>
			</Stack>
		</AppBar>
	);
}

export default DefaultAppBar;