import { BowlingGame } from "./BowlingGame";

describe('Test Bowling Game Functionality', () => {

  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame()
  });

  it('should create game', () => { 
    expect(game).toBeDefined();
  })

  it('can throw a ball', () => {
    
    expect(game.roll(2)).toBe(undefined);
  });

  it('should calculate score with all zero', () => {
    game = rollMany(20, 0);

    expect(game.score()).toBe(0)
  });
  it('should calculate score with all one', () => {
    game = rollMany(20, 1);

    expect(game.score()).toBe(20)
  });

  it('can roll a spare ', () => {
    rollSpare(game)
    game.roll(3)

    rollMany( 17, 0);

    expect(game.score()).toBe(16)
  });

  it('can roll a strike', () => {
    rollStrike(game);
    game.roll(2);
    game.roll(2);  

    rollMany( 16, 0);

    expect(game.score()).toBe(18)
  });

  it('roll a perfect game', () => {
    game = rollMany( 12, 10);

    expect(game.score()).toBe(300)
  });


  function rollStrike(game) {
    game.roll(10)
  }
  
  function rollSpare(game) {
    game.roll(5);
    game.roll(5);
  }
  
  function rollMany(rolls: number, pins: number) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  
    return game;
  }
});