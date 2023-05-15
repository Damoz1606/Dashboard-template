import { Box, Grid, Typography } from "@mui/material";
import componentSamples from "./Samples";

const MuiComponentSamples = () => {
  return (
    <Box sx={{
      maxWidth: 1000,
      p: 1,
      m: "auto"
    }}>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {componentSamples.map(({ id, title, component }) => (
        <div key={id} id={id}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Box sx={{
            mb: 10,
            width: 1,
            maxWidth: 1000,
            pl: 1,
            m: "auto",
          }}>{component}</Box>
        </div>
  ))
}
    </Box >
  );
}

export default MuiComponentSamples
