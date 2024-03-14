import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi({
  clientId: 'da686d4137db42128105eaba7ec0f423',
  clientSecret: '053b9308d4414e33a7e68e4d47cf19d2',
  redirectUri:'http://localhost:3000',
});

const handler = async (req, res) => {
  try {
    api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN);
    const data = await api.refreshAccessToken();
    api.setAccessToken(data.body.access_token);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });
    res.status(200).json(recentTracks.body.items[0].track);

  } catch (err) {
    console.log("Something went wrong!", err);
  }
};

export default handler;