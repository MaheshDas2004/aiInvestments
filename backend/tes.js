import "dotenv/config";
import { getFinancialData, searchCompany } from "./src/services/research/financial_service.js";

const symbol = await searchCompany("Tesla");

console.log(symbol);

const data = await getFinancialData(symbol);

console.log(data);