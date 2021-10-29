import { getPageData } from "../../utils/api"

// secret=preview_secret_key&slug=english-pear-freesia-cologne--fluted-bottle-edition&locale=en

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


  if (!pageData) {
    return res.status(401).json({
      message: "Invalid slug"
    });
  }

  res.setPreviewData({});

  res.writeHead(307, {
    Location: `/products/${req.query.slug}`
  });
  res.end();
};