import { useState } from 'react';
import certificates from '../data/certificates';
import './Certificates.css'

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    return (
        <>
            <section className="certificates">
                <div className="container">
                    <h1>Certificates</h1>
                    <div className="row">
                        {certificates.map((cert, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                                <div
                                    className="card h-100 shadow-sm certificate-card"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => setSelectedCert(cert)}
                                    onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
                                    aria-label={`Ver certificado ${cert.name}`}
                                >
                                    <img 
                                        src={cert.path} 
                                        className="card-img-top" 
                                        alt={`Certificado ${cert.name}`} 
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{cert.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedCert && (
                        <div
                            className="certificate-modal"
                            onClick={() => setSelectedCert(null)}
                            role="dialog"
                            aria-modal="true"
                            aria-label={`Certificado ${selectedCert.name}`}
                        >
                            <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="btn-close" onClick={() => setSelectedCert(null)} aria-label="Cerrar modal"></button>
                                <img 
                                    src={selectedCert.path} 
                                    alt={`Certificado ${selectedCert.name}`} 
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Certificates