function User(){
	this.id;
	this.name;
	this.age;
	this.enter =function(){
		console.log(this.name+"进入图书馆");
	}
}

module.exports = User;