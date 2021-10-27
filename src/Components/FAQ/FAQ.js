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
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Can I speak with a doctor in online?</button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician</div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How do explain a problem to a doctor?</button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-start">Home visit doctors are not some of the latest innovations. They have prevailed long before. And old fashion is coming back due to many reasons. We bring the quickest, most reliable medical service solution to every area in Dhaka. We have a major number of doctors in every part of Dhaka city ready to offer medical care at your home.</div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How do I get doctor in trouble?</button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician</div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Is it good to switch other doctors?</button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician</div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How can I contact with a Emergency Doctor?</button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body text-start">It can be daunting to visit a doctor for symptoms of what might be an undiagnosed medical problem. Patients often struggle to adequately explain their symptoms during the brief medical interview, which is an important component of helping the physician</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;