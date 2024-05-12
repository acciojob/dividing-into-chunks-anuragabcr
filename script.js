const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	sub = []
	temp = []
	for(let i=0;i<arr.length;i++) {
		temp.push(arr[i])
		sum = 0
		temp.forEach(x => {sum+=x})
		if(sum > n) {
			temp.pop()
			sub.push(temp)
			temp = []
			temp.push(arr[i])
		}
	} 
	sub.push(temp)
	return sub
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
