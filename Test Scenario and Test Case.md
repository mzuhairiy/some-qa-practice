## Feature
As a user, I want to create a public gist. <br />
(To create a public gist, user must create a GitHub's account first.)

### Test Scenario (Positive)
Verify that User can Sign Up with correct terms.
### Test Case
Given User has successfully access the URL https://gist.github.com/ <br />
And User should see Sign Up button. <br />
When User clicks Sign Up button. <br />
Then User should directed to Join GitHub page. <br />
When User filled the Username form with "mzuhairiy". <br />
And User filled the Email address with "atasnamazuhair@gmail.com". <br />
And User filled the Password with correct terms. <br />
And User clicks the checkbox of Email preferences. <br />
And User has successfully verify the account with verification challenge. <br />
And User has clicks the Create account button. <br />
Then User should directed to Launch page. <br />
And User should received Launch Code at Email. <br />
When User filled the form with correct Launch Code. <br />
Then User should see "Welcome to GitHub" text. <br />
And User should see "Skip personalization" hyperlink text. <br />
When User clicks "Skip personalization" hyperlink text. <br />
Then User should directed to the URL https://gist.github.com/ <br />

### Test Scenario (Negative)
Verify that User can not Sign Up with incorrect terms.
### Test Case
Given User has successfully access the URL https://gist.github.com/ <br />
And User should see Sign Up button. <br />
When User clicks Sign Up button. <br />
Then User should directed to Join GitHub page. <br />
When User filled the Username form with "mzuhairiy". <br />
Then Warning "username mzuhairiy is not avaliable" should appear. <br />
And User should see suggestion for the username. <br />
When User filled the Email address with "atasnamazuhair@gmail.com". <br />
Then Warning "Email is invalid or already taken" should appear. <br />
When User filled the Password with incorrect terms. <br />
Then Warning "Password is too short (minimum is 8 characters), needs at least 1 lowercase letter, and is in a list of passwords commonly used on other websites" should appear. <br />
When User failed to verify the account with verification challenge. <br />
Then Warning "Whoops! That's not quite right" should appear. <br />
And User should see Try Again button. <br />

### Test Scenario (Positive)
Verify that User can Sign In with correct credential
### Test Case
Given User has successfully access the URL https://gist.github.com/ <br />
And User should see Sign In button. <br />
When User clicks Sign In button. <br />
Then User should directed to Sign In page. <br />
And User should see "Sign in to GitHub to continue to Gist" text. <br />
When User filled the Username or email address form with correct credential. <br />
And User filled the Password form with correct credential. <br />
And User clicks the Sign in button. <br />
Then User directed to Discover gist page. <br />
And User should see Discover gist text. <br />

### Test Scenario (Negative)
Verify that User can not Sign In with incorrect credential.
### Test Case
Given User has successfully access the URL https://gist.github.com/ <br />
And User should see Sign In button. <br />
When User clicks Sign In button. <br />
Then User should directed to Sign In page. <br />
And User should see "Sign in to GitHub to continue to Gist" text. <br />
When User filled the Username or email address form with incorrect credential. <br />
And User filled the Password form with incorrect credential. <br />
And User clicks the Sign in button. <br />
Then Warning "Incorrect username or password." should appear. <br />

### Test Scenario (Positive)
Verify that User able to create a public gist with JavaScipt (.js) extension.
### Test Case
Given User has successfully login and directed to the URL https://gist.github.com/ <br />
When User clicks the "+" navigation bar. <br />
Then User should see "Create secret gist" button. <br />
When User filled the Gist description form with "This is a description." <br />
And User filled the Filename form with name and extension type "Plato.js" <br />
And User filled the text area with "I wanna create a public gist" <br />
When User clicks the select menu button. <br />
And User clicks the "Create public gist". <br />
And User should see the "Create public gist" button. <br />
When User clicks the "Create public gist" button. <br />
And User directed to the File page. <br />

### Test Scenario (Positive)
Verify that User able to create a public gist with Markdown (.md) extension.
### Test Case
Given User has successfully login and directed to the URL https://gist.github.com/ <br />
When User clicks the "+" navigation bar. <br />
Then User should see "Create secret gist" button. <br />
When User filled the Gist description form with "This is a description." <br />
And User filled the Filename form with name and extension type "Plato.md" <br />
Then User should see "<>Edit new file" button. <br />
And User should see "Preview" button. <br />
When User filled the text area with "I wanna create a public gist" <br />
And User clicks the select menu button. <br />
And User clicks the "Create public gist". <br />
And User should see the "Create public gist" button. <br />
When User clicks the "Create public gist" button. <br />
And User directed to the File page. <br />

### Test Scenario (Positive)
Verify that User able to create a public gist with Text (.txt) extension.
### Test Case
Given User has successfully login and directed to the URL https://gist.github.com/ <br />
When User clicks the "+" navigation bar. <br />
Then User should see "Create secret gist" button. <br />
When User filled the Gist description form with "This is a description." <br />
And User filled the Filename form with name and extension type "Plato.txt" <br />
And User filled the text area with "I wanna create a public gist" <br />
When User clicks the select menu button. <br />
And User clicks the "Create public gist". <br />
And User should see the "Create public gist" button. <br />
When User clicks the "Create public gist" button. <br />
And User directed to the File page. <br />

### Test Scenario (Negative)
Verify that User unable to create a public gist.
### Test Case
Given User has successfully login and directed to the URL https://gist.github.com/ <br />
When User clicks the "+" navigation bar. <br />
Then User should see "Instantly share code, notes, and snippets." text. <br />
And User should see "Create secret gist" button. <br />
When User not filled the Gist description form. <br />
And User not filled the Filename form with name and extension type. <br />
And User not filled the text area. <br />
When User clicks the select menu button. <br />
And User clicks the "Create public gist". <br />
And User should see the "Create public gist" button. <br />
When User clicks the "Create public gist" button. <br />
Then The warning "Contents can't be empty" is appear. <br />

## Feature
As a user, I want to edit an existing gist. <br />
### Test Scenario (Negative)
Verify that User can edit an existing gist.
### Test Case
Given User has successfully login and directed to the URL https://gist.github.com/ <br />
And User has successfully created a gist. <br />
Then User should see his gist file <br />
And User should see "View your gist" hyperlink text. <br />
When User clicks the "View your gist" hyperlink text. <br />
Then User should directed to the profile page. <br />
And User should see "All gist" hyperlink text. <br />
And User should see the gist name followed by the extension. <br />
When User clicks the gist name. <br />
Then User directed to the File page. <br />
And User should see the Edit button. <br />
And User should see the Delete button. <br />
When User clicks the Edit button. <br />
Then User should directed to the Editing page. <br />
And User should see the "Editing" text. <br />
And User should see the Update public gist button. <br />
When User filled the text area with "Edit". <br />
And User clicks the Update public gist button. <br />
Then User directed to the File page. <br />
And User should see the Revisions button. <br />
When User clicks the Revisions button. <br />
Then User should directed to the Revisions page. <br />
And User should see "revised this gist" text. <br />
Then User has successfully edited an existing gist. <br />

## Feature
As a user, I want to delete an existing gist. <br />
### Test Scenario (Negative)
Verify that User can delete an existing gist.
### Test Case
Given User has successfully login and directed to the URL https://gist.github.com/ <br />
And User has successfully created a gist. <br />
Then User should see his gist file <br />
And User should see "View your gist" hyperlink text. <br />
When User clicks the "View your gist" hyperlink text. <br />
Then User should directed to the profile page. <br />
And User should see "All gist" hyperlink text. <br />
And User should see the gist name followed by the extension. <br />
When User clicks the gist name. <br />
Then User directed to the File page. <br />
And User should see the Delete button. <br />
When User clicks the Edit button. <br />
Then The warning "Are you positive you want to delete this Gist?" pop up is appear. <br />
And User should see the OK button. <br />
And User should see the Cancel button. <br />
When User clicks the OK button. <br />
Then User directed to "Your gist" page. <br />
And User should see the alert of "Gist deleted successfully." <br />
