


import Movie from '../Movie/Movie';



function MovieList(props) {

    return (
        <>
    
    {props.dataa.map((item) => {
                return (
                    <section key={item.id}>
                    <Movie poster_path={item.poster_path} id={item.id} title={item.title} overview={item.overview} item={item}/>
                    </section>

                )
            })}
        </>
    )
}

export default MovieList;











