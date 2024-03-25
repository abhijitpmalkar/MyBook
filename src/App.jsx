import React, { useEffect, useState } from "react";
function App(){
  const [data, setData] = useState([])
  //const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
  useEffect(()=>{
    fetch("https://my-book-back-end.vercel.app/")
    .then(res => res.json())
    .then(data => {
      console.log(data); // Log the fetched data
      setData(data); // Set the fetched data to the state
    })
    .catch(err => console.log(err));
  },[])
  return(
    <div style={{padding:"50px"}}>
        <table>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((d,i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default App