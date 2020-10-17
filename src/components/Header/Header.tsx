import React from 'react';
import styled from 'styled-components';
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
            <nav>
                <div>
                    <Button
                        label="Novo Prato"
                        onClick={openModal}
                        icon="+"
                    />
                </div>
            </nav>
        </header>
    </Container>
);

export default Header;
