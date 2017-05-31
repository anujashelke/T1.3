class department {
	name: string;
	constructor (name : string ){

		this.name= name;
	}

getDepartmentInfo(): void {

	console.log(`department is ${this.name}`);
}

}

class AccountingDepartment extends department{

	constructor(){

		super('accounting');

	}
}

class MarketingDepartment extends department{

	constructor(){

		super('Marketing');

	}
}

class HRDepartment extends department{

	constructor(){

		super('Human resource');

	}
}

class FinanaceDepartment extends department{

	constructor(){

		super('accounting');

	}
}
let acc=new AccountingDepartment();
let Mar=new MarketingDepartment();
let HR=new HRDepartment();
let fin=new FinanaceDepartment();
acc.getDepartmentInfo();
Mar.getDepartmentInfo();
HR.getDepartmentInfo();
fin.getDepartmentInfo();