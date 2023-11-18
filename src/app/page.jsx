'use client'
import { useEffect, useState } from 'react'
import data from '../data/sampleData'
import ListItemWithCopyButton from '../ListItemWithCopyButton'
import { initGA, logPageView } from '../app/analytics';
import ReactGA from 'react-ga';

export default function Home() {

	useEffect(() => {
		initGA(); // Initialize Google Analytics
		logPageView(); // Log the initial page view
	
		// Add additional tracking logic as needed
	}, []);
	
	const [searchText, setSearchText] = useState("")
	const [displayResults, setDisplayResults ] = useState([])
	
	function handleSearch() {

		ReactGA.event({
			category: 'User Interaction',
			action: 'Clicked Search',
			label: 'Search Button',
		});

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
	<div className='px-3'>
		<div className="grid grid-cols-8">
			<div className="col-start-1 col-span-8 lg:col-start-3 lg:col-end-7">
				<div className="max-w-full rounded overflow-hidden shadow-md bg-white p-2 mt-4">
					<div className="flex items-center border border-gray-300 rounded-lg mt-4">
						<input
							type="text"
							placeholder="Search Caption Here..."
							className="w-full rounded-l-lg px-3 py-1 border-r-0 focus:outline-none"
							value={searchText}
							onChange={e => setSearchText(e.target.value)}
						/>
						<button 
							onClick={handleSearch}			
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded-r-lg border border-blue-500 border-l-0"
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
					  
						</button>
					</div>
					
				</div>
				<div className='mt-4'>
					{displayResults}	
				</div>
			</div>
		</div>
	</div>
	)
}
