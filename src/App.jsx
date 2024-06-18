import NavBar from './components/NavBar'
import Aside from './components/Aside'
import Section from './components/Section'
export default function App() {
  return (
    <main className = 'min-w-screen min-h-screen'>
      <NavBar />
      <div className='flex w-full'>
        <Aside />
        <Section />
      </div>
    </main>
  )
}
