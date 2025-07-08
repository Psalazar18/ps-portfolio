import { useState, useEffect } from 'react';
import certificates from '../data/certificates';
import './Certificates.css'

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    const handleOpenModal = (cert) => {
        setScrollY(window.scrollY);
        setSelectedCert(cert);
    };

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCert]);

    return (
        <>
            <section className="certificates-section">
                <div className="container">
                    <h1>Certificates</h1>
                    <div className="row">
                        {certificates.map((cert, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                                <div
                                    className="card h-100 shadow-sm certificate-card"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => handleOpenModal(cert)}
                                    onKeyDown={(e) => e.key === "Enter" && handleOpenModal(cert)}
                                    aria-label={`Ver certificado ${cert.name}`}
                                >
                                    <img
                                        src={cert.path}
                                        loading="lazy"
                                        className="card-img-top"
                                        alt={`Certificado ${cert.name}`}
                                    />
                                    <div className="card-body text-center">
                                        <p className="card-title h5">{cert.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {selectedCert && (
                <div
                    className="certificate-modal"
                    style={{ top: `${scrollY}px`, position: 'absolute' }}
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
        </>
    );
}

export default Certificates