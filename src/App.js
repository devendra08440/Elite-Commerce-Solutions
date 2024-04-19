import './App.css';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';

function App() {
  return (
    <>
      <div className='main'>
        <Login/>
        <Registration/>
      </div>
      <div className='content-info-footer'>
        <Footer/>
      </div>
    </>
  );
}

export default App;
