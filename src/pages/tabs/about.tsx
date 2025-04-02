import { Card, Grid, Typography } from '@mui/material';
import { JSX } from 'react';

const Resume = (): JSX.Element => {
	return (
		<Grid container direction={'column'} size={12}>
			<Grid container size={12} marginBottom={2} paddingX={2}>
				<Typography variant={'h4'}>About Me</Typography>
			</Grid>

			<Grid container size={12}>
				<Card sx={{ padding: 4, borderRadius: 2, width: '100%' }}>
					<Grid container direction={'column'} spacing={3}>
						<Typography>
							I am a passionate and dedicated software engineer with a robust
							background in full-stack web development. My journey in technology
							began with a strong desire to create impactful digital solutions,
							leading me to graduate from Michigan State University's Full Stack
							Web Development Bootcamp in July 2022.
						</Typography>

						<Typography>
							During my time at the bootcamp, I gained extensive experience in
							building dynamic and responsive web applications. I honed my
							skills across various programming languages, frameworks, and
							libraries, including HTML, CSS, JavaScript, React, Node.js, and
							more. This comprehensive training equipped me with the ability to
							develop both front-end and back-end components, ensuring seamless
							integration and user experience.
						</Typography>

						<Typography>
							I thrive in collaborative environments and enjoy working on
							projects that challenge my creativity and technical skills. My
							commitment to continuous learning drives me to stay updated with
							the latest trends and best practices in software engineering. I
							actively seek out new tools and technologies to enhance my coding
							abilities and improve project outcomes.
						</Typography>

						<Typography>
							In addition to my technical skills, I possess strong
							problem-solving abilities and a keen attention to detail, which
							enable me to tackle complex challenges effectively. I am eager to
							contribute to innovative projects and work alongside like-minded
							professionals who share my enthusiasm for technology.
						</Typography>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Resume;
