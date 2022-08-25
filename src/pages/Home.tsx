import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/reactjs">React.js</Link></li>
          <li><Link to="/typescript">Typescript</Link></li>
          <li><Link to="/sass">Sass</Link></li>
        </ul>
      </nav>
    </header>
  )
}
