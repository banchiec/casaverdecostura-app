import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { getLoggedIn, logout } from './services/auth'
// import { Cart } from './components/Cart/Cart'
import routes from './config/routes'
import * as USER_HELPERS from './utils/userToken'
import ButtonWhatsApp from './components/ButtonWhatsApp/ButtonWhatsApp'

export default function App() {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const accessToken = USER_HELPERS.getUserToken()
		if (!accessToken) {
			return setIsLoading(false)
		}
		getLoggedIn(accessToken).then((res) => {
			if (!res.status) {
				return setIsLoading(false)
			}
			setUser(res.data.user)
			setIsLoading(false)
		})
	}, [])

	function handleLogout() {
		const accessToken = USER_HELPERS.getUserToken()
		if (!accessToken) {
			setUser(null)
			console.log(isLoading)
			return setIsLoading(false)
		}
		setIsLoading(true)
		logout(accessToken).then((res) => {
			if (!res.status) {
				// deal with error here
				console.error('Logout was unsuccessful: ', res)
			}
			USER_HELPERS.removeUserToken()
			setIsLoading(false)
			return setUser(null)
		})
	}

	function authenticate(user) {
		setUser(user)
	}

<<<<<<< HEAD
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
      <Cart />
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <ButtonWhatsApp number="34617982536" message="Hola" />
    </div>
  );
=======
	return (
		<div>
			<Navbar handleLogout={handleLogout} user={user} />
			<Routes>
				{routes({ user, authenticate, handleLogout }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
			<ButtonWhatsApp number="34617982536" message="Hola" />
		</div>
	)
>>>>>>> develop
}
