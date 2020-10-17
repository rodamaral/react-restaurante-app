import { Dialog as MuiDialog } from '@material-ui/core/'
import React from 'react'

interface IDialogProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export default function RENAME({ children, open, onClose }: IDialogProps) {

    return (
        <MuiDialog open={open} onClose={onClose}>
            {children}
        </MuiDialog>
    )
}
