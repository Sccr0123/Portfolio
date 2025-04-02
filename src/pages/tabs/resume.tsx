import { Card, Grid } from '@mui/material';
import { JSX } from 'react';

const Resume = (): JSX.Element => {
	return (
		<Grid container>
			{/* <header className='text-center mb-6'>
				<h1 className='text-4xl font-bold text-gray-900'>John Doe</h1>
				<p className='text-gray-600 text-lg'>Software Engineer</p>
			</header> */}

			<Card sx={{ paddingX: 2, borderRadius: 10 }}>
				<Grid container direction={'column'}>
					<h2 className='text-2xl font-bold text-gray-800 border-b-4 border-gray-300 pb-2'>
						EXPERIENCE
					</h2>
					<div className='bg-white p-6 mt-4 rounded-lg shadow-md border-l-4 border-blue-500'>
						<h3 className='font-bold text-xl text-gray-900'>
							TechCorp Experience Labs
						</h3>
						<div className='border-l-2 border-gray-300 pl-4 mt-2'>
							<div className='mb-3'>
								<h4 className='font-semibold text-lg text-gray-800'>
									Lead Software Engineer
								</h4>
								<p className='text-gray-600 text-md'>Jan 2023 - Present</p>
								<ul className='list-disc pl-6 text-gray-700 text-md'>
									<li>Led a team in developing scalable software solutions.</li>
									<li>
										Implemented CI/CD pipelines, reducing deployment times.
									</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold text-lg text-gray-800'>
									Software Engineer
								</h4>
								<p className='text-gray-600 text-md'>Jan 2020 - Dec 2022</p>
								<ul className='list-disc pl-6 text-gray-700 text-md'>
									<li>
										Developed frontend applications with React and TypeScript.
									</li>
									<li>Optimized database queries, improving performance.</li>
								</ul>
							</div>
						</div>
					</div>
				</Grid>
			</Card>

			<section className='mb-8'>
				<h2 className='text-2xl font-bold text-gray-800 border-b-4 border-gray-300 pb-2'>
					SKILLS
				</h2>
				<div className='bg-white p-6 mt-4 rounded-lg shadow-md'>
					<p className='text-gray-900 text-md font-medium'>
						JavaScript, TypeScript, React, Node.js, SQL, DevOps, Tailwind CSS
					</p>
				</div>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-bold text-gray-800 border-b-4 border-gray-300 pb-2'>
					EDUCATION
				</h2>
				<div className='bg-white p-6 mt-4 rounded-lg shadow-md'>
					<h3 className='font-bold text-lg text-gray-900'>
						University of Michigan - Flint
					</h3>
					<p className='text-gray-600 text-md'>
						Bachelor of Science in Software Engineering
					</p>
				</div>
			</section>

			<section>
				<h2 className='text-2xl font-bold text-gray-800 border-b-4 border-gray-300 pb-2'>
					CERTIFICATION
				</h2>
				<div className='bg-white p-6 mt-4 rounded-lg shadow-md'>
					<h3 className='font-bold text-lg text-gray-900'>
						Michigan State University
					</h3>
					<p className='text-gray-600 text-md'>
						Full Stack Web Development - Boot Camp
					</p>
				</div>
			</section>
		</Grid>
	);
};

export default Resume;
