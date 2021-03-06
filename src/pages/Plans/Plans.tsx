import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Fade,
  CircularProgress,
  Snackbar,
  useTheme,
  alpha,
} from "@mui/material";
import { getAllPlans } from "../../services/plans/plans.service";
import {
  getAllTariffs,
  getCalculatedPrice,
} from "../../services/tariffs/tariffs.service";
import { IPlan } from "./interfaces/plans.interface";
import { ITariff } from "./interfaces/tariffs.interface";
import TariffTable from "../../components/organisms/TariffTable";
import ActionBar from "../../components/molecules/ActionBar";
import PlanCard from "../../components/organisms/PlanCard";

export default function Plans() {
  const theme = useTheme();

  const [plans, setPlans] = useState<IPlan[]>([]);
  const [tariffs, setTariffs] = useState<ITariff[]>([]);
  const [minutes, setMinutes] = useState("");
  const [price, setPrice] = useState<number | null>();

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [selectedPlan, setSelectedPlan] = useState<IPlan>();
  const [selectedTariff, setSelectedTariff] = useState<ITariff>();

  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getPlans();
    getTariffs();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const getPlans = async () => {
    const response = await getAllPlans();
    setPlans(response);
  };

  const getTariffs = async () => {
    const response = await getAllTariffs();
    setTariffs(response);
  };

  useEffect(() => {
    if (!selectedPlan || !selectedTariff || minutes === "") {
      setIsDisabled(true);
      return;
    }

    setIsDisabled(false);
  }, [selectedPlan, selectedTariff, minutes]);

  const consultPrice = async () => {
    if (!selectedPlan) return;

    if (parseInt(minutes) < selectedPlan?.free_minutes) {
      setPrice(null);
      setOpen(true);
      return;
    }

    const params = {
      plan: selectedPlan?.id,
      tariff: selectedTariff?.id,
      minutes: parseInt(minutes),
    };

    const response = await getCalculatedPrice(params);

    if (response) {
      setPrice(response);
    }
  };

  if (isLoading) {
    return (
      <Container sx={{ pt: 56 }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Container sx={{ pt: 8, pb: 16 }}>
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 6, pb: 6 }}
        >
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ pb: 2 }}
          >
            Bem vindo a Telzir
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Selecione um plano FaleMais
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <PlanCard
            data={plans}
            selectedData={selectedPlan}
            handleClick={(plan: IPlan) => setSelectedPlan(plan)}
          />
        </Container>
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Selecione a origem e destino da liga????o
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <TariffTable
            data={tariffs}
            selectedData={selectedTariff}
            handleClick={(data: ITariff) => setSelectedTariff(data)}
          />
        </Container>

        {price && (
          <Fade timeout={1500} in={price ? true : false}>
            <Container
              disableGutters
              maxWidth="sm"
              component="main"
              sx={{ pt: 12, pb: 6 }}
            >
              <Box
                display="flex"
                sx={{
                  paddingY: 5,
                  paddingX: 10,
                  borderRadius: 100,
                  border: `2px solid ${alpha(
                    theme.palette.primary.light,
                    0.8
                  )}`,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  color="text.secondary"
                  component="p"
                >
                  Com o plano <strong>{selectedPlan?.name}</strong> voc?? fala{" "}
                  {selectedPlan?.free_minutes} minutos gr??tis e s?? paga{" "}
                  <strong>
                    R$ {price?.toFixed(2).toString().replace(".", ",")}
                  </strong>{" "}
                  pelos minutos adicionais!
                </Typography>
              </Box>
            </Container>
          </Fade>
        )}

        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 6, pb: 6 }}
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Quantos minutos voc?? deseja falar?
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <ActionBar
            isDisabled={isDisabled}
            handleTextChange={(value) => setMinutes(value)}
            handleConfirm={consultPrice}
          />
        </Container>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="A quantidade de minutos inserida ?? menor que a quantidade gratuita de minutos do plano"
        />
      </Container>
    </React.Fragment>
  );
}
