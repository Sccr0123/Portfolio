import { JSX } from 'react';
import { Grid } from '@mui/material';
import EducationCard from '../../components/experience/education';
import CareerCard from '../../components/experience/career';
import CertificationsCard from '../../components/experience/certifications';
import SkillsCard from '../../components/experience/skills';

const Experience = (): JSX.Element => {
	return (
		<Grid size={12} container spacing={2}>
			<Grid size={{ xs: 12, xl: 6 }} container>
				<CareerCard />
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

export default Experience;
