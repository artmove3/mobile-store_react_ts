import { CompareDesignRow } from "./components/CompareDesignRow";
import { CompareSpecTable } from "./components/CompareSpecTable";
import { Header } from "./components/Header";
import { StoreContext } from "./context/StoreContext";
import { useContext, useEffect } from 'react'

function App() {

  const { showNumber, changeShownData, changeCompareNumber } = useContext(StoreContext)

  useEffect(() => {
    changeShownData(showNumber)

},[showNumber, changeShownData])

  return (
    <div className='container' onClick={(e) => {
      e.stopPropagation()
      changeCompareNumber(-1)
    }}>
      <Header />
      <CompareDesignRow />
      <CompareSpecTable />
    </div>  
  );
}

export default App;
