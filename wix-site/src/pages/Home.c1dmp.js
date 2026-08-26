// =========================================================
// HOME PAGE
// =========================================================
// REQUIRED ELEMENT IDs (create in Editor, then paste text below
// into each, or leave text set in code as shown):
//   #heroHeadline       (Text)   -> hero H1
//   #heroSubtext        (Text)   -> hero supporting paragraph
//   #heroImage           (Image) -> hero background, dynamic (key: "hero-main")
//   #introHeadline       (Text)  -> "Why Choose Ajmera Fashion?" heading
//   #introBody           (Text)  -> company intro paragraph
//   #introImage          (Image) -> dynamic (key: "home-intro")
//   #statYears            (Text) -> "32+"
//   #statYearsLabel        (Text) -> "Years of Textile Industry Experience"
//   #statRetailers         (Text) -> "50,000+"
//   #statRetailersLabel    (Text) -> "Retailers, Traders & Wholesalers"
//   #qualityHeadline       (Text)
//   #qualityBody           (Text)
//   #ctaButton              (Button) -> links to Contact page
// PAGE KEY FOR CMS: "home"
// =========================================================

import { fetchImagesByPage } from 'backend/siteImages.jsw';
import wixLocation from 'wix-location';

const HERO_HEADLINE = "Welcome to Ajmera Fashion Limited";
const HERO_SUBTEXT = "Where elegance meets tradition in the world of Indian ethnic wear. Explore our collection of Sarees, Lehengas, Kurtis and more — crafted with precision, blending traditional techniques with modern aesthetics.";

const INTRO_HEADLINE = "Why Choose Ajmera Fashion?";
const INTRO_BODY = "Ajmera Fashion Limited distinguishes itself with trendsetting designs, premium quality fabrics, and unmatched craftsmanship. Elevate your style with us — where tradition meets innovation and sophistication.";

const QUALITY_HEADLINE = "Quality Control";
const QUALITY_BODY = "Quality Control is paramount at Ajmera Fashion Limited. Through stringent standards and meticulous attention to detail — Color Stability Test, Fusion Trial, Dispatch Review, Final Detailing and Shrinkage Examination — we guarantee that each garment meets the pinnacle of craftsmanship.";

$w.onReady(async function () {

    if ($w('#heroHeadline')) $w('#heroHeadline').text = HERO_HEADLINE;
    if ($w('#heroSubtext')) $w('#heroSubtext').text = HERO_SUBTEXT;
    if ($w('#introHeadline')) $w('#introHeadline').text = INTRO_HEADLINE;
    if ($w('#introBody')) $w('#introBody').text = INTRO_BODY;
    if ($w('#qualityHeadline')) $w('#qualityHeadline').text = QUALITY_HEADLINE;
    if ($w('#qualityBody')) $w('#qualityBody').text = QUALITY_BODY;

    if ($w('#statYears')) $w('#statYears').text = "32+";
    if ($w('#statYearsLabel')) $w('#statYearsLabel').text = "Years of Textile Industry Experience";
    if ($w('#statRetailers')) $w('#statRetailers').text = "50,000+";
    if ($w('#statRetailersLabel')) $w('#statRetailersLabel').text = "Retailers, Traders & Wholesalers";

    if ($w('#ctaButton')) {
        $w('#ctaButton').label = "Get in Touch";
        $w('#ctaButton').onClick(() => wixLocation.to('/contact'));
    }

    // ---- Dynamic images for this page, pulled from the SiteImages
    // CMS collection so they can be swapped from the Wix admin panel.
    try {
        const images = await fetchImagesByPage('home');
        if (images['hero-main'] && $w('#heroImage')) {
            $w('#heroImage').src = images['hero-main'].image;
        }
        if (images['home-intro'] && $w('#introImage')) {
            $w('#introImage').src = images['home-intro'].image;
        }
    } catch (err) {
        console.warn('Home page images could not be loaded from CMS:', err);
    }
});
