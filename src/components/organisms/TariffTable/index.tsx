import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "./styles";
import { ITariff } from "../../../pages/Plans/interfaces/tariffs.interface";
import { ITariffTableProps } from "./tariff-table.interface";

export default function TariffTable(props: ITariffTableProps) {
  const { data, selectedData, handleClick } = props;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        data-testid="table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Origem</StyledTableCell>
            <StyledTableCell align="center">Destino</StyledTableCell>
            <StyledTableCell align="center">Tarifa por min.</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tariff: ITariff) => (
            <StyledTableRow
              key={tariff.id}
              selected={selectedData?.id === tariff.id}
              onClick={() => handleClick(tariff)}
            >
              <StyledTableCell align="center">{tariff.origin}</StyledTableCell>
              <StyledTableCell align="center">
                {tariff.destination}
              </StyledTableCell>
              <StyledTableCell align="center">
                R$ {tariff.tariff.toString().replace(".", ",")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
