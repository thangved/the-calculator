import {
	Button,
	Collapse,
	Container,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';

function App() {
	const [a, setA] = useState<number>();
	const [b, setB] = useState<number>();
	const [step, setStep] = useState(0);

	return (
		<Container>
			<Stack
				spacing={2}
				sx={{
					width: '100%',
				}}
			>
				<Typography
					variant='h4'
					fontWeight='bold'
					textAlign='center'
					my={3}
				>
					The Calculator app
				</Typography>

				<Button
					variant='contained'
					onClick={() => {
						if (step !== 0) {
							setStep(0);
						} else {
							setStep(1);
						}
					}}
				>
					{step !== 0 ? 'Reset' : 'Start'}
				</Button>

				<Collapse in={step >= 1}>
					<Stack direction='row' spacing={1}>
						<TextField
							required
							placeholder='Enter first number'
							sx={{ flex: 1 }}
							label='First number'
							disabled={step !== 1}
							onChange={(e) => setA(parseInt(e.target.value))}
						/>
						<Button
							variant='contained'
							disabled={step !== 1 || a === undefined}
							onClick={() => setStep((prev) => ++prev)}
						>
							Next step
						</Button>
					</Stack>
				</Collapse>

				<Collapse in={step >= 2}>
					<Stack direction='row' spacing={1}>
						<TextField
							sx={{ flex: 1 }}
							required
							placeholder='Enter second number'
							label='Second number'
							disabled={step !== 2}
							onChange={(e) => setB(parseInt(e.target.value))}
						/>
						<Button
							variant='contained'
							disabled={step !== 2 || b === undefined}
							onClick={() => setStep((prev) => ++prev)}
						>
							Next step
						</Button>
					</Stack>
				</Collapse>

				<Collapse in={step >= 3}>
					<Button
						variant='contained'
						onClick={() => setStep((prev) => ++prev)}
					>
						Submit
					</Button>
				</Collapse>

				<Collapse in={step >= 4}>
					<Typography textAlign='center' variant='h4'>
						{a} + {b} = {a}
						{b}
					</Typography>
				</Collapse>
			</Stack>
		</Container>
	);
}

export default App;
