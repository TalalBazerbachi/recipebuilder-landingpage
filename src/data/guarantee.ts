/**
 * "Approved or your money back" guarantee: the single source for its terms.
 *
 * Rendered in full on /food-labeling (#approval-guarantee, the Google Ads
 * landing page) and in the Terms of Service. Blog posts link to the
 * /food-labeling anchor instead of restating the terms.
 *
 * Google Ads requires an advertised offer's conditions to be visible on the
 * landing page, so change the terms here, never in a single page.
 */

export const GUARANTEE_ANCHOR = "approval-guarantee";
export const GUARANTEE_URL = `/food-labeling#${GUARANTEE_ANCHOR}`;

export const guarantee = {
  name: "Approved or Your Money Back",
  authority: "Dubai Municipality",
  summary:
    "If Dubai Municipality rejects a label you made in RecipeBuilder, we revise it based on their feedback as many times as it takes. If it still isn't approved, we refund your subscription fee in full.",
  promises: [
    "Unlimited label revisions based on Dubai Municipality's written feedback, until the label is approved.",
    "If Dubai Municipality still rejects the label after you have resubmitted every revision we provided, we refund the subscription fee you paid for the current annual term, in full.",
  ],
  conditions: [
    "You have an active paid annual subscription.",
    "The label was generated in RecipeBuilder and submitted to Dubai Municipality without changes made outside the platform.",
    "The product information you entered (ingredients, quantities, supplier specifications, net quantity, dates, manufacturer and origin details) is accurate and complete.",
    "You send us the rejection notice and the reviewer's feedback within 14 days of receiving it, and resubmit each revised label we provide.",
  ],
  exclusions: [
    "Rejections caused by the product rather than the label, such as a formulation that exceeds UAE limits, a non-permitted ingredient or additive, or laboratory test results.",
    "Rejections for reasons other than label content, such as missing documents, licences, fees, company or facility registration, or consignment issues.",
    "Health, nutrition or other claims that need separate approval or supporting evidence.",
    "Authorities other than Dubai Municipality.",
  ],
  claim:
    "To claim, email talal@bytebeam.co with the rejection notices and Dubai Municipality's feedback. We confirm eligibility within 10 business days and pay approved refunds within 30 days to the original payment method. A refund ends the subscription it covers, and one refund applies per annual term.",
} as const;
