/** @type {import('@userway/cicd-cli').schema.Config} */
module.exports = { 
 organization: 'alex-userway-org',
 project: 'admin-dashboard',
 reportPaths: ['./uw-a11y-reports'], // 
 page: [{ “/blog”, device:... }], //
 token: process.env.USERWAY_TOKEN,
 scope: DELTA,
 targetBrach: “main”
};
