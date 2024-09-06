import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handelAddCoffee = (e) => {
      e.preventDefault();
      const form = e.target; // Get the form element
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const url = form.url.value;
  
      const addNewCoffee = {
        chef,
        name,
        supplier,
        taste,
        category,
        details,
        url,
      };
      console.log(addNewCoffee);
      fetch("http://localhost:5000/coffee", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addNewCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Add coffee SuccessFul',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          }
        });
    };
  
    return (
      <div className="container mx-auto p-10 bg-slate-200">
        <h2 className="text-center mb-4 text-2xl font-bold">Add Coffee</h2>
        <p className="w-3/4 mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handelAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="name"
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
                placeholder="Chef"
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
                placeholder="Supplier"
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
                placeholder="Taste"
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
                placeholder="Category"
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
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              name="url"
              placeholder="photo"
              className="input input-bordered w-full"
            />
          </label>
          <div className="mt-4">
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default AddCoffee;
  