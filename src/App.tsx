import logo from './logo.png'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Libraries - The Book Kind</h1>
            </header>
            <p>This is a personal-interest project that combines my continuous learning of web technologies with a
                real-life example: Hennepin County Libraries!</p>
            <p>
                <a
                    className="App-link"
                    href="https://www.hclib.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hennepin County Library website
                </a>
            </p>
        </div>
    )
}

export default App
