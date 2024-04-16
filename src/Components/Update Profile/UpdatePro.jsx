import { useContext, useState } from "react";
import { AuthContex } from "../../Contex/AuthProvider";

const UpdatePro = () => {
  const { user, updateUserInfo } = useContext(AuthContex);
  const [update, setUpdate] = useState();
  // const {name, image} = updateUserInfo;
  const handleUpdate = () =>{
    setUpdate(updateUserInfo);
  }
  return (
    <div>
      <h1 className="text-5xl text-center bg-green-400 py-3">
        Update Your Profile.
      </h1>

      <div className=" text-center m-3">
      <img src={
                user.photoURL || "https://i.ibb.co/wyYzNJz/man.jpg"
              } alt=""  className="rounded-full inline w-36"/>
      </div>

      <div className="hero ">
        <div className="hero-content lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  placeholder="url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleUpdate} className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePro;
