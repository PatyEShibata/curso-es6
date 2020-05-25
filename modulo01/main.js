//exercicio1

class Usuario {
    admin = false;
  
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  
    isAdmin() {
      return this.admin;
    }
  }
  
  class Admin extends Usuario {
    constructor() {
      super();
      super.admin = true;
    }
  }
  
  const user = new Usuario('email@email.com', 'pass');
  const admin = new Admin('admin@email.com', 'admin');
  
  console.log('user', user.isAdmin())
  console.log('admin', admin.isAdmin())