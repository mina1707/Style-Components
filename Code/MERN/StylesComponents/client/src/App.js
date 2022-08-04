import {ThemeProvider} from 'styled-components';
import Header from './Components/Header';
import {Container} from './Components/styles/Container.styled';
import GlobalStyles from './Components/styles/Global';
import content from './content'
import Card from './Components/Card';
import Footer from './Components/Footer';

const theme={

  colors:{
    header:'#FFF8F0',
    body:'#fff ',
    footer:'#B892FF',
  },
  
  // Media query for smaller screens.
  mobile: '768px',
}


function App() {


  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
      <Container>
        {content.map((item,index) => (
          <Card key={index} item={item}/>
        ))}
      </Container>
      <Footer/>

    </>
    </ThemeProvider>
  
  );
}

export default App;
