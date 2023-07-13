
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function f() {

	const response = await openai.createImage({
		prompt: "upside down tree",
		n: 1,
		size: "256x256",
	});
	image_url = response.data.data[0].url;
	console.log(image_url);
}
f();




