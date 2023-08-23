const mapGetAlbumById = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year: parseInt(year, 10),
});

module.exports = { mapGetAlbumById };
