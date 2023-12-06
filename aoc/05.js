console.clear();

class Seed{
    constructor(sid, soilmap, fertmap, watmap, lightmap, tempmap, hummap, locmap){
        this.sid = sid;
        this.soilmap = soilmap;
        this.soil = null;
        this.fertmap = fertmap;
        this.fert = null;
        this.watmap = watmap;
        this.wat = null;
        this.lightmap = lightmap;
        this.light = null;
        this.tempmap = tempmap;
        this.temp = null; 
        this.hummap = hummap;
        this.hum = null;
        this.locmap = locmap;
        this.loc =null;
        this.findSoil();
        this.findFert();
        this.findWat();
        this.findLight();
        this.findTemp();
        this.findHum();
        this.findLoc();
    }

    processInstructions(source, instructions){
       
        const destRangeEnd = instructions[0] + instructions[2];
        const srcRangeEnd = instructions[1] + instructions[2];
        const destRange =[instructions[0], destRangeEnd];
        const srcRange =[instructions[1], srcRangeEnd];
        
        // console.log(srcRange, source);

        if (source > srcRange[0] - 1 && source < srcRange[1] + 1){
            const srcLocation = (source - srcRange[0]);
            // console.log('found', destRange[0] + srcLocation);
            
            return destRange[0] + srcLocation;
        }        
        return null;
    }

    findSoil(){
        let source = this.sid;
        let newSource = null;
        for (let i = 0; i < this.soilmap.length; i++) {
            const instructions = this.soilmap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                // console.log('ns:', newSource);
                this.soil = newSource; 
                return;
            }
        }
        this.soil = source;
        
    }
    findFert(){
        let source = this.soil;
        // console.log('ffsoil:', this.soil);
        let newSource = null;
        for (let i = 0; i < this.fertmap.length; i++) {
            const instructions = this.fertmap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                this.fert = newSource; 
                console.log('ns:', newSource);
                return;
            }
        }
        this.fert = source;
    }
    findWat(){
        let source = this.fert;
        let newSource = null;
        for (let i = 0; i < this.watmap.length; i++) {
            const instructions =this.watmap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                this.wat = newSource; 
                return;
            }
        }
        this.wat = source;
    }
    findLight(){
        let source = this.wat;
        let newSource = null;
        for (let i = 0; i < this.lightmap.length; i++) {
            const instructions =this.lightmap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                this.light = newSource; 
                return;
            }
        }
        this.light = source;
    }
    findTemp (){
        let source = this.light;
        let newSource = null;
        for (let i = 0; i < this.tempmap.length; i++) {
            const instructions =this.tempmap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                this.temp = newSource; 
                return;
            }
        }
        this.temp = source;
    }
    findHum (){
        let source = this.temp;
        let newSource = null;
        for (let i = 0; i < this.hummap.length; i++) {
            const instructions =this.hummap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                this.hum = newSource; 
                return;
            }
        }
        this.hum = source;
    }
    findLoc (){
        let source = this.hum;
        let newSource = null;
        for (let i = 0; i < this.locmap.length; i++) {
            const instructions =this.locmap[i];
            newSource = this.processInstructions(source, instructions);
            if(newSource!==null){
                this.loc = newSource; 
                return;
            }
        }
        this.loc = source;
    }
}

const { log } = require('console');
const fs = require('fs');
const { restart } = require('nodemon');

fs.readFile('.\\aoc\\05.json', 'utf-8', function (err, data) {
   if (err) throw err;
    workwork(JSON.parse(data));
})
  
function workwork (input){
    const seedCollection = [];
    let minLocation = Infinity;
    
    const test = new Seed(4002147452, input.soilmap, input.fertmap, input.watmap, input.lightmap, input.tempmap, input.hummap, input.locmap);
    console.log(test); 
    // input.seeds.forEach((seed) => {
    //    seedCollection.push(new Seed(seed, input.soilmap, input.fertmap, input.watmap, input.lightmap, input.tempmap, input.hummap, input.locmap))
    // });

    seedCollection.forEach(seed => {
        // console.log(seed.loc, seed.sid);
        if (minLocation > seed.loc ){
            minLocation = seed.loc;
        }
    });
    // console.log(minLocation);
    // console.log(seedCollection);
    // console.log(minLocation);
}

// 10060580 too low
  