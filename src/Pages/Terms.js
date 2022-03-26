import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Terms = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handlePageChange = (page) => {
        setPageNumber((prev) => prev = page)
    }

    return (

        <div>
            <section className="section-bg">
                <div className="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>
                            Terms and Conditions &nbsp;
                            <a href="./assets/files/terms.pdf" download>
                            <img src="https://img.icons8.com/ios/30/000000/download--v1.png" />
                            </a>
                        </h2>
                    </div>
                    <div className="terms-box">
                        <Document file="./assets/files/terms.pdf" onLoadSuccess={onDocumentLoadSuccess} className="mb-3" >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} className="d-flex justify-content-center mb-3" />
                            ))}
                        </Document>
                    </div>

                </div>
            </section>
        </div>



    )
}

export default Terms;