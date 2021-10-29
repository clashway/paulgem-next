import { getPageData } from "../../utils/api"

export default async function handler(req, res) {
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

  res.clearPreviewData();

  if (!pageData) {
    return res.status(401).json({
      message: "Invalid slug"
    });
  }
  // console.log('asdsadsadsa', pageData);
  try {
    res.setPreviewData(pageData);
  } catch (err) {
    console.warn(err);

    res.setPreviewData({ preview: true, hi: 'Leo' });
  }

  res.writeHead(307, {
    Location: `/products/${req.query.slug}`
  });
  res.end();
};