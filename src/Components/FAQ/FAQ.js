import React from 'react';
import faqIMG from './images/faq.jpg'

const FAQ = () => {
    return (
        <div>
            <div className="my-5 faq-header">
                <h2>Frequently Asked Questions</h2>
                <p className="w-75 mx-auto">Any question putting on your FAQ page on the tap navigation of your website, or place it on a pull-down menu under the Contact us section.</p>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={faqIMG} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How do explain a problem to a doctor?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician. Home visit doctors are not some of the latest innovations.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How do I get doctor in trouble?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-start">Home visit doctors are not some of the latest innovations. They have prevailed long before. And old fashion is coming back due to many reasons. We bring the quickest, most reliable medical service solution to every area in Dhaka. We have a major number of doctors in every part of Dhaka city ready to offer medical care at your home.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How can I contact with a Emergency Doctor?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-start">Home visit doctors are not some of the latest innovations. They have prevailed long before. And old fashion is coming back due to many reasons. We bring the quickest, most reliable medical service solution to every area in Dhaka. We have a major number of doctors in every part of Dhaka city ready to offer medical care at your home.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;