import React from 'react';
import './App.css';
import Schedule from './component/Schedule';



  export default function App() {

  return (
<div class ="bg-slate-200 space-y-4 ">
      <h1 className="text-2xl text-gray-600 italic font-bold">
      Schedule
    </h1>
    <Schedule>
    </Schedule>
  
</div>

  );

    }
