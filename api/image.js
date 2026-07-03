export default function handler(req, res) {
  const { url } = req.query;
  if (typeof url === "string" && url.startsWith("https://")) {
    res.redirect(302, url);
  } else {
    res.status(404).end();
  }
}
