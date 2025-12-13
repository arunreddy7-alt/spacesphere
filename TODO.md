# Navigation Bar Background Color Change Plan

## Task: Change nav bar background from black to light color after scrolling

## Information Gathered:
- Current implementation uses `bg-black/95` and `rgba(0, 0, 0, 0.95)` when scrolled
- Navigation has white text for contrast with black background
- Sticky header appears when scroll position > 100px
- Both top header and sticky header need consistent styling

## Plan:
1. Update the sticky header background color from black to light color (white/off-white)
2. Change text colors from white to dark for proper contrast
3. Update both CSS classes and inline styles for consistency
4. Ensure smooth transition and good visual hierarchy

## Changes Required:
### File: app/page.js
- Update background color from black to white/light gray
- Change text color from white to dark (#1a1a1a or similar)
- Update both the header that appears on scroll and the hero header for consistency

## Light Color Options:
- Pure white: `rgba(255, 255, 255, 0.95)`
- Off-white: `rgba(248, 250, 252, 0.95)` 
- Light gray: `rgba(241, 245, 249, 0.95)`

## Followup Steps:
- Test the color change visually
- Ensure text contrast meets accessibility standards
- Verify smooth transitions work properly
