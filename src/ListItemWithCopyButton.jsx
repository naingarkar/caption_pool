import { useState } from "react";
import ReactGA from 'react-ga';

export default function ListItemWithCopyButton({text}) {
    const initialText = "Copy"
	const [buttonText, setButtonText] = useState(initialText)
	function copyText() {

        ReactGA.event({
			category: 'User Interaction',
			action: 'Clicked Copy',
			label: 'Copy Button',
		});

        try {
            navigator.clipboard.writeText(text);
            setButtonText("Copied")
            resetCopyButton()
            
        } catch (error) {
            setButtonText("Copy Error")
            resetCopyButton()
        }
    }

    function resetCopyButton() {
        setTimeout(() => setButtonText(initialText), 3000)
    }

    return (
        <div className="relative border rounded p-4">
            <p className="text-gray-700">{text}</p>
            <button
                onClick={copyText}
                className="absolute top-0 right-0 m-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none"
            >
                {buttonText}
            </button>
        </div>
    )
}