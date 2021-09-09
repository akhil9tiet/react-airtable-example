import  base  from '../api/base';
import React from 'react';

export default function Deletebtn({id}){

  const deleteRecord = () => {
    base("Prospects").destroy(id, (err, deleteRecord)=> {
      if(err){
        console.error(err);
        return
      }
      prompt("Delete record", deleteRecord.id);
    });
  }

  return (
    <div>
      <button onClick={deleteRecord}>Delete</button>
    </div>
  )
}