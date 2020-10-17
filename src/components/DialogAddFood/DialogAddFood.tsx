import React from 'react';
import Dialog from '../Dialog';

interface IModalProps {
    open: boolean;
    onClose: () => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
    open,
    onClose,
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <form>
                <h1>Novo Prato</h1>

                <button type="button" onClick={onClose}>Fechar</button>
            </form>
        </Dialog>
    );
};

export default ModalAddFood;
