const mapGetAlbumById = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year: parseInt(year, 10),
});

const mapGetSongById = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  album_id,
}) => ({
  id,
  title,
  year: parseInt(year, 10),
  performer,
  genre,
  duration: parseInt(duration, 10),
  albumId: album_id,
});

const mapGetSongs = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

module.exports = { mapGetAlbumById, mapGetSongById, mapGetSongs };
