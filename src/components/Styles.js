//Icons
export const zoomOutIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 content-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
</svg>;

export const zoomInIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 content-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
</svg>;

export const editIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
<path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
</svg>

export const clearIcon = <svg xmlns="http://www.w3.org/2000/svg" 
className="h-6 w-6 mr-2" fill="none" 
viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" 
  strokeLinejoin="round" 
  strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>

//Styles
export const toolbarStyles = "flex justify-between my-5 text-green-400"
export const LPaTextStyles ="w-full h-screen bg-gray-700 text-green-100 p-2 text-sm font-mono";
export const MPaTextStyles="border-dashed border border-blue-200 h-fit bg-gray-700 text-blue-300 p-4 text-sm font-serif overflow-hidden"
export const RPaTextStyles ="border-dashed border border-yellow-100 w-full h-fit bg-gray-700 text-yellow-100 px-2 py-5 text-md font-sans"

export const ZoomOutBtnStyles = "font-bold py-2 px-4 ml-2 rounded inline-flex items-center"

export const clearbtnStyles = "bg-green-300 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"

export const wrappedMinScreen = "grid md:grid-cols-3 gap-1 overflow-hidden grid-cols-1 grid-rows-3";

export const wrappedFullScreen = "grid grid-cols-1 overflow-hidden"

export const inputFullScreen = "w-screen h-full row-span-3 rounded-lg shadow-lg p-2 bg-gray-800";
export const inputMinScreen = "w-full h-full rounded-lg shadow-lg p-2 bg-gray-800";

export const htmlFullScreen = "w-screen h-min rounded-lg row-start-1 col-start-1 shadow-lg p-2 bg-gray-800 text-blue-400 z-40";
export const htmlMinScreen = "w-full h-fit rounded-lg shadow-lg p-2 bg-gray-800 text-blue-400 overflow-hidden";

export const displayFullScreen = "w-screen h-full rounded-lg row-start-1 col-start-1 shadow-lg p-2 bg-gray-800 text-yellow-400 z-40";
export const displayMinScreen = "w-full h-full rounded-lg shadow-lg p-2 bg-gray-800 text-yellow-400";