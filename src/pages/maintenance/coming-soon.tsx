// material-ui
import {
	Box,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

// assets
import underConstructionImage from '../../assets/images/maintenance/under-construction.svg';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('America/Detroit');

// ==============================|| COMING SOON - MAIN ||============================== //

const TimerBox = ({ count, label }: { count: number; label: string }) => {
	const theme = useTheme();
	const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Stack width={{ xs: 60, sm: 80 }}>
			<Stack justifyContent={'center'} alignItems={'center'}>
				<Box>
					<Typography variant={matchDownSM ? 'h4' : 'h2'}>{count}</Typography>
				</Box>
				<Box sx={{ bgcolor: 'secondary.lighter', width: '100%' }}>
					<Typography align={'center'} variant={'subtitle2'}>
						{label}
					</Typography>
				</Box>
			</Stack>
		</Stack>
	);
};

function ComingSoon() {
	const time = dayjs
		.tz('04-01-2025', 'MM-DD-YYYY', 'America/Detroit')
		.startOf('day');

	const currentDate = dayjs.tz();

	const days = time.diff(currentDate, 'days');

	const hours = time
		.clone()
		.diff(currentDate.clone().add(days, 'days'), 'hours');

	const minutes = time.diff(
		currentDate.clone().add(days, 'days').add(hours, 'hours'),
		'minutes',
	);

	const seconds = time
		.clone()
		.diff(
			currentDate
				.clone()
				.add(days, 'days')
				.add(hours, 'hours')
				.add(minutes, 'minutes'),
			'seconds',
		);

	return (
		<Grid container width={'100vw'} justifyContent={'center'}>
			<Grid
				container
				spacing={4}
				direction={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				sx={{ minHeight: '100vh', py: 2 }}
			>
				<Grid size={12}>
					<Box
						sx={{
							height: { xs: 310, sm: 420 },
							width: { xs: 360, sm: 'auto' },
						}}
					>
						<Box
							component={'img'}
							src={underConstructionImage}
							alt={'coming soon'}
							style={{ height: '100%', width: '100%' }}
						/>
					</Box>
				</Grid>
				<Grid size={12}>
					<Stack
						spacing={1}
						justifyContent={'center'}
						alignItems={'center'}
						sx={{ mt: -2 }}
					>
						<Typography align={'center'} variant={'h1'}>
							Coming Soon
						</Typography>
						<Typography align={'center'}>
							Something new is on its way
						</Typography>
					</Stack>
				</Grid>
				<Grid size={12} sx={{ width: { xs: '95%', md: '40%' } }}>
					<Stack
						direction={'row'}
						alignItems={'center'}
						justifyContent={'center'}
						spacing={{ xs: 1, sm: 2 }}
						height={'100%'}
					>
						<TimerBox count={days} label={'Days'} />
						<Typography variant='h1'> : </Typography>
						<TimerBox count={hours} label={'Hours'} />
						<Typography variant='h1'> : </Typography>
						<TimerBox count={minutes} label={'Mins'} />
						<Typography variant='h1'> : </Typography>
						<TimerBox count={seconds} label={'Secs'} />
					</Stack>
				</Grid>
				{/* <Grid size={12} sx={{ width: { xs: 380, md: '40%', lg: '30%' } }}>
					<Stack spacing={2} sx={{ mt: 2 }}>
						<Typography align='center' color='textSecondary'>
							Be the first to be notified when Mantis launches.
						</Typography>
						<Stack direction='row' spacing={1}>
							<TextField fullWidth placeholder='Email Address' />
							<Button variant='contained' sx={{ width: '50%' }}>
								Notify Me
							</Button>
						</Stack>
					</Stack>
				</Grid> */}
			</Grid>
		</Grid>
	);
}

export default ComingSoon;
