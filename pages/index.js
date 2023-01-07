import { Button, Stack, Typography } from "@mui/material"
import DefaultLayout from "../layout/DefaultLayout"
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"

const Home = () => {
	return (
		<Stack>
			<Hero />
			<Services />
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