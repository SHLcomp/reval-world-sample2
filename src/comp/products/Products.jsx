import './Products.scss';
import data from '../../data/allProducts'

export const Products = () => {
  return (
    <div className='prod' id='ser'>
      <h1>We Offer Many Products!</h1>  
      <div className="prod-con">
        {data.map((item)=>{
            return(
                <div className="prod">
                    <h5>{item.displayName}</h5>
                </div>
            )
        })}
      </div>
    </div>
  )
}
