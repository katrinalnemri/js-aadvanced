class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (salary <= 0 || !name || !salary || !position || !department) {
            throw new Error("Invalid input!")
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                names: [],
                salaries: [],
                positions: [],
                averageSalaryY: 0,
            }
        }
        this.departments[department].names.push(name)
        this.departments[department].salaries.push(Number(salary))
        this.departments[department].positions.push(position)
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        Object.keys(this.departments).forEach(department => {
            this.departments[department].averageSalaryY = this.departments[department].salaries
                .reduce((a, b) =>
                    a + b, 0) / this.departments[department].names.length
        })
        let sortedAverage = Object.keys(this.departments).sort((a, b) => {
            return this.departments[b].averageSalaryY - this.departments[a].averageSalaryY
        })
        let average = this.departments[sortedAverage[0]].averageSalaryY
        let bestName = sortedAverage[0]
        let bestEmployeesNames = this.departments[sortedAverage[0]].names
        let bestEmployeesSalaries = this.departments[sortedAverage[0]].salaries
        let bestEmployeesPositions = this.departments[sortedAverage[0]].positions
        let bestCompany = {
            departmentName: bestName,
            averageSalary: average.toFixed(2),
            employees: [],
        }
        for (let i = 0; i < bestEmployeesNames.length; i++) {
            let obj = {
                name: bestEmployeesNames[i],
                salary: bestEmployeesSalaries[i],
                position: bestEmployeesPositions[i]
            }
            bestCompany.employees.push(obj)
        }
        bestCompany.employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })
        let resultEmployees = ''
        bestCompany.employees.forEach((el, index) => {
            if (index === bestCompany.employees.length - 1) {
                resultEmployees += `${el.name} ${el.salary} ${el.position}`
            } else {
                resultEmployees += `${el.name} ${el.salary} ${el.position}\n`
            }
        })
        return `Best Department is: ${bestCompany.departmentName}\nAverage salary: ${bestCompany.averageSalary}\n${resultEmployees}`
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
