import { useForm } from "react-hook-form"

import { Stack, Button, TextField, InputAdornment, } from "@mui/material";

import { insertOrder } from "../../api/order.ts";

const COST_PER_KG = 12

const OrderForm = () => {
  const defaultValues = {
    name: "",
    address: "",
    phone: "",
    weight: 0,
    total: 0,
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, },
  } = useForm({ defaultValues })

  const values = watch()

  const onSubmit = (data) => {
    data.total = Number(data.weight * COST_PER_KG)
    data.weight = Number(data.weight)
    insertOrder(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Stack direction="column" alignItems="center" justifyContent="space-between" mx={12} mt={5} spacing={3}>
        <TextField
          {...register("name", { required: "Name is required" })}
          fullWidth
          label="Customer Name"
          variant="outlined"
          error={errors.name != null}
          helperText={errors.name ? errors.name.message : ''}
        />
        <TextField
          {...register("address", { required: "Address is required" })}
          fullWidth
          label="Address"
          variant="outlined"
          error={errors.address != null}
          helperText={errors.address ? errors.address.message : ''}
        />
        <TextField
          {...register("phone", { required: "Phone is required" })}
          error={errors.phone != null}
          helperText={errors.phone ? errors.phone.message : ''}
          fullWidth
          label="Phone number"
          variant="outlined"
          type="number"
        />
        <TextField
          {...register("weight", { min: 3 })}
          error={errors.weight != null}
          helperText={errors.weight ? "Valid minimun weight is 3" : ''}
          fullWidth
          label="Weight"
          variant="outlined"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          value={values.weight * COST_PER_KG}
          disabled
          {...register("total")}
          fullWidth
          label="Total"
          variant="outlined"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='center' m={5} spacing={3}>
        <Button variant="contained" color="success" type='submit' >Complete</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </form>
  )
}

export default OrderForm;