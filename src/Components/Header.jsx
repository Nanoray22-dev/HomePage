import logo from '../assets/images/logo.svg'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className='flex place-content-between items-center mb-14'>
      <img className='cursor-pointer' src={logo} alt="logo" />
      <NavBar />
    </header>
  )
}
