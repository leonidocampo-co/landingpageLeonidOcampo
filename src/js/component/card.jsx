import React from "react";

export const Card = () => {

    return (
    <div class="card-group">
            <div class="card">
                <img src="https://picsum.photos/201" class="card-img-top w-100 h-50" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>

                    
                </div>

                <div class = "boton bg-secondary bg-opacity-10">
                      <a class="btn btn-primary btn-lg " href="#" role="button">Find out more!</a>
                    </div>    
            </div>
        <div class="card">
            <img src="https://picsum.photos/202" class="card-img-top w-100 h-50" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>

            <div class = "boton bg-secondary bg-opacity-10">
              <a class="btn btn-primary btn-lg " href="#" role="button">Find out more!</a>
              </div>
        </div>
        <div class="card">
            <img src="https://picsum.photos/203" class="card-img-top w-100 h-50" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>

            <div class = "boton bg-secondary bg-opacity-10">
              <a class="btn btn-primary btn-lg " href="#" role="button">Find out more!</a>
              </div>
        </div>
    </div>

    );
};