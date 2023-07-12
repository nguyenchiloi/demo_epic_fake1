import './App.css';
import Navbars from './headers/nav';
import HeaderTop from './headers/header';
import TopContent from './content/topContent';
import TopMainContent from './content/topmainContent';
import MainContent from './content/mainContent';

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Navbars/>
      <TopContent/>
      <TopMainContent/>
      <MainContent/>
    </div>
  );
}

export default App;
