import { useState } from 'react'
import words from './worldList.json'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  
  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>

      <div style={{fontSize: "2rem", textAlign: "center"}}> Lose Win </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord/>
      <div style={{ alignSelf: "stretch" }}>
      <Keyboard/>
      </div>
    </div>
  )
}

export default App
