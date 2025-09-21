import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Article title='Процедурное программирование на языке C++' content='Изучаем базовые конструкции языка C++' />
      <Article title="ООП на C++" content='Изучаем Объектно-оринтированное программирование на языке C++'/>
      <Footer />
    </div>
  );
}

export default App;