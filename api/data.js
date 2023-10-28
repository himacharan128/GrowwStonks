
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



// const API_KEY = 'apiKey';

// export async function getTopGainers() {
//   const url = `https://www.alphavantage.co/query?function=TOP_GAINERS&apikey=${API_KEY}`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.data.slice(0, 20);
//   } catch (err) {
//     console.error('Error fetching top gainers', err);
//   }
// }

// export async function getTopLosers() {
//   const url = `https://www.alphavantage.co/query?function=TOP_LOSERS&apikey=${API_KEY}`;
  
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.data.slice(0, 20);
//   } catch (err) {
//     console.error('Error fetching top losers', err);
//   }
// }