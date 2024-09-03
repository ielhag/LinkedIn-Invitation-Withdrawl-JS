# LinkedIn Invitation Withdrawal Script

## Description

This script automates the process of withdrawing sent LinkedIn invitations. It navigates through your sent invitations, clicks the "Withdraw invitation" button for each one, and handles the confirmation modal that appears.

## Features

- Automatically finds and clicks "Withdraw invitation" buttons
- Handles confirmation modals
- Continues to search for more invitations until none are left
- Provides console logging for progress tracking

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Access to the LinkedIn website
- Basic knowledge of how to use browser developer tools

## Usage

1. Log in to your LinkedIn account.
2. Navigate to your sent invitations page.
3. Open your browser's developer console:
   - Chrome/Edge: Press F12 or right-click and select "Inspect", then click on the "Console" tab.
   - Firefox: Press F12 or right-click and select "Inspect Element", then click on the "Console" tab.
4. Copy the entire script and paste it into the console.
5. Press Enter to run the script.

The script will start running automatically. You'll see progress messages in the console.

## How It Works

1. The script finds all "Withdraw invitation" buttons on the current page.
2. It clicks each button one by one.
3. When the confirmation modal appears, the script clicks the "Withdraw" button.
4. After processing all invitations on the current page, it searches for more.
5. The process repeats until no more invitations are found.

## Important Considerations

- **Use at Your Own Risk**: Automating actions on LinkedIn may violate their terms of service. Be aware of potential consequences.
- **Rate Limiting**: The script includes delays to avoid triggering rate limits, but LinkedIn may still detect unusual activity.
- **Changes to LinkedIn**: LinkedIn may update their website structure, potentially breaking this script. Always review and test before using.
- **Irreversible Actions**: Withdrawing invitations cannot be undone. Make sure you want to withdraw all found invitations.

## Troubleshooting

If the script doesn't work as expected:
1. Check the console for error messages.
2. Ensure you're on the correct LinkedIn page (sent invitations).
3. Verify that LinkedIn hasn't changed their page structure.
4. Try refreshing the page and running the script again.

## Customization

You can modify the script to change:
- The delay between actions (search for `setTimeout` in the code)
- The console log messages
- The selectors used to find buttons (if LinkedIn changes their structure)

## Disclaimer

This script is provided for educational purposes only. The authors are not responsible for any misuse or any consequences resulting from the use of this script. Always respect website terms of service and use automation responsibly.

## Contributing

Feel free to fork this script and submit pull requests with improvements or open issues if you find any bugs.

## License

This script is released under the MIT License. See the LICENSE file for details.