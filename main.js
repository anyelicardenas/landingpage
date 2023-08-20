const API = 'https://youtube-v3-alternative.p.rapidapi.com/video?id=%40organicnailsoficial';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b760f6c96mshba19c5033d4da8cp13ac5cjsn04efde3357f9',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
	const data = await response.json();
	return(data);
}

(async () => {
try {
    let view = `${videos.items.map( video => `<div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>`).slice(0,4).join('')}
     `;
    content.innerHTML = view;
} catch (error) {
	console.error(error);
}
})();