console.clear();

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let priceNew = startPriceNew;
    let priceOld = startPriceOld;
    let savings = 0;
    let months = 0;
    let availability = savings + priceOld - priceNew;
    for (; availability < 0; ) {
        if (months !== 0 && months % 2 !== 0){
            percentLossByMonth += 0.5;
        }
        priceNew = priceNew * ((100 - percentLossByMonth) / 100);
        priceOld = priceOld * ((100 - percentLossByMonth) / 100);
        savings += savingperMonth;
        availability = savings + priceOld - priceNew;
        console.log(months, savings, availability, percentLossByMonth);
        months++;
    }
    return [months, +availability.toFixed(0)];
}



console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766]);
console.log(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000]);