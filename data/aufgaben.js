/* Aufgaben-Generatoren für den Formel-Trainer (Energie, Physik 9/10)
   Jeder Generator liefert eine Aufgabe mit Zufallswerten:
   { text, gegeben, gesucht, formel, rechnung[], antwort, wert, einheit, dec, falsch[] }
   Schreibweise wie in den Daten: E_pot, √{…}; Zahlen mit N() deutsch formatiert. */
(function () {
  var g = 9.81;
  function rnd(a, b, step) { step = step || 1; var n = Math.floor((b - a) / step + 1e-9) + 1; return +(a + Math.floor(Math.random() * n) * step).toFixed(6); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function N(x, dec) { return window.App.num(x, dec); }
  function round(x, sig) { return +x.toPrecision(sig); }
  /* exakter Wert ≈ gerundeter Wert (Reihenstandard) */
  function ex(x, unit, dec) {
    var exact = +x.toFixed(6), r = dec == null ? round(exact, 3) : +exact.toFixed(dec);
    if (exact === r) return '<b>' + N(r, dec) + ' ' + unit + '</b>';
    var shortExact = Math.abs(exact - +exact.toFixed(3)) < 1e-9;   // exakter Wert nur, wenn er kurz ist
    return (shortExact ? N(exact) + ' ' + unit + ' ' : '') + '≈ <b>' + N(r, dec) + ' ' + unit + '</b>';
  }

  window.AUFGABEN = [
    { id: 'epot', r: 'berechnen', n: 'basis', titel: 'Lageenergie berechnen', gen: function () {
        var c = pick([
          ['Eine Kletterin', rnd(48, 70), 'klettert an der Boulderwand H m hoch', rnd(4, 12)],
          ['Ein Paket', rnd(10, 40), 'wird mit einem Kran H m hoch auf ein Dach gehoben', rnd(6, 30)],
          ['Ein Wanderer', rnd(60, 85), 'steigt auf einen H m hohen Aussichtsturm', rnd(20, 60)],
          ['Ein Achterbahnzug', rnd(400, 900, 50), 'wird vom Lift H m hoch gezogen', rnd(20, 45)]]);
        var m = c[1], h = c[3], E = m * g * h;
        return { text: c[0] + ' (' + N(m) + ' kg) ' + c[2].replace('H', N(h)) + '. Wie viel Lageenergie wird dabei gewonnen?',
          gegeben: 'm = ' + N(m) + ' kg; h = ' + N(h) + ' m; g = 9,81 m/s²', gesucht: 'E_pot in J', formel: 'E_pot = m · g · h',
          rechnung: ['E_pot = ' + N(m) + ' kg · 9,81 m/s² · ' + N(h) + ' m', 'E_pot = ' + ex(E, 'J')],
          antwort: 'Die Lageenergie nimmt um etwa ' + N(round(E, 3)) + ' J zu.', wert: E, einheit: 'J', falsch: [m * h, E * 10] };
      } },
    { id: 'ekin', r: 'berechnen', n: 'basis', titel: 'Bewegungsenergie berechnen', gen: function () {
        var c = pick([['Ein Auto', rnd(900, 1600, 100), rnd(10, 30)], ['Eine Skaterin', rnd(40, 65), rnd(2, 8)],
          ['Ein Radfahrer mit Fahrrad', rnd(65, 95, 5), rnd(4, 9)], ['Ein Bus', rnd(10000, 18000, 1000), rnd(8, 15)]]);
        var m = c[1], v = c[2], E = 0.5 * m * v * v;
        return { text: c[0] + ' (' + N(m) + ' kg) fährt mit ' + N(v) + ' m/s. Wie groß ist die Bewegungsenergie?',
          gegeben: 'm = ' + N(m) + ' kg; v = ' + N(v) + ' m/s', gesucht: 'E_kin in J', formel: 'E_kin = ½ · m · v²',
          rechnung: ['E_kin = ½ · ' + N(m) + ' kg · (' + N(v) + ' m/s)²', 'E_kin = ½ · ' + N(m) + ' kg · ' + N(v * v) + ' m²/s²', 'E_kin = ' + ex(E, 'J')],
          antwort: 'Die Bewegungsenergie beträgt etwa ' + N(round(E, 3)) + ' J.', wert: E, einheit: 'J', falsch: [m * v * v, 0.5 * m * v] };
      } },
    { id: 'epot-h', r: 'berechnen', n: 'stern', titel: 'Höhe aus der Lageenergie', gen: function () {
        var m = rnd(40, 90), h = rnd(5, 40), E = Math.round(m * g * h);
        return { text: 'Eine Person (' + N(m) + ' kg) hat beim Treppensteigen ' + N(E) + ' J Lageenergie gewonnen. Wie hoch ist sie gestiegen?',
          gegeben: 'm = ' + N(m) + ' kg; E_pot = ' + N(E) + ' J; g = 9,81 m/s²', gesucht: 'h in m', formel: 'h = E_pot : (m · g)',
          rechnung: ['h = ' + N(E) + ' J : (' + N(m) + ' kg · 9,81 m/s²)', 'h = ' + N(E) + ' J : ' + N(+(m * g).toFixed(2)) + ' N', 'h = ' + ex(E / (m * g), 'm', 1)],
          antwort: 'Sie ist etwa ' + N(+(E / (m * g)).toFixed(1)) + ' m hoch gestiegen.', wert: E / (m * g), einheit: 'm', dec: 1, falsch: [E / m, E * m * g / 1e4] };
      } },
    { id: 'ekin-v', r: 'berechnen', n: 'stern', titel: 'Geschwindigkeit aus der Bewegungsenergie', gen: function () {
        var m = rnd(50, 90, 5), v = rnd(3, 12), E = 0.5 * m * v * v;
        return { text: 'Ein Sprinter (' + N(m) + ' kg) hat eine Bewegungsenergie von ' + N(E) + ' J. Wie schnell ist er?',
          gegeben: 'm = ' + N(m) + ' kg; E_kin = ' + N(E) + ' J', gesucht: 'v in m/s', formel: 'v = √{2 · E_kin : m}',
          rechnung: ['v = √{2 · ' + N(E) + ' J : ' + N(m) + ' kg}', 'v = √{' + N(v * v) + ' m²/s²}', 'v = ' + ex(v, 'm/s', 1)],
          antwort: 'Er läuft mit ' + N(v) + ' m/s, das sind ' + N(+(v * 3.6).toFixed(1)) + ' km/h.', wert: v, einheit: 'm/s', dec: 1, falsch: [2 * E / m, v * 3.6] };
      } },
    { id: 'fall', r: 'berechnen', n: 'stern', titel: 'Energiebilanz: Geschwindigkeit unten', gen: function () {
        var m = rnd(300, 900, 50), h = rnd(8, 50), E = m * g * h, v = Math.sqrt(2 * g * h);
        return { text: 'Ein Achterbahnwagen (' + N(m) + ' kg) rollt ohne Reibung ' + N(h) + ' m tief ins Tal. Wie schnell ist er unten?',
          gegeben: 'm = ' + N(m) + ' kg; h = ' + N(h) + ' m; g = 9,81 m/s²', gesucht: 'v in m/s', formel: 'E_pot (oben) = E_kin (unten);  v = √{2 · E_kin : m}',
          rechnung: ['E_pot = ' + N(m) + ' kg · 9,81 m/s² · ' + N(h) + ' m = ' + N(+E.toFixed(2)) + ' J', 'unten: E_kin = E_pot = ' + N(+E.toFixed(2)) + ' J',
            'v = √{2 · ' + N(+E.toFixed(2)) + ' J : ' + N(m) + ' kg} = √{' + N(+(2 * g * h).toFixed(2)) + ' m²/s²}', 'v = ' + ex(v, 'm/s', 1)],
          antwort: 'Unten ist der Wagen etwa ' + N(+v.toFixed(1)) + ' m/s schnell (≈ ' + N(Math.round(v * 3.6)) + ' km/h).', wert: v, einheit: 'm/s', dec: 1, falsch: [2 * g * h, v * 3.6] };
      } },
    { id: 'energie', r: 'strom', n: 'basis', titel: 'Energie aus Leistung und Zeit', gen: function () {
        var c = pick([['Ein Föhn', rnd(1200, 2000, 100), rnd(0.25, 1, 0.25)], ['Ein Fernseher', rnd(80, 150, 10), rnd(2, 5)],
          ['Eine Konsole', rnd(150, 250, 10), rnd(1, 4)], ['Ein Wasserkocher', rnd(1800, 2400, 200), rnd(0.25, 0.5, 0.25)]]);
        var P = c[1], t = c[2], E = P / 1000 * t;
        return { text: c[0] + ' (' + N(P) + ' W) läuft ' + N(t) + ' h. Wie viel elektrische Energie wird umgewandelt?',
          gegeben: 'P = ' + N(P) + ' W = ' + N(P / 1000) + ' kW; t = ' + N(t) + ' h', gesucht: 'E in kWh', formel: 'E = P · t',
          rechnung: ['E = ' + N(P / 1000) + ' kW · ' + N(t) + ' h', 'E = ' + ex(E, 'kWh', E < 1 ? 3 : 2)],
          antwort: 'Das Gerät braucht ' + N(+E.toFixed(3)) + ' kWh.', wert: E, einheit: 'kWh', dec: 3, falsch: [P * t, E * 10] };
      } },
    { id: 'kosten', r: 'strom', n: 'basis', titel: 'Stromkosten pro Jahr', gen: function () {
        var c = pick([['Ein WLAN-Router', rnd(8, 14), 24], ['Eine Konsole', rnd(150, 250, 10), rnd(1, 3)],
          ['Ein Fernseher', rnd(80, 140, 10), rnd(2, 4)], ['Ein Laptop', rnd(30, 60, 5), rnd(3, 6)]]);
        var P = c[1], h = c[2], Etag = P / 1000 * h, Ej = Etag * 365, K = Ej * 0.37;
        return { text: c[0] + ' (' + N(P) + ' W) läuft ' + N(h) + ' h am Tag. Wie hoch sind die Stromkosten in einem Jahr? Strompreis: 0,37 € pro kWh.',
          gegeben: 'P = ' + N(P) + ' W = ' + N(P / 1000) + ' kW; t = ' + N(h) + ' h pro Tag · 365 Tage; Preis = 0,37 €/kWh', gesucht: 'Kosten in €', formel: 'E = P · t;  Kosten = E · Preis',
          rechnung: ['E pro Tag = ' + N(P / 1000) + ' kW · ' + N(h) + ' h = ' + N(+Etag.toFixed(4)) + ' kWh', 'E pro Jahr = ' + N(+Etag.toFixed(4)) + ' kWh · 365 = ' + N(+Ej.toFixed(3)) + ' kWh',
            'Kosten = ' + N(+Ej.toFixed(3)) + ' kWh · 0,37 €/kWh = ' + ex(K, '€', 2)],
          antwort: 'Die Stromkosten betragen etwa ' + N(K, 2) + ' € pro Jahr.', wert: K, einheit: '€', dec: 2, falsch: [Etag * 0.37, K * 10] };
      } },
    { id: 'eta', r: 'wirkung', n: 'basis', titel: 'Wirkungsgrad berechnen', gen: function () {
        var c = pick([
          ['Eine LED-Lampe', 'elektrische Energie', rnd(100, 200, 50), 'J', 'Licht', 0.01 * rnd(30, 45)],
          ['Eine Glühlampe', 'elektrische Energie', rnd(100, 300, 100), 'J', 'Licht', 0.01 * rnd(3, 6)],
          ['Ein Kohlekraftwerk', 'chemische Energie', rnd(500, 900, 100), 'MWh', 'elektrische Energie', 0.01 * rnd(35, 45)],
          ['Ein Elektromotor', 'elektrische Energie', rnd(500, 2000, 500), 'J', 'Bewegungsenergie', 0.01 * rnd(80, 92)]]);
        var zu = c[2], nutz = Math.round(zu * c[5]), eta = nutz / zu;
        return { text: c[0] + ' bekommt ' + N(zu) + ' ' + c[3] + ' ' + c[1] + ' und gibt davon ' + N(nutz) + ' ' + c[3] + ' als ' + c[4] + ' ab. Wie groß ist der Wirkungsgrad in Prozent?',
          gegeben: 'E_zu = ' + N(zu) + ' ' + c[3] + '; E_nutz = ' + N(nutz) + ' ' + c[3], gesucht: 'η in %', formel: 'η = E_nutz : E_zu',
          rechnung: ['η = ' + N(nutz) + ' ' + c[3] + ' : ' + N(zu) + ' ' + c[3], 'η = ' + N(+eta.toFixed(4)) + ' = ' + ex(eta * 100, '%', 1)],
          antwort: 'Der Wirkungsgrad beträgt etwa ' + N(+(eta * 100).toFixed(1)) + ' %. Nicht genutzt werden ' + N(zu - nutz) + ' ' + c[3] + '.', wert: eta * 100, einheit: '%', dec: 1, falsch: [zu / nutz * 100, (zu - nutz) / zu * 100] };
      } },
    { id: 'eta-nutz', r: 'wirkung', n: 'stern', titel: 'Genutzte Energie aus dem Wirkungsgrad', gen: function () {
        var eta = rnd(30, 45), zu = rnd(4, 12) * 1000;
        var nutz = zu * eta / 100;
        return { text: 'Ein Kraftwerk mit einem Wirkungsgrad von ' + N(eta) + ' % bekommt ' + N(zu) + ' kWh chemische Energie aus Kohle. Wie viel elektrische Energie liefert es?',
          gegeben: 'η = ' + N(eta) + ' % = ' + N(eta / 100) + '; E_zu = ' + N(zu) + ' kWh', gesucht: 'E_nutz in kWh', formel: 'E_nutz = η · E_zu',
          rechnung: ['E_nutz = ' + N(eta / 100) + ' · ' + N(zu) + ' kWh', 'E_nutz = ' + ex(nutz, 'kWh')],
          antwort: 'Das Kraftwerk liefert ' + N(nutz) + ' kWh elektrische Energie. ' + N(zu - nutz) + ' kWh werden zu thermischer Energie (Abwärme).', wert: nutz, einheit: 'kWh', falsch: [zu - nutz, zu * eta] };
      } },
    { id: 'pump', r: 'speichern', n: 'stern', titel: 'Pumpspeicher: Wassermenge', gen: function () {
        var E = rnd(4, 20, 2), h = rnd(100, 400, 50), J = E * 3600000, m = J / (g * h);
        return { text: 'Ein Pumpspeicher soll ' + N(E) + ' kWh speichern. Das Wasser wird ' + N(h) + ' m hoch gepumpt. Wie viel Wasser (in kg) braucht man? Verluste werden nicht beachtet.',
          gegeben: 'E = ' + N(E) + ' kWh = ' + N(J) + ' J; h = ' + N(h) + ' m; g = 9,81 m/s²', gesucht: 'm in kg', formel: 'm = E_pot : (g · h)',
          rechnung: [N(E) + ' kWh = ' + N(E) + ' · 3 600 000 J = ' + N(J) + ' J', 'm = ' + N(J) + ' J : (9,81 m/s² · ' + N(h) + ' m)', 'm = ' + ex(m, 'kg', 0)],
          antwort: 'Man braucht etwa ' + N(Math.round(m)) + ' kg Wasser, also etwa ' + N(+(m / 1000).toFixed(1)) + ' m³.', wert: m, einheit: 'kg', dec: 0, falsch: [E / (g * h), m * 10] };
      } },
    { id: 'pump-eta', r: 'speichern', n: 'stern', titel: 'Speicher mit Verlusten', gen: function () {
        var c = pick([['Ein Pumpspeicherkraftwerk', rnd(70, 80)], ['Ein Batteriespeicher', rnd(85, 92)], ['Ein Wasserstoffspeicher', rnd(30, 40)]]);
        var nutz = rnd(4, 20, 2), eta = c[1], zu = nutz / (eta / 100);
        return { text: c[0] + ' hat einen Wirkungsgrad von ' + N(eta) + ' %. Man möchte ' + N(nutz) + ' kWh zurückbekommen. Wie viel Energie muss man hineinstecken?',
          gegeben: 'η = ' + N(eta) + ' % = ' + N(eta / 100) + '; E_nutz = ' + N(nutz) + ' kWh', gesucht: 'E_zu in kWh', formel: 'E_zu = E_nutz : η',
          rechnung: ['E_zu = ' + N(nutz) + ' kWh : ' + N(eta / 100), 'E_zu = ' + ex(zu, 'kWh', 1)],
          antwort: 'Man muss etwa ' + N(+zu.toFixed(1)) + ' kWh hineinstecken.', wert: zu, einheit: 'kWh', dec: 1, falsch: [nutz * eta / 100, nutz + eta / 10] };
      } },
    /* ---------- Umrechnen (Einheiten) */
    { id: 'u-joule', r: 'umrechnen', n: 'basis', titel: 'J, kJ und MJ umrechnen', gen: function () {
        var c = pick([['J', 'kJ', rnd(1200, 98000, 100), 1 / 1000], ['kJ', 'J', rnd(1.2, 95, 0.1), 1000], ['kJ', 'MJ', rnd(1500, 90000, 500), 1 / 1000], ['MJ', 'kJ', rnd(1.5, 40, 0.5), 1000]]);
        var x = c[2], y = x * c[3], mal = c[3] > 1;
        return { text: 'Rechne ' + N(x) + ' ' + c[0] + ' in ' + c[1] + ' um.', gegeben: N(x) + ' ' + c[0], gesucht: 'Wert in ' + c[1], formel: '1 kJ = 1000 J;  1 MJ = 1000 kJ',
          rechnung: [N(x) + ' ' + c[0] + (mal ? ' · 1000' : ' : 1000') + ' = <b>' + N(y) + ' ' + c[1] + '</b>'],
          antwort: N(x) + ' ' + c[0] + ' sind ' + N(y) + ' ' + c[1] + '.', wert: y, einheit: c[1], dec: 3, falsch: [mal ? x / 1000 : x * 1000, mal ? x * 100 : x / 100] };
      } },
    { id: 'u-kwh', r: 'umrechnen', n: 'basis', titel: 'Wh und kWh umrechnen', gen: function () {
        var c = pick([['Wh', 'kWh', rnd(150, 9500, 50), 1 / 1000], ['kWh', 'Wh', rnd(0.2, 9.5, 0.1), 1000]]);
        var x = c[2], y = x * c[3], mal = c[3] > 1;
        return { text: 'Rechne ' + N(x) + ' ' + c[0] + ' in ' + c[1] + ' um.', gegeben: N(x) + ' ' + c[0], gesucht: 'Wert in ' + c[1], formel: '1 kWh = 1000 Wh',
          rechnung: [N(x) + ' ' + c[0] + (mal ? ' · 1000' : ' : 1000') + ' = <b>' + N(y) + ' ' + c[1] + '</b>'],
          antwort: N(x) + ' ' + c[0] + ' sind ' + N(y) + ' ' + c[1] + '.', wert: y, einheit: c[1], dec: 3, falsch: [mal ? x / 1000 : x * 1000, mal ? x * 100 : x / 100] };
      } },
    { id: 'u-watt', r: 'umrechnen', n: 'basis', titel: 'W und kW umrechnen', gen: function () {
        var c = pick([['W', 'kW', pick([60, 150, 450, 800, 1200, 1800, 2000, 2400, 3500]), 1 / 1000], ['kW', 'W', pick([0.5, 1.2, 1.8, 2.2, 3.5, 7.5]), 1000]]);
        var x = c[2], y = x * c[3], mal = c[3] > 1;
        return { text: 'Ein Gerät hat die Leistung ' + N(x) + ' ' + c[0] + '. Wie viel ' + c[1] + ' sind das?', gegeben: 'P = ' + N(x) + ' ' + c[0], gesucht: 'P in ' + c[1], formel: '1 kW = 1000 W',
          rechnung: ['P = ' + N(x) + ' ' + c[0] + (mal ? ' · 1000' : ' : 1000') + ' = <b>' + N(y) + ' ' + c[1] + '</b>'],
          antwort: 'Das sind ' + N(y) + ' ' + c[1] + '.', wert: y, einheit: c[1], dec: 3, falsch: [mal ? x / 1000 : x * 1000, mal ? x * 100 : x / 100] };
      } },
    { id: 'u-zeit', r: 'umrechnen', n: 'basis', titel: 'Minuten in Stunden', gen: function () {
        var min = pick([6, 12, 15, 20, 30, 45, 75, 90, 105, 150]), h = min / 60;
        return { text: 'Ein Föhn läuft ' + N(min) + ' Minuten. Für E = P · t brauchst du die Zeit in Stunden. Wie viele Stunden sind das?', gegeben: 't = ' + N(min) + ' min', gesucht: 't in h', formel: '1 h = 60 min, also: Minuten : 60',
          rechnung: ['t = ' + N(min) + ' min : 60 = ' + ex(h, 'h', 2)],
          antwort: N(min) + ' Minuten sind ' + N(+h.toFixed(2)) + ' h.', wert: h, einheit: 'h', dec: 2, falsch: [min / 100, min * 60] };
      } },
    { id: 'u-prozent', r: 'umrechnen', n: 'basis', titel: 'Prozent und Dezimalzahl', gen: function () {
        var p = pick([5, 12, 25, 35, 40, 85, 90, 95]), toDec = Math.random() < 0.5;
        return toDec
          ? { text: 'Ein Wirkungsgrad von ' + N(p) + ' % soll als Dezimalzahl geschrieben werden. Wie lautet sie?', gegeben: 'η = ' + N(p) + ' %', gesucht: 'η als Dezimalzahl', formel: 'Prozent : 100 = Dezimalzahl',
              rechnung: ['η = ' + N(p) + ' : 100 = <b>' + N(p / 100) + '</b>'], antwort: N(p) + ' % sind ' + N(p / 100) + '.', wert: p / 100, einheit: '', dec: 2, falsch: [p / 10, p / 1000] }
          : { text: 'Ein Wirkungsgrad beträgt ' + N(p / 100) + '. Wie viel Prozent sind das?', gegeben: 'η = ' + N(p / 100), gesucht: 'η in %', formel: 'Dezimalzahl · 100 = Prozent',
              rechnung: ['η = ' + N(p / 100) + ' · 100 = <b>' + N(p) + ' %</b>'], antwort: N(p / 100) + ' sind ' + N(p) + ' %.', wert: p, einheit: '%', dec: 1, falsch: [p / 10, p * 10] };
      } },
    { id: 'u-kmh', r: 'umrechnen', n: 'basis', titel: 'km/h und m/s umrechnen', gen: function () {
        var toMs = Math.random() < 0.6, v = toMs ? pick([18, 36, 50, 54, 72, 90, 108, 130]) : pick([5, 10, 15, 20, 25, 30]);
        var y = toMs ? v / 3.6 : v * 3.6;
        return { text: (toMs ? 'Ein Auto fährt ' + N(v) + ' km/h. Für E_kin brauchst du v in m/s. Wie viel m/s sind das?' : 'Ein Fahrrad fährt ' + N(v) + ' m/s. Wie viel km/h sind das?'),
          gegeben: 'v = ' + N(v) + (toMs ? ' km/h' : ' m/s'), gesucht: 'v in ' + (toMs ? 'm/s' : 'km/h'), formel: 'km/h : 3,6 = m/s;  m/s · 3,6 = km/h',
          rechnung: ['v = ' + N(v) + (toMs ? ' km/h : 3,6 = ' + ex(y, 'm/s', 1) : ' m/s · 3,6 = ' + ex(y, 'km/h', 1))],
          antwort: N(v) + (toMs ? ' km/h sind etwa ' : ' m/s sind etwa ') + N(+y.toFixed(1)) + (toMs ? ' m/s.' : ' km/h.'), wert: y, einheit: toMs ? 'm/s' : 'km/h', dec: 1, falsch: [toMs ? v * 3.6 : v / 3.6, toMs ? v / 60 : v * 60] };
      } },
    { id: 'u-masse', r: 'umrechnen', n: 'basis', titel: 'g und kg umrechnen', gen: function () {
        var c = pick([['g', 'kg', pick([50, 250, 450, 600, 750, 1200, 2500]), 1 / 1000], ['kg', 'g', pick([0.2, 0.45, 0.8, 1.5, 2.25]), 1000]]);
        var x = c[2], y = x * c[3], mal = c[3] > 1;
        return { text: 'Rechne ' + N(x) + ' ' + c[0] + ' in ' + c[1] + ' um. (Für E_pot und E_kin brauchst du die Masse in kg.)', gegeben: 'm = ' + N(x) + ' ' + c[0], gesucht: 'm in ' + c[1], formel: '1 kg = 1000 g',
          rechnung: ['m = ' + N(x) + ' ' + c[0] + (mal ? ' · 1000' : ' : 1000') + ' = <b>' + N(y) + ' ' + c[1] + '</b>'],
          antwort: N(x) + ' ' + c[0] + ' sind ' + N(y) + ' ' + c[1] + '.', wert: y, einheit: c[1], dec: 3, falsch: [mal ? x / 1000 : x * 1000, mal ? x * 100 : x / 100] };
      } },
    { id: 'u-kwh-j', r: 'umrechnen', n: 'stern', titel: 'kWh und Joule', gen: function () {
        var toMJ = Math.random() < 0.5, x = toMJ ? pick([0.5, 1, 2, 2.5, 5, 10, 25]) : pick([1.8, 3.6, 7.2, 18, 36, 90]);
        var y = toMJ ? x * 3.6 : x / 3.6;
        return { text: toMJ ? 'Ein Akku speichert ' + N(x) + ' kWh. Wie viele MJ (Megajoule) sind das?' : 'Ein Pumpspeicher gibt ' + N(x) + ' MJ Energie ab. Wie viele kWh sind das?',
          gegeben: 'E = ' + N(x) + (toMJ ? ' kWh' : ' MJ'), gesucht: 'E in ' + (toMJ ? 'MJ' : 'kWh'), formel: '1 kWh = 1000 W · 3600 s = 3 600 000 J = 3,6 MJ',
          rechnung: ['E = ' + N(x) + (toMJ ? ' kWh · 3,6 = ' + ex(y, 'MJ', 2) : ' MJ : 3,6 = ' + ex(y, 'kWh', 2))],
          antwort: N(x) + (toMJ ? ' kWh sind ' : ' MJ sind ') + N(+y.toFixed(2)) + (toMJ ? ' MJ.' : ' kWh.'), wert: y, einheit: toMJ ? 'MJ' : 'kWh', dec: 2, falsch: [toMJ ? x / 3.6 : x * 3.6, toMJ ? x * 3600 : x / 1000] };
      } }
  ];
})();
