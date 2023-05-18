export const primaryColor = '#fb3131';

export const isMobileDevice = () => {
    if (typeof window !== 'undefined') {
        const { userAgent } = navigator;

        return (
            userAgent.match(
                /iPhone|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i,
            ) != null || userAgent.match(/LG|SAMSUNG|Samsung/) != null
        );
    }
    return false;
};
