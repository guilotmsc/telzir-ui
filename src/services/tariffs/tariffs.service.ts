import { ITariff } from "../../pages/Plans/interfaces/tariffs.interface";
import httpClient from "../api";

const url = process.env.REACT_APP_API_BASE_URL + "/tariffs";

export interface ITariffsQuerystringProps {
  plan: number | undefined;
  tariff: number | undefined;
  minutes: number;
}

export const getAllTariffs = async () =>
  await httpClient.get<ITariff[]>(url).then((response) => response.data);

export const getCalculatedPrice = async (args: ITariffsQuerystringProps) => {
  let queryString = "";
  Object.entries(args).forEach((arg) => {
    const [key, value] = arg;
    if (value !== null && value !== undefined)
      queryString += `${key}=${value}&`;
  });
  return await httpClient
    .get<number>(`${url}/calculate-tariff?${queryString}`)
    .then((response) => response.data);
};
