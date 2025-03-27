import { Link } from 'react-router-dom';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// assets
import error401 from 'assets/images/maintenance/Error401.png';
import TwoCone from 'assets/images/maintenance/TwoCone.png';
import { JSX } from 'react';
// ==============================|| ERROR 404 - MAIN ||============================== //

function Error401(): JSX.Element {
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
									width: { xs: 250, sm: 590 },
									height: { xs: 130, sm: 300 },
								}}
							>
								<img
									src={error401}
									alt='Error 401'
									style={{ width: '100%', height: '100%' }}
								/>
							</Box>
						</Grid>
						<Grid sx={{ position: 'relative' }}>
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
						</Grid>
					</Stack>
				</Grid>
				<Grid size={12}>
					<Stack spacing={2} justifyContent='center' alignItems='center'>
						<Typography variant='h1'>
							You do not have permission to access this site
						</Typography>
						<Typography
							color='textSecondary'
							align='center'
							sx={{ width: { xs: '73%', sm: '61%' } }}
						>
							Please contact Administrator
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}

export default Error401;
