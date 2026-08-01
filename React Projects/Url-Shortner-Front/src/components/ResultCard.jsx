import { useState } from "react"

function ResultCard({ result }) {
    const [copied, setCopied] = useState(false)
    const [codeCopied, setCodeCopied] = useState(false)

    async function handleCopyUrl() {
        await navigator.clipboard.writeText(result.short_url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    async function handleCopyCode() {
        await navigator.clipboard.writeText(result.short_code)
        setCodeCopied(true)
        setTimeout(() => setCodeCopied(false), 2000)
    }

    return (
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-6 mt-6">

            {/* short url + copy button */}
            <p className="text-sm text-gray-500 mb-1">Short URL</p>
            <div className="flex gap-2 items-center mb-4">
                <a
                href={result.short_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium hover:underline flex-1 truncate"
                >
                {result.short_url}
            </a>
            <button
                onClick={handleCopyUrl}
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
            >
                {copied ? "Copied!" : "Copy URL"}
            </button>
        </div>

    {/* short code + copy button */}
    <p className="text-sm text-gray-500 mb-1">Short Code</p>
    <div className="flex gap-2 items-center">
        <p className="text-gray-700 flex-1 font-mono">{result.short_code}</p>
        <button
            onClick={handleCopyCode}
            className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
        >
            {codeCopied ? "Copied!" : "Copy Code"}
        </button>
    </div>

</div>
)
}

export default ResultCard