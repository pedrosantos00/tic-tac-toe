/**
 * Players of the game have the option of playing against a computer
 * 
 * Computer class exends the "Player" class
 */

class Computer extends Player {
  constructor(...props){
    super(...props)
  }
  
  empty(cell) {
	  return !cell.classList.contains('box-filled-1') && 
             !cell.classList.contains('box-filled-2')
  }
  
  testa_x_o(cell, x_o) {
	  return cell.classList.contains(x_o)
  }

  /**
   * Randomly picks a space on the board based on the remaining available spaces.
   * Then a click event is forced on the randomly selected DOM element
   */
  makeMoveRandom(){
    const boardSpaces = document.querySelectorAll('ul.boxes')[0].children;
    const availalbeSpaces = []
    for (let i = 0; i < boardSpaces.length; i++){
      if (!boardSpaces[i].classList.contains('box-filled-1') && 
          !boardSpaces[i].classList.contains('box-filled-2')) {
        availalbeSpaces.push(boardSpaces[i])
      }
    }
    const randNum = Math.floor(Math.random() * availalbeSpaces.length)
    const selectedSpace = availalbeSpaces[randNum]
    selectedSpace.click()
  }
  
  makeMove(){
    const boardSpaces = document.querySelectorAll('ul.boxes')[0].children;
	//1ª Linha
	if(this.testa_x_o(boardSpaces[0],'box-filled-1') && this.testa_x_o(boardSpaces[1], 'box-filled-1') && this.empty(boardSpaces[2])) {
		const selectedSpaceL1 = boardSpaces[2]
        selectedSpaceL1.click()
		return}
    else if(this.testa_x_o(boardSpaces[0],'box-filled-1') && this.testa_x_o(boardSpaces[2], 'box-filled-1') && this.empty(boardSpaces[1])) {
      const selectedSpaceL1 = boardSpaces[1]
          selectedSpaceL1.click()
      return
	}
  else if(this.testa_x_o(boardSpaces[1],'box-filled-1') && this.testa_x_o(boardSpaces[2], 'box-filled-1') && this.empty(boardSpaces[0])) {
    const selectedSpaceL1 = boardSpaces[0]
        selectedSpaceL1.click()
    return
}

	//2ª Linha
	if(this.testa_x_o(boardSpaces[3],'box-filled-1') && this.testa_x_o(boardSpaces[4], 'box-filled-1') && this.empty(boardSpaces[5])) {
		const selectedSpaceL1 = boardSpaces[5]
        selectedSpaceL1.click()
		return}
    else if(this.testa_x_o(boardSpaces[3],'box-filled-1') && this.testa_x_o(boardSpaces[5], 'box-filled-1') && this.empty(boardSpaces[4])) {
      const selectedSpaceL1 = boardSpaces[4]
          selectedSpaceL1.click()
      return
	}
  else if(this.testa_x_o(boardSpaces[4],'box-filled-1') && this.testa_x_o(boardSpaces[5], 'box-filled-1') && this.empty(boardSpaces[3])) {
    const selectedSpaceL1 = boardSpaces[3]
        selectedSpaceL1.click()
    return
}

	//3ª Linha
	if(this.testa_x_o(boardSpaces[6],'box-filled-1') && this.testa_x_o(boardSpaces[7], 'box-filled-1') && this.empty(boardSpaces[8])) {
		const selectedSpaceL1 = boardSpaces[8]
        selectedSpaceL1.click()
		return}
    else if(this.testa_x_o(boardSpaces[6],'box-filled-1') && this.testa_x_o(boardSpaces[8], 'box-filled-1') && this.empty(boardSpaces[7])) {
      const selectedSpaceL1 = boardSpaces[7]
          selectedSpaceL1.click()
      return
	}
  else if(this.testa_x_o(boardSpaces[7],'box-filled-1') && this.testa_x_o(boardSpaces[8], 'box-filled-1') && this.empty(boardSpaces[6])) {
    const selectedSpaceL1 = boardSpaces[6]
        selectedSpaceL1.click()
    return
}

// Diagonal 1
if(this.testa_x_o(boardSpaces[0],'box-filled-1') && this.testa_x_o(boardSpaces[4], 'box-filled-1') && this.empty(boardSpaces[8])) {
  const selectedSpaceL1 = boardSpaces[8]
      selectedSpaceL1.click()
  return}
  else if(this.testa_x_o(boardSpaces[0],'box-filled-1') && this.testa_x_o(boardSpaces[8], 'box-filled-1') && this.empty(boardSpaces[4])) {
    const selectedSpaceL1 = boardSpaces[4]
        selectedSpaceL1.click()
    return
}
else if(this.testa_x_o(boardSpaces[4],'box-filled-1') && this.testa_x_o(boardSpaces[8], 'box-filled-1') && this.empty(boardSpaces[0])) {
  const selectedSpaceL1 = boardSpaces[0]
      selectedSpaceL1.click()
  return
}

// Diagonal 2
if(this.testa_x_o(boardSpaces[2],'box-filled-1') && this.testa_x_o(boardSpaces[4], 'box-filled-1') && this.empty(boardSpaces[6])) {
  const selectedSpaceL1 = boardSpaces[6]
      selectedSpaceL1.click()
  return}
  else if(this.testa_x_o(boardSpaces[2],'box-filled-1') && this.testa_x_o(boardSpaces[6], 'box-filled-1') && this.empty(boardSpaces[4])) {
    const selectedSpaceL1 = boardSpaces[4]
        selectedSpaceL1.click()
    return
}
else if(this.testa_x_o(boardSpaces[4],'box-filled-1') && this.testa_x_o(boardSpaces[6], 'box-filled-1') && this.empty(boardSpaces[2])) {
  const selectedSpaceL1 = boardSpaces[2]
      selectedSpaceL1.click()
  return
}

// coluna 1
if(this.testa_x_o(boardSpaces[0],'box-filled-1') && this.testa_x_o(boardSpaces[3], 'box-filled-1') && this.empty(boardSpaces[6])) {
  const selectedSpaceL1 = boardSpaces[6]
      selectedSpaceL1.click()
  return}
  else if(this.testa_x_o(boardSpaces[3],'box-filled-1') && this.testa_x_o(boardSpaces[6], 'box-filled-1') && this.empty(boardSpaces[0])) {
    const selectedSpaceL1 = boardSpaces[0]
        selectedSpaceL1.click()
    return
}
else if(this.testa_x_o(boardSpaces[0],'box-filled-1') && this.testa_x_o(boardSpaces[6], 'box-filled-1') && this.empty(boardSpaces[3])) {
  const selectedSpaceL1 = boardSpaces[3]
      selectedSpaceL1.click()
  return
}
// coluna 2 
if(this.testa_x_o(boardSpaces[1],'box-filled-1') && this.testa_x_o(boardSpaces[4], 'box-filled-1') && this.empty(boardSpaces[7])) {
  const selectedSpaceL1 = boardSpaces[7]
      selectedSpaceL1.click()
  return}
  else if(this.testa_x_o(boardSpaces[1],'box-filled-1') && this.testa_x_o(boardSpaces[7], 'box-filled-1') && this.empty(boardSpaces[4])) {
    const selectedSpaceL1 = boardSpaces[4]
        selectedSpaceL1.click()
    return
}
else if(this.testa_x_o(boardSpaces[4],'box-filled-1') && this.testa_x_o(boardSpaces[7], 'box-filled-1') && this.empty(boardSpaces[1])) {
  const selectedSpaceL1 = boardSpaces[1]
      selectedSpaceL1.click()
  return
}
// coluna 3
if(this.testa_x_o(boardSpaces[2],'box-filled-1') && this.testa_x_o(boardSpaces[5], 'box-filled-1') && this.empty(boardSpaces[8])) {
  const selectedSpaceL1 = boardSpaces[8]
      selectedSpaceL1.click()
  return}
  else if(this.testa_x_o(boardSpaces[5],'box-filled-1') && this.testa_x_o(boardSpaces[8], 'box-filled-1') && this.empty(boardSpaces[2])) {
    const selectedSpaceL1 = boardSpaces[2]
        selectedSpaceL1.click()
    return
}
else if(this.testa_x_o(boardSpaces[2],'box-filled-1') && this.testa_x_o(boardSpaces[8], 'box-filled-1') && this.empty(boardSpaces[5])) {
  const selectedSpaceL1 = boardSpaces[5]
      selectedSpaceL1.click()
  return
}

	
    const availalbeSpaces = []
    for (let i = 0; i < boardSpaces.length; i++){
      if (!boardSpaces[i].classList.contains('box-filled-1') && 
          !boardSpaces[i].classList.contains('box-filled-2')) {
        availalbeSpaces.push(boardSpaces[i])
      }
    }
    const randNum = Math.floor(Math.random() * availalbeSpaces.length)
    const selectedSpace = availalbeSpaces[randNum]
    selectedSpace.click()
  }



  /*	if(!this.empty(boardSpaces[0]) && !this.empty(boardSpaces[2]) && this.empty(boardSpaces[1])) {
		const selectedSpaceL1 = boardSpaces[1]
        selectedSpaceL1.click()
		return
	} */
  /**
   * Randomly picks a space on the board based on the remaining available spaces.
   * Then a click event is forced on the randomly selected DOM element
   */
/*  makeMove2(){
    const boardSpaces = document.querySelectorAll('ul.boxes')[0].children;
    const availalbeSpaces = []
	if(!empty(boardSpaces[0]) && !empty(boardSpaces[2]) && empty(boardSpaces[1])) {
		const smartSelect=empty(boardSpaces[1])
		smartSelect.click()
		return
	}
    for (let i = 0; i < boardSpaces.length; i++){
	  console.log('space: '+i+' '+boardSpaces[i]+' '+this.empty(boardSpaces[i]))
      if (empty(boardSpaces[i])) {
        availalbeSpaces.push(boardSpaces[i])
      }
    }
    const randNum = Math.floor(Math.random() * availalbeSpaces.length)
    const selectedSpace = availalbeSpaces[randNum]
    selectedSpace.click()
  }
*/
}