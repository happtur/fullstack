import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => {
    return (
        <div>
            <p>{props.nimi} {props.tehtavia}</p>
        </div>
    )
}

const Otsikko = (props) => (
    <div>
        <h1>{props.kurssi}</h1>
    </div>
)

const Sisalto = (props) => {
    return (
      <div>
        <Osa nimi={props.osa1} tehtavia={props.tehtavia1} />
        <Osa nimi={props.osa2} tehtavia={props.tehtavia2} />
        <Osa nimi={props.osa3} tehtavia={props.tehtavia3} />
      </div>
    )
  }

const Yhteensa = (props) => (
    <div>
        <p>yhteensä {props.tehtavia} tehtävää</p>
    </div>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2}
       tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3} />
      <Yhteensa tehtavia={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)