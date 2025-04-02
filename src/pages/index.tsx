import {
	Box,
	Button,
	Card,
	Grid,
	Tab,
	Tabs,
	Typography,
	useTheme,
} from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import ProfilePicture from '../assets/images/profile.svg';

import {
	Download as DownloadIcon,
	Portrait as ContactIcon,
} from '@mui/icons-material';

const Index = (): JSX.Element => {
	const { pathname } = useLocation();
	const theme = useTheme();
	const location = pathname.replace('/', '');

	const [value, setValue] = useState<string>(location);
	const navigate = useNavigate();

	const underXs = theme.breakpoints.down('xs');

	const tabSX = {
		component: 'a',
		sx: {
			borderBottom: 1,
			borderBottomWidth: 4,
			marginRight: { xs: 0, sm: 2 },
			width: { xs: '25%', sm: 'auto' },
		},
	};

	useEffect(() => {
		setValue(location);
	}, [location]);

	return (
		<Grid
			container
			minHeight={'100vh'}
			sx={{
				backgroundColor: 'lightgrey',
				margin: -1,
				padding: { xs: 1, md: 2 },
			}}
		>
			<Grid container width={'100%'}>
				<Card
					sx={{
						paddingTop: 2,
						borderRadius: 5,
						width: '100%',
						marginBottom: { xs: 2, sm: 4 },
					}}
				>
					<Grid container direction={'row-reverse'}>
						<Grid
							container
							size={{ xs: 12, md: 4.5, lg: 6, xl: 4 }}
							justifyContent={{ xs: 'flex-start', lg: 'flex-end' }}
						>
							<Box
								component={'img'}
								src={ProfilePicture}
								marginLeft={{ xs: -3, sm: 0, md: -3, lg: 0 }}
							/>
						</Grid>

						<Grid
							container
							direction={'column'}
							size={{ xs: 12, md: 7.5, lg: 6, xl: 8 }}
							paddingX={{ xs: 0, sm: 4 }}
						>
							<Grid size={{ xs: 12 }} marginLeft={{ xs: -0.5, sm: 0 }}>
								<Tabs
									value={value}
									onChange={(e, newValue) => {
										if (newValue !== location) {
											setValue(newValue);
											navigate(newValue);
											event?.preventDefault();
										}
									}}
								>
									<Tab
										label={underXs ? 'About' : 'About Me'}
										value={''}
										{...tabSX}
									/>

									<Tab label={'Resume'} value={'resume'} {...tabSX} />

									<Tab label={'Projects'} value={'projects'} {...tabSX} />

									<Tab label={'Contact'} value={'contact'} {...tabSX} />
								</Tabs>
							</Grid>
							<Grid
								container
								size={{ xs: 12 }}
								marginY={4}
								spacing={3}
								width={'100%'}
								paddingX={{ xs: 2, sm: 0 }}
							>
								<Grid container direction={'column'} spacing={0}>
									<Typography variant={'h3'}>Zachary Thomas</Typography>
									<Typography variant={'h4'}>Software Engineer</Typography>
								</Grid>

								<Grid container>
									<Typography>
										I am a dedicated software engineer with a background in
										full-stack web development, graduated from Michigan State
										University's Bootcamp in July 2022. I create dynamic web
										applications and continuously seek to learn the latest
										trends in software engineering.
									</Typography>
								</Grid>

								{/* <Grid
									paddingTop={1}
									container
									size={{ xs: 12 }}
									justifyContent={'space-evenly'}
								>
									<Button
										variant={'contained'}
										endIcon={<DownloadIcon />}
										sx={{ padding: 2 }}
									>
										Download CV
									</Button>
									<Button
										variant={'contained'}
										endIcon={<ContactIcon />}
										sx={{ padding: 2 }}
										onClick={() => {
											setValue('contact');
											navigate('/contact');
										}}
									>
										Contact Me
									</Button>
								</Grid> */}
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Grid>

			<Outlet />

			<Grid container flexGrow={1} />
		</Grid>
	);
};

export default Index;
