import "./FAQ.css"
import { useState } from "react"

function AccordionItem({ question, answer, final }) {
    const [open, setOpen] = useState(false);
    return(
        <div className={`${final ? "final" : ""}accordionItem`}>
            <button
                className="dropDownButton"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Toggle answer"
                
            >
                <p>{question}</p>
                <img className={`dropDownArrow${open ? "Open" : ""}`} src="/images/down-arrow.svg" alt="▼" aria-hidden="true"/>
            </button>
            <div className={`answer${open ? "Open" : ""}`}>
                <hr style={{ border: "1px solid #f0ebd850" }} />
                <p>{answer}</p>
            </div>
        </div>
    )
} 

function FAQ() {
    return(
        <div className="standardPage">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion">
                <AccordionItem question="Question" answer="Answer" final={false} />
                <AccordionItem question="Question" answer="Answer" final={false} />
                <AccordionItem question="Question" answer="Answer" final={false} />
                <AccordionItem question="Question" answer="Answer" final={false} />
                <AccordionItem question="Question" answer="Answer" final={false} />
                <AccordionItem question="Question" answer="Answer" final={true} />
            </div>
        </div>
    )
}

export default FAQ