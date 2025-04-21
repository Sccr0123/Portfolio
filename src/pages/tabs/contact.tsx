import { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Card } from '@mui/material';
import DotQr from '../../assets/images/dotProfile.svg';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Detroit');

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<{
		name: string;
		email: string;
		message: string;
	}>({
		name: '',
		email: '',
		message: '',
	});

	emailjs.init({
		publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
		// Do not allow headless browsers
		blockHeadless: true,
		blockList: {
			// Block the suspended emails
			list: [],
			// The variable contains the email address
			watchVariable: 'userEmail',
		},
		limitRate: {
			// Set the limit rate for the application
			id: 'app',
			// Allow 1 request per 10s
			throttle: 10000,
		},
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validate = () => {
		let tempErrors: { name: string; email: string; message: string } = {
			name: '',
			email: '',
			message: '',
		};
		tempErrors.name = formData.name ? '' : 'Name is required';
		tempErrors.email = /.+@.+..+/.test(formData.email)
			? ''
			: 'Valid email is required';
		tempErrors.message = formData.message ? '' : 'Message is required';
		setErrors(tempErrors);
		return Object.values(tempErrors).every((x) => x === '');
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (validate()) {
			setLoading(true);

			emailjs
				.send(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLETE_ID,
					{ ...formData, time: dayjs().tz().format('MM/DD/YYYY hh:mm:ss a') },
				)
				.then(() => {
					setFormData({ name: '', email: '', message: '' });

					setLoading(false);
				})
				.catch((e) => {
					console.error('Error sending email:', e);

					setLoading(false);
				});
		}
	};

	return (
		<Grid container spacing={2}>
			<Grid size={{ xs: 12, md: 7 }} container justifyContent={'center'}>
				<Card sx={{ paddingX: 2, borderRadius: 5, width: '100%' }}>
					<Grid container direction={'column'} marginY={2}>
						<Grid size={12} container justifyContent={'center'}>
							<Typography variant={'h5'} fontWeight={'bold'}>
								Contact Me
							</Typography>
						</Grid>

						<form onSubmit={handleSubmit}>
							<TextField
								fullWidth
								label='Name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								error={!!errors.name}
								helperText={errors.name}
								margin='normal'
							/>
							<TextField
								fullWidth
								label='Email'
								name='email'
								type='email'
								value={formData.email}
								onChange={handleChange}
								error={!!errors.email}
								helperText={errors.email}
								margin='normal'
							/>
							<TextField
								fullWidth
								label='Message'
								name='message'
								multiline
								rows={4}
								value={formData.message}
								onChange={handleChange}
								error={!!errors.message}
								helperText={errors.message}
								margin='normal'
							/>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								disabled={loading}
								fullWidth
								sx={{ mt: 2 }}
							>
								{loading ? 'Sending' : 'Submit'}
							</Button>
						</form>
					</Grid>
				</Card>
			</Grid>

			<Grid size={{ xs: 12, md: 5 }} container justifyContent={'center'}>
				<Card sx={{ paddingX: 2, borderRadius: 5, width: '100%' }}>
					<Grid container direction={'column'} marginY={2} spacing={2}>
						<Grid
							size={12}
							container
							justifyContent={'center'}
							marginBottom={4}
						>
							<Typography variant={'h5'} fontWeight={'bold'}>
								dot.Profile
							</Typography>
						</Grid>

						<Grid
							size={12}
							container
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Box
								component={'img'}
								src={DotQr}
								width={250}
								alt={'dot.Profile QR Code'}
								sx={{ aspectRatio: 1 / 1 }}
								alignItems={'center'}
							/>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Contact;
