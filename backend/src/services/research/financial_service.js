import axios from "axios";

const BASE_URL = "https://financialmodelingprep.com/stable";

export const searchCompany = async (companyName) => {
  const response = await axios.get(`${BASE_URL}/search-name`, {
    params: {
      query: companyName,
      apikey: process.env.FMP_API_KEY,
    },
  });

  if (!response.data.length) {
    throw new Error("Company not found");
  }

  // Prefer NASDAQ/NYSE listing
  const company =
    response.data.find(
      (item) =>
        item.exchange === "NASDAQ" ||
        item.exchange === "NYSE"
    ) || response.data[0];

  return company.symbol;
};

export const getFinancialData = async (symbol) => {

    const [profile, metrics, income] = await Promise.all([

        axios.get(`${BASE_URL}/profile`, {
            params: {
                symbol,
                apikey: process.env.FMP_API_KEY
            }
        }),

        axios.get(`${BASE_URL}/key-metrics`, {
            params: {
                symbol,
                apikey: process.env.FMP_API_KEY
            }
        }),

        axios.get(`${BASE_URL}/income-statement`, {
            params: {
                symbol,
                apikey: process.env.FMP_API_KEY
            }
        })

    ]);

    return {
        profile: profile.data[0],
        metrics: metrics.data[0],
        income: income.data[0]
    };
};