import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';



function App() {

  const firstName = `Preda`;

  return (
    <div className='App'>
      <div className='card'>
        <Image />
        <div className='info'>
          <Name />
          <Price />
          <Description />

        </div>
      </div>
     <div className='greeting'>
      {firstName ? (
        <>
        <p>Hello, {firstName}! </p>
        <img src='' alt=''/>
        </>):
        (
          <p>Hello, there</p>
        )}
    
     </div>
    </div>
  );
}

export default App;
