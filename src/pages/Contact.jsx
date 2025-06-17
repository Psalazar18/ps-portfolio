import Footer from "../components/Footer";
import './Contact.css'

function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <h1 className="">Contact</h1>
                    <div className="cv-container d-flex flex-row">
                        <div className="cv-box">
                            <embed src="/pdfs/CV-PaolaSalazar-2025_esp.pdf" type="application/pdf" className="cv-preview" />
                            <a href="/pdfs/CV-PaolaSalazar-2025_esp.pdf" download className="cv-download-btn">
                                Descargar CV (ES)
                            </a>
                        </div>
                        <div className="cv-box">
                            <embed src="/pdfs/CV-PaolaSalazar-2025_eng.pdf" type="application/pdf" className="cv-preview" />
                            <a href="/pdfs/CV-PaolaSalazar-2025_eng.pdf" download className="cv-download-btn">
                                Download CV (EN)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact