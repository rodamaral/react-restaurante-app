import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import Button from '../Button';

export default function DeleteFood({ onDelete }: any) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await onDelete();
        setOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className="icon"
                aria-label="delete"
                onClick={handleClickOpen}
            >
                <FiTrash size={20} />
            </button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Tem certeza que deseja deletar este prato?</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Esta ação não poderá ser desfeita.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button label="Cancelar" onClick={handleClose} variant="cancel" />

                    <Button label="Deletar" onClick={handleDelete} icon="-" variant="warning" />
                </DialogActions>
            </Dialog>
        </>
    );
}
