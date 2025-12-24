# Updated Form Implementation Plan

## Task
Add another form for consultation buttons (excluding schedule visit buttons and "Explore Estate" button).

## Buttons to Update with New Form
1. **Hero section**: "Book a Private Consultation" button
2. **Contact section**: "Book a Private Consultation" button

## Buttons to Keep Existing Modal
1. **Hero section**: "Schedule Site Visit" button
2. **About section**: "Schedule a Site Experience" button  
3. **Featured Premium Properties**: "Schedule Visit" button
4. **Featured Premium Properties**: "Explore Estate" button (no changes needed)
5. **Contact section**: "Schedule a Site Experience" button

## Implementation Steps

### 1. Create New Inquiry Form
- Add new form state: `isInquiryModalOpen`
- Create inquiry form with fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (required)
  - Project Interest (dropdown)
  - Budget Range (dropdown)
  - Message (optional)

### 2. Update Button Handlers
- Change consultation buttons to open new inquiry form
- Keep schedule visit buttons using existing modal logic

### 3. Form Features
- Responsive design matching existing style
- Form validation
- Success message after submission
- Form reset functionality
