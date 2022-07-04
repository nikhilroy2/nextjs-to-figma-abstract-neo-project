import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={require('./Logo.png')} alt="" />
      <h1 className="large_text">
        Abstract Neo Geometric People
      </h1>
      <div className="btn_group">
        <button>
          Color Styles
        </button>

        <button>
          Characters
        </button>
        <button>
          Editable
        </button>
      </div>
    </div>
  );
}

export default App;
