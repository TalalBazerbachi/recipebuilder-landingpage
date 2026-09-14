export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  /**
   * Optional ISO date of the most recent meaningful content update.
   * If absent, blog template falls back to `date`. Bump this when
   * regulations or numbers change so Google sees fresh `dateModified`.
   */
  updatedDate?: string;
  category: string;
  readTime: string;
  keywords: string[];
  /**
   * Optional individual author byline. If absent, falls back to
   * the RecipeBuilder Editorial Team org-level byline.
   */
  author?: {
    name: string;
    role: string;
    url?: string;
  };
  content: string; // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "front-of-pack-nutrition-labels-gcc-guide",
    title: "Abu Dhabi Nutri-Mark: Front-of-Pack Label Guide (2026)",
    description:
      "Abu Dhabi's Nutri-Mark explained: A to E grades, the five first-phase categories, how scores are calculated, how to register, and its mandatory status.",
    date: "2026-01-10",
    updatedDate: "2026-09-14",
    category: "Labeling",
    readTime: "10 min read",
    keywords: [
      "Nutri-Mark",
      "Abu Dhabi Nutri-Mark",
      "Nutri-Mark label",
      "Nutri-Mark calculation",
      "Nutri-Mark mandatory",
      "front-of-pack nutrition label Abu Dhabi",
      "ADQCC Nutri-Mark",
      "QCC Nutri-Mark registration",
      "ADG-044-2024",
      "UAE front-of-pack labelling",
    ],
    content: `
<p>Nutri-Mark is Abu Dhabi's front-of-pack nutrition label: a single letter from A to E, each with its own colour, printed on the front of a pack to summarise how nutritious a food or drink is compared with similar products. It was developed by the Abu Dhabi Quality and Conformity Council (ADQCC, now branded QCC) with the Abu Dhabi Public Health Centre (ADPHC), and it is the first scheme of its kind in the region.</p>
<p>For manufacturers, importers and brands selling packaged food in Abu Dhabi, Nutri-Mark raises practical questions. Which products does it cover? How is the grade worked out? Is it mandatory yet? This guide answers each one using ADQCC's official documents and government announcements, and flags where the timeline has changed since launch.</p>

<div class="key-takeaways">
<h3>Key Takeaways</h3>
<ul>
<li><strong>Nutri-Mark is an Abu Dhabi scheme</strong>: it was developed by ADQCC and ADPHC, announced at the Abu Dhabi International Food Exhibition (ADIFE) in November 2024, and set out in the Abu Dhabi Guideline ADG-044-2024, which ADQCC approved in March 2025.</li>
<li><strong>Grades run from A (dark green) to E (dark orange)</strong>. They are meant for comparing products within the same category, not for labelling foods "good" or "bad".</li>
<li><strong>The grade is based on the 2023 revision of Nutri-Score</strong>. It weighs nutrients to limit (energy, sugars, saturated fat, sodium) against components to encourage (fibre, protein, fruits and vegetables), and must be calculated with ADQCC's official calculation tool.</li>
<li><strong>The first phase covers five product categories</strong>: oils, dairy, beverages, baked goods, and children's food such as cereals and snacks.</li>
<li><strong>The mandatory date has moved</strong>. Launch announcements said labels would be mandatory for those categories from 1 June 2025. That date was postponed to Q4 2025, and government-quoted reporting in 2026 describes the scheme as not yet mandatory. Check QCC for the current position.</li>
</ul>
</div>

<h2>What Is Nutri-Mark?</h2>
<p>QCC's official Nutri-Mark overview describes it as a summary front-of-pack label. It gives an overall assessment of a product's nutrient composition in simplified form and sits alongside the mandatory nutrition declaration on the back of the pack. It does not replace your nutrition facts table. It condenses that information into one grade a shopper can read at a glance.</p>
<p>The scheme was announced jointly by ADQCC and ADPHC on 26 November 2024 at ADIFE. On 1 March 2025, ADQCC, through the Standard Technical Committee for the Emirate of Abu Dhabi, approved the Abu Dhabi guideline for using the label. According to QCC, the guideline was developed with ADPHC and other stakeholders, including the Abu Dhabi Department of Economic Development (ADDED), the Abu Dhabi Agriculture and Food Safety Authority (ADAFSA) and the Abu Dhabi Early Childhood Authority (ECA).</p>
<p>Nutri-Mark is an Abu Dhabi government initiative. It is not a federal UAE standard issued by the Ministry of Industry and Advanced Technology (MoIAT), formerly ESMA, and it is separate from other schemes that sound similar, such as Dubai's school canteen programmes.</p>

<h2>The A to E Grading Scale</h2>
<p>QCC describes a graded scale of five letters and colours. According to QCC, the purpose is to distinguish healthier options from less healthy ones within the same product category, and to help producers see how reformulating a product could move it up a grade.</p>
<table>
<thead>
<tr><th>Grade</th><th>Colour (per QCC)</th><th>Meaning</th></tr>
</thead>
<tbody>
<tr><td>A</td><td>Dark green</td><td>Highest nutritional quality within the category</td></tr>
<tr><td>B</td><td>Light green</td><td>Better than average</td></tr>
<tr><td>C</td><td>Yellow</td><td>Intermediate</td></tr>
<tr><td>D</td><td>Light orange</td><td>Lower nutritional quality</td></tr>
<tr><td>E</td><td>Dark orange</td><td>Lowest nutritional quality within the category</td></tr>
</tbody>
</table>
<p>Some press coverage and ADQCC's March 2025 announcement describe the colours as running "green to red". For packaging artwork, follow QCC's official Nutri-Mark Label and Graphics Guidelines rather than colours seen in news graphics.</p>

<h2>How the Nutri-Mark Grade Is Calculated</h2>
<p>According to QCC, the Nutri-Mark grading system is based on the 2023 revision of Nutri-Score, the front-of-pack label first used in France in 2017, adapted to the UAE's regulatory and market context. The detailed methodology is set out in ADG-044-2024.</p>
<p>QCC's summary of the calculation groups the inputs into two sets:</p>
<ul>
<li><strong>Nutrients to limit:</strong> energy, sugars, saturated fat and sodium.</li>
<li><strong>Nutrients and components to encourage:</strong> fibre, protein, and fruits and vegetables.</li>
</ul>
<p>Combining the two gives one score, and that score sets the letter grade. In the Nutri-Score 2023 method that Nutri-Mark is based on, points are calculated per 100 g or 100 ml of product, and adapted calculations are published for general foods, for fats, oils, nuts and seeds, and for beverages. The exact rules for your product, including thresholds and group-specific adjustments, are in ADG-044-2024. Use those rather than a generic Nutri-Score explainer.</p>
<p>QCC says operators must calculate the score with its <strong>official Excel calculation tool</strong>. The current tool on QCC's site is dated April 2026. If you score products in your own spreadsheet or a third-party tool, check the results against the official tool before submitting.</p>

<h2>Which Products Does Nutri-Mark Cover?</h2>
<p>ADQCC's launch announcement says the first phase focuses on five product categories:</p>
<ul>
<li>Oils</li>
<li>Dairy</li>
<li>Beverages</li>
<li>Baked goods</li>
<li>Children's food, which ADQCC says includes cereals and snacks commonly eaten by children</li>
</ul>
<p>ADQCC also announced a second phase introducing system certification for non-packaged food. At launch, officials said further food items would follow the first phase, and The National reported that the system is intended eventually to cover all food sold in the emirate. No dates for those later phases have been published.</p>
<p>QCC's Nutri-Mark guidance is addressed to food and beverage operators, which it lists as retailers, suppliers, distributors, importers and manufacturers. When the scheme launched, ADQCC officials said manufacturers and local agents of products in scope would be responsible for grading products accurately and producing the front-of-pack labels.</p>

<h2>Is Nutri-Mark Mandatory? The Timeline So Far</h2>
<p>This is where most online guides are out of date. Nutri-Mark was launched as a mandatory scheme for its first five categories, but the start date has since been postponed. Here is what official announcements and reputable press quoting officials have said:</p>
<table>
<thead>
<tr><th>Date</th><th>Development</th></tr>
</thead>
<tbody>
<tr><td>26 Nov 2024</td><td>ADQCC and ADPHC announce Nutri-Mark at ADIFE. Officials say labels will be required on the five first-phase categories from 1 June 2025, and The National reports existing goods would have six months to update packaging.</td></tr>
<tr><td>1 Mar 2025</td><td>ADQCC approves the Abu Dhabi guideline for use of the Nutri-Mark label.</td></tr>
<tr><td>30 May 2025</td><td>ADQCC and the Department of Health – Abu Dhabi announce that official implementation, originally scheduled for June 2025, is postponed to Q4 2025 so businesses have time to adapt production and reformulate (WAM).</td></tr>
<tr><td>30 Jan 2026</td><td>The National reports that Nutri-Mark is currently implemented on a voluntary basis, that QCC is focused on awareness and market readiness, and that no date has yet been set for mandatory implementation.</td></tr>
<tr><td>Jun 2026</td><td>QCC launches a Nutri-Mark scanning feature in the TAMM app. Gulf News quotes QCC saying the system is not yet mandatory, that labelled products are available through four major retail outlets in Abu Dhabi, and that QCC plans regular random inspections to verify grades.</td></tr>
</tbody>
</table>
<p>As of this update we have found no official announcement of a new mandatory start date. ADQCC has published a Conditions for Use document (QCC-CoU01-01) dated April 2026, and that document governs anyone who uses the mark. Because the rules have changed more than once, confirm the current position directly with QCC at Nutrimark@qcc.gov.ae before making packaging decisions.</p>
<p>When the scheme launched, ADQCC officials said that once the requirement applied, products in scope found on shelves without the label would be withdrawn and retailers fined, and that products showing an inaccurate grade would face action. Expect enforcement details to be confirmed when a mandatory date is set.</p>
<p><strong>Outside Abu Dhabi:</strong> in October 2025, the UAE law firm Al Safar and Partners reported that neither Dubai Municipality nor MoIAT had announced Nutri-Mark requirements outside Abu Dhabi. If you sell across the UAE, treat Nutri-Mark as an Abu Dhabi scheme unless a federal or emirate-level authority says otherwise.</p>

<h2>How to Obtain the Right to Use Nutri-Mark</h2>
<p>QCC's official page on obtaining the right to use the mark sets out three steps that operators must complete before putting Nutri-Mark on a product.</p>
<h3>Step 1: Calculate the Score With the Official Tool</h3>
<p>Enter your product's nutrition data into QCC's Nutri-Mark calculation tool to get its score and grade. Use the version currently published on QCC's Official Documents and Tools page.</p>
<h3>Step 2: Submit Your Data to QCC</h3>
<p>Submit the data to QCC through its online registration process. QCC's site has previously described this process as under development, so check the current submission route with QCC if the online option is not available.</p>
<h3>Step 3: Apply the Label Using the Official Graphics</h3>
<p>Once registration is complete, QCC provides the official graphic files. Apply the mark strictly in line with the Nutri-Mark Label and Graphics Guidelines (the version on QCC's site is dated August 2025).</p>
<p>QCC lists these official documents as the basis of the scheme. Read them before redesigning packaging:</p>
<ul>
<li>Abu Dhabi Guideline for the Nutri-mark (ADG-044-2024): scope, methodology and implementation requirements</li>
<li>Conditions for Use of the Nutri-mark (QCC-CoU01-01): legal and operational conditions for use</li>
<li>Nutri-mark Questions and Answers</li>
<li>Nutri-mark Calculation Tool (Excel)</li>
<li>Nutri-mark Label and Graphics Guidelines</li>
</ul>

<h2>Preparing Your Product Data</h2>
<p>A Nutri-Mark grade is only as reliable as the nutrition data behind it, so it pays to get that data in order whether or not a mandatory date has been set. A practical approach:</p>
<ul>
<li><strong>Build per-100 g or per-100 ml profiles</strong> for every product in the first-phase categories. Include energy, sugars, saturated fat, sodium or salt, fibre and protein.</li>
<li><strong>Record fruit and vegetable content</strong> from your formulation, since it counts as a favourable component in the calculation.</li>
<li><strong>Check consistency with your back-of-pack declaration.</strong> Nutri-Mark summarises the mandatory nutrition declaration, so the two should come from the same data. Our <a href="/blog/uae-food-labeling-requirements-2026">UAE food labeling requirements guide</a> covers the back-of-pack rules.</li>
<li><strong>Re-score after every formulation change.</strong> Changing a supplier, sugar level or oil blend can move a product across a grade boundary.</li>
<li><strong>Keep an audit trail</strong> linking each grade to the recipe version and data used. QCC has said it plans random inspections to verify grades.</li>
<li><strong>Confirm evidence requirements</strong> such as laboratory analysis against ADG-044-2024 and the Conditions for Use, rather than assuming calculated values will be accepted.</li>
</ul>
<p>For context on other schemes: Nutri-Score, which Nutri-Mark is based on, is voluntary for producers in France and has been recommended by Belgium, Switzerland, Germany, Spain, the Netherlands and Luxembourg. In Saudi Arabia, the SFDA invited manufacturers in 2018 to join a voluntary pledge to use front-of-pack labels with multiple traffic-light colour coding. A 2021 study in <em>Nutrients</em> found that only 80 of 4,335 screened companies had adopted front-of-pack labels by 2020. None of these schemes carries over automatically, so a product sold in several markets may need scoring under each one separately.</p>

<h2>Where RecipeBuilder Fits</h2>
<p>The hardest part of any Nutri-Mark submission is the nutrition data itself: accurate per-100 g figures for each product, kept up to date as recipes change. RecipeBuilder is built for that data work. It does not issue or calculate the official Nutri-Mark grade. That must come from QCC's official calculation tool and registration process. What it does is give your team a single, version-controlled source for the nutrition figures you enter into the tool and print on the back of the pack.</p>

<div class="blog-cta-box">
<h3>Get Your Nutrition Data Ready for Nutri-Mark</h3>
<p>RecipeBuilder calculates per-100 g nutrition profiles and per-serving values from your recipes using USDA FoodData Central data. It also generates bilingual English/Arabic label content and print-ready packaging artwork, so your back-of-pack declaration and the figures you enter into QCC's Nutri-Mark tool come from the same recipe records. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to see how it fits your labeling workflow.</p>
</div>

<h2>Frequently Asked Questions</h2>

<h3>Who developed Nutri-Mark?</h3>
<p>Nutri-Mark was developed by the Abu Dhabi Quality and Conformity Council (ADQCC) with the Abu Dhabi Public Health Centre (ADPHC) and announced at the Abu Dhabi International Food Exhibition in November 2024. ADQCC approved the supporting Abu Dhabi guideline in March 2025, and its official documents are published on QCC's Nutri-Mark pages.</p>

<h3>Is Nutri-Mark mandatory in Abu Dhabi?</h3>
<p>It was announced as mandatory for five first-phase categories from 1 June 2025, but ADQCC and the Department of Health – Abu Dhabi postponed implementation to Q4 2025. Reporting in January and June 2026 that quotes QCC describes the scheme as voluntary for now, with no mandatory date set. Confirm the current status with QCC at Nutrimark@qcc.gov.ae.</p>

<h3>Which products are in the first phase of Nutri-Mark?</h3>
<p>ADQCC names five first-phase categories: oils, dairy, beverages, baked goods, and children's food including cereals and snacks. A later phase is planned to introduce certification for non-packaged food, and officials have said more categories will follow, but no dates for later phases have been published.</p>

<h3>How is a Nutri-Mark grade calculated?</h3>
<p>According to QCC, Nutri-Mark is based on the 2023 revision of Nutri-Score. It weighs nutrients to limit (energy, sugars, saturated fat, sodium) against components to encourage (fibre, protein, fruits and vegetables) to produce a grade from A to E. Operators must use QCC's official calculation tool, and the full methodology is set out in guideline ADG-044-2024.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="https://qcc.gov.ae/Nutri-Mark/Overview">QCC: Nutri-Mark Overview (official)</a></li>
<li><a href="https://qcc.gov.ae/Nutri-Mark/Official-Documents-and-Tools">QCC: Nutri-Mark Official Documents and Tools</a></li>
<li><a href="/blog/uae-food-labeling-requirements-2026">UAE Food Labeling Requirements 2026: Standards, Dates and Penalties</a></li>
<li><a href="/blog/dubai-municipality-montaji-food-registration">Dubai Food Product Registration: ZAD, FIRS and Montaji Explained</a></li>
<li><a href="/food-labeling">RecipeBuilder Food Labeling</a></li>
<li><a href="/recipe-management">RecipeBuilder Recipe Management</a></li>
</ul>
`,
  },
  {
    slug: "uae-food-labeling-requirements-2026",
    title: "UAE Food Labeling Requirements 2026: Standards, Dates and Penalties",
    description:
      "UAE food labeling rules for 2026: UAE.S GSO 9, the Arabic rule, date marking, UAE.S 192:2019 additives, allergens, halal, Nutri-Mark and penalties.",
    date: "2026-01-16",
    updatedDate: "2026-09-14",
    category: "Compliance",
    readTime: "13 min read",
    keywords: [
      "UAE food labeling requirements",
      "UAE.S GSO 9 labeling",
      "Arabic food label UAE",
      "UAE food date marking",
      "UAE.S 192:2019 food additives",
      "allergen labeling UAE",
      "halal labeling UAE",
      "Nutri-Mark Abu Dhabi",
      "FIEMIS ADAFSA",
      "Federal Law No. 10 of 2015 food safety penalties",
      "MoIAT food standards",
    ],
    content: `
<p>Every prepackaged food sold in the UAE is checked against its label. Importers submit artwork for label assessment before goods enter the country, and in Dubai newly registered imports can be sampled and tested. If a laboratory finds an ingredient or additive that the label does not declare, the item is rejected. For manufacturers, importers and distributors, the label is often where a UAE launch either clears quickly or stalls.</p>
<p>This guide covers the rules behind a UAE food label in 2026: the labeling technical regulation, the Arabic rule, date marking, nutrition labeling, additives under UAE.S 192:2019, allergens, halal and GMO statements, Abu Dhabi's Nutri-Mark and federal penalties. Standards are revised periodically, so confirm the edition in force with the Ministry of Industry and Advanced Technology (MoIAT) or your emirate's food authority before printing packaging.</p>

<div class="key-takeaways"><h3>Key Takeaways</h3><ul>
<li><strong>UAE.S GSO 9, "Labeling of Prepackaged Food Stuffs", is the core labeling technical regulation.</strong> The standards work once done by ESMA has sat with MoIAT since ESMA was merged into the ministry in July 2020.</li>
<li><strong>Arabic is mandatory. English is optional.</strong> If you add English or any other language, that information must be identical to the Arabic.</li>
<li><strong>Date format depends on shelf life.</strong> Products with a shelf life of three months or less need day/month/year. Longer-life products may use day/month/year or month/year. Dates go on the original pack, never on a sticker.</li>
<li><strong>UAE.S 192:2019 is the food additives regulation, not a general labeling rule.</strong> It adds a warning for six synthetic colours and requires the source of gelatin, lecithins and mono- and diglycerides to be declared.</li>
<li><strong>Nutri-Mark is an Abu Dhabi scheme from ADQCC and ADPHC.</strong> It was announced as mandatory from 1 June 2025 for five product categories, but that deadline was postponed and the scheme remains voluntary. Confirm the current status with QCC.</li>
<li><strong>Penalties are set by Federal Law No. 10 of 2015.</strong> Trading in adulterated, harmful or rotten food carries a fine of AED 100,000 to AED 2,000,000, imprisonment of at least three months, or either penalty.</li>
</ul></div>

<h2>Who Regulates Food Labels in the UAE</h2>
<p>Federal standards and law set the requirements. Emirate-level authorities run registration, label assessment, inspection and enforcement.</p>

<h3>MoIAT (formerly ESMA)</h3>
<p>The Ministry of Industry and Advanced Technology was established in July 2020. The Emirates Authority for Standardization and Metrology (ESMA) was merged into its structure, so older documents that say "ESMA standard" now fall under MoIAT. The ministry's Standardization Affairs Sector prepares national standards and technical regulations. Many UAE food standards adopt texts from the GCC Standardization Organization (GSO), which is why labeling standards often carry a "UAE.S GSO" prefix.</p>

<h3>ZAD, the national food registration portal</h3>
<p>In 2018 the UAE introduced the National Scheme for Food Accreditation and Registration. It created an electronic food registration portal known as ZAD. Importers use it to register food items and request label assessment. Registration checks that a product meets UAE technical regulations, including those on labeling, shelf life and halal requirements.</p>

<h3>Dubai Municipality</h3>
<p>Dubai importers register products and obtain label approval through Dubai Municipality's Food Import and Re-export System (FIRS) or ZADI, Dubai's integrated food import platform. According to the US Department of Agriculture's 2022 UAE report, each pack size counts as a separate item, any change to packaging, weight, label or barcode needs a label re-assessment, and first-time registrations can be laboratory tested.</p>
<p>Dubai Municipality's <a href="/blog/dubai-municipality-montaji-food-registration">Montaji platform</a> is its registration and verification system for regulated consumer products, such as health supplements, cosmetics and food contact materials. Check which system applies to your product category before you submit.</p>

<h3>ADAFSA in Abu Dhabi</h3>
<p>The Abu Dhabi Agriculture and Food Safety Authority (ADAFSA) launched FIEMIS, the <strong>Food Import and Export Management Information System</strong>, in October 2022. Through it, food importers and exporters can complete ADAFSA services online, including company registration, product registration, inspection requests and customs declarations, and can track shipments. In the other emirates, label assessment sits with each municipality's food control department.</p>

<h2>Mandatory Label Content Under UAE.S GSO 9</h2>
<p>The UAE applies GSO 9, "Labeling of Prepackaged Food Stuffs", as a technical regulation. USDA's 2022 report refers to UAE.S GSO 9:2019. At GCC level, GSO has since published GSO 9:2022 and an amendment, GSO 9:2022/Amd1:2025. Check with MoIAT which edition applies to your product on the date you register it. USDA's report summarises the core label content as follows.</p>
<table>
<thead>
<tr><th>Element</th><th>What the label needs</th></tr>
</thead>
<tbody>
<tr><td>Name of the food</td><td>Shown in a prominent position</td></tr>
<tr><td>Ingredients</td><td>Listed in descending order of proportion</td></tr>
<tr><td>Food additives</td><td>Declared with their functional class (see the additives section below)</td></tr>
<tr><td>Nutrition declaration</td><td>As required by UAE.S GSO 2233</td></tr>
<tr><td>Net contents</td><td>Weight or volume in accepted units</td></tr>
<tr><td>Manufacturer</td><td>Name and address of the manufacturer, or of the packer if different</td></tr>
<tr><td>Country of origin</td><td>The producing country</td></tr>
<tr><td>Dates</td><td>Production and expiry dates for products with a mandatory shelf life</td></tr>
<tr><td>Storage conditions</td><td>Where the validity of the date depends on them</td></tr>
<tr><td>Instructions for use</td><td>Where needed</td></tr>
<tr><td>Animal source</td><td>If the food or any ingredient contains animal content</td></tr>
<tr><td>Warnings and declarations</td><td>Any mandatory warning or advisory statements, and use of irradiation</td></tr>
<tr><td>Lot number</td><td>Production batch declared in code or another indelible mark</td></tr>
</tbody>
</table>
<p>Barcodes must be unique. You cannot re-register a barcode against a different item description, such as a different weight, brand or recipe. Products containing pork must meet the general labeling requirements and state clearly that they contain pork. Products for institutional use (catering rather than retail) can be accepted without an Arabic label, but cannot be sold in retail stores unless an Arabic label is added.</p>

<h2>The Arabic Language Rule</h2>
<p>The rule is often overstated as "everything in Arabic and English". In fact, <strong>labels must be in Arabic.</strong> Other languages are allowed alongside the Arabic, and any information given in another language must be identical to the Arabic text. As the US International Trade Administration puts it, labels must be in Arabic only or Arabic and English. English is optional, though many imported products are bilingual in practice.</p>
<p>Imported products can use an Arabic sticker instead of reprinting packaging, subject to strict conditions:</p>
<ul>
<li>Stickers must be approved by UAE authorities during label assessment before use.</li>
<li>For imports, stickering must be done before export. It cannot be done when goods arrive in the UAE.</li>
<li>Use a single sticker. It must not hide required information, contradict the original label, or come off easily.</li>
<li>The sticker must not carry production or expiry dates that differ from the original label. Dates printed only on a sticker are not accepted.</li>
</ul>
<p>At minimum, the Arabic label or sticker must give the product name, ingredients, country of origin and, where applicable, storage conditions, instructions for use and nutritional information. Because the Arabic text is the reference, use a translator who knows food terminology and check it against the English line by line.</p>

<h2>Date Marking Requirements</h2>
<p>Date marking is easy to get wrong on imported artwork. Under UAE.S 9:2019, as summarised by USDA:</p>
<table>
<thead>
<tr><th>Shelf life</th><th>Required format</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Three months or less</td><td>Day/month/year</td><td>15/06/2026</td></tr>
<tr><td>Longer than three months</td><td>Day/month/year or month/year</td><td>06/2026 or June 2026</td></tr>
</tbody>
</table>
<ul>
<li>With the month/year format, the last day of that month counts as the expiry date. The month can be written as a number or a word.</li>
<li>Only one set of production and expiry dates is allowed on a pack.</li>
<li>Dates must be engraved, embossed, printed or stamped in indelible ink directly on the original label or primary packaging. A barcode cannot replace an expiry date.</li>
<li>Introduce the expiry date with an accepted phrase such as "Expiration", "Use by" or "Best before".</li>
</ul>
<p>Some foods, including fresh fruit and vegetables, honey, non-fortified salt, solid sugar, chewing gum, loose tea, dry cereals and spices, are exempt from an expiry date but still need a production date, harvest year or packing date. Mandatory shelf-life periods for specific foods are set separately in UAE.S 150-1, so check it before fixing a shelf life.</p>

<h2>Nutrition Labeling</h2>
<p>UAE.S GSO 2233:2021, "Requirements of Nutritional Labeling", makes a nutrition declaration mandatory on prepackaged food intended to be eaten directly or after heating. USDA summarises the core requirements:</p>
<ul>
<li>Declare the nutritive value, including energy, protein, carbohydrates, fats and dietary fibre.</li>
<li>Declare each vitamin, mineral or other nutrient added as an ingredient separately.</li>
<li>Express values per 100 g or 100 ml, or per serving as specified by the manufacturer.</li>
<li>Use gram, mg, µg or IU, and kilocalories for energy.</li>
</ul>
<p>Nutrition and health claims are governed by UAE.S GSO 2333:2019 and the Codex general guidelines on claims. Claims are not permitted on foods for infants and young children unless a specific standard allows them, and health claims must be supported by evidence. The UAE's traffic-light front-of-pack standard, UAE.S 5034:2018, was changed from mandatory to voluntary by the UAE Cabinet in December 2021.</p>

<h2>Abu Dhabi's Nutri-Mark</h2>
<p>Nutri-Mark is a front-of-pack nutrition grade launched by the <strong>Abu Dhabi Quality and Conformity Council (ADQCC)</strong> and the <strong>Abu Dhabi Public Health Centre (ADPHC)</strong>. It is not an ESMA or MoIAT scheme. Announced in November 2024, it grades products from A (highest nutritional value) to E (lowest), each with its own colour.</p>
<p>Nutri-Mark was announced as mandatory in the Emirate of Abu Dhabi from 1 June 2025 for five first-phase categories: baked goods, oils, dairy products, beverages, and children's food such as cereals and snacks. Days before that date, ADQCC and the Abu Dhabi Department of Health postponed the mandatory phase to the fourth quarter of 2025 (WAM, 30 May 2025), and reports in 2026 describe the scheme as still voluntary with no mandatory date announced. The penalties described at launch, such as withdrawing unmarked products, therefore have not taken effect. A later phase is planned to cover non-packaged food. For the grading method, covered categories and registration steps, see our <a href="/blog/front-of-pack-nutrition-labels-gcc-guide">Abu Dhabi Nutri-Mark guide</a>.</p>

<h2>Food Additives Under UAE.S 192:2019</h2>
<p>UAE.S 192:2019 is often wrongly described as a labeling directive. It is the UAE technical regulation <strong>"Additives Permitted for Use in Food Stuffs"</strong>, approved in October 2019. It covers which additives may be used, in which foods, and at what maximum levels.</p>
<h3>What the standard covers</h3>
<ul>
<li><strong>Approved references.</strong> Permitted additives and maximum use levels follow the Codex General Standard for Food Additives and the relevant EU additive regulations. Additives may be used only in the food categories those references allow, and within the maximum levels.</li>
<li><strong>Unlisted additives.</strong> Where Codex and EU lists are silent, competent authorities can assess an additive on scientific and legislative justification from the applicant.</li>
<li><strong>Islamic law.</strong> Additives that violate Islamic law are prohibited. This includes additives containing or made from pork products, and ethanol, except where it results from natural fermentation or is used in limited amounts as a solvent for additives.</li>
</ul>
<h3>How additives appear on the label</h3>
<p>Additives are declared in the ingredients list. USDA's guidance for the UAE says an additive's name or E-number must be declared together with its functional class, such as preservative or emulsifier. Where an additive could fit more than one class, use the class that best reflects its function in the food. UAE.S 192:2019 then adds two specific label requirements:</p>
<ul>
<li><strong>Six synthetic colours carry a warning.</strong> If a product contains Sunset Yellow (E 110), Quinoline Yellow (E 104), Carmoisine (E 122), Allura Red (E 129), Tartrazine (E 102) or Ponceau 4R (E 124), mark the colour with an asterisk. Print this warning below the ingredients list: "May have an adverse effect on activity and attention in children".</li>
<li><strong>Some ingredient sources must be named.</strong> If gelatin, lecithins or mono- and diglycerides are used, declare their source.</li>
</ul>
<p>Potassium bromate (E924), a flour treatment agent, is one additive UAE authorities have acted on specifically. Gulf News reported that bakeries and flour mills were instructed not to use it, under a directive from the General Secretariat of UAE Municipalities. For any other additive, check the current approved references before you assume it is permitted.</p>

<h2>Allergen Declaration</h2>
<p>GSO 9 requires foods and ingredients known to cause hypersensitivity to be declared on the label. In the GSO 9/2013 text we reviewed, the listed categories were:</p>
<ul>
<li>Cereals containing gluten, such as wheat, barley, oats, rye and spelt</li>
<li>Crustaceans</li>
<li>Eggs</li>
<li>Fish</li>
<li>Peanuts and soybeans</li>
<li>Nuts (the English translation reads "walnuts")</li>
<li>Milk and milk products, including lactose</li>
<li>Sulphite at 10 ppm or more</li>
<li>Celery</li>
<li>Mustard</li>
<li>Sesame seeds</li>
<li>Molluscs (translated as "clams")</li>
<li>Lupin</li>
</ul>
<p>It also requires declaration where a biotechnology-derived ingredient could carry over one of these allergens. Secondary sources quote different GCC allergen counts and GSO 9 has been revised since 2013, so check the list against the edition MoIAT applies today.</p>
<p>For compound ingredients, such as a sauce in a ready meal, GSO 9/2013 lets you declare the compound ingredient by name followed by its own ingredients in brackets. We found no percentage threshold there exempting allergens in compound ingredients, and no specific provision on "may contain" statements. Declare allergens wherever they occur, and keep any precautionary statement truthful and not misleading.</p>

<h2>Halal and GMO Statements</h2>
<h3>Halal</h3>
<p>Halal requirements sit in their own family of standards, and the numbers are often confused:</p>
<ul>
<li><strong>UAE.S 2055-1</strong>: Halal products, Part 1: General Requirements for Halal Food</li>
<li><strong>UAE.S 2055-2</strong>: General Requirements for Halal Certification Bodies. This applies to certifiers, not directly to food products.</li>
<li><strong>UAE.S 993</strong>: Animal Slaughtering Requirements According to Islamic Rules</li>
</ul>
<p>Under Cabinet Decree No. 10 of 2014, establishments must get halal certificates for final products and raw materials from halal certification bodies registered with MoIAT. If a product shows a halal logo on its label, the importer must provide a halal certificate from a certifier approved by UAE authorities. Meat and meat products need a halal slaughter certificate. MoIAT's UAE Halal National Mark is optional.</p>
<h3>GMO</h3>
<p>GMO labeling is governed by <strong>UAE.S GSO 2141:2011</strong> for unprocessed agricultural products and <strong>UAE.S GSO 2142:2011</strong> for processed food and feed. UAE.S GSO 2142 is a GMO standard, not a general labeling standard. Labeling is required where genetically modified content exceeds one percent. If a label claims "GMO free", the supplier must provide a certificate from a government authority in the country of origin.</p>

<h2>Penalties Under Federal Law No. 10 of 2015</h2>
<p>Article 14 of Federal Law No. 10 of 2015 on Food Safety sets the criminal penalties. These apply without prejudice to any more severe penalty under another law. The figures below come from the official English translation, but the Arabic text published in the Official Gazette prevails.</p>
<table>
<thead>
<tr><th>Offence</th><th>Penalty</th></tr>
</thead>
<tbody>
<tr><td>Trading in adulterated, harmful or rotten food at any stage of the food chain</td><td>Imprisonment of at least three months and a fine of AED 100,000 to AED 2,000,000, or either penalty</td></tr>
<tr><td>Trading without a licence in food containing pork or its derivatives, alcohol, or other materials that violate Islamic Sharia</td><td>Imprisonment of at least one month and a fine of AED 50,000 to AED 500,000, or either penalty</td></tr>
<tr><td>Trading, promoting or publishing a false description of food to deceive the consumer</td><td>Fine of AED 10,000 to AED 100,000</td></tr>
<tr><td>Trading in food that violates technical regulations issued under the law</td><td>Fine of AED 10,000 to AED 100,000</td></tr>
<tr><td>Other violations of the law</td><td>Fine of at least AED 10,000</td></tr>
<tr><td>Repeat offences</td><td>Penalty doubled</td></tr>
</tbody>
</table>
<p>Under Article 17, authorities can also issue warnings, close an establishment for up to three months, or close it permanently and seek withdrawal of its licence if the violation is not fixed.</p>

<h2>How RecipeBuilder Helps With Label Preparation</h2>
<p>Many label errors start in the recipe: an ingredient that moved after reformulation, an allergen inside a sub-recipe, or an Arabic panel that no longer matches the English. RecipeBuilder keeps the recipe as the single source for label content. It supports label preparation; it does not replace assessment by UAE authorities.</p>
<div class="blog-cta-box"><h3>Turn recipes into UAE-ready label content</h3><p>RecipeBuilder generates ingredient lists ordered by weight, calculates nutrition from USDA FoodData Central data, builds allergen declarations from your ingredients and sub-recipes, and produces bilingual English/Arabic label content, print-ready packaging artwork, barcodes and QR codes. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to see how it fits your UAE labeling workflow.</p></div>

<h2>Frequently Asked Questions</h2>
<h3>Does a UAE food label have to be in both Arabic and English?</h3>
<p>No. Arabic is mandatory and English is optional. Under UAE.S GSO 9, labels must be in Arabic, and if another language such as English is also used, that information must be identical to the Arabic text. Imported products may use a single approved Arabic sticker applied before export, but dates must be printed on the original pack.</p>
<h3>What date format is required on food labels in the UAE?</h3>
<p>Products with a shelf life of three months or less must show dates as day/month/year. Products with a longer shelf life may use day/month/year or month/year, and with month/year the last day of the month counts as the expiry date. Only one set of production and expiry dates is allowed, printed in indelible ink directly on the original label or pack.</p>
<h3>Is UAE.S 192:2019 a food labeling standard?</h3>
<p>No. UAE.S 192:2019 is the technical regulation "Additives Permitted for Use in Food Stuffs". It sets which additives may be used and at what levels, with reference to Codex and EU additive lists. It adds a few label rules, such as a warning for six synthetic colours, but general label content is governed by UAE.S GSO 9.</p>
<h3>Is Nutri-Mark mandatory across the whole UAE?</h3>
<p>No. Nutri-Mark is an Abu Dhabi scheme run by the Abu Dhabi Quality and Conformity Council and the Abu Dhabi Public Health Centre. It was announced as mandatory in the Emirate of Abu Dhabi from 1 June 2025 for five initial categories (baked goods, oils, dairy products, beverages and children's food), but the mandatory phase was postponed and the scheme remains voluntary as of 2026. Check the current status with the Abu Dhabi Quality and Conformity Council before relying on it.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/blog/front-of-pack-nutrition-labels-gcc-guide">Abu Dhabi Nutri-Mark: Front-of-Pack Label Guide (2026)</a></li>
<li><a href="/blog/dubai-municipality-montaji-food-registration">Dubai Food Product Registration: ZAD, FIRS and Montaji Explained</a></li>
<li><a href="/blog/how-to-become-approved-school-food-supplier-dubai">How to Become an Approved School Food Supplier in Dubai (2026)</a></li>
<li><a href="/food-labeling">RecipeBuilder Food Labeling</a></li>
<li><a href="/recipe-management">RecipeBuilder Recipe Management</a></li>
<li><a href="/compare">Compare Nutrition Label Software</a></li>
<li><a href="https://moiat.gov.ae/en/programs/halal">MoIAT: UAE Halal Programme and Standards</a></li>
<li><a href="https://www.trade.gov/knowledge-product/united-arab-emirates-labelingmarking-requirements">US International Trade Administration: UAE Labeling Requirements</a></li>
<li><a href="https://www.mediaoffice.abudhabi/en/economy/adafsa-launches-food-import-and-export-management-information-system/">Abu Dhabi Media Office: ADAFSA Launches FIEMIS</a></li>
</ul>
`,
  },
  {
    slug: "dubai-municipality-montaji-food-registration",
    title: "Dubai Food Product Registration: ZAD, FIRS and Montaji Explained",
    description:
      "How food product registration works in Dubai: the ZAD, FIRS and ZADI portals, label assessment, risk-based lab testing, and where Montaji fits.",
    date: "2026-01-16",
    updatedDate: "2026-09-14",
    category: "Compliance",
    readTime: "9 min read",
    keywords: [
      "Dubai food product registration",
      "Dubai Municipality food registration",
      "ZAD food registration UAE",
      "FIRS Dubai Municipality",
      "ZADI Dubai food import",
      "Montaji registration Dubai",
      "food label assessment Dubai",
      "UAE food import registration",
    ],
    content: `
<p>Many guides describe Dubai Municipality's Montaji portal as the place to register food products. For ordinary packaged food, that is not how the system works. Montaji is Dubai Municipality's platform for consumer products such as cosmetics, personal care products, health supplements and detergents. Food items go through a different route: the federal ZAD platform and Dubai Municipality's own food item registration and label assessment service, which importers reach through the FIRS and ZADI portals.</p>
<p>This guide explains which system does what, who has to register, what the application asks for, when laboratory testing applies, and how registration connects to releasing a shipment. Where a fee, processing time or validity period could not be confirmed from an official source, we say so.</p>

<div class="key-takeaways">
<h3>Key Takeaways</h3>
<ul>
<li><strong>Food must be registered in ZAD before it is traded.</strong> Under Ministerial Decree No. 239 of 2018, food that is imported, produced locally, or changed in its label, ingredients or composition must be registered in the federal ZAD system before being handled in UAE markets.</li>
<li><strong>In Dubai, registration and label assessment happen through Dubai Municipality's "Register and Assess a Food Item" service,</strong> which importers use through the FIRS and ZADI portals.</li>
<li><strong>Montaji is not the channel for ordinary packaged food.</strong> It covers consumer products such as cosmetics, perfumes, health supplements, detergents, antibacterial products and food contact materials.</li>
<li><strong>Laboratory testing is risk-based, not automatic for every product.</strong> According to the USDA's 2025 UAE import report, food items registering for the first time for import into Dubai undergo testing by Dubai Municipality based on product risk and how often the item is imported.</li>
<li><strong>Each pack size counts as a separate food item,</strong> and any change to the label, weight, packaging or barcode after approval needs a new label assessment.</li>
</ul>
</div>

<h2>Montaji, ZAD, FIRS and ZADI: Which System Does What?</h2>
<table>
<thead>
<tr><th>System</th><th>Operated by</th><th>What it is used for</th></tr>
</thead>
<tbody>
<tr><td><strong>ZAD</strong></td><td>Ministry of Climate Change and Environment (MOCCAE), developed with Dubai Municipality</td><td>The federal smart portal for food trade. Food businesses register their companies and food items, search registered items, check banned food lists, and get no-objection certificates to move food consignments between emirates.</td></tr>
<tr><td><strong>FIRS</strong> (Food Import and Re-export System)</td><td>Dubai Municipality</td><td>Dubai's food import system. Importers register food items, request label assessments, submit import and re-export requests, and follow up on fees and fines.</td></tr>
<tr><td><strong>ZADI</strong></td><td>Dubai government platform</td><td>An integrated platform for Dubai food import services: food import requests, re-export requests, food item registration, label assessment, customs services and customs declarations.</td></tr>
<tr><td><strong>Montaji</strong></td><td>Dubai Municipality</td><td>Registration and verification of consumer products such as cosmetics, personal care products, perfumes, health supplements, detergents, antibacterial products and food contact materials.</td></tr>
</tbody>
</table>
<p>ZAD went live on 1 April 2018. At launch, Dubai Municipality said it had integrated FIRS with ZAD, so food would no longer need separate registration in each emirate. According to the USDA, once a product is registered in ZAD, the importer can apply for an import permit and ship through any UAE port.</p>
<p>If you sell health supplements, cosmetics or food packaging materials, Montaji is relevant. If you import or make packaged food, your route is ZAD plus Dubai Municipality's food item service. Some categories, including certain dairy products, juices and beverages, also need a UAE Certificate of Conformity under the Emirates Conformity Assessment Scheme (ECAS), run by the Ministry of Industry and Advanced Technology (MOIAT). Check with MOIAT whether your product is in scope.</p>

<h2>Who Needs to Register Food Products?</h2>
<p>The legal basis is Federal Law No. 10 of 2015 on Food Safety. Article 7 says food manufacturers, producers and importers must register their products before trading them. Article 8 says no food may be imported for the first time unless approved by the Ministry through a national approval and registration system. Ministerial Decree No. 239 of 2018 set up that system, known as ZAD.</p>
<p>In practice, this means:</p>
<ul>
<li><strong>Importers</strong> register each food item before applying for an import request. USDA guidance for exporters notes that registration is done by the UAE importer, so overseas manufacturers usually work through their importer or distributor.</li>
<li><strong>Local manufacturers</strong> register food they produce in the UAE, just as importers do.</li>
<li><strong>Anyone changing a registered product</strong> must register again if the label, ingredients or composition change.</li>
<li><strong>Re-exporters in Dubai</strong> need label approval for consignments meant for re-export as well as those meant for local sale. Dubai Municipality runs a separate service for approving the release of food imported for re-export.</li>
</ul>
<p>Two points often catch businesses out: a 100 g and a 200 g pack of the same product are separate food items that must each be registered, and a label changed after approval (packaging, weight, text or barcode) needs a new assessment.</p>

<h2>What the Application Asks For</h2>
<p>The core of a food item application is product data and images, not a large bundle of certificates. Dubai Municipality's food item service lists two documents: the label of the food item and a product photo. Through the portal, you also enter structured product details. Dubai Municipality's ZAD user guide lists:</p>
<ul>
<li>Trade name, brand, product name and manufacturer</li>
<li>All ingredients used to make the product</li>
<li>All food additives used</li>
<li>Attachments: copies of the label and product images</li>
</ul>
<p>More documents may be needed depending on the product and its claims. According to the USDA, ZAD registration requires a copy of the label and packaging, plus an official certificate from the competent authority in the country of origin to back up any health or nutrition claims. For registration through FIRS, importers upload health and laboratory certificates. Certain categories such as meat, fish and eggs need a government health certificate at import. If you claim a product is halal, you need a certificate from an approved halal certifier. Only the UAE national halal logo may be used on packs.</p>
<p>Dubai Municipality's label assessment guidance says the product details in the application should match the label exactly. Mismatches between the form and the artwork cause avoidable delays.</p>

<h2>How Food Registration Works in Dubai: Step by Step</h2>
<p>This sequence draws on Dubai Municipality's service information, its ZAD user guide and the USDA's 2025 UAE import report. Portal screens change, so follow the live wording.</p>

<h3>Step 1: Set up company access</h3>
<p>Create a Dubai ID, which is linked to your Emirates ID, and register your company in the system. According to the USDA, getting FIRS access involves an online application with company details and a copy of your trade license. After approval, you can use the system for food item registration, label assessments and import or re-export requests.</p>

<h3>Step 2: Search the food item catalogue</h3>
<p>Before registering a new item, search the catalogue to see whether it is already registered. You can search by barcode, country of origin, net weight or trademark. The ZAD guide also lets you register a new item based on an existing one.</p>

<h3>Step 3: Enter the food item details and upload the label</h3>
<p>Fill in the trade name, brand, manufacturer, ingredients and additives, then upload the label and product images. Dubai Municipality asks for label images in artwork form where possible, uploaded upright, so reviewers do not have to rotate them.</p>

<h3>Step 4: Complete the label assessment</h3>
<p>Dubai Municipality assesses the label against local specifications from MOIAT, GCC Standardization Organization (GSO) standards, the Codex Alimentarius, and European rules on food additives. The main labeling standard is UAE.S GSO 9, which covers labeling of prepackaged foodstuffs. If the label needs changes, you receive an assessment report explaining them. According to the USDA, an import request can only be made once both product registration and label assessment are successful.</p>

<h3>Step 5: Provide samples for laboratory testing if required</h3>
<p>Dubai Municipality decides whether testing is needed and which tests to run. According to the USDA, first-time items for import into Dubai are tested based on product safety risk and import frequency. Samples go to the Food and Environment section of Dubai Municipality's Central Laboratory, the number of samples depends on the tests requested, and results can take up to five working days depending on the test. If the lab finds an ingredient or additive that is not on the label, the item is rejected.</p>

<h3>Step 6: Submit the import request and clear the consignment</h3>
<p>With the item registered and the label approved, submit an import request through FIRS or ZADI. You will need the port of entry, airway bill number, arrival date and country of origin. When the goods arrive they may be inspected against the details in the system. Once inspection and quarantine clearance are done, the importer pays customs duty and releases the shipment. FIRS tells you if a shipment is held or rejected, and you can appeal through the same portal. Dubai Municipality handles this final step as a separate service: releasing imported food consignments for sale in the local market.</p>

<h2>What Label Reviewers Check</h2>
<p>Most avoidable rejections start with the label. Based on UAE.S GSO 9 as summarized in the USDA's 2025 report, the label must include:</p>
<ul>
<li>The product name, in a prominent position</li>
<li>Ingredients in descending order of proportion, with additives named by their functional class</li>
<li>A nutrition declaration</li>
<li>Net quantity</li>
<li>Name and address of the manufacturer, or of the packer if different</li>
<li>Country of origin</li>
<li>Production and expiry dates where shelf life is mandatory, and storage conditions if they affect the date</li>
<li>Instructions for use, a coded batch or lot number, and the animal source of any animal-derived ingredient</li>
<li>Mandatory warnings and declarations</li>
<li>Arabic text, with any other language matching the Arabic exactly</li>
</ul>
<p>There are some specific rules as well. Six synthetic colours (E102, E104, E110, E122, E124 and E129) must be marked on the label with a warning about possible effects on children's activity and attention. The source of gelatin, lecithin, mono- and diglycerides must be declared. Titanium dioxide (E171) has been banned as a food additive since 31 March 2023. Arabic translation stickers are allowed, but they must be submitted during label assessment, applied as a single sticker before export, and must not hide required information or contradict the original label. For the full labeling picture, see our <a href="/blog/uae-food-labeling-requirements-2026">UAE food labeling requirements guide</a> and our <a href="/blog/front-of-pack-nutrition-labels-gcc-guide">front-of-pack nutrition labeling guide for the GCC</a>.</p>

<h2>Fees, Processing Times and Validity: Check the Live Service Card</h2>
<p>Earlier versions of this article listed fixed government fees, a certificate validity period and a timeline in business days. We have removed them. The figures published online disagree with each other, and we could not confirm any of them on a live Dubai Municipality page. Fees also change, and testing or consignment release may be charged separately.</p>
<ul>
<li>Check current fees and service times on Dubai Municipality's <a href="https://www.dm.gov.ae/municipality-business/food-safety-department-2/important-information-to-food-establishment/">food safety services page</a>, under "Apply to Register and Assess a Food Item" and "Apply to Release Imported Food Consignments for Sale in Local Market".</li>
<li>Don't assume a registration lasts a set number of years. Any change to the label, pack size, weight or barcode needs a new assessment.</li>
<li>Allow time for laboratory testing if it is requested for a first-time item.</li>
</ul>

<h2>Common Reasons Registrations Get Delayed</h2>
<ul>
<li><strong>Wrong channel:</strong> submitting packaged food through Montaji.</li>
<li><strong>Form and label mismatch:</strong> brand, name, net weight or ingredients differ from the artwork.</li>
<li><strong>Unregistered pack sizes or label changes:</strong> each size is its own item, and changes after approval need reassessment.</li>
<li><strong>Undeclared ingredients or additives:</strong> found in testing, they lead to rejection.</li>
<li><strong>Sticker problems:</strong> Arabic stickers that hide required information, contradict the label, or were not assessed.</li>
<li><strong>Halal claims:</strong> no approved certifier, or a halal logo other than the UAE national mark.</li>
<li><strong>Missed ECAS requirement:</strong> some dairy, juice and other products also need a MOIAT Certificate of Conformity.</li>
</ul>

<h2>Preparing Label Content Before You Submit</h2>
<p>The portals check what you submit. They don't create it. Whether a label passes is mostly decided earlier: a correctly ordered ingredient statement, accurate nutrition values, allergen declarations, and Arabic and English text that match. RecipeBuilder is recipe management and labeling software for that preparation work. It does not submit applications to ZAD, FIRS, ZADI or Montaji, it is not affiliated with Dubai Municipality, and approval always rests with the authority.</p>

<div class="blog-cta-box">
<h3>Get your label content right before registration</h3>
<p>RecipeBuilder builds ingredient lists ordered by weight from your recipes, calculates nutrition values using USDA FoodData Central data, generates allergen declarations, and produces bilingual English and Arabic label content. It also exports print-ready packaging artwork and barcodes, so the label you upload for assessment matches the data behind it. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to see how it fits your product registration workflow.</p>
</div>

<h2>Frequently Asked Questions</h2>

<h3>Is Montaji used to register food products in Dubai?</h3>
<p>Not for ordinary packaged food. Montaji is Dubai Municipality's platform for consumer products such as cosmetics, personal care products, perfumes, health supplements, detergents, antibacterial products and food contact materials. Food items must be registered in the federal ZAD system under Ministerial Decree No. 239 of 2018. In Dubai, registration and label assessment go through Dubai Municipality's "Register and Assess a Food Item" service, which importers use via the FIRS and ZADI portals.</p>

<h3>Does every food product need laboratory testing at Dubai Municipality?</h3>
<p>No. According to the USDA's 2025 UAE import regulations report, food items registering for the first time for import into Dubai are tested by Dubai Municipality based on product safety risk and import frequency. The municipality decides which tests to run and how many samples it needs, and results can take up to five working days depending on the test. Consignments can also be inspected on arrival. If testing finds an ingredient or additive that is not declared on the label, the item is rejected.</p>

<h3>How much does food product registration cost in Dubai, and how long does it last?</h3>
<p>We don't quote a figure. The fees and validity periods published online disagree, and we could not confirm them on a live Dubai Municipality page. Check current fees and service times on Dubai Municipality's food safety services page before applying, and don't count on a registration lasting a fixed number of years. Any change to the label, pack size, weight or barcode needs a new label assessment.</p>

<h3>Do I need to register again if I change my product label?</h3>
<p>Yes, in most cases. Under Ministerial Decree No. 239 of 2018, food whose label, ingredients or composition has changed must be registered in ZAD before being handled in UAE markets. USDA guidance for Dubai also says a label reassessment is needed when packaging, weight, label or barcode changes after approval. Each pack size is treated as a separate food item.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/blog/uae-food-labeling-requirements-2026">UAE Food Labeling Requirements 2026: Standards, Dates and Penalties</a></li>
<li><a href="/blog/front-of-pack-nutrition-labels-gcc-guide">Abu Dhabi Nutri-Mark: Front-of-Pack Label Guide (2026)</a></li>
<li><a href="/food-labeling">RecipeBuilder Food Labeling</a></li>
<li><a href="/recipe-management">RecipeBuilder Recipe Management</a></li>
<li><a href="https://www.dm.gov.ae/municipality-business/food-safety-department-2/important-information-to-food-establishment/">Dubai Municipality: Food Safety Department services</a></li>
<li><a href="https://zad.gov.ae/">ZAD: Federal Smart Portal for Food Trade</a></li>
<li><a href="https://uaelegislation.gov.ae/en/legislations/1161">Federal Law No. 10 of 2015 on Food Safety</a></li>
<li><a href="https://www.fas.usda.gov/data/gain/2025/11/united-arab-emirates-fairs-country-report-annual">USDA FAS: UAE FAIRS Country Report 2025</a></li>
</ul>
`,
  },
  {
    slug: "dubai-municipality-school-food-requirements-caterers-guide",
    title: "Dubai Municipality School Food Requirements: 2026 Guide for Caterers",
    description:
      "What Dubai Municipality requires from school caterers: Food Permit, Approved Menu, Smart Choices nutrient limits, allergens and supplier grade A/B.",
    date: "2026-03-10",
    updatedDate: "2026-09-14",
    category: "Compliance",
    readTime: "13 min read",
    keywords: [
      "Dubai Municipality school food requirements",
      "school food supplier requirements Dubai",
      "Food Permit to Educational Institutions",
      "Dubai school canteen Approved Menu",
      "Smart Choices classification Dubai",
      "My School Food Dubai Municipality",
      "Dubai Food and Nutrition Guidelines educational institutions",
      "school catering compliance Dubai",
      "Dubai school canteen banned foods",
      "school food allergens Dubai",
      "DMChecked school canteen",
      "Green Canteens Dubai",
    ],
    content: `
<p>Supplying food to schools in Dubai means working to one main rulebook: Dubai Municipality's <em>Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions</em>. The Food Safety Department wrote it, and it is published through the municipality's <a href="https://myschoolfood.com" target="_blank" rel="noopener noreferrer">My School Food</a> programme. It sets out who may supply a canteen, which permit you need, how menus get approved, and the nutrient limits every menu item has to meet.</p>
<p>This guide goes through the supplier requirements in that document clause by clause, so you can check your own operation against the source. The guideline uses "shall" or "must" for mandatory requirements and "should" for strongly recommended ones. We keep that difference below. Rules change, so always check the <a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf" target="_blank" rel="noopener noreferrer">current guideline PDF</a> and confirm anything you are unsure about with the Food Safety Department (nutrition@dm.gov.ae) before you submit a menu.</p>

<div class="key-takeaways">
<h3>Key Takeaways</h3>
<ul>
<li><strong>Two approvals come before anything else.</strong> A supplier needs a Food Permit to Educational Institutions from Dubai Municipality, and it may only sell the items on its Approved Menu.</li>
<li><strong>Supplier eligibility is specific.</strong> You need a trade license covering the activity, an inspection grade of A or B, an independent third-party food safety audit, and a trained Person-in-Charge (PIC) present on every shift.</li>
<li><strong>Every menu item is classified under Smart Choices</strong> (Green, Amber, Red, Black). Limits apply both per 100 g and per serving, and the per-serving limits are adjusted by age group.</li>
<li><strong>Some foods are banned outright.</strong> These include artificial sweeteners, processed meats, confectionery, sugary drinks, deep-fried foods, and anything non-halal.</li>
<li><strong>Allergens must be declared no matter how small the amount.</strong> The guideline lists nine allergen groups that Dubai Municipality recognises.</li>
<li><strong>Sustainability is part of the guidance.</strong> Schools must offer a vegetarian option, and meat-free days and locally sourced ingredients are encouraged.</li>
</ul>
</div>

<h2>Who the Guideline Applies To</h2>
<p>Section 3 of the guideline covers food suppliers, and canteens run by schools, that serve or sell food to private school students aged 4 to 18. It also covers vending machines, cafés and events on school premises, plus canteens in nurseries, universities and colleges. It applies to cooked, ready-to-eat and pre-packaged food, and to service providers that support suppliers, such as food laboratories, training centres and consultants.</p>
<p>The programme is large. When Dubai Municipality launched the My School Food digital platform in June 2025, <a href="https://gulfnews.com/uae/dubai-overhauls-school-canteens-unveils-new-website-ai-chatbot-with-stricter-guidelines-1.500158719" target="_blank" rel="noopener noreferrer">Gulf News reported</a> that it covers more than 400,000 students across more than 500 schools, nurseries and universities, plus over 50 school food suppliers.</p>

<h2>Supplier Eligibility: What You Need Before You Can Supply</h2>
<p>Clause 3.2.1.2 says educational institutions should buy food only from suppliers that have all of the following:</p>
<ul>
<li><strong>A valid trade license</strong> that explicitly names the relevant business activity, such as catering, bakery or manufacturing.</li>
<li><strong>A high food safety rating.</strong> This means a verifiable inspection grade of <strong>A or B</strong> from the Food Safety Department's Food Inspection Section.</li>
<li><strong>Safe food handling facilities</strong> that can prepare, transport and store food to the standards in the Dubai Food Code.</li>
<li><strong>A third-party food safety audit.</strong> An independent audit must confirm that you follow food safety regulations.</li>
<li><strong>A trained Person-in-Charge (PIC) for the canteen.</strong> The PIC must be formally trained in both nutrition requirements and food safety, and must hold an active account on the municipality's digital food safety platform. The PIC must be present on every shift. If a school has several food service areas, each one needs its own PIC.</li>
</ul>
<p>Clause 3.2.2.1 adds two more conditions. The Food Safety Department must approve the layout and processes of your canteen and/or production facility before you start supplying. You must also keep a good compliance history, with no major violations during the supply period.</p>

<h3>About Inspection Grades, Foodwatch and DMChecked</h3>
<p>Dubai Municipality grades food establishments on a five-letter scale from A to E. <a href="https://gulfnews.com/uae/scan-qr-codes-to-get-food-safety-record-of-restaurants-in-dubai-1.62133377" target="_blank" rel="noopener noreferrer">Gulf News</a> described the grades as running from A ("Excellent") to E ("Very poor"). A school supplier needs an A or a B. A C, D or E does not meet the school supplier requirement.</p>
<p>The guideline text still refers to <strong>Foodwatch</strong>, the municipality's food safety platform. It is used for PIC accounts, for linking a school to its approved supplier, and for uploading Approved Menus. Since then, Dubai Municipality has introduced <strong>DMChecked</strong>, which <a href="https://gulfnews.com/uae/dubai-overhauls-school-canteens-unveils-new-website-ai-chatbot-with-stricter-guidelines-1.500158719" target="_blank" rel="noopener noreferrer">Gulf News describes</a> as the revamped platform that replaces Foodwatch. <a href="https://www.khaleejtimes.com/uae/education/dubai-canteen-food-inspections" target="_blank" rel="noopener noreferrer">Khaleej Times reports</a> that DMChecked is now used to monitor canteen performance and review menus. Where this guide says "Foodwatch", check with the municipality which platform the step now uses.</p>

<h2>The Food Permit and the Approved Menu</h2>
<p>Under clauses 3.2.1.3 and 3.2.2.3, every business that supplies food to an educational institution, and every school that runs its own canteen, must hold a valid <strong>Food Permit to Educational Institutions</strong> from the Food Safety Department. Only the foods listed in the permit may be sold. Any change to the Approved Menu needs a new approval from Dubai Municipality. Clause 3.2.2.4 says suppliers must not provide any food the Food Safety Department has not approved.</p>
<p>The guideline sets out the Approved Menu application in three steps:</p>

<h3>Step 1: Complete and Submit the Application</h3>
<p>Submit your weekly menus together with the completed <em>Supply Food To Educational Institutions Form</em>. The form must name the supplier's designated PIC and the school's appointed PIC. Menu items sent outside the cycle menu are not accepted, except for vending machines or canteens that sell the same items all year. New or reformulated items are approved only at the end of each term, and the approval takes effect the following term.</p>

<h3>Step 2: Receive the Approved Menu</h3>
<p>The municipality reviews the form and the weekly menus. If the items comply, it issues an "Approved Menu".</p>

<h3>Step 3: Digitise the Approved Menu</h3>
<p>The supplier's PIC at the canteen uploads the Approved Menu and that week's submitted menu to the school's QR code on the municipality's food safety platform.</p>

<h3>Menu Cycle and Nutrition Data Rules</h3>
<ul>
<li><strong>Weekly menu cycle (3.3.1.1):</strong> You must rotate at least four weekly cycle menus, and two to three seasonal menus are recommended. Menus are submitted in 4-week batches, with values entered per 100 g for each component.</li>
<li><strong>Nutritional assessment (3.2.2.5):</strong> You must assess every product from its recipe, including ingredients and quantities. You must provide the results to the Food Safety Department, to schools, or to any authorised regulator when asked.</li>
<li><strong>Revalidation (3.2.2.6):</strong> Whenever you change a product, its ingredients, its proportions or its serving size, you must revalidate the nutrition information and get it approved again.</li>
<li><strong>Accepted methods (3.2.2.7):</strong> The nutrition information can come from nutrient analysis software, from a laboratory approved by the Food Safety Department, or from manual calculation using known or accepted ingredient values.</li>
</ul>

<h2>Menu Item Types and Weight Limits</h2>
<p>Clause 3.3.1.2 defines six kinds of menu items: <strong>Main dish</strong>, <strong>Main dish combo</strong> (a main plus a dessert side), <strong>Full meal combo</strong> (a main, a dessert side and a beverage), <strong>Entrée snack</strong> (a smaller portion of a main dish), <strong>Snacks</strong> (small pre-packaged items) and <strong>Beverages</strong>. For mains and combos, you declare each component per 100 g, then assess the whole item per 100 g and per serving. Each main dish must contain at least three food groups, and protein, grains and vegetables are the major components (3.3.1.4).</p>
<p>Clause 3.3.1.3 sets a weight limit for each food type:</p>
<table>
<thead>
<tr><th>Food type</th><th>Weight limit per item</th></tr>
</thead>
<tbody>
<tr><td>Pre-packaged products</td><td>40 g</td></tr>
<tr><td>Bakery and dessert items</td><td>60 g</td></tr>
<tr><td>Other savory foods (e.g. samosas, manakish, pizza, filled breads)</td><td>100 g</td></tr>
<tr><td>Catered foods (mains and entrées)</td><td>No set limit</td></tr>
</tbody>
</table>

<h2>The Smart Choices Classification</h2>
<p>Under clause 3.3.2.1, every menu item supplied to a school must be classified into one of four colour categories. Each category controls how often the item may appear on the menu:</p>
<ul>
<li><strong>Daily Smart Choices (Green):</strong> fruits, vegetables, whole grains, lean proteins, low-fat dairy, healthy fats and water. These are always on the menu.</li>
<li><strong>Sometimes Smart Choices (Amber):</strong> moderately healthy items, such as muffins without frosting or full-fat yogurt. These may appear twice a week. There is also a "Sometimes Smart +" (light amber) level for items closer to Green, which is offered once a week in smaller portions.</li>
<li><strong>Seldom Smart Choices (Red):</strong> restricted items, such as frosted baked goods, baked donuts and ice cream. These may be served once a month, or three times a term (3.3.2.5).</li>
<li><strong>Never Smart Choices (Black):</strong> banned items. These are not allowed on the menu or as an ingredient.</li>
</ul>
<p>For a plain-language walkthrough of the categories, see our <a href="/blog/smart-food-choices-system-dubai-school-canteen">Smart Food Choices guide</a>.</p>

<h3>Nutrient Criteria</h3>
<p>Clause 3.3.2.2 says each menu item must meet the criteria for calories, total fat, saturated fat, added sugars, sodium and fibre. The limits apply both per serving and per 100 g (3.3.2.3). The table below shows the figures as printed in the guideline. The guideline's table does not print units, so check the <em>How To Categorize Menu Items</em> annex before you apply them. For fibre, the value is a minimum, not a maximum.</p>
<table>
<thead>
<tr><th>Nutrient</th><th>Green (per serving)</th><th>Amber (per serving)</th><th>Red (per serving)</th><th>Green (per 100 g)</th><th>Amber (per 100 g)</th><th>Red (per 100 g)</th></tr>
</thead>
<tbody>
<tr><td>Energy</td><td>500</td><td>600</td><td>&gt; 600</td><td>120</td><td>500</td><td>&gt; 500</td></tr>
<tr><td>Total fat</td><td>19.5</td><td>23</td><td>&gt; 23</td><td>3</td><td>17.5</td><td>&gt; 17.5</td></tr>
<tr><td>Saturated fat</td><td>5</td><td>6</td><td>&gt; 6</td><td>1.5</td><td>5</td><td>&gt; 5</td></tr>
<tr><td>Sodium</td><td>600</td><td>700</td><td>&gt; 700</td><td>120</td><td>600</td><td>&gt; 600</td></tr>
<tr><td>Added sugars</td><td>6.75</td><td>9</td><td>&gt; 9</td><td>5.75</td><td>11.25</td><td>&gt; 11.25</td></tr>
<tr><td>Dietary fibre</td><td>2.8</td><td>2.52</td><td>&lt; 2.52</td><td>3</td><td>2</td><td>&lt; 2</td></tr>
</tbody>
</table>
<p><em>Source: Smart Choices Nutrient Criteria Table, clause 3.3.2.2 of the guideline.</em></p>

<h3>Age-Group Percentages</h3>
<p>The per-serving limits above are a baseline. Clause 3.3.2.4 scales them by age group and by the kind of menu item. For example, a main dish for 4–8 year olds is assessed at 70% of the baseline limits. A full meal combo for 14–18 year olds is assessed at 130%.</p>
<table>
<thead>
<tr><th>Age group</th><th>Main dish</th><th>Main dish combo</th><th>Full meal combo</th><th>Entrée snack</th><th>Snacks</th></tr>
</thead>
<tbody>
<tr><td>4–8 years (Small)</td><td>70%</td><td>80%</td><td>100%</td><td>40%</td><td>40%</td></tr>
<tr><td>9–13 years (Medium)</td><td>90%</td><td>100%</td><td>120%</td><td>70%</td><td>70%</td></tr>
<tr><td>14–18 years / University (Large)</td><td>100%</td><td>110%</td><td>130%</td><td>Not specified</td><td>Not specified</td></tr>
</tbody>
</table>
<p>The guideline sets separate percentages for nursery age groups from 6 months to 6 years. It also includes a phased schedule of targets (Annex 20) that moves canteen menus steadily away from Red and Amber items toward Green.</p>

<h2>Banned and Restricted Foods</h2>
<p>Clause 3.4.3 lists the <strong>Never Smart Choices</strong>. These must not be used, served, displayed or promoted in schools:</p>
<ul>
<li>Artificial sweeteners and salt substitutes</li>
<li>Food or drinks with added protein supplements</li>
<li>Non-halal foods in any form, at any activity or event, including events for staff and parents</li>
<li>Processed meats, such as deli meats, hot dogs, mortadella, and commercially processed burgers and nuggets</li>
<li>Sugar and chocolate confectionery</li>
<li>Highly sweetened drinks, such as soft drinks, sports drinks and flavoured water (energy drinks are also listed among the banned examples)</li>
<li>Chocolate in all its forms, with narrow exemptions: low-sugar chocolate milk or hot chocolate (200 ml), and cacao in baked goods made mainly with fruit, vegetables or legumes</li>
<li>Deep-fried foods (a baked version that is low in fat and/or sodium is exempt)</li>
</ul>
<p>Clause 3.4.2 lists <strong>Restricted Foods</strong>. These are allowed only within set exemptions, usually no more than twice a week. They include savory pre-packaged snacks, bakery products, high-salt condiments and pickles, high-fat sauces and dressings, regular coconut milk, and dairy desserts. Beverages must meet the Simplified Beverage Criteria, which cover volume, fruit juice content and added sugars per 100 ml. Coffee and tea are allowed only for the oldest students (Grades 11–12 / Years 12–13), up to 240 ml, and only in a separate designated area. Vending machines must mainly stock Green items, and must not sell Red or Black items (3.4.4).</p>

<h2>Nutrition Labelling and Allergens</h2>
<p><strong>Labelling (3.4.8).</strong> Every menu item sold on school premises must be verified and labelled per serving for calories, carbohydrates, saturated fat, sodium and added sugars. The guideline also says a fuller panel should be provided for all meals, snacks and beverages. That panel gives the name, net weight and serving size, then kilocalories, carbohydrates, added sugars, dietary fibre, protein, total fat, saturated fat, sodium, vitamin D and iron, both per serving and per 100 g. Pre-packaged products must also meet UAE labelling rules. See our <a href="/blog/uae-food-labeling-requirements-2026">UAE food labeling guide</a>.</p>
<p><strong>Allergens (3.4.9).</strong> Every meal must show any allergen present, whether it is a main ingredient, part of a compound ingredient, an additive or a processing aid. Allergens must be labelled or declared on the menu however small the amount, citing the Dubai Food Code. The Food Safety Department recognises nine allergen groups in this guideline:</p>
<ul>
<li>Crustaceans and their products</li>
<li>Peanuts and their products</li>
<li>Soybeans and their products</li>
<li>Tree nuts and their products</li>
<li>Sesame seeds and their products</li>
<li>Fish and fish products</li>
<li>Egg and egg products</li>
<li>Milk and milk products</li>
<li>Gluten and cereals containing gluten (Kamut, wheat, oats, rye, barley and spelt)</li>
</ul>

<h2>Food Safety, Training and Inspections</h2>
<p>Clause 3.4.10 says all food suppliers must follow the <strong>10 Points to Food Safety</strong>: good personal hygiene, preventing the spread of illness, supplier management, food safety controls, monitoring storage practices, evaluating the menu, pest management, cleaning and disinfection, waste management, and allergen management. Schools and nurseries with children aged 6 and under have extra requirements for pantries and lunch box storage (3.4.11).</p>
<p><strong>Training (3.5.1).</strong> Basic Food Hygiene Training is mandatory for all food handlers. Managers, PICs and school representatives should also complete PIC and Advanced PIC training, plus the nutrition and sustainability training run by the municipality's Applied Nutrition and Awareness Section. Dubai Municipality also publishes a <em>Nutrition In-Charge</em> training programme on the My School Food site.</p>
<p><strong>Monitoring (3.5.2).</strong> The supplier's PIC must carry out canteen self-monitoring every month, and the school's PIC every quarter. Production facilities also self-monitor. Suppliers of ready-to-eat, high-risk foods to schools should be treated as high-risk establishments and inspected at least once every six months.</p>
<p><strong>Enforcement.</strong> According to <a href="https://www.khaleejtimes.com/uae/education/dubai-canteen-food-inspections" target="_blank" rel="noopener noreferrer">Khaleej Times</a>, the municipality's food safety officers inspect 456 institutions a year. When they find non-compliance, they act immediately: products are withdrawn, their circulation is banned, and schools must take corrective steps. The guideline does not publish fines, so ask the municipality directly about penalties.</p>

<h2>Sustainability and "Green Canteens"</h2>
<p>"Green Canteens" is not a formal certification you can apply for. <a href="https://gulfnews.com/uae/dubai-overhauls-school-canteens-unveils-new-website-ai-chatbot-with-stricter-guidelines-1.500158719" target="_blank" rel="noopener noreferrer">Gulf News</a> describes it as a sustainability concept within the guidance, covering sustainable menus, locally sourced food, less food waste, and avoiding single-use packaging. The one firm rule is clause 3.4.1: all schools must offer at least one vegetarian option for every type of meal sold. The rest are recommendations, such as meat-free days in each weekly cycle menu (3.4.6), locally sourced ingredients (3.4.7) and less food and packaging waste (2.4).</p>

<h2>How Software Helps With the Nutrition Workload</h2>
<p>The hardest part for most caterers is the arithmetic, not the kitchen. Every recipe needs a nutrition assessment. Every component has to be declared per 100 g. Every item has to be checked against Smart Choices limits at the right age-group percentage. And all of it must be redone whenever an ingredient or portion changes. Across a four-week menu cycle, that is hundreds of calculations to keep in step with what is actually being cooked. The guideline explicitly accepts nutrient analysis software as a way to get the data.</p>

<div class="blog-cta-box"><h3>Keep Your School Menu Data in One Place</h3><p>RecipeBuilder links your recipes to their nutrition and allergen data. It calculates nutrition from USDA FoodData Central data, generates allergen declarations from your ingredients, produces bilingual English/Arabic labels, and tracks recipe costs, so a changed ingredient updates everything that depends on it. You still classify items and submit menus through Dubai Municipality's own process. RecipeBuilder keeps the numbers behind those submissions consistent. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to see how it fits your school catering workflow.</p></div>

<h2>Frequently Asked Questions</h2>

<h3>What inspection grade do I need to supply food to Dubai schools?</h3>
<p>The guideline requires a verifiable inspection grade of A or B from the Food Safety Department's Food Inspection Section. Dubai Municipality's grades run from A (Excellent) to E (Very poor), so a C, D or E does not meet the school supplier requirement. You also need a good compliance history with no major violations during the supply period.</p>

<h3>Is HACCP certification required for Dubai school caterers?</h3>
<p>The Dubai school food guideline does not name HACCP or ISO 22000 as a requirement. It does require an independent third-party food safety audit, facilities that meet the Dubai Food Code, a trained Person-in-Charge on every shift, and adherence to the 10 Points to Food Safety. Many caterers run a certified food safety management system anyway, but check with the Food Safety Department before treating any specific certificate as mandatory.</p>

<h3>How many allergens must school caterers declare in Dubai?</h3>
<p>The guideline lists nine allergen groups recognised by Dubai Municipality's Food Safety Department: crustaceans, peanuts, soybeans, tree nuts, sesame, fish, egg, milk, and cereals containing gluten. They must be declared on the menu or label however small the amount, including when they come from a compound ingredient, additive or processing aid. Pre-packaged products must also meet the UAE labelling standards that apply to them.</p>

<h3>Can I add a new dish to my school menu mid-term?</h3>
<p>Generally, no. Only foods on your Approved Menu may be sold, and any change needs Dubai Municipality's approval. Under the guideline, new or reformulated menu items are approved only at the end of each term and take effect the following term. Vending machines and canteens that sell the same items all year are the exception.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf" target="_blank" rel="noopener noreferrer">Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions (Dubai Municipality PDF)</a></li>
<li><a href="/blog/smart-food-choices-system-dubai-school-canteen">Dubai Smart Food Choices for Schools: Green, Amber, Red &amp; Black</a></li>
<li><a href="/blog/how-to-become-approved-school-food-supplier-dubai">How to Become an Approved School Food Supplier in Dubai (2026)</a></li>
<li><a href="/blog/nutri-check-dubai-school-canteen-compliance-guide">NutriCheck and Nutrition in Charge: Dubai School Canteen Self-Audits</a></li>
<li><a href="/blog/uae-food-labeling-requirements-2026">UAE Food Labeling Requirements 2026: Standards, Dates and Penalties</a></li>
<li><a href="/school-catering-dubai">RecipeBuilder for Dubai School Caterers</a></li>
</ul>
`,
  },
  {
    slug: "how-to-become-approved-school-food-supplier-dubai",
    title: "How to Become an Approved School Food Supplier in Dubai (2026)",
    description:
      "What Dubai Municipality requires to supply school canteens: supplier criteria, the Food Permit and Approved Menu steps, menu change rules and ongoing duties.",
    date: "2026-03-09",
    updatedDate: "2026-09-14",
    category: "Compliance",
    readTime: "10 min read",
    keywords: [
      "approved school food supplier Dubai",
      "Food Permit To Educational Institutions",
      "Dubai Municipality school canteen supplier",
      "Approved Menu Dubai schools",
      "Supply Food To Educational Institutions Form",
      "how to supply food to schools Dubai",
      "My School Food supplier requirements",
      "school catering Dubai requirements",
      "Dubai school canteen PIC requirements",
      "Dubai Food and Nutrition Guidelines educational institutions",
    ],
    content: `
<p>Supplying food to Dubai schools is regulated activity. Dubai Municipality's Food Safety Department sets out who may supply school canteens, and what they may serve, in the <em>Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions</em>, published through the My School Food programme. For a new caterer, bakery or food manufacturer, two things have to be in place: your business has to meet the guideline's criteria for an approved food supplier, and your menu has to be approved under a Food Permit To Educational Institutions before you sell it.</p>
<p>This guide walks through both, based on the guideline text itself. Where the guideline does not publish something, such as fees or processing times, we say so rather than guess. Always confirm current procedures with Dubai Municipality before you commit to a school contract.</p>

<div class="key-takeaways">
<h3>Key Takeaways</h3>
<ul>
<li><strong>Supplier eligibility comes first:</strong> a trade license covering the relevant activity, a Food Inspection grade of A or B, Food Code-compliant facilities, an independent third-party food safety audit, and a trained Person-in-Charge (PIC) assigned to the canteen.</li>
<li><strong>Menus are approved, not just suppliers:</strong> you submit weekly cycle menus with the Supply Food To Educational Institutions Form, receive an Approved Menu, then upload it on the school's QR code.</li>
<li><strong>Any change to the Approved Menu needs another approval.</strong> New or reformulated items are approved only at the end of each term, to take effect the following term.</li>
<li><strong>You may only sell what is approved:</strong> schools must make sure only the foods listed in the permit are sold.</li>
<li><strong>Nutrition and allergen data must be based on the recipe,</strong> and allergens must be declared on the menu, however small the amount.</li>
</ul>
</div>

<h2>What the Rules Cover</h2>
<p>The guideline's requirements section applies to food suppliers and school-run canteens serving private school students aged 4 to 18, as well as vending machines, student cafés and events, and canteens in nurseries, early learning centres, universities and colleges. It covers cooked, ready-to-eat and pre-packaged food. It also reaches service providers that support suppliers, such as food laboratories, training centres and nutrition consultants.</p>
<p>The guideline uses "shall" and "must" for mandatory requirements and "should" for strongly recommended ones. That distinction matters when you read the clauses quoted below.</p>
<p>Annex 13 of the guideline shows two supply models, both of which require a school food permit application:</p>
<ul>
<li><strong>Category 1: canteen managed by an external contractor</strong>, using a catering facility either inside or outside the school.</li>
<li><strong>Category 2: canteen managed by the educational institution</strong>, with food supplied by individual food businesses.</li>
</ul>

<h2>Supplier Eligibility Requirements</h2>
<p>Clause 3.2.2.2 requires food businesses supplying schools to meet all of the supplier criteria in clause 3.2.1.2. Those criteria are:</p>
<table>
<thead>
<tr><th>Requirement</th><th>What the guideline says</th></tr>
</thead>
<tbody>
<tr><td>Trade license</td><td>A valid trade license that explicitly names the relevant business activity, such as catering, bakery or manufacturing.</td></tr>
<tr><td>Food safety rating</td><td>A verifiable inspection grade of A or B from the Food Safety Department's Food Inspection Section.</td></tr>
<tr><td>Facilities</td><td>Facilities equipped to prepare, transport and store food according to the Dubai Food Code.</td></tr>
<tr><td>Third-party audit</td><td>An independent third-party audit verifying adherence to food safety regulations must be in place.</td></tr>
<tr><td>Trained PIC for the canteen</td><td>A designated Person-in-Charge with an active Foodwatch account, assigned to that school's canteen and formally trained in both nutrition requirements and food safety. The PIC must be present every shift, and separate PICs are needed for multiple food service areas or locations in the school.</td></tr>
</tbody>
</table>
<p>Clause 3.2.2.1 adds two more conditions. The layout and processes of the canteen and/or production facility must be approved by the Food Safety Department before supply begins. The supplier must also keep a good compliance history, with no major violations during the supply period.</p>
<p>A note on grades and platforms. Dubai Municipality grades food establishments on an A to E scale, so the guideline accepts only the top two grades. The guideline, dated August 2024, refers to Foodwatch throughout. Dubai Municipality now says it monitors school canteens and reviews menus through its DM Checked platform. Check with the Food Safety Department which platform your PIC account and menu uploads should use.</p>

<h2>How to Apply: The Approved Menu Process</h2>
<p>Under clause 3.2.2.3, businesses that supply schools, and schools that run their own canteens, must obtain a valid Food Permit To Educational Institutions from the Food Safety Department. You get it by following the Approved Menu steps below (also shown in Annex 14).</p>

<h3>Step 1: Complete the Application Form and Submit It to Food Permits</h3>
<p>Submit a copy of your weekly menus with the completed Supply Food To Educational Institutions Form. The form names the designated PIC from the food supplier and the PIC appointed by the school, who must be able to review food safety and nutrition requirements. Items sent for approval outside the cycle menu are not accepted, except for vending machines or canteens with regular items all year. Annex 15 explains how to fill in the form, section by section:</p>
<ul>
<li>General information (the school, the supplier, the PICs, the menu cycle)</li>
<li>Weeks 1 to 4 of the menu</li>
<li>Entrée snacks and snacks</li>
<li>Drinks</li>
</ul>
<p>The form checks your menu against the guideline's primary requirements (weekly cycle menu, kind of menu items, food types, food groups) and its nutrition requirements (per 100 g criteria, per-serving criteria and the Smart Choices classification).</p>

<h3>Step 2: Approved Menu Issuance</h3>
<p>The Food Safety Department reviews the form and weekly menus. If the menu items comply, it issues the official Approved Menu document through Food Permits.</p>

<h3>Step 3: Approved Menu Digitization</h3>
<p>Once you receive the Approved Menu, your PIC in the canteen uploads it, together with the submitted menu for that week, on the school's QR code on Foodwatch.</p>

<h2>Preparing a Menu That Can Be Approved</h2>
<p>Most of the work is in the menu itself. Section 3.3 of the guideline sets out the core requirements:</p>
<ul>
<li><strong>Weekly menu cycle:</strong> at least four weekly cycle menus must be rotated, and two to three seasonal menus are recommended. Menus are submitted in 4-week batches, with values entered per 100 g for each component as applicable.</li>
<li><strong>Kinds of menu items:</strong> each item must fit a defined kind: main dish, main dish combo, full meal combo, entrée snack, snack or beverage. For main dishes and combos, each component is declared per 100 g with its nutrients of concern, then the dish is evaluated as a whole per 100 g and per serving against the age-group criteria.</li>
<li><strong>Weight limits by food type:</strong> 40 g for pre-packaged products, 60 g for bakery and dessert items and 100 g for other savoury foods. Catered mains and entrées have no set weight limit.</li>
<li><strong>Food groups:</strong> each main dish must include at least three food groups, with protein, grains and vegetables as the main components.</li>
<li><strong>Smart Choices classification:</strong> items are classified by nutritional value, which determines how often they can appear. See our <a href="/blog/smart-food-choices-system-dubai-school-canteen">Smart Food Choices guide</a> for details.</li>
</ul>
<h3>Nutrition information</h3>
<p>Clause 3.2.2.5 requires suppliers to assess the nutrition of all their products from the recipe, including ingredients and quantities, and to share it with the Food Safety Department, schools or other authorities when asked. Under clause 3.2.2.7 you can get the values from nutrient analysis software, from a laboratory approved by the Food Safety Department, or by manual calculation from known ingredient values or accepted data. For manual calculations, the guideline points suppliers to the Applied Nutrition and Awareness Section at nutrition@dm.gov.ae. Schools should also hold nutrition and allergen information from their suppliers for labelling, documentation and verification (clause 3.2.1.7).</p>
<h3>Allergens</h3>
<p>Clause 3.4.9 requires every meal to show any allergen present as a main ingredient, compound ingredient, additive or processing aid. Allergens must be labelled or declared on the menu no matter how small the amount. The guideline lists nine allergens recognised by the Food Safety Department: crustaceans, peanuts, soybeans, tree nuts, sesame seeds, fish, egg, milk, and gluten and cereals containing gluten (Kamut, wheat, oats, rye, barley and spelt), each including their products.</p>

<h2>Menu Changes and the Scope of Your Permit</h2>
<p>This is where new suppliers most often get caught out, so read these clauses carefully:</p>
<ul>
<li><strong>Any change needs re-approval.</strong> Clause 3.2.1.3 states that any change to the Approved Menu requires another approval from Dubai Municipality. The guideline does not exempt "minor" changes.</li>
<li><strong>Approvals follow the school term.</strong> New or reformulated items are approved only at the end of each term, to take effect the following term (clause 3.2.2.3).</li>
<li><strong>Recipe changes trigger revalidation.</strong> Clause 3.2.2.6 requires suppliers to revalidate and get approval for nutrition information whenever products, ingredients, proportions or serving sizes change.</li>
<li><strong>Only approved food may be sold.</strong> Suppliers may not provide any food not approved by the Food Safety Department (clause 3.2.2.4), and schools must make sure only the foods listed in the permit are sold (clause 3.2.1.3).</li>
</ul>
<p>The guideline does not describe a single approval that covers every school in Dubai. The application form names a specific school and its PIC. The PIC is assigned to that school's canteen, and the Approved Menu is uploaded on that school's QR code. So treat each school contract as needing its own Approved Menu, and confirm with Food Permits before you start supplying another school.</p>

<h2>Obligations After Approval</h2>
<p>Approval is the start of ongoing compliance, not the end:</p>
<ul>
<li><strong>Training:</strong> Basic Food Hygiene Training is mandatory for all food handlers. Managers and PICs should also complete the relevant PIC training (clause 3.5.1). My School Food runs a Nutrition In-Charge Training Program for suppliers and school management.</li>
<li><strong>Self-monitoring:</strong> the food supplier's PIC must carry out canteen self-monitoring monthly, and production facilities are also subject to self-monitoring (clause 3.5.2).</li>
<li><strong>Inspections:</strong> suppliers of ready-to-eat high-risk foods to schools should be treated as high-risk establishments and inspected at least once every six months. Inspections cover food safety and nutrition, and any change in supplier, process or product (clause 3.5.2).</li>
<li><strong>Food safety practice:</strong> all suppliers must follow the guideline's 10 Points To Food Safety, which include supplier management and allergen management (clause 3.4.10).</li>
</ul>
<p>Dubai Municipality says it combines field visits to school canteens with monitoring on DM Checked. Where it finds non-compliance, it can withdraw non-conforming products, prohibit their circulation and require corrective action.</p>
<p>The guideline does not publish application fees or processing times. Ask Dubai Municipality directly rather than relying on third-party estimates, and plan around the end-of-term approval window for any menu changes.</p>

<h2>Keeping Menu Documentation Manageable</h2>
<p>For a caterer, the hardest part is keeping recipe-based nutrition values, per-serving figures and allergen declarations accurate across a four-week cycle, and updating them every time a recipe, ingredient or portion changes. Software is one of the three calculation methods the guideline allows. Whatever method you use, the output still has to meet the guideline's criteria and pass the Food Safety Department's review.</p>

<div class="blog-cta-box">
<h3>Build your school menu documentation in one place</h3>
<p>RecipeBuilder calculates menu nutrition from USDA FoodData Central data, gives per-serving values for each recipe, generates allergen declarations, produces bilingual English/Arabic labels and tracks recipe costing. When you change an ingredient or portion, the figures update so you can prepare a revalidation. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to see how it fits your school menu workflow.</p>
</div>

<h2>Frequently Asked Questions</h2>

<h3>Does one approval let me supply any school in Dubai?</h3>
<p>The guideline does not describe an emirate-wide approval. You must meet the supplier criteria in clause 3.2.1.2. The Food Permit To Educational Institutions is then tied to an Approved Menu, and the application form names a specific school and its PIC. That menu is uploaded on that school's QR code, and schools must make sure only foods listed in the permit are sold. Plan for an Approved Menu for each school you supply, and confirm the scope with Dubai Municipality's Food Permits before starting at a new school.</p>

<h3>Do I need re-approval if I change an item on my approved menu?</h3>
<p>Yes. Clause 3.2.1.3 says any change to the Approved Menu requires another approval from Dubai Municipality, and clause 3.2.2.6 requires revalidation whenever products, ingredients, proportions or serving sizes change. New or reformulated items are approved only at the end of each term, to take effect the next term. Until then, you may only serve the items already approved.</p>

<h3>What food safety grade does a school food supplier need?</h3>
<p>The guideline requires a verifiable inspection grade of A or B from Dubai Municipality's Food Inspection Section. You also need a trade license covering the relevant activity, facilities that meet the Dubai Food Code, an independent third-party food safety audit, a trained PIC present on every shift, Food Safety Department approval of your canteen or production facility layout and processes, and a compliance history with no major violations.</p>

<h3>How long does approval take and what does it cost?</h3>
<p>The guideline does not publish processing times or fees, so contact Dubai Municipality for current figures. The one timing rule it does set: new or reformulated menu items are approved only at the end of each term, for the following term. Leave enough time before a term starts to get your supplier criteria in place and your weekly menus approved.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf">Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions (Dubai Municipality, PDF)</a></li>
<li><a href="https://myschoolfood.com/food-suppliers/">My School Food: resources for food suppliers</a></li>
<li><a href="/blog/dubai-municipality-school-food-requirements-caterers-guide">Dubai Municipality School Food Requirements: 2026 Guide for Caterers</a></li>
<li><a href="/blog/smart-food-choices-system-dubai-school-canteen">Dubai Smart Food Choices for Schools: Green, Amber, Red &amp; Black</a></li>
<li><a href="/blog/nutri-check-dubai-school-canteen-compliance-guide">NutriCheck and Nutrition in Charge: Dubai School Canteen Self-Audits</a></li>
<li><a href="/school-catering-dubai">RecipeBuilder for School Catering in Dubai</a></li>
<li><a href="/recipe-management">Recipe Management</a></li>
</ul>
`,
  },
  {
    slug: "nutri-check-dubai-school-canteen-compliance-guide",
    title: "NutriCheck and Nutrition in Charge: Dubai School Canteen Self-Audits",
    description:
      "How Dubai Municipality's NutriCheck self-audit works, what the Nutrition in Charge (PIC) does, and a monthly checklist based on the official school guideline.",
    date: "2026-03-13",
    updatedDate: "2026-09-14",
    category: "Compliance",
    readTime: "11 min read",
    keywords: [
      "NutriCheck Dubai",
      "Nutrition in Charge Dubai",
      "NIC school canteen Dubai",
      "Person in Charge school canteen Dubai",
      "school canteen self-audit Dubai",
      "Dubai school canteen monthly audit checklist",
      "My School Food NutriCheck",
      "Dubai Food and Nutrition Guidelines educational institutions",
      "Dubai Municipality school food supplier compliance",
      "DM Checked school canteen",
    ],
    content: `
<p>Dubai Municipality's My School Food programme is shifting school canteen compliance away from relying only on occasional inspections and towards continuous self-checking. Two things sit at the centre of that shift: NutriCheck, the self-audit platform for food suppliers and schools, and the Nutrition in Charge (NIC), the trained person who carries out those audits on the ground.</p>

<p>This guide sets out what Dubai Municipality has actually published about both, and turns the <a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf">Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions</a> into a monthly preparation checklist. Where official detail is not public, we say so. The hosted copy of the guideline is marked as a draft dated 2 August 2024, so check the <a href="https://myschoolfood.com/food-suppliers/">My School Food supplier page</a> for the latest version.</p>

<div class="key-takeaways"><h3>Key Takeaways</h3><ul><li>NutriCheck is Dubai Municipality's self-audit platform, designed to prompt food suppliers and school Persons-in-Charge (PICs) to run regular self-audits of their canteens.</li><li>The school food guideline requires canteen self-monitoring monthly by the food supplier's PIC and every quarter by the educational institution's PIC.</li><li>The supplier's canteen PIC must be formally trained in both nutrition and food safety and present every shift, with separate PICs for multiple food service areas.</li><li>Dubai Municipality's announcement, as reported by Gulf News, said existing hygiene and food safety officers can take on the Nutrition in Charge role. We found no published degree requirement.</li><li>Self-audits sit alongside the Municipality's own nutrition audits and routine food safety inspections. They do not replace them.</li><li>The guideline lists nine allergen groups that must be declared on the menu, no matter how small the amount.</li></ul></div>

<h2>What Is NutriCheck?</h2>

<p>NutriCheck is the self-audit platform Dubai Municipality introduced under My School Food. In its back-to-school announcement for the 2025-26 academic year, the Municipality described NutriCheck as a way to encourage both food suppliers and school Persons-in-Charge to carry out regular self-audits, building accountability and continuous compliance. Food suppliers and school management were encouraged to use it to make sure their canteens meet the guideline.</p>

<p>When the programme was announced in June 2025, Gulf News reported that catering companies supplying food to schools must register and undergo monthly audits. It said these are self-audits run by a designated NIC from either the catering company or the school. The same report described three platform features: an interactive Dubai map showing school nutrition compliance, a built-in checklist to guide schools, and real-time monitoring that lets food inspectors see each entity's audit history.</p>

<p>In other words, a self-audit is a record inspectors can see, so treat every submission as a factual statement about your canteen.</p>

<p>Dubai Municipality has not published audit submission windows, grace periods or corrective-action deadlines for NutriCheck. For those details, check the instructions inside the platform or contact the Applied Nutrition and Awareness Section at nutrition@dm.gov.ae, the address listed in the guideline.</p>

<h2>Where Self-Audits Fit in Dubai's School Food Oversight</h2>

<p>Section 3.5.2 of the guideline sets out several layers of monitoring, and the Municipality added its own nutrition audits for the 2025-26 school year.</p>

<table>
  <thead>
    <tr><th>Layer</th><th>Who</th><th>What the source says</th></tr>
  </thead>
  <tbody>
    <tr><td>Self-monitoring for canteens</td><td>Food supplier's PIC</td><td>Monthly, covering food safety, nutrition and stakeholder engagement (Guideline 3.5.2)</td></tr>
    <tr><td>Self-monitoring for canteens</td><td>Educational institution's PIC</td><td>Every quarter (Guideline 3.5.2)</td></tr>
    <tr><td>Self-monitoring for production facilities</td><td>Food supplier</td><td>Checks food safety and nutrition compliance at the production facility. No frequency stated (Guideline 3.5.2)</td></tr>
    <tr><td>Food inspection</td><td>Dubai Municipality</td><td>Suppliers of ready-to-eat high-risk foods to schools should be treated as high risk and inspected at least once every six months (Guideline 3.5.2)</td></tr>
    <tr><td>Nutrition audits</td><td>Dubai Municipality</td><td>Introduced for 2025-26 to check canteen compliance with the guideline, as an additional safeguard to NutriCheck (Municipality announcement)</td></tr>
  </tbody>
</table>

<p>In November 2025, Khaleej Times reported that a Dubai Municipality assessment of more than 200 schools and over 7,000 food items found limited fruit options and some snacks that exceeded nutritional limits or contained restricted ingredients. A good monthly self-audit should catch problems like these first.</p>

<h3>Foodwatch, DM Checked and inspection grades</h3>

<p>The guideline refers to Foodwatch, Dubai Municipality's digital food safety platform. Gulf News has since described DM Checked as the revamped version of Food Watch, and reported in September 2025 that DM Checked is used to track canteen performance and approve school menus. You may see either name depending on when a document was written.</p>

<p>Dubai's food inspection grades run from A (excellent) to E (very poor), and the guideline requires an approved school food supplier to hold a verifiable grade of A or B. The grade comes from inspections. NutriCheck is a self-audit tool, and no public source says its results feed directly into the grade.</p>

<h2>The Nutrition in Charge and Person-in-Charge Roles</h2>

<p>The guideline uses Person-in-Charge (PIC). Launch coverage and the Municipality's training materials use Nutrition in Charge (NIC), a role Gulf News reported was modelled on the food safety PIC in food establishments. The My School Food supplier page lists NIC certification results for both technical experts and persons in charge.</p>

<h3>What the guideline requires of the supplier's canteen PIC</h3>

<p>Clause 3.2.1.2 lists a trained PIC as a condition for being an approved school food supplier. The PIC must:</p>

<ul>
<li>be designated and specifically assigned to the canteen in that educational institution</li>
<li>hold an active account on the Municipality's food safety platform (Foodwatch in the guideline text)</li>
<li>have completed formal training in both nutritional requirements and food safety practices</li>
<li>be present every shift</li>
<li>be one of several PICs where the institution has multiple food service areas or locations, because each needs its own</li>
</ul>

<h3>What the school's PIC does</h3>

<p>Under clause 3.2.1.5, school management must assign its own PIC who can identify, review and monitor food safety and nutrition requirements. Both the supplier's PIC and the school's PIC are named on the Supply Food To Educational Institutions Form, which is submitted with the weekly menus for approval (clause 3.2.2.3).</p>

<h3>Who can be the NIC?</h3>

<p>According to Gulf News's report on the Municipality's announcement, existing hygiene and food safety officers can take on the role, or another suitable person can. Coverage described the NIC's job as ensuring nutritional compliance, promoting healthy eating, monitoring food quality, addressing nutrition-related concerns and training canteen staff. The guideline we reviewed does not require a university degree in nutrition or dietetics. We also found no published rule allowing one NIC to cover several schools. The every-shift and separate-PIC requirements point the other way, so plan for enough trained people to cover every shift and every service point.</p>

<p>Dubai Municipality's 2025 NIC training programme had separate tracks for technical experts (nutritionists, hygiene managers, QA officers), senior school and supplier management, chefs and R&amp;D teams, and persons in charge of operations (canteen supervisors, school PICs, nurses). The operations track covered conducting and documenting self-audits in NutriCheck, carrying out corrective actions and keeping operational records.</p>

<p>Separately, section 3.5.1 of the guideline makes Basic Food Hygiene Training mandatory for all food handlers, and lists PIC and advanced PIC training among the relevant courses.</p>

<h2>A Monthly Self-Audit Preparation Checklist</h2>

<p>The official checklists are the ones inside NutriCheck and the My School Food Compliance Checklist that section 3.5.3 of the guideline points to on myschoolfood.com. Use those as the authority. The list below is only a preparation aid: every item traces back to a clause in the guideline, so you can confirm the canteen is ready before the NIC completes the official self-audit.</p>

<h3>Permits, approvals and supplier status</h3>

<ul>
<li>The trade licence is valid and explicitly lists the relevant activity, such as catering, bakery or manufacturing (3.2.1.2).</li>
<li>The food inspection grade is A or B, and there have been no major violations during the supply period (3.2.1.2, 3.2.2.1).</li>
<li>An independent third-party food safety audit is in place (3.2.1.2).</li>
<li>The Food Permit To Educational Institutions is valid, and only foods on the Approved Menu are being sold (3.2.1.3, 3.2.2.4).</li>
<li>The canteen and production facility layout and processes were approved by the Food Safety Department before supply started (3.2.2.1).</li>
<li>The Approved Menu and the weekly menu have been uploaded against the school's QR code on the platform (3.2.2.3).</li>
</ul>

<h3>People and training</h3>

<ul>
<li>A formally trained PIC is present on every shift, with a separate PIC for each additional food service area (3.2.1.2).</li>
<li>Every food handler has completed Basic Food Hygiene Training, and training records are on file (3.5.1).</li>
</ul>

<h3>Menu, nutrition data and labels</h3>

<ul>
<li>Nothing is on sale that is not on the Approved Menu. Any menu change has been approved by Dubai Municipality, and additional or reformulated items are approved only at the end of each term for the following term (3.2.1.3, 3.2.2.3).</li>
<li>Every product has a nutritional assessment based on its recipe, including ingredients and quantities. It was produced with nutrient analysis software, analysis from a Food Safety Department-approved laboratory, or manual calculation (3.2.2.5, 3.2.2.7).</li>
<li>Nutrition information was revalidated and re-approved after any change to a product, its ingredients, proportions or serving size (3.2.2.6).</li>
<li>Every menu item is verified and labelled per serving for calories, carbohydrates, saturated fat, sodium and added sugars. The fuller nutrient information set out in the guideline (per serving and per 100 grams) is available for all items (3.4.8).</li>
<li>Every menu item is classified under Smart Choices, and Daily Smart Choices (Green) items are always on the menu (3.3.2.1).</li>
</ul>

<h3>Allergens</h3>

<p>Clause 3.4.9 requires every meal to indicate any allergen present as a main ingredient, compound ingredient, additive or processing aid. Allergens must be labelled or declared on the menu however small the amount. The guideline lists nine allergen groups:</p>

<ul>
<li>crustaceans</li>
<li>peanuts</li>
<li>soybeans</li>
<li>tree nuts</li>
<li>sesame seeds</li>
<li>fish</li>
<li>eggs</li>
<li>milk</li>
<li>gluten and cereals containing gluten</li>
</ul>

<p>Each group includes its products. Check that every current menu item's declaration covers all nine groups and matches the ingredients actually in use this month.</p>

<h3>Food safety controls</h3>

<p>All food suppliers must follow the guideline's 10 Points To Food Safety (3.4.10), which are detailed in Part 2 of the guidelines:</p>

<ul>
<li>good personal hygiene</li>
<li>preventing the transmission of illness</li>
<li>supplier management</li>
<li>food safety controls</li>
<li>monitoring storage practices</li>
<li>evaluating the menu</li>
<li>pest management</li>
<li>cleaning and disinfection</li>
<li>waste management</li>
<li>allergen management</li>
</ul>

<p>Use them as the headings for the walk-through part of the monthly self-audit.</p>

<h3>School-side items for the institution's PIC</h3>

<ul>
<li>Enough cold storage is provided for lunch boxes not eaten within two hours (3.2.1.4).</li>
<li>The school is registered on the platform and the contracted approved supplier is linked (3.2.1.4).</li>
<li>No unapproved foods, such as orders from online delivery platforms, are on the premises during school hours (3.2.1.6).</li>
<li>The canteen menu is available to parents (3.2.1.9).</li>
<li>The school's quarterly self-monitoring is up to date (3.5.2).</li>
</ul>

<h2>Running the Monthly Self-Audit Well</h2>

<p>The guideline sets the frequency but not the method, so the following are practical habits rather than regulatory requirements.</p>

<p><strong>Fix an internal date.</strong> Use the same point each month for the supplier PIC's self-audit, and the same point each quarter for the school PIC's.</p>

<p><strong>Walk the floor, then check the files.</strong> Look at what is on the counter, in the fridges and in the vending machines before opening the paperwork. Unapproved items are easier to spot in person.</p>

<p><strong>Record what you find.</strong> Inspectors can see audit history, so an honest record with corrective actions is worth more than a perfect score that an inspection later contradicts. Log each issue, the fix, who made it and when, and re-check it next cycle.</p>

<p><strong>Watch recipe changes.</strong> A new ingredient brand or a bigger portion can change nutrition values and allergens. Clause 3.2.2.6 requires those changes to be revalidated and approved.</p>

<h2>Keeping Recipe Records Audit-Ready</h2>

<p>Several checklist items depend on recipe data being accurate and up to date: nutrition values per serving and per 100 grams, allergen declarations, and proof that labels were updated when a recipe changed. Nutrient analysis software is one of the calculation methods the guideline accepts. The results still need Dubai Municipality's approval, and the self-audit itself still belongs to your PIC.</p>

<p>RecipeBuilder is recipe management and labelling software built for food businesses in the UAE. It calculates nutrition from ingredient data sourced from USDA FoodData Central and flags allergens from each recipe's ingredients. It also produces bilingual English and Arabic labels, and keeps recipe versions organised, so the figures you submit and the figures on the counter come from the same record.</p>

<div class="blog-cta-box"><h3>Keep your canteen recipe data in one place</h3><p>RecipeBuilder helps school caterers calculate nutrition from USDA FoodData Central data, declare allergens from recipe ingredients, generate bilingual English/Arabic labels, and keep recipe records organised as menus change each term. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to see how it could fit your monthly self-audit preparation.</p></div>

<h2>Frequently Asked Questions</h2>

<h3>Is NutriCheck mandatory for Dubai school caterers?</h3>
<p>The guideline requires canteen self-monitoring monthly by the food supplier's PIC and quarterly by the school's PIC. Dubai Municipality presents NutriCheck as the platform for those self-audits, and Gulf News reported in June 2025 that catering companies supplying schools must register and undergo monthly audits. Access and onboarding arrangements can change, so confirm your current obligations with the Applied Nutrition and Awareness Section at nutrition@dm.gov.ae.</p>

<h3>Does the Nutrition in Charge need a nutrition or dietetics degree?</h3>
<p>We found no published degree requirement. The guideline requires the supplier's canteen PIC to have formal training in both nutritional requirements and food safety practices. Press coverage of the Municipality's announcement said existing hygiene and food safety officers can take on the NIC role. Dubai Municipality runs NIC training with certification, and results are published on the My School Food supplier page.</p>

<h3>Can one NIC or PIC cover several schools or canteens?</h3>
<p>The guideline points against it. It requires a PIC specifically assigned to the canteen in each educational institution, present every shift, with separate PICs for multiple food service areas or locations. We found no published provision for sharing one PIC across schools, so check with Dubai Municipality before planning cover that way.</p>

<h3>Does NutriCheck affect my food inspection grade?</h3>
<p>No public source links NutriCheck results to inspection grades. Grades from A to E come from Dubai Municipality food inspections, and approved school food suppliers need an A or B. Gulf News did report that inspectors can see each entity's audit history, so a poor or inaccurate self-audit record could still shape how an inspection goes.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/blog/dubai-municipality-school-food-requirements-caterers-guide">Dubai Municipality School Food Requirements: 2026 Guide for Caterers</a></li>
<li><a href="/blog/smart-food-choices-system-dubai-school-canteen">Dubai Smart Food Choices for Schools: Green, Amber, Red &amp; Black</a></li>
<li><a href="/blog/how-to-become-approved-school-food-supplier-dubai">How to Become an Approved School Food Supplier in Dubai (2026)</a></li>
<li><a href="/blog/uae-food-labeling-requirements-2026">UAE Food Labeling Requirements 2026: Standards, Dates and Penalties</a></li>
<li><a href="/school-catering-dubai">RecipeBuilder for Dubai School Catering</a></li>
<li><a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf">Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions (Dubai Municipality, PDF)</a></li>
<li><a href="https://myschoolfood.com/food-suppliers/">My School Food: resources for food suppliers</a></li>
</ul>
`,
  },
  {
    slug: "smart-food-choices-system-dubai-school-canteen",
    title: "Dubai Smart Food Choices for Schools: Green, Amber, Red & Black",
    description:
      "Dubai Municipality's Smart Choices tiers for school canteens: Daily, Sometimes, Seldom and Never, the published nutrient limits, and how to check a menu item.",
    date: "2026-03-14",
    updatedDate: "2026-09-14",
    category: "Compliance",
    readTime: "11 min read",
    keywords: [
      "Smart Food Choices Dubai",
      "Smart Choices classification Dubai school canteen",
      "Dubai Food and Nutrition Guidelines educational institutions",
      "Daily Sometimes Seldom Never Smart Choices",
      "green amber red black school food Dubai",
      "Dubai school canteen nutrient criteria",
      "banned foods school canteen Dubai",
      "My School Food Dubai Municipality",
      "school menu nutrition calculation per serving per 100g",
      "Dubai school canteen allergens",
    ],
    content: `
<p>Every menu item a caterer supplies to a private school in Dubai has to fit Dubai Municipality's Smart Choices classification, often called the Smart Food Choices system. The tier decides whether an item can be on the canteen menu every day, twice a week, once a month, or never.</p>

<p>This guide covers the four tiers under their official names, the nutrient limits published in the <em>Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions</em>, and a practical way to calculate a menu item's values and check it before you submit your menu.</p>

<div class="key-takeaways"><h3>Key Takeaways</h3><ul><li>The guideline defines four tiers: Daily Smart Choices (Green), Sometimes Smart Choices (Amber), Seldom Smart Choices (Red) and Never Smart Choices (Black). The second tier is officially Amber, even though some news coverage calls it yellow.</li><li>Menu items are checked against published limits for energy, total fat, saturated fat, sodium, added sugars and dietary fibre, both per serving and per 100 g.</li><li>Per-serving limits are adjusted by age group and kind of menu item, from 40% (snacks for 4 to 8 year olds) to 130% (full meal combos for 14 to 18 year olds).</li><li>Red items may be served 3 times every term or once per month. Black items must never be made available in any form.</li><li>Nutrition values must come from the recipe and be revalidated whenever ingredients, proportions or serving sizes change.</li><li>The guideline lists nine allergen groups that must be labelled or declared on the menu.</li></ul></div>

<h2>What the Smart Choices Classification Is</h2>

<p>The classification is set out in clause 3.3.2.1 of the <a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf">Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions</a>. The document was prepared by the Applied Nutrition and Awareness Section of Dubai Municipality's Food Safety Department and revises DM's 2016 school guidelines. It underpins <a href="https://myschoolfood.com/">My School Food</a>, the municipality's school nutrition program. The copy on the My School Food portal has a cover date of 2 August 2024, so check the portal for later revisions before relying on specific values.</p>

<p>The guideline applies to food suppliers and canteens serving private school students aged 4 to 18. It also covers vending machines, student cafés, events and fundraisers, and canteens in nurseries, universities and colleges. Prepared, ready-to-eat and pre-packaged foods are all included. "Shall" and "must" mark mandatory requirements, and "should" marks strongly recommended ones.</p>

<p>A note on names: a September 2025 Dubai Municipality news release and some press coverage say green, yellow, red and black. The guideline itself uses Amber, and that is the term to use on menus, signage and in staff training.</p>

<h2>The Four Tiers at a Glance</h2>

<table>
  <thead>
    <tr><th>Colour</th><th>Official name</th><th>Frequency on the canteen menu</th><th>Examples given in the guideline</th></tr>
  </thead>
  <tbody>
    <tr><td>Green</td><td>Daily Smart Choices</td><td>Always on the menu</td><td>Fruits, vegetables, whole grains, lean proteins, low fat dairy, healthy fats, water</td></tr>
    <tr><td>Amber</td><td>Sometimes Smart Choices (Basic Amber)</td><td>Twice a week</td><td>Muffins without frosting, baked savoury snacks such as crackers, full fat yogurt and laban</td></tr>
    <tr><td>Light Amber</td><td>Sometimes Smart + Choices</td><td>Once a week, alongside basic Sometimes options, in smaller portions</td><td>Whole-wheat baked goods without frosting, low-fat yogurt with fruit</td></tr>
    <tr><td>Red</td><td>Seldom Smart Choices</td><td>Once a month (see below)</td><td>Baked goods with frosting, baked donuts, ice cream</td></tr>
    <tr><td>Black</td><td>Never Smart Choices</td><td>Not allowed as an ingredient or menu item</td><td>Non-halal products, added protein supplements, artificial sweeteners, deep-fried food, confectionery, sugary drinks, energy drinks, processed meats</td></tr>
  </tbody>
</table>

<h3>Green and Amber</h3>

<p>Daily items are described as highly nutritious and low in saturated fat, added sugars and sodium. The guideline recommends placing them at eye level in the main serving area. Basic Amber items are moderately healthy but may be slightly higher in added sugars, saturated fat or sodium, and should not be placed at eye level or beside Green choices.</p>

<p>Sometimes Smart + (Light Amber) items sit closer to Green and may use whole grains, vegetables, healthy fats or fruit as the main ingredient (50%). The guideline says they may have one more nutrient at amber values on the per-100 g criteria (other than total fat and sodium), whereas basic Sometimes items may have two more.</p>

<h3>Red: Seldom Smart Choices</h3>

<p>Red items are restricted treats. The tier description gives a frequency of once a month. Clause 3.3.2.5 adds that items exceeding the nutrient criteria and falling under Red "shall be served 3 times every term or once per month". The guideline recommends serving them outside the main serving area or on designated treat days, in smaller portions.</p>

<p>Clause 3.4.2 lists Restricted Foods that may not be displayed, sold or promoted unless approved under the classification. The list includes high-fat or high-sodium packaged savoury snacks, sugary bakery products, high-salt foods and condiments, high-fat dressings, desserts and caffeinated drinks. Each has conditional exemptions. For example, a savoury snack must be limited to 40 grams, not deep-fried, a source of fibre, and low or medium in fat and sodium. A bakery product must be limited to 60 grams with no frosting or icing.</p>

<h3>Black: Never Smart Choices</h3>

<p>Never items must not be made available in any form or at any event (clause 3.3.2.6). Clause 3.4.3 lists the following with no exemptions:</p>

<ul>
<li>artificial sweeteners and salt substitutes</li>
<li>foods or drinks with added protein supplements</li>
<li>non-halal foods, including at staff and parent events</li>
<li>processed meats such as deli meats, hot dogs, mortadella, and commercially processed burgers and nuggets</li>
<li>confectionery</li>
<li>highly sweetened drinks such as soft drinks, sports drinks and flavoured water</li>
</ul>

<p>Chocolate is allowed only as 200 ml chocolate milk or hot chocolate that is low in added sugars, or as cacao in baked goods based on fruit, vegetables or legumes. Deep-fried foods are allowed only if baked instead and low in fat or sodium.</p>

<p>Vending machines must not sell Seldom or Never items (clause 3.4.4). Other food access points, including staff areas, events and after-school programs, must include nothing from those tiers (clause 3.4.5).</p>

<h2>The Published Nutrient Limits</h2>

<p>Clause 3.3.2.2 requires each menu item to comply with the criteria for calories, total fat, saturated fat, added sugars, sodium and fibre. The same table appears in Annex 16.</p>

<table>
  <thead>
    <tr><th>Nutrient</th><th>Green per serving</th><th>Amber per serving</th><th>Red per serving</th><th>Green per 100 g</th><th>Amber per 100 g</th><th>Red per 100 g</th></tr>
  </thead>
  <tbody>
    <tr><td>Energy</td><td>500</td><td>600</td><td>&gt; 600</td><td>120</td><td>500</td><td>&gt; 500</td></tr>
    <tr><td>Total fat</td><td>19.5</td><td>23</td><td>&gt; 23</td><td>3</td><td>17.5</td><td>&gt; 17.5</td></tr>
    <tr><td>Saturated fat</td><td>5</td><td>6</td><td>&gt; 6</td><td>1.5</td><td>5</td><td>&gt; 5</td></tr>
    <tr><td>Sodium</td><td>600</td><td>700</td><td>&gt; 700</td><td>120</td><td>600</td><td>&gt; 600</td></tr>
    <tr><td>Added sugars</td><td>6.75</td><td>9</td><td>&gt; 9</td><td>5.75</td><td>11.25</td><td>&gt; 11.25</td></tr>
    <tr><td>Dietary fibre</td><td>2.8</td><td>2.52</td><td>&lt; 2.52</td><td>3</td><td>2</td><td>&lt; 2</td></tr>
  </tbody>
</table>

<p><em>Source: Smart Choices Nutrient Criteria Table, clause 3.3.2.2 and Annex 16. The table does not print units. Energy is normally read in kilocalories (the unit in the guideline's labelling clause), fat, sugars and fibre in grams, and sodium in milligrams. For borderline items, confirm with DM's Applied Nutrition and Awareness Section at nutrition@dm.gov.ae.</em></p>

<p>For energy, fats, sodium and added sugars, the Green and Amber columns are ceilings, and anything above the Amber value is Red. Fibre works the other way: less fibre moves an item towards Red.</p>

<h3>Per Serving and Per 100 g Both Count</h3>

<p>Clause 3.3.2.3 requires the criteria to be met both per 100 grams and per serving, with the per-serving baseline adjusted for the kind of menu item and the age group. The guideline's Annex 18 infographic describes restricted items as those that exceed the amber criteria per 100 g and/or per serving. Check every nutrient on both bases.</p>

<h3>Age-Group Percentages</h3>

<p>Clause 3.3.2.4 sets the percentages applied to the per-serving criteria for schools:</p>

<table>
  <thead>
    <tr><th>Age group</th><th>Main dish</th><th>Main dish combo</th><th>Full meal combo</th><th>Entrée snacks</th><th>Snacks</th></tr>
  </thead>
  <tbody>
    <tr><td>4-8 years (Small)</td><td>70%</td><td>80%</td><td>100%</td><td>40%</td><td>40%</td></tr>
    <tr><td>9-13 years (Medium)</td><td>90%</td><td>100%</td><td>120%</td><td>70%</td><td>70%</td></tr>
    <tr><td>14-18 years / University (Large)</td><td>100%</td><td>110%</td><td>130%</td><td>Not listed</td><td>Not listed</td></tr>
  </tbody>
</table>

<p>A separate table covers nurseries. The percentages are applied through the Supply Food To Educational Institutions Form once the kind of menu item is selected. As we read it, a main dish for 4 to 8 year olds would be assessed against 70% of the per-serving baseline, which is 350 for Green energy. Treat the form as the authority.</p>

<h3>Food Types and Beverages</h3>

<p>Clause 3.3.1.3 sets item weight limits: 40 g for pre-packaged products, 60 g for bakery and dessert items, 100 g for other savoury foods, and no fixed limit for catered mains. Drinks must meet the Simplified Beverage Criteria in Annex 17. For example, school juices are 200 ml of 100% juice with no added sugars, and plain water has no volume restriction. Coffee and tea may be served only to G11-12 / Y12-13 students, up to 240 ml, in a designated area.</p>

<h2>How to Calculate a Menu Item's Values</h2>

<p>Clause 3.2.2.5 requires nutrition to be assessed from the recipe, including ingredients and quantities. Clause 3.2.2.7 allows nutrient analysis software, a DM-approved laboratory, or manual calculation from known ingredient values. The procedure below works for a manual calculation or for checking your software's output.</p>

<h3>Step 1: Define the Menu Item</h3>
<p>Record the kind of menu item (main dish, combo, entrée snack, snack or beverage), its food type, serving size and age group. For mains and combos, each component (protein, grains, vegetables, side) is declared per 100 g before the item is evaluated as a whole.</p>

<h3>Step 2: Standardise the Recipe by Weight</h3>
<p>List every ingredient in grams as used, including cooking oil, sauces, stock and seasoning. Estimated oil and salt are the most common cause of misclassification.</p>

<h3>Step 3: Calculate Batch Totals</h3>
<p>For each ingredient, multiply its nutrient value per 100 g by the grams used and divide by 100. Add the results to get batch totals for all six nutrients of concern.</p>

<h3>Step 4: Convert to Per 100 g Using the Finished Weight</h3>
<p>Weigh the cooked batch. Divide each total by the finished weight and multiply by 100. Cooking changes weight, so raw weights misstate the concentration.</p>

<h3>Step 5: Calculate Per Serving</h3>
<p>Multiply each per-100 g value by the serving weight and divide by 100.</p>

<h3>Step 6: Compare Against Both Criteria Tables</h3>
<p>Check each nutrient against the per-100 g table and the age-adjusted per-serving criteria, then against the Restricted and Never lists and the weight limits. Because Light Amber depends on how many nutrients reach amber values, check all six, not just calories.</p>
<p>Hypothetical example: a vegetable pasta bake batch contains 6,000 mg of sodium and weighs 5,000 g cooked. That is 120 mg per 100 g, and 300 mg in a 250 g serving. The per-100 g value equals the Green figure of 120, and the per-serving value is below the 600 baseline. Repeat for the other five nutrients before assigning a tier.</p>

<h3>Step 7: Revalidate When Anything Changes</h3>
<p>Nutrition information must be revalidated and re-approved when ingredients, proportions or serving sizes change (clause 3.2.2.6). Reformulated items are approved only at the end of each term, for the following term (clause 3.2.2.3). Menus rotate at least four weekly cycles, submitted in 4-week batches (clause 3.3.1.1).</p>

<h2>Labelling, Allergens and Monitoring</h2>

<p>Clause 3.4.8 requires each menu item sold on the premises to be verified and labelled per serving for calories, carbohydrates, saturated fat, sodium and added sugars. A fuller panel, per serving and per 100 g, adds fibre, protein, total fat, vitamin D and iron.</p>

<p>Clause 3.4.9 requires allergens to be labelled or declared on the menu no matter how small the amount. It lists nine groups, each including their products: crustaceans, peanuts, soybeans, tree nuts, sesame, fish, egg, milk, and gluten-containing cereals. Pre-packaged foods must also meet UAE labelling rules; see our <a href="/blog/uae-food-labeling-requirements-2026">UAE food labelling guide</a>.</p>

<p>Under clause 3.5.2, the food supplier's person-in-charge carries out canteen self-monitoring monthly and the school's person-in-charge quarterly. In a September 2025 release, Dubai Municipality said its inspectors cover 456 educational institutions a year. Annex 20 also sets a phased schedule of red, amber and green targets running to the 2027-2028 academic year, shifting menus towards Green items.</p>

<h2>Keeping Classifications Accurate with RecipeBuilder</h2>

<p>The hard part is keeping per-serving and per-100 g values right across a rotating four-week menu. A new supplier, a different oil or a larger scoop can move an item from Green to Amber without anyone noticing. <a href="/recipe-management">RecipeBuilder</a> calculates nutrition at recipe level from your ingredient weights and serving sizes. You can check each item against the published limits and recalculate when a recipe changes.</p>

<div class="blog-cta-box"><h3>Check Your Canteen Menu Against the Smart Choices Limits</h3><p>RecipeBuilder calculates nutrition from USDA FoodData Central data, gives per-serving and per-100g values, records allergen declarations and produces bilingual English/Arabic labels, so you can check each menu item against Dubai Municipality's published criteria before you submit. <a href="https://cal.com/talal-bazerbachi-jb8a7d/recipebuilder-discovery-call">Book a call</a> to walk through your school menu.</p></div>

<h2>Frequently Asked Questions</h2>

<h3>Is the second Smart Choices tier yellow or amber?</h3>
<p>Dubai Municipality's guideline names it Sometimes Smart Choices (Amber), with a Sometimes Smart + (Light Amber) sub-level. Some news releases and press coverage say yellow, but the guideline uses Amber, so use that on menus and signage.</p>

<h3>How often can Red (Seldom Smart Choices) items be served?</h3>
<p>Clause 3.3.2.5 says Red items shall be served 3 times every term or once per month, and the tier description gives once a month. Red items must not be sold in vending machines or at other food access points such as events.</p>

<h3>Do the Smart Choices limits apply per serving or per 100 g?</h3>
<p>Both. Clause 3.3.2.3 requires items to meet the criteria per 100 grams and per serving, with the per-serving baseline adjusted by age group and kind of menu item. Exceeding amber values on either basis makes an item restricted.</p>

<h3>Which allergens must be declared on Dubai school canteen menus?</h3>
<p>The guideline lists nine allergen groups: crustaceans, peanuts, soybeans, tree nuts, sesame, fish, egg, milk and gluten-containing cereals, each including their products. They must be labelled or declared on the menu however small the amount.</p>

<h3>Related Resources</h3>
<ul>
<li><a href="/blog/dubai-municipality-school-food-requirements-caterers-guide">Dubai Municipality School Food Requirements: 2026 Guide for Caterers</a></li>
<li><a href="/blog/how-to-become-approved-school-food-supplier-dubai">How to Become an Approved School Food Supplier in Dubai (2026)</a></li>
<li><a href="/blog/nutri-check-dubai-school-canteen-compliance-guide">NutriCheck and Nutrition in Charge: Dubai School Canteen Self-Audits</a></li>
<li><a href="/blog/uae-food-labeling-requirements-2026">UAE Food Labeling Requirements 2026: Standards, Dates and Penalties</a></li>
<li><a href="/school-catering-dubai">RecipeBuilder for Dubai School Caterers</a></li>
<li><a href="https://myschoolfood.com/wp-content/uploads/2025/11/Dubai-Food-Nutrition-Guidelines-and-Requirements.pdf">Dubai Food and Nutrition Guidelines and Requirements in Educational Institutions (PDF)</a></li>
</ul>
`,
  },
];
