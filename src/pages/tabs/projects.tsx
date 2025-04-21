import { JSX } from 'react';
import {
	Box,
	Card,
	Grid,
	Link,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
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
		name: 'CSC 175 - Health App',
		image: HealthApp,
		languages: ['C++'],
		description:
			'CSC 175 Final Project. Health App coded in C++ showing fluency in the covered class topics',
		link: 'https://github.com/Sccr0123/CSC-175-Final-Project-Health-App',
		publicProject: true,
	},
	{
		name: 'Whisker Lens',
		image: WhiskerLens,
		languages: ['Typescript', 'React'],
		description: `SaaS tool used internally to monitor the status of customer's robots. It is used by staff from both the engineering and customer experience teams`,
		link: '',
		publicProject: false,
	},
	{
		name: 'Sherpa CX',
		image: SherpaCX,
		languages: ['Typescript', 'React', 'Python'],
		description: `SaaS tool used internally to monitor the operations team. It includes custom productivity, coaching, quality assurance, and performance tools as well as an iuntegrated knowledge base`,
		link: '',
		publicProject: false,
	},
];

const Projects = (): JSX.Element => {
	const theme = useTheme();
	const downXs = useMediaQuery(theme.breakpoints.down('sm'));

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
					My Work
				</Typography>
			</Grid>

			<Grid size={12} container spacing={2}>
				{projects.map(
					({ name, image, languages, description, link, publicProject }) => (
						<Grid size={{ xs: 12, md: 3 }} container>
							<Card sx={{ paddingX: 2, borderRadius: 5, width: '100%' }}>
								<Grid container direction={'column'} marginY={2} spacing={2}>
									<Grid size={12} container justifyContent={'center'}>
										<Typography variant={'h5'} fontWeight={'bold'}>
											{name}
										</Typography>
									</Grid>

									<Grid size={12} container justifyContent={'center'}>
										<Box
											component={'img'}
											src={image || name}
											alt={`${name} Image`}
											width={'90%'}
											sx={{ aspectRatio: 1 / 1 }}
										/>
									</Grid>

									<Grid size={12} container alignItems={'center'}>
										<Typography variant={'h6'}>Languages: </Typography>

										<Typography>
											{languages.length > 0
												? languages.map(
														(language, index) =>
															`${language}${index < languages.length - 1 ? ', ' : ''}`,
													)
												: 'None Listed'}
										</Typography>
									</Grid>

									<Grid size={12} container alignItems={'center'}>
										<Typography variant={'h6'}>Description: </Typography>

										<Typography>{description || 'None Listed'}</Typography>
									</Grid>

									<Grid size={12} container justifyContent={'center'}>
										{publicProject ? (
											<Tooltip title={'Click To Navigate'} placement={'top'}>
												<Link
													href={link || 'https://zachthomas.dev/projects'}
													underline={'hover'}
												>
													<Typography variant={'h6'}>Learn More</Typography>
												</Link>
											</Tooltip>
										) : (
											<Tooltip
												title={'Internal Company Work'}
												placement={'top'}
											>
												<Typography variant={'h6'} color={'textDisabled'}>
													Learn More
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
