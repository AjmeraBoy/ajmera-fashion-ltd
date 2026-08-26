// =========================================================
// ABOUT PAGE
// =========================================================
// REQUIRED ELEMENT IDs:
//   #aboutIntro           (Text)
//   #founderAjayName        (Text)
//   #founderAjayBio         (Text)
//   #founderAjayImage       (Image) -> dynamic (key: "about-ajay")
//   #founderVijayName       (Text)
//   #founderVijayBio        (Text)
//   #founderVijayImage      (Image) -> dynamic (key: "about-vijay")
//   #visionHeadline          (Text)
//   #visionBody              (Text)
//   #offeringsHeadline       (Text)
//   #offeringsBody           (Text)
//   #valuesHeadline          (Text)
//   #valuesBody              (Text)
//   #officeBody              (Text)
//   #futureHeadline          (Text)
//   #futureBody              (Text)
//   #cinText                  (Text)
// PAGE KEY FOR CMS: "about"
// =========================================================

import { fetchImagesByPage } from 'backend/siteImages.jsw';

const ABOUT_INTRO = "Founded in 2011 by industry veteran Ajay Ajmera, Ajmera Fashion Limited has rapidly grown to become a leading clothing trader in India. With over two decades of experience in the textile industry, Mr. Ajmera leveraged his expertise to establish a company that stands at the forefront of fashion wholesale.";

const AJAY_BIO = "A leader is one who knows the way, goes the way and shows the way — Mr. Ajay Ajmera is one such leader. He founded Ajmera Fashion in 2011. Today, he is not only a visionary business expert but also a sought-after motivational speaker and a social entrepreneur committed to women empowerment. With over thirty years of experience in the textile industry, Mr. Ajmera is our master strategist and a caring guardian at the same time.";

const VIJAY_BIO = "The credit for sound financial management at Ajmera Fashion goes to our co-founder, Mr. Vijay Ajmera. He is perhaps the most approachable person in the organisation whose warmth and compassion make the workplace feel like home. Mr. Vijay has over 35 years of experience in successfully establishing and leading many innovative services, and has been instrumental in defining and executing finance-related initiatives — budgeting, forecasting, pricing and strategic planning.";

const VISION_BODY = "At Ajmera Fashion Limited, our vision is to create premium selections of clothing that blend innovative designs with quality materials. We strive to inspire confidence and style in every individual who wears our creations.";

const OFFERINGS_BODY = "At Ajmera Fashion Limited, we pride ourselves on our comprehensive range of apparel and home textiles — Women's, Men's and Kids' apparel. We cater primarily to retailers, providing them with high-quality, stylish products at competitive rates. Our commitment to \"Quality with Affordability\" ensures that our retail partners can offer their customers the best value for money.";

const VALUES_BODY = "Integrity in all our dealings  ·  Customer First approach  ·  Enjoyment in our work  ·  Balancing Quantity with Quality  ·  Belief that Anyone Can Do Business  ·  Unity in making a difference";

const OFFICE_BODY = "Ajmera Fashion Limited operates from a sprawling office space in the Surana 101 Building near Sahara Darwaja, Surat, occupying the entire ground, 6th and 7th floors. This central location allows us to serve our clients efficiently and maintain our position as a key player in the industry.";

const FUTURE_BODY = "In our pursuit of growth and innovation, we launched Ajmera Trends Franchise in 2023. This venture has seen remarkable success, with 50+ stores already operational, bringing our unique blend of style and affordability to customers across the nation. At Ajmera Fashion Limited, we're not just trading clothes — we're weaving success stories for our retail partners and creating fashion statements for consumers.";

const CIN_TEXT = "CIN NO: U17299GJ2022PLC129445";

$w.onReady(async function () {

    if ($w('#aboutIntro')) $w('#aboutIntro').text = ABOUT_INTRO;

    if ($w('#founderAjayName')) $w('#founderAjayName').text = "Ajaykumar Nagarmal Jain — Director";
    if ($w('#founderAjayBio')) $w('#founderAjayBio').text = AJAY_BIO;

    if ($w('#founderVijayName')) $w('#founderVijayName').text = "Vijaykumar Jain — Director";
    if ($w('#founderVijayBio')) $w('#founderVijayBio').text = VIJAY_BIO;

    if ($w('#visionHeadline')) $w('#visionHeadline').text = "Our Vision";
    if ($w('#visionBody')) $w('#visionBody').text = VISION_BODY;

    if ($w('#offeringsHeadline')) $w('#offeringsHeadline').text = "Our Offerings";
    if ($w('#offeringsBody')) $w('#offeringsBody').text = OFFERINGS_BODY;

    if ($w('#valuesHeadline')) $w('#valuesHeadline').text = "Our Values";
    if ($w('#valuesBody')) $w('#valuesBody').text = VALUES_BODY;

    if ($w('#officeBody')) $w('#officeBody').text = OFFICE_BODY;

    if ($w('#futureHeadline')) $w('#futureHeadline').text = "Looking to the Future";
    if ($w('#futureBody')) $w('#futureBody').text = FUTURE_BODY;

    if ($w('#cinText')) $w('#cinText').text = CIN_TEXT;

    // ---- Dynamic images for this page (edit from Wix CMS admin panel)
    try {
        const images = await fetchImagesByPage('about');
        if (images['about-ajay'] && $w('#founderAjayImage')) {
            $w('#founderAjayImage').src = images['about-ajay'].image;
        }
        if (images['about-vijay'] && $w('#founderVijayImage')) {
            $w('#founderVijayImage').src = images['about-vijay'].image;
        }
    } catch (err) {
        console.warn('About page images could not be loaded from CMS:', err);
    }
});
