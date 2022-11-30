import { CardActionArea, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        height: "100vh",
        alignItems: "center",
        display: "flex",
        "& > :not(style)": { m: 5 },
      }}
    >
      <Grid container spacing={0}>
        <CardActionArea>
          <Avatar sx={{ minWidth: "30vh", height: "30vh" }}>DI</Avatar>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary">
              Olá {},Seja bem vindo ao Banco Wello Word :)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Grid>
    </Card>
  );
}
