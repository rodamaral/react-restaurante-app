import { createStyles, Dialog as MuiDialog, makeStyles, Theme } from '@material-ui/core/';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: 'rgba(0, 0, 0, 0.8);',
        }
    }),
);

interface IDialogProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export default function RENAME({ children, open, onClose }: IDialogProps) {
    const classes = useStyles()

    return (
        <MuiDialog open={open} onClose={onClose} maxWidth="sm" fullWidth
            BackdropProps={{
                classes: {
                    root: classes.root
                }
            }}
        >
            {children}
        </MuiDialog>
    )
}
