import React from 'react';

class Rollable extends React.Component {
    
    roll = (max) => {
        return Math.floor(Math.random() * max + 1);
    };

    rollMulti = (die, num) => {
        let total = 0;
        for( let i=0; i < num; i++) {
            total += this.roll(die);
        }
        return total;
    }

    rollOnTable = (options) => {
        const table = options

        if(table) {
            const tableMax = this.getHighestValueInTable(table);
            const roll = this.roll(tableMax);
            
            console.log(roll); 
            let result = table[roll];
            if (result) {
                return result;
            } else {
                Object.keys(table).forEach(function(key) {
                    let splitKey = key.split(":");
                    if(splitKey[1]) {
                        if(splitKey[0] <= roll && roll <= splitKey[1]) {
                            result = table[key];
                        }
                    }
                })
            }
            return result;
        } 
        return false;
    }

    getHighestValueInTable = (table) => {
        let highest = Object.keys(table).sort(function(a, b){
            a = Number(a.split(":")[0]);
            b = Number(b.split(":")[0]);
            return a-b;
        }).pop();
        highest = highest.split(":");
        if (highest[1]) { return highest[1] }
        return highest[0];
    }

    getResult = (table, roll) => {
        let res = table[roll];
        if (res) {
            return res;
        } else {
            let val;
            //let opts;
            Object.keys(table).forEach(function(key) {
                let splitKey = key.split(":");
                if(splitKey[1]) {
                    if(splitKey[0] <= roll && roll <= splitKey[1]) {
                        val = table[key];
                    }
                }
            })
            return val;
        }
    }
}

export default Rollable;