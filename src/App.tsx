import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'

function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            
          </Route>
        </Routes>
      </BrowserRouter>

    </AuthProvider>

  )
}

export default App
