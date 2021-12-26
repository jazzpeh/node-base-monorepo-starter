import express from 'express';
import { sum } from '@example/common';

const app = express();
const port = 3000;
app.use(express.json());

app.post('/sum', (req, res) => {
	console.log(req.body);
	const nums: number[] = req.body.nums;
	res.send({ value: sum(...nums) });
});

app.listen(port, () => {
	console.log(`Example service listening at http://localhost:${port}`);
});
