import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

const Faq = () => {

    const [faqs, setFaqs] = useState([]);
    const [LoadingStatus, setLoadingStatus] = useState(true);

    useEffect(async () => {
        await axios.get('http://localhost:5000/faqs')
            .then((res) => {
                console.log(res.data);
                setFaqs(res.data);
                setLoadingStatus(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    if (LoadingStatus === true) {
        return <div className="d-flex align-items-center justify-content-center"><CircularProgress /></div>
    }

    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <section id="faq" className="faq">
                            <div className="container" data-aos="fade-up">

                                <div className="section-title">
                                    <h2>Frequently Asked Questions</h2>
                                    <p>For information about Humber's vaccination policy, including FAQs, information about student exemptions,
                                        as well as step-by-step instructions for uploading COVID-19 documentation to the Humber Guardian app, visit humber.ca/campus-return/vaccination-information</p>
                                </div>

                                <div className="faq-list">
                                    <ul>
                                        {faqs.map((faq, index) => {
                                            let base = index + 1;
                                            return (
                                                <li key={index} data-aos="fade-up" data-aos-delay={base * 100}>
                                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target={"#faq-list-" + base}>{faq.title} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                                    <div id={"faq-list-" + base} className="collapse" data-bs-parent=".faq-list">
                                                        <p> {faq.answer}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq