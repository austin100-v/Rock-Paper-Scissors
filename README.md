# Rock Paper Scissors (Console Version)

A classic Rock Paper Scissors game implemented in JavaScript and played entirely in the browser's console. Challenge the computer to a best-of-five match and see if you can claim victory!

## About the Project

This is a console-based implementation of the timeless Rock Paper Scissors game. Built with vanilla JavaScript, the game runs in your browser's developer console, featuring a 5-round match format with score tracking and interactive prompts. It's a great example of fundamental JavaScript programming concepts including functions, loops, conditionals, and DOM manipulation.

### Features

- **5-round tournament** format for extended gameplay
- **Interactive prompts** to collect player choices
- **Real-time scoring** tracking wins for both player and computer
- **Console-based interface** displaying round results and final scores
- **Input validation** to ensure valid game choices
- **Classic rules** - Rock beats Scissors, Scissors cuts Paper, Paper covers Rock

## How to Use

### Getting Started

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/austin100-v/rock-paper-scissors-console.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd rock-paper-scissors-console
   ```

3. **Open the game** in your web browser:
   - Double-click on `rockPaperScissors.html`, or
   - Right-click the file and select "Open with" your preferred browser

### How to Play

1. When the page loads, a prompt will appear asking for your choice
2. **Enter your choice**: Type either "rock", "paper", or "scissors" (case-insensitive)
3. Click "OK" or press Enter
4. **Open the browser console** to see the results:
   - Right-click anywhere on the page and select "Inspect" or "Inspect Element"
   - In the developer tools panel, click on the "Console" tab (usually at the top)
5. The console will display:
   - The current round number
   - What the computer chose
   - Whether you won, lost, or drew that round
   - Current scores for both you and the computer
6. Repeat steps 2-3 for all 5 rounds
7. After round 5, the final winner will be announced with the final scores

### Game Rules

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**
- Matching choices result in a **draw** (no points awarded)
- After 5 rounds, the player with the most points wins
- Tied final scores result in a draw

### Example Gameplay

```
Round 1
You win rock beats scissors. Your score is 1 and the computer's is 0

Round 2
You Lost! paper beats rock. Your score is 1 and the computer's is 1

Round 3
You draw scissors is equal to scissors

Round 4
You win paper beats rock. Your score is 2 and the computer's is 1

Round 5
You win scissors beats paper. Your score is 3 and the computer's is 1

You won the game. You: 3
computer: 1
```

## Technologies Used

- **JavaScript (ES6)** - Game logic, random generation, and control flow
- **HTML5** - Basic page structure
- **Browser Console API** - Output display and interaction

## Project Structure

```
rock-paper-scissors-console/
├── rockPaperScissors.html    # HTML wrapper
├── script.js                  # Game logic and implementation
└── README.md                  # Project documentation
```

## Learning Concepts Demonstrated

This project showcases several fundamental programming concepts:
- **Functions** - Modular code organization with `getComputerChoice()`, `getHumanChoice()`, and `playRound()`
- **Loops** - Using a for loop to control 5 rounds of gameplay
- **Conditionals** - Complex if/else logic for game rules
- **Variables and scope** - Managing game state with scores
- **User input** - Collecting and validating player choices
- **Random number generation** - Creating unpredictable computer choices

## Credits

Developed by [Austine Irungu](https://github.com/austin100-v/)

## License

This project is open source and available for personal and educational use.