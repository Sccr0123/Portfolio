import { Box, Card, Grid, minor, Typography } from '@mui/material';
import { JSX } from 'react';

const skills: string[] = [
	'Amazon Web Services (AWS)',
	'Git',
	'TypeScript',
	'JavaScript',
	'React',
	'Pyton',
	'C++',
	'Node.Js',
	'Project Management',
	'Express.JS',
	'Software Design',
	'Software Development',
	'Time Management',
	'Customer Service',
	'Multi Tasking',
	'CSS',
	'HTML',
	'Responsive Web Design',
	'Version Control',
	'Database Management',
	'SQL',
	'MongoDB',
];

const SkillsCard = (): JSX.Element => {
	return (
		<Grid container width={'100%'}>
			<Grid container size={12} paddingX={2}>
				<Typography variant={'h4'} fontWeight={'bold'}>
					Skills
				</Typography>
			</Grid>

			<Card
				sx={{ paddingX: 2, borderRadius: 5, width: '100%', height: 'auto' }}
			>
				<Grid container marginY={2}>
					{skills.map((item, index) => (
						<Typography
							marginRight={index < skills.length - 1 ? 1 : 0}
						>{`${item}${index < skills.length - 1 ? ',' : ''}`}</Typography>
					))}
				</Grid>
			</Card>
		</Grid>
	);
};

export default SkillsCard;
