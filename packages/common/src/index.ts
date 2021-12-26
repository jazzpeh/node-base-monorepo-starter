export const sum = (...numArr: number[]): number => {
	return numArr.reduce((total, num) => total + num, 0);
};
