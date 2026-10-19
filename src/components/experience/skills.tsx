import { JSX } from 'react';
import { Card, Grid, Typography, Chip, Box } from '@mui/material';

const skillsData: Record<string, string[]> = {
	'Technical Leadership': [
		'Engineering Mentorship',
		'Agile/Scrum Delivery',
		'Sprint Planning',
		'Architecture Governance',
	],
	'Full-Stack & Cloud': [
		'TypeScript',
		'React / Next.js',
		'Node.js',
		'AWS CDK (IaC)',
		'REST & Microservices',
	],
	'Observability & DevOps': [
		'CI/CD Automation',
		'Automated Alerting',
		'Incident Response',
		'Performance Tuning',
	],
	'Emerging Tech': [
		'AI / Machine Learning',
		'Intelligent Systems Design',
		'Natural Language Processing',
	],
};

const SkillsCard = (): JSX.Element => {
	return (
		<Card sx={{ padding: 4, borderRadius: 5, width: '100%' }}>
			<Grid container direction={'column'} spacing={3}>
				<Grid container size={12}>
					<Typography variant='h5' fontWeight='bold'>
						Skills & Competencies
					</Typography>
				</Grid>

				<Grid container spacing={2} size={12}>
					{Object.entries(skillsData).map(([category, skills]) => (
						<Grid size={{ xs: 12, md: 6 }} key={category}>
							<Typography
								variant='subtitle2'
								fontWeight='bold'
								color='primary'
								marginBottom={1}
							>
								{category}
							</Typography>
							<Box display='flex' flexWrap='wrap' gap={0.75}>
								{skills.map((skill) => (
									<Chip
										key={skill}
										label={skill}
										size='small'
										variant='outlined'
									/>
								))}
							</Box>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Card>
	);
};

export default SkillsCard;
