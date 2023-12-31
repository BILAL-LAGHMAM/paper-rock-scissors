import logo from '../imgs/logo.svg'
export default function Header() {
    return <>
        <header className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="score">
                <div className="score__title">score</div>
                <div className="score__number">0</div>
            </div>
        </header>
    </>
}