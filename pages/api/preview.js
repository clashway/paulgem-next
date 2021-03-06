import { getPageData } from "../../utils/api"

export default async function handler(req, res) {
  res.clearPreviewData();

  if (req.query.clear === 'true') {
    return res.redirect(307, '/');
  }

  if (req.query.secret !== (process.env.PREVIEW_SECRET || 'secret-token')) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  const pageData = await getPageData({
    slug: req.query.slug,
    locale: req.query.locale,
    preview: true
  });


  if (!pageData) {
    return res.status(401).json({
      message: "Invalid slug"
    });
  }

  try {
    res.setPreviewData({ preview: true, hi: 'Leo' });
  } catch (err) {
    console.warn(err);
  }

  res.writeHead(307, {
    Location: `/products/${req.query.slug}`
  });
  res.end();
};
