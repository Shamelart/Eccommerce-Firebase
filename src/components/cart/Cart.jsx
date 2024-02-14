import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContex } from '../../contex/CartContex';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Cart() {
  const { getTotalProducts } = useContext(CartContex)
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={getTotalProducts()} color="error">
        <ShoppingCartIcon style={{color: 'white', width:'3rem'}}/>
      </StyledBadge>
    </IconButton>
  );
}
