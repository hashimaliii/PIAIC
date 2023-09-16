function make_album(artist: string, album: string, tracks?: number): { artist: string, album: string, tracks?: number } 
{
    const albumInfo: { artist: string, album: string, tracks?: number } = {
      artist,
      album,
    };

    if (tracks !== undefined) {
      albumInfo.tracks = tracks;
    }
    return albumInfo;
  }
  
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12);
const album3 = make_album("Artist3", "Album3");
  
console.log(album1);
console.log(album2);
console.log(album3);