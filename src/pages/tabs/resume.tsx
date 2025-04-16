import { JSX } from 'react';
import { Card, Grid } from '@mui/material';
import EducationCard from '../../components/resume/education';
import ExperienceCard from '../../components/resume/experience';
import CertificationsCard from '../../components/resume/certifications';
import SkillsCard from '../../components/resume/skills';

const Resume = (): JSX.Element => {
	return (
		<Grid size={12} container spacing={2}>
			<Grid size={{ xs: 12, xl: 6 }} container>
				<ExperienceCard />
			</Grid>
			<Grid size={{ xs: 12, xl: 6 }} container>
				<Grid size={12} direction={'column'} spacing={2}>
					<EducationCard />
					{/* <CertificationsCard /> */}
					<SkillsCard />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Resume;
