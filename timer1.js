const alarmTimes = process.argv.slice(2);

const isValidTime = (time)=> {
    const num = Number(time);
    return !isNaN(num) && num > 0;
};

for (const time of alarmTimes){
    if(isValidTime(time)){ 
        const delay =  Number(time) * 1000;
        setTimeout(()=>{
         process.stdout.write('\x07');
         console.log(`Beep! Alarm after ${time} seconds`);   
        },delay);
    }else {
        console.log(`Invalid time ${time}`);
    }
}

