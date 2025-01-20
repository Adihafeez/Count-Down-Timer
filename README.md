# Countdown Timer

This is a web-based countdown timer project that allows users to set a countdown timer and watch the time tick down in real-time. The timer includes input fields for days, hours, minutes, and seconds, and has a responsive design.

## Features
- **Responsive Design**: Works across different screen sizes, including mobile and desktop.
- **Customizable Timer**: Users can set the countdown time in days, hours, minutes, and seconds.
- **Real-Time Countdown**: Displays the remaining time dynamically.
- **Reset Functionality**: Easily reset the timer to set a new countdown.
- **Audio Notification**: Plays a beep sound when the countdown reaches zero.

## File Structure
```
project-directory/
├── index.html      # HTML structure
├── style.css       # Styling of the application
├── script.js       # JavaScript for the timer functionality
├── beep.mp3        # Audio file for the notification sound
```

## Technologies Used
- **HTML5**: Structure of the webpage.
- **CSS3**: Styling, including responsive design.
- **JavaScript**: Logic for the countdown timer and event handling.

## How to Use
1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Click the "Start" button to begin setting the timer.
4. Enter the desired countdown time in days, hours, minutes, and seconds.
5. Click "Submit" to start the countdown.
6. Use the "Reset" button to stop the countdown and reset the input fields.

## Functionality Breakdown
### 1. **Start Button**
- Reveals the input fields for setting the timer.

### 2. **Submit Button**
- Starts the countdown based on the entered time.
- Hides the input fields and displays the countdown timer.

### 3. **Reset Button**
- Stops the countdown.
- Resets all fields and the timer display.
- Allows the user to set a new countdown.

### 4. **Audio Notification**
- A beep sound plays when the countdown reaches zero.

## Customization
- To change the theme or color scheme, edit `style.css`.
- Replace `beep.mp3` with a custom audio file for the notification.

## Example Usage
1. Set 1 hour, 15 minutes, and 30 seconds:
   - Input `0` in days, `1` in hours, `15` in minutes, and `30` in seconds.
2. Click "Submit" to see the countdown start.
3. The timer counts down in real-time and plays a beep sound upon completion.

## Screenshots
- Coming soon!

## Future Enhancements
- Add pause functionality.
- Save the countdown state using local storage.
- Allow for multiple timers.

---

Enjoy using the Countdown Timer! Feel free to contribute or customize it to your needs.
