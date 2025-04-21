import {
	Box,
	Button,
	Card,
	Grid,
	IconButton,
	Tab,
	Tabs,
	Typography,
	useTheme,
} from '@mui/material';
import { JSX, ReactElement, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Download as DownloadIcon } from '@mui/icons-material';

import ProfilePicture from '../assets/images/profile.svg';
import {
	BiLogoLinkedinSquare as LinkedInIcon,
	BiLogoGithub as GithubLogo,
} from 'react-icons/bi';

const socials: { name: string; icon: ReactElement; url: string }[] = [
	{
		name: 'LinkedIn',
		icon: <LinkedInIcon />,
		url: 'https://www.linkedin.com/in/zacharythomas23/',
	},
	{
		name: 'Gitbub',
		icon: <GithubLogo />,
		url: 'https://www.linkedin.com/in/zacharythomas23/',
	},
];

const Index = (): JSX.Element => {
	const { pathname } = useLocation();
	const theme = useTheme();
	const location = pathname.replace('/', '');

	const [value, setValue] = useState<string>(location);
	const navigate = useNavigate();

	const upSM = theme.breakpoints.up('sm');

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
			direction={'column'}
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
							<Grid
								size={{ xs: 12 }}
								marginLeft={{ xs: -0.5, sm: 0 }}
								wrap={'nowrap'}
							>
								<Tabs
									value={value}
									onChange={(e, newValue) => {
										if (newValue !== location && newValue !== 'cv') {
											setValue(newValue);
											navigate(newValue);
											event?.preventDefault();
										}
									}}
									sx={{ width: 'auto' }}
								>
									{/* <Tab
										label={underXs ? 'About' : 'About Me'}
										value={''}
										{...tabSX}
									/> */}

									<Tab label={'Home'} value={''} {...tabSX} />

									<Tab label={'Experience'} value={'experience'} {...tabSX} />

									<Tab label={'Projects'} value={'projects'} {...tabSX} />

									<Tab
										value={'cv'}
										label={'Resume'}
										{...tabSX}
										onClick={() => {
											const pdfUrl = 'resume.pdf';
											const link = document.createElement('a');
											link.href = pdfUrl;
											link.download = 'Zachary Thomas Resume.pdf';
											document.body.appendChild(link);
											link.click();
											document.body.removeChild(link);
										}}
									/>
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
									<Typography variant={'h5'}>Lead Software Engineer</Typography>
								</Grid>

								<Grid container>
									<Typography>
										I am a passionate and results-driven Software Engineer with
										a strong foundation in full-stack development and a proven
										track record of delivering innovative solutions that enhance
										user experience and operational efficiency. Currently
										serving as a Lead Software Engineer at Compass Experience
										Labs, I specialize in building a scalable, data-driven
										platform designed to transform customer experience (CX)
										operations. My technical expertise is supported by hands-on
										experience in leading end-to-end development of custom
										tools—from initial concept through deployment—ensuring
										alignment with business objectives and user needs.
									</Typography>
									<Typography>
										Over the years, I have grown through a variety of technical
										roles, including my previous positions at Whisker as a
										Software Engineer and Fleet Lab as a Software Engineering
										Contractor. In these roles, I spearheaded development
										initiatives such as centralized authentication systems and
										internal tools that streamlined engineering and customer
										service processes across multiple APIs.
									</Typography>
									<Typography>
										My educational journey has been equally focused and
										ambitious. I am currently pursuing both a Master's of
										Science and Bachelor of Science in Software Engineering at
										the University of Michigan–Flint (expected December 2028 and
										December 2027 repectively). I have also completed a Full
										Stack Web Development Boot Camp at Michigan State
										University. I bring a robust technical toolkit that includes
										JavaScript, TypeScript, React, Node.js, Express.js, Python,
										C++, MongoDB, SQL, and more. I am highly experienced in AWS,
										Git, Responsive Design, Software Architecture, and Project
										Management, with a strong focus on collaboration, customer
										service, and continuous improvement.
									</Typography>
									<Typography>
										Above all, I am deeply committed to learning, growing, and
										pushing boundaries in the field of software
										engineering—driven by curiosity, discipline, and a desire to
										create meaningful digital experiences.
									</Typography>
								</Grid>

								<Grid
									paddingTop={1}
									container
									size={{ xs: 12 }}
									justifyContent={'space-evenly'}
								>
									{/* <Button
										variant={'contained'}
										endIcon={<ContactIcon />}
										sx={{ padding: 2 }}
										onClick={() => {
											setValue('contact');
											navigate('/contact');
										}}
									>
										Contact Me
									</Button> */}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Grid>

			<Outlet />

			<Grid container>
				{socials.map((item) => (
					<IconButton
						key={item.name}
						size={'large'}
						sx={{ padding: -1 }}
						onClick={() => {
							navigate(item.url);
						}}
					>
						{item.icon}
					</IconButton>
				))}
			</Grid>
		</Grid>
	);
};

export default Index;
