var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.js',
	out: 'public',
	isDev : process.env.NODE_ENV !== 'prod'
	//should put here your hostname
	//hostname : 'anacleto.local'
});
