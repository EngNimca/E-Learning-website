import { useState } from 'react'
import FAQItem from '../components/FAQItem';

function FAQ() {
   const [openIndex, setOpenIndex] = useState(0);
 const faqs = [
    {
      question: "What is an online course?",
      answer:
        "An online course is a series of video lessons, quizzes, and assignments designed to help you learn a specific skill.",
    },
    {
      question: "How do I access my courses?",
      answer:
        "After enrolling in a course, you can access all your lessons and learning materials from your student dashboard.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Yes. You can learn at your own pace and access your lessons whenever it is convenient for you.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes. You can receive a certificate after successfully completing the required course lessons and assessments.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes. Refunds may be available depending on the course and our refund policy.",
    },
  ];

  const handleToggle =(index)=>{
    setOpenIndex(index === openIndex ? null : index)
  }
  return <>
      <section id="faq" className='bg-white scroll-mt-28'>
        <div className="max-container flex flex-col items-center padding-x py-10 sm:py-14 lg:py-16 ">
          <div className="mx-auto max-w-2xl text-center">
          <h1 className='font-roboto text-2xl font-bold text-primary sm:text-3xl'>
             Frequently Asked Questions</h1>
            </div>

          {/* FAQs items*/}
          <div className='mx-auto mt-7 flex w-full max-w-3xl font-roboto flex-col gap-2 sm:mt-8'>
            {
              faqs.map((faqs, index)=>
              <FAQItem
              key={faqs.question}
              question={faqs.question}
              answer={faqs.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}/>
                
              )
            }

          </div>
          <p className="mt-5 text-center text-[10px] text-body sm:text-xs">
          Have more questions? Contact our support team.
            </p>
        </div>
      </section>
    </>
  
}

export default FAQ
