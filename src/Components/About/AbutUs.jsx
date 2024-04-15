import "../../../src/App.css";
import { FiCheckCircle } from "react-icons/fi";
const AbutUs = () => {
  return (
    <div className="contant grid grid-cols-1 lg:grid-cols-2 gap-20 mt-8">
      {/* 1st coll */}
      <div>
        <div className="divider divider-warning divider-end text-warning w-36 text-xl">
          About Us
        </div>

        <h1 className="text-4xl my-4">We Leading Industry Since 1972</h1>
        <p>
          Tdolor sit amet, consectetur, adipis civelit sed quia non qui dolorem
          ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia
          numquam.
        </p>

        <div className="flex gap-5">
          <ul className="space-y-2 mt-4 flex-1">
            <li className="text-xl items-center">
              <i className="fa-regular fa-circle-check text-warning text-2xl"></i>{" "}
              Our Company Growth
            </li>
            <hr />
            <li className="text-xl items-center">
              <i className="fa-regular fa-circle-check text-warning text-2xl"></i>{" "}
              1000 Employed
            </li>
            <hr />
            <li className="text-xl items-center">
              <i className="fa-regular fa-circle-check text-warning text-2xl"></i>{" "}
              Global Product Manufactur
            </li>
            <hr />
          </ul>
          <ul className="space-y-2 mt-4">
            <li className="text-xl items-center">
              <i className="fa-regular fa-circle-check text-warning text-2xl"></i>{" "}
              Customer Relationship
            </li>
            <hr />
            <li className="text-xl items-center">
              <i className="fa-regular fa-circle-check text-warning text-2xl"></i>{" "}
              Globally Stable Partner
            </li>
            <hr />
            <li className="text-xl items-center">
              <i className="fa-regular fa-circle-check text-warning text-2xl"></i>{" "}
              Our Company Growth
            </li>
            <hr />
          </ul>
        </div>
      </div>
      {/* 2nd coll */}
      <div>
        <div className="divider divider-warning divider-end text-warning w-36 text-xl">
          FAQ
        </div>

        <h1 className="text-4xl">Ask Question?</h1>

        <div className="collapse collapse-plus mt-10">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-yellow-400">
          We offer luxury service to our customer
          </div>
          <div className="collapse-content">
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium bg-yellow-400">
          We offer luxury service to our customer
          </div>
          <div className="collapse-content">
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium bg-yellow-400">
          We offer luxury service to our customer
          </div>
          <div className="collapse-content">
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbutUs;
