
let out = [];
let givenUnit = 8;
let expectedEarning = 4500;
let theatreEarning = 1500;
let pubEarning = 1000;
let parkEarning = 3000;
let theatreUnit = 5;
let pubUnit = 4;
let parkUnit = 10;
let arr = [theatreUnit, pubUnit, parkUnit];
let earningArr = [theatreEarning, pubEarning, parkEarning];
let buildings = ["T", "P", "c"];
for (let i = 0; i < arr.length; i++) {
    let building = [...buildings];
    let result = findProfit(arr[i], earningArr[i], givenUnit, expectedEarning, building, i);
    if (result[1] == result[2]) {
        out.push(result[0]);
    }
}
function findProfit(unit, earning, givenUnit, expectedEarning, buildings, i) {
    let sum = 0;
    let flag = true;
    let count = 0;
    let value = buildings[i];
    while (flag) {
        if (givenUnit > unit) {
            givenUnit = givenUnit - unit;
            sum += earning * givenUnit;
            count++;
            if (sum == expectedEarning) {
                flag = false;
            }
        }
        else {
            flag = false;
            count = 0;
        }
    }
    let newBuilding = buildings.map((val, ind) => {
        if (ind == i) {
            return `${val}:${count}`;
        }
        else {
            return `${val}:0`;
        }
    })

    return [newBuilding, sum, expectedEarning];
}
console.log(out);