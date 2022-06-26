import React from "react";
import { useQuery } from 'urql';

const SCHEDULE_QUERY =`
{
    schedule(type:"All",status:"live",page:1)
    {
      matchType
      matchStatus
      homeTeamName
      awayTeamName
      venue
      
    }
  }
  `;

export default function Schedule() {
  const [result] = useQuery({
    query: SCHEDULE_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return "Loading...";
  if (error) return <pre>{error.message}</pre>


  const getSchedule = () => (
<div class="matchType space-y-4">
  {data.schedule.map((launch)=>
    (<div class="container h-64 w-80 hover:min-w-0 rounded-lg text-center uppercase text-2xl text-slate-400 font-mono font-bold text-xl border-zinc-900 bg-slate-600 space-y-4">{launch.matchStatus}        
    <div class="container h-20 w-64 ml-7 mt-5 justify-center text-center uppercase text-xl text-gray-900 rounded lg font-semibold border-3 bg-slate-100 font-serif" >{launch.homeTeamName}<div class=" text-base italic text-red-600 font-semibold font-mono">{launch.matchType}</div> {launch.awayTeamName}
        </div>
        <div class="container h-10 w-64 ml-7 mt-15 justify-center text-center capitalize text-xl font-mono rounded lg text-green-600 border-3 bg-slate-100">{launch.venue}</div>

    </div>
    )
    )}
    </div>
  );
return(
    <div class="space-y-4">
<nav class="md:flex justify-left italic space-x-6">
  <a href="/Upcoming" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-gray-600">Upcoming</a>
  <a href="/Live" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-gray-600">Live</a>
  <a href="/Results" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-gray-600">Results</a>
</nav>
<div class="md:container w-64 hover:min-w-0 rounded-lg border-zinc-900 bg-slate-600">
<nav class="mx-auto flex justify-left ">
  <button href="/International" class="font-bold px-3 py-2 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-gray-600">International</button>
  <button href="/Domestic" class="font-bold px-3 py-2 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-gray-600">Domestic</button>
  <button href="/All" class="font-bold px-3 py-2 text-slate-300 rounded-lg hover:bg-slate-100 hover:text-gray-600">All</button>
</nav>
</div>
{ getSchedule() }    
  </div>
)
};