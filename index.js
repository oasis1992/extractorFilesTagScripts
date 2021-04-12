const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const CryptoJS = require('crypto-js');
const cheerio = require('cheerio');

const URL = 'https://www.fincaraiz.com.co/apartamentos/arriendo/bogota';

(async function main() {
	const downloadFile = (
		url,
		dest
	) => new Promise((resolve, reject) => {
		const file = fs.createWriteStream(dest);
		const request = https.get(url, (response) => {
			if (response.statusCode !== 200) {
				reject(response.statusCode);
			}
			response.pipe(file);
		});

		file.on('finish', () => {
			file.close();
			resolve();
		});

		request.on('error', (e) => {
			reject(e);
		});

		file.on('error', (e) => {
			reject(e);
		});
	});

	const saveFilePath = (path, data) => new Promise((resolve, reject) =>fs.writeFile(path, data, function (err) {
		if (err) {
			reject(error.message);
		}
		resolve();
	}));

	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(URL, { waitUntil: 'networkidle0' });
		const data = await page.content();

		// example encode and decode https://gist.github.com/joecliff/10948117
		// encode base64
		const wordArray = CryptoJS.enc.Utf8.parse(data);
		// this save in db
		const base64 = CryptoJS.enc.Base64.stringify(wordArray);
		const newData = {
			data: base64,
		};
		await saveFilePath(`./text.json`, JSON.stringify(newData, null, 2));
		// extract scripts
		const $ = cheerio.load(data);

		const hash = Date.now()
		$('script').get().forEach(async (item, index) => {
			const src = item.attribs['src'];
			if (src) {
				try {await downloadFile(src,`./scriptsDownload/${hash}-script${index}.js`);
					return;
				} catch (e) {
					if (e === 302) {
						return;
					}

					if (src && e.code === 'ERR_INVALID_URL') {
						if (/^\/\//.test(src)) {
							const newUrlWithOutSlashes = src.split('//')[1];
							const url = `https://${newUrlWithOutSlashes}`;
							try {
								await downloadFile(url,`./scriptsDownload/${hash}-script${index}.js`);
							} catch (e) {
								if (typeof e === 'number') {
									console.log(`URL : ${url} with statusCode: ${e}`);
									return;
								}
								console.log(e.message);
							}
							return;
						}

						if (/^\//.test(src)) {
							const url = `${URL}${src}`;
							try {
								await downloadFile(url,`./scriptsDownload/${hash}-script${index}.js`);
							} catch (e) {
								if (typeof e === 'number') {
									console.log(`URL : ${url} with statusCode: ${e}`);
									return;
								}
								console.log(e.message);
							}

							return;
						}
					}
				}
				return;
			}

			await saveFilePath(`./scriptsDownload/${hash}-script${index}.js`, item.children[0].data)
		});

		$('link').get().forEach(async (item, index) => {
			if (item.attribs['rel'] === 'stylesheet') {
				const stylesheet = item.attribs['href'];
				const dominio = 'https://www.fincaraiz.com.co';
				const fullURL = `${dominio}${stylesheet}`;
				if (fullURL) {
					try {
						await downloadFile(fullURL, `./styleDownloaded/${hash}-style${index}.css`);
						return;
					} catch (e) {
						console.error(e);
					}
					if (fullURL) {
						try {
							await downloadFile(fullURL, `./styleDownloaded/${hash}-style${index}.css`);
						} catch (e) {
							console.log(e);
						}
					}
					return;
				}
				await saveFilePath(`./styleDownloaded/${hash}-style${index}.css`, fullURL);
			}
		});

		$('style').get().forEach(async (item, index) => {
			const data = item.children[0].data;
			await saveFilePath(`./styleDownloaded/${hash}-style${index}.css`, data);
		});
		await browser.close();
	} catch (err) {
		console.error(err);
	}
})();
