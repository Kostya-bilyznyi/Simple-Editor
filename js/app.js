'use strict';

const textContent = document.querySelector('[data-content]');	//Adding content from (div class="ba-editor__content") to variable using dataattribute.
const textArea = document.querySelector('[data-textarea]');		//Adding content from (textarea class="ba-editor__textarea") to variable using dataattribute

document.addEventListener('keydown', textEdit)

function textEdit(event) {
																					// If you press Ctrl + E
	if ( event.ctrlKey && event.code == 'KeyE') { 
		event.preventDefault();
		textArea.innerHTML = textContent.innerHTML;
		textContent.hidden = true;
		textArea.hidden = false;
		textArea.focus();
	}
																					// If you press Ctrl + S
	if ( event.ctrlKey && event.code == 'KeyS') { 
		event.preventDefault();
		textContent.innerHTML = textArea.value;
		textContent.hidden = false;
		textArea.hidden = true;
		textArea.focus();
	}
																					// If you press Esc
	else{
		if (event.code == 'Escape') {
			event.preventDefault();
			textContent.hidden = false;
			textArea.hidden = true;
		}
	}
}
