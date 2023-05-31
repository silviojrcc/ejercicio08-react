import { Container } from 'react-bootstrap';
import './App.css'
import Formulario from './components/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <div className='main d-flex justify-content-center align-items-center'>
      <Container>
        <Formulario></Formulario>
      </Container>
    </div>
    
    </>
  )
}

export default App;
