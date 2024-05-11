function initGame() {
  let random = Math.random();
  let result = '';

  if (random >= 0 && random < 1 / 3) {
    result = 'Кагаз';
  } else if (random >= 1 / 3 && random < 2 / 3) {
    result = 'Кайчы';
  } else if (random >= 2 / 3 && random < 1) {
    result = 'Кудук';
  }
  return result;
}

function playGame(params) {
  let computerMove = initGame();
  let result = '';

  if (params === 'Кагаз') {
    if (computerMove === 'Кагаз') {
      result = 'Тен';
    } else if (computerMove === 'Кайчы') {
      result = 'Утуш';
    } else if (computerMove === 'Кудук') {
      result = 'Женилуу';
    }
  }
  if (params === 'Кайчы') {
    if (computerMove === 'Кайчы') {
      result = 'Тен';
    } else if (computerMove === 'Кагаз') {
      result = 'Утуш';
    } else if (computerMove === 'Кудук') {
      result = 'Женилуу';
    }
  }
  if (params === 'Кудук') {
    if (computerMove === 'Кудук') {
      result = 'Тен';
    } else if (computerMove === 'Кагаз') {
      result = 'Женилуу';
    } else if (computerMove === 'Кайчы') {
      result = 'Утуш';
    }
  }

  let totalResult = {
    win: 0,
    lose: 0,
    draw: 0,
  };

  if (result === 'Тен') {
    totalResult.draw++;
  } else if (result === 'Женилуу') {
    totalResult.lose++;
  } else if (result === 'Утуш') {
    totalResult.win++;
  }

  showResultFromLocalS(totalResult, result, params, computerMove);
}

function showResultFromLocalS(totalResultParam, resultParam, params, computerMove) {
  let totalElement = document.querySelector('.js-13_total');
  let resultElement = document.querySelector('.result');
  let movesElement = document.querySelector('.moves');

  totalElement.innerHTML = `Результат: w:${totalResultParam.win}, l:${totalResultParam.lose}, d:${totalResultParam.draw}`;
  resultElement.innerHTML = `result: <span style='color: red'>${resultParam}</span>`;
  movesElement.innerHTML = `Сиз:${params} === Компютер:${computerMove}`;
}
