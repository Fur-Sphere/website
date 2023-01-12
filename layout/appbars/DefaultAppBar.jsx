import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import { APP_LOGO_ON_LIGHT, APP_NAME } from "../../lib/constants";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

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
				backgroundColor: 'rgba( 255, 255, 255, 0.5)',
				backdropFilter: 'blur(10px)'
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
					<Link
						href='/'
					>
						<Image
							alt={ APP_NAME }
							src={ APP_LOGO_ON_LIGHT }
							width={132}
							height={25.01}
						/>
					</Link>
					<Link
						href='/waitlist'
					>
						<Button
							endIcon={ <ArrowForward /> }
						>
							Join the waitlist
						</Button>
					</Link>
				</Stack>
			</Stack>
		</AppBar>
	);
}

export default DefaultAppBar;