'use strict'

const db = require('../server/db')
const {User, Product, Order, OrderProduct} = require('../server/db/models')

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

//PRODUCTS DUMMY DATA
const products = [
  {
    name: 'Maily',
    size: 'large',
    type: 'outfit',
    category: 'medieval',
    price: 443879.33,
    quantity: 434628,
    description: 'Function-based systemic function'
  },
  {
    name: 'Uo',
    size: 'large',
    material: 'yellow',
    type: 'accessory',
    category: 'xmas',
    price: 2122.46,
    quantity: 499254,
    description: 'User-centric dedicated algorithm'
    //imageUrl: 'https://robohash.org/quidembeataeomnis.png?size=50x50&set=set1'
  },
  {
    name: 'Kallisté',
    size: 'small',
    material: 'silver',
    type: 'misc',
    category: 'xmas',
    price: 156268.61,
    quantity: 83047,
    description: 'Extended modular ability',
    imageUrl: 'https://robohash.org/facereevenietquis.png?size=50x50&set=set1'
  },
  {
    name: 'Gaëlle',
    size: 'small',
    material: 'blue',
    type: 'outfit',
    category: 'misc',
    price: 836363.81,
    quantity: 308120,
    description: 'Networked high-level parallelism',
    imageUrl: 'https://robohash.org/sapienteundeest.bmp?size=50x50&set=set1'
  },
  {
    name: 'Yóu',
    size: 'large',
    material: 'yellow',
    type: 'misc',
    category: 'medieval',
    price: 918442.67,
    quantity: 470774,
    description: 'Centralized interactive encryption',
    imageUrl: 'https://robohash.org/etdolordoloremque.jpg?size=50x50&set=set1'
  },
  {
    name: 'Mà',
    size: 'large',
    material: 'purple',
    type: 'preset',
    category: 'misc',
    price: 242375.09,
    quantity: 121625,
    description: 'Phased mobile matrix',
    imageUrl: 'https://robohash.org/consecteturearumea.bmp?size=50x50&set=set1'
  },
  {
    name: 'Séréna',
    size: 'medium',
    type: 'duck',
    category: 'business/casual',
    price: 470094.09,
    quantity: 512316,
    description: 'Object-based fresh-thinking circuit',
    imageUrl: 'https://robohash.org/doloresnonin.png?size=50x50&set=set1'
  },
  {
    name: 'Laïla',
    size: 'large',
    material: 'yellow',
    type: 'outfit',
    category: 'business/casual',
    price: 998485.75,
    quantity: 98423,
    description: 'Intuitive hybrid capacity',
    imageUrl:
      'https://robohash.org/consequuntursequiexercitationem.png?size=50x50&set=set1'
  },
  {
    name: 'Anaëlle',
    size: 'medium',
    material: 'red',
    type: 'misc',
    category: 'business/casual',
    price: 203468.94,
    quantity: 842956,
    description: 'Reverse-engineered content-based time-frame',
    imageUrl: 'https://robohash.org/explicaboeaut.bmp?size=50x50&set=set1'
  },
  {
    name: 'Faîtes',
    size: 'x-large',
    type: 'misc',
    category: 'medieval',
    price: 777200.0,
    quantity: 755436,
    description: 'Right-sized well-modulated local area network'
  },
  {
    name: 'Mélodie',
    size: 'x-large',
    type: 'outfit',
    category: 'business/casual',
    price: 451719.82,
    quantity: 474619,
    description: 'Universal systemic extranet',
    imageUrl: 'https://robohash.org/etoditvoluptatum.bmp?size=50x50&set=set1'
  },
  {
    name: 'Lucrèce',
    size: 'small',
    type: 'duck',
    category: 'xmas',
    price: 303491.4,
    quantity: 154577,
    description: 'Re-engineered discrete installation',
    imageUrl: 'https://robohash.org/estdoloresvelit.jpg?size=50x50&set=set1'
  },
  {
    name: 'Léonie',
    size: 'medium',
    type: 'preset',
    category: 'halloween',
    price: 887102.49,
    quantity: 414135,
    description: 'Pre-emptive intermediate neural-net',
    imageUrl: 'https://robohash.org/quonesciuntnon.bmp?size=50x50&set=set1'
  },
  {
    name: 'Eléa',
    size: 'medium',
    type: 'outfit',
    category: 'business/casual',
    price: 986653.37,
    quantity: 799749,
    description: 'Down-sized systemic info-mediaries'
  },
  {
    name: 'Loïc',
    size: 'medium',
    type: 'preset',
    category: 'summer',
    price: 622033.13,
    quantity: 773945,
    description: 'Streamlined motivating strategy'
  },
  {
    name: 'Vérane',
    size: 'medium',
    type: 'duck',
    category: 'summer',
    price: 80459.95,
    quantity: 109218,
    description: 'User-friendly discrete toolset',
    imageUrl: 'https://robohash.org/estsuscipitnon.bmp?size=50x50&set=set1'
  },
  {
    name: 'Véronique',
    size: 'small',
    type: 'misc',
    category: 'medieval',
    price: 369022.56,
    quantity: 548903,
    description: 'Re-engineered zero tolerance utilisation',
    imageUrl:
      'https://robohash.org/voluptassedvoluptates.jpg?size=50x50&set=set1'
  },
  {
    name: 'Méthode',
    size: 'medium',
    type: 'accessory',
    category: 'gamer',
    price: 778405.65,
    quantity: 587291,
    description: 'Programmable content-based open system'
  },
  {
    name: 'Léonie',
    size: 'large',
    type: 'misc',
    category: 'xmas',
    price: 547486.93,
    quantity: 895898,
    description: 'Digitized next generation data-warehouse'
  },
  {
    name: 'Naéva',
    size: 'x-large',
    material: 'purple',
    type: 'outfit',
    category: 'gamer',
    price: 593158.18,
    quantity: 872328,
    description: 'Digitized composite emulation',
    imageUrl:
      'https://robohash.org/voluptasvelaspernatur.png?size=50x50&set=set1'
  },
  {
    name: 'Réjane',
    size: 'x-large',
    material: 'blue',
    type: 'preset',
    category: 'misc',
    price: 559899.41,
    quantity: 280794,
    description: 'Re-engineered mobile attitude',
    imageUrl: 'https://robohash.org/utdeserunttempore.png?size=50x50&set=set1'
  },
  {
    name: 'Méthode',
    size: 'large',
    material: 'blue',
    type: 'misc',
    category: 'halloween',
    price: 236010.24,
    quantity: 831715,
    description: 'Devolved national infrastructure',
    imageUrl: 'https://robohash.org/optioetdolores.jpg?size=50x50&set=set1'
  },
  {
    name: 'Märta',
    size: 'medium',
    material: 'red',
    type: 'duck',
    category: 'gamer',
    price: 163491.93,
    quantity: 488735,
    description: 'Grass-roots 4th generation access'
  },
  {
    name: 'Laïla',
    size: 'large',
    type: 'accessory',
    category: 'business/casual',
    price: 462139.47,
    quantity: 829113,
    description: 'De-engineered grid-enabled task-force',
    imageUrl: 'https://robohash.org/etvoluptatemvel.jpg?size=50x50&set=set1'
  },
  {
    name: 'Naéva',
    size: 'large',
    type: 'duck',
    category: 'misc',
    price: 249058.62,
    quantity: 609816,
    description: 'Upgradable asymmetric alliance',
    imageUrl: 'https://robohash.org/remeumeos.png?size=50x50&set=set1'
  },
  {
    name: 'Chloé',
    size: 'large',
    material: 'purple',
    type: 'outfit',
    category: 'summer',
    price: 643223.41,
    quantity: 147391,
    description: 'Open-architected contextually-based project',
    imageUrl: 'https://robohash.org/noneadeleniti.png?size=50x50&set=set1'
  },
  {
    name: 'Zoé',
    size: 'large',
    type: 'preset',
    category: 'halloween',
    price: 444416.08,
    quantity: 400551,
    description: 'Progressive directional database',
    imageUrl: 'https://robohash.org/utliberosapiente.png?size=50x50&set=set1'
  },
  {
    name: 'Vénus',
    size: 'medium',
    type: 'accessory',
    category: 'misc',
    price: 51113.96,
    quantity: 75686,
    description: 'Right-sized value-added throughput',
    imageUrl: 'https://robohash.org/molestiaehicet.jpg?size=50x50&set=set1'
  },
  {
    name: 'Bénédicte',
    size: 'medium',
    material: 'yellow',
    type: 'preset',
    category: 'gamer',
    price: 911938.15,
    quantity: 242861,
    description: 'Mandatory coherent project'
  },
  {
    name: 'Solène',
    size: 'large',
    type: 'outfit',
    category: 'medieval',
    price: 901475.31,
    quantity: 563747,
    description: 'Organized background protocol',
    imageUrl: 'https://robohash.org/autdignissimosmagni.bmp?size=50x50&set=set1'
  },
  {
    name: 'Torbjörn',
    size: 'x-large',
    material: 'yellow',
    type: 'misc',
    category: 'medieval',
    price: 961376.82,
    quantity: 429221,
    description: 'Polarised global emulation',
    imageUrl: 'https://robohash.org/enimnostrumet.png?size=50x50&set=set1'
  },
  {
    name: 'Pål',
    size: 'small',
    material: 'silver',
    type: 'accessory',
    category: 'summer',
    price: 315921.44,
    quantity: 70578,
    description: 'Assimilated grid-enabled info-mediaries',
    imageUrl:
      'https://robohash.org/utconsecteturvoluptate.bmp?size=50x50&set=set1'
  },
  {
    name: 'Gisèle',
    size: 'x-large',
    type: 'duck',
    category: 'business/casual',
    price: 280290.0,
    quantity: 262399,
    description: 'Versatile 4th generation ability',
    imageUrl:
      'https://robohash.org/voluptatemsapienterepellendus.bmp?size=50x50&set=set1'
  },
  {
    name: 'Clémence',
    size: 'large',
    material: 'yellow',
    type: 'misc',
    category: 'xmas',
    price: 721681.77,
    quantity: 728375,
    description: 'Virtual analyzing time-frame'
  },
  {
    name: 'Maëlys',
    size: 'small',
    type: 'outfit',
    category: 'summer',
    price: 829480.98,
    quantity: 333986,
    description: 'Adaptive optimal projection',
    imageUrl: 'https://robohash.org/sitnequevoluptatum.png?size=50x50&set=set1'
  },
  {
    name: 'Noëlla',
    size: 'x-large',
    material: 'gold',
    type: 'accessory',
    category: 'business/casual',
    price: 187336.67,
    quantity: 868546,
    description: 'Customer-focused fresh-thinking infrastructure'
  },
  {
    name: 'Maïlys',
    size: 'medium',
    type: 'duck',
    category: 'summer',
    price: 248335.09,
    quantity: 744782,
    description: 'Customer-focused bottom-line utilisation'
  },
  {
    name: 'Maïlis',
    size: 'x-large',
    material: 'yellow',
    type: 'accessory',
    category: 'business/casual',
    price: 368841.77,
    quantity: 290476,
    description: 'Automated grid-enabled budgetary management',
    imageUrl: 'https://robohash.org/rationedelenitiaut.bmp?size=50x50&set=set1'
  },
  {
    name: 'Yáo',
    size: 'x-large',
    type: 'duck',
    category: 'misc',
    price: 612868.21,
    quantity: 814864,
    description: 'Visionary mission-critical moratorium'
  },
  {
    name: 'Cléa',
    size: 'small',
    material: 'yellow',
    type: 'duck',
    category: 'gamer',
    price: 73354.58,
    quantity: 604860,
    description: 'Focused maximized standardization',
    imageUrl: 'https://robohash.org/modienimquia.jpg?size=50x50&set=set1'
  },
  {
    name: 'Hélèna',
    size: 'large',
    type: 'outfit',
    category: 'xmas',
    price: 322591.98,
    quantity: 406727,
    description: 'Open-source responsive frame'
  },
  {
    name: 'Méng',
    size: 'large',
    type: 'misc',
    category: 'halloween',
    price: 23825.78,
    quantity: 110912,
    description: 'Centralized bottom-line encoding',
    imageUrl: 'https://robohash.org/deseruntsintdebitis.bmp?size=50x50&set=set1'
  },
  {
    name: 'Publicité',
    size: 'medium',
    material: 'blue',
    type: 'misc',
    category: 'summer',
    price: 903072.22,
    quantity: 916270,
    description: 'Multi-layered cohesive standardization',
    imageUrl: 'https://robohash.org/sitdoloresed.png?size=50x50&set=set1'
  },
  {
    name: 'Maïwenn',
    size: 'large',
    material: 'yellow',
    type: 'outfit',
    category: 'xmas',
    price: 116308.4,
    quantity: 364228,
    description: 'Self-enabling demand-driven functionalities',
    imageUrl:
      'https://robohash.org/praesentiumullamofficiis.bmp?size=50x50&set=set1'
  },
  {
    name: 'Cléa',
    size: 'small',
    material: 'purple',
    type: 'outfit',
    category: 'gamer',
    price: 548695.44,
    quantity: 342327,
    description: 'Re-engineered bandwidth-monitored software',
    imageUrl: 'https://robohash.org/deseruntetdebitis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Pò',
    size: 'medium',
    material: 'red',
    type: 'duck',
    category: 'summer',
    price: 82687.47,
    quantity: 504052,
    description: 'Up-sized 5th generation archive',
    imageUrl: 'https://robohash.org/fugaestsapiente.jpg?size=50x50&set=set1'
  },
  {
    name: 'Crééz',
    size: 'small',
    material: 'red',
    type: 'duck',
    category: 'halloween',
    price: 398464.28,
    quantity: 82608,
    description: 'Monitored uniform migration',
    imageUrl: 'https://robohash.org/voluptatemullameos.jpg?size=50x50&set=set1'
  },
  {
    name: 'Mén',
    size: 'small',
    type: 'misc',
    category: 'misc',
    price: 839629.82,
    quantity: 390076,
    description: 'Fully-configurable multi-tasking model',
    imageUrl:
      'https://robohash.org/iuresimiliquenesciunt.png?size=50x50&set=set1'
  },
  {
    name: 'Cinéma',
    size: 'small',
    type: 'accessory',
    category: 'gamer',
    price: 922412.91,
    quantity: 96112,
    description: 'Devolved attitude-oriented structure',
    imageUrl:
      'https://robohash.org/etrepudiandaeratione.bmp?size=50x50&set=set1'
  },
  {
    name: 'Eloïse',
    size: 'x-large',
    type: 'outfit',
    category: 'misc',
    price: 280167.22,
    quantity: 733727,
    description: 'Optimized uniform matrices',
    imageUrl: 'https://robohash.org/etquiaet.bmp?size=50x50&set=set1'
  },
  {
    name: 'Aloïs',
    size: 'medium',
    type: 'misc',
    category: 'misc',
    price: 393374.54,
    quantity: 675199,
    description: 'Distributed client-driven alliance',
    imageUrl: 'https://robohash.org/nemoadet.jpg?size=50x50&set=set1'
  },
  {
    name: 'Cinéma',
    size: 'small',
    type: 'misc',
    category: 'summer',
    price: 421958.55,
    quantity: 28861,
    description: 'Optional encompassing capacity',
    imageUrl: 'https://robohash.org/doloribuseosdolorem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Publicité',
    size: 'large',
    material: 'purple',
    type: 'misc',
    category: 'misc',
    price: 393389.85,
    quantity: 206103,
    description: 'Down-sized foreground policy',
    imageUrl:
      'https://robohash.org/laboreperspiciatisrem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Yóu',
    size: 'small',
    material: 'yellow',
    type: 'accessory',
    category: 'gamer',
    price: 501149.22,
    quantity: 230871,
    description: 'Digitized empowering software'
  },
  {
    name: 'Maïwenn',
    size: 'medium',
    type: 'duck',
    category: 'misc',
    price: 324373.85,
    quantity: 337293,
    description: 'Face to face background benchmark',
    imageUrl: 'https://robohash.org/aquisest.jpg?size=50x50&set=set1'
  },
  {
    name: 'Angélique',
    size: 'medium',
    type: 'duck',
    category: 'summer',
    price: 913180.5,
    quantity: 888937,
    description: 'Synergized 24 hour groupware'
  },
  {
    name: 'Adèle',
    size: 'large',
    type: 'outfit',
    category: 'medieval',
    price: 312385.35,
    quantity: 387260,
    description: 'Ameliorated 6th generation neural-net',
    imageUrl:
      'https://robohash.org/officiisquisconsequuntur.png?size=50x50&set=set1'
  },
  {
    name: 'Desirée',
    size: 'medium',
    type: 'duck',
    category: 'medieval',
    price: 880040.56,
    quantity: 948748,
    description: 'Profit-focused didactic monitoring',
    imageUrl:
      'https://robohash.org/impeditvoluptatemexcepturi.jpg?size=50x50&set=set1'
  },
  {
    name: 'Lèi',
    size: 'small',
    type: 'outfit',
    category: 'business/casual',
    price: 113156.26,
    quantity: 41423,
    description: 'Reactive stable application',
    imageUrl:
      'https://robohash.org/perferendisnostrumcommodi.jpg?size=50x50&set=set1'
  },
  {
    name: 'Marlène',
    size: 'large',
    material: 'silver',
    type: 'outfit',
    category: 'summer',
    price: 603994.61,
    quantity: 123597,
    description: 'Vision-oriented radical open architecture',
    imageUrl:
      'https://robohash.org/maximeperspiciatisdolorem.png?size=50x50&set=set1'
  },
  {
    name: 'Dà',
    size: 'small',
    material: 'blue',
    type: 'preset',
    category: 'xmas',
    price: 83097.3,
    quantity: 841930,
    description: 'Intuitive bi-directional service-desk',
    imageUrl:
      'https://robohash.org/nullavoluptatemofficiis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Célestine',
    size: 'small',
    type: 'outfit',
    category: 'summer',
    price: 882710.97,
    quantity: 321583,
    description: 'Inverse zero tolerance array',
    imageUrl: 'https://robohash.org/deseruntetomnis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Fèi',
    size: 'medium',
    type: 'outfit',
    category: 'medieval',
    price: 347867.5,
    quantity: 340392,
    description: 'Universal responsive software',
    imageUrl: 'https://robohash.org/aliasilloblanditiis.png?size=50x50&set=set1'
  },
  {
    name: 'Eugénie',
    size: 'x-large',
    type: 'accessory',
    category: 'summer',
    price: 923628.4,
    quantity: 408209,
    description: 'Sharable real-time structure',
    imageUrl: 'https://robohash.org/corporisomnislibero.jpg?size=50x50&set=set1'
  },
  {
    name: 'Lyséa',
    size: 'large',
    type: 'outfit',
    category: 'halloween',
    price: 354524.46,
    quantity: 711481,
    description: 'Reverse-engineered 5th generation success',
    imageUrl:
      'https://robohash.org/eaquevoluptatemvoluptatem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Médiamass',
    size: 'large',
    material: 'red',
    type: 'accessory',
    category: 'misc',
    price: 649795.73,
    quantity: 595024,
    description: 'Team-oriented foreground paradigm',
    imageUrl:
      'https://robohash.org/temporeconsecteturlaboriosam.png?size=50x50&set=set1'
  },
  {
    name: 'Daphnée',
    size: 'small',
    material: 'silver',
    type: 'preset',
    category: 'halloween',
    price: 397108.67,
    quantity: 424006,
    description: 'Seamless empowering leverage',
    imageUrl: 'https://robohash.org/adaliquamnisi.bmp?size=50x50&set=set1'
  },
  {
    name: 'Nuó',
    size: 'large',
    type: 'preset',
    category: 'medieval',
    price: 138780.44,
    quantity: 608462,
    description: 'Vision-oriented actuating attitude',
    imageUrl: 'https://robohash.org/suntsedminima.jpg?size=50x50&set=set1'
  },
  {
    name: 'Pò',
    size: 'small',
    type: 'accessory',
    category: 'business/casual',
    price: 762070.0,
    quantity: 664401,
    description: 'Networked interactive functionalities',
    imageUrl: 'https://robohash.org/etvelitdoloribus.png?size=50x50&set=set1'
  },
  {
    name: 'Marie-josée',
    size: 'large',
    material: 'blue',
    type: 'preset',
    category: 'xmas',
    price: 699142.55,
    quantity: 22671,
    description: 'Enterprise-wide regional system engine',
    imageUrl: 'https://robohash.org/magnianimivoluptate.png?size=50x50&set=set1'
  },
  {
    name: 'Marie-hélène',
    size: 'medium',
    type: 'preset',
    category: 'xmas',
    price: 20212.28,
    quantity: 744092,
    description: 'Seamless well-modulated project',
    imageUrl: 'https://robohash.org/commodisedratione.png?size=50x50&set=set1'
  },
  {
    name: 'Lauréna',
    size: 'x-large',
    material: 'gold',
    type: 'accessory',
    category: 'xmas',
    price: 291865.74,
    quantity: 691920,
    description: 'Exclusive local definition',
    imageUrl:
      'https://robohash.org/occaecatireprehenderitsed.bmp?size=50x50&set=set1'
  },
  {
    name: 'Josée',
    size: 'x-large',
    type: 'duck',
    category: 'halloween',
    price: 743099.29,
    quantity: 314353,
    description: 'Switchable analyzing encoding'
  },
  {
    name: 'Bérengère',
    size: 'x-large',
    material: 'yellow',
    type: 'misc',
    category: 'xmas',
    price: 595022.33,
    quantity: 877438,
    description: 'Focused mission-critical encryption',
    imageUrl: 'https://robohash.org/dolorquiaaut.bmp?size=50x50&set=set1'
  },
  {
    name: 'Örjan',
    size: 'x-large',
    material: 'gold',
    type: 'preset',
    category: 'xmas',
    price: 396428.57,
    quantity: 631477,
    description: 'Customer-focused bottom-line local area network',
    imageUrl:
      'https://robohash.org/placeatdebitispossimus.jpg?size=50x50&set=set1'
  },
  {
    name: 'Fèi',
    size: 'small',
    type: 'outfit',
    category: 'business/casual',
    price: 745121.65,
    quantity: 582872,
    description: 'Progressive systematic superstructure',
    imageUrl:
      'https://robohash.org/consequunturnemoaliquid.bmp?size=50x50&set=set1'
  },
  {
    name: 'Danièle',
    size: 'medium',
    material: 'blue',
    type: 'preset',
    category: 'misc',
    price: 51798.06,
    quantity: 997372,
    description: 'Phased fault-tolerant budgetary management',
    imageUrl:
      'https://robohash.org/quasirepudiandaeexercitationem.bmp?size=50x50&set=set1'
  },
  {
    name: 'Eléonore',
    size: 'large',
    type: 'outfit',
    category: 'halloween',
    price: 20884.92,
    quantity: 248747,
    description: 'Adaptive 3rd generation capacity',
    imageUrl:
      'https://robohash.org/voluptatemeiusexercitationem.jpg?size=50x50&set=set1'
  },
  {
    name: 'Crééz',
    size: 'medium',
    type: 'outfit',
    category: 'summer',
    price: 589732.42,
    quantity: 44472,
    description: 'Adaptive zero defect open architecture'
  },
  {
    name: 'Médiamass',
    size: 'medium',
    material: 'red',
    type: 'outfit',
    category: 'gamer',
    price: 356367.84,
    quantity: 487537,
    description: 'Self-enabling heuristic frame',
    imageUrl: 'https://robohash.org/quositquos.bmp?size=50x50&set=set1'
  },
  {
    name: 'Hélène',
    size: 'medium',
    type: 'misc',
    category: 'halloween',
    price: 179905.02,
    quantity: 808934,
    description: 'Optional multimedia data-warehouse',
    imageUrl: 'https://robohash.org/inenimfacilis.bmp?size=50x50&set=set1'
  },
  {
    name: 'Illustrée',
    size: 'medium',
    material: 'red',
    type: 'misc',
    category: 'halloween',
    price: 837383.29,
    quantity: 546917,
    description: 'Decentralized real-time Graphic Interface',
    imageUrl:
      'https://robohash.org/mollitiaquianesciunt.jpg?size=50x50&set=set1'
  },
  {
    name: 'Maïlys',
    size: 'x-large',
    type: 'misc',
    category: 'gamer',
    price: 31595.83,
    quantity: 464415,
    description: 'Open-architected incremental function',
    imageUrl: 'https://robohash.org/nullaevenietquia.bmp?size=50x50&set=set1'
  },
  {
    name: 'Tán',
    size: 'small',
    type: 'outfit',
    category: 'gamer',
    price: 610567.16,
    quantity: 326447,
    description: 'Mandatory 6th generation success',
    imageUrl: 'https://robohash.org/saepeundeodio.bmp?size=50x50&set=set1'
  },
  {
    name: 'Méthode',
    size: 'small',
    type: 'preset',
    category: 'misc',
    price: 414662.84,
    quantity: 371030,
    description: 'Multi-channelled reciprocal hub',
    imageUrl:
      'https://robohash.org/consequaturadipiscivoluptas.jpg?size=50x50&set=set1'
  },
  {
    name: 'Adélie',
    size: 'small',
    material: 'blue',
    type: 'accessory',
    category: 'medieval',
    price: 910876.36,
    quantity: 419748,
    description: 'Secured next generation internet solution',
    imageUrl: 'https://robohash.org/facilissunttempora.jpg?size=50x50&set=set1'
  },
  {
    name: 'Nuó',
    size: 'large',
    type: 'duck',
    category: 'halloween',
    price: 954082.53,
    quantity: 410653,
    description: 'Innovative zero tolerance adapter',
    imageUrl: 'https://robohash.org/reiciendisestdicta.png?size=50x50&set=set1'
  },
  {
    name: 'Léa',
    size: 'large',
    type: 'misc',
    category: 'business/casual',
    price: 229305.81,
    quantity: 46113,
    description: 'Reverse-engineered coherent function',
    imageUrl: 'https://robohash.org/optioquiatenetur.png?size=50x50&set=set1'
  },
  {
    name: 'Gaïa',
    size: 'medium',
    material: 'red',
    type: 'accessory',
    category: 'medieval',
    price: 204217.18,
    quantity: 664640,
    description: 'Triple-buffered explicit benchmark',
    imageUrl:
      'https://robohash.org/eaaccusantiumcorporis.jpg?size=50x50&set=set1'
  },
  {
    name: 'Adélie',
    size: 'small',
    material: 'silver',
    type: 'misc',
    category: 'xmas',
    price: 756862.64,
    quantity: 681228,
    description: 'Intuitive fault-tolerant extranet',
    imageUrl: 'https://robohash.org/inciduntcumeum.jpg?size=50x50&set=set1'
  },
  {
    name: 'Gaïa',
    size: 'small',
    type: 'outfit',
    category: 'gamer',
    price: 716197.0,
    quantity: 577688,
    description: 'Decentralized radical approach',
    imageUrl: 'https://robohash.org/dolorempariaturnisi.bmp?size=50x50&set=set1'
  },
  {
    name: 'Anaé',
    size: 'large',
    material: 'gold',
    type: 'accessory',
    category: 'misc',
    price: 444657.54,
    quantity: 8357,
    description: 'Function-based heuristic functionalities',
    imageUrl:
      'https://robohash.org/quidemtemporibusquia.png?size=50x50&set=set1'
  },
  {
    name: 'Agnès',
    size: 'large',
    material: 'purple',
    type: 'misc',
    category: 'business/casual',
    price: 181567.29,
    quantity: 5265,
    description: 'Mandatory object-oriented core',
    imageUrl: 'https://robohash.org/assumendavelut.jpg?size=50x50&set=set1'
  },
  {
    name: 'Maëlys',
    size: 'medium',
    type: 'preset',
    category: 'xmas',
    price: 206607.39,
    quantity: 180881,
    description: 'Profound mobile leverage',
    imageUrl: 'https://robohash.org/idcommodianimi.jpg?size=50x50&set=set1'
  },
  {
    name: 'Torbjörn',
    size: 'large',
    type: 'accessory',
    category: 'halloween',
    price: 720272.53,
    quantity: 323246,
    description: 'Optimized cohesive complexity',
    imageUrl: 'https://robohash.org/autindolorem.jpg?size=50x50&set=set1'
  },
  {
    name: 'Pénélope',
    size: 'medium',
    material: 'red',
    type: 'preset',
    category: 'halloween',
    price: 249935.39,
    quantity: 43055,
    description: 'De-engineered global hierarchy',
    imageUrl: 'https://robohash.org/eiusexcepturienim.jpg?size=50x50&set=set1'
  },
  {
    name: 'Cloé',
    size: 'x-large',
    type: 'duck',
    category: 'business/casual',
    price: 535261.82,
    quantity: 50610,
    description: 'Cross-platform national middleware',
    imageUrl: 'https://robohash.org/quisvoluptatemest.jpg?size=50x50&set=set1'
  },
  {
    name: 'Zhì',
    size: 'x-large',
    type: 'misc',
    category: 'medieval',
    price: 66846.93,
    quantity: 67178,
    description: 'Ameliorated motivating success',
    imageUrl: 'https://robohash.org/maioresatquequia.png?size=50x50&set=set1'
  },
  {
    name: 'Séverine',
    size: 'x-large',
    type: 'preset',
    category: 'business/casual',
    price: 86096.37,
    quantity: 642005,
    description: 'Grass-roots 24/7 open system',
    imageUrl: 'https://robohash.org/quidemsaepeporro.png?size=50x50&set=set1'
  },
  {
    name: 'Danièle',
    size: 'x-large',
    type: 'preset',
    category: 'gamer',
    price: 549866.53,
    quantity: 358404,
    description: 'Synchronised composite function'
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
    products.map(product => {
      return Product.create(product)
    })
  )

  await Promise.all(
    orders.map(order => {
      return Order.create(order)
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
