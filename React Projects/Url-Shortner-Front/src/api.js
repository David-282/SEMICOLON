import axios from "axios"

const BASE_URL = "http://localhost:5000"

export const shortenUrl = async (originalUrl) => {
    const response = await axios.post(`${BASE_URL}/shorten`, {
        original_url: originalUrl
    })
    return response.data
}

export const getStats = async (shortCode) => {
    const response = await axios.get(`${BASE_URL}/stats/${shortCode}`)
    return response.data
}