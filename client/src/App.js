import style from './App.module.css';
import Header from './components/Header'

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
      <Header />
      </div>
    </div>
  );
}

export default App;
