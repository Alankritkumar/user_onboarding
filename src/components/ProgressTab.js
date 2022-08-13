import ProgressTabCountSteps from "./ProgressTabCountSteps"
const ProgressTab = ({ ProgressTab }) => {
  return (
    <div id="ProgressBar" >
      <ul className="progressbar">
        <li id="step1" className="active" ></li>
        <li id="step2" ></li>
        <li id="step3" ></li>
        <li id="step4"></li>
      </ul>
      <ProgressTabCountSteps ProgressTabCountSteps={ProgressTab} />
    </div>
  )
}

ProgressTab.defaultProps ={
  ProgressTab:1,
}
export default ProgressTab
