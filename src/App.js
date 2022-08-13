import { useState } from 'react';
import Form from './components/Form.js';
import Header from './components/Header.js'
import ProgressTab from './components/ProgressTab.js';
import FormHeader from './components/FormHeader.js';
import Button from './components/Button.js';
import logo from './Img/logo.jpg';
import pic1 from './Img/For Myself.jpg';
import pic2 from './Img/workwithteam.jpg';
import pic3 from './Img/congratulaations.jpg';


function App() {
  let headerTitle = "Eden";
  const [step =1, setStep] = useState();

  const [FormHeaderLines, setFormHeaderLines] = useState([
    {
      sno: 1,
      title: "Welcome!First things first...",
      desc: "You can always change them later."
    },
    {
      sno: 2,
      title: "Let's setup a home for all your work",
      desc: "You can always create amnother workspace late."
    },
    {
      sno: 3,
      title: "How are you planning to use Eden?",
      desc: "we'll streamline your setup experience accordingly."
    },
    {
      sno: 4,
      title: "Congratulations, Eren!",
      desc: "You have completed onboarding, you can start using the Eden!"
    }
  ]);

  const StepIncrement = (step) => {
    if(step<4){
      setStep(step++)
      setStep(step);
    }  
  }
  
  return (
    <div className="container">
      <div>
        <Header title={headerTitle} logo={logo} />
        <ProgressTab ProgressTab={step} />
        <FormHeader FormHeaderLines={FormHeaderLines[step - 1]} pic3={pic3} />
        <Form step={step} pic1={pic1} pic2={pic2}/>
        <Button StepIncrement={StepIncrement} step={step} />
      </div>
    </div>
  )
}

export default App;
