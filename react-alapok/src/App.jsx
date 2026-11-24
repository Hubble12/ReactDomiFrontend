export default function App(){
  return(
    <>
    <Header />
    <StudentList />
    <Footer />
    </>
  )
}


function StudentCard(){
  return(
    <>
    <h2>Varga Dominik</h2>
    <h2>Szoftver fejlesztő és tesztelő technikus</h2>
    <h2>Python</h2>
    <p><hr /></p>
    </>
  )
}

function StudentList(){
  return(
    <>
    <StudentCard />
    <StudentCard />
    <StudentCard />
    </>
  )
}

function Header(){
  return(<h3>Header</h3>)
}

function Footer(){
  return(<h3>Footer</h3>)
}












/* 
export default function Udvozlet(){
  return(
    <>
    <h1>Üdv react</h1>
    <p>Ez a javascriptből került az oldalra.</p>
    </>
  )
}
 */





/* export default function StudentCard(){
  return(
    <>    
    <h1>Varga Dominik</h1>
    <h3>13/D</h3>
    <p>Kedvenc programozási nyelv: python</p>
    <p>Hobbi: biciklizés</p>
    </>
  )
} */