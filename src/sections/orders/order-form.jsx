import { useForm } from "react-hook-form"

import { Stack, Button, InputAdornment } from "@mui/material";

import TextInput from "./text-input";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Stack direction="column" alignItems="center" justifyContent="space-between" mx={12} mt={5} spacing={3}>
        <TextInput
          register={{ ...register("name") }}
          fullWidth
          label="Customer Name"
          variant="outlined"
        />
        <TextInput
          register={{ ...register("phone") }}
          fullWidth
          label="Phone number"
          variant="outlined"
          type="number"
          // inputProps={{
          //   startAdornment: <InputAdornment position="start">(444)</InputAdornment>,
          // }}
        />
        <TextInput
          register={{ ...register("weight") }}
          fullWidth
          label="Weight"
          variant="outlined"
          type="number"
          inputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextInput
          register={{ ...register("total") }}
          fullWidth
          label="Total"
          variant="outlined"
          type="number"
          inputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='center' m={5} spacing={3}>
        <Button variant="contained" color="success" type='submit'>Complete</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </form>
  )
}

export default OrderForm;