export default function Header({currScore, best}) {
    return(
        <div className="header">
            <h1>Naruto Memory Card</h1>
            <div className="score-panel">
                <h3>Current Score:{currScore}</h3>
                <h3>Best Score:{best}</h3>
            </div>
        </div>
    );
}
