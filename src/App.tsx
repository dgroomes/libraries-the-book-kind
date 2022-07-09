import logo from './logo.png'
import './App.css'
import libraries from './libraries';

function App() {
    const librariesListItems = libraries.map(library => {
        return <li>{library}</li>
    });

    const librariesList = <ul>{librariesListItems}</ul>;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Libraries - The Book Kind</h1>
            </header>
            <p>This is a personal-interest project that combines my continuous learning of web technologies with a
                real-life example: Hennepin County Libraries!</p>
            <p>This project is <em>not yet fully implemented</em>.</p>
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
            <h2>Library Locations</h2>
            {librariesList}
        </div>
    )
}

export default App
