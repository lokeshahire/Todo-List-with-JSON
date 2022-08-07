import React from 'react';
import { useEffect, useState } from "react";

export const Lectures = () => {

     const [data, setData] = useState([]);
     const [lectures, setlectures] = useState("");

  useEffect(() => {
    fetch("http://localhost:3008/lectures")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);


  const handleAddLectures=()=>{

    const payLoad ={
 
        title:lectures,
        id:Date.now()
    }

    fetch("http://localhost:3008/lectures", {
        method: "POST",
        headers: {
              'Content-Type': 'application/json'
           // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payLoad)
    }).then((res)=>{
        return res.json();
    }).then((data) => {
        console.log(data);


         fetch("http://localhost:3008/lectures")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
      
    });

  }


    return (
        <div>
            <p>Lectures</p>
            <div>
                {data?.map((el)=><h2 key={el.id}>{el.title}</h2>)}
                <input value={lectures} onChange={(e)=>setlectures(e.target.value)} type="text" />
                <button onClick={handleAddLectures}>ADD Lectures</button>

            </div>
        </div>      
    );
};


