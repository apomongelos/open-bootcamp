export class Contact {
  name = '';
  surname = '';
  email = '';
  loggedIn = false;

  constructor(name, surname, email, loggedIn) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.loggedIn = loggedIn;
  }
}
