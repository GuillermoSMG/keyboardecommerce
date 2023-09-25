import toast from 'react-hot-toast';

export const successToast = () => {
  toast.success('Thank you for your purchase!', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
    position: 'top-right',
  });
};

export const showToast = () => {
  toast.success('Cart emptied.', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      width: '300px',
    },
    position: 'top-center',
  });
};

export const showToastAdd = () => {
  toast.success('Added to cart.', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      width: '300px',
    },
    position: 'top-center',
  });
};
