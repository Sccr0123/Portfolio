import { JSX } from 'react';
import { Grid } from '@mui/material';
import EducationCard from '../../components/experience/education';
import CareerCard from '../../components/experience/career';
import SkillsCard from '../../components/experience/skills';

const Experience = (): JSX.Element => {
	return (
		<Grid container width={'100%'}>
			<Grid size={12} container spacing={2}>
				{/* Left Column */}
				<Grid size={{ xs: 12, lg: 6 }} container>
					<CareerCard />
				</Grid>

				{/* Right Column */}
				<Grid
					size={{ xs: 12, lg: 6 }}
					container
					direction={'column'}
					spacing={2}
				>
					<Grid size={12} container>
						<EducationCard />
					</Grid>
					<Grid size={12} container>
						<SkillsCard />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Experience;
