import { useFeedbackSubmittedContext } from "@/context/feedback"
import { postFeedbackRequest } from "@/datocms/postFeedbackRequest"
import { useState } from "react"

const Form = () => {
    const { reSetchSubmittedFeedbacks } = useFeedbackSubmittedContext()

    const [formData, setFormData] = useState({
        naam: "",
        opmerking: ""
    })

    const handleInput = (e: any) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }))
    }

    const submitForm = async (e: any) => {
        e.preventDefault()

        const response = await postFeedbackRequest(
            {
                naam: formData.naam,
                opmerking: formData.opmerking
            }
        )

        if (response) {
            reSetchSubmittedFeedbacks()
        }
    }

    return (
        <form
            onSubmit={submitForm}
            className="md:mr-10 mb-10"
        >
            <div className="flex flex-col">
                <label className="mb-2 flex flex-row">
                    <p className="text-black">Naam</p>
                    <p className="text-red-600">*</p>
                </label>
                <input
                    type="text"
                    name="naam"
                    onChange={handleInput}
                    value={formData.naam}
                    required
                    className="border border-slate-300 mb-2 rounded-md p-2"
                />
            </div>
            
            <div className="flex flex-col">
                <label className="mb-2 flex flex-row">
                    <p className="text-black">Opmerking</p>
                    <p className="text-red-600">*</p>
                </label>
                <textarea
                    name="opmerking"
                    onChange={handleInput}
                    value={formData.opmerking}
                    required
                    className="border border-slate-300 mb-2 rounded-md p-2 text-black"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 w-full rounded-md text-black"
            >
                Verzend
            </button>
        </form>
    )
}

export default Form