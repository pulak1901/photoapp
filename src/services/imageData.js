const axios = require('axios').default

export const fetchImageData = () => {
    return axios.get("imageData")
}
