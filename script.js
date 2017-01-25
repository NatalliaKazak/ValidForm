function Fields( form ) {
	var FormTag=document.forms['fms'];
	var PrField=FormTag.elements['programmers'];
    PrField.addEventListener('blur', validatePr, false);
    var SiField=FormTag.elements['site'];
    SiField.addEventListener('blur', validateSite, false);
    var UrlField=FormTag.elements['url'];
    UrlField.addEventListener('blur', validateUrl, false);
    var DaField=FormTag.elements['date'];
    DaField.addEventListener('blur',validateDate , false);
    var MaField=FormTag.elements['mail'];
    MaField.addEventListener('blur',validateMail , false);
    var ViField=FormTag.elements['visitors'];
    ViField.addEventListener('blur',validateVisit , false);
    var CaField=FormTag.elements['catalog'];
    CaField.addEventListener('change',validateCatalog , false);
    var DeField=FormTag.elements['description'];
    DeField.addEventListener('blur',validateDescr , false);
    var PuField=FormTag.elements['publish'];
    FormTag.onsubmit = validate;
    
    function showErrors( field, msg) { //вывод сообщений об ошибках
		document.getElementById(field).innerHTML = msg ;
		var Field = document.getElementById(field);
		Field.style.paddingLeft='160px';
		Field.style.paddingBottom='10px';
	}
	function hideErrors(field ) { //убирает сообщения об ошибках
		document.getElementById(field).innerHTML ='' ;
		Field = document.getElementById(field);
		Field.style.paddingBottom='0px';
		Field.style.paddingLeft='0px';
	 }
	function validatePr () { //Поле разработчики: на пустоту, числа
		var Value=PrField.value;
		if(Value === '' || !isNaN(Value)) {
			showErrors('error-field1', 'Укажите разработчиков!',PrField);
			return false;
		}else {
			hideErrors('error-field1' );
			return true;
		}
		}
	function validateSite () { //Поле сайт: на пустоту, не больше 30 символов
		var Value=SiField.value;
		if(Value === '' || Value.length > 30) {
			showErrors('error-field2', 'Укажите название сайта!', SiField);
			return false;
		}else {
			hideErrors('error-field2'  );
			return true;
			}
	}
		function validateUrl () { //Поле url: на пустоту, шаблон
		var UrlValue=UrlField.value;
		var regs = UrlValue.match(/^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/i);
		if(UrlValue === ''  || !regs) {
			showErrors('error-field3', 'Укажите правильный Url!' );
			return false;
		}else {
			hideErrors('error-field3'  );
			return true;
			}
	}
	function validateDate () { //Поле дата: на пустоту, шаблон
		var DaValue=DaField.value;
		var regs = DaValue.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
		if(DaValue === '' ) {
				showErrors('error-field4', 'Укажите дату!');
				return false;
		}else if( !regs ) {
			showErrors('error-field4', 'Укажите дату в формате dd/mm/yyyy!');
			return false;
		}else {
			hideErrors('error-field4'  );
			return true;
			}
	}
	function validateMail () { //Поле mail: на пустоту,шаблон
		var MaValue=MaField.value;
		var regs = MaValue.match(/^\S+@[a-z]+.[a-z]+$/); // еще такой вариант ^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$
		if(MaValue === '' || !regs) {
				showErrors('error-field6', 'Укажите правильный email!');
				return false;
		}else {
			hideErrors('error-field6'  );
			return true;
			}
	}
	function validateVisit () { //Поле mail: на пустоту, введенные числа
		var ViValue=ViField.value;
		if(ViValue === '' || isNaN(ViValue)) {
				showErrors('error-field5', 'Укажите количество посетителей!');
				return false;
			}else {
			hideErrors('error-field5'  );
			return true;
		}	
	}
	function validateCatalog() { //Поле рубрика каталога: на выбранный элемент
		var Value=CaField.value;
		if(Value === 'nothing') {
			showErrors('error-field7', 'Выберите рубрику каталога!');
			return false;
		}else {
			hideErrors('error-field7'  );
			return true;
			}
	}
	function validateDescr() { //Поле описание: на пустоту,не больше 300 символов
		var Value=DeField.value;
		if(Value === '' ) {
    		showErrors('error-field9', 'Введите описание сайта!');
    		return false;
		}else if (Value.length > 300){
			showErrors('error-field9', 'Колличество знаков не должно превышать 300!');
		    return false;
		}else {
			hideErrors('error-field9'  );
			return true;
			}
	}
	function validate() {
		var arrayFunc = [validateDescr(), validateVisit(),validateCatalog(), validateMail(), validateUrl(), validateSite(), validateDate(), validatePr()];
		for (var i=0; i< arrayFunc.length; i++) {
			blur();
			if (arrayFunc[i] === false) {
        		 return false; 
        	}
		}	
    }
}
var form = document.getElementsByTagName( "form" )[0];
Fields( form );