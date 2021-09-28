import { Fragment } from 'react';
import './Style/App.css';
import { Container } from 'semantic-ui-react';
import Search from '../Components/Search/Search';
import Jobs  from '../Components/Jobs/Jobs';



const App = () => {

  return (
    <Fragment >
      <Container >
        <Search />
        <Jobs />
      </Container>
    </Fragment>

  )
}

export default App



