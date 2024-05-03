/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.imagin.studio',
        ]
    },
    i18n: {
        locales: [
            "en", "tr"
        ],
        defaultLocale: 'en',
        localeDetection: false,
    },

};

export default nextConfig;
