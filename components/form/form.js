(function(){

	'use strict';

	class Form {
		constructor(options) {
			this.el = options.el;

			this.i_nitEvent();
			this.render();
		}

		template() {
			return `	
			<form>
				<fieldset>
					<input type="text" name="url" placeholder="url">
					<input type="text" name="url" placeholder="url">
					<button type="submit">Push</button>
				</fieldset>		
			</form>`;
		}

		i_nitEvent() {
			
		}

		render() {
			const template = this.template();
			this.el.innerHTML = template;
		}
	}

	window.Form = Form;	
})();