import { useState } from 'react';
import PropTypes from 'prop-types';

import { Chip, Stack } from '@mui/material';
// import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function OrderTableRow({
  selected,
  createdAt,
  name,
  phone,
  address,
  weight,
  total,
  status,
  handleClick,
}) {

  const statusColor = (orderStatus) => {
    switch (orderStatus) {
      case 'received':
        return 'primary'
      case 'in progress':
        return 'secondary'
      case 'completed':
        return 'info'
      case 'delivered':
        return 'success'
      default:
        return 'error'
    }
  }

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" padding="none">
          <Stack>
            {/* <Avatar alt={name} src={phone} /> */}
            <Typography variant="subtitle2" > {name} </Typography>
            <Typography variant='caption'>{createdAt}</Typography>
          </Stack>
        </TableCell>

        <TableCell>{address}</TableCell>

        <TableCell>{phone}</TableCell>

        <TableCell>{weight}</TableCell>

        <TableCell>{total} $</TableCell>


        <TableCell>
          <Chip label={status} color={statusColor(status)} variant='outlined' size='small' />
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

OrderTableRow.propTypes = {
  weight: PropTypes.any,
  total: PropTypes.any,
  handleClick: PropTypes.func,
  name: PropTypes.any,
  address: PropTypes.any,
  phone: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.any,
  createdAt: PropTypes.any,
};
