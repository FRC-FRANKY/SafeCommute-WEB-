import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import LoadingScreen from './pages/LoadingScreen.jsx'
import OperatorLogin from './pages/OperatorLogin.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import OperatorDashboard from './pages/OperatorDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import CommutersManagement from './pages/CommutersManagement.jsx'
import OperatorManagement from './pages/OperatorManagement.jsx'
import DatabaseManagement from './pages/DatabaseManagement.jsx'

function StartupLoading() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 1500)

    return () => clearTimeout(timer)
  }, [navigate])

  return <LoadingScreen />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartupLoading />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/operator-login" element={<OperatorLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/operator-dashboard" element={<OperatorDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-commuters" element={<CommutersManagement />} />
      <Route path="/admin-operators" element={<OperatorManagement />} />
      <Route path="/admin-database" element={<DatabaseManagement />} />
      <Route path="/dashboard" element={<Navigate to="/operator-dashboard" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

