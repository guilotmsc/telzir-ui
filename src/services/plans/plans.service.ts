import { IPlan } from "../../pages/Plans/interfaces/plans.interface";
import httpClient from "../api";

const url = process.env.REACT_APP_API_BASE_URL + "/plans";

export const getAllPlans = async () => {
  return await httpClient.get<IPlan[]>(url).then((response) => response.data);
};
