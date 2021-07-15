class Contact{

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }


    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName)
    {
        let firstNameregex = RegExp('^[A-Z][a-z]{2,}$');
        if(firstNameregex.test(firstName))
        this._firstName=firstName;
        
        else
        throw 'First Name Invalid'
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName)
    {
        let lastNameregex= RegExp('^[A-Z][a-z]{2,}$');
        if(lastNameregex.test(lastName))
        this._lastName=lastName;

        else
        throw 'Last Name Invalid'
    }

    set address(address)
    {
        let addressRegex = RegExp('^[A-Za-z\\s0-9]{4,}$');
        if(addressRegex.test(address))
        this._address = address;
        else
        throw 'Address Invalid'
    }

    get city()
    {
        return this._city;
    }

    set city(city)
    {
        let cityRegex = RegExp('^[A-Za-z\\s]{4,}$');
        if(cityRegex.test(city))
        this._city = city;
        else
        throw 'City Invalid'
    }

    get state()
    {
        return this._state;
    }

    set state(state)
    {
        let stateRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(stateRegex.test(state))
        this._state = state;
        else
        throw 'State Invalid'
    }

    get zip()
    {
        return this._zip;
    }

    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{3}[\\s]*[0-9]{2,}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw 'Zip Invalid'
    }

    get phone()
    {
        return this._phone;
    }

    set phone(phone)
    {
        let phoneRegex = RegExp('^[1-9][0-9]{9}$');
        if(phoneRegex.test(phone))
        this._phone = phone;
        else
        throw 'Phone Invalid'
    }

    get email()
    {
        return this._email;
    }

    set email(email)
    {
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z_+.-]*[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]{2,}$');
        if(emailRegex.test(email))
        this._email = email;
        else
        throw 'Email Incorrect';
    }

    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }
}

    try
    {
        let contact = new Contact("Madhuri","Patil","Gujar Gully","Shahada","Maharashtra",425409,7789765456,"harshu03@gmail.com");
        console.log(contact.toString());
    }
    catch(e)
    {
        console.error(e);
    }
    let addressBook = new Array();

function addContact(...params) {
    try{
    let newContact = new Contact(params[0],params[1],params[2],params[3],params[4],params[5],params[6],params[7]);
    addressBook.push(newContact);
    }catch(e){
        console.error(e);
    }
    
}

addContact("\n Mohit","Rajput","4 Kuber Nagar","Pune","Maarashtra",4254089,9173410387,"Mohit03@yahoo.com");
addContact("\n Riya","More","45 Bhoi Gully","Shahada","Maharashtra",4657653,8771979690,"Riya18@gmail.com");
addContact("\n Pranali","Malviya","12 moshi, Dayton, Pune","Maharashtra","Ohio",453774,9999999999,"Purva@gmail.com");
addContact("\n vRitik","Manglani","sindhi Colony","Nandurbar","UP",423306,2654421298,"Ritik10@gmail.com");
addContact("\n Suhas","Chaudhari","1 Kashima Nivas","Ahemdabad","Gujrat",66121,7642215391,"Suhas45@gmail.com");
console.log(addressBook.toString())

