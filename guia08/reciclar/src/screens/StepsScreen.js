import React from "react";
import StepScreen from "./StepScreen";

const StepsScreen = ({steps, navigation}) =>{
    const [currentStep, setCurrentStep] = React.useState(0);

    const handleNextStep = () =>{
        if(currentStep < steps.length -1 ){
            setCurrentStep(currentStep + 1);
        }else{
            navigation.navigate("Inicio");
        }
    }

    return(
        <StepScreen
        step={steps[currentStep].step}
        description={steps[currentStep].description}
        onNextStep={handleNextStep}/>
    );
}

export default StepsScreen;