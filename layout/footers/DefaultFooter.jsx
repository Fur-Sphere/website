import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { APP_LOGO_ON_DARK, APP_NAME } from "../../lib/constants";

const DefaultFooterContact = () => {
	return (
		<Stack
			id='footer-contact'
			alignItems='center'
		>
			<Stack
				width='100%'
				maxWidth='880px'
				padding='64px 32px'
			>
				<Stack
					direction={{
						xs: 'column',
						md: 'row'
					}}
					justifyContent='space-between'
					alignItems='center'
					gap='30px'
				>
					<Image 
						src={ APP_LOGO_ON_DARK }
						alt={ APP_NAME }
						width={264}
						height={50.02}
					/>
					<Stack
						gap='4px'
					>
						<Typography
							variant='bodyLarge'
							color='text.white'
							textAlign={{
								xs: 'center',
								md: 'left'
							}}
						>
							Drop us a line and we'll get in touch
						</Typography>
						<Typography
							variant='displaySmall'
							color='text.white'
							sx={{
								textDecoration: 'underline'
							}}
						>
							hello@pawsphere.in
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}

const DefaultFooterCopyright = () => {
	return (
		<Stack
			id='footer-copyright'
			alignItems='center'
		>
			<Stack
				maxWidth='880px'
				width='100%'
				padding='32px'
			>
				<Typography
					textAlign='center'
					color='text.white'
				>
					Pawsphere ©️ 2022
				</Typography>
			</Stack>
		</Stack>
	)
}

const DefaultFooter = () => {
	return (
		<Stack
			id='footer'
			bgcolor='common.dark'
		>
			<DefaultFooterContact />
			<Divider 
				sx={{
					borderColor: 'outline.lightVariant'
				}}
			/>
			<DefaultFooterCopyright />
		</Stack>
	);
}

export default DefaultFooter;