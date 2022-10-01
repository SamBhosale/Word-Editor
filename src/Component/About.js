
import React from 'react'

export default function About() {
    return (
        <div className="accordion-decoration-none container" id="accordionExample">
            <h2 className="contianer  text-decoration-none">About Us</h2>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Make Everithing with Utility App....!
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>This is best Utility app Provides Some Functionality</p>
                        <ol><li>Make text into Upper Case</li>
                            <li>Make text into Lower Case </li>
                            <li> Clear Text</li>
                            <li> Copy Text By one Click</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"><p>This is best Utility app Provides Some Functionality</p>
                        <ol><li>Make text into Upper Case</li>
                            <li>Make text into Lower Case </li>
                            <li> Clear Text</li>
                            <li> Copy Text By one Click</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What Can do with Utilit App
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>This is best Utility app Provides Some Functionality</p>
                        <ol><li>Make text into Upper Case</li>
                            <li>Make text into Lower Case </li>
                            <li> Clear Text</li>
                            <li> Copy Text By one Click</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}