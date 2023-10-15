const nextConfig = {
	experimental: {
		appDir: true
	},

	publicRuntimeConfig: {
		favicon: './public/favicon.svg'
	},
	serverRuntimeConfig: {
		images: {
			domains: ['ohaomxltnhpdriahjpvz.supabase.co', 'esvelufzuzhhmsqjiior.supabase.co'],
			formats: ['image/webp']
		}
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ohaomxltnhpdriahjpvz.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/itx_storage/**'
			},
			{
				protocol: 'https',
				hostname: 'esvelufzuzhhmsqjiior.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/file/public/**'
			},
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
				port: '',
				pathname: '/**'
			}
		]
	}
}

module.exports = nextConfig
