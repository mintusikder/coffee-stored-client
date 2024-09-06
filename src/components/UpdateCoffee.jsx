import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  console.log(updateCoffee)
//   const { _id, name, supplier, category, taste, chef, details, photo } = coffee;
  const handelUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const chef = form.chef.value;
    const details = form.details.value;
    const url = form.url.value;
    const newCoffee = { name, supplier, category, taste, chef, details, url };
    console.log(newCoffee);
    fetch(`http://localhost:5000/coffee/${updateCoffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "Your file has been Updated.",
              icon: "success",
            });
          }
      });
  };

  return (
    <div className="container mx-auto p-8 bg-slate-200">
      <h2 className="text-center text-2xl mb-4 font-bold">
        Update Existing Coffee Details
      </h2>
      <p className="w-3/4 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handelUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Coffee name?</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={updateCoffee?.name}
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={updateCoffee?.supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={updateCoffee?.category}
              placeholder="Category"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              defaultValue={updateCoffee?.taste}
              placeholder="Taste"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Chef</span>
            </div>
            <input
              type="text"
              name="chef"
              defaultValue={updateCoffee?.chef}
              placeholder="Chef"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={updateCoffee?.details}
              placeholder="Details"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Photo URL</span>
          </div>
          <input
            type="url"
            name="url"
            defaultValue={updateCoffee?.url}
            placeholder="URL"
            className="input input-bordered w-full"
          />
        </label>

        <div className="mt-4">
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Update Coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
