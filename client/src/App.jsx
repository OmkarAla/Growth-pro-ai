import { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayCard from './components/DisplayCard';
import './App.css';

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://growth-pro-ai.onrender.com';

  const handleFormSubmit = async (name, location) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location }),
      });
      const data = await response.json();
      if (response.ok) {
        setBusinessData(data);
      } else {
        setError(data.error || 'Failed to fetch business data');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(
          businessData.name
        )}&location=${encodeURIComponent(businessData.location)}`
      );
      const data = await response.json();
      setBusinessData({ ...businessData, headline: data.headline });
    } catch (err) {
      setError('Failed to regenerate headline');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Local Business Dashboard</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {loading && (
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {businessData && (
        <DisplayCard
          data={businessData}
          onRegenerate={handleRegenerateHeadline}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;