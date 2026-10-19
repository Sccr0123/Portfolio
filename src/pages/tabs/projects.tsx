import { JSX } from 'react';
import {
	Box,
	Card,
	Grid,
	Link,
	Tooltip,
	Typography,
	//useTheme,
} from '@mui/material';

import HealthApp from '../../assets/images/projects/healthApp.png';
import WhiskerLens from '../../assets/images/projects/whiskerLens.png';
import SherpaCX from '../../assets/images/projects/sherpaCx.svg';

const projects: {
	name: string;
	image: string;
	languages: string[];
	description: string;
	link: string;
	publicProject: boolean;
}[] = [
	{
		name: 'State Tracking & CSM Platform',
		image: SherpaCX,
		languages: ['TypeScript', 'React/Next.js', 'Node.js', 'AWS CDK'],
		description: `Enterprise Customer Service Management platform built for high-availability support operations, maintaining 99%+ uptime with automated alerting and microservices architecture.`,
		link: '',
		publicProject: false,
	},
	{
		name: 'Intelligent Coaching Platform',
		image: SherpaCX,
		languages: ['TypeScript', 'React', 'Node.js', 'Python'],
		description: `Data-driven coaching tool providing personalized real-time performance feedback and analytics for customer experience operations teams.`,
		link: '',
		publicProject: false,
	},
	{
		name: 'Whisker Lens / Internal Authentication',
		image: WhiskerLens,
		languages: ['TypeScript', 'React', 'Node.js'],
		description: `Internal troubleshooting platform and centralized authentication system deployed across 10+ internal APIs to streamline hardware diagnostic workflows.`,
		link: '',
		publicProject: false,
	},
	{
		name: 'CSC 175 - Health App',
		image: HealthApp,
		languages: ['C++'],
		description: `CSC 175 Final Project demonstrating object-oriented system design and C++ algorithmic concepts.`,
		link: 'https://github.com/Sccr0123/CSC-175-Final-Project-Health-App',
		publicProject: true,
	},
];

const Projects = (): JSX.Element => {
	//const theme = useTheme();

	return (
		<Grid container width={'100%'}>
			<Grid
				container
				size={12}
				paddingX={2}
				justifyContent={'center'}
				marginBottom={2}
			>
				<Typography variant={'h4'} fontWeight={'bold'}>
					My Work & Projects
				</Typography>
			</Grid>

			<Grid size={12} container spacing={2}>
				{projects.map(
					({ name, image, languages, description, link, publicProject }) => (
						<Grid key={name} size={{ xs: 12, md: 6, lg: 3 }} container>
							<Card
								sx={{
									paddingX: 2,
									borderRadius: 5,
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
								}}
							>
								<Grid container direction={'column'} marginY={2} spacing={2}>
									<Grid size={12} container justifyContent={'center'}>
										<Typography
											variant={'h6'}
											fontWeight={'bold'}
											textAlign={'center'}
										>
											{name}
										</Typography>
									</Grid>

									<Grid size={12} container justifyContent={'center'}>
										<Box
											component={'img'}
											src={image || name}
											alt={`${name} Image`}
											width={'80%'}
											sx={{ aspectRatio: 1 / 1, objectFit: 'contain' }}
										/>
									</Grid>

									<Grid size={12} container alignItems={'center'}>
										<Typography variant={'subtitle2'} fontWeight={'bold'}>
											Stack:&nbsp;
										</Typography>
										<Typography variant={'body2'}>
											{languages.join(', ')}
										</Typography>
									</Grid>

									<Grid size={12} container alignItems={'center'}>
										<Typography variant={'body2'} color={'text.secondary'}>
											{description}
										</Typography>
									</Grid>

									<Grid size={12} container justifyContent={'center'} mt={1}>
										{publicProject ? (
											<Tooltip title={'Click To Navigate'} placement={'top'}>
												<Link href={link} target={'_blank'} underline={'hover'}>
													<Typography variant={'subtitle2'} fontWeight={'bold'}>
														View Repository
													</Typography>
												</Link>
											</Tooltip>
										) : (
											<Tooltip
												title={'Internal Enterprise Software'}
												placement={'top'}
											>
												<Typography
													variant={'subtitle2'}
													color={'textDisabled'}
												>
													Enterprise Internal Tool
												</Typography>
											</Tooltip>
										)}
									</Grid>
								</Grid>
							</Card>
						</Grid>
					),
				)}
			</Grid>
		</Grid>
	);
};

export default Projects;
