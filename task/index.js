// Function to add a video to the playlist
function addToPlaylist() {
    var linkInput = document.getElementById('linkInput').value;
    var videoId = extractVideoId(linkInput);

    // Create a new list item for the playlist
    var listItem = document.createElement('li');
    listItem.textContent = linkInput;

    // Add a click event listener to play the video
    listItem.addEventListener('click', function() {
        loadVideo(videoId);
    });

    // Append the new list item to the playlist
    document.getElementById('playlist').appendChild(listItem);
}

// Function to extract video ID from YouTube link
function extractVideoId(link) {
    // Regex to match YouTube video ID from URL
    var regex = /[?&]v=([^?&]+)/;
    var match = link.match(regex);
    if (match && match[1]) {
        return match[1];
    } else {
        alert('Invalid YouTube link!');
        return null;
    }
}

// Function to load and play a video
function loadVideo(videoId) {
    var playerDiv = document.getElementById('player');
    playerDiv.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
}
