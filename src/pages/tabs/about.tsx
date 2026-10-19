import { Card, Grid, Typography } from '@mui/material';
import { JSX } from 'react';

const About = (): JSX.Element => {
	return (
		<Grid container direction={'column'} size={12}>
			<Grid container size={12} marginBottom={2} paddingX={2}>
				<Typography variant={'h4'} fontWeight={'bold'}>
					About Me
				</Typography>
			</Grid>

			<Grid container size={12}>
				<Card sx={{ padding: 4, borderRadius: 5, width: '100%' }}>
					<Grid container direction={'column'} spacing={3}>
						<Typography variant='body1' sx={{ lineHeight: 1.7 }}>
							I am a Lead Software Engineer and AI-focused technologist with
							extensive experience architecting high-availability enterprise
							platforms and cloud-native microservices. Currently, I lead a
							cross-functional engineering team at Compass Experience Labs
							delivering a Customer Service Management (CSM) platform built on
							React/Next.js, Node.js microservices, and AWS CDK infrastructure
							maintaining 99%+ system uptime.
						</Typography>

						<Typography variant='body1' sx={{ lineHeight: 1.7 }}>
							My engineering foundation is complemented by advanced studies
							toward a Master of Science in Software Engineering with a
							concentration in Artificial Intelligence from the University of
							Michigan-Flint (Expected 2028), where I am deepening expertise in
							machine learning, NLP, and intelligent systems design alongside my
							Bachelor of Science (3.98 GPA).
						</Typography>

						<Typography variant='body1' sx={{ lineHeight: 1.7 }}>
							With a proven history of designing data-driven customer experience
							tools from the ground up, establishing robust CI/CD and
							observability pipelines, and serving as Chapter President of the
							National Society of Leadership and Success, I bridge the gap
							between complex technical architecture, team mentorship, and
							scalable software execution.
						</Typography>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
};

export default About;
