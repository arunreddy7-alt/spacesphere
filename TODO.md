# Mobile Layout Modification Plan for "What We Offer" Section

## Task Overview
Change the sequence to "card then image" for mobile version only, keeping desktop version unchanged in the "what we offer" section.

## Current Structure Analysis
- Section: `<section id="what-we-offer" ref={timelineSectionRef} className="what-we-offer">`
- Layout: 5 timeline steps with alternating card/image positions
- Each step contains: card container, timeline node, image container
- Desktop: Steps alternate between (Card | Node | Image) and (Image | Node | Card)
- Mobile: Need to change to sequential (Card then Image) layout

## Plan
1. **Identify Current Step Structure**: Each step has flex layout with card and image containers
2. **Add Mobile-Specific CSS Classes**: Create responsive layout classes
3. **Modify Layout Logic**: 
   - Desktop: Keep current alternating layout (card | node | image)
   - Mobile: Stack card first, then image (card then image sequence)
4. **Update CSS**: Add mobile-specific styling for stacked layout
5. **Test Responsiveness**: Ensure desktop unchanged, mobile shows new sequence

## Implementation Steps
1. Examine current timeline step structure in detail
2. Create mobile-responsive CSS classes
3. Modify the step layout logic
4. Test the changes

## Expected Outcome
- Desktop: Unchanged (alternating card/image layout)
- Mobile: Card followed by image in each step
