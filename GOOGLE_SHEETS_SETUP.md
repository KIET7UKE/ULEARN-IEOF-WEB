# Google Sheets Integration Setup Guide
##
## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "IEOF Registration Data"
4. Set up the following columns in Row 1:
   - A1: Timestamp
   - B1: Student Name
   - C1: Parent Name
   - D1: Email
   - E1: Phone
   - F1: Grade
   - G1: School Name
   - H1: Location
   - I1: Address
   - J1: Enquiry Type
   - K1: Source

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Delete the default code and paste the following:

\`\`\`javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.parentName || '',
      data.email || '',
      data.phone || '',
      data.grade || '',
      data.schoolName || '',
      data.location || '',
      data.address || '',
      data.enquiryType || 'registration',
      data.source || 'IEOF Website'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('IEOF Registration API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
\`\`\`

## Step 3: Deploy the Script

1. Click on `Deploy` > `New deployment`
2. Choose type: `Web app`
3. Set the following:
   - Description: "IEOF Registration Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click `Deploy`
5. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update the Website Code

1. In the `components/registration-modal.tsx` file, replace `YOUR_SCRIPT_ID` with your actual script ID from the URL
2. The line should look like:
   \`\`\`typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec"
   \`\`\`

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the Apps Script logs in the Google Apps Script editor

## Security Notes

- The script is set to "Anyone" access for simplicity, but you can restrict it further if needed
- Consider adding validation and sanitization in the Apps Script for production use
- You may want to add email notifications when new registrations are received

## Email Notifications (Optional)

To get email notifications for new registrations, add this to your Apps Script:

\`\`\`javascript
// Add this after sheet.appendRow(rowData);
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New IEOF Registration',
  body: `New registration received:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nGrade: ${data.grade}\nSchool: ${data.schoolName}`
});
