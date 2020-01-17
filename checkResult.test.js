// IMPORT MODULES under test here:
import checkResult from '../rockPaperScissor.js';

const test = QUnit.test;

test('lose', function(assert) {
    const player = 'scissors';
    const computer = 'rock';
    const shouldBeLose = checkResult(player, computer);
    assert.equal(shouldBeLose, 'lose');
});
    
test('lose', function(assert) {
    const player = 'rock';
    const computer = 'paper';
    const shouldBeLose = checkResult(player, computer);
    assert.equal(shouldBeLose, 'lose');
});

test('lose', function(assert) {
    const player = 'paper';
    const computer = 'scissors';
    const shouldBeLose = checkResult(player, computer);
    assert.equal(shouldBeLose, 'lose');
});

test('win', function(assert) {
    const player = 'paper';
    const computer = 'rock';
    const shouldBeWin = checkResult(player, computer);
    assert.equal(shouldBeWin, 'win');
});

test('win', function(assert) {
    const player = 'scissors';
    const computer = 'paper';
    const shouldBeWin = checkResult(player, computer);
    assert.equal(shouldBeWin, 'win');
});

test('win', function(assert) {
    const player = 'rock';
    const computer = 'scissors';
    const shouldBeWin = checkResult(player, computer);
    assert.equal(shouldBeWin, 'win');
});

test('draw', function(assert) {
    const player = 'paper';
    const computer = 'paper';
    const shouldBeDraw = checkResult(player, computer);
    assert.equal(shouldBeDraw, 'draw');
});

test('draw', function(assert) {
    const player = 'scissors';
    const computer = 'scissors';
    const shouldBeDraw = checkResult(player, computer);
    assert.equal(shouldBeDraw, 'draw');
});

test('draw', function(assert) {
    const player = 'rock';
    const computer = 'rock';
    const shouldBeDraw = checkResult(player, computer);
    assert.equal(shouldBeDraw, 'draw');
});
