import { JSX } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// assets
import errorImage from '../../assets/images/maintenance/Error.webp';
import TwoCone from '../../assets/images/maintenance/TwoCone.png';

// ==============================|| ERROR 404 - MAIN ||============================== //

function Error404({ error = 'page' }: { error: string }): JSX.Element {
	return (
		<>
			<Grid
				container
				spacing={10}
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '80vh', pt: 1.5, pb: 1, overflow: 'hidden' }}
			>
				<Grid size={12}>
					<Stack direction='row'>
						<Grid>
							<Box
								sx={{
									width: { xs: 200, sm: 800 },
									aspectRatio: 16 / 9,
									marginBottom: { xs: 0, md: -5 },
								}}
							>
								<img
									src={errorImage}
									alt='error'
									style={{
										width: '100%',
										height: '100%',
										borderRadius: 200,
									}}
								/>
							</Box>
						</Grid>
						{/* <Grid item sx={{ position: 'relative' }}>
							<Box
								sx={{
									position: 'absolute',
									top: 60,
									left: -40,
									width: { xs: 130, sm: 390 },
									height: { xs: 115, sm: 330 },
								}}
							>
								<img
									src={TwoCone}
									alt='mantis'
									style={{ width: '100%', height: '100%' }}
								/>
							</Box>
						</Grid> */}
					</Stack>
				</Grid>
				<Grid size={12}>
					<Stack spacing={2} justifyContent='center' alignItems='center'>
						<Typography variant='h1'>{`${error} Not Found`}</Typography>
						<Typography
							color='textSecondary'
							align='center'
							sx={{ width: { xs: '73%', sm: '61%' } }}
						>
							{`The ${error} you are looking was moved, removed, renamed, or does not exist!`}
						</Typography>
						<Button component={Link} to={'/'} variant='contained'>
							Back To Home
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}

export default Error404;
