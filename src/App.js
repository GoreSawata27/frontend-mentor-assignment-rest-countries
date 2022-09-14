import {useContext} from "react";
import CountriesData from "./Components/CountriesData";
import {Routes , Route} from 'react-router-dom'
import CountryInfo from "./Components/CountryInfo";
import { ThemeContext } from "./Components/Contex/ThemeContex";



function App() {
  const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
  return ( <>
  <div className={` ${darkMode ? 'dark-background': 'light-background'} `}>
      <Routes>
        <Route path="/" element={<CountriesData/>}></Route>
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
      </div>
      </>
  );
}

export default App;
