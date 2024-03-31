
import React from 'react';
import InteractiveContent from './InteractiveContent';

// import React, { useEffect, useState } from "react";
// function App(){
//   const [data, setData] = useState([])
//   //const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
//   useEffect(()=>{
//     fetch("https://my-book-back-end.vercel.app/")
//     .then(res => res.json())
//     .then(data => {
//       console.log(data); // Log the fetched data
//       setData(data); // Set the fetched data to the state
//     })
//     .catch(err => console.log(err));
//   },[])
//   return(
//     <div style={{padding:"50px"}}>
//         <table>
//           <thead>
//             <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Content</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && data.map((d,i) => (
//               <tr key={i}>
//                 <td>{d.id}</td>
//                 <td>{d.name}</td>
//                 <td>{d.content}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//     </div>
//   )
// }

// export default App

const App = () => {
  const contentSections = [
    {
      title: 'Section 1',
      content: 'This is the content of section 1.',
    },
    {
      title: 'Section 2',
      content: 'This is the content of section 2.',
    },
    {
      title: 'Section 3',
      content: 'This is the content of section 3.',
    },
  ];

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Welcome to My Interactive Reader App</h1>
      <InteractiveContent contentSections={contentSections} />
    </div>
  );
};

export default App;
