import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { ProtectedLayout } from './components/protectedLoyout'
import Profile from './pages/profile'

function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>

        <Route path="/profile" element={<ProtectedLayout><Profile/></ProtectedLayout>}></Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
