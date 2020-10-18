import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useCallback, useContext } from 'react';
import { FoodContext } from '../../contexts/FoodContext';
import IFood from '../../types/IFood';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: 'lightgray', // FIXME: remove
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

interface IFoodCardProps {
    food: IFood;
}

export default function FoodCard({ food }: IFoodCardProps) {
    const classes = useStyles();
    const { deleteFood, onSelectFood, editFood } = useContext(FoodContext)
    const { id, name, image, description, price, available } = food

    const toggleAvailable = useCallback((): void => {
        editFood({ ...food, available: !food.available })
    },
        [food, editFood],
    )

    const onEditFood = useCallback((): void => {
        onSelectFood(food)
    },
        [food, onSelectFood],
    )

    const onDelete = useCallback(
        () => {
            deleteFood(id)
        },
        [id, deleteFood],
    )

    return (
        <div
            className={classes.root}
        >
            <header>
                <img src={image} alt={name} />
            </header>

            <section className="">
                <h2>{name}</h2>

                <p>{description}</p>

                <p className="">
                    R$ <b>{price}</b>
                </p>
            </section>

            <section className="">
                <div className="">
                    <button
                        type="button"
                        className=""
                        onClick={onEditFood}
                    >
                        Editar
                    </button>

                    <button
                        type="button"
                        className=""
                        onClick={onDelete}
                    >
                        Lixeira
                    </button>
                </div>

                <div className="">
                    <p>{available ? 'Disponível' : 'Indisponível'}</p>

                    <label htmlFor={`available-${id}`} className="">
                        <input
                            id={`available-${id}`}
                            type="checkbox"
                            checked={available}
                            onChange={toggleAvailable}
                        />

                        <span className="" />
                    </label>
                </div>
            </section>
        </div>
    );
};
