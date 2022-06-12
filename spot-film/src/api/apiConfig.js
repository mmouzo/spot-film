const apiConfig = {

    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: '55a26e8933040584c5520c2ab3508c63',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;