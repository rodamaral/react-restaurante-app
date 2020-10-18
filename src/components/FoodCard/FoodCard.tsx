import React, { useCallback, useContext } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { FoodContext } from '../../contexts/FoodContext';
import IFood from '../../types/IFood';
import Container from './styles';

interface IFoodCardProps {
    food: IFood;
}

export default function FoodCard({ food }: IFoodCardProps) {
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
        <Container
            available={available}
        >
            <section className="header">
                <img src={image} alt={name} />
            </section>

            <section className="content">
                <h2>{name}</h2>

                <p>{description}</p>

                <p className="price">
                    R$ <b>{price}</b>
                </p>
            </section>

            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={onEditFood}
                    >
                        <FiEdit3 size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        aria-label="delete"
                        onClick={onDelete}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>

                <div className="availability-container">
                    <p>{available ? 'Disponível' : 'Indisponível'}</p>

                    <label htmlFor={`available-${id}`} className="switch">
                        <input
                            id={`available-${id}`}
                            type="checkbox"
                            checked={available}
                            onChange={toggleAvailable}
                        />

                        <span className="slider" />
                    </label>
                </div>
            </section>
        </Container>
    );
};
