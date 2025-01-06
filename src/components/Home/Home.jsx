import React from 'react';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-4 fw-bold text-primary">Bienvenido a Airsoft Elite</h1>
          <p className="lead mt-3 text-secondary">
            Tu tienda de confianza para armas de airsoft y accesorios de alta calidad. Descubre nuestra amplia gama de productos diseñados para ofrecerte la mejor experiencia en el campo de batalla.
          </p>
          <hr className="my-4" />
          <p className="text-muted">
            Desde réplicas realistas hasta equipamiento táctico, contamos con todo lo que necesitas para llevar tu pasión por el airsoft al siguiente nivel.
          </p>
          <a href="/products" className="btn btn-primary btn-lg mt-3">
            Explora Nuestra Tienda
          </a>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <img src="/images/replicas.jpg" className="card-img-top" alt="Réplicas" />
            <div className="card-body">
              <h5 className="card-title">Réplicas de Alta Calidad</h5>
              <p className="card-text">Encuentra réplicas precisas y realistas para todas tus partidas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <img src="/images/accesorios.jpg" className="card-img-top" alt="Accesorios" />
            <div className="card-body">
              <h5 className="card-title">Accesorios Tácticos</h5>
              <p className="card-text">Desde miras hasta chalecos, equipa tu arsenal con lo mejor.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <img src="/images/proteccion.jpg" className="card-img-top" alt="Protección" />
            <div className="card-body">
              <h5 className="card-title">Seguridad y Protección</h5>
              <p className="card-text">Asegúrate de estar protegido con nuestro equipo de seguridad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

