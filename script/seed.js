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
    fullName: "Cobb O'Caine",
    address1: '118 Macpherson Point',
    address2: '22 Grayhawk Avenue',
    city: 'Billings',
    state: 'MT',
    zip: 9523,
    phoneNumber: '406-665-3329'
  },
  {
    fullName: 'Ellissa Frondt',
    address1: '04442 Elmside Crossing',
    address2: '67223 Eastlawn Alley',
    city: 'Albuquerque',
    state: 'NM',
    zip: 6910,
    phoneNumber: '505-649-9489'
  },
  {
    fullName: 'Adelle Scrivener',
    address1: '5821 Ludington Crossing',
    address2: '325 Saint Paul Lane',
    city: 'Shawnee Mission',
    state: 'KS',
    zip: 1360,
    phoneNumber: '816-212-9496'
  },
  {
    fullName: 'Trumaine Scrowston',
    address1: '752 Briar Crest Plaza',
    address2: '0 Manley Circle',
    city: 'Philadelphia',
    state: 'PA',
    zip: 2441,
    phoneNumber: '610-921-2481'
  },
  {
    fullName: 'Nevsa Dumingo',
    address1: '465 Muir Court',
    address2: '07 Scoville Lane',
    city: 'Houston',
    state: 'TX',
    zip: 7722,
    phoneNumber: '713-406-9292'
  },
  {
    fullName: 'Luella Lyfe',
    address1: '65049 Old Shore Alley',
    address2: '883 Mcguire Lane',
    city: 'San Jose',
    state: 'CA',
    zip: 7205,
    phoneNumber: '408-414-7216'
  },
  {
    fullName: 'Franky Josum',
    address1: '8204 Pawling Hill',
    address2: '9 Charing Cross Circle',
    city: 'Dallas',
    state: 'TX',
    zip: 8929,
    phoneNumber: '214-458-5446'
  },
  {
    fullName: 'Gerianna Jagielski',
    address1: '73171 Bellgrove Junction',
    address2: '38077 Oak Valley Way',
    city: 'Pittsburgh',
    state: 'PA',
    zip: 2012,
    phoneNumber: '412-663-5024'
  },
  {
    fullName: 'Lauren Grzegorzewski',
    address1: '50452 Fieldstone Drive',
    address2: '36312 Donald Court',
    city: 'Tulsa',
    state: 'OK',
    zip: 7106,
    phoneNumber: '918-341-5872'
  },
  {
    fullName: 'Theo Stent',
    address1: '7 Waubesa Center',
    address2: '68826 School Terrace',
    city: 'Inglewood',
    state: 'CA',
    zip: 7577,
    phoneNumber: '310-572-1697'
  },
  {
    fullName: 'Kayley Devine',
    address1: '549 3rd Way',
    address2: '1314 Parkside Road',
    city: 'Montgomery',
    state: 'AL',
    zip: 4860,
    phoneNumber: '334-790-5674'
  },
  {
    fullName: 'Zuzana Bulcock',
    address1: '22948 Oriole Place',
    address2: '017 Autumn Leaf Drive',
    city: 'Buffalo',
    state: 'NY',
    zip: 5419,
    phoneNumber: '716-121-2004'
  },
  {
    fullName: 'Dominga Diano',
    address1: '678 American Ash Place',
    address2: '94 Clarendon Point',
    city: 'Omaha',
    state: 'NE',
    zip: 1241,
    phoneNumber: '402-121-2933'
  },
  {
    fullName: 'Daffie Coy',
    address1: '26558 Stephen Parkway',
    address2: '42 Ronald Regan Alley',
    city: 'Fort Myers',
    state: 'FL',
    zip: 8083,
    phoneNumber: '239-713-0337'
  },
  {
    fullName: 'Tobiah Bennallck',
    address1: '04433 Declaration Point',
    address2: '742 Mesta Hill',
    city: 'Panama City',
    state: 'FL',
    zip: 8027,
    phoneNumber: '850-504-7017'
  },
  {
    fullName: 'Modestine Bowmen',
    address1: '74 Brickson Park Plaza',
    address2: '98 Pierstorff Terrace',
    city: 'Las Vegas',
    state: 'NV',
    zip: 5799,
    phoneNumber: '702-390-1613'
  },
  {
    fullName: 'Tish Wisham',
    address1: '5 Bunker Hill Point',
    address2: '3296 La Follette Trail',
    city: 'Huntsville',
    state: 'AL',
    zip: 8343,
    phoneNumber: '256-842-8238'
  },
  {
    fullName: 'Godfry Jendricke',
    address1: '40 Thierer Avenue',
    address2: '68398 Del Sol Avenue',
    city: 'Clearwater',
    state: 'FL',
    zip: 3771,
    phoneNumber: '813-933-6502'
  },
  {
    fullName: 'Tyne Dubbin',
    address1: '644 Melby Drive',
    address2: '85 Glendale Place',
    city: 'Birmingham',
    state: 'AL',
    zip: 4555,
    phoneNumber: '205-306-2298'
  },
  {
    fullName: 'Bord McEvilly',
    address1: '717 Springs Hill',
    address2: '3934 Lakeland Lane',
    city: 'San Diego',
    state: 'CA',
    zip: 9309,
    phoneNumber: '760-579-4163'
  },
  {
    fullName: 'Evy Conneely',
    address1: '87422 Mcguire Trail',
    address2: '6479 Sycamore Crossing',
    city: 'Los Angeles',
    state: 'CA',
    zip: 5754,
    phoneNumber: '213-906-4502'
  },
  {
    fullName: 'Tedd Hakey',
    address1: '9887 Evergreen Avenue',
    address2: '574 Rieder Hill',
    city: 'Portland',
    state: 'OR',
    zip: 9187,
    phoneNumber: '971-917-0027'
  },
  {
    fullName: 'Ethe Eastgate',
    address1: '7 Manufacturers Avenue',
    address2: '782 International Center',
    city: 'Shawnee Mission',
    state: 'KS',
    zip: 9195,
    phoneNumber: '913-592-9504'
  },
  {
    fullName: 'Noby Childers',
    address1: '372 Marquette Avenue',
    address2: '3 Vahlen Plaza',
    city: 'Fort Worth',
    state: 'TX',
    zip: 5492,
    phoneNumber: '817-956-3453'
  },
  {
    fullName: 'Isidore Shoebrook',
    address1: '83 Lunder Drive',
    city: 'Shreveport',
    state: 'LA',
    zip: 1214,
    phoneNumber: '318-673-2857'
  },
  {
    fullName: 'Antonius Banfill',
    address1: '6 Colorado Street',
    address2: '37 Dovetail Center',
    city: 'Fresno',
    state: 'CA',
    zip: 3557,
    phoneNumber: '559-772-5393'
  },
  {
    fullName: 'Denny Boxe',
    address1: '192 Crowley Lane',
    address2: '53 Fordem Avenue',
    city: 'Portland',
    state: 'OR',
    zip: 1059,
    phoneNumber: '503-412-0906'
  },
  {
    fullName: 'Katerine Swayne',
    address1: '83 Melvin Court',
    address2: '948 Johnson Crossing',
    city: 'Columbus',
    state: 'OH',
    zip: 7640,
    phoneNumber: '614-287-4657'
  },
  {
    fullName: 'Cob Mauvin',
    address1: '34 Hintze Trail',
    city: 'Springfield',
    state: 'MA',
    zip: 2339,
    phoneNumber: '413-591-9112'
  },
  {
    fullName: 'Jacqui Selby',
    address1: '788 Schmedeman Trail',
    address2: '914 Laurel Drive',
    city: 'Lansing',
    state: 'MI',
    zip: 1616,
    phoneNumber: '517-290-7759'
  },
  {
    fullName: 'Mada Naden',
    address1: '0 Eliot Lane',
    address2: '86892 Springs Alley',
    city: 'Saint Paul',
    state: 'MN',
    zip: 1936,
    phoneNumber: '651-199-1462'
  },
  {
    fullName: 'North Nussen',
    address1: '37 Eastwood Crossing',
    address2: '4 Oak Way',
    city: 'Washington',
    state: 'DC',
    zip: 7673,
    phoneNumber: '202-542-9642'
  },
  {
    fullName: 'Ana Gerty',
    address1: '529 Coolidge Terrace',
    address2: '7 Hanover Way',
    city: 'Portland',
    state: 'OR',
    zip: 8527,
    phoneNumber: '503-765-6547'
  },
  {
    fullName: 'Gay Jakucewicz',
    address1: '53892 Emmet Road',
    address2: '67 Prairieview Lane',
    city: 'Fort Smith',
    state: 'AR',
    zip: 6825,
    phoneNumber: '479-622-0393'
  },
  {
    fullName: 'Brett McCaskill',
    address1: '10 Oakridge Junction',
    address2: '32651 Kingsford Park',
    city: 'Milwaukee',
    state: 'WI',
    zip: 4898,
    phoneNumber: '414-690-3891'
  },
  {
    fullName: 'Engelbert Brotherhood',
    address1: '50 Harbort Terrace',
    city: 'Roanoke',
    state: 'VA',
    zip: 3837,
    phoneNumber: '540-523-7830'
  },
  {
    fullName: 'Chane Puttock',
    address1: '19 Sommers Lane',
    address2: '052 Del Mar Hill',
    city: 'Kansas City',
    state: 'KS',
    zip: 8254,
    phoneNumber: '816-514-4703'
  },
  {
    fullName: 'Andonis Chapple',
    address1: '35522 Nova Junction',
    address2: '9 Menomonie Hill',
    city: 'Nashville',
    state: 'TN',
    zip: 3774,
    phoneNumber: '615-408-9360'
  },
  {
    fullName: 'Lanny Bly',
    address1: '37181 Schiller Hill',
    address2: '76 Daystar Plaza',
    city: 'Macon',
    state: 'GA',
    zip: 8143,
    phoneNumber: '478-470-5604'
  },
  {
    fullName: 'Jayne Wilde',
    address1: '1134 Stuart Junction',
    address2: '504 Southridge Court',
    city: 'Pasadena',
    state: 'CA',
    zip: 7116,
    phoneNumber: '626-280-4184'
  },
  {
    fullName: 'Otha Antonignetti',
    address1: '9 Holmberg Pass',
    city: 'Kansas City',
    state: 'MO',
    zip: 1929,
    phoneNumber: '816-894-5043'
  },
  {
    fullName: 'Lucais Lenoir',
    address1: '5 Hoepker Drive',
    address2: '3689 Victoria Lane',
    city: 'Charleston',
    state: 'WV',
    zip: 5645,
    phoneNumber: '304-158-6641'
  },
  {
    fullName: 'Marsiella Woloschinski',
    address1: '3 Kim Alley',
    address2: '036 Talisman Drive',
    city: 'Lancaster',
    state: 'PA',
    zip: 1195,
    phoneNumber: '717-376-2293'
  },
  {
    fullName: 'Anastassia Chapellow',
    address1: '7 Carberry Alley',
    address2: '425 Mendota Pass',
    city: 'Des Moines',
    state: 'IA',
    zip: 9611,
    phoneNumber: '515-556-0482'
  },
  {
    fullName: 'Breena Gahan',
    address1: '5 Nelson Court',
    address2: '4395 Park Meadow Junction',
    city: 'Akron',
    state: 'OH',
    zip: 4129,
    phoneNumber: '330-647-8723'
  },
  {
    fullName: 'Kayle Cauderlie',
    address1: '2 Fairfield Place',
    address2: '221 Portage Parkway',
    city: 'Indianapolis',
    state: 'IN',
    zip: 3375,
    phoneNumber: '317-821-6986'
  },
  {
    fullName: 'Yvon Martino',
    address1: '81097 Pleasure Lane',
    address2: '3488 Bellgrove Terrace',
    city: 'Portsmouth',
    state: 'NH',
    zip: 2780,
    phoneNumber: '603-247-5186'
  },
  {
    fullName: 'Artur Brocks',
    address1: '4559 Springs Road',
    address2: '20 Warrior Court',
    city: 'Charleston',
    state: 'SC',
    zip: 9297,
    phoneNumber: '843-759-8231'
  },
  {
    fullName: 'Letitia Shambroke',
    address1: '0358 Cambridge Parkway',
    address2: '76672 American Ash Center',
    city: 'Bowie',
    state: 'MD',
    zip: 9006,
    phoneNumber: '240-241-0662'
  },
  {
    fullName: 'Sigrid Alcalde',
    address1: '34 Hovde Hill',
    address2: '1191 Canary Place',
    city: 'Chicago',
    state: 'IL',
    zip: 9962,
    phoneNumber: '312-560-6761'
  },
  {
    fullName: 'Vannie Stapylton',
    address1: '207 Veith Street',
    address2: '7 Maple Wood Hill',
    city: 'Hollywood',
    state: 'FL',
    zip: 9150,
    phoneNumber: '305-385-8359'
  },
  {
    fullName: 'Evered Luxton',
    address1: '1980 Redwing Plaza',
    address2: '02486 Independence Avenue',
    city: 'Columbus',
    state: 'OH',
    zip: 8863,
    phoneNumber: '614-509-8031'
  },
  {
    fullName: 'Briney Luckhurst',
    address1: '8 Trailsway Avenue',
    address2: '1933 La Follette Road',
    city: 'Annapolis',
    state: 'MD',
    zip: 8497,
    phoneNumber: '443-577-6371'
  },
  {
    fullName: 'Clementius Treslove',
    address1: '938 Kings Street',
    city: 'Winston Salem',
    state: 'NC',
    zip: 9079,
    phoneNumber: '336-723-3665'
  },
  {
    fullName: 'Melonie Stirton',
    address1: '614 Michigan Junction',
    address2: '5 Elgar Road',
    city: 'New Haven',
    state: 'CT',
    zip: 5638,
    phoneNumber: '203-141-5618'
  },
  {
    fullName: 'Gaylor Insley',
    address1: '7502 Comanche Crossing',
    address2: '6584 Surrey Center',
    city: 'Springfield',
    state: 'IL',
    zip: 4877,
    phoneNumber: '217-539-5025'
  },
  {
    fullName: 'Graig Cuttles',
    address1: '93 Eastlawn Hill',
    address2: '928 Brickson Park Way',
    city: 'Houston',
    state: 'TX',
    zip: 7308,
    phoneNumber: '713-873-6760'
  },
  {
    fullName: 'Heddie Minney',
    address1: '85 Maple Wood Plaza',
    address2: '7 Badeau Plaza',
    city: 'Lexington',
    state: 'KY',
    zip: 4906,
    phoneNumber: '859-380-6192'
  },
  {
    fullName: 'Jolene Skellington',
    address1: '642 Melvin Point',
    address2: '777 Cody Hill',
    city: 'Roanoke',
    state: 'VA',
    zip: 7291,
    phoneNumber: '540-465-7426'
  },
  {
    fullName: 'Kevan Keave',
    address1: '8993 Talisman Place',
    address2: '2 Calypso Parkway',
    city: 'Worcester',
    state: 'MA',
    zip: 8120,
    phoneNumber: '508-879-8188'
  },
  {
    fullName: 'Brand Bohan',
    address1: '1 Troy Hill',
    address2: '8 Ridgeview Street',
    city: 'Saint Augustine',
    state: 'FL',
    zip: 7792,
    phoneNumber: '904-814-9500'
  },
  {
    fullName: 'Rhianon Quixley',
    address1: '57647 Johnson Circle',
    address2: '57864 Swallow Center',
    city: 'Houston',
    state: 'TX',
    zip: 4039,
    phoneNumber: '713-658-9203'
  },
  {
    fullName: 'Ebba Tiler',
    address1: '57032 Mockingbird Trail',
    address2: '252 Transport Road',
    city: 'Jersey City',
    state: 'NJ',
    zip: 2468,
    phoneNumber: '551-617-6719'
  },
  {
    fullName: 'Margalit McKeveney',
    address1: '32 Division Parkway',
    address2: '7 Westridge Street',
    city: 'Tampa',
    state: 'FL',
    zip: 7838,
    phoneNumber: '813-989-3098'
  },
  {
    fullName: 'Bettina Kern',
    address1: '7 Petterle Plaza',
    address2: '6 Kingsford Drive',
    city: 'Louisville',
    state: 'KY',
    zip: 5735,
    phoneNumber: '502-192-9066'
  },
  {
    fullName: 'Radcliffe Kilborn',
    address1: '5 Basil Point',
    address2: '69 Welch Pass',
    city: 'San Diego',
    state: 'CA',
    zip: 3058,
    phoneNumber: '858-635-9191'
  },
  {
    fullName: 'Sharl Schermick',
    address1: '1 Hoepker Drive',
    address2: '9 Clyde Gallagher Hill',
    city: 'Santa Monica',
    state: 'CA',
    zip: 5009,
    phoneNumber: '310-858-1857'
  },
  {
    fullName: 'Berne Olyunin',
    address1: '7 Corscot Road',
    address2: '23 Manley Point',
    city: 'Silver Spring',
    state: 'MD',
    zip: 4567,
    phoneNumber: '240-805-1674'
  },
  {
    fullName: 'Trude Mapledoram',
    address1: '98647 Fair Oaks Road',
    address2: '8520 Loomis Place',
    city: 'North Las Vegas',
    state: 'NV',
    zip: 2550,
    phoneNumber: '702-349-1132'
  },
  {
    fullName: 'Brose Stripling',
    address1: '46350 Pennsylvania Street',
    address2: '16 Express Place',
    city: 'Flushing',
    state: 'NY',
    zip: 4472,
    phoneNumber: '347-809-7153'
  },
  {
    fullName: 'Marlo Emby',
    address1: '00543 Lakewood Terrace',
    address2: '5 Sommers Circle',
    city: 'Tuscaloosa',
    state: 'AL',
    zip: 1161,
    phoneNumber: '205-457-9451'
  },
  {
    fullName: "Kellie O'Rourke",
    address1: '7402 Eastlawn Trail',
    address2: '60658 Ludington Terrace',
    city: 'Fresno',
    state: 'CA',
    zip: 3934,
    phoneNumber: '559-298-2352'
  },
  {
    fullName: 'Nixie Zanicchi',
    address1: '9 Center Center',
    address2: '35570 Corry Plaza',
    city: 'Chicago',
    state: 'IL',
    zip: 7387,
    phoneNumber: '312-948-0460'
  },
  {
    fullName: 'Winna Sinnock',
    address1: '1721 Loftsgordon Point',
    address2: '1 Prairie Rose Park',
    city: 'Philadelphia',
    state: 'PA',
    zip: 9477,
    phoneNumber: '215-797-0615'
  },
  {
    fullName: 'Katie Judge',
    address1: '841 Del Mar Terrace',
    address2: '3 Golf Course Junction',
    city: 'New York City',
    state: 'NY',
    zip: 4350,
    phoneNumber: '212-735-7269'
  },
  {
    fullName: 'Arden Pottes',
    address1: '8 Oxford Point',
    address2: '8 Mcbride Parkway',
    city: 'Saint Louis',
    state: 'MO',
    zip: 2180,
    phoneNumber: '314-729-9708'
  },
  {
    fullName: 'Lawton Duncanson',
    address1: '1 Ruskin Court',
    address2: '47 Crownhardt Crossing',
    city: 'Fort Worth',
    state: 'TX',
    zip: 8551,
    phoneNumber: '682-115-3495'
  },
  {
    fullName: 'Tab Kiledal',
    address1: '93902 Golf Course Park',
    address2: '2707 Debs Junction',
    city: 'Cleveland',
    state: 'OH',
    zip: 8017,
    phoneNumber: '216-954-6683'
  },
  {
    fullName: 'Mommy Brougham',
    address1: '4098 International Pass',
    address2: '5793 Colorado Alley',
    city: 'Athens',
    state: 'GA',
    zip: 8737,
    phoneNumber: '706-352-6041'
  },
  {
    fullName: 'Vallie Saice',
    address1: '8834 Oriole Street',
    address2: '877 Luster Trail',
    city: 'Topeka',
    state: 'KS',
    zip: 5596,
    phoneNumber: '785-687-5491'
  },
  {
    fullName: "Odie O'Dowd",
    address1: '9 Atwood Street',
    address2: '32 Amoth Way',
    city: 'Saint Joseph',
    state: 'MO',
    zip: 1910,
    phoneNumber: '816-332-7747'
  },
  {
    fullName: 'Carling Upcott',
    address1: '829 Village Point',
    address2: '9114 Forest Center',
    city: 'Greeley',
    state: 'CO',
    zip: 3581,
    phoneNumber: '970-925-6882'
  },
  {
    fullName: 'Mela Swettenham',
    address1: '012 Moose Avenue',
    address2: '2 Bunting Point',
    city: 'San Bernardino',
    state: 'CA',
    zip: 1041,
    phoneNumber: '760-731-7177'
  },
  {
    fullName: 'Orel Fligg',
    address1: '17 Steensland Alley',
    city: 'North Little Rock',
    state: 'AR',
    zip: 9552,
    phoneNumber: '501-322-5589'
  },
  {
    fullName: 'Cindelyn Bachellier',
    address1: '8 Grim Avenue',
    address2: '2552 Main Terrace',
    city: 'Falls Church',
    state: 'VA',
    zip: 9925,
    phoneNumber: '571-728-0337'
  },
  {
    fullName: 'Nat Muskett',
    address1: '30 Messerschmidt Point',
    city: 'Sacramento',
    state: 'CA',
    zip: 6381,
    phoneNumber: '916-659-1800'
  },
  {
    fullName: 'Tymothy Larmet',
    address1: '3919 Fordem Trail',
    address2: '2294 Canary Park',
    city: 'Glendale',
    state: 'CA',
    zip: 2221,
    phoneNumber: '323-224-3160'
  },
  {
    fullName: 'Roslyn Hovard',
    address1: '0 Merchant Plaza',
    address2: '05698 Brentwood Terrace',
    city: 'Charlotte',
    state: 'NC',
    zip: 7799,
    phoneNumber: '704-167-1165'
  },
  {
    fullName: 'Hervey Rowler',
    address1: '97 Moulton Pass',
    address2: '7126 Sycamore Point',
    city: 'Pueblo',
    state: 'CO',
    zip: 4492,
    phoneNumber: '719-828-8630'
  },
  {
    fullName: 'Jacobo Joselevitch',
    address1: '360 Mandrake Lane',
    address2: '9 American Drive',
    city: 'Burbank',
    state: 'CA',
    zip: 7129,
    phoneNumber: '818-589-7052'
  },
  {
    fullName: 'Lind Follos',
    address1: '03778 Pine View Plaza',
    address2: '6164 Haas Terrace',
    city: 'Washington',
    state: 'DC',
    zip: 6581,
    phoneNumber: '202-740-2846'
  },
  {
    fullName: 'Halette Doelle',
    address1: '50184 Bowman Junction',
    city: 'Albuquerque',
    state: 'NM',
    zip: 7564,
    phoneNumber: '505-890-6823'
  },
  {
    fullName: 'Ryann Daniell',
    address1: '97 Summer Ridge Hill',
    address2: '628 Shelley Alley',
    city: 'San Antonio',
    state: 'TX',
    zip: 7206,
    phoneNumber: '210-849-2971'
  },
  {
    fullName: 'Andrew Mortell',
    address1: '1 Fieldstone Hill',
    address2: '71 Shasta Pass',
    city: 'Meridian',
    state: 'MS',
    zip: 7179,
    phoneNumber: '601-724-5180'
  },
  {
    fullName: 'Elena Mordacai',
    address1: '371 Cardinal Lane',
    address2: '545 Nancy Point',
    city: 'Wilmington',
    state: 'DE',
    zip: 2097,
    phoneNumber: '302-610-8491'
  },
  {
    fullName: 'Gayler Croall',
    address1: '6324 Sutteridge Parkway',
    address2: '07 Atwood Crossing',
    city: 'Colorado Springs',
    state: 'CO',
    zip: 6173,
    phoneNumber: '719-249-6475'
  },
  {
    fullName: 'Marylou Blackstone',
    address1: '43657 Fair Oaks Way',
    address2: '0815 Rockefeller Plaza',
    city: 'Los Angeles',
    state: 'CA',
    zip: 1870,
    phoneNumber: '213-492-2872'
  },
  {
    fullName: 'Edita Durgan',
    address1: '6435 Upham Hill',
    address2: '9 Waywood Way',
    city: 'San Antonio',
    state: 'TX',
    zip: 6248,
    phoneNumber: '210-679-3483'
  },
  {
    fullName: 'Heall De Gowe',
    address1: '58 Haas Crossing',
    address2: '57 Butternut Lane',
    city: 'Scottsdale',
    state: 'AZ',
    zip: 5783,
    phoneNumber: '480-455-9776'
  },
  {
    fullName: 'Ike Kendall',
    address1: '93624 Schiller Way',
    address2: '195 Miller Crossing',
    city: 'Santa Monica',
    state: 'CA',
    zip: 8702,
    phoneNumber: '310-107-4768'
  }
]
//PRODUCTS DUMMY DATA
const products = [
  {
    name: 'ligula suspendisse ornare',
    size: 'medium',
    type: 'yellow-duck',
    category: 'xmas',
    price: 100,
    quantity: 3,
    description:
      'ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'justo eu massa donec dapibus',
    size: 'x-large',
    category: 'gamer',
    price: 100,
    quantity: 69,
    description:
      'maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque',
    imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'
  },
  {
    name: 'a feugiat et',
    size: 'small',
    category: 'halloween',
    price: 100,
    quantity: 8,
    description:
      'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'habitasse platea dictumst morbi',
    size: 'small',
    type: 'preset',
    category: 'summer',
    price: 100,
    quantity: 81,
    description:
      'tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'et ultrices posuere cubilia curae',
    size: 'x-large',
    type: 'red-duck',
    price: 100,
    quantity: 33,
    description:
      'nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'pede malesuada in',
    size: 'large',
    type: 'blue-duck',
    category: 'gamer',
    price: 100,
    quantity: 27,
    description:
      'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'vel nulla eget eros elementum',
    size: 'x-large',
    type: 'gold-duck',
    category: 'summer',
    price: 100,
    quantity: 18,
    description:
      'eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a',
    imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'
  },
  {
    name: 'sit amet lobortis sapien',
    size: 'large',
    type: 'gold-duck',
    category: 'business/casual',
    price: 100,
    quantity: 98,
    description:
      'nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'mattis odio donec vitae',
    size: 'large',
    type: 'misc',
    category: 'summer',
    price: 100,
    quantity: 30,
    description:
      'at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'faucibus cursus urna ut tellus',
    size: 'large',
    type: 'purple-duck',
    category: 'xmas',
    price: 100,
    quantity: 78,
    description:
      'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'magna vulputate luctus',
    size: 'small',
    price: 100,
    quantity: 6,
    description:
      'eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'sed interdum venenatis turpis',
    size: 'small',
    type: 'accessory',
    category: 'misc',
    price: 100,
    quantity: 63,
    description:
      'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'id consequat in consequat ut',
    size: 'medium',
    type: 'blue-duck',
    category: 'business/casual',
    price: 100,
    quantity: 18,
    description:
      'pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'non quam nec dui',
    type: 'gold-duck',
    category: 'business/casual',
    price: 100,
    quantity: 57,
    description:
      'nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'integer pede justo lacinia eget',
    type: 'silver-duck',
    category: 'summer',
    price: 100,
    quantity: 64,
    description:
      'faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae',
    imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
  },
  {
    name: 'ac lobortis vel',
    category: 'summer',
    price: 100,
    quantity: 86,
    description:
      'nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'neque aenean auctor gravida sem',
    size: 'large',
    price: 100,
    quantity: 30,
    description:
      'donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'orci luctus et ultrices posuere',
    size: 'large',
    type: 'silver-duck',
    category: 'halloween',
    price: 100,
    quantity: 57,
    description:
      'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'donec posuere metus',
    type: 'accessory',
    category: 'gamer',
    price: 100,
    quantity: 25,
    description:
      'nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'vulputate vitae nisl aenean lectus',
    size: 'x-large',
    type: 'misc',
    category: 'xmas',
    price: 100,
    quantity: 2,
    description:
      'pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'accumsan tortor quis turpis',
    size: 'small',
    type: 'blue-duck',
    category: 'medieval',
    price: 100,
    quantity: 56,
    description:
      'iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
  },
  {
    name: 'sagittis dui vel',
    size: 'medium',
    type: 'silver-duck',
    category: 'halloween',
    price: 100,
    quantity: 30,
    description:
      'leo odio condimentum id luctus nec molestie sed justo pellentesque',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'mi sit amet',
    size: 'x-large',
    type: 'misc',
    category: 'business/casual',
    price: 100,
    quantity: 47,
    description:
      'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in',
    imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'
  },
  {
    name: 'ultrices posuere cubilia curae duis',
    size: 'medium',
    price: 100,
    quantity: 90,
    description:
      'volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'ipsum dolor sit amet',
    type: 'preset',
    price: 100,
    quantity: 68,
    description:
      'curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'eu est congue',
    size: 'large',
    type: 'gold-duck',
    category: 'xmas',
    price: 100,
    quantity: 85,
    description:
      'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'amet nunc viverra',
    size: 'small',
    type: 'red-duck',
    category: 'summer',
    price: 100,
    quantity: 20,
    description:
      'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
  },
  {
    name: 'neque sapien placerat',
    size: 'small',
    type: 'outfit',
    category: 'summer',
    price: 100,
    quantity: 17,
    description:
      'integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'egestas metus aenean fermentum',
    size: 'medium',
    type: 'yellow-duck',
    category: 'gamer',
    price: 100,
    quantity: 23,
    description:
      'rutrum ac lobortis vel dapibus at diam nam tristique tortor eu',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'risus praesent lectus',
    size: 'x-large',
    type: 'accessory',
    category: 'medieval',
    price: 100,
    quantity: 62,
    description:
      'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'turpis donec posuere',
    size: 'medium',
    type: 'purple-duck',
    category: 'business/casual',
    price: 100,
    quantity: 4,
    description:
      'blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'tincidunt eu felis fusce posuere',
    size: 'small',
    type: 'preset',
    price: 100,
    quantity: 85,
    description:
      'hac habitasse platea dictumst maecenas ut massa quis augue luctus',
    imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'
  },
  {
    name: 'erat tortor sollicitudin mi sit',
    size: 'small',
    type: 'outfit',
    category: 'misc',
    price: 100,
    quantity: 25,
    description:
      'amet cursus id turpis integer aliquet massa id lobortis convallis tortor',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'justo eu massa donec',
    size: 'x-large',
    type: 'misc',
    category: 'summer',
    price: 100,
    quantity: 16,
    description:
      'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'curae duis faucibus accumsan odio',
    type: 'silver-duck',
    category: 'halloween',
    price: 100,
    quantity: 55,
    description:
      'nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'eu orci mauris',
    size: 'medium',
    type: 'silver-duck',
    category: 'business/casual',
    price: 100,
    quantity: 6,
    description:
      'at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'semper porta volutpat',
    size: 'large',
    type: 'gold-duck',
    category: 'summer',
    price: 100,
    quantity: 98,
    description:
      'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'pellentesque ultrices phasellus id sapien',
    size: 'large',
    type: 'gold-duck',
    category: 'xmas',
    price: 100,
    quantity: 22,
    description:
      'in porttitor pede justo eu massa donec dapibus duis at velit eu est',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'sed accumsan felis',
    size: 'large',
    category: 'gamer',
    price: 100,
    quantity: 36,
    description:
      'fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse',
    imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000'
  },
  {
    name: 'quis tortor id nulla',
    size: 'small',
    type: 'outfit',
    category: 'business/casual',
    price: 100,
    quantity: 37,
    description:
      'ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'vivamus vestibulum sagittis sapien',
    size: 'small',
    type: 'purple-duck',
    category: 'gamer',
    price: 100,
    quantity: 82,
    description:
      'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
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
    name: 'tortor sollicitudin mi',
    type: 'preset',
    category: 'halloween',
    price: 100,
    quantity: 65,
    description:
      'odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
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
    name: 'ligula vehicula consequat morbi',
    size: 'medium',
    type: 'accessory',
    category: 'halloween',
    price: 100,
    quantity: 82,
    description:
      'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
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
    name: 'pellentesque ultrices phasellus id',
    size: 'small',
    type: 'misc',
    price: 100,
    description:
      'penatibus et magnis dis parturient montes nascetur ridiculus mus etiam',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
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
    name: 'nunc rhoncus dui vel sem',
    size: 'small',
    type: 'outfit',
    category: 'misc',
    price: 100,
    quantity: 8,
    description:
      'egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero',
    imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'
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
    name: 'mollis molestie lorem quisque',
    size: 'small',
    type: 'outfit',
    category: 'misc',
    price: 100,
    quantity: 100,
    description:
      'viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
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
    name: 'nulla integer pede',
    size: 'large',
    type: 'preset',
    category: 'xmas',
    price: 100,
    quantity: 78,
    description:
      'magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'non mi integer ac',
    size: 'medium',
    type: 'misc',
    price: 100,
    quantity: 98,
    description:
      'eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'nam ultrices libero',
    size: 'medium',
    type: 'purple-duck',
    price: 100,
    quantity: 25,
    description:
      'donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
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
    name: 'turpis integer aliquet massa id',
    size: 'large',
    type: 'accessory',
    price: 100,
    quantity: 73,
    description:
      'consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'odio consequat varius',
    size: 'small',
    type: 'preset',
    category: 'gamer',
    price: 100,
    quantity: 87,
    description:
      'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
    imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff'
  },
  {
    name: 'sollicitudin mi sit',
    type: 'outfit',
    price: 100,
    quantity: 67,
    description:
      'lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'nulla ut erat id mauris',
    size: 'large',
    type: 'purple-duck',
    category: 'summer',
    price: 100,
    quantity: 47,
    description:
      'curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
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
    name: 'odio donec vitae nisi',
    size: 'large',
    type: 'preset',
    category: 'halloween',
    price: 100,
    quantity: 49,
    description:
      'vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in',
    imageUrl: 'http://dummyimage.com/250x250.bmp/dddddd/000000'
  },
  {
    name: 'congue diam id',
    size: 'x-large',
    type: 'red-duck',
    category: 'gamer',
    price: 100,
    quantity: 59,
    description:
      'orci eget orci vehicula condimentum curabitur in libero ut massa volutpat',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
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
    category: 'misc',
    price: 100,
    quantity: 57,
    description:
      'elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'felis fusce posuere felis',
    size: 'medium',
    type: 'misc',
    category: 'gamer',
    price: 100,
    quantity: 15,
    description:
      'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut',
    imageUrl: 'http://dummyimage.com/250x250.bmp/5fa2dd/ffffff'
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

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )
  await Promise.all(
    shippingAddresses.map(address => {
      return ShippingAddress.create(address)
    })
  )
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
  await OrderProduct.create(orderProduct[0])
  await OrderProduct.create(orderProduct[1])
  await OrderProduct.create(orderProduct[3])

  const newUser = await User.create({
    username: 'kayo',
    isAdmin: true,
    imageUrl: 'https://robohash.org/velitmolestiasut.bmp?size=50x50&set=set1',
    email: 'kayo@gmail.com',
    password: 'kayo'
  })

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
