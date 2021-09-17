import { createContext, useState, useEffect} from "react";
import useQuestions from "../hooks/useQuestions";

//create a context, with createContext api
export const QuestionnaireContext = createContext();

const QuestionnaireProvider = (props) => {
  const {editableResponse, commitedResponse, editResponse, _commitResponse, resetResponse} = useQuestions();
  const [responseBinary, setResponseBinary] = useState(null)

  const updateBinaryNumber = (response) => {
    if (response) {
      // acm => Accumulator
      let acm = 0;
      // Binary number would be {question 7 response}{question 6 response}...{question 1 response}
      // 000000001 & 10000000 = 0 = 0
      // 1101 & 1000000101 = 0101 = 5
      // 13 & 69 = 5
      let counter = 0;
      while (counter < response.length) {
        let responseNumber = response[counter].response == "yes" ? 1 : 0;
        acm += responseNumber * (2 ** counter);
        counter++;
      }
      setResponseBinary(acm);
    } else {
      setResponseBinary(0)
    }
  };

  const commitResponse = () => {
    const clonedEditedResponse = editableResponse.map((foo)=>{return {...foo}})
    _commitResponse(clonedEditedResponse)
    updateBinaryNumber(clonedEditedResponse)
  }
  

  return (
    <QuestionnaireContext.Provider
      value={{editableResponse, commitedResponse, editResponse, commitResponse, resetResponse, responseBinary}}
    >
      {props.children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireProvider;
