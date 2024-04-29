import React, { useEffect, useState } from 'react';
import SectionHeading from '../Shared/SectionHeading';
import img from '../../assets/Image/undraw_Questions_re_1fy7.png'

const Faq = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch('Faq.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    return (
        <div>
            <SectionHeading heading={`FAQ`} text={`lorem ipsum`} ></SectionHeading>
            <div className='flex'>
                <div className='w-1/2'>
                    {
                        questions.map(question => <div className="collapse collapse-plus my-4 bg-base-200">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                {question.question}
                            </div>
                            <div className="collapse-content">
                                <p> {question.answer} </p>
                            </div>
                        </div>)
                    }

                </div>
                <div className='w-1/2'>
                    <img className='w-full' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;