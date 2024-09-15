// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
const generatePlaylist = (guardians, songs) => {
    
    // Get an array of all Guardian names
    const guardianNames = Object.keys(guardians);

    // Map over each Guardian name to create a playlist
    return guardianNames.map(guardianName => {

        // Get the preferred genre for the current Guardian
        const preferredGenre = guardians[guardianName];

        // Filter the songs to include only those that match the preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);

        // Created object with the Guardian's name and their playlist
        const playlistDetails = {
            guardianName: guardianName,
            playlist: playlist
        };

        // Return the playlist details for the current Guardian
        return playlistDetails;
    })

}
    // ONLY CHANGE THIS BELOW
// Call generatePlaylist and display the playlists for each Guardian
    const playlists = generatePlaylist(guardians, songs);

    const displayPlaylists = playlists.map(({guardianName, playlist}) => {
        const songsList = playlist
        .map(song => `- ${song.title} by ${song.artist}`)
        .join('\n');

        const playlistString = `Playlist for ${guardianName}:\n${songsList}`;
        return playlistString;
    }).join('\n\n');

    console.log(displayPlaylists);



