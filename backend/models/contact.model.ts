const sql = require("./db.js");
const Sequelize = require("sequelize");

/*export interface contact{
    fullname: string;
    email: any;
    message: string;

}*/

//Constructor
const Contact = function(contact){
    this.fullname = contact.fullname;
    this.email = contact.email;
    this.message = contact.message;
}


Contact.create = (newContact, result) => {
    sql.query("INSERT INTO contactinfo SET ?", newContact, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("new contact: ", { ...newContact });
      result(null, { ...newContact });
    });
  };

  module.exports = Contact;
/*addContact (fullname: string, email:any, message:string){

    this.HTMLOutputElement.post<{message:string}>('http://localhost:3000/api/contact', post)
    .subscribe(responseData =>{
        
    });
}*/