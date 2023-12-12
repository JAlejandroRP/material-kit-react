// import { FormControl } from '@mui/base/FormControl';

import { Stack, Button, Container, TextField, Typography, InputAdornment } from "@mui/material";


const OrderForm = () => {
  const fecha = new Date().toDateString()
  console.log(fecha);
  return (
    <Container >
      <Stack direction="column" alignItems="center" justifyContent="space-between" m={5} spacing={3}>
        <Typography variant="h4">New Order</Typography>
        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
        <TextField id="outlined-basic" label="Weight" variant="outlined" fullWidth type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField id="outlined-basic" label="Phone" variant="outlined" type="number" fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">(444)</InputAdornment>,
          }}
        />
        <TextField id="outlined-basic" label="Total" variant="outlined" type="number" fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='center' m={5} spacing={3}>
        <Button variant="contained" color="success">Complete</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Container>
  )
}

export default OrderForm;