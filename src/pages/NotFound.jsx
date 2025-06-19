import './NotFound.css';

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="container">
                <h1>404 - Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <a href="/">Volver al inicio</a>
            </div>
        </section>
    );
};

export default NotFound;
