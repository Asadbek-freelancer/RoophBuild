import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './sections/Home'
import './style/app.css'
import NotFound from './componants/NotFound'
import Portfolio from './sections/Portfolio'
import FAQ from './sections/FAQ'
import Material from './sections/Material'
import MaterialTwo from './sections/MaterialTwo'
import Sertificates from './sections/Sertificates'
import Contacts from './sections/Contacts'
import Servec from './sections/Servec'
import AboutCompany from './sections/AboutCompany'
import Prices from './sections/Prices'
import PortfolioSecond from './sections/PortfolioSecond'
import Ballasta from './sections/Ballasta'
import Membrana from './sections/Membrana'
import Naplav from './sections/Naplav'
import Ekspluatat from './sections/Ekspluatat'
import ScrollToTop from './componants/ScrollToTop'
const App = () => {
  return (
    <div>
      <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/materials/one' element={<Material />} />
      <Route path='/materials/two' element={<MaterialTwo />} />
      <Route path='/certificates' element={<Sertificates />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/services' element={<Servec />} />
      <Route path='/about' element={<AboutCompany />} />
      <Route path='/prices' element={<Prices />} />
      <Route path='/portfolio2' element={<PortfolioSecond />} />
      <Route path='/балластной' element={<Ballasta />} />
      <Route path='/мембранной' element={<Membrana />} />
      <Route path='/наплавляемой' element={<Naplav />} />
      <Route path='/Эксплуатируемая' element={<Ekspluatat />} />
    </Routes>

    </div>
  )
}

export default App