# Mobile Layout Modification Plan for "What We Offer" Section

## Current Structure Analysis
The section contains 5 timeline steps with alternating layouts:
- **Step 1**: Card | Timeline Node | Image
- **Step 2**: Image | Timeline Node | Card  
- **Step 3**: Card | Timeline Node | Image
- **Step 4**: Image | Timeline Node | Card
- **Step 5**: Card | Timeline Node | Image

Each step uses `display: 'flex'` with:
- `flex: '1'` for card containers (left/right)
- Central timeline node with 16px width
- Card containers have `paddingRight: '50px'` or `paddingLeft: '50px'`

## Mobile Layout Requirements
**Target**: Change sequence to "card then image" for mobile only
- **Desktop**: Keep current alternating layout unchanged
- **Mobile**: Stack card first, then image (remove alternating pattern)

## Implementation Plan

### Step 1: Add Mobile CSS Classes
Create responsive CSS classes for mobile layout in `app/globals.css`:
```css
/* Mobile timeline layout - card then image */
@media (max-width: 768px) {
  .timeline-step-mobile {
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 20px !important;
  }
  
  .timeline-step-mobile .timeline-card {
    position: relative !important;
    margin: 0 !important;
    max-width: 100% !important;
  }
  
  .timeline-step-mobile .timeline-image {
    position: relative !important;
    margin: 0 !important;
    max-width: 100% !important;
  }
  
  /* Hide timeline nodes on mobile */
  .timeline-step-mobile .timeline-node {
    display: none !important;
  }
}
```

### Step 2: Modify React Components
Update each timeline step to use conditional classes:
- Add `className` with responsive classes
- Apply `timeline-step-mobile` for mobile layout
- Keep existing `timeline-step` for desktop

### Step 3: Apply Consistent Mobile Sequence
For all 5 steps, ensure mobile shows:
1. Card first
2. Image second
3. Remove alternating pattern

## Expected Results
- **Desktop**: Unchanged alternating layout (Step 1: Card|Node|Image, Step 2: Image|Node|Card, etc.)
- **Mobile**: All steps show Card → Image sequence
- **Timeline nodes**: Hidden on mobile for cleaner layout
- **Spacing**: Optimized for mobile viewing

## Files to Modify
1. `app/page.js` - Update timeline step components
2. `app/globals.css` - Add mobile responsive styles
