import { Alert, Autocomplete, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, FormLabel, Stack, TextField, Typography } from "@mui/material"
import Container from "../components/common/layout/Container"
import DefaultLayout from "../layout/DefaultLayout"
import Highlighted from "../components/common/typography/Highlighted"
import { useFormik } from "formik"
import * as yup from 'yup'
import baseAPI from "../lib/axios/base"
import { useState } from "react"
import useWaitList from "../lib/store/waitlist"
import Link from "next/link"

const para1 = 'furSphere, being the ultimate fur-care for your tiny pets empowers you with all the emergency help by getting you the specific details of the Pet centers, Training centers, Pet NGOs, Vet Hospitals, and accessories.'
const para2 = 'We believe in connecting you and your pets with special treatment and services giving you the best-curated catalog of items and places, and websites all in one with the ideology that every pet deserves the best. Making you a healthy pet parent and providing you with the endurable products is our ultimate goal. Aiming for a cage-free ecosystem for the animals and looking forward to a beautiful friendship between animals and humans in the future.'

const highlighted = 'As we know, your best companion is your pet!'

const stateOptions = [
	"Select",
	"Andhra Pradesh",
	"Arunachal Pradesh",
	"Assam",
	"Bihar",
	"Chhattisgarh",
	"Goa",
	"Gujarat",
	"Haryana",
	"Himachal Pradesh",
	"Jammu and Kashmir",
	"Jharkhand",
	"Karnataka",
	"Kerala",
	"Madhya Pradesh",
	"Maharashtra",
	"Manipur",
	"Meghalaya",
	"Mizoram",
	"Nagaland",
	"Odisha",
	"Punjab",
	"Rajasthan",
	"Sikkim",
	"Tamil Nadu",
	"Telangana",
	"Tripura",
	"Uttarakhand",
	"Uttar Pradesh",
	"West Bengal",
	"Andaman and Nicobar Islands",
	"Chandigarh",
	"Dadra and Nagar Haveli",
	"Daman and Diu",
	"Delhi",
	"Lakshadweep",
	"Puducherry"
]

const getThankYouMessage = (name) => `Thanks ${name} for showing interest! We're thrilled to have you on board as one of our early adopters. 
We can't wait for you to be a part of our journey.`

const formValidationSchema = yup.object({
	name: yup.string().required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	state: yup.string().required('Required').nullable(),
	city: yup.string().required('Required'),
	isPetOwner: yup.boolean(),
	isTrainer: yup.boolean(),
	isVet: yup.boolean(),
})

const Intro = () => {
	const [joined, name] = useWaitList(state => [state.joined, state.name])

	return (
		<Stack
			gap='24px'
		>
			<Typography
				variant='displayMedium'
			>
				Join the Wait-list
			</Typography>
			{!joined && (<Stack
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
			</Stack>)}
			{ joined && (
				<Stack>
					<Typography>
						{ getThankYouMessage(name) }
					</Typography>
					<Typography>
						In the meantime, please follow us on <Link href="https://www.instagram.com/fur_sphere/"><Typography component='span' sx={{ textDecoration: 'underline' }} color='primary'>@fur_sphere</Typography></Link> for updates and exclusive content.
					</Typography>
				</Stack>
			) }
		</Stack>
	)
}

const Form = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState()
	const [setJoinedTrue, setName] = useWaitList(state => [state.setJoinedTrue, state.setName])

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			state: '',
			city: '',
			isPetOwner: false,
			isTrainer: false,
			isVet: false
		},
		onSubmit: async (values) => {
			console.log(values)
			setIsLoading(val => true)
			try {
				const response = await baseAPI.waitlist.post(values)
				console.log(response.data)
				if(response.status === 201) {
					setJoinedTrue()
					setName(values.name)
				}
				else throw Error('Request failed')
			} 
			catch(err) {
				console.log(err.response)
				if(err.message === 'Request Failed') {
					setError(err.message)
				}
				else 
				setError(err.response.data.message)
			}
			finally {
				setIsLoading(val => false)
			}
		},
		validationSchema: formValidationSchema
	})

	return (
		<Stack
			component='form'
			gap='20px'
			maxWidth='400px'
			width='100%'
			autoComplete='off'
		>
			<TextField
				name='name'
				label='Name'
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.name ? true : false}
				helperText={formik.touched.name && formik.errors.name}
				required
			/>
			<TextField
				name='email'
				label='Email'
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.email ? true : false}
				helperText={formik.touched.email && formik.errors.email}
				required
			/>
			<Autocomplete 
				options={stateOptions}
				getOptionDisabled={(option) => option === "Select"}
				value={formik.values.state || stateOptions[0]}
				onChange={(e, value) => {
					formik.setFieldValue('state', value)
				}}		
				renderInput={(params) => (
					<TextField
						label='State/UT'
						name='state'
						onBlur={formik.handleBlur}
						error={formik.errors.state ? true : false}
						helperText={formik.touched.state && formik.errors.state}
						required
						{...params}
					/>
				)}
			/>
			<TextField 
				name='city'
				label='City'
				value={formik.values.city}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.city ? true : false}
				helperText={formik.touched.city && formik.errors.city}
				required
			/>
			<FormControl>
				<FormLabel
					
				>
					How do you plan on using furSphere?
				</FormLabel>
				<FormGroup>
					<FormControlLabel 
						control={ <Checkbox checked={formik.values.isPetOwner} onChange={() => formik.setFieldValue('isPetOwner', !formik.values.isPetOwner) } /> }
						label='as a Pet Owner'
					/>
					<FormControlLabel 
						control={ <Checkbox  checked={formik.values.isTrainer} onChange={() => formik.setFieldValue('isTrainer', !formik.values.isTrainer) } /> }
						label='as a Trainer'
					/>
					<FormControlLabel 
						control={ <Checkbox  checked={formik.values.isVet} onChange={() => formik.setFieldValue('isVet', !formik.values.isVet) } /> }
						label='as a Vet'
					/>
				</FormGroup>
			</FormControl>
			{error && (
				<Alert
					severity="error"
				>
					{error}
				</Alert>
			)}
			<Button
				variant='contained'
				color='black'
				onClick={formik.handleSubmit}
			>
				{ isLoading ? <CircularProgress size={24} color="white" /> : 'Join' }
			</Button>
		</Stack>
	)
}



const WaitList = () => {
	const joined = useWaitList(state => state.joined)

	return (
		<Stack
			bgcolor='surface.1'
		>
			<Container>
				<Stack
					padding='32px 64px'
					gap='64px'
				>
					<Intro />
					{!joined && <Form />}
				</Stack>
			</Container>
		</Stack>
	)
}

WaitList.getLayout = function (page) {
	return (
		<DefaultLayout>
			{page}
		</DefaultLayout>
	)
}

export default WaitList