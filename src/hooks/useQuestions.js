import { useState, useEffect} from 'react';


export default function useQuestions() {
    // original questions
    const orginalQuestions = [
        {
          question: "Do you experience a motor impairment?",
          response: null,
        },
        {
          question: "Do you experience a colour impairment?",
          response: null,
        },
        {
          question: "Do you have low vision?",
          response: null,
        },
        {
          question: "Do you experience total blindness?",
          response: null,
        },
        {
          question: "Do you have difficulty reading?",
          response: null,
        },
        {
          question: "Do you have difficulties operating doors?",
          response: null,
        },
        {
          question: "Do obstacles disrupt your indoor navigation?",
          response: null,
        },
      ];
    const [editableResponse, setEditableResponse] = useState(null)
    const [commitedResponse, setCommitedResponse] = useState(null)
    const LOCAL_STORAGE_KEY = 'response'


    useEffect(()=>{
        // Get Questions From Local Storage
        const initialResponse = pullResponseLocalStorage() || orginalQuestions
        const clonedIntitialResponseEditable = initialResponse.map((foo)=>{return {...foo}})
        const clonedIntitialResponseCommited = initialResponse.map((foo)=>{return {...foo}})
        setEditableResponse(clonedIntitialResponseEditable)
        setCommitedResponse(clonedIntitialResponseCommited)

        return () => {}
      }, [])

  
    const editResponse = (i, response) => {
      setEditableResponse(
        editableResponse.map((question, j)=>{
          if (i == j) {
            question.response = response
          }
          return question
        })
      )
    }

    const _commitResponse = (response) => {
      setCommitedResponse(response)
      pushResponseLocalStorage(response)
    }

    const resetResponse = () => {
      const clonedCommitedResponse = commitedResponse.map((foo)=>{return {...foo}})
      setEditableResponse(clonedCommitedResponse)
    }

    const pullResponseLocalStorage = () => {
        if (typeof localStorage !== 'undefined') {
          try {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
          } catch (err) {
            console.error(err)
          }
        }
        // If Local Storage Unavailable or JSON parsing fails, then return null
        return null
    }

    const pushResponseLocalStorage = (response) => {
      if (typeof localStorage !== 'undefined') {
        console.log(response)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
        return true
      } else {
          return false
      }
    }

    return {editableResponse, commitedResponse, editResponse, _commitResponse, resetResponse}
}