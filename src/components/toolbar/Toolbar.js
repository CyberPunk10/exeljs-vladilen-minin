import { ExcelComponent } from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel-toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  toHTML(selector) {
    selector.innerHTML = `
      <div class="excel-toolbar__button"><span class="material-icons">format_bold</span></div>
      <div class="excel-toolbar__button"><span class="material-icons">format_italic</span></div>
      <div class="excel-toolbar__button"><span class="material-icons">format_underlined</span></div>
      <div class="excel-toolbar__button"><span class="material-icons">format_align_left</span></div>
      <div class="excel-toolbar__button"><span class="material-icons">format_align_center</span></div>
      <div class="excel-toolbar__button"><span class="material-icons">format_align_right</span></div>

    `
    return selector
  }

  onClick(event) {
    console.log('Click on Toolbar!', event.target)
  }
}
