import { JSX } from 'react';
import { Card, Grid, Typography, Divider, Box } from '@mui/material';

interface EducationItem {
	degree: string;
	school: string;
	period: string;
	details?: string;
}

interface LeadershipItem {
	role: string;
	organization: string;
	period: string;
}

const educationData: EducationItem[] = [
	{
		degree: 'Master of Science in Software Engineering (AI Concentration)',
		school: 'University of Michigan-Flint',
		period: 'Jan 2026 – Expected Dec 2028',
		details: 'Focus on Machine Learning, NLP, and Intelligent Systems Design.',
	},
	{
		degree: 'Bachelor of Science in Software Engineering (GPA: 3.98)',
		school: 'University of Michigan-Flint',
		period: 'Dec 2024 – Dec 2027',
	},
	{
		degree: 'Full Stack Web Development Certificate',
		school: 'Michigan State University',
		period: '2022',
	},
	{
		degree: 'Associate of Science in Computer Science',
		school: 'Macomb Community College',
		period: '2023 – 2025',
	},
];

const leadershipData: LeadershipItem[] = [
	{
		role: 'President',
		organization:
			'The National Society of Leadership and Success (UM-Flint Chapter)',
		period: 'Jan 2026 – Present',
	},
	{
		role: 'Board Member',
		organization: "Adam's Promise Foundation",
		period: 'Feb 2026 – Present',
	},
];

const EducationCard = (): JSX.Element => {
	return (
		<Card sx={{ padding: 4, borderRadius: 5, width: '100%' }}>
			<Grid container direction={'column'} spacing={3}>
				<Grid container size={12}>
					<Typography variant='h5' fontWeight='bold'>
						Education & Leadership
					</Typography>
				</Grid>

				{educationData.map((item, index) => (
					<Grid container direction={'column'} size={12} key={index}>
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems='flex-start'
							width='100%'
						>
							<Box>
								<Typography variant='subtitle1' fontWeight='bold'>
									{item.degree}
								</Typography>
								<Typography variant='body2' color='primary'>
									{item.school}
								</Typography>
							</Box>
							<Typography variant='caption'>{item.period}</Typography>
						</Box>
						{item.details && (
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{ mt: 0.5 }}
							>
								{item.details}
							</Typography>
						)}
					</Grid>
				))}

				<Grid container size={12}>
					<Divider sx={{ width: '100%', my: 1 }} />
				</Grid>

				<Grid container size={12}>
					<Typography variant='h6' fontWeight='bold'>
						Leadership & Community
					</Typography>
				</Grid>

				{leadershipData.map((item, index) => (
					<Grid container direction={'column'} size={12} key={index}>
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							width='100%'
						>
							<Box>
								<Typography variant='subtitle2' fontWeight='bold'>
									{item.role}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{item.organization}
								</Typography>
							</Box>
							<Typography variant='caption'>{item.period}</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</Card>
	);
};

export default EducationCard;
