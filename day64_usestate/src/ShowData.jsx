import React from 'react'

const ShowData = () => {
    const movie =[{
        id:1,
        movieName:'Ram.One',
        release:2012,
        actor:'Srk'
    },
    {
        id:2,
        movieName:'infinity war',
        release:2018,
        actor:'Srk'
    },
    {
        id:3,
        movieName:'man of steel',
        release:2010,
        actor:'superman'
    }

]
  return (
    <div>
        {/* <h1>{movie.movieName}</h1>
        <h1>{movie.release}</h1>
        <h1>{movie.actor}</h1> */}
        {movie.map((data)=> (<div key={data.id} style={{backgroundColor:'gray',textAlign:'center',padding:'10px',margin:'10px'}}>
         
        <h1>{data.movieName}</h1>
        <h1>{data.actor}</h1>
        <h1>{data.release}</h1>

        </div>))}
    </div>
  )
}

export default ShowData;