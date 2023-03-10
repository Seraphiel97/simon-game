# S.I.M.O.N.

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
![Maintainer](https://img.shields.io/badge/maintainer-Seraphiel97-blue)


## Game Overview:
![gameplay](https://raw.githubusercontent.com/Seraphiel97/simon-game/37706e535bf2fcb0381e8f698c25e5571807d09e/images/simon-demo.gif)

__Welcome to the future!__ In this game, an artificial intelligence named ___S.I.M.O.N.___(Super Intelligence Mapping Our Neuroanatomy) creates a sequence of colors designed to test the user's pattern recognition and short-term memory. Once the correct pattern has been revealed, the player must correctly recreate the sequence using the controls provided. As it is human nature to make mistakes, feel free to __play the game more than once__ so the AI can accurately track your successes.


***

## Getting Started:

![startup-screen](https://github.com/Seraphiel97/simon-game/blob/main/images/simon-startup-screen.png?raw=true)

[Play S.I.M.O.N.](https://seraphiel97.github.io/simon-game/)

***

## Technologies Used:

![HTML-img](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS-img](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS-img](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MD-img](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![GIT-img](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![MAC-img](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)

***

## Current Features:

* Success Percentage
    * Unless the game is reset using the "NEW PLAYER" button, the function below tracks a player's progress across multiple games

```js
function calculateWinPercentage() {
  if (winner === 1) {
    totalWins += 1;
    totalGames += 1;
  } else if (winner < 1) {
    totalGames +=1;
  }
  winPercentage = (Math.round((totalWins / totalGames) * 100))
}
```
***

## Next Steps:
1. Implement iterative increasing difficulty feature
2. Create color themes for player selection
3. Stylistically alter the player bubbles to better match the AI theme of the game
