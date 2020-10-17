import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            margin: '0 auto',
            padding: '40px 0',
            marginTop: -140,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: 32,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export default function FoodList() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />

            <Container maxWidth="lg" className={classes.root}>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }} />
                <Typography component="div" style={{ backgroundColor: '#cff8dc', height: '40vh' }} />
                <Typography component="div" style={{ backgroundColor: '#cfe83c', height: '40vh' }} />

                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }} />
                <Typography component="div" style={{ backgroundColor: '#cff8dc', height: '40vh' }} />
                <Typography component="div" style={{ backgroundColor: '#cfe83c', height: '40vh' }} />
            </Container>
        </>
    );
}
