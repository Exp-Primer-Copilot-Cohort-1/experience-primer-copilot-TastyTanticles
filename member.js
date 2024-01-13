function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 200,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        setBonus: function (bonus) {
            this.bonus = bonus;
        },
        getSkills: function () {
            return this.skills.join(', ');
        },
        setSkills: function (skills) {
            this.skills = skills.split(', ');
        }
    };
    return member;
}