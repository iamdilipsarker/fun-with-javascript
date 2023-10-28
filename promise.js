const herResponse = new Promise((resolve, reject) => {
	reject("You don't deserve me");
});

const OurRequest = herResponse
	.then((resolveResponse) => {
		console.log(resolveResponse);
	})
	.catch((rejectResponse) => {
		console.error(rejectResponse);
	});
