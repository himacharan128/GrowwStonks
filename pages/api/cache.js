import Redis from "ioredis";

const redis = new Redis({
  host: process.env.NEXT_PUBLIC_REDIS_HOST,
  port: process.env.NEXT_PUBLIC_REDIS_PORT,
  password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
});

export async function fetchAndCacheData(apiKey) {
  const cachedData = await redis.get("cachedData");

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    await redis.set("cachedData", JSON.stringify(data), "EX", 60 * 60 * 5);
    return data;
  } else {
    throw new Error("Failed to fetch data from the API.");
  }
}