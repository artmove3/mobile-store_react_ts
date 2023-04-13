import { CompareDesignRow } from "./components/CompareDesignRow";
import { CompareSpecTable } from "./components/CompareSpecTable";
import { Header } from "./components/Header";
import { StoreContext } from "./context/StoreContext";
import { useContext, useEffect } from 'react'

function App() {

  const {showNumber} = useContext(StoreContext)

  useEffect(() => {
    console.log(showNumber)
},[showNumber])

  return (
    <div className='container'>
      <Header />
      <CompareDesignRow />
      <CompareSpecTable />
    </div>  
  );
}

export default App;
