"use client";
import styles from "@/components/addnew.modules.css";

import { useRouter } from 'next/router';

const Addnew = () => {

  return (
    <div className="">
      <div className="cardouter bg-cublue pt-4 pb-4 mt-6">
        <div className="cardinner mt-5 mb-5">
          <h5 className="card-title pt-5 ps-5">
            <img src="Add.png" alt="" className="pe-2" />
            Add your own
          </h5>
          <div className="card-description p-4 ps-5">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, do you know someone who should be on Hobbycue? Go ahead and Add your Own page.
          </div>
          <a href="#cards">
          <button
            className="me-2 btn-custom ms-5 me-5 ps-5 pe-5 mb-5 rounded text-customcolor"
          >
            Add new
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Addnew;

