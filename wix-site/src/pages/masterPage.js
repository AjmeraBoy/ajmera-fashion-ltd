// =========================================================
// MASTER PAGE — runs on every page of the site
// Handles: dynamic logo (from CMS), header hover effect
// =========================================================
// REQUIRED ELEMENT IDs (create these in the Wix Editor, on the
// header that repeats site-wide via "Add to all pages"):
//   #image16     -> the logo image element (already present in
//                    your original project)
// REQUIRED CMS COLLECTION: "SiteImages"
//   Fields: key (Text, unique) | image (Image) | altText (Text)
// =========================================================

import { fetchImageByKey } from 'backend/siteImages.jsw';

$w.onReady(async function () {

    // ---- Dynamic logo: pulls from the SiteImages CMS collection
    // so it can be swapped in the Wix admin panel without touching code.
    try {
        const logo = await fetchImageByKey('logo');
        if (logo && $w('#image16')) {
            $w('#image16').src = logo.image;
            $w('#image16').alt = logo.altText || 'Ajmera Fashion Limited';
        }
    } catch (err) {
        console.warn('Logo could not be loaded from SiteImages CMS:', err);
        // Falls back to whatever image is set directly in the Editor.
    }

    // ---- Logo hover effect (kept from the original project)
    $w('#image16').onMouseIn(() => {
        $w('#image16').scaleTo(1.05);
    });
    $w('#image16').onMouseOut(() => {
        $w('#image16').scaleTo(1);
    });

});
