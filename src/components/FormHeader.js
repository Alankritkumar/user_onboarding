const FormHeader = ({ FormHeaderLines, pic3 }) => {
  return (
    <div className="FormHeaderFont">
      {(FormHeaderLines.sno==4) ? <div><img src={pic3} style={{ textAlign: 'center' }} /></div> :""}
      <h3>{FormHeaderLines.title}</h3>
      <p>{FormHeaderLines.desc}</p>
    </div>
  )
}
FormHeader.defaultProps={
  FormHeaderLines:1,
  pic3:'',
}
export default FormHeader
