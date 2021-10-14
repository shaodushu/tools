/**
 * 长度换算
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealLength = function (value: number, from: string, to: string) {
    const unit: {
        [key: string]: number
    } = {
        mKilometer: 1e3,
        mMeter: 1,
        mDecimeter: 1e-1,
        mCentimeter: 1e-2,
        mMillimeter: 1e-3,
        mMicronmeter: 1e-6,
        mLimeter: 500,
        mZhangmeter: 10 / 3,
        mChimeter: 1 / 3,
        mCunmeter: 1 / 30,
        mFenmeter: 1 / 300,
        mmLimeter: 1 / 3000,
        engFoot: 0.3048,
        nautMile: 1852
    };
    unit.engMile = 5280 * unit.engFoot;
    unit.engFurlong = 660 * unit.engFoot;
    unit.engYard = 3 * unit.engFoot;
    unit.engInch = unit.engFoot / 12;
    unit.nautFathom = 6 * unit.engFoot;
    return parseFloat((value * unit[from] / unit[to]).toFixed(7)).toString();
};

/**
 * 功率换算
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealPower = function (value: number, from: string | number, to: string | number) {
    const unit: {
        [key: string]: number
    } = {
        Watt: 0.001,
        Kilowatt: 1,
        Horsepower: 0.745712172,
        mHorsepower: 0.7352941,
        kgms: 0.0098039215,
        kcals: 4.1841004,
        Btus: 1.05507491,
        ftlbs: 0.0013557483731,
        Js: 0.001,
        Nms: 0.001
    };
    return parseFloat((value * unit[from] / unit[to]).toFixed(7)).toString();
};

/**
 * 面积换算
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealArea = function (value: number, from: string | number, to: string | number) {
    const unit: {
        [key: string]: number
    } = {
        mSquare_kilometer: 1e6,
        mHectare: 1e4,
        mSquare_meter: 1,
        mAre: 10000 / 15,
        mSquare_decimeter: 1e-2,
        mSquare_centimeter: 1e-4,
        mSquare_millimeter: 1e-6,
        engSquare_foot: (0.3048 * 0.3048)
    };
    unit.engSquare_yard = 3 * 3 * unit.engSquare_foot;
    unit.usSquare_rod = 16.5 * 16.5 * unit.engSquare_foot;
    unit.engAcre = 160 * unit.usSquare_rod;
    unit.engSquare_mile = 5280 * 5280 * unit.engSquare_foot;
    unit.engSquare_inch = unit.engSquare_foot / (12 * 12);
    return parseFloat((value * unit[from] / unit[to]).toFixed(7)).toString();
};

/**
 * 体积和容量换算
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealVolume = function (value: number, from: string | number, to: string | number) {
    const unit: {
        [key: string]: number
    } = {
        mCubic_meter: 1000,
        mHectoliter: 100,
        mDekaliter: 10,
        mLiter: 1,
        mDeciliter: 0.1,
        mCentiliter: 0.01,
        mMilliliter: 0.001,
        mCubic_millimeter: 1e-6,
        mcTable_spoon: 0.015,
        mcTea_spoon: 0.005,
        uscCubic_inch: 0.016387064,
        briGallon: 4.54609
    };
    unit.uscAcre_foot = 43560 * 1728 * unit.uscCubic_inch;
    unit.uscCubic_yard = 27 * 1728 * unit.uscCubic_inch;
    unit.uscCubic_foot = 1728 * unit.uscCubic_inch;
    unit.uslGallon = 231 * unit.uscCubic_inch;
    unit.uslBarrel = 42 * unit.uslGallon;
    unit.uslQuart = unit.uslGallon / 4;
    unit.uslPint = unit.uslGallon / 8;
    unit.uslGill = unit.uslGallon / 32;
    unit.uslFluid_ounce = unit.uslGallon / 128;
    unit.uslFluid_dram = unit.uslGallon / 1024;
    unit.uslMinim = unit.uslFluid_ounce / 61440;
    unit.usdBarrel = 7056 * unit.uscCubic_inch;
    unit.usdBushel = 2150.42 * unit.uscCubic_inch;
    unit.usdPeck = unit.usdBushel / 4;
    unit.usdQuart = unit.usdBushel / 32;
    unit.usdPint = unit.usdBushel / 64;
    unit.uscCup = 8 * unit.uslFluid_ounce;
    unit.uscTable_spoon = unit.uslFluid_ounce / 2;
    unit.uscTea_spoon = unit.uslFluid_ounce / 6;
    unit.briBarrel = 36 * unit.briGallon;
    unit.briBushel = 8 * unit.briGallon;
    unit.briPint = unit.briGallon / 8;
    unit.briFluid_ounce = unit.briGallon / 160;
    return (value * unit[from] / unit[to]).toFixed(7).toString();
};

/**
 * 功、能和热量换算
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealHeat = function (value: number, from: string | number, to: string | number) {
    const unit: {
        [key: string]: number
    } = {
        Joule: 1,
        Kgm: 9.80392157,
        Psh: 2647603.9184538,
        Hph: 2684563.7583893,
        Kwh: 3599712.023038157,
        Kcal: 4185.851820846,
        Btu: 1055.0749103,
        Ftlb: 1.3557483731
    };
    return parseFloat((value * unit[from] / unit[to]).toFixed(7)).toString();
};

/**
 * 压力
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealPressure = function (value: number, from: string | number, to: string | number) {
    const unit: {
        [key: string]: number
    } = {
        mKilopascal: 1000,
        mHectopascal: 100,
        mPascal: 1,
        mBar: 1e5,
        mMillibar: 100,
        mAtm: 101325,
        engPound_sq_inch: 6894.757,
        xpressKg_sq_cm: 98066.5,
        xpressKg_sq_m: 9.80665,
        mmmH2O: 1 / 0.101972
    };
    unit.mMillimeter_Hg = unit.mAtm / 760;
    unit.engInch_Hg = 25.4 * unit.mMillimeter_Hg;
    unit.engPound_sq_foot = unit.engPound_sq_inch / 144;
    return parseFloat((value * unit[from] / unit[to]).toFixed(7)).toString();
};

/**
 * 温度
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealTemp = function (value: number, from: string | number, to: string | number) {
    switch (from) {
        case 'tempFahr':
            value = (value - 32) / 1.8;
            break;
        case 'tempKelvin':
            value = value - 273.15;
            break;
        case 'tempRankine':
            value = value / 1.8 - 273.15;
            break;
        case 'tempReaumur':
            value = value * 1.25;
            break;
    }
    switch (to) {
        case 'tempFahr':
            value = value * 1.8 + 32
            break;
        case 'tempKelvin':
            value = value + 273.15;
            break;
        case 'tempRankine':
            value = (value + 273.15) * 1.8;
            break;
        case 'tempReaumur':
            value = value / 1.25;
            break;
    }
    return parseFloat(value.toFixed(7)).toString();
};

/**
 * 重量
 * @param value 
 * @param from 
 * @param to 
 * @returns 
 */
const dealWeight = function (value: number, from: string | number, to: string | number) {
    const unit: {
        [key: string]: number
    } = {
        mTon: 1000,
        mKilogram: 1,
        mGram: 0.001,
        mMilligram: 1e-6,
        cJin: 0.5,
        cDan: 50,
        cLiang: 0.05,
        cQian: 0.005,
        avdpPound: 0.45359237
    };
    unit.briTon = 2240 * unit.avdpPound;
    unit.usTon = 2000 * unit.avdpPound;
    unit.briCWT = 112 * unit.avdpPound;
    unit.usCWT = 100 * unit.avdpPound;
    unit.briStone = 14 * unit.avdpPound;
    unit.avdpOunce = unit.avdpPound / 16;
    unit.avdpDram = unit.avdpPound / 256;
    unit.avdpGrain = unit.avdpPound / 7000;
    unit.troyPound = 5760 * unit.avdpGrain;
    unit.troyOunce = 480 * unit.avdpGrain;
    unit.troyDWT = 24 * unit.avdpGrain;
    unit.troyGrain = unit.avdpGrain;
    return (value * unit[from] / unit[to]).toFixed(7).toString();
};

/**
 * 换算器
 */
const converter = {
    length: dealLength,
    power: dealPower,
    area: dealArea,
    volume: dealVolume,
    heat: dealHeat,
    pressure: dealPressure,
    temp: dealTemp,
    weight: dealWeight
}

export default converter