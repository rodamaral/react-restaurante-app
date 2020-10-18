import React from 'react';
import IFood from '../../types/IFood';
import Dialog from '../Dialog';
import UpsertFoodForm from '../UpsertFoodForm';

interface IProps {
    open: boolean;
    selectedFood: IFood | undefined;
    onClose: () => void;
}

const ModalAddFood: React.FC<IProps> = ({
    open,
    selectedFood,
    onClose,
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <UpsertFoodForm
                selectedFood={selectedFood}
                onClose={onClose}
            />
        </Dialog>
    );
};

export default ModalAddFood;
