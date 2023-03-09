import './ItemListContainer.css'

export const ItemListContainer =({greeting})=>{
    return(
        <div className="container my-5">
            <h2 className="list_titulo">
                ItemListContainer
            </h2>
            <hr/>
            <p> {greeting} </p>

            <button className='btn btn-danger'>INFO</button>
        
        </div>
    )
}