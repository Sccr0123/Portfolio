import { JSX } from 'react';
import {
	Card,
	Grid,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface CareerItem {
	title: string;
	company: string;
	location: string;
	period: string;
	description: string[];
}

const careerData: CareerItem[] = [
	{
		title: 'Lead Software Engineer',
		company: 'Compass Experience Labs',
		location: 'Columbus, OH',
		period: 'Dec 2024 – Present',
		description: [
			'Leading a cross-functional team of 4 engineers delivering a high-availability Customer Service Management platform with 99%+ uptime.',
			'Architect full-stack solutions using React/Next.js frontends and Node.js microservices in TypeScript.',
			'Provision AWS cloud infrastructure via AWS CDK (IaC) for repeatable, version-controlled deployments.',
			'Establish observability frameworks, automated alerting, and engineer mentorship programs through code reviews and 1-on-1s.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Compass Experience Labs',
		location: 'Columbus, OH',
		period: 'Jan 2024 – Dec 2024',
		description: [
			'Engineered a real-time State Tracking System analyzing customer interactions to surface actionable metrics.',
			'Built an Intelligent Coaching Platform delivering automated real-time performance guidance to support teams.',
			'Managed full software development lifecycles from concept through enterprise deployment.',
		],
	},
	{
		title: 'Founding Software Engineer',
		company: 'Fleet Lab',
		location: 'Ann Arbor, MI',
		period: 'Apr 2023 – Sep 2023',
		description: [
			'Spearheaded core engineering and product architecture initiatives for an early-stage tech startup.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Whisker',
		location: 'Auburn Hills, MI',
		period: 'Jul 2022 – Jan 2024',
		description: [
			'Architected a centralized authentication system deployed across 10+ internal APIs, enhancing cross-platform security and developer velocity.',
			'Built an internal troubleshooting web application that significantly reduced issue resolution times for support and engineering teams.',
		],
	},
];

const CareerCard = (): JSX.Element => {
	return (
		<Card sx={{ padding: 4, borderRadius: 5, width: '100%' }}>
			<Grid container direction={'column'} spacing={3}>
				<Grid container size={12}>
					<Typography variant='h5' fontWeight='bold'>
						Career Experience
					</Typography>
				</Grid>

				{careerData.map((item, index) => (
					<Grid container direction={'column'} size={12} key={index}>
						<Box
							display='flex'
							justifyContent='space-between'
							alignItems='flex-start'
							width='100%'
						>
							<Box>
								<Typography variant='h6' fontWeight='bold'>
									{item.title}
								</Typography>
								<Typography variant='subtitle2' color='primary'>
									{item.company} • {item.location}
								</Typography>
							</Box>
							<Typography variant='caption' fontWeight='bold'>
								{item.period}
							</Typography>
						</Box>

						<List dense disablePadding sx={{ mt: 1 }}>
							{item.description.map((desc, i) => (
								<ListItem
									key={i}
									disableGutters
									sx={{ alignItems: 'flex-start' }}
								>
									<ListItemIcon sx={{ minWidth: 24, mt: 0.5 }}>
										<ArrowRightIcon fontSize='small' color='primary' />
									</ListItemIcon>
									<ListItemText
										primary={desc}
										primaryTypographyProps={{ variant: 'body2' }}
									/>
								</ListItem>
							))}
						</List>
					</Grid>
				))}
			</Grid>
		</Card>
	);
};

export default CareerCard;
