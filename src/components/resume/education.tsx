import { Box, Card, Grid, Link, Tooltip, Typography } from '@mui/material';
import { JSX } from 'react';
import MsuLogo from '../../assets/logos/msu.svg';
import MacombLogo from '../../assets/logos/macomb.jpeg';
import UmFlintLogo from '../../assets/logos/umflint.png';
import MsuDiploma from '../../assets/diploma/msu.jpg';

const education: {
	school: string;
	url: string;
	location: string;
	image: string;
	start: string;
	end: string;
	major: string;
	diploma: string;
	minor: string;
	grade: string;
}[] = [
	{
		school: 'University Of Michigan-Flint',
		url: 'https://www.umflint.edu/',
		location: 'Flint, MI',
		image: UmFlintLogo,
		start: 'January 2025',
		end: 'December 2027',
		major: 'Bachelor of Science, Software Engineering',
		diploma: '',
		minor: 'General Business',
		grade: '4.0',
	},
	{
		school: 'Macomb Community College',
		url: 'https://www.macomb.edu/',
		location: 'Warren, MI',
		image: MacombLogo,
		start: 'August 2022',
		end: 'December 2024',
		major: 'Michigan Transfer Agreement',
		//major: 'Associate of Science, Computer Science Transfer',
		diploma: '',
		minor: '',
		grade: '2.35',
	},
	{
		school: 'Michigan State University',
		url: 'https://msu.edu/',
		location: 'East Lansing, MI',
		image: MsuLogo,
		start: 'January 2022',
		end: 'July 2022',
		major: 'Full Stack Web Development Boot Camp',
		diploma: MsuDiploma,
		minor: '',
		grade: '100.11%',
	},
];

const EducationCard = (): JSX.Element => {
	return (
		<Grid container width={'100%'} marginBottom={2}>
			<Grid container size={12} paddingX={2}>
				<Typography variant={'h4'} fontWeight={'bold'}>
					Education
				</Typography>
			</Grid>

			<Card
				sx={{ paddingX: 2, borderRadius: 5, width: '100%', height: 'auto' }}
			>
				<Grid container marginBottom={2}>
					{education.map(
						({
							school,
							diploma,
							image,
							location,
							major,
							minor,
							grade,
							url,
							start,
							end,
						}) => (
							<Grid size={{ xs: 12 }} container paddingTop={2}>
								<Grid size={{ xs: 12, md: 5 }} container>
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
										<Tooltip title={url && 'Click To Navigate'}>
											{url ? (
												<Link href={url} underline={'hover'} color={'inherit'}>
													<Typography variant={'h5'}>{school}</Typography>
												</Link>
											) : (
												<Typography variant={'h5'}>{school}</Typography>
											)}
										</Tooltip>
										<Typography>{`${start} - ${end ? end : 'Present'}`}</Typography>
										<Typography>{location}</Typography>
									</Grid>
								</Grid>

								<Grid size={{ xs: 12, md: 7 }} container>
									<Grid
										size={12}
										container
										paddingLeft={2}
										direction={'column'}
									>
										<Tooltip
											placement={'bottom-start'}
											title={
												diploma && (
													<Box
														bgcolor={'transparent'}
														component={'img'}
														src={diploma}
														maxWidth={'15vw'}
														marginLeft={-0.5}
														sx={{
															aspectRatio: '16/9',
														}}
													/>
												)
											}
										>
											<Typography variant={'h5'}>{major}</Typography>
										</Tooltip>
										{minor && <Typography>{`Minor: ${minor}`}</Typography>}
										{grade && (
											<Typography>{`${grade && grade.includes('%') ? 'Grade:' : 'GPA:'} ${grade}`}</Typography>
										)}
									</Grid>
								</Grid>
							</Grid>
						),
					)}
				</Grid>
			</Card>
		</Grid>
	);
};

export default EducationCard;
