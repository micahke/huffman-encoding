const git_light = require("../imgs/git-light.png");
const m_logo = require("../imgs/m-logo.png");

export default function Navbar() {
    return (
        <div className="navbar-main">
            <h2>Huffman Encoding Demo</h2>
            <div className="logo-name">
                <a href="https://www.micahelias.com" target="_blank">
                    <img className="git-light" src={m_logo} alt="logo" />
                </a>
                <a href="https://www.github.com/yumyumcurryman/huffman-encoding" target="_blank">
                    <img className="git-light" src={git_light} alt="logo" />
                </a>
                <h3>Micah Elias</h3>
            </div>
        </div>
    )
}