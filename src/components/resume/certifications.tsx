import { Box, Card, Grid, minor, Typography } from '@mui/material';
import { JSX } from 'react';
import MSU from '../../assets/logos/msu.svg';
import Macomb from '../../assets/logos/macomb.jpeg';
import UM from '../../assets/logos/umflint.png';

const education: {
	school: string;
	location: string | null;
	image: string;
	start: string;
	end: string | null;
	major: string;
	minor: string | null;
	grade: string | null;
}[] = [
	{
		school: 'University Of Michigan-Flint',
		location: 'Flint, MI',
		image: UM,
		start: 'January 2025',
		end: null,
		major: 'Bachelor of Science, Software Engineering',
		minor: 'General Business',
		grade: '4.0',
	},
	{
		school: 'Macomb Community College',
		location: 'Warren, MI',
		image: Macomb,
		start: 'Unknown',
		end: 'December 2024',
		major: 'Associate of Science, Computer Science Transfer',
		minor: null,
		grade: '2.3',
	},
	{
		school: 'Michigan State University',
		location: 'East Lansing, MI',
		image: MSU,
		start: 'January 2022',
		end: 'July 2022',
		major: 'Web Development Bootcamp',
		minor: null,
		grade: '100.11%',
	},
];

const CertificationsCard = (): JSX.Element => {
	return (
		<Grid container width={'100%'} marginBottom={2}>
			<Grid container size={12} paddingX={2}>
				<Typography variant={'h4'} fontWeight={'bold'}>
					Certifications
				</Typography>
			</Grid>

			<Card
				sx={{ paddingX: 2, borderRadius: 5, width: '100%', height: 'auto' }}
			>
				<Grid container marginBottom={2}>
					{education.map(({ school, image, location, major, minor, grade }) => (
						<Grid size={{ xs: 12 }} container paddingTop={2}>
							<Grid size={{ xs: 12, md: 6, xl: 5 }} container>
								{image && (
									<Grid size={1} container justifyContent={'center'}>
										<Box component={'img'} src={image} maxHeight={50} />
									</Grid>
								)}

								<Grid
									size={{ xs: image ? 11 : 12 }}
									container
									paddingLeft={2}
									direction={'column'}
								>
									<Typography variant={'h5'}>{school}</Typography>
									<Typography>{location}</Typography>
								</Grid>
							</Grid>

							<Grid size={{ xs: 12, md: 6, xl: 7 }} container>
								<Grid size={12} container paddingLeft={2} direction={'column'}>
									<Typography variant={'h5'}>{major}</Typography>
									{minor && <Typography>{`Minor: ${minor}`}</Typography>}
									{grade && <Typography>{`Grade: ${grade}`}</Typography>}
								</Grid>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Card>
		</Grid>
	);
};

export default CertificationsCard;
