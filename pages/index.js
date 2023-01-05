import { Button, Stack, Typography } from "@mui/material"
import DefaultLayout from "../layout/DefaultLayout"
import Hero from "../components/home/Hero"

const Home = () => {
	return (
		<Stack>
			<Hero />
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