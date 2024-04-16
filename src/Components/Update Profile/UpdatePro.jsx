import { useContext, useState } from "react";
import { AuthContex } from "../../Contex/AuthProvider";

const UpdatePro = () => {
    const { user, updateUserInfo } = useContext(AuthContex);
    const {userName, image} = updateUserInfo;
    const [isEditing, SetIsEditing] = useState(false);
    const [editName, setEditName] = useState(userName);
    const [editURl, setURL] = useState(image);

    //handle changes
    const handleChanges = (e)=>{
        e.preventDefault();
        SetIsEditing(isEditing);
    }

 
  return (
    <div>
      <h1 className="text-5xl text-center bg-green-400 py-3">
        Update Your Profile.
      </h1>
    <h1>hello . {editName} </h1>
      <div className=" text-center m-3">
      <img src={
                user.photoURL || "https://i.ibb.co/wyYzNJz/man.jpg"
              } alt=""  className="rounded-full inline w-36"/>
      </div>

      <div className="hero ">
        <div className="hero-content lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleChanges}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                {
                    isEditing ? (
                        <input
                  value={userName}
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  onChange={e=>{
                    setEditName(e.target.value);
                  }}
                />
                    ): (<span>{editName}</span>)
                }
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>

                {
                    isEditing ? (
                        <input
                        value={image}
                        type="text"
                        placeholder="url"
                        className="input input-bordered"
                        required
                        onChange={e=>{
                        setURL(e.target.value);
                  }}
                />
                    ): (<span>{editURl}</span>)
                }

              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                    {isEditing ? "Save Changes" : "Edit Info"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePro;
