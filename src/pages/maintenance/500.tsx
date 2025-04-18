import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
	Box,
	Button,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from '@mui/material';

// assets
import error500 from 'assets/images/maintenance/Error500.png';

// ==============================|| ERROR 500 - MAIN ||============================== //

function Error500() {
	const theme = useTheme();
	const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '80vh' }}
			>
				<Grid size={12}>
					<Box sx={{ width: { xs: 350, sm: 396 } }}>
						<img
							src={error500}
							alt='error 500'
							style={{ height: '100%', width: '100%' }}
						/>
					</Box>
				</Grid>
				<Grid size={12}>
					<Stack justifyContent='center' alignItems='center'>
						<Typography align='center' variant={matchDownSM ? 'h2' : 'h1'}>
							Internal Server Error
						</Typography>
						<Typography
							color='textSecondary'
							variant='body2'
							align='center'
							sx={{ width: { xs: '73%', sm: '70%' }, mt: 1 }}
						>
							We fixing the problem. Please try again later.
						</Typography>
						<Button
							component={Link}
							to={'/'}
							variant='contained'
							sx={{ textTransform: 'none', mt: 4 }}
						>
							Back To Home
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}

export default Error500;
