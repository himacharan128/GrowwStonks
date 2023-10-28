export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;//      NEXT_PUBLIC_API_KEY

  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
