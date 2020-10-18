import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import IFood from '../../types/IFood';
import FoodCard from '../FoodCard';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            margin: '0 auto',
            padding: '40px 0',
            marginTop: -140,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gridGap: 32,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

interface IFoodList {
    foodList: IFood[];
}

export default function FoodList({ foodList }: IFoodList) {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />

            <Container maxWidth="lg" className={classes.root}>
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }} />
                <Typography component="div" style={{ backgroundColor: '#cff8dc', height: '40vh' }} />
                <Typography component="div" style={{ backgroundColor: '#cfe83c', height: '40vh' }} /> */}

                {foodList.map(food => <FoodCard key={food.id} food={food} />)}
            </Container>
        </>
    );
}
