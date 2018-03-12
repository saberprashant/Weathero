// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Delhi, IN";
    
});

weatherApp.factory('States', function() {

    //for typehead
    var states = [
        'Delhi, IN', 'Mumbai, IN', 'Chennai, IN', 'Agra, IN', 'Pune, IN', 'Bengaluru, IN',
        'Hyderabad, IN','Ahmedabad, IN',
        'New York, US', 'Colorado, US', 'Nevada, US', 'Miami, US',
        'Ottawa, CAN', 'Ontario, CAN'
    ]
    return states;
});