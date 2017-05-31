var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var department = (function () {
    function department(name) {
        this.name = name;
    }
    department.prototype.getDepartmentInfo = function () {
        console.log("department is " + this.name);
    };
    return department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'accounting') || this;
    }
    return AccountingDepartment;
}(department));
var MarketingDepartment = (function (_super) {
    __extends(MarketingDepartment, _super);
    function MarketingDepartment() {
        return _super.call(this, 'Marketing') || this;
    }
    return MarketingDepartment;
}(department));
var HRDepartment = (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment() {
        return _super.call(this, 'Human resource') || this;
    }
    return HRDepartment;
}(department));
var FinanaceDepartment = (function (_super) {
    __extends(FinanaceDepartment, _super);
    function FinanaceDepartment() {
        return _super.call(this, 'accounting') || this;
    }
    return FinanaceDepartment;
}(department));
var acc = new AccountingDepartment();
var Mar = new MarketingDepartment();
var HR = new HRDepartment();
var fin = new FinanaceDepartment();
acc.getDepartmentInfo();
Mar.getDepartmentInfo();
HR.getDepartmentInfo();
fin.getDepartmentInfo();
