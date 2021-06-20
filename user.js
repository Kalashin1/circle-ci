class User {
  constructor(name, gender, title) {
    this.name = name
    this.gender = gender,
    this.title = title
  };

  greet(message) {
    return `${this.name} says ${message}`
  }

  profile() {
    return { name : this.name, gender: this.gender, title: this.title}
  }
}

module.exports.User = User