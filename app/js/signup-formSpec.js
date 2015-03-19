describe('optIn', function() {

	var element, scope;

	beforeEach(module("signup"));
	beforeEach(module("js/sign-up.html"));
	beforeEach(inject(function($rootScope, $compile){

		scope = $rootScope.$new();

		html =  "";
		html += " <opt-in>";
		html += "   <img src='images/logo.png' height=\'100'\ width=\'100'\>";
		html += " </opt-in>";

	    compiled = $compile(html)
	    element = compiled(scope);
	    scope.$digest();

	}));


    it('should render the element correctly', function(){
    	expect(element.find('form').length).toBe(1);
    	expect(element.find('label').length).toBe(2);    	
    	expect(element.find('fieldset').length).toBe(1);    	
    	expect(element.find('input').length).toBe(2);    	
    });

});