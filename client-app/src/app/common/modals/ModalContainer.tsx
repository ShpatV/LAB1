import { Box, Modal, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../stores/store';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default  observer (function ModalContainer() {
    const {modalStore} = useStore();

    return (
        // <Modal open={modalStore.modal.open} onClose={modalStore.closeModal}>
           
          <Typography sx={{marginTop:20}} id="keep-mounted-modal-title" variant="h6" component="h2">
            {modalStore.modal.body}
          </Typography>
     
    //   </Modal>
    )
})