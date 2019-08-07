
class Counter {
	
	constructor(counter) {
		this.label = $(counter).children("#counter_label")[0];
		this.buttonUp = $(counter).children("#button_up");
		this.buttonDown = $(counter).children("#button_down");
		
	}
	
	countUp(cnt) {
		cnt.data.value++;
	}
	countDown(cnt) {
		cnt.data.value--;
	}
	bindUpButton() {
		this.buttonUp.click(this.label,this.countUp);
	}
	bindDownButton() {
		this.buttonDown.click(this.label,this.countDown);
	}
	bindButtons() {
		this.bindUpButton();
		this.bindDownButton();
	}
	
	init() {
		this.label.value = 0;
		this.bindButtons();
		
	}
	
}
const counter = new Counter($("#counter"));
counter.init();
