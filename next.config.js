/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

module.exports = nextConfig;

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});

module.exports = removeImports({
	...nextConfig,
});
