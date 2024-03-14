const handler = async (req, res) => {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/1029594358426648616`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
