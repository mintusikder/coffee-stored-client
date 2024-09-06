import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const {_id, chef, name, supplier, taste, category, details, url } = coffee;

  const handelDelete = () =>{
    
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl p-6">
      <figure>
        <img src={url} alt={name} />
      </figure>
      <div className="text-left flex items-center w-full justify-between">
        <div>
          <p>Name: {name}</p>
          <p>Category: {category}</p>
          <p>Taste: {taste}</p>
          <p>Taste: {chef}</p>
          <p>Details: {details}</p>
          <p>Supplier: {supplier}</p>
        </div>
        <div className="card-actions justify-end flex-col">
          <button className="btn btn-primary">
            <Link to={`/coffee/${coffee.id}`}>
              <FaEye />
            </Link>
          </button>
          <button className="btn btn-neutral">
            <Link to={`/edit/${coffee.id}`}>
              <MdEdit />
            </Link>
          </button>
          <button className="btn btn-error">
            <Link onClick={handelDelete}>
              <MdDelete />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
