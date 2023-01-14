import { Button, Stack, Typography } from "@mui/material";
import Container from "../common/layout/Container";
import { APP_NAME } from "../../lib/constants";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";

const Prompt = () => {
	return (
		<Stack
			bgcolor='surface.1'
		>
			<Container
				padding='64px 32px'
				gap='32px'
				direction={{
					xs: 'column',
					sm: 'row'
				}}
				alignItems={{
					xs: 'center',
					md: 'normal'
				}}
			>
				<Stack
					gap='32px'
				>
					<Stack
						gap='8px'
					>
						<Typography
							variant='displayMedium'
						>
							{ APP_NAME } is in development!
						</Typography>
						<Typography
							variant='bodyLarge'
						>
							Help us build the best companion for you by taking this small survey
						</Typography>
					</Stack>
					<Button
						href='https://forms.gle/EJdZSTWaXSsX3ra29'
						variant='contained'
						color='black'
						endIcon={ <ArrowForward /> }
					>
						Take Survey
					</Button>
				</Stack>
				<Image
					src='/images/mockup-front.png'
					alt='App mockup'
					width={250}
					height={472}
					style={{
						maxWidth: 250,
						maxHeight: 472,
						width: '100%',
						height: 'auto'
					}}
				/>
			</Container>
		</Stack>
	);
}

export default Prompt;