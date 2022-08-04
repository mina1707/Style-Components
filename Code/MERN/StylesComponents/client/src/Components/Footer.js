import {Container} from './styles/Container.styled';
import {Logo} from './styles/Header.styled';
import {Flex} from './styles/Flex.styled';


export default function Footer() {
  return (
    <div>

        <Container>
             <Logo>Cinema</Logo>

             <Flex>
                <ul>
                    <li>
                    
                        lorem lakjfdg lkdjfgkdfgj lkdfjgldfgjdfgdgdf
                        gsdfgsgsdgdgdsgdfgfdghdfh fdgdfgdfgfdgdfgg
                        dfgdsfgg
                        dfgdfgsfgfdg

                    </li>
                    <li>+34 456745 3453</li>
                    <li>example@gmail.com</li>
                </ul>

                <ul>
                    <li>About us</li>
                    <li>Donate</li>
                    <li>FAQ</li>
                </ul>

                <ul>

                    <li>Careers</li>
                    <li>Report an issue</li>
                    <li>Contact Us</li>
                </ul>



             </Flex>

             <p>COPYRIGHT 2022</p>

        </Container>
    </div>
  )
}
