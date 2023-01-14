import { Stack, Typography } from "@mui/material";
import { APP_NAME } from "../../lib/constants";
import Image from "next/image";
import HealthIcon from "../../lib/icons/HealthIcon";
import GiveLoveIcon from "../../lib/icons/GiveLoveIcon";
import BellIcon from "../../lib/icons/BellIcon";

const services = [
	{
		id: 0,
		icon: <HealthIcon width="32px" height="32px" fill="#EDE0DE" />,
		title: 'Emergency Medical Services',
		description: 'Get location based helpline solutions from your nearby vets & trainers.'
	},
	{
		id: 1,
		icon: <GiveLoveIcon width="32px" height="32px" fill="#EDE0DE" />,
		title: 'Easy Adoption',
		description: 'Don’t buy, Adopt. Find NGOs and adopting facilities near you.'
	},
	{
		id: 2,
		icon: <BellIcon width="32px" height="32px" fill="#EDE0DE" />,
		title: 'Pet Management System',
		description: 'Manage your pet’s medication & needs. We’ll remind you of vaccines and also suggest products from our shop.'
	},
]

const Service = ({service}) => {
	return (
		<Stack
			gap='12px'
			alignItems={{
				xs: 'center',
				md: 'normal'
			}}
		>
			{ service.icon }
			<Stack
				gap='4px'
				alignItems={{
					xs: 'center',
					md: 'normal'
				}}
			>
				<Typography variant='titleLarge' color='text.white' textAlign={{ xs: 'center', md: 'left' }}>{service.title}</Typography>
				<Typography variant='bodyMedium' color='text.neutral90' textAlign={{ xs: 'center', md: 'left' }}>{service.description}</Typography>
			</Stack>
		</Stack>
	)
}

const ServiceDescriptionContainer = () => {
	return (
		<Stack
			gap='40px'
			// flexGrow={1}
		>	
			{ services.map(service => <Service key={service.id} service={service} />)} 
		</Stack>
	)
}

const ServicesContent = () => {
	return (
		<Stack
			direction={{
				xs: 'column',
				md: 'row'
			}}
			alignItems={{
				xs: 'center',
				md: 'normal'
			}}
			padding='32px'
			gap='64px'
		>
			<Image
				src='/images/vets-pets.png'
				alt='Vets and Pets'
				width={312}
				height={343.84}
				style={{
					maxWidth: 312,
					maxHeight: 343.84,
					width: '100%',
					height: 'auto'
				}}
			/>
			<ServiceDescriptionContainer />
		</Stack>
	)
}

const Services = () => {
	return (
		<Stack
			bgcolor='primary.20'
			alignItems='center'
		>
			<Stack
				width='100%'
				maxWidth='880px'
				padding='64px 32px'
				gap='40px'
			>
				<Typography
					variant='displayLarge'
					textAlign='center'
					color='text.white'
				>
					Why { APP_NAME }?
				</Typography>
				<ServicesContent />
			</Stack>
		</Stack>
	);
}

export default Services;