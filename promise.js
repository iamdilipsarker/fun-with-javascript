const herResponse = new Promise((resolve, reject) => {
	reject("You don't deserve me");
});

const yourRequest = herResponse
	.then((resolveResponse) => {
		console.log(resolveResponse);
	})
	.catch((rejectResponse) => {
		console.error(rejectResponse);
	});
