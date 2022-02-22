import React from "react";
import {
  Card,
  Grid,
  alpha,
  useTheme,
  CardHeader,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { IPlan } from "../../../pages/Plans/interfaces/plans.interface";
import { IPlanCardProps } from "./plan-card.interface";

export default function PlanCard(props: IPlanCardProps) {
  const theme = useTheme();
  const { data, selectedData, handleClick } = props;

  return (
    <Grid container spacing={5} alignItems="flex-end">
      {data.map((plan: IPlan) => (
        <Grid item key={plan.name} xs={12} sm={6} md={4}>
          <Card
            sx={{
              border:
                plan.id === selectedData?.id
                  ? `2px solid ${alpha(theme.palette.primary.light, 0.8)}`
                  : "none",
              borderRadius: 2,
              cursor: "pointer",
            }}
            onClick={() => {
              handleClick(plan);
            }}
          >
            <CardHeader
              title={plan.name}
              titleTypographyProps={{ align: "center" }}
              subheaderTypographyProps={{
                align: "center",
              }}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  mb: 2,
                }}
              >
                <Typography component="h2" variant="h3" color="text.primary">
                  {plan.free_minutes}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  min
                </Typography>
              </Box>
              <Typography variant="subtitle1" align="center">
                {plan.free_minutes} minutos grátis pra falar
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
