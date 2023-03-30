import React from "react";

export const Card = () => {

    return (
    <div className="card-group">
            <div className="card">
            <img src="https://picsum.photos/202" className="card-img-top w-100 h-50" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>

            <div className = "boton bg-secondary bg-opacity-10">
              <a className="btn btn-primary btn-lg " href="#" role="button">Find out more!</a>
              </div>
        </div>

        <div className="card">
            <img src="https://picsum.photos/202" className="card-img-top w-100 h-50" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>

            <div className = "boton bg-secondary bg-opacity-10">
              <a className="btn btn-primary btn-lg " href="#" role="button">Find out more!</a>
              </div>
        </div>
        <div className="card">
            <img src="https://picsum.photos/203" className="card-img-top w-100 h-50" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>

            <div className = "boton bg-secondary bg-opacity-10">
              <a className="btn btn-primary btn-lg " href="#" role="button">Find out more!</a>
              </div>
        </div>
    </div>

    );
};