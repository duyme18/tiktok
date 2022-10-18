import { useState } from "react";



function App() {

  // const [counter, setCounter] = useState(1)
  // const handleIncrease = () => {
  //   setCounter(counter + 1)
  // }
  // return (
  //   <div className="App" style={{ padding: 20 }}>
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );

  // const [info, setInfo] = useState({
  //   name: "Nguyen Van A",
  //   age: 29,
  //   addres: "HN"
  // })
  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio: "lopdate"
  //   })
  // }
  // return (
  //   <div className="App" style={{ padding: 30 }}>
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={handleUpdate}>Update</button>

  //   </div>
  // )

  //////

  // const gifts = [
  //   'CPU i9',
  //   'RAM 32G RGB',
  //   'RBG Keyboard',
  //   'hello'
  // ]

  // const [gift, setGift] = useState('Chưa có phần thưởng')

  // const handleGetGift = () => {
  //   const random = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[random])
  // }

  // return (
  //   <div style={{ padding: 20 }}>
  //     <h1>{gift}</h1>
  //     <button onClick={handleGetGift}>Lấy thưởng</button>
  //   </div>
  // )


  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const handleSubmit = () =>{
  //   console.log({
  //     name,
  //     email
  //   })
  // }
  // return (

  //   <div style={{ padding: 20 }}>
  //     <input
  //       value={name}
  //       onChange={e => setName(e.target.value)}
  //     />
  //     <input
  //       value={email}
  //       onChange={e => setEmail(e.target.value)}
  //     />
  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // )


  const course = [
    {
      id: 1,
      name: 'nguyen van a'
    },
    {
      id: 2,
      name: 'nguyen van b'
    },
    {
      id: 3,
      name: 'nguyen van c'
    }
  ]

  // const [checked, setChecked] = useState()

  // const handleSubmit = () => {
  //   console.log({ id: checked })
  // }
  // return (

  //   <div style={{ padding: 20 }}>
  //     {course.map(course => (
  //       <div key={course.id}>
  //         <input type="radio"
  //           checked={checked === course.id}
  //           onChange={() => setChecked(course.id)}
  //         /> {course.name}
  //       </div>
  //     ))}
  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // )

  const [checked, setChecked] = useState([])

  console.log(checked);
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    console.log({ids: checked})
  }

  return (

    <div style={{ padding: 20 }}>
      {course.map(course => (
        <div key={course.id}>
          <input type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          /> {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default App;
