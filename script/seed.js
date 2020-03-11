'use strict'

const db = require('../server/db')
const {
  User,
  Product,
  Order,
  OrderProduct,
  ShippingAddress
} = require('../server/db/models')

//USERS DUMMY DATA
const users = [
  {
    username: 'mather0',
    isAdmin: true,
    imageUrl: 'https://robohash.org/velitmolestiasut.bmp?size=50x50&set=set1',
    email: 'kelliot0@shareasale.com',
    password: 'TqlOCD7nOIae'
  },
  {
    username: 'cmacdiarmond1',
    isAdmin: true,
    imageUrl: 'https://robohash.org/eumdeseruntminima.jpg?size=50x50&set=set1',
    email: 'cmuggleston1@tiny.cc',
    password: 'iTqbWQWoEla'
  },
  {
    username: 'bdjurisic2',
    imageUrl: 'https://robohash.org/eanobisaut.jpg?size=50x50&set=set1',
    email: 'tturfes2@yahoo.com',
    password: 'ZgSTggZXpm7C'
  },
  {
    username: 'dissatt3',
    isAdmin: false,
    email: 'agarrals3@1688.com',
    password: 'YARsxs'
  },
  {
    username: 'lhumphrys4',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/accusantiumrepudiandaecorrupti.jpg?size=50x50&set=set1',
    email: 'kbrotheridge4@msn.com',
    password: 'KoROdKXmA'
  },
  {
    username: 'lbachura5',
    isAdmin: true,
    imageUrl: 'https://robohash.org/etillumplaceat.jpg?size=50x50&set=set1',
    email: 'mserle5@berkeley.edu',
    password: 'fXI2ucYipndz'
  },
  {
    username: 'bshortell6',
    imageUrl:
      'https://robohash.org/dictaquibusdamquaerat.jpg?size=50x50&set=set1',
    email: 'mmatijevic6@pagesperso-orange.fr',
    password: 'JRYcOmOqLDR'
  },
  {
    username: 'mpauler7',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/quiadebitisvoluptatem.png?size=50x50&set=set1',
    email: 'bdenne7@phpbb.com',
    password: 'i1iCDw2wAtnK'
  },
  {
    username: 'scorck8',
    isAdmin: false,
    imageUrl: 'https://robohash.org/quaeabrepellat.bmp?size=50x50&set=set1',
    email: 'abollard8@blinklist.com',
    password: '9Gcgr2Kb'
  },
  {
    username: 'pmoston9',
    isAdmin: false,
    imageUrl: 'https://robohash.org/dignissimosenimaut.bmp?size=50x50&set=set1',
    email: 'hallright9@mapquest.com',
    password: 'bT4qKtudiJTG'
  },
  {
    username: 'kpavkovica',
    imageUrl:
      'https://robohash.org/doloremomnisexpedita.bmp?size=50x50&set=set1',
    email: 'npreblea@google.com.br',
    password: 'QdseQwunkT1'
  },
  {
    username: 'mmacfaellb',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/debitisremblanditiis.jpg?size=50x50&set=set1',
    email: 'fflanaghanb@ucoz.com',
    password: 'uHdu8JHLN'
  },
  {
    username: 'bgoslingc',
    imageUrl:
      'https://robohash.org/facereplaceatdoloribus.jpg?size=50x50&set=set1',
    email: 'tcallwayc@topsy.com',
    password: 'cXms96PLfdT6'
  },
  {
    username: 'gbornd',
    isAdmin: false,
    email: 'thamed@ycombinator.com',
    password: '0rEs09'
  },
  {
    username: 'kjaulmee',
    isAdmin: false,
    email: 'lgoodalee@dailymotion.com',
    password: 'gsxODZzlJ4K'
  },
  {
    username: 'fprawlef',
    isAdmin: false,
    imageUrl: 'https://robohash.org/sequiquisiste.jpg?size=50x50&set=set1',
    email: 'cbalsillief@phpbb.com',
    password: 'xuON5J'
  },
  {
    username: 'kcheccuccig',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/occaecatiinciduntquisquam.bmp?size=50x50&set=set1',
    email: 'mprielg@eepurl.com',
    password: 'lmCWieg'
  },
  {
    username: 'bklinckh',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/praesentiummolestiaeexercitationem.bmp?size=50x50&set=set1',
    email: 'acasettah@hibu.com',
    password: 'DLLPZKKcUhgZ'
  },
  {
    username: 'jmingayi',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/perspiciatisquiminus.jpg?size=50x50&set=set1',
    email: 'dlaurentinoi@xrea.com',
    password: 'mCYu2EhZ'
  },
  {
    username: 'dzmitrovichj',
    isAdmin: false,
    imageUrl: 'https://robohash.org/quiavelitqui.png?size=50x50&set=set1',
    email: 'sorrobinj@vinaora.com',
    password: 'I2QfTQ'
  },
  {
    username: 'hwalchk',
    imageUrl: 'https://robohash.org/velitnamin.bmp?size=50x50&set=set1',
    email: 'gmccrannk@constantcontact.com',
    password: 'VMdEheAKqTSC'
  },
  {
    username: 'tdorracottl',
    isAdmin: true,
    imageUrl: 'https://robohash.org/estvoluptasquam.bmp?size=50x50&set=set1',
    email: 'dhelml@opera.com',
    password: 'OXBnm2'
  },
  {
    username: 'tlabernm',
    isAdmin: true,
    imageUrl: 'https://robohash.org/possimusutqui.png?size=50x50&set=set1',
    email: 'ccosleym@a8.net',
    password: 'AlhIA3'
  },
  {
    username: 'thaithn',
    imageUrl: 'https://robohash.org/corporisquiaenim.bmp?size=50x50&set=set1',
    email: 'vmuston@merriam-webster.com',
    password: 'lThq5VEYd6'
  },
  {
    username: 'lseageo',
    isAdmin: true,
    imageUrl: 'https://robohash.org/doloresseet.jpg?size=50x50&set=set1',
    email: 'csommervilleo@google.nl',
    password: '9QsxEfYV'
  },
  {
    username: 'idunsp',
    isAdmin: true,
    imageUrl: 'https://robohash.org/voluptasliberoeos.png?size=50x50&set=set1',
    email: 'mpascoep@mtv.com',
    password: '1cFYghY8AUab'
  },
  {
    username: 'cmussottiq',
    isAdmin: true,
    imageUrl: 'https://robohash.org/velitplaceatfacere.jpg?size=50x50&set=set1',
    email: 'mhughillq@phoca.cz',
    password: 'Dvpc5VzkI'
  },
  {
    username: 'emityashinr',
    email: 'cbunstoner@jiathis.com',
    password: 'e0n0eIE'
  },
  {
    username: 'lhaberchams',
    isAdmin: false,
    email: 'hrymmers@comcast.net',
    password: '5va0983d'
  },
  {
    username: 'cblackbornet',
    imageUrl:
      'https://robohash.org/necessitatibuslaborevoluptate.png?size=50x50&set=set1',
    email: 'hcoatht@google.cn',
    password: 'EmOMw00jNv'
  },
  {
    username: 'jcardeu',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/inciduntperspiciatisvitae.jpg?size=50x50&set=set1',
    email: 'jbertholinu@mayoclinic.com',
    password: 'Ao4hPQCyy'
  },
  {
    username: 'bvassbenderv',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/accusantiumexpeditalaboriosam.jpg?size=50x50&set=set1',
    email: 'snelliganv@ucoz.com',
    password: 'wweqJi'
  },
  {
    username: 'akumarw',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/evenieteligendiarchitecto.png?size=50x50&set=set1',
    email: 'hfarrenw@arizona.edu',
    password: 'W5Jy61'
  },
  {
    username: 'chabdenx',
    isAdmin: true,
    imageUrl: 'https://robohash.org/ineanon.bmp?size=50x50&set=set1',
    email: 'emckeefryx@examiner.com',
    password: 'SrkixaY'
  },
  {
    username: 'dbonneyy',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/voluptatesarchitectodolor.bmp?size=50x50&set=set1',
    email: 'koramy@dion.ne.jp',
    password: 'sN2k51UV'
  },
  {
    username: 'nsweetlandz',
    isAdmin: true,
    imageUrl: 'https://robohash.org/aliasomnisratione.jpg?size=50x50&set=set1',
    email: 'abarghz@alexa.com',
    password: 'AzYSWGSkL'
  },
  {
    username: 'kdarington10',
    isAdmin: true,
    imageUrl: 'https://robohash.org/istebeataepariatur.png?size=50x50&set=set1',
    email: 'rfort10@theatlantic.com',
    password: 'IsFckBeECjCi'
  },
  {
    username: 'tcoatsworth11',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/sitdoloremquedolore.jpg?size=50x50&set=set1',
    email: 'cmacskeaghan11@intel.com',
    password: 'J6hDkaG'
  },
  {
    username: 'klaying12',
    isAdmin: false,
    imageUrl: 'https://robohash.org/quiasuntquaerat.png?size=50x50&set=set1',
    email: 'eblazek12@jiathis.com',
    password: '2KzcD2kWu3u'
  },
  {
    username: 'btemlett13',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/accusamusetlaudantium.bmp?size=50x50&set=set1',
    email: 'graiker13@bing.com',
    password: 'ns1Q0SS'
  },
  {
    username: 'istiller14',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/teneturipsamdebitis.bmp?size=50x50&set=set1',
    email: 'mmarmion14@scientificamerican.com',
    password: 'QxfKQ40LkR'
  },
  {
    username: 'lbinley15',
    isAdmin: true,
    imageUrl: 'https://robohash.org/easitvoluptatibus.png?size=50x50&set=set1',
    email: 'htwycross15@sfgate.com',
    password: 'J0SMpbrpR'
  },
  {
    username: 'mclutton16',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/distinctioquisomnis.bmp?size=50x50&set=set1',
    email: 'jmarkussen16@buzzfeed.com',
    password: 'O2KnX8G'
  },
  {
    username: 'pmullane17',
    isAdmin: false,
    imageUrl: 'https://robohash.org/etpossimusab.png?size=50x50&set=set1',
    email: 'sfarnorth17@digg.com',
    password: 'j9jRr0v9E4K'
  },
  {
    username: 'cgreenlees18',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/etsuscipitvoluptatem.bmp?size=50x50&set=set1',
    email: 'mtallowin18@mayoclinic.com',
    password: 'iD0T45u'
  },
  {
    username: 'cnorsister19',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/occaecatiaccusantiumenim.png?size=50x50&set=set1',
    email: 'nmole19@people.com.cn',
    password: 'I2vshBB'
  },
  {
    username: 'sdebenedictis1a',
    imageUrl:
      'https://robohash.org/officiavoluptasadipisci.jpg?size=50x50&set=set1',
    email: 'msmithers1a@sourceforge.net',
    password: '0mvpCIQw'
  },
  {
    username: 'mbreeton1b',
    isAdmin: true,
    imageUrl: 'https://robohash.org/nemofacilisdebitis.bmp?size=50x50&set=set1',
    email: 'fgullam1b@statcounter.com',
    password: 'rigC7t'
  },
  {
    username: 'icottey1c',
    isAdmin: false,
    imageUrl: 'https://robohash.org/quoautemquasi.bmp?size=50x50&set=set1',
    email: 'rsymington1c@chron.com',
    password: 'Xl0DRU'
  },
  {
    username: 'evenney1d',
    imageUrl: 'https://robohash.org/suntdoloresa.png?size=50x50&set=set1',
    email: 'zpetrasso1d@artisteer.com',
    password: 'pL4QCs1kq'
  },
  {
    username: 'mingledew1e',
    isAdmin: true,
    email: 'sdeighton1e@github.com',
    password: 'xV1sOzqh6Zo'
  },
  {
    username: 'jkos1f',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/sedprovidenttemporibus.jpg?size=50x50&set=set1',
    email: 'hcornil1f@reverbnation.com',
    password: 'N3RNcqUFA'
  },
  {
    username: 'aciccarello1g',
    isAdmin: true,
    imageUrl: 'https://robohash.org/quaesuntsed.png?size=50x50&set=set1',
    email: 'stester1g@pen.io',
    password: 'hIQBoVCT'
  },
  {
    username: 'ztowlson1h',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/repudiandaevoluptatemdolorum.jpg?size=50x50&set=set1',
    email: 'vslowgrave1h@unesco.org',
    password: '0sk06nJH8VQv'
  },
  {
    username: 'bwallington1i',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/suntperferendissint.bmp?size=50x50&set=set1',
    email: 'pboatswain1i@com.com',
    password: 'zWOaufYC'
  },
  {
    username: 'dyukhnin1j',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/iustomolestiasblanditiis.jpg?size=50x50&set=set1',
    email: 'plovemore1j@bandcamp.com',
    password: 'NZ8TMNPPDVHr'
  },
  {
    username: 'rbabinski1k',
    isAdmin: false,
    imageUrl: 'https://robohash.org/atsintperspiciatis.jpg?size=50x50&set=set1',
    email: 'mpolland1k@pcworld.com',
    password: 'vRTESfS5EN'
  },
  {
    username: 'jmirfin1l',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/evenietrerumlaboriosam.png?size=50x50&set=set1',
    email: 'vhagwood1l@usatoday.com',
    password: 'I1TfcE5y'
  },
  {
    username: 'edufer1m',
    isAdmin: false,
    email: 'acarbert1m@bandcamp.com',
    password: 'g3XEWDMZjn'
  },
  {
    username: 'rsummerlad1n',
    isAdmin: false,
    imageUrl: 'https://robohash.org/dictadelectusqui.bmp?size=50x50&set=set1',
    email: 'dbertram1n@woothemes.com',
    password: 'hy2JSvZ1a3'
  },
  {
    username: 'achaffe1o',
    imageUrl: 'https://robohash.org/suntcorruptilibero.bmp?size=50x50&set=set1',
    email: 'natthow1o@ask.com',
    password: '0LDkeWd'
  },
  {
    username: 'egawthrope1p',
    isAdmin: true,
    imageUrl: 'https://robohash.org/facereipsamesse.png?size=50x50&set=set1',
    email: 'mbeagles1p@usda.gov',
    password: '1cmDBNtYR'
  },
  {
    username: 'kbabst1q',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/architectonumquamcorporis.png?size=50x50&set=set1',
    email: 'npaunton1q@redcross.org',
    password: 'Up0do7q'
  },
  {
    username: 'qgavin1r',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/omnisvelitvoluptatem.jpg?size=50x50&set=set1',
    email: 'tandrzejak1r@yandex.ru',
    password: 'loQcbjTl'
  },
  {
    username: 'jburchett1s',
    isAdmin: false,
    imageUrl: 'https://robohash.org/eteased.bmp?size=50x50&set=set1',
    email: 'zrebert1s@mtv.com',
    password: 'uS2urCre'
  },
  {
    username: 'dclewlowe1t',
    isAdmin: false,
    email: 'bciepluch1t@geocities.com',
    password: 'u255aQB8oPt'
  },
  {
    username: 'ggutteridge1u',
    isAdmin: false,
    imageUrl: 'https://robohash.org/nesciuntautveniam.png?size=50x50&set=set1',
    email: 'ldiclaudio1u@wikipedia.org',
    password: 'xFOauC'
  },
  {
    username: 'jwhapham1v',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/optioaliquidtempora.png?size=50x50&set=set1',
    email: 'vdibiagio1v@mozilla.com',
    password: 'OXOzWT8Q5tM2'
  },
  {
    username: 'eelks1w',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/ipsumnobisconsequuntur.png?size=50x50&set=set1',
    email: 'ctomkins1w@ycombinator.com',
    password: 'Sg9c5kKj'
  },
  {
    username: 'wmarcone1x',
    isAdmin: true,
    imageUrl: 'https://robohash.org/odionobisexplicabo.jpg?size=50x50&set=set1',
    email: 'scaddie1x@soup.io',
    password: 'mFMG0W68Z'
  },
  {
    username: 'amarmion1y',
    isAdmin: true,
    imageUrl: 'https://robohash.org/quidemidrerum.png?size=50x50&set=set1',
    email: 'lfutcher1y@imageshack.us',
    password: 'INHMxeL1ulrA'
  },
  {
    username: 'ttebbut1z',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/dolorematquelaudantium.jpg?size=50x50&set=set1',
    email: 'mdelacoste1z@msn.com',
    password: 'rR0NJ38Q3'
  },
  {
    username: 'lbrixey20',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/voluptatemexplicabocorrupti.png?size=50x50&set=set1',
    email: 'fbingell20@cdbaby.com',
    password: '0Z7qBZ8b2Gu'
  },
  {
    username: 'bpelfer21',
    isAdmin: false,
    imageUrl: 'https://robohash.org/sedinnisi.png?size=50x50&set=set1',
    email: 'amccusker21@qq.com',
    password: 'tx3t1NCS'
  },
  {
    username: 'omuriel22',
    isAdmin: true,
    email: 'rgorman22@mac.com',
    password: '5bXqZdKx3lx'
  },
  {
    username: 'acorss23',
    isAdmin: false,
    imageUrl: 'https://robohash.org/temporaillumvel.bmp?size=50x50&set=set1',
    email: 'cdobrowolny23@redcross.org',
    password: 'WISpTPIZR0T'
  },
  {
    username: 'ndemcik24',
    isAdmin: true,
    imageUrl: 'https://robohash.org/essequaeratquo.bmp?size=50x50&set=set1',
    email: 'gfillgate24@mysql.com',
    password: 'HGBTBNHzzSl'
  },
  {
    username: 'cgorwood25',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/repudiandaeminimaquae.bmp?size=50x50&set=set1',
    email: 'mruggier25@globo.com',
    password: 'qZudQQB659'
  },
  {
    username: 'tsante26',
    isAdmin: false,
    imageUrl: 'https://robohash.org/etvelvoluptas.bmp?size=50x50&set=set1',
    email: 'wnother26@webmd.com',
    password: 'yw0dyaUbE'
  },
  {
    username: 'mpaule27',
    isAdmin: false,
    email: 'jfont27@linkedin.com',
    password: 'c6EzuYkAEgQr'
  },
  {
    username: 'pobradane28',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/magnamquodveritatis.jpg?size=50x50&set=set1',
    email: 'ctynnan28@nih.gov',
    password: '9g3Mnu0Sk7'
  },
  {
    username: 'mchadburn29',
    isAdmin: true,
    email: 'lfrowd29@paypal.com',
    password: 'iMA1JK'
  },
  {
    username: 'delphick2a',
    isAdmin: true,
    imageUrl: 'https://robohash.org/esteosamet.bmp?size=50x50&set=set1',
    email: 'odanovich2a@spiegel.de',
    password: 'DMVGvNJPs'
  },
  {
    username: 'sbushnell2b',
    isAdmin: true,
    imageUrl: 'https://robohash.org/consequunturestrem.jpg?size=50x50&set=set1',
    email: 'ckeyson2b@dmoz.org',
    password: 'R7gzOMv'
  },
  {
    username: 'bcatlow2c',
    isAdmin: true,
    imageUrl: 'https://robohash.org/quiaplaceatquis.png?size=50x50&set=set1',
    email: 'mbukac2c@state.tx.us',
    password: 'FRdaNkio8kif'
  },
  {
    username: 'sshakle2d',
    isAdmin: true,
    imageUrl: 'https://robohash.org/autemerrorofficiis.bmp?size=50x50&set=set1',
    email: 'smillar2d@biglobe.ne.jp',
    password: '4C6C2s'
  },
  {
    username: 'jdegliantoni2e',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/voluptatemiustoprovident.png?size=50x50&set=set1',
    email: 'visaacs2e@mozilla.com',
    password: 'JZoU0o1Ari'
  },
  {
    username: 'kmanston2f',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/doloresetconsequatur.png?size=50x50&set=set1',
    email: 'mextil2f@scientificamerican.com',
    password: 'ydgfPJ'
  },
  {
    username: 'erapinett2g',
    isAdmin: false,
    imageUrl: 'https://robohash.org/adipisciquidolor.bmp?size=50x50&set=set1',
    email: 'utythe2g@cbsnews.com',
    password: 'VTRIsNx2ebh'
  },
  {
    username: 'ekempshall2h',
    isAdmin: true,
    imageUrl:
      'https://robohash.org/facilisnecessitatibussed.png?size=50x50&set=set1',
    email: 'kweatherhogg2h@engadget.com',
    password: 'Ei8wC9G4a'
  },
  {
    username: 'espyer2i',
    isAdmin: false,
    email: 'elhommee2i@constantcontact.com',
    password: 'CvxsVbB9VjA'
  },
  {
    username: 'sunderhill2j',
    isAdmin: false,
    imageUrl: 'https://robohash.org/fugasitnon.png?size=50x50&set=set1',
    email: 'cbuxam2j@columbia.edu',
    password: '74674IFH'
  },
  {
    username: 'fbenthall2k',
    isAdmin: false,
    imageUrl: 'https://robohash.org/estfugiatducimus.png?size=50x50&set=set1',
    email: 'bweavill2k@bloglines.com',
    password: 'j6FgJNWH1'
  },
  {
    username: 'takred2l',
    isAdmin: false,
    imageUrl:
      'https://robohash.org/autlaboreconsequatur.jpg?size=50x50&set=set1',
    email: 'aivkovic2l@reference.com',
    password: 'UtWyuPUpyLNQ'
  },
  {
    username: 'bellerker2m',
    isAdmin: false,
    imageUrl: 'https://robohash.org/eumvoluptatemquis.jpg?size=50x50&set=set1',
    email: 'rbouldstridge2m@toplist.cz',
    password: '0Dqrej0OI'
  },
  {
    username: 'esheaber2n',
    isAdmin: false,
    imageUrl: 'https://robohash.org/quisquamrationevel.jpg?size=50x50&set=set1',
    email: 'kromeril2n@hao123.com',
    password: 'Ahl5KcvyTu'
  },
  {
    username: 'skirkbright2o',
    isAdmin: true,
    email: 'dbechley2o@hhs.gov',
    password: 'sfgNoyfajhnT'
  },
  {
    username: 'boldis2p',
    isAdmin: true,
    imageUrl: 'https://robohash.org/adinventoreaut.bmp?size=50x50&set=set1',
    email: 'hrushsorth2p@theglobeandmail.com',
    password: 'WorW59mSWHfI'
  },
  {
    username: 'mduding2q',
    isAdmin: true,
    imageUrl: 'https://robohash.org/doloremsedenim.bmp?size=50x50&set=set1',
    email: 'blawie2q@purevolume.com',
    password: 'kUwEX9ltf9'
  },
  {
    username: 'gwestcar2r',
    isAdmin: true,
    imageUrl: 'https://robohash.org/adoptiovoluptates.jpg?size=50x50&set=set1',
    email: 'yegan2r@github.io',
    password: 'WudtYezVod'
  }
]

//SHIPPING ADDRESS DUMMY DATA
const shippingAddresses = [
  {
    fullName: 'Freddie Tyrie',
    address1: '08104 Graceland Road',
    address2: '6552 Buell Pass',
    city: 'Chicago',
    state: 'IL',
    zip: 9696,
    phoneNumber: '312-295-2719'
  },
  {
    fullName: 'Gerladina Russon',
    address1: '776 Meadow Ridge Plaza',
    address2: '515 Northwestern Center',
    city: 'Pittsburgh',
    state: 'PA',
    zip: 4317,
    phoneNumber: '412-121-8086'
  },
  {
    fullName: 'Minta Sentinella',
    address1: '0165 Continental Circle',
    address2: '23797 2nd Court',
    city: 'Reading',
    state: 'PA',
    zip: 7423,
    phoneNumber: '484-245-6120'
  },
  {
    fullName: 'Nissy Thresher',
    address1: '1522 Northridge Place',
    address2: '72 Westridge Avenue',
    city: 'Dayton',
    state: 'OH',
    zip: 7517,
    phoneNumber: '937-410-4411'
  },
  {
    fullName: 'Perri Childes',
    address1: '6 Clarendon Way',
    address2: '126 Transport Place',
    city: 'Chicago',
    state: 'IL',
    zip: 4824,
    phoneNumber: '312-728-7996'
  },
  {
    fullName: 'Kasey Euesden',
    address1: '1266 Monica Road',
    address2: '54043 Sutherland Park',
    city: 'Lincoln',
    state: 'NE',
    zip: 8015,
    phoneNumber: '402-636-8802'
  },
  {
    fullName: 'Sax Rumbelow',
    address1: '3824 Dexter Junction',
    city: 'Saint Louis',
    state: 'MO',
    zip: 5604,
    phoneNumber: '314-898-7399'
  },
  {
    fullName: 'Humbert Allder',
    address1: '10 Shelley Center',
    address2: '31173 Ludington Junction',
    city: 'Bronx',
    state: 'NY',
    zip: 6708,
    phoneNumber: '917-579-8422'
  },
  {
    fullName: 'Steffi Paton',
    address1: '2 Manitowish Point',
    address2: '84 Larry Place',
    city: 'Yonkers',
    state: 'NY',
    zip: 6887,
    phoneNumber: '914-317-1454'
  },
  {
    fullName: 'Dodi Haylock',
    address1: '8 Spohn Point',
    address2: '18330 Dennis Place',
    city: 'Spokane',
    state: 'WA',
    zip: 5913,
    phoneNumber: '509-448-0410'
  },
  {
    fullName: 'Bailey Reditt',
    address1: '43534 Old Shore Drive',
    city: 'Tucson',
    state: 'AZ',
    zip: 9348,
    phoneNumber: '520-497-2557'
  },
  {
    fullName: 'Adorne Yacob',
    address1: '61 Annamark Park',
    address2: '40816 Lakewood Terrace',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: 2830,
    phoneNumber: '754-788-8799'
  },
  {
    fullName: 'Rafaela Crookston',
    address1: '7 Bonner Street',
    city: 'Saint Paul',
    state: 'MN',
    zip: 1458,
    phoneNumber: '763-314-9408'
  },
  {
    fullName: 'Giacobo Dessent',
    address1: '14 Spaight Alley',
    address2: '3233 Utah Point',
    city: 'Anchorage',
    state: 'AK',
    zip: 5102,
    phoneNumber: '907-492-8109'
  },
  {
    fullName: 'Harlen Barta',
    address1: '5 Homewood Parkway',
    address2: '3693 Sullivan Way',
    city: 'Cambridge',
    state: 'MA',
    zip: 1149,
    phoneNumber: '617-970-3000'
  },
  {
    fullName: 'Glendon Sycamore',
    address1: '3 Thackeray Center',
    address2: '88 Canary Junction',
    city: 'Memphis',
    state: 'TN',
    zip: 9342,
    phoneNumber: '901-222-1429'
  },
  {
    fullName: 'Ilysa Parlet',
    address1: '86 Fallview Terrace',
    address2: '316 Golf View Lane',
    city: 'Oceanside',
    state: 'CA',
    zip: 5520,
    phoneNumber: '760-455-2784'
  },
  {
    fullName: 'Sofia Jacobssen',
    address1: '709 Petterle Plaza',
    address2: '3726 Donald Court',
    city: 'Beaufort',
    state: 'SC',
    zip: 8027,
    phoneNumber: '843-342-1654'
  },
  {
    fullName: 'Normand Dwire',
    address1: '4 Spaight Place',
    address2: '6773 Walton Way',
    city: 'Minneapolis',
    state: 'MN',
    zip: 3913,
    phoneNumber: '952-869-7629'
  },
  {
    fullName: 'Uriah Baugh',
    address1: '9 Eagan Junction',
    address2: '0241 Hansons Way',
    city: 'Schenectady',
    state: 'NY',
    zip: 7210,
    phoneNumber: '518-454-1926'
  },
  {
    fullName: 'Marieann Grinyer',
    address1: '541 Artisan Point',
    address2: '69 Fairfield Crossing',
    city: 'Philadelphia',
    state: 'PA',
    zip: 1495,
    phoneNumber: '610-621-7369'
  },
  {
    fullName: 'Grazia Siccombe',
    address1: '64021 Harper Avenue',
    address2: '963 Bluejay Park',
    city: 'Atlanta',
    state: 'GA',
    zip: 7724,
    phoneNumber: '404-246-6199'
  },
  {
    fullName: 'Heather Plampeyn',
    address1: '7 Merrick Avenue',
    address2: '191 Luster Circle',
    city: 'New York City',
    state: 'NY',
    zip: 5860,
    phoneNumber: '212-228-7830'
  },
  {
    fullName: 'Otho Lorant',
    address1: '18665 Northview Street',
    city: 'Fargo',
    state: 'ND',
    zip: 2765,
    phoneNumber: '701-380-0000'
  },
  {
    fullName: 'Catlaina Pollock',
    address1: '789 Novick Parkway',
    address2: '6832 Eggendart Way',
    city: 'Lakewood',
    state: 'WA',
    zip: 2141,
    phoneNumber: '253-973-5343'
  },
  {
    fullName: 'Baillie McReidy',
    address1: '1 Spaight Circle',
    address2: '45396 Lotheville Lane',
    city: 'Hollywood',
    state: 'FL',
    zip: 6558,
    phoneNumber: '954-471-7749'
  },
  {
    fullName: 'Loutitia Gartell',
    address1: '8 Thierer Place',
    address2: '6 Maryland Park',
    city: 'Long Beach',
    state: 'CA',
    zip: 4548,
    phoneNumber: '310-851-2115'
  },
  {
    fullName: 'Ajay MacAree',
    address1: '36087 Heffernan Place',
    address2: '73883 Almo Junction',
    city: 'Memphis',
    state: 'TN',
    zip: 5026,
    phoneNumber: '901-844-8326'
  },
  {
    fullName: 'Francesca Mannooch',
    address1: '05588 Becker Way',
    address2: '84503 Pierstorff Plaza',
    city: 'Monroe',
    state: 'LA',
    zip: 2118,
    phoneNumber: '318-389-4806'
  },
  {
    fullName: 'Giffy Rickeard',
    address1: '26 1st Road',
    address2: '5909 Fair Oaks Drive',
    city: 'Corpus Christi',
    state: 'TX',
    zip: 6227,
    phoneNumber: '361-248-2019'
  },
  {
    fullName: 'Fran Attle',
    address1: '2861 Lakewood Avenue',
    address2: '197 Mcbride Point',
    city: 'Mesquite',
    state: 'TX',
    zip: 5126,
    phoneNumber: '214-575-7488'
  },
  {
    fullName: 'Nilson Hryniewicki',
    address1: '89 Old Shore Drive',
    address2: '19162 Messerschmidt Plaza',
    city: 'North Las Vegas',
    state: 'NV',
    zip: 3629,
    phoneNumber: '702-277-5621'
  },
  {
    fullName: 'Cosme Glavias',
    address1: '0 Lakewood Gardens Junction',
    address2: '49261 High Crossing Point',
    city: 'Norfolk',
    state: 'VA',
    zip: 6100,
    phoneNumber: '757-585-7858'
  },
  {
    fullName: 'Magnum Paff',
    address1: '0 Bobwhite Junction',
    address2: '68 Cordelia Lane',
    city: 'Lincoln',
    state: 'NE',
    zip: 6285,
    phoneNumber: '402-137-0728'
  },
  {
    fullName: 'Arturo Rushworth',
    address1: '575 Valley Edge Crossing',
    address2: '50 Nevada Street',
    city: 'Minneapolis',
    state: 'MN',
    zip: 3392,
    phoneNumber: '763-789-1345'
  },
  {
    fullName: 'Kippie Bettenson',
    address1: '26168 Delladonna Center',
    address2: '5 Sloan Way',
    city: 'Bowie',
    state: 'MD',
    zip: 3571,
    phoneNumber: '240-126-7402'
  },
  {
    fullName: 'Bertie Shorie',
    address1: '4735 Rigney Parkway',
    address2: '5 Union Parkway',
    city: 'Arlington',
    state: 'VA',
    zip: 8814,
    phoneNumber: '571-396-2173'
  },
  {
    fullName: 'Benetta Ziemke',
    address1: '47 Northport Pass',
    address2: '52 Cody Hill',
    city: 'Port Charlotte',
    state: 'FL',
    zip: 1647,
    phoneNumber: '941-134-8872'
  },
  {
    fullName: 'Kristo McNeely',
    address1: '0 Dorton Lane',
    address2: '21 Del Mar Road',
    city: 'Pensacola',
    state: 'FL',
    zip: 3203,
    phoneNumber: '850-205-9696'
  },
  {
    fullName: 'Umberto Chichgar',
    address1: '05432 High Crossing Street',
    address2: '67 Crowley Park',
    city: 'Vancouver',
    state: 'WA',
    zip: 3210,
    phoneNumber: '360-767-6751'
  },
  {
    fullName: 'Robinia Newbury',
    address1: '2290 Delaware Road',
    address2: '3 South Point',
    city: 'Washington',
    state: 'DC',
    zip: 2339,
    phoneNumber: '202-613-8073'
  },
  {
    fullName: 'Erick Bastard',
    address1: '3 Beilfuss Junction',
    address2: '5876 Lindbergh Parkway',
    city: 'Flint',
    state: 'MI',
    zip: 3043,
    phoneNumber: '810-619-9603'
  },
  {
    fullName: 'Cathe Minister',
    address1: '35 Green Ridge Circle',
    address2: '202 Brentwood Alley',
    city: 'San Francisco',
    state: 'CA',
    zip: 5374,
    phoneNumber: '415-892-9681'
  },
  {
    fullName: 'Lari Collabine',
    address1: '199 Hudson Point',
    address2: '77300 Pine View Road',
    city: 'Suffolk',
    state: 'VA',
    zip: 9184,
    phoneNumber: '757-905-2538'
  },
  {
    fullName: 'Etienne Trimmell',
    address1: '1427 Lien Court',
    address2: '46687 Linden Way',
    city: 'Colorado Springs',
    state: 'CO',
    zip: 9650,
    phoneNumber: '719-751-2527'
  },
  {
    fullName: 'Kassandra Coffey',
    address1: '69 Arizona Point',
    address2: '77 Memorial Trail',
    city: 'Peoria',
    state: 'AZ',
    zip: 1213,
    phoneNumber: '623-537-8963'
  },
  {
    fullName: 'Zacherie Bartlosz',
    address1: '2 Fairfield Alley',
    address2: '81 Hooker Park',
    city: 'Macon',
    state: 'GA',
    zip: 1490,
    phoneNumber: '478-328-1282'
  },
  {
    fullName: "D'arcy Ludye",
    address1: '57 Surrey Way',
    address2: '49 American Alley',
    city: 'Baton Rouge',
    state: 'LA',
    zip: 8626,
    phoneNumber: '225-767-0774'
  },
  {
    fullName: 'Todd Vanyutin',
    address1: '9 Melody Lane',
    address2: '2 Schlimgen Crossing',
    city: 'Olympia',
    state: 'WA',
    zip: 1091,
    phoneNumber: '360-859-2088'
  },
  {
    fullName: 'Mei Lambeth',
    address1: '319 4th Trail',
    address2: '0438 Bashford Point',
    city: 'Murfreesboro',
    state: 'TN',
    zip: 4845,
    phoneNumber: '615-317-4617'
  },
  {
    fullName: 'Heidie Gummory',
    address1: '55 Warrior Road',
    address2: '8773 Susan Trail',
    city: 'Lincoln',
    state: 'NE',
    zip: 1994,
    phoneNumber: '402-379-2694'
  },
  {
    fullName: 'Zollie Karleman',
    address1: '68196 Kropf Crossing',
    address2: '79590 Sullivan Way',
    city: 'Shawnee Mission',
    state: 'KS',
    zip: 8055,
    phoneNumber: '913-660-9844'
  },
  {
    fullName: 'Georgiana Anton',
    address1: '0027 Barby Court',
    address2: '2 1st Park',
    city: 'Montgomery',
    state: 'AL',
    zip: 2471,
    phoneNumber: '334-537-8863'
  },
  {
    fullName: 'Brunhilda Kelledy',
    address1: '6455 Maywood Pass',
    city: 'Albuquerque',
    state: 'NM',
    zip: 1443,
    phoneNumber: '505-741-7247'
  },
  {
    fullName: 'Delcine Percifull',
    address1: '063 Hallows Drive',
    address2: '986 Express Center',
    city: 'San Antonio',
    state: 'TX',
    zip: 7100,
    phoneNumber: '830-983-8479'
  },
  {
    fullName: 'Zak Castan',
    address1: '59 Anniversary Hill',
    address2: '44 Warbler Trail',
    city: 'Saint Petersburg',
    state: 'FL',
    zip: 5658,
    phoneNumber: '727-868-3144'
  },
  {
    fullName: "D'arcy Swatten",
    address1: '0936 Northfield Parkway',
    address2: '88 Debs Terrace',
    city: 'Santa Ana',
    state: 'CA',
    zip: 1091,
    phoneNumber: '714-473-9789'
  },
  {
    fullName: 'Crissy Paolazzi',
    address1: '049 Carey Center',
    address2: '46 Monterey Drive',
    city: 'Norfolk',
    state: 'VA',
    zip: 1323,
    phoneNumber: '757-432-9377'
  },
  {
    fullName: 'Steffi Crotty',
    address1: '35 Sherman Point',
    address2: '80439 Maryland Circle',
    city: 'Birmingham',
    state: 'AL',
    zip: 7929,
    phoneNumber: '205-870-8951'
  },
  {
    fullName: 'Demeter Hendrix',
    address1: '3013 Killdeer Plaza',
    address2: '46011 Sage Place',
    city: 'East Saint Louis',
    state: 'IL',
    zip: 5805,
    phoneNumber: '618-689-6789'
  },
  {
    fullName: 'Truda Halley',
    address1: '7267 Pond Road',
    city: 'Brooklyn',
    state: 'NY',
    zip: 2910,
    phoneNumber: '347-659-8419'
  },
  {
    fullName: 'Morgan Marcroft',
    address1: '917 Judy Center',
    address2: '8000 Linden Junction',
    city: 'Lubbock',
    state: 'TX',
    zip: 9482,
    phoneNumber: '806-938-9341'
  },
  {
    fullName: 'Benn Sillett',
    address1: '4 Jackson Crossing',
    address2: '3 Utah Terrace',
    city: 'Columbus',
    state: 'OH',
    zip: 1408,
    phoneNumber: '614-396-7687'
  },
  {
    fullName: 'Wolfie While',
    address1: '6948 Schurz Junction',
    address2: '965 Evergreen Road',
    city: 'San Jose',
    state: 'CA',
    zip: 4594,
    phoneNumber: '408-676-3957'
  },
  {
    fullName: 'Caesar Nesterov',
    address1: '51922 Ridgeview Street',
    address2: '574 Sutherland Circle',
    city: 'Denver',
    state: 'CO',
    zip: 8143,
    phoneNumber: '303-458-9736'
  },
  {
    fullName: 'Blancha Senter',
    address1: '2034 Lerdahl Park',
    address2: '3 Oak Valley Court',
    city: 'Saint Paul',
    state: 'MN',
    zip: 4049,
    phoneNumber: '651-290-2836'
  },
  {
    fullName: 'Kendell Parlet',
    address1: '895 Blaine Center',
    address2: '4058 Carberry Hill',
    city: 'Biloxi',
    state: 'MS',
    zip: 9781,
    phoneNumber: '228-146-5951'
  },
  {
    fullName: 'Vyky Barford',
    address1: '16434 Fairfield Crossing',
    address2: '8 Marquette Trail',
    city: 'Seattle',
    state: 'WA',
    zip: 3781,
    phoneNumber: '206-589-8107'
  },
  {
    fullName: 'Wylma Lindeboom',
    address1: '1561 Veith Way',
    address2: '25 International Drive',
    city: 'Lubbock',
    state: 'TX',
    zip: 2493,
    phoneNumber: '806-540-9487'
  },
  {
    fullName: 'Riannon Eard',
    address1: '2611 Heffernan Street',
    address2: '131 Bashford Center',
    city: 'Corpus Christi',
    state: 'TX',
    zip: 4457,
    phoneNumber: '361-145-5154'
  },
  {
    fullName: 'Torr Shorbrook',
    address1: '9 Lakewood Gardens Parkway',
    address2: '84 Cottonwood Street',
    city: 'Cleveland',
    state: 'OH',
    zip: 4108,
    phoneNumber: '216-202-6153'
  },
  {
    fullName: 'Toddie Sherwyn',
    address1: '1306 Dunning Junction',
    city: 'Washington',
    state: 'DC',
    zip: 2964,
    phoneNumber: '202-110-0166'
  },
  {
    fullName: 'Margi Waple',
    address1: '7412 International Park',
    address2: '3628 Scoville Pass',
    city: 'Rochester',
    state: 'NY',
    zip: 6896,
    phoneNumber: '585-302-8492'
  },
  {
    fullName: 'Verne Bosnell',
    address1: '116 Towne Lane',
    address2: '71 New Castle Parkway',
    city: 'Fresno',
    state: 'CA',
    zip: 1747,
    phoneNumber: '209-912-8930'
  },
  {
    fullName: 'Meryl Staggs',
    address1: '89919 Longview Park',
    address2: '684 Graedel Court',
    city: 'Miami',
    state: 'FL',
    zip: 9843,
    phoneNumber: '305-334-4413'
  },
  {
    fullName: 'Orazio Sargent',
    address1: '06783 Melby Way',
    address2: '0810 Clemons Park',
    city: 'Pittsburgh',
    state: 'PA',
    zip: 1413,
    phoneNumber: '412-915-3927'
  },
  {
    fullName: 'Maribeth Friman',
    address1: '76 Towne Parkway',
    address2: '8045 Di Loreto Pass',
    city: 'Wilkes Barre',
    state: 'PA',
    zip: 8688,
    phoneNumber: '570-462-5347'
  },
  {
    fullName: 'Wendel Crangle',
    address1: '9 Fisk Pass',
    address2: '1 Hovde Hill',
    city: 'Fort Wayne',
    state: 'IN',
    zip: 8556,
    phoneNumber: '260-815-8530'
  },
  {
    fullName: 'Karissa Bellard',
    address1: '1 Chive Court',
    address2: '5 Prairie Rose Drive',
    city: 'Fort Smith',
    state: 'AR',
    zip: 8666,
    phoneNumber: '479-902-8933'
  },
  {
    fullName: 'Basilius Gritskov',
    address1: '190 Norway Maple Avenue',
    address2: '2 Moose Place',
    city: 'Dayton',
    state: 'OH',
    zip: 8917,
    phoneNumber: '937-969-0685'
  },
  {
    fullName: 'Erek Andreaccio',
    address1: '1 Evergreen Court',
    address2: '40128 Thackeray Court',
    city: 'Portland',
    state: 'OR',
    zip: 3928,
    phoneNumber: '971-327-7254'
  },
  {
    fullName: 'Moritz Stormont',
    address1: '87 Mayer Pass',
    address2: '48118 Gerald Way',
    city: 'Vienna',
    state: 'VA',
    zip: 7830,
    phoneNumber: '571-714-4698'
  },
  {
    fullName: 'Hakim Scardifeild',
    address1: '9 Knutson Parkway',
    address2: '42464 Cascade Avenue',
    city: 'Santa Rosa',
    state: 'CA',
    zip: 8336,
    phoneNumber: '707-573-4684'
  },
  {
    fullName: 'Cathryn Milmoe',
    address1: '90 Vera Parkway',
    address2: '51 Del Sol Center',
    city: 'New York City',
    state: 'NY',
    zip: 2896,
    phoneNumber: '212-513-5569'
  },
  {
    fullName: 'Sharia Hardes',
    address1: '32 Loftsgordon Junction',
    address2: '159 Bay Trail',
    city: 'Mc Keesport',
    state: 'PA',
    zip: 2954,
    phoneNumber: '412-168-0384'
  },
  {
    fullName: 'Susi Weems',
    address1: '3569 Oak Valley Drive',
    address2: '4591 Hagan Lane',
    city: 'Houston',
    state: 'TX',
    zip: 9931,
    phoneNumber: '713-351-2815'
  },
  {
    fullName: 'Cornelia Knibbs',
    address1: '451 Spaight Pass',
    address2: '8529 Vidon Park',
    city: 'Raleigh',
    state: 'NC',
    zip: 1250,
    phoneNumber: '919-370-7429'
  },
  {
    fullName: 'Willard Roderham',
    address1: '51782 Fisk Alley',
    address2: '17885 Anniversary Park',
    city: 'Lexington',
    state: 'KY',
    zip: 1697,
    phoneNumber: '859-995-2290'
  },
  {
    fullName: 'Bianka Body',
    address1: '8151 Arapahoe Park',
    address2: '57 Milwaukee Point',
    city: 'Waltham',
    state: 'MA',
    zip: 9453,
    phoneNumber: '978-587-8000'
  },
  {
    fullName: 'Robbert Ivanov',
    address1: '60 Mcguire Drive',
    address2: '569 Reinke Court',
    city: 'Meridian',
    state: 'MS',
    zip: 2942,
    phoneNumber: '601-110-0730'
  },
  {
    fullName: 'Terrance Goodrum',
    address1: '04 Tony Court',
    address2: '50 Memorial Way',
    city: 'Peoria',
    state: 'IL',
    zip: 2150,
    phoneNumber: '309-268-9798'
  },
  {
    fullName: 'Roxy Dayton',
    address1: '291 Sutherland Trail',
    city: 'Lees Summit',
    state: 'MO',
    zip: 8599,
    phoneNumber: '816-217-3419'
  },
  {
    fullName: 'Silva Gardner',
    address1: '86547 Warner Parkway',
    address2: '026 Bonner Way',
    city: 'Las Vegas',
    state: 'NV',
    zip: 2076,
    phoneNumber: '702-532-4526'
  },
  {
    fullName: 'Ruby Kilfeather',
    address1: '34629 Katie Center',
    address2: '8199 Memorial Trail',
    city: 'Arlington',
    state: 'VA',
    zip: 7236,
    phoneNumber: '571-547-1101'
  },
  {
    fullName: 'Sissie Paddell',
    address1: '9 Kropf Place',
    address2: '12089 Summit Way',
    city: 'Tucson',
    state: 'AZ',
    zip: 1985,
    phoneNumber: '520-223-1483'
  },
  {
    fullName: 'Ogdon Mitroshinov',
    address1: '87 Prentice Road',
    city: 'Milwaukee',
    state: 'WI',
    zip: 6354,
    phoneNumber: '414-677-5727'
  },
  {
    fullName: 'Chauncey Freda',
    address1: '61 Eagle Crest Trail',
    address2: '92 Sommers Pass',
    city: 'Wilmington',
    state: 'DE',
    zip: 9501,
    phoneNumber: '302-849-4030'
  },
  {
    fullName: 'Mireille Roulston',
    address1: '80 Forster Lane',
    address2: '36 Sachtjen Pass',
    city: 'Ashburn',
    state: 'VA',
    zip: 5475,
    phoneNumber: '571-571-4779'
  },
  {
    fullName: 'Davie Saker',
    address1: '0253 Ruskin Crossing',
    address2: '1 8th Street',
    city: 'El Paso',
    state: 'TX',
    zip: 9010,
    phoneNumber: '915-190-8158'
  },
  {
    fullName: 'Wilma Chettle',
    address1: '6 Pennsylvania Way',
    address2: '77 Lindbergh Road',
    city: 'Memphis',
    state: 'TN',
    zip: 9614,
    phoneNumber: '901-341-7923'
  }
]
//PRODUCTS DUMMY DATA
const products = [
  {
    name: 'Santa Outfit',
    size: 'medium',
    type: 'outfit',
    category: 'xmas',
    price: 2999,
    quantity: 3,
    description:
      'Santa outfit for your duck. Merry Quackmas to all, and to all a good night!',
    imageUrl: '/santaoutfit.jpeg'
  },
  {
    name: 'Xmas Tree',
    type: 'outfit',
    category: 'xmas',
    price: 4999,
    quantity: 69,
    description:
      "This limited-edition holiday outfit is pine-scented, and won't leave needles all over your carpet!",
    imageUrl: '/xmastreeoutfit.jpg'
  },
  {
    name: 'Skeleton Outfit',
    type: 'outfit',
    category: 'halloween',
    price: 2499,
    quantity: 8,
    description: 'Spooky scary skeleton ducks send shivers down my spine...',
    imageUrl: '/skeletonoutfit.jpg'
  },
  {
    name: 'Batman Duck',
    size: 'small',
    type: 'preset',
    category: 'misc',
    price: 1500,
    quantity: 81,
    description: 'I am vengeance, I am the night, I am Batduck',
    imageUrl: '/batmanduck.jpeg'
  },
  {
    name: "Runner's Jersey",
    type: 'outfit',
    category: 'misc',
    price: 1399,
    quantity: 33,
    description:
      "Motivate your duck to strive for excellence with this runner's jersey!",
    imageUrl: '/marathonoutfit.jpg'
  },
  {
    name: 'Ornament Outfit',
    type: 'outfit',
    category: 'xmas',
    price: 2499,
    quantity: 27,
    description:
      'Have you ever wanted to hang a rubber duck from your Christmas tree? If you have, we have the outfit for you! Note: ornament hanging materials not included.',
    imageUrl: '/ornamentoutfit.jpg'
  },
  {
    name: 'Swim Trunks',
    type: 'outfit',
    category: 'summer',
    price: 1999,
    quantity: 18,
    description:
      'Your duck will be too cool for the summer in these hot swimming trunks! Note: sunglasses not included. Please see accessories for pricing.',
    imageUrl: '/swimmingtrunksoutfit.jpg'
  },
  {
    name: 'Plumber Toolbelt',
    type: 'outfit',
    category: 'business/casual',
    price: 899,
    quantity: 98,
    description:
      'While our ducks may not be certified plumbers, yours will certainly look like one with this handy tool belt!',
    imageUrl: '/plumberoutfit.jpg'
  },
  {
    name: 'Blue Jeans',
    type: 'outfit',
    category: 'misc',
    price: 999,
    quantity: 30,
    description:
      'A timeless classic, these blue jeans look spectacular on any duck!',
    imageUrl: '/jeansoutfit.jpg'
  },
  {
    name: 'Overalls',
    type: 'outfit',
    category: 'misc',
    price: 999,
    quantity: 78,
    description: 'A classic pair of overalls for any hard-working duck!',
    imageUrl: '/overallsoutfit.jpg'
  },
  {
    name: 'Sailor Uniform',
    type: 'outfit',
    category: 'misc',
    price: 1499,
    quantity: 6,
    description:
      "A smart sailor outfit for your seafaring friend! Why does a duck need a boat? We're not sure...",
    imageUrl: '/sailoroutfit.jpg'
  },
  {
    name: 'Beret',
    size: 'small',
    type: 'accessory',
    category: 'misc',
    price: 100,
    quantity: 63,
    description: 'Beret (outfit not included)',
    imageUrl: '/beret.png'
  },
  {
    name: 'Tuxedo',
    size: 'medium',
    type: 'outfit',
    category: 'business/casual',
    price: 4999,
    quantity: 18,
    description:
      'Your friend will be ready for high society in this classy tuxedo!',
    imageUrl: '/tux.jpg'
  },
  {
    name: 'Aquaman Costume',
    type: 'outfit',
    category: 'halloween',
    price: 999,
    quantity: 57,
    description:
      'What more appropriate superhero to dress your duck up as for Halloween than Aquaman, protector of the sea?',
    imageUrl: '/aquamanoutfit.jpg'
  },
  {
    name: 'Astronaut Suit',
    type: 'outfit',
    category: 'misc',
    price: 5999,
    quantity: 10,
    description:
      'High quality astronaut suit including an air-tight helmet! We would not recommend launching your duck into outer space. These suits are not certified by NASA.',
    imageUrl: '/astronautoutfit.jpg'
  },
  {
    name: 'Construction Uniform',
    type: 'outfit',
    category: 'business/casual',
    price: 999,
    quantity: 86,
    description:
      "It's all in a day's work for your duck with this construction uniform straight from the job site!",
    imageUrl: '/constructionoutfit.jpg'
  },
  {
    name: "Doctor's Outfit",
    type: 'outfit',
    category: 'business/casual',
    price: 1499,
    quantity: 30,
    description:
      "This uniform will reflect your duck's immense medical knowledge.",
    imageUrl: '/doctoroutfit.jpg'
  },
  {
    name: 'Donut Costume',
    type: 'outfit',
    category: 'misc',
    price: 1599,
    quantity: 57,
    description:
      'We would encourage you not to take a bite out of this scrumptious outfit for your feathered friend.',
    imageUrl: '/donutoutfit.jpg'
  },
  {
    name: 'Sheild',
    type: 'accessory',
    category: 'medieval',
    price: 100,
    quantity: 25,
    description:
      'Get ready for any battle with this shield for your duck. Helmet not included',
    imageUrl: '/sheild.jpg'
  },
  {
    name: 'Dragon Costume',
    type: 'outfit',
    category: 'medieval',
    price: 4999,
    quantity: 2,
    description:
      'BEST SELLER! Transform your duck into a ferocious dragon with this cute costume!',
    imageUrl: '/dragonoutfit.jpeg'
  },
  {
    name: 'Fairy Outfit',
    type: 'outfit',
    category: 'halloween',
    price: 1599,
    quantity: 56,
    description:
      'This costume may not transform your duck into a wish-granting fairy, but it will enchant your heart.',
    imageUrl: '/fairyoutfit.jpg'
  },
  {
    name: 'Frankenstein Costume',
    size: 'medium',
    type: 'outfit',
    category: 'halloween',
    price: 1999,
    quantity: 30,
    description:
      "Your duck will come to life with this terrifying costume based on Frankenstein's monster!",
    imageUrl: '/frankenoutfit.jpg'
  },
  {
    name: 'Kimono',
    type: 'outfit',
    category: 'misc',
    price: 1599,
    quantity: 47,
    description: 'Your duck will look gorgeous in this stylish red kimono!',
    imageUrl: '/kimonooutfit.jpg'
  },
  {
    name: 'Leprechaun Outfit',
    size: 'medium',
    type: 'outfit',
    category: 'misc',
    price: 777,
    quantity: 90,
    description:
      "Luck o' the Irish will be with you when your duck wears this festive green jacket!",
    imageUrl: '/leprechaunoutfit.jpg'
  },
  {
    name: 'Boxing Duck',
    type: 'preset',
    price: 1500,
    quantity: 68,
    description: 'Float like a butterfly, quack like a duck.',
    imageUrl: '/boxingduck.jpeg'
  },
  {
    name: 'Mermaid Costume',
    type: 'outfit',
    category: 'halloween',
    price: 599,
    quantity: 85,
    description:
      'Even though our rubber ducks cannot swim below the sea, they can pretend to be part of that world with this mermaid-themed costume!',
    imageUrl: '/mermaidoutfit.jpeg'
  },
  {
    name: 'Minion Costume',
    type: 'outfit',
    category: 'halloween',
    price: 1499,
    quantity: 20,
    description:
      'Kids will love this outfit themed around the Minions from the Despicable Me franchise!',
    imageUrl: '/minionoutfit.jpg'
  },
  {
    name: 'Bikini',
    type: 'outfit',
    category: 'summer',
    price: 2000,
    quantity: 17,
    description:
      'Your duck will be ready for the beach with this stylish polka-dotted bikini!',
    imageUrl: '/bikini.png'
  },
  {
    name: 'Ninja Outfit',
    size: 'medium',
    type: 'outfit',
    category: 'misc',
    price: 1999,
    quantity: 23,
    description:
      'Your duck will be as stealthy as something that squeaks loudly can be in this stealthy costume!',
    imageUrl: '/ninjaoutfit.jpg'
  },
  {
    name: 'crown',
    size: 'medium',
    type: 'accessory',
    category: 'medieval',
    price: 100,
    quantity: 62,
    description: 'For duck royalty',
    imageUrl: '/crown.png'
  },
  {
    name: 'Nurse Outfit',
    size: 'medium',
    type: 'outfit',
    category: 'business/casual',
    price: 999,
    quantity: 4,
    description:
      "A nurse's costume for your medically-trained rubber duck. (Ducks are not actually medically trained.)",
    imageUrl: '/nurseoutfit.jpg'
  },
  {
    name: 'Mr. T Duck',
    size: 'small',
    type: 'preset',
    price: 1500,
    quantity: 85,
    description: 'I pitty the duck who dont squeeze me',
    imageUrl: '/mrtduck.jpg'
  },
  {
    name: 'Luau Dress',
    type: 'outfit',
    category: 'summer',
    price: 1599,
    quantity: 25,
    description:
      'Say aloha to style with this beautiful dress, straight from the summery shores of Hawaii!',
    imageUrl: '/alohaoutfit.jpg'
  },
  {
    name: 'Pirate outfit',
    type: 'outfit',
    category: 'halloween',
    price: 1999,
    quantity: 16,
    description:
      'Yar har har and shiver me timbers, this be a pirate outfit for your avian friend!',
    imageUrl: '/pirateoutfit.jpg'
  },
  {
    name: 'Police Outfit Collection',
    type: 'outfit',
    category: 'business/casual',
    price: 12999,
    quantity: 5,
    description:
      'A limited-edition collection of police uniforms for your ducks! Comes with all three varieties.',
    imageUrl: '/policeoutfits.jpg'
  },
  {
    name: 'Sports Jersey Collection',
    size: 'medium',
    type: 'outfit',
    category: 'misc',
    price: 9999,
    quantity: 6,
    description:
      'A limited-edition collection of sports jerseys for your ducks. Comes with all three varieties.',
    imageUrl: '/sportsjerseyoutfit.jpg'
  },
  {
    name: 'Superman Costume',
    type: 'outfit',
    category: 'halloween',
    price: 999,
    quantity: 98,
    description:
      'Our ducks may not be superheroes, but you can dress yours up like Superman with this new costume!',
    imageUrl: '/supermanoutfit.jpeg'
  },
  {
    name: 'Vampire Costume',
    type: 'outfit',
    category: 'halloween',
    price: 2999,
    quantity: 22,
    description:
      'We guarantee that, even with this costume, your rubber duck friend has no interest in sucking your blood.',
    imageUrl: '/vampireoutfit.jpg'
  },
  {
    name: 'Vault Boy Outfit',
    type: 'outfit',
    category: 'gamer',
    price: 2999,
    quantity: 36,
    description:
      'Fallout 76 may have been a letdown, but we promise you that this costume is not.',
    imageUrl: '/vaultboyoutfit.png'
  },
  {
    name: 'Business Suit',
    type: 'outfit',
    category: 'business/casual',
    price: 3000,
    quantity: 37,
    description:
      'This stylish suit will help establish your duck as the credible economic savant that they are!',
    imageUrl: '/businessoutfit.jpg'
  },
  {
    name: 'Witch Outfit',
    type: 'outfit',
    category: 'halloween',
    price: 999,
    quantity: 82,
    description:
      "Some say that this outfit can grant a rubber duck magical powers. (Spoilers: It can't)",
    imageUrl: '/witchoutfit.jpeg'
  },
  {
    name: 'quam a odio in',
    size: 'medium',
    category: 'misc',
    price: 100,
    quantity: 9,
    description:
      'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'Spider-Duck',
    type: 'preset',
    category: 'misc',
    price: 2000,
    quantity: 65,
    description: 'Coming from your friendly neighborhood Spider-Duck!',
    imageUrl: '/spiderduck.jpg'
  },
  {
    name: 'convallis eget eleifend',
    size: 'x-large',
    type: 'red-duck',
    category: 'summer',
    price: 100,
    quantity: 12,
    description:
      'lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'sed sagittis nam',
    size: 'medium',
    type: 'gold-duck',
    category: 'business/casual',
    price: 100,
    quantity: 87,
    description: 'amet sem fusce consequat nulla nisl nunc nisl duis bibendum',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'nec molestie sed justo pellentesque',
    size: 'large',
    type: 'yellow-duck',
    category: 'summer',
    price: 100,
    quantity: 17,
    description:
      'lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'est donec odio justo',
    size: 'small',
    category: 'gamer',
    price: 100,
    quantity: 77,
    description:
      'et ultrices posuere cubilia curae nulla dapibus dolor vel est',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'aliquam erat volutpat',
    type: 'yellow-duck',
    category: 'xmas',
    price: 100,
    quantity: 87,
    description:
      'accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'lectus in quam fringilla rhoncus',
    size: 'small',
    type: 'yellow-duck',
    category: 'summer',
    price: 100,
    quantity: 63,
    description:
      'varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'Cowboy hat',
    size: 'medium',
    type: 'accessory',
    category: 'halloween',
    price: 100,
    quantity: 82,
    description: 'Cowboy hat - Bandana and laso sold seperately',
    imageUrl: '/cowboyhat.jpg'
  },
  {
    name: 'sit amet consectetuer adipiscing elit',
    size: 'large',
    type: 'red-duck',
    category: 'medieval',
    price: 100,
    quantity: 76,
    description:
      'faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'sit amet nulla quisque',
    size: 'x-large',
    category: 'medieval',
    price: 100,
    quantity: 7,
    description:
      'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'mauris enim leo rhoncus',
    size: 'large',
    type: 'purple-duck',
    category: 'xmas',
    price: 100,
    quantity: 91,
    description:
      'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'nullam porttitor lacus',
    size: 'x-large',
    type: 'yellow-duck',
    price: 100,
    quantity: 36,
    description:
      'vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'hac habitasse platea dictumst',
    size: 'large',
    type: 'silver-duck',
    category: 'summer',
    price: 100,
    quantity: 75,
    description:
      'suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'vestibulum quam sapien',
    size: 'small',
    type: 'yellow-duck',
    category: 'summer',
    price: 100,
    quantity: 8,
    description: 'morbi odio odio elementum eu interdum eu tincidunt in leo',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'posuere cubilia curae',
    size: 'large',
    type: 'misc',
    category: 'summer',
    price: 100,
    quantity: 28,
    description:
      'sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'erat eros viverra eget congue',
    size: 'small',
    type: 'misc',
    category: 'misc',
    price: 100,
    quantity: 52,
    description:
      'tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'justo aliquam quis turpis eget',
    size: 'x-large',
    type: 'purple-duck',
    category: 'summer',
    price: 100,
    quantity: 50,
    description:
      'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'et ultrices posuere cubilia curae',
    size: 'small',
    category: 'gamer',
    price: 100,
    quantity: 77,
    description:
      'mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'Bunny Ears',
    size: 'small',
    type: 'accessory',
    price: 100,
    description: 'Bunny ears',
    imageUrl: '/bunnyears.jpg'
  },
  {
    name: 'amet cursus id',
    size: 'large',
    category: 'medieval',
    price: 100,
    description:
      'nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'adipiscing elit proin',
    size: 'small',
    type: 'yellow-duck',
    category: 'medieval',
    price: 100,
    description:
      'id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'Artist Smock',
    type: 'outfit',
    category: 'misc',
    price: 100,
    quantity: 8,
    description:
      'A sensible smock for your artistically inclined feathered friend!',
    imageUrl: '/artistoutfit.jpg'
  },
  {
    name: 'at diam nam',
    size: 'x-large',
    type: 'gold-duck',
    category: 'summer',
    price: 100,
    quantity: 69,
    description:
      'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'amet justo morbi',
    size: 'medium',
    type: 'gold-duck',
    price: 100,
    quantity: 46,
    description:
      'amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'luctus cum sociis natoque penatibus',
    size: 'medium',
    type: 'purple-duck',
    category: 'medieval',
    price: 100,
    quantity: 82,
    description:
      'egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'condimentum curabitur in libero',
    size: 'medium',
    type: 'blue-duck',
    price: 100,
    quantity: 54,
    description:
      'suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'id nulla ultrices aliquet maecenas',
    size: 'x-large',
    type: 'purple-duck',
    category: 'gamer',
    price: 100,
    quantity: 71,
    description:
      'lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'Cowgirl Outfit',
    type: 'outfit',
    category: 'misc',
    price: 4000,
    quantity: 100,
    description:
      'Giddy up, pardner, with this cowgirl design straight from the heart of the wild west!',
    imageUrl: '/cowgirloutfit.jpeg'
  },
  {
    name: 'ipsum primis in faucibus orci',
    size: 'medium',
    type: 'gold-duck',
    category: 'summer',
    price: 100,
    quantity: 15,
    description:
      'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'rutrum nulla tellus in sagittis',
    size: 'large',
    type: 'red-duck',
    category: 'medieval',
    price: 100,
    quantity: 56,
    description: 'arcu sed augue aliquam erat volutpat in congue etiam justo',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'montes nascetur ridiculus mus etiam',
    size: 'medium',
    type: 'blue-duck',
    category: 'gamer',
    price: 100,
    quantity: 89,
    description:
      'iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'sit amet consectetuer adipiscing',
    size: 'small',
    type: 'misc',
    price: 100,
    quantity: 88,
    description:
      'molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'id pretium iaculis diam',
    size: 'large',
    type: 'blue-duck',
    price: 100,
    quantity: 8,
    description:
      'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'Ryu Duck',
    size: 'large',
    type: 'preset',
    category: 'misc',
    price: 2000,
    quantity: 78,
    description: 'HADUCKEN!!!',
    imageUrl: '/Ryuduck.jpg'
  },
  {
    name: 'Leon Duck',
    size: 'medium',
    type: 'preset',
    category: 'gamer',
    price: 2000,
    quantity: 98,
    description: 'Eliminate the zom-ducks',
    imageUrl: '/Leonresevil.jpg'
  },
  {
    name: 'Sunglasses',
    size: 'medium',
    type: 'accessory',
    price: 200,
    quantity: 25,
    description:
      "Whether it's sunny or giving your duck an edge, these sunglasses are a must have.",
    imageUrl: '/sunglasses.jpg'
  },
  {
    name: 'leo odio porttitor',
    size: 'x-large',
    category: 'xmas',
    price: 100,
    quantity: 38,
    description:
      'congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'donec ut dolor morbi',
    size: 'small',
    type: 'misc',
    category: 'halloween',
    price: 100,
    quantity: 0,
    description:
      'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'rutrum nulla nunc purus',
    size: 'small',
    type: 'red-duck',
    category: 'medieval',
    price: 100,
    quantity: 90,
    description:
      'iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'penatibus et magnis dis parturient',
    size: 'large',
    category: 'misc',
    price: 100,
    quantity: 96,
    description:
      'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'Bandana',
    size: 'medium',
    type: 'accessory',
    price: 100,
    quantity: 73,
    description: 'Bandana',
    imageUrl: '/bandana.jpg'
  },
  {
    name: 'Master Chief Duck',
    size: 'small',
    type: 'preset',
    category: 'gamer',
    price: 2000,
    quantity: 87,
    description: 'Sir, finishing this fight',
    imageUrl: '/masterchief.png'
  },
  {
    name: 'Pretty Princess Dress',
    type: 'outfit',
    category: 'medieval',
    price: 2500,
    quantity: 67,
    description:
      'Your duck will be the prettiest belle at the ball with this cute pink dress!',
    imageUrl: '/princessoutfit.jpg'
  },
  {
    name: 'Devil outfit',
    size: 'large',
    type: 'outfit',
    category: 'halloween',
    price: 3000,
    quantity: 47,
    description: 'Devil outfit',
    imageUrl: '/devil.png'
  },
  {
    name: 'eleifend quam a odio',
    size: 'large',
    type: 'silver-duck',
    category: 'medieval',
    price: 100,
    quantity: 43,
    description:
      'ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'ante ipsum primis in faucibus',
    size: 'large',
    category: 'xmas',
    price: 100,
    quantity: 55,
    description:
      'in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'ornare consequat lectus in',
    size: 'x-large',
    type: 'blue-duck',
    category: 'misc',
    price: 100,
    quantity: 2,
    description:
      'vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'Shark Duck',
    size: 'large',
    type: 'preset',
    category: 'summer',
    price: 1800,
    quantity: 49,
    description: 'Ducky shark, doo doo doo doo doo doo...',
    imageUrl: '/sharkduck.jpg'
  },
  {
    name: 'Mario Duck',
    size: 'x-large',
    type: 'preset',
    category: 'gamer',
    price: 2000,
    quantity: 59,
    description: "It's me Mario",
    imageUrl: '/mario.png'
  },
  {
    name: 'donec posuere metus vitae ipsum',
    size: 'medium',
    type: 'blue-duck',
    category: 'business/casual',
    price: 100,
    quantity: 59,
    description:
      'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'nam tristique tortor eu',
    size: 'small',
    type: 'yellow-duck',
    category: 'medieval',
    price: 100,
    quantity: 68,
    description:
      'et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl',
    imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'
  },
  {
    name: 'vestibulum quam sapien',
    size: 'small',
    type: 'blue-duck',
    category: 'summer',
    price: 100,
    quantity: 68,
    description:
      'aliquet maecenas leo odio condimentum id luctus nec molestie sed justo',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'ornare imperdiet sapien',
    size: 'x-large',
    type: 'silver-duck',
    category: 'medieval',
    price: 100,
    quantity: 6,
    description:
      'pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'id massa id nisl venenatis',
    size: 'small',
    type: 'silver-duck',
    category: 'halloween',
    price: 100,
    quantity: 26,
    description:
      'ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'donec ut dolor morbi vel',
    category: 'halloween',
    price: 100,
    quantity: 39,
    description:
      'eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'aliquam convallis nunc proin',
    size: 'small',
    type: 'red-duck',
    price: 100,
    quantity: 57,
    description:
      'elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'Spyro Duck',
    size: 'medium',
    type: 'preset',
    category: 'gamer',
    price: 3000,
    quantity: 15,
    description: 'Mess with the duck dragon, you get the horns!',
    imageUrl: '/spyroduck.jpg'
  },
  {
    name: 'amet justo morbi',
    size: 'small',
    type: 'silver-duck',
    category: 'medieval',
    price: 100,
    quantity: 43,
    description:
      'amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  }
]

//ORDERS DUMMY DATA
const orders = [
  {
    userId: 1,
    date: '2019-05-13',
    status: 'inactive'
  },
  {
    userId: 2,
    date: '2019-10-06',
    status: 'active'
  },
  {
    userId: 3,
    date: '2019-07-23',
    status: 'active'
  },
  {
    userId: 4,
    date: '2020-02-20',
    status: 'inactive'
  },
  {
    userId: 5,
    date: '2019-08-11',
    status: 'inactive'
  },
  {
    userId: 6,
    date: '2019-05-24',
    status: 'active'
  },
  {
    userId: 7,
    date: '2019-06-28',
    status: 'active'
  },
  {
    userId: 8,
    date: '2019-03-29',
    status: 'active'
  },
  {
    userId: 9,
    date: '2020-01-28',
    status: 'inactive'
  },
  {
    userId: 10,
    date: '2019-11-13',
    status: 'inactive'
  },
  {
    userId: 11,
    date: '2019-12-27',
    status: 'inactive'
  },
  {
    userId: 12,
    date: '2019-12-04',
    status: 'active'
  },
  {
    userId: 13,
    date: '2020-01-26',
    status: 'inactive'
  },
  {
    userId: 14,
    date: '2019-10-03',
    status: 'inactive'
  },
  {
    userId: 15,
    date: '2019-07-12',
    status: 'inactive'
  },
  {
    userId: 16,
    date: '2019-08-29',
    status: 'active'
  },
  {
    userId: 17,
    date: '2019-09-14',
    status: 'active'
  },
  {
    userId: 18,
    date: '2019-06-03',
    status: 'inactive'
  },
  {
    userId: 19,
    date: '2020-01-01',
    status: 'active'
  },
  {
    userId: 20,
    date: '2020-01-21',
    status: 'inactive'
  },
  {
    userId: 21,
    date: '2019-07-14',
    status: 'active'
  },
  {
    userId: 22,
    date: '2019-06-11',
    status: 'active'
  },
  {
    userId: 23,
    date: '2019-04-05',
    status: 'inactive'
  },
  {
    userId: 24,
    date: '2019-07-06',
    status: 'inactive'
  },
  {
    userId: 25,
    date: '2019-05-05',
    status: 'inactive'
  },
  {
    userId: 26,
    date: '2020-02-17',
    status: 'inactive'
  },
  {
    userId: 27,
    date: '2019-06-23',
    status: 'inactive'
  },
  {
    userId: 28,
    date: '2019-05-23',
    status: 'inactive'
  },
  {
    userId: 29,
    date: '2019-04-25',
    status: 'active'
  },
  {
    userId: 30,
    date: '2019-12-08',
    status: 'inactive'
  },
  {
    userId: 31,
    date: '2019-03-19',
    status: 'active'
  },
  {
    userId: 32,
    date: '2019-05-26',
    status: 'inactive'
  },
  {
    userId: 33,
    date: '2019-10-03',
    status: 'active'
  },
  {
    userId: 34,
    date: '2019-09-30',
    status: 'inactive'
  },
  {
    userId: 35,
    date: '2019-11-10',
    status: 'active'
  },
  {
    userId: 36,
    date: '2019-05-13',
    status: 'inactive'
  },
  {
    userId: 37,
    date: '2019-10-04',
    status: 'inactive'
  },
  {
    userId: 38,
    date: '2019-06-19',
    status: 'inactive'
  },
  {
    userId: 39,
    date: '2019-11-27',
    status: 'active'
  },
  {
    userId: 40,
    date: '2019-06-15',
    status: 'inactive'
  },
  {
    userId: 41,
    date: '2019-10-19',
    status: 'active'
  },
  {
    userId: 42,
    date: '2020-01-09',
    status: 'inactive'
  },
  {
    userId: 43,
    date: '2020-01-09',
    status: 'active'
  },
  {
    userId: 44,
    date: '2019-11-08',
    status: 'inactive'
  },
  {
    userId: 45,
    date: '2019-07-06',
    status: 'active'
  },
  {
    userId: 46,
    date: '2019-05-21',
    status: 'inactive'
  },
  {
    userId: 47,
    date: '2019-11-27',
    status: 'inactive'
  },
  {
    userId: 48,
    date: '2019-10-02',
    status: 'inactive'
  },
  {
    userId: 49,
    date: '2019-11-18',
    status: 'active'
  },
  {
    userId: 50,
    date: '2019-05-20',
    status: 'inactive'
  }
]

//ORDER_PRODUCTS DUMMY DATA
const orderProduct = [
  {
    productId: 46,
    orderId: 26
  },
  {
    productId: 17,
    orderId: 42
  },
  {
    productId: 4,
    orderId: 32
  },
  {
    productId: 12,
    orderId: 25
  },
  {
    productId: 21,
    orderId: 14
  },
  {
    productId: 68,
    orderId: 29
  },
  {
    productId: 61,
    orderId: 37
  },
  {
    productId: 12,
    orderId: 30
  },
  {
    productId: 69,
    orderId: 6
  },
  {
    productId: 76,
    orderId: 49
  },
  {
    productId: 88,
    orderId: 33
  },
  {
    productId: 12,
    orderId: 4
  },
  {
    productId: 47,
    orderId: 7
  },
  {
    productId: 61,
    orderId: 20
  },
  {
    productId: 88,
    orderId: 3
  },
  {
    productId: 95,
    orderId: 17
  },
  {
    productId: 92,
    orderId: 13
  },
  {
    productId: 56,
    orderId: 31
  },
  {
    productId: 11,
    orderId: 8
  },
  {
    productId: 98,
    orderId: 43
  },
  {
    productId: 36,
    orderId: 24
  },
  {
    productId: 1,
    orderId: 23
  },
  {
    productId: 44,
    orderId: 12
  },
  {
    productId: 32,
    orderId: 26
  },
  {
    productId: 68,
    orderId: 13
  },
  {
    productId: 83,
    orderId: 32
  },
  {
    productId: 10,
    orderId: 3
  },
  {
    productId: 46,
    orderId: 34
  },
  {
    productId: 91,
    orderId: 29
  },
  {
    productId: 87,
    orderId: 30
  },
  {
    productId: 15,
    orderId: 39
  },
  {
    productId: 20,
    orderId: 7
  },
  {
    productId: 18,
    orderId: 41
  },
  {
    productId: 56,
    orderId: 30
  },
  {
    productId: 4,
    orderId: 47
  },
  {
    productId: 99,
    orderId: 24
  },
  {
    productId: 13,
    orderId: 3
  },
  {
    productId: 47,
    orderId: 2
  },
  {
    productId: 29,
    orderId: 24
  },
  {
    productId: 40,
    orderId: 34
  },
  {
    productId: 83,
    orderId: 4
  },
  {
    productId: 77,
    orderId: 20
  },
  {
    productId: 72,
    orderId: 28
  },
  {
    productId: 75,
    orderId: 46
  },
  {
    productId: 80,
    orderId: 18
  },
  {
    productId: 20,
    orderId: 15
  },
  {
    productId: 60,
    orderId: 45
  },
  {
    productId: 47,
    orderId: 38
  },
  {
    productId: 12,
    orderId: 46
  },
  {
    productId: 15,
    orderId: 22
  },
  {
    productId: 12,
    orderId: 14
  },
  {
    productId: 17,
    orderId: 14
  },
  {
    productId: 17,
    orderId: 12
  },
  {
    productId: 17,
    orderId: 10
  },
  {
    productId: 17,
    orderId: 8
  }
]

// GETS THE MAGIC METHOS ON A MODEL THAT IS PASSED
const getMagicMethods = model => {
  const magicMethodsArr = []
  const associations = model.associations
  //console.log(associations)

  for (let key in associations) {
    if (associations.hasOwnProperty(key)) {
      const accessors = associations[key].accessors
      const magicMethods = Object.values(accessors)
      const curAssociationObj = {association: key, magicMethods}

      magicMethodsArr.push(curAssociationObj)
    }
  }

  return magicMethodsArr
}

// VARIABLES HOLDING MAGIC METHODS FOR EACH MODEL
const magMethodsUser = getMagicMethods(User)
const magMethodsProduct = getMagicMethods(Product)
const magMethodsOrder = getMagicMethods(Order)
const magMethodsOrderProduct = getMagicMethods(OrderProduct)
const magMethodsShippingAddress = getMagicMethods(ShippingAddress)

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  //console.log('these are the magic methods on user', magMethodsUser);
  users.map(async user => {
    const newUser = await User.create(user)
    const newShippingAddress = await ShippingAddress.create(
      shippingAddresses[newUser.id - 1]
    )
    await newUser.setShipping_addresses(newShippingAddress)
    return newUser
  })

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )

  await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  const newUserK = await User.create({
    username: 'kayo',
    isAdmin: true,
    imageUrl: 'https://robohash.org/velitmolestiasut.bmp?size=50x50&set=set1',
    email: 'kayo@gmail.com',
    password: 'kayo'
  })

  const newShippingAddressK = await ShippingAddress.create({
    fullName: 'Thorin Eley',
    address1: '6915 Muir Hill',
    address2: '7871 Mcbride Junction',
    city: 'Atlanta',
    state: 'GA',
    zip: 7909,
    phoneNumber: '404-888-1943'
  })

  newUserK.setShipping_addresses(newShippingAddressK)

  await Promise.all(
    orderProduct.map(item => {
      return OrderProduct.create(item)
    })
  )
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
