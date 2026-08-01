import { useState } from "react"
import { shortenUrl } from "../api"

function ShortenForm({ onResult }) {
    const [inputUrl, setInputUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handleSubmit() {
        if (!inputUrl) {
            setError("Please enter a URL")
            return
        }

        let formattedUrl = inputUrl
        if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
            formattedUrl = `https://${inputUrl}`
        }

        try {
            setIsLoading(true)
            setError(null)
            const result = await shortenUrl(formattedUrl)
            onResult(result)
            setInputUrl("")
        } catch (err) {
            setError("Invalid URL or something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-xl">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="Paste your long URL here"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    {isLoading ? "Shortening..." : "Shorten"}
                </button>
            </div>
            {error && (
                <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}
        </div>
    )
}

export default ShortenForm