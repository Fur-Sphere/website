import { Stack, Typography } from "@mui/material"
import Container from "../common/layout/Container"
import { APP_NAME } from "../../lib/constants"
import Highlighted from "../common/typography/Highlighted"

const para1 = 'furSphere, being the ultimate fur-care for your tiny pets empowers you with all the emergency help by getting you the specific details of the Pet centers, Training centers, Pet NGOs, Vet Hospitals, and accessories.'
const para2 = 'We believe in connecting you and your pets with special treatment and services giving you the best-curated catalog of items and places, and websites all in one with the ideology that every pet deserves the best. Making you a healthy pet parent and providing you with the endurable products is our ultimate goal. Aiming for a cage-free ecosystem for the animals and looking forward to a beautiful friendship between animals and humans in the future.'

const highlighted = 'As we know, your best companion is your pet!'

const About = () => {
	return (
		<Stack
			bgcolor='surface.3'
		>
			<Container>
				<Stack
					padding='64px 32px'
					gap='24px'
				>
					<Typography
						variant="displayMedium"
						color='primary'
					>
						What is { APP_NAME }?
					</Typography>
					<Stack
						gap='12px'
					>
						<Typography>{para1}</Typography>
						<Typography>{para2}</Typography>
						<Typography
							variant='bodyLarge'
						>
							<Highlighted
								bgcolor='primary.main'
								color='text.white'
							>
								{highlighted}
							</Highlighted>
						</Typography>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	)
}

export default About