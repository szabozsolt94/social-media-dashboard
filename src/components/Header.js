const Header = ({ onClick }) => {
    return (
        <div id={'header'}>
            <header>
                <div id='head-wrapper'>
                    <div id='head-title'>
                        <h1>Social Media Dashboard</h1>
                        <span>Total followers: 23,004</span>
                    </div>
                    <div id='mode-switch'>
                        <span id='mode-name'>Dark Mode</span>
                        <div id='mode-switcher' onClick={onClick} ><div></div></div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header