const FormHeader = ({ step, pic3 }) => {
  const FormHeaderLines =[
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
  ];
  return (
    <div className="FormHeaderFont">
      {(FormHeaderLines[step-1].sno==4) ? <div><img src={pic3} style={{ textAlign: 'center' }} /></div> :""}
      <h3>{FormHeaderLines[step-1].title}</h3>
      <p>{FormHeaderLines[step-1].desc}</p>
    </div>
  )
}
FormHeader.defaultProps={
  FormHeaderLines:1,
  pic3:'',
}
export default FormHeader
