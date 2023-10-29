import { useRouter } from "next/router";
import React from "react";
import temporaryData from "../utils/tempCompanyOverview.json";



function Company({ companyData }) {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto p-8">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-indigo-600">
          {companyData.Name}
        </h2>

        <div className="text-gray-600">
          <div className="font-medium">Currency</div>
          {companyData.Currency}
        </div>
      </div>

      <p className="mt-4 text-gray-600">{companyData.Description}</p>

      <div className="mt-4 flex text-gray-600">
        <div className="mr-6">
          <div className="font-medium">Address</div>
          {companyData.Address}
        </div>

        <div className="ml-6">
          <div className="font-medium">Sector</div>
          {companyData.Sector}
        </div>

        <div className="ml-6">
          <div className="font-medium">Industry</div>
          {companyData.Industry}
        </div>
      </div>

      <table className="mt-8 table-auto border-collapse text-gray-600 w-full mx-auto">
        <thead>
          <tr>
            <th className="py-2 pr-4 font-medium text-left">Key</th>  
            <th className="py-2 font-medium">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(companyData).map(([key, value]) => (
            <tr key={key}>
              <td className="py-2 pr-4 font-medium">{key}</td>
              <td className="py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Company;


export async function getServerSideProps(context) {
  const { params } = context;
  const { ticker } = params;

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }
  const companyData = await response.json();
  // const companyData=temporaryData
  return {
    props: {
      companyData,
    },
  };
}