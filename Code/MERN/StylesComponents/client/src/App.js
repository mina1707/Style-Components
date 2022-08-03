import {ThemeProvider} from 'styled-components';
import Header from './Components/Header';
import {Container} from './Components/styles/Container.styled';
import GlobalStyles from './Components/styles/Global';

const theme={

  colors:{
    header:'#f1faee',
    body:'#fff ',
    footer:'#003333',
  }
}


function App() {


  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
      <Container>
        <h1>Hello World</h1>
      </Container>

    </>
    </ThemeProvider>
  
  );
}

export default App;
