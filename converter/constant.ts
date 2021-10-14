
/**
 * 转化器类型
 */
export const CONVERTER = [{
    key: 'length',
    name: '长度',
    desc: '可实现在线公里(km)、米(m)、分米(dm)、厘米(cm)、里、丈、尺、寸、分、厘、海里(nmi)、英寻、英里、弗隆(fur)、码(yd)、英尺(ft)、英寸(in)、毫米(mm)、微米(um)间的互转互换。'
}, {
    key: 'power',
    name: '功率',
    desc: '可实现在线瓦(W)、千瓦(kW)、英制马力(HP)、米制马力(PS)、公斤·米/秒(kg·m/s)、千卡/秒(kcal/s)、英热单位/秒(Btu/s)、英尺·磅/秒(ft·lb/s)、焦耳/秒(J/s)、牛顿·米/秒(N·m/s)间的互转互换。'
}, {
    key: 'area',
    name: '面积',
    desc: '可实现在线平方公里(km2)、公顷(ha)、市亩、平方米(m2)、平方分米(dm2)、平方厘米(cm2)、平方毫米(mm2)、平方英里(sq mi)、英亩、平方竿(sq rd)、平方码(sq yd)、平方英尺(sq ft)、平方英寸(sq in)间的互转互换。'
}, {
    key: 'volume',
    name: '体积和容量',
    desc: '可实现在线立方米(Cubic meter)、公石(hectoliter)、十升(dekaliter)、立方分米(Cubic dm)、升(liter)、分升(deciliter)、厘升(centiliter)、立方厘米(Cubic cm)、毫升(milliliter)、立方毫米(Cubic millimeter)、桶(Barrel)、蒲式耳(Bushel)、配克(Peck)、夸脱(Quart)、品脱(Pint)、加仑(Gallon)、盎司(Ounce)、打兰(dram)、量滴(Minim)、立方码(Cubic yard)、立方英尺(Cubic foot)、立方英寸(Cubic inch)间的互转互换。'
}, {
    key: 'heat',
    name: '功、能和热量',
    desc: '可实现在线焦耳(J)、公斤·米(kg·m)、米制马力·时(PS·h)、英制马力·时(HP·h)、千瓦·时(kW·h)、千卡(kcal)、英热单位(Btu)、英尺·磅(ft·lb)间的互转互换。'
}, {
    key: 'pressure',
    name: '压力',
    desc: '可实现巴(bar)、华氏度千帕(kPa)、百帕(hPa)、毫巴(mbar)、帕斯卡、标准大气压(atm)、毫米汞柱(mmHg)、磅力平米英尺英寸、毫米水柱、公斤力平方厘米等压力计量单位间的互转互换。'
}, {
    key: 'temp',
    name: '温度',
    desc: '可实现在线摄氏度(CELSIUS EQUALS)、华氏度(FAHENHEIT EQUALS)、开氏度(KELVIN EQUALS)、兰氏度(RANKINE EQUALS)、列氏度(REAUMUR EQUALS)五种温度计量单位间的互转互换。'
}, {
    key: 'weight',
    name: '重量',
    desc: '可实现在线吨(Tonne)、公斤(Kilogram)、克(Gram)、毫克(Milligram)、市斤、担、两、钱、磅(Pound)、盎司(Ounce)、英钱(PennyWeight)、格令(Grain)、长吨(British long ton)、短吨(US short ton)、英担(British long hundredweight)、美担(US short hundredweight)、英石(Stone)、打兰(Dram)间的互转互换。'
}]

/**
 * 长度单位
 */
export const LENGTH = [{
    key: 'mKilometer',
    name: '公里(km)'
}, {
    key: 'mMeter',
    name: '米(m)'
}, {
    key: 'mDecimeter',
    name: '分米(dm)'
}, {
    key: 'mCentimeter',
    name: '厘米(cm)'
}, {
    key: 'mMillimeter',
    name: '毫米(mm)'
}, {
    key: 'mMicronmeter',
    name: '微米(um)'
}, {
    key: 'mLimeter',
    name: '里'
}, {
    key: 'mZhangmeter',
    name: '丈'
}, {
    key: 'mChimeter',
    name: '尺'
}, {
    key: 'mCunmeter',
    name: '寸'
}, {
    key: 'mFenmeter',
    name: '分'
}, {
    key: 'mmLimeter',
    name: '厘'
}, {
    key: 'nautMile',
    name: '海里(nmi)'
}, {
    key: 'nautFathom',
    name: '英寻'
}, {
    key: 'engMile',
    name: '英里(mi)'
}, {
    key: 'engFurlong',
    name: '弗隆(fur)'
}, {
    key: 'engYard',
    name: '码(yd)'
}, {
    key: 'engFoot',
    name: '英尺(ft)'
}, {
    key: 'engInch',
    name: '英寸(in)'
}]

/**
 * 功率单位
 */
export const POWER = [{
    key: 'Watt',
    name: '瓦(W)'
}, {
    key: 'Kilowatt',
    name: '千瓦(kW)'
}, {
    key: 'Horsepower',
    name: '英制马力(HP)'
}, {
    key: 'mHorsepower',
    name: '米制马力(PS)'
}, {
    key: 'kgms',
    name: '公斤·米/秒(kg·m/s)'
}, {
    key: 'kcals',
    name: '千卡/秒(kcal/s)'
}, {
    key: 'Btus',
    name: '英热单位/秒(Btu/s)'
}, {
    key: 'ftlbs',
    name: '英尺·磅/秒(ft·lb/s)'
}, {
    key: 'Js',
    name: '焦耳/秒(J/s)'
}, {
    key: 'Nms',
    name: '牛顿·米/秒(N·m/s)'
}]

/**
 * 面积单位
 */
export const AREA = [{
    key: 'mSquare_kilometer',
    name: '平方公里(km2)'
}, {
    key: 'mHectare',
    name: '公顷(ha)'
}, {
    key: 'mAre',
    name: '市亩'
}, {
    key: 'mSquare_meter',
    name: '平方米(m2)'
}, {
    key: 'mSquare_decimeter',
    name: '平方分米(dm2)'
}, {
    key: 'mSquare_centimeter',
    name: '平方厘米(cm2)'
}, {
    key: 'mSquare_millimeter',
    name: '平方毫米(mm2)'
}, {
    key: 'engSquare_mile',
    name: '平方英里(sq mi)'
}, {
    key: 'engAcre',
    name: '英亩'
}, {
    key: 'usSquare_rod',
    name: '平方竿(sq rd)'
}, {
    key: 'engSquare_yard',
    name: '平方码(sq yd)'
}, {
    key: 'engSquare_foot',
    name: '平方英尺(sq ft)'
}, {
    key: 'engSquare_inch',
    name: '平方英寸(sq in)'
}]

/**
 * 体积和容量
 */
export const VOLUME = [
    {
        key: "【公 制】",
        name: "【公 制】",
        children: [
            {
                key: "mCubic_meter",
                name: "立方米(m3)"
            },
            {
                key: "mHectoliter",
                name: "公石(hl)"
            },
            {
                key: "mDekaliter",
                name: "十升(dal)"
            },
            {
                key: "mLiter",
                name: "立方分米(dm3)=升(l)"
            },
            {
                key: "mDeciliter",
                name: "分升(dl)"
            },
            {
                key: "mCentiliter",
                name: "厘升(cl)"
            },
            {
                key: "mMilliliter",
                name: "立方厘米(cm3)=毫升(ml)"
            },
            {
                key: "mCubic_millimeter",
                name: "立方毫米(mm3)"
            }
        ]
    },
    {
        key: "【美制干量】",
        name: "【美制干量】",
        children: [
            {
                key: "usdBarrel",
                name: "桶"
            },
            {
                key: "usdBushel",
                name: "蒲式耳(bu)"
            },
            {
                key: "usdPeck",
                name: "配克(pk)"
            },
            {
                key: "usdQuart",
                name: "夸脱(qt)"
            },
            {
                key: "usdPint",
                name: "品脱(pt)"
            }
        ]
    },
    {
        key: "【英制液量和干量】",
        name: "【英制液量和干量】",
        children: [
            {
                key: "briBarrel",
                name: "桶"
            },
            {
                key: "briBushel",
                name: "蒲式耳"
            },
            {
                key: "briGallon",
                name: "加仑(bal)"
            },
            {
                key: "briPint",
                name: "品脱(pt)"
            },
            {
                key: "briFluid_ounce",
                name: "液量盎司(fl oz)"
            }
        ]
    },
    {
        key: "【公制烹调制式】",
        name: "【公制烹调制式】",
        children: [
            {
                key: "mcTable_spoon",
                name: "汤勺(Table spoon)"
            },
            {
                key: "mcTea_spoon",
                name: "调羹(Tea spoon)"
            }
        ]
    },
    {
        key: "【美制烹调制式】",
        name: "【美制烹调制式】",
        children: [
            {
                key: "uscTable_spoon",
                name: "汤勺(Tbs)"
            },
            {
                key: "uscTea_spoon",
                name: "调羹(tsp)"
            },
            {
                key: "uscCup",
                name: "杯(fl oz)"
            }
        ]
    },
    {
        key: "【美制液量】",
        name: "【美制液量】",
        children: [
            {
                key: "uslBarrel",
                name: "桶[42加仑]"
            },
            {
                key: "uslGallon",
                name: "加仑(gal)"
            },
            {
                key: "uslQuart",
                name: "夸脱(qt)"
            },
            {
                key: "uslPint",
                name: "品脱(pt)"
            },
            {
                key: "uslGill",
                name: "及耳(gi)"
            },
            {
                key: "uslFluid_ounce",
                name: "液量盎司(fl oz)"
            },
            {
                key: "uslFluid_dram",
                name: "液量打兰(fl dr)"
            },
            {
                key: "uslMinim",
                name: "量滴(min)"
            }
        ]
    },
    {
        key: "【美英同制体积计量】",
        name: "【美英同制体积计量】",
        children: [
            {
                key: "uscAcre_foot",
                name: "亩英尺"
            },
            {
                key: "uscCubic_yard",
                name: "立方码"
            },
            {
                key: "uscCubic_foot",
                name: "立方英尺"
            },
            {
                key: "uscCubic_inch",
                name: "立方英寸"
            }
        ]
    }
]

/**
 * 功、能和热量单位
 */
export const HEAT = [{
    key: 'Joule',
    name: '焦耳(J)'
}, {
    key: 'Kgm',
    name: '公斤·米(kg·m)'
}, {
    key: 'Psh',
    name: '米制马力·时(PS·h'
}, {
    key: 'Hph',
    name: '英制马力·时(HP·h)'
}, {
    key: 'Kwh',
    name: '千瓦·时(kW·h)'
}, {
    key: 'Kcal',
    name: '千卡(kcal)'
}, {
    key: 'Btu',
    name: '英热单位(Btu)'
}, {
    key: 'Ftlb',
    name: '英尺·磅(ft·lb)'
}]

/**
 * 压力单位
 */
export const PRESSURE = [{
    key: 'mBar',
    name: '巴(bar)'
}, {
    key: 'mKilopascal',
    name: '千帕(kPa)'
}, {
    key: 'mHectopascal',
    name: '百帕(hPa)'
}, {
    key: 'mMillibar',
    name: '毫巴(mbar)'
}, {
    key: 'mPascal',
    name: '帕斯卡(Pa = N/m2)'
}, {
    key: 'mAtm',
    name: '标准大气压(atm)'
}, {
    key: 'mMillimeter_Hg',
    name: '毫米汞柱(托)(mm Hg = Torr)'
}, {
    key: 'engPound_sq_foot',
    name: '磅力/英尺2(lbf/ft2)'
}, {
    key: 'engPound_sq_inch',
    name: '磅力/英寸2(lbf/in2 = PSI)'
}, {
    key: 'engInch_Hg',
    name: '英吋汞柱(in Hg)'
}, {
    key: 'xpressKg_sq_cm',
    name: '公斤力/厘米2(kgf/cm2)'
}, {
    key: 'xpressKg_sq_m',
    name: '公斤力/米2(kgf/m2)'
}, {
    key: 'mmmH2O',
    name: '毫米水柱(mmH2O)'
}]

/**
 * 温度
 */
export const TEMP = [{
    key: 'tempCelsius',
    name: '摄氏度(C)'
}, {
    key: 'tempFahr',
    name: '华氏度(F)'
}, {
    key: 'tempKelvin',
    name: '开氏度(K)'
}, {
    key: 'tempRankine',
    name: '兰氏度(Ra)'
}, {
    key: 'tempReaumur',
    name: '列氏度(Re)'
}]

/**
 * 重量
 */
export const WEIGHT = [
    {
        key: "【公 制】",
        name: "【公 制】",
        children: [
            {
                key: "mTon",
                name: "吨"
            },
            {
                key: "mKilogram",
                name: "公斤(kg)"
            },
            {
                key: "mGram",
                name: "克(g)"
            },
            {
                key: "mMilligram",
                name: "毫克(mg)"
            }
        ]
    },
    {
        key: "【市 制】",
        name: "【市 制】",
        children: [
            {
                key: "cJin",
                name: "市斤"
            },
            {
                key: "cDan",
                name: "担"
            },
            {
                key: "cLiang",
                name: "两"
            },
            {
                key: "cQian",
                name: "钱"
            }
        ]
    },
    {
        key: "【金 衡 制】",
        name: "【金 衡 制】",
        children: [
            {
                key: "troyPound",
                name: "金衡磅(lb t)"
            },
            {
                key: "troyOunce",
                name: "金衡盎司(oz t)"
            },
            {
                key: "troyDWT",
                name: "英钱(dwt)"
            },
            {
                key: "troyGrain",
                name: "金衡格令"
            }
        ]
    },
    {
        key: "【常 衡 制】",
        name: "【常 衡 制】",
        children: [
            {
                key: "briTon",
                name: "(英制)长吨"
            },
            {
                key: "usTon",
                name: "(美制)短吨"
            },
            {
                key: "briCWT",
                name: "英担(cwt)"
            },
            {
                key: "usCWT",
                name: "美担(cwt)"
            },
            {
                key: "briStone",
                name: "英石"
            },
            {
                key: "avdpPound",
                name: "磅(lb)"
            },
            {
                key: "avdpOunce",
                name: "盎司(oz)"
            },
            {
                key: "avdpDram",
                name: "打兰(dr)"
            },
            {
                key: "avdpGrain",
                name: "格令"
            }
        ]
    }
]

/**
 * 换算对应关系
 */
export const MATCHUUP = {
    length: LENGTH,
    power: POWER,
    area: AREA,
    volume: VOLUME,
    heat: HEAT,
    pressure: PRESSURE,
    temp: TEMP,
    weight: WEIGHT
}