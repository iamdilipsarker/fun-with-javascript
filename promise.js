const herResponse = new Promise((resolve, reject) => {
	reject("You don't deserve me");
});

const myRequest = herResponse
	.then((resolveResponse) => {
		console.log(resolveResponse);
	})
	.catch((rejectResponse) => {
		console.error(rejectResponse);
	});
