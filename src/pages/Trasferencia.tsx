import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Transferencia: React.FC = () => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Container>
        <Grid
          container
          component="main"
          sx={{ height: "80vh", width: "1000px" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={15}
            md={7}
            sx={{
              opacity: 0.5,
              backgroundImage: "url(./aa.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
            <Box
              sx={{
                my: 8,
                mx: 4,

                alignItems: "center",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  sx={{ m: 1, width: "30ch", columns: 2 }}
                  margin="normal"
                  required
                  fullWidth
                  label="Número da conta"
                  name="Número da conta"
                  autoFocus
                />
                <TextField
                  sx={{ m: 1, width: "10ch" }}
                  margin="normal"
                  required
                  fullWidth
                  label="digito"
                  name="digito"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Valor da transferência"
                  label="Valor da transferência"
                  type="nuber"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Descrição"
                  label="Descrição"
                  type="Text"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Lembrar na proxima transferencia"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Transferir agora
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Transferencia;
