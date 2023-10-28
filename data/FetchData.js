import fetch from 'isomorphic-unfetch';

export default async function getTopGainersLosers() {
  const apiKey = process.env.apiKey;
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const topGainers = data.top_gainers.slice(0, 20);
    const topLosers = data.top_losers.slice(0, 20);
    console.log('Data fetched and stored and being sent')
    return { topGainers, topLosers };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}