import React from "react";

export const Card = () => {

    return (

      <div className="card mb-3 d-flex flex-row">
            
          <div className="card text-center  m-2" style={{width: '33rem'}}>
          <img src="https://picsum.photos/200" class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>

          <div className="card text-center m-2" style={{width: '33rem'}}>
          <img src="https://picsum.photos/202" class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>

          <div className="card text-center  m-2" style={{width: '33rem'}}>
          <img src="https://picsum.photos/208" class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>

      
      </div>



    );
};