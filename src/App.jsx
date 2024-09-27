import './App.css'
import Card from './components/Card/Card'

function App() {
  const java = {
    nome: 'Java',
    imagem: 'https://www.salvatore.academy/devmon/1_java.png',
    evoluiPara: 'Kotlin'
  }

  const kotlin = {
    nome: 'Kotlin',
    imagem: 'https://www.salvatore.academy/devmon/2_kotlin.png',
    evoluiPara: 'Android'
  }

  const android = {
    nome: 'Android',
    imagem: 'https://www.salvatore.academy/devmon/3_android.png',
    evoluiPara: ''
  }

  const c = {
    nome: 'C',
    imagem: 'https://www.salvatore.academy/devmon/4_c.png',
    evoluiPara: 'C++'
  }

  // const cmais = {
  //   nome: 'C++',
  //   imagem: 'https://www.salvatore.academy/devmon/5_c++.png',
  //   evoluiPara: 'C#'
  // }


  const devmons = [java, kotlin, android, c]

  return (
    <>
      <div className='cards'>
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
    </>
  )
}

export default App
