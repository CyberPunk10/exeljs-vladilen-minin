import { $ } from '@core/dom'

export class TableSelection {
  static className = 'selected'

  constructor($root) {
    this.$root = $root
    this.group = [] // место для хранения выбранных ячеек
    this.startCell = null // первая ячейка при выборе нескольких ячеек с помощью SHIFT
  }

  select($el) {
    this.clear()
    this.group.push($el)
    $el.classList.add(TableSelection.className)
    this.startCell = $el
  }

  // очищает массив выбранных ячеек и удаляет класс .selected
  clear() {
    this.group.forEach(el => {
      el.classList.remove('selected')
    })
    this.group = []
  }

  selectGroup(target) {
    const startParsed = ($.parsedRowCol(this.startCell)) // {row: 1, col: 1} стартовая ячейка
    const targetParsed = ($.parsedRowCol(target)) // {row: 2, col: 2} текущая ячейка
    const rows = range(startParsed.row, targetParsed.row) // [1, 2] массив с номерами строк
    const cols = range(startParsed.col, targetParsed.col) // [1, 2] массив с номерами колонок

    // 1 способ
    // for (let i = 0; i <= rows.length; i++) {
    //   for (let j = 0; j <= rows.length; j++) {
    //     const $cell = this.$root.querySelector(`[data-number-row="${rows[i]}"] .excel-table__row-data [data-row-col="${rows[i]}:${cols[j]}"]`)
    //     // const $cell = this.$root.querySelector(`[data-row-col="${rows[i]}:${cols[j]}"]`)
    //     if ($cell) {
    //       $cell.classList.add('selected-group')
    //     }
    //   }
    // }

    // 2 способ
    const rowCols = cols.reduce((acc, col) => {
      rows.forEach(row => acc.push(`${row}:${col}`))
      return acc
    }, [])
    console.log(rowCols)

    function range(start, end) {
      const lengthArr = (start <= end) ? end - start + 1 : start - end + 1
      const firstNum = (start <= end) ? start : end
      return new Array(lengthArr) // в скобках задаем длину массива
          .fill('')
          .map( (_, index) => firstNum + index)
    }
  }
}
