import paper from "../imgs/icon-paper.svg"
import scissors from "../imgs/icon-scissors.svg"
import rock from "../imgs/icon-rock.svg"
export default function Result(props) {
    const again = () => {
        props.choice(false)
    }
    return <>
        <section className="results show-winner">
            <h2 className="results__heading">you picked</h2>
            <h2 className="results__heading">the house picked</h2>
            <div className="results__result">
                <div className="choice scissors">
                    <img src={scissors} alt="scissors" />
                </div>
            </div>
            <div className="results__winner">
                <h3 className="results__text">you lose</h3>
                <button className="play-again" onClick={again}>play again</button>
            </div>
            <div className="results__result">
                <div className="choice rock">
                    <img src={rock} alt="rock" />
                </div>
            </div>
        </section>
    </>
}