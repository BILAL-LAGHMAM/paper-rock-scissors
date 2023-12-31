import paper from "../imgs/icon-paper.svg"
import scissors from "../imgs/icon-scissors.svg"
import rock from "../imgs/icon-rock.svg"
export default function Game(props) {
    const choice = (e) => {
        props.choice(e.target.getAttribute('choiceValue'))
    }
    return <>
        <section className="game">
            <button onClick={choice} className="choice-btn">
                <div className="choice paper">
                    <img src={paper} alt="Paper" choiceValue="paper" />
                </div>
            </button>
            <button onClick={choice} className="choice-btn">
                <div className="choice scissors">
                    <img src={scissors} alt="Scissors" choiceValue="scissors" />
                </div>
            </button>
            <button onClick={choice} className="choice-btn" data-choice="rock">
                <div className="choice rock">
                    <img src={rock} alt="Rock" choiceValue="rock" />
                </div>
            </button>
        </section>
    </>
}