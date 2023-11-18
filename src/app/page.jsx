'use client'
import { useState } from 'react'
import data from '../data/sampleData'
import ListItemWithCopyButton from '../ListItemWithCopyButton'

export default function Home() {

	const [searchText, setSearchText] = useState("")
	const [displayResults, setDisplayResults ] = useState([])
	
	function handleSearch() {
		if(searchText !== ""){
			let searchResult = data.filter(caption => 
				caption.captionTitle.toLowerCase().includes(searchText.toLowerCase())
			)
			
			let result = searchResult.map((caption, index) => 				
					<ListItemWithCopyButton key={index} text={caption.captionTitle}/>
			)
		
			setDisplayResults(result)
			
		}else{
			setDisplayResults([])
		}
		
	}

	

	return (
	<div className="grid grid-cols-8">
		<div className="col-start-3 col-span-4">
			<div className="max-w-full rounded overflow-hidden shadow-md bg-white p-4 mt-4">
				<h1>Search Your Caption Here</h1>
				<div className="flex items-center border border-gray-300 rounded-lg mt-4">
					<input
						type="text"
						placeholder="Type Here..."
						className="w-full rounded-l-lg px-4 py-2 border-r-0 focus:outline-none"
						value={searchText}
						onChange={e => setSearchText(e.target.value)}
					/>
					<button 
						onClick={handleSearch}			
						className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-lg border border-blue-500 border-l-0"
					>
						Search
					</button>
				</div>
				
				{displayResults}
				
			</div>
		</div>
	</div>
	)
}
