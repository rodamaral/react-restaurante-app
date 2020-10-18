import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import styled from 'styled-components';
import logo from '../../assets/icons/logo.svg';
import Button from '../Button';

const Container = styled.div`
    background: #c72828;
    padding: 30px 0;

    header {
        width: 1280px;
        margin: 0 auto;
        padding: 0 0 160px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

interface IHeaderProps {
    openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
    <Container>
        <header>
            <img src={logo} alt="Logo" />

            <Button
                label="Novo Prato"
                onClick={openModal}
                icon={<FiPlusSquare size={24} />}
            />
        </header>
    </Container>
);

export default Header;
