
[![NPM](https://nodei.co/npm/turkey-city-regions.png)](https://npmjs.org/package/turkey-city-regions)


# turkey-city-regions

If you want the list of Turkey regions, you can easily include it in your project and use it.

## Source data url
[https://postakodu.ptt.gov.tr](https://postakodu.ptt.gov.tr/Dosyalar/pk_list.zip)


How to use?: example

```
npm install turkey-city-regions
```

```
import TurkeyRegions turkey-city-regions

var allAreas = TurkeyRegions.getAllData // all data list <Array>

//Example
[ { il: 'ADANA',
    ilce: 'ALADAĞ',
    semt: 'ALADAĞ',
    mahalle: 'AKPINAR MAH',
    posta_kodu: '01720' }
    ....
]

```