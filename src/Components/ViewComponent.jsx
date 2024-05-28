import React from 'react'
import { useState, useEffect } from 'react';


export default function ViewComponent(props) {
  const [data, setData] = useState();
  const [msg, setMsg] = useState("asd");
  const [index, setIndex] = useState();
  const [isData, setIsData] = useState(false);
  useEffect(GetData, []);
  useEffect(GetMessage, [isData]);

  function GetData() {
    fetch('data.json')
    .then((results) => {
      return results.json();
    })
    .then((response) => {
      if(response?.results) {
        setData(response.results);
        setIsData(true);
        //console.log({data});
      }
      else
        setIsData(false);
    }) 
  }

  function GetMessage() {
    console.log(data);
    if(data) {
      data.map((val, idx, arr)=>{
        if(data[idx]){
          setIndex(idx);
          //console.log(val);
          data[idx].dates.map((v, i)=>{
            if(v.date==props.date){
              console.log(v);
              setMsg(v.msg);
            }
          })
        }
      });
    }
  }
  

  return (
    <>
      <div>
        Name : {props.name}
        </div>
      <div>
        Date : {props.date}
      </div>
      <div>
        Message : {isData ? msg : "No Comments"}
      </div>
    </>
  )
}
