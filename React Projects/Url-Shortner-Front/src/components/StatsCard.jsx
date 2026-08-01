import { useState } from "react"
import { getStats } from "../api"

function StatsCard() {
    const [shortCode, setShortCode] = useState("")
    const [stats, setStats] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handleStats() {
        if (!shortCode) {
            setError("Please enter a short code")
            return
        }

        try {
            setIsLoading(true)
            setError(null)
            const data = await getStats(shortCode)
            setStats(data)
        } catch (err) {
            setError("Short code not found. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-xl">

            <h2 className="text-xl font-semibold text-gray-700 mb-4">Check Stats</h2>

            {/* input + button */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={shortCode}
                    onChange={(e) => setShortCode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleStats()}
                    placeholder="Enter short code e.g. 8ffdefbd"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleStats}
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    {isLoading ? "Loading..." : "Get Stats"}
                </button>
            </div>

            {/* error */}
            {error && (
                <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}

            {/* stats result */}
            {stats && (
                <div className="mt-4 bg-white rounded-lg shadow p-6">
                    <p className="text-sm text-gray-500">Original URL</p>
                    <p className="text-gray-700 truncate mb-4">{stats.original_url}</p>

                    <p className="text-sm text-gray-500">Short URL</p>
                    <p className="text-blue-600 mb-4">{stats.short_url}</p>

                    <div className="flex gap-8">
                        <div>
                            <p className="text-sm text-gray-500">Clicks</p>
                            <p className="text-2xl font-bold text-blue-600">{stats.clicks}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Created</p>
                            <p className="text-gray-700">{stats.created_at}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StatsCard