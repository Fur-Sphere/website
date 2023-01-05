import { Button, Stack, Typography } from "@mui/material"

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

export default Home