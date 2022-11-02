const team = [
    { member: 'John', km: 3 },
    { member: 'Jane', km: 4 },
    { member: 'David', km: 5 },
    { member: 'Peter', km: 2 },
];

(function () {
    team.forEach((item) => {
        sum += item.km;
    });
})();

console.log(`Result: ${sum}`);
