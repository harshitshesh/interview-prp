import React from 'react'
import Accordionparent from './components/Accordionparent';


const sampleItems = [
  {
    id: '1',
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces. It is maintained by Meta and a community of individual developers and companies.'
  },
  {
    id: '2',
    title: 'Why use Accordions?',
    content: 'Accordions are useful when you want to toggle between hiding and showing large amounts of content. They help in reducing the clutter on a page and improving user experience.'
  },
  {
    id: '3',
    title: 'Is this component accessible?',
    content: 'Yes! This accordion follows WAI-ARIA best practices. It uses aria-expanded, aria-controls, and supports full keyboard navigation including focus management.'
  },
  {
    id: '4',
    title: 'Can I open multiple panels?',
    content: 'By default, this component is set to single-open mode. However, you can pass the "multi" prop to allow multiple panels to be open at once.'
  }
];



const App = () => {


  const handletoggle= (id,isopen) =>{
    console.log(`item ${id} id now ${isopen ? 'open':"closed"}`)
  }
  return (
    <div>
      <header>
        <h1>accordion implementation - </h1>
      </header>


      <main>

        <section>


          <h2>for singale open</h2>

<Accordionparent items={sampleItems} ontoggle={handletoggle} defaultopen="1"/>
        </section>

        <section>


          <h2>for multi open in one time </h2>

          <Accordionparent items={sampleItems} multi={true}/>
        </section>
      </main>
      
    </div>
  )
}

export default App
