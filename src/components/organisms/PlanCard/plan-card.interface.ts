import { IPlan } from "../../../pages/Plans/interfaces/plans.interface";

export interface IPlanCardProps {
  data: IPlan[];
  selectedData: IPlan | undefined;
  handleClick: (plan: IPlan) => void;
}
