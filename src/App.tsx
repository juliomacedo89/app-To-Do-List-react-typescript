import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { Footer } from './components/Footer';

import './styles/global.scss'



export function App() {
  return (
    <>
      <Header />
      <TaskList />
      <Footer />
    </>
  )
}