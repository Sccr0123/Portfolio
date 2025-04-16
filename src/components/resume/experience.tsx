import {
	Box,
	Card,
	Grid,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from '@mui/material';
import { JSX } from 'react';
import Compass from '../../assets/logos/compass.svg';
import FleetLab from '../../assets/logos/fleetLab.jpeg';
import Whisker from '../../assets/logos/whisker.png';
import Costco from '../../assets/logos/costco.jpeg';

const companys: {
	company: string;
	image: string;
	location: string;
	jobs: {
		role: string;
		start: string;
		end: string | null;
		description: string;
	}[];
}[] = [
	{
		company: 'Compass Experience Labs',
		image: Compass,
		location: 'Remote, Columbus OH',
		jobs: [
			{
				role: 'Application Developer',
				start: 'January 2024',
				end: 'September 2024',
				description: '',
			},
			{
				role: 'Software Engineer',
				start: 'September 2024',
				end: 'January 2025',
				description: `In my current role as a Software Engineer, I focus on designing and developing innovative tools that enhance Customer Experience (CX) operations. I have successfully built custom solutions from scratch, including: \n
                                * State Tracking: A real-time system that monitors and analyzes customer interactions, providing businesses with actionable insights to optimize their CX strategies and drive customer satisfaction.\n
                                * Coaching: An intelligent platform that delivers personalized coaching based on data-driven insights, helping CX teams improve performance and customer interactions with real-time feedback.\n\n

                                Key Responsibilities:\n
                                * Leading the end-to-end development process for custom CX tools, from initial concept to deployment.\n
                                * Collaborating with CX teams and stakeholders to gather requirements and ensure the tools align with business objectives.\n
                                * Building scalable, intuitive tools with a focus on user experience and operational efficiency.\n
                                * Integrated custom built real-time data tracking and intelligent coaching features into existing CX workflows.\n
                                * Continuously improving and enhancing the tools based on user feedback and evolving business needs.`,
			},
			{
				role: 'Lead Software Engineer',
				start: 'January 2025',
				end: null,
				description: '',
			},
		],
	},
	{
		company: 'Whisker',
		image: Whisker,
		location: 'Auburn Hills, MI',
		jobs: [
			{
				role: 'Technical Product Specialist',
				start: 'July 2020',
				end: 'July 2022',
				description: '',
			},
			{
				role: 'Software Engineer',
				start: 'July 2022',
				end: 'January 2024',
				description:
					'Lead developer for an internal web app that allowed engineering and customer service to troubleshoot user account and robots. Built a centralized authentication system for use across 10 different APIs.',
			},
		],
	},
	{
		company: 'Fleet Lab',
		image: FleetLab,
		location: 'Remote, Ann Arbor, MI',
		jobs: [
			{
				role: 'Software Engineering Contractor',
				start: 'April 2023',
				end: 'September 2023',
				description: '',
			},
		],
	},
	{
		company: 'Costco Wholesale',
		image: Costco,
		location: 'Shelby Township, MI',
		jobs: [
			{
				role: 'Cashier / Front End Assistant',
				start: 'October 2014',
				end: 'July 2020',
				description: '',
			},
		],
	},
];

const ExperienceCard = (): JSX.Element => {
	return (
		<Grid container width={'100%'}>
			<Grid container size={12} paddingX={2}>
				<Typography variant={'h4'} fontWeight={'bold'}>
					Experience
				</Typography>
			</Grid>

			<Card sx={{ paddingX: 2, borderRadius: 5, width: '100%' }}>
				{companys.map(({ company, image, jobs }) => (
					<Grid size={{ xs: 12 }} container direction={'column'} paddingY={2}>
						<Grid size={{ xs: 12 }} container>
							{image && (
								<Grid size={{ xs: 0.75 }} container justifyContent={'center'}>
									<Box component={'img'} src={image} maxHeight={50} />
								</Grid>
							)}

							<Grid
								size={{ xs: image ? 11.25 : 12 }}
								container
								paddingLeft={2}
								alignItems={'center'}
							>
								<Typography variant={'h4'}>{company}</Typography>
							</Grid>
						</Grid>

						<Grid size={{ xs: 12 }} container marginTop={2}>
							<Stepper
								orientation={'vertical'}
								sx={{ flexDirection: 'column-reverse', width: '100%' }}
							>
								{jobs.map(({ start, end, role, description }) => (
									<Step key={`${company}: ${role}`} active>
										<StepLabel sx={{ width: '100%' }}>
											<Grid container>
												<Grid size={{ xs: 6, md: 5, xl: 4.5 }} container>
													<Card
														sx={{
															width: '75%',
															paddingX: 1,
															paddingY: 0.5,
															borderRadius: 20,
															backgroundColor: 'orange',
														}}
													>
														<Typography
															align={'center'}
														>{`${start} - ${end || 'Present'}`}</Typography>{' '}
													</Card>
												</Grid>

												<Grid
													size={{ xs: 6, md: 7, xl: 7.5 }}
													container
													direction={'column'}
												>
													<Grid
														size={{ xs: 12 }}
														container
														alignContent={'center'}
														height={'100%'}
													>
														<Typography variant={'h5'}>{role}</Typography>
													</Grid>
												</Grid>
											</Grid>
										</StepLabel>

										<StepContent>
											<Grid container direction={'column'}>
												<Grid size={{ xs: 12 }} container>
													<Grid size={{ xs: 6, md: 4.5 }} />

													<Grid
														size={{ xs: 6, md: 7.5 }}
														container
														direction={'column'}
													>
														{description}
													</Grid>
												</Grid>
											</Grid>
										</StepContent>
									</Step>
								))}
							</Stepper>
						</Grid>
					</Grid>
				))}
			</Card>
		</Grid>
	);
};

export default ExperienceCard;
