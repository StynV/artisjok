import { useFeedbackSubmittedContext } from "@/context/feedback"
import { postFeedbackRequest } from "@/datocms/postFeedbackRequest"
import { useState } from "react"

const Form = () => {
    const [showThanks, setShowThanks] = useState(false)

    const { reSetchSubmittedFeedbacks } = useFeedbackSubmittedContext()

    const [formData, setFormData] = useState({
        naam: "",
        opmerking: "",
        likes: 0
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

        setShowThanks(true)
        setInterval(() => setShowThanks(false), 5000)

        setFormData({
            naam: "",
            opmerking: "",
            likes: 0
        })

        const response = await postFeedbackRequest(
            {
                naam: formData.naam,
                opmerking: formData.opmerking,
                likes: formData.likes
            }
        )

        if (response) {
            reSetchSubmittedFeedbacks()
        }
    }

    return (
        <form
            onSubmit={submitForm}
            className="md:mr-10 mb-4"
        >
            {showThanks && <div className="bg-green-500 p-4 mb-4 text-white">
                <p>Dankjewel voor jouw feedback.</p>
            </div>}

            <div className="flex flex-col mb-2">
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
                    className="border border-slate-300 mb-2 rounded-md p-2 text-black"
                />
            </div>
            
            <div className="flex flex-col mb-2">
                <label className="mb-2 flex flex-row">
                    <p className="text-black">Opmerking</p>
                    <p className="text-red-600">*</p>
                </label>
                <textarea
                    name="opmerking"
                    onChange={handleInput}
                    value={formData.opmerking}
                    required
                    className="border border-slate-300 mb-2 rounded-md xl:p-2 lg:p-0 md:p-2 text-black"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white md:py-2 py-1 w-full rounded-md"
            >
                Verzend
            </button>
        </form>
    )
}

export default Form