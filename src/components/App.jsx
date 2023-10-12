import { useState } from "react";
import "../styles/main.scss";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("pepina");
  const [userLetters, setUserLetters] = useState([]);

  const handleClick = () => {
    setNumberOfErrors(numberOfErrors + 1);
    return numberOfErrors;
  };

  const handleInputLastLetter = (event) => {
    const letter = event.target.value;
    let re = /^[A-Za-zñÑ-á-úÁ-Ú]+$/;
    if (re.test(letter) || letter === "") {
      setLastLetter(letter);
    }
    if (re.test(letter) && letter !== "") {
      setLastLetter([letter, ...userLetters]);
    }

    const renderSolutionLetters = () => {
      const wordLetters = word.split("");
      return wordLetters
        .filter((letter) =>
          letter.toLowerCase().includes(lastLetter.toLowerCase())
        )
        .map((letter, index) => {
          return <li key={index} className="letter"></li>;
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    return (
      <>
        <div className="page">
          <header>
            <h1 className="header__title">Juego del ahorcado</h1>
          </header>
          <main className="main">
            <section>
              <div className="solution">
                <h2 className="title">Solución:</h2>

                <ul className="letters">
                  {renderSolutionLetters()}
                  {/*}  <li className='letter'>p</li>
                <li className='letter'>e</li>
                <li className='letter'>p</li>
                <li className='letter'></li>
                <li className='letter'>n</li>
                <li className='letter'></li>*/}
                </ul>
              </div>
              <div className="error">
                <h2 className="title">Letras falladas:</h2>
                <ul className="letters">
                  <li className="letter">f</li>
                  <li className="letter">q</li>
                  <li className="letter">h</li>
                  <li className="letter">p</li>
                  <li className="letter">x</li>
                </ul>
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <label className="title" htmlFor="last-letter">
                  Escribe una letra:
                </label>
                <input
                  autoComplete="off"
                  className="form__input"
                  maxLength="1"
                  type="text"
                  name="last-letter"
                  id="last-letter"
                  onChange={handleInputLastLetter}
                  value={lastLetter}
                />
              </form>
            </section>

            <section className={`dummy error-${numberOfErrors}`}>
              <span className="error-13 eye"></span>
              <span className="error-12 eye"></span>
              <span className="error-11 line"></span>
              <span className="error-10 line"></span>
              <span className="error-9 line"></span>
              <span className="error-8 line"></span>
              <span className="error-7 line"></span>
              <span className="error-6 head"></span>
              <span className="error-5 line"></span>
              <span className="error-4 line"></span>
              <span className="error-3 line"></span>
              <span className="error-2 line"></span>
              <span className="error-1 line"></span>
            </section>
          </main>
          <button onClick={handleClick} className="btnInc">
            INCREMENTAR
          </button>
        </div>
      </>
    );
  };
}

export default App;