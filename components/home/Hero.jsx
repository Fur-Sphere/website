import { Button, Stack, Typography } from "@mui/material";
import Highlighted from "../common/typography/Highlighted";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<Stack
			alignItems='center'
			bgcolor='surface.1'
		>
			<Stack
				maxWidth='880px'
				width='100%'
				padding='64px 0px 64px 32px'
				direction={{
					xs: 'column',
					md: 'row'
				}}
				alignItems={{
					xs: 'center',
					md: 'normal'
				}}
				gap='48px'
			>
				<Stack
					gap='32px'
				>
					<Typography
						variant='displayMedium'
					>
						The go-to <Highlighted bgcolor='primary.main' color='text.white'>companion</Highlighted> of all smart pet owners
					</Typography>
					<Link
						href='/waitlist'
					>
						<Button
							variant='contained'
							color='black'
							endIcon={ <ArrowForward sx={{ fontSize: '18px' }} /> }
						>
							Join the waitlist
						</Button>
					</Link>
				</Stack>
				<Image 
					alt='Photo by <a href="https://unsplash.com/@cuartodeiibra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mel Elías</a> on <a href="https://unsplash.com/photos/2_KjpNXFl5M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
					src='/images/hero-image.png'
					width={352}
					height={392}
				/>
			</Stack>
		</Stack>
	);
}

export default Hero