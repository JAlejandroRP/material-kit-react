import PropTypes from 'prop-types';

// import { Stack } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// import AutorenewIcon from '@mui/icons-material/Autorenew';

import { Stack } from '@mui/material';

import { updateOrder } from 'src/api/order';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableToolbar({ numSelected, selected, filterName, onFilterName }) {
  const handleDelete = () => {
    // console.log(selected);
  }

  const handleMarkAsCompleted = () => {
    // console.log(selected);

  }
  const handleMarkAsInProgress = async () => {
    console.log(selected);
    await updateOrder(selected)
  }
  const handleMarkAsDelivered = () => {
    // console.log(selected);
  }

  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Stack direction='row'>
          <Tooltip title="Mark as in progress">
            <IconButton onClick={() => handleMarkAsInProgress()}>
              <Iconify icon="eva:shopping-cart-outline" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mark as completed">
            <IconButton onClick={() => handleMarkAsCompleted()}>
              <Iconify icon="eva:cube-outline" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Mark as delivered">
            <IconButton onClick={() => handleMarkAsDelivered()}>
              <Iconify icon="eva:checkmark-circle-2-outline" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete()}>
              <Iconify icon="eva:trash-2-outline" />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}

      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Search order..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      )}

    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  selected: PropTypes.any,
};
