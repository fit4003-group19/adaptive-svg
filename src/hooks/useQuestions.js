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
    // The Questionaire Form is a multi-step form. Users have the option of opting out of any potential 
    // changes they make. Therefore we need to maintain two separate state variables for the response that
    // is currently being edited, and the final commited one. Once the user confirms their questionaire response,
    // we copy the contents of editableResponse, to commitedResponse
    const [editableResponse, setEditableResponse] = useState(null)
    const [commitedResponse, setCommitedResponse] = useState(null)
    const LOCAL_STORAGE_KEY = 'cachedResponse'

    useEffect(()=>{
      // Get Questions From Local Storage
      // If there is no response from local storage, then make the initial response the original questions
      // initialResponse needs to be cloned to avoid the same object being referenced by editableResponse 
      // and commitedResponse. They need to be isolated from one another
      const initialResponse = pullResponseLocalStorage() || orginalQuestions
      const clonedIntitialResponseEditable = initialResponse.map((foo)=>{return {...foo}})
      const clonedIntitialResponseCommited = initialResponse.map((foo)=>{return {...foo}})
      setEditableResponse(clonedIntitialResponseEditable)
      setCommitedResponse(clonedIntitialResponseCommited)
      return () => {}
    }, [])

    // Make edits to editableResponse
    const makeEdits = (i, response) => {
      setEditableResponse(
        editableResponse.map((question, j)=>{
          if (i == j) {
            question.response = response
          }
          return question
        })
      )
    }

    // Commit any edits made to editableResponse to commitedResponse
    // Clone editableResposne to avoid object sharing between state variables
    const commitEdits = () => {
      const clonedEditableResponse = editableResponse.map((foo)=>{return {...foo}})
      setCommitedResponse(clonedEditableResponse)
      pushResponseLocalStorage(clonedEditableResponse)
    }

    // Reset any edits made to editableResponse => restore the state of editableResponse
    // to commitedResponse
    const resetEdits = () => {
      const clonedCommitedResponse = commitedResponse.map((foo)=>{return {...foo}})
      setEditableResponse(clonedCommitedResponse)
    }

    // Pull the cachedResponse from LocalStorage
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

    // Push a response to the localStorage unde the LOCAL_STORAGE_KEY
    const pushResponseLocalStorage = (response) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
        return true
      } else {
          return false
      }
    }

    return {editableResponse, commitedResponse, makeEdits, commitEdits, resetEdits}
}