import React from 'react';
import { StyledHeader, Nav, Logo, Image} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
//The Button will be used in different places, that is why it has its own file.
import { Button} from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';


export default function Header() {
  return (
    <StyledHeader >
        <Container>
            <Nav>
                <Logo>Cinema</Logo>
                <Button>Try It Free!</Button>
            </Nav>
            <Flex>
                <div>
                  <h1>Enjoy The Best Movies!</h1>
                  <p>Now you can watch the best rated movies anywhere. you
                    can have unlimited access without ads or commercials.
                    Time to spread the news and share them with yoy firends!
                  </p>
                  <Button bg='#6E44FF' color='#fff'>Get Started For Free</Button>
                </div>

                <Image src='./person-watching.png'/>

            </Flex>



        </Container>
    </StyledHeader>
  )
}
