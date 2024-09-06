import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, chef, name, supplier, taste, category, details, url } = coffee;

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
            <FaEye />
          </button>
          <button className="btn btn-neutral">
            <MdEdit />
          </button>
          <button onClick={() => handelDelete(_id)} className="btn btn-error">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
