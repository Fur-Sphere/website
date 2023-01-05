import { Button, Stack, Typography } from "@mui/material"
import DefaultLayout from "../layout/DefaultLayout"

const Home = () => {
	return (
		<Stack
			gap='20px'
		>
			<Typography
				variant='titleSmall'
			>
				Pawsphere
			</Typography>
			<Button
				variant='contained'
				color='primary'
			>
				Take the survey
			</Button>
		</Stack>
	)
}

Home.getLayout = (page) => {
	return (
		<DefaultLayout>
			{page}
		</DefaultLayout>
	)
}

export default Home