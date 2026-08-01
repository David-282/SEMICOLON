import { useState } from "react"
import ShortenForm from "./components/ShortenForm"
import ResultCard from "./components/ResultCard"
import StatsCard from "./components/StatsCard"

function App() {
    const [results, setResults] = useState([])

    function handleResult(newResult) {
        setResults(prev => [newResult, ...prev])
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">

            {/* header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600">URL Shortener</h1>
                <p className="text-gray-500 mt-2">Paste a long URL and get a short one instantly</p>
            </div>

            {/* form */}
            <ShortenForm onResult={handleResult} />

            {/* all results */}
            {results.length > 0 && (
                <div className="w-full max-w-xl mt-6">
                    <p className="text-sm text-gray-500 mb-2">Generated Links</p>
                    {results.map((result, index) => (
                        <ResultCard key={index} result={result} />
                    ))}
                </div>
            )}

            {/* divider */}
            <div className="w-full max-w-xl my-8 border-t border-gray-300" />

            {/* stats section */}
            <StatsCard />

        </div>
    )
}

export default App