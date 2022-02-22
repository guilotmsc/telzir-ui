import { ITariff } from "../../../pages/Plans/interfaces/tariffs.interface";

export interface ITariffTableProps {
  data: ITariff[];
  selectedData: ITariff | undefined;
  handleClick: (tariff: ITariff) => void;
}
