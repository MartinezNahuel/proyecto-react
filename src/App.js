import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
  <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"}/>

  </div>
  );
}

export default App;
