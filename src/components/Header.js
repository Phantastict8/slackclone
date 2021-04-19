import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>

            <UserContainer>
                <Name>Peter</Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" alt="logo"/>
                </UserImage>
            </UserContainer>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Main = styled.div`
    display: flex;
`;

const SearchContainer = styled.div``;

const Search = styled.div``;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Name = styled.div``;

const UserImage = styled.div``;
