import { useState } from 'react';
import Form from './components/Form.js';
import Header from './components/Header.js'
import ProgressTab from './components/ProgressTab.js';
import FormHeader from './components/FormHeader.js';
import Button from './components/Button.js';
import logo from './assets/logo.jpg';
import pic1 from './assets/ForMyself.jpg';
import pic2 from './assets/workwithteam.jpg';
import pic3 from './assets/congratulaations.jpg';

function App() {
  let headerTitle = "Eden";
  const [step = 1, setStep] = useState();
  const StepIncrement = (step) => {
    if (step < 4) {
      setStep(step++)
      setStep(step);
    }
  }

  return (
    <div className="container">
      <div>
        <Header title={headerTitle} logo={logo} />
        <ProgressTab ProgressTab={step} />
        <FormHeader step={step} pic3={pic3} />
        <Form step={step} pic1={pic1} pic2={pic2} />
        <Button StepIncrement={StepIncrement} step={step} />
      </div>
    </div>
  )
}

export default App;
