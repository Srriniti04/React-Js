// import PropsFunctional from "./Day4/PropsFunctional"
// import PropsClass from "./Day4/PropsClass"
// import PropsFunctionalEx1 from "./Day4/PropsFunctionalEx1"
// import ArrowProps from "./Day4/ArrowProps"
// import StateClassCom from "./Day4/StateClassCom"
// import StateFunction from "./Day4/StateFunction"
// import StateHoldObject from "./Day4/StateHoldObject"
// import Parent from "./Day4/ParentChildCommunication"

import { ErrorBoundary } from "./Day8/ErrorBoundary";

export default function App()
{
  return(
    <div>
      {/* <PropsFunctional name="Srriniti" college="SKCT"></PropsFunctional>
      <PropsClass College="SKCT"></PropsClass>
      <PropsFunctionalEx1 college="SKCT" place="CBE"></PropsFunctionalEx1>
      <ArrowProps place="Sivakasi"></ArrowProps>
      <StateClassCom ></StateClassCom>
      <StateFunction></StateFunction>
      <StateHoldObject></StateHoldObject>
      <Parent/> */}
      <ErrorBoundary>
        <Hero heroName="Vijay"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    </div>
    
  )
}
