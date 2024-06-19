import React from 'react'

const ShowMovies = ({ movies ,setMovieData}) => {
    const filterByCategory=(category)=>{
        const newMovies= movies.filter((data)=>data.category == category)
        console.log(newMovies);
        setMovieData(newMovies)
    }

  return (

    <>
    <div style={{textAlign:"center",padding:"10px"}}>
        <button onClick={()=>filterByCategory("Sci-Fi")}>science fiction</button >
        <button onClick={()=>filterByCategory("Drama")}>Drama</button>
        <button onClick={()=>filterByCategory("Crime")}>Crime</button>
        <button onClick={()=>filterByCategory("Biography")}>Action</button><button>fantasy</button>
    </div>
    <div>
        {movies.map((data) => (<div key={data.id} style={{backgroundColor:'blueviolet',textAlign:'center',margin:'10px',padding:'10px'}}>
            <h1>{data.category}</h1>
            <h3>{data.moviename}</h3>
            <h3>{data.description}</h3>
            <h3>{data.releasedate}</h3>
            <h3>{data.imdbrating}</h3>
        </div>))}
    </div>
    </>
  );
};

export default ShowMovies