module.exports = {
	function(client) {
		client
			.url('https://www.file.io/')
			//.pause(5 * 1000)
			.waitForElementVisible('body', 5 * 1000)
			.waitForElementPresent('input[type="file"]', 5 * 1000)
			.setValue('input[type="file"]', require('path').resolve('./assets/panda.jpg'));
	}
};
