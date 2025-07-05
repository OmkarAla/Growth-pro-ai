function DisplayCard({ data, onRegenerate, loading }) {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{data.name} - {data.location}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Google Rating:</span> {data.rating}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-bold">Reviews:</span> {data.reviews}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">SEO Headline:</span> {data.headline}
      </p>
      <button
        onClick={onRegenerate}
        disabled={loading}
        className={`w-full p-2 rounded text-white transition ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {loading ? 'Regenerating...' : 'Regenerate SEO Headline'}
      </button>
    </div>
  );
}

export default DisplayCard;