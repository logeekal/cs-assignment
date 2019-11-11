import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})


export class DataProviderService {

  public countryData: Array<any>;

  public countryDataWithIcon : Array<any> = [];

  public months: Array<any>;

  public years: Array<number>;

  constructor() {
    console.log(`Definining data provider Service.`);
    this.getCountrydata();
    this.genCountryDatawithIcon();
    console.log(this.countryDataWithIcon);

    this.years = [2017, 2018, 2019];
    this.months = [
      { month: "January", days: 31 },
      { month: "February", days: 28 },
      { month: "March", days: 30 },
      { month: "April", days: 31 },
      { month: "March", days: 30 },
      { month: "April", days: 30 },
      { month: "May", days: 31 },
      { month: "June", days: 30 },
      { month: "July", days: 31 },
      { month: "August", days: 31 },
      { month: "September", days: 30 },
      { month: "October", days: 31 },
      { month: "November", days: 30 },
      { month: "December", days: 31 }
    ];

  }

  getCountrydata(){
    this.countryData =  [{id:'AF', label:'Afghanistan'},
    {id:'AX', label:'Åland Islands'},
    {id:'AL', label:'Albania'},
    {id:'DZ', label:'Algeria'},
    {id:'AS', label:'American Samoa'},
    {id:'AD', label:'Andorra'},
    {id:'AO', label:'Angola'},
    {id:'AI', label:'Anguilla'},
    {id:'AQ', label:'Antarctica'},
    {id:'AG', label:'Antigua and Barbuda'},
    {id:'AR', label:'Argentina'},
    {id:'AM', label:'Armenia'},
    {id:'AW', label:'Aruba'},
    {id:'AU', label:'Australia'},
    {id:'AT', label:'Austria'},
    {id:'AZ', label:'Azerbaijan'},
    {id:'BH', label:'Bahrain'},
    {id:'BS', label:'Bahamas'},
    {id:'BD', label:'Bangladesh'},
    {id:'BB', label:'Barbados'},
    {id:'BY', label:'Belarus'},
    {id:'BE', label:'Belgium'},
    {id:'BZ', label:'Belize'},
    {id:'BJ', label:'Benin'},
    {id:'BM', label:'Bermuda'},
    {id:'BT', label:'Bhutan'},
    {id:'BO', label:'Bolivia, Plurinational State of'},
    {id:'BQ', label:'Bonaire, Sint Eustatius and Saba'},
    {id:'BA', label:'Bosnia and Herzegovina'},
    {id:'BW', label:'Botswana'},
    {id:'BV', label:'Bouvet Island'},
    {id:'BR', label:'Brazil'},
    {id:'IO', label:'British Indian Ocean Territory'},
    {id:'BN', label:'Brunei Darussalam'},
    {id:'BG', label:'Bulgaria'},
    {id:'BF', label:'Burkina Faso'},
    {id:'BI', label:'Burundi'},
    {id:'KH', label:'Cambodia'},
    {id:'CM', label:'Cameroon'},
    {id:'CA', label:'Canada'},
    {id:'CV', label:'Cape Verde'},
    {id:'KY', label:'Cayman Islands'},
    {id:'CF', label:'Central African Republic'},
    {id:'TD', label:'Chad'},
    {id:'CL', label:'Chile'},
    {id:'CN', label:'China'},
    {id:'CX', label:'Christmas Island'},
    {id:'CC', label:'Cocos (Keeling) Islands'},
    {id:'CO', label:'Colombia'},
    {id:'KM', label:'Comoros'},
    {id:'CG', label:'Congo'},
    {id:'CD', label:'Congo, the Democratic Republic of the'},
    {id:'CK', label:'Cook Islands'},
    {id:'CR', label:'Costa Rica'},
    {id:'CI', label:'Côte d\'Ivoire'},
    {id:'HR', label:'Croatia'},
    {id:'CU', label:'Cuba'},
    {id:'CW', label:'Curaçao'},
    {id:'CY', label:'Cyprus'},
    {id:'CZ', label:'Czech Republic'},
    {id:'DK', label:'Denmark'},
    {id:'DJ', label:'Djibouti'},
    {id:'DM', label:'Dominica'},
    {id:'DO', label:'Dominican Republic'},
    {id:'EC', label:'Ecuador'},
    {id:'EG', label:'Egypt'},
    {id:'SV', label:'El Salvador'},
    {id:'GQ', label:'Equatorial Guinea'},
    {id:'ER', label:'Eritrea'},
    {id:'EE', label:'Estonia'},
    {id:'ET', label:'Ethiopia'},
    {id:'FK', label:'Falkland Islands (Malvinas)'},
    {id:'FO', label:'Faroe Islands'},
    {id:'FJ', label:'Fiji'},
    {id:'FI', label:'Finland'},
    {id:'FR', label:'France'},
    {id:'GF', label:'French Guiana'},
    {id:'PF', label:'French Polynesia'},
    {id:'TF', label:'French Southern Territories'},
    {id:'GA', label:'Gabon'},
    {id:'GM', label:'Gambia'},
    {id:'GE', label:'Georgia'},
    {id:'DE', label:'Germany'},
    {id:'GH', label:'Ghana'},
    {id:'GI', label:'Gibraltar'},
    {id:'GR', label:'Greece'},
    {id:'GL', label:'Greenland'},
    {id:'GD', label:'Grenada'},
    {id:'GP', label:'Guadeloupe'},
    {id:'GU', label:'Guam'},
    {id:'GT', label:'Guatemala'},
    {id:'GG', label:'Guernsey'},
    {id:'GN', label:'Guinea'},
    {id:'GW', label:'Guinea-Bissau'},
    {id:'GY', label:'Guyana'},
    {id:'HT', label:'Haiti'},
    {id:'HM', label:'Heard Island and McDonald Islands'},
    {id:'VA', label:'Holy See (Vatican City State)'},
    {id:'HN', label:'Honduras'},
    {id:'HK', label:'Hong Kong'},
    {id:'HU', label:'Hungary'},
    {id:'IS', label:'Iceland'},
    {id:'IN', label:'India'},
    {id:'ID', label:'Indonesia'},
    {id:'IR', label:'Iran, Islamic Republic of'},
    {id:'IQ', label:'Iraq'},
    {id:'IE', label:'Ireland'},
    {id:'IM', label:'Isle of Man'},
    {id:'IL', label:'Israel'},
    {id:'IT', label:'Italy'},
    {id:'JM', label:'Jamaica'},
    {id:'JP', label:'Japan'},
    {id:'JE', label:'Jersey'},
    {id:'JO', label:'Jordan'},
    {id:'KZ', label:'Kazakhstan'},
    {id:'KE', label:'Kenya'},
    {id:'KI', label:'Kiribati'},
    {id:'KP', label:'Korea, Democratic People\'s Republic of'},
    {id:'KR', label:'Korea, Republic of'},
    {id:'KW', label:'Kuwait'},
    {id:'KG', label:'Kyrgyzstan'},
    {id:'LA', label:'Lao People\s Democratic Republic'},
    {id:'LV', label:'Latvia'},
    {id:'LB', label:'Lebanon'},
    {id:'LS', label:'Lesotho'},
    {id:'LR', label:'Liberia'},
    {id:'LY', label:'Libya'},
    {id:'LI', label:'Liechtenstein'},
    {id:'LT', label:'Lithuania'},
    {id:'LU', label:'Luxembourg'},
    {id:'MO', label:'Macao'},
    {id:'MK', label:'Macedonia, the Former Yugoslav Republic of'},
    {id:'MG', label:'Madagascar'},
    {id:'MW', label:'Malawi'},
    {id:'MY', label:'Malaysia'},
    {id:'MV', label:'Maldives'},
    {id:'ML', label:'Mali'},
    {id:'MT', label:'Malta'},
    {id:'MH', label:'Marshall Islands'},
    {id:'MQ', label:'Martinique'},
    {id:'MR', label:'Mauritania'},
    {id:'MU', label:'Mauritius'},
    {id:'YT', label:'Mayotte'},
    {id:'MX', label:'Mexico'},
    {id:'FM', label:'Micronesia, Federated States of'},
    {id:'MD', label:'Moldova, Republic of'},
    {id:'MC', label:'Monaco'},
    {id:'MN', label:'Mongolia'},
    {id:'ME', label:'Montenegro'},
    {id:'MS', label:'Montserrat'},
    {id:'MA', label:'Morocco'},
    {id:'MZ', label:'Mozambique'},
    {id:'MM', label:'Myanmar'},
    {id:'NA', label:'Namibia'},
    {id:'NR', label:'Nauru'},
    {id:'NP', label:'Nepal'},
    {id:'NL', label:'Netherlands'},
    {id:'NC', label:'New Caledonia'},
    {id:'NZ', label:'New Zealand'},
    {id:'NI', label:'Nicaragua'},
    {id:'NE', label:'Niger'},
    {id:'NG', label:'Nigeria'},
    {id:'NU', label:'Niue'},
    {id:'NF', label:'Norfolk Island'},
    {id:'MP', label:'Northern Mariana Islands'},
    {id:'NO', label:'Norway'},
    {id:'OM', label:'Oman'},
    {id:'PK', label:'Pakistan'},
    {id:'PW', label:'Palau'},
    {id:'PS', label:'Palestine, State of'},
    {id:'PA', label:'Panama'},
    {id:'PG', label:'Papua New Guinea'},
    {id:'PY', label:'Paraguay'},
    {id:'PE', label:'Peru'},
    {id:'PH', label:'Philippines'},
    {id:'PN', label:'Pitcairn'},
    {id:'PL', label:'Poland'},
    {id:'PT', label:'Portugal'},
    {id:'PR', label:'Puerto Rico'},
    {id:'QA', label:'Qatar'},
    {id:'RE', label:'Réunion'},
    {id:'RO', label:'Romania'},
    {id:'RU', label:'Russian Federation'},
    {id:'RW', label:'Rwanda'},
    {id:'BL', label:'Saint Barthélemy'},
    {id:'SH', label:'Saint Helena, Ascension and Tristan da Cunha'},
    {id:'KN', label:'Saint Kitts and Nevis'},
    {id:'LC', label:'Saint Lucia'},
    {id:'MF', label:'Saint Martin (French part)'},
    {id:'PM', label:'Saint Pierre and Miquelon'},
    {id:'VC', label:'Saint Vincent and the Grenadines'},
    {id:'WS', label:'Samoa'},
    {id:'SM', label:'San Marino'},
    {id:'ST', label:'Sao Tome and Principe'},
    {id:'SA', label:'Saudi Arabia'},
    {id:'SN', label:'Senegal'},
    {id:'RS', label:'Serbia'},
    {id:'SC', label:'Seychelles'},
    {id:'SL', label:'Sierra Leone'},
    {id:'SG', label:'Singapore'},
    {id:'SX', label:'Sint Maarten (Dutch part)'},
    {id:'SK', label:'Slovakia'},
    {id:'SI', label:'Slovenia'},
    {id:'SB', label:'Solomon Islands'},
    {id:'SO', label:'Somalia'},
    {id:'ZA', label:'South Africa'},
    {id:'GS', label:'South Georgia and the South Sandwich Islands'},
    {id:'SS', label:'South Sudan'},
    {id:'ES', label:'Spain'},
    {id:'LK', label:'Sri Lanka'},
    {id:'SD', label:'Sudan'},
    {id:'SR', label:'Suriname'},
    {id:'SJ', label:'Svalbard and Jan Mayen'},
    {id:'SZ', label:'Swaziland'},
    {id:'SE', label:'Sweden'},
    {id:'CH', label:'Switzerland'},
    {id:'SY', label:'Syrian Arab Republic'},
    {id:'TW', label:'Taiwan, Province of China'},
    {id:'TJ', label:'Tajikistan'},
    {id:'TZ', label:'Tanzania, United Republic of'},
    {id:'TH', label:'Thailand'},
    {id:'TL', label:'Timor-Leste'},
    {id:'TG', label:'Togo'},
    {id:'TK', label:'Tokelau'},
    {id:'TO', label:'Tonga'},
    {id:'TT', label:'Trinidad and Tobago'},
    {id:'TN', label:'Tunisia'},
    {id:'TR', label:'Turkey'},
    {id:'TM', label:'Turkmenistan'},
    {id:'TC', label:'Turks and Caicos Islands'},
    {id:'TV', label:'Tuvalu'},
    {id:'UG', label:'Uganda'},
    {id:'UA', label:'Ukraine'},
    {id:'AE', label:'United Arab Emirates'},
    {id:'GB', label:'United Kingdom'},
    {id:'US', label:'United States'},
    {id:'UM', label:'United States Minor Outlying Islands'},
    {id:'UY', label:'Uruguay'},
    {id:'UZ', label:'Uzbekistan'},
    {id:'VU', label:'Vanuatu'},
    {id:'VE', label:'Venezuela, Bolivarian Republic of'},
    {id:'VN', label:'Viet Nam'},
    {id:'VG', label:'Virgin Islands, British'},
    {id:'VI', label:'Virgin Islands, U.S.'},
    {id:'WF', label:'Wallis and Futuna'},
    {id:'EH', label:'Western Sahara'},
    {id:'YE', label:'Yemen'},
    {id:'ZM', label:'Zambia'},
    {id:'ZW', label:'Zimbabwe'},
    ]
  }

  genCountryDatawithIcon(){
  
    for(let country of this.countryData){
      let icon =  `<span class="flag-icon-${country.id.toLocaleLowerCase()}"></span>${country.country}`;
      icon = `flag-icon flag-icon-${country.id.toLocaleLowerCase()}`;
      this.countryDataWithIcon.push({
        ...country,
        icon: icon
      })
    }
    // this.countryDataWithIcon =  this.countryData.map((country, index) => {
    //   let icon =
    //   this.countryData[index]['label'] = icon;
    // })


  }


  prepareData(parameter, options) {
    console.log(parameter);
    console.log(options);
    let years = this.years;
    let months = this.months;
    let finalData = {};
    let summary = {};
    let labels;

    for (let year of years) {
      finalData[year] = {};
      for (let month of months) {
        let Xlabels = [];
        let YData = [];
        for (let date = 1; date <= month.days; date++) {
          Xlabels.push(date);
          YData.push(Math.ceil((Math.random() * 1000000) % 50));
        }
        let YLabels = parameter;

        finalData[year][month.month] = {
          labels: Xlabels,
          datasets: [
            {
              ...options,
              label: YLabels,
              data: YData
            }
          ]
        };

        let total = YData.reduce((prev, curr)=>{return prev +  curr});
        let avg = Math.round(total/YData.length);
        summary = {
          ...summary,
          [year]: {
            ...summary[year],
            [month.month]: {
              total: total,
              average:  avg
            }
          }
        }
      }
    }

    console.log(summary);
    return {finalData, summary};
  }

  getPageStats(){
    return [{page:'/store/',traffic:'4283',unique:'3000',bounce_rate:'70.044361428905%'},
    {page:'/store/women-fashion/',traffic:'7642',unique:'2000',bounce_rate:'26.1711593823606%'},
    {page:'/store/men-fashion/',traffic:'3447',unique:'2000',bounce_rate:'58.021467943139%'},
    {page:'/store/dashboard/',traffic:'3250',unique:'3800',bounce_rate:'116.923076923077%'},
    {page:'/inbox/',traffic:'5533',unique:'4400',bounce_rate:'79.5228628230616%'}
    ];

  }


  getSocialStats(){
    return [{network:'twitter',traffic:'4283',achieved:70.044361428905},
    {network:'linkedin',traffic:'7642',achieved:26.1711593823606},
    {network:'facebook',traffic:'3447',achieved:58.021467943139},
    {network:'Instagram',traffic:'3250',achieved:11.923076923077},
    {network:'youtube',traffic:'5533',achieved:79.5228628230616},
    ]
  }


}
