import { Link } from 'react-router-dom';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// assets
import construction from '../../assets/images/maintenance/under-construction.svg';

// ==============================|| UNDER CONSTRUCTION - MAIN ||============================== //

function UnderConstruction() {
	return (
		<Grid
			container
			spacing={4}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: '80vh', py: 2 }}
		>
			<Grid container size={12} justifyContent={'center'}>
				<Box
					component={'img'}
					src={construction}
					alt='under construction'
					sx={{ width: { xs: 300, sm: 480 } }}
				/>
			</Grid>
			<Grid size={12}>
				<Stack spacing={2} justifyContent='center' alignItems='center'>
					<Typography align={'center'} variant={'h2'}>
						Under Construction
					</Typography>
					<Typography
						color='textSecondary'
						align='center'
						sx={{ width: '85%' }}
					>
						Hey! Please check out this site later. We are doing some maintenance
						on it right now.
					</Typography>
					<Button component={Link} to={'/'} variant='contained'>
						Back To About
					</Button>
				</Stack>
			</Grid>
		</Grid>
	);
}

export default UnderConstruction;
