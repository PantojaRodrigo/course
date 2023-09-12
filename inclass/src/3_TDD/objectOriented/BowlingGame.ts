
export class BowlingGame {

  private rolls: number[];
  
  constructor() {
    this.rolls = [];
  }
  
  public roll(pins: number): void {
    this.rolls.push(pins);
  }

  public score(): number {
    const FRAMES = 10
    let score = 0
    let indexRoll = 0
    let rolls=this.rolls;
    for (let i = 0; i < FRAMES; i++) {

      if (this.isStrike(indexRoll)) {
        score += this.scoreForStrike(indexRoll)
        indexRoll += 1
  
      } else if (this.isSpare(indexRoll)) {
        score += this.scoreForSpare(indexRoll)
        indexRoll += 2
  
      } else {
        score += this.scoreForFrame(indexRoll)
        indexRoll += 2
  
      }
  
    }
    return score;
  }

  private scoreForStrike( index: number) {
    return 10 + this.rolls[index + 1] + this.rolls[index + 2]
  }
  
  private isStrike(index: number) {
    return this.rolls[index] === 10
  }
  
  private scoreForFrame(index: number) {
    return this.rolls[index] + this.rolls[index + 1]
  }
  
  private scoreForSpare(index: number) {
    return 10 + this.rolls[index + 2]
  }
  
  private isSpare(index: number) {
    return this.rolls[index] + this.rolls[index + 1] === 10
  }
}