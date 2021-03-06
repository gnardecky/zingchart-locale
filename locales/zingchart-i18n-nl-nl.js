(function(){
  var locale = {
      'rtl' : false,
      'decimals-separator': ',',
      'thousands-separator': '.',
      'menu-reload': 'Vernieuwen',
      'menu-print': 'Print grafiek',
      'menu-viewaspng': 'Bekijk als PNG',
      'menu-viewasjpg': 'Bekijk als JPG',
      'menu-downloadpdf': 'Download PDF',
      'menu-downloadsvg': 'Download SVG',
      'menu-exportdata' : 'Exporteer Data',
      'menu-zoomin': 'Zoom in',
      'menu-zoomout': 'Zoom uit',
      'menu-viewall': 'Alles bekijken',
      'menu-viewsource': 'Bron bekijken',
      'menu-bugreport': 'Probleem melden',
      'menu-switchto2d': 'Toon 2D weergave',
      'menu-switchto3d': 'Toon 3D weergave',
      'menu-showguide' : 'Toon Guide',
  	'menu-hideguide' : 'Verberg Guide',
      'menu-switchtolin': 'Toon lineaire schaal',
      'menu-switchtolog': 'Naar logaritmische schaal',
      'menu-fullscreen': 'Volledige scherm',
      'menu-exitfullscreen': 'Volledig scherm sluiten',
      'menu-goback' : 'Vorige',
  	'menu-goforward' : 'Volgende',
      'date-formats': {
          'msecond': '%d %M %Y<br />%G:%i:%s<br />%q ms',
          'second': '%d %M %Y<br />%G:%i:%s',
          'minute': '%d %M %Y<br />%G:%i',
          'hour': '%d %M %Y<br />%G',
          'day': '%d %M %Y',
          'month': '%M %Y',
          'year': '%Y'
      },
      'days-short': ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
      'days-long': ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      'months-short': ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      'months-long': ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
      'sync-wait': 'Wachten…',
      'progress-wait-long': 'Wacht. Laden…',
      'progress-wait-short': 'Wachten…',
      'progress-wait-mini': '…',
      'error-header': 'Er is een fout opgetreden',
      'error-message': 'Foutmelding:',
      'error-close': 'Sluiten',
      'bugreport-header': 'Meld een foutrapport',
      'bugreport-senddata': 'Verzend JSON data',
      'bugreport-sendcapture': 'Verstuur schermopname',
      'bugreport-yourcomment': 'Uw opmerking:',
      'bugreport-jsondata': 'JSON Data:',
      'bugreport-youremail': 'Uw e-mailadres',
      'bugreport-infoemail': 'Als u onze reactie wilt ontvangen via de e-mail',
      'bugreport-emailmandatory': 'E-mailadres is verplacht…',
      'bugreport-submit': 'Verzenden',
      'bugreport-cancel': 'Annuleren',
      'bugreport-confirm': 'Uw foutrapportage is verzonden.\n\nBedankt!',
      'about-close': 'Sluiten',
      'viewsource-jsonsource': 'Verwerkte JSON',
      'viewsource-originalsource': 'Originele JSON',
      'viewsource-close': 'Sluiten',
      'viewsource-apply': 'Toepassen',
      'viewimage-close': 'Sluiten',
      'legend-pagination' : 'Pagina %page% van %pages%'
  };

  if (typeof zingchart !== 'undefined') {
    zingchart.i18n.nl_nl = locale;
  }
  else if (typeof window === 'undefined' && module.exports !== 'undefined'){
    module.exports = locale;
  }
})();
