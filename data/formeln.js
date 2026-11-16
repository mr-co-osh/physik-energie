/* Formelsammlung Energie (Physik 9/10)
   Schreibweise: E_pot -> E mit tiefgestelltem pot, √{…} -> Wurzel über den ganzen Ausdruck.
   Beispielrechnungen: gegeben – gesucht – Formel – Rechnung – Antwort (Reihenstandard). */
window.FORMELN = [
  { id: 'lageenergie', r: 'berechnen', n: 'basis', ds: '4, 5', titel: 'Lageenergie',
    formel: 'E_pot = m · g · h',
    legende: [['Lageenergie', 'E_pot', 'J (Joule)'], ['Masse', 'm', 'kg'], ['Ortsfaktor', 'g', '9,81 m/s² (= 9,81 N/kg)'], ['Höhe', 'h', 'm']],
    umstellen: [{ f: 'h = E_pot : (m · g)', n: 'stern' }, { f: 'm = E_pot : (g · h)', n: 'stern' }],
    beispiel: { aufgabe: 'Ein Schulrucksack (6 kg) wird in den 3. Stock getragen, 9 m höher. Wie viel Lageenergie hat er dort gewonnen?',
      gegeben: 'm = 6 kg; h = 9 m; g = 9,81 m/s²', gesucht: 'E_pot',
      rechnung: ['E_pot = m · g · h', 'E_pot = 6 kg · 9,81 m/s² · 9 m', 'E_pot = 529,74 J ≈ 530 J'],
      antwort: 'Der Rucksack hat etwa 530 J Lageenergie gewonnen.' },
    hinweis: 'Für die Lageenergie zählt der Höhenunterschied, nicht der Weg.' },

  { id: 'bewegungsenergie', r: 'berechnen', n: 'basis', ds: '4, 5', titel: 'Bewegungsenergie',
    formel: 'E_kin = ½ · m · v²',
    legende: [['Bewegungsenergie', 'E_kin', 'J (Joule)'], ['Masse', 'm', 'kg'], ['Geschwindigkeit', 'v', 'm/s']],
    umstellen: [{ f: 'v = √{2 · E_kin : m}', n: 'stern' }],
    beispiel: { aufgabe: 'Ein Radfahrer mit Fahrrad (zusammen 80 kg) fährt mit 5 m/s (18 km/h). Wie groß ist seine Bewegungsenergie?',
      gegeben: 'm = 80 kg; v = 5 m/s', gesucht: 'E_kin',
      rechnung: ['E_kin = ½ · m · v²', 'E_kin = ½ · 80 kg · (5 m/s)²', 'E_kin = ½ · 80 kg · 25 m²/s² = 1000 J = 1 kJ'],
      antwort: 'Der Radfahrer hat eine Bewegungsenergie von 1000 J.' },
    hinweis: 'Die Geschwindigkeit steht im Quadrat: Doppelt so schnell heißt viermal so viel Bewegungsenergie. Geschwindigkeit immer in m/s einsetzen.' },

  { id: 'energieerhaltung', r: 'berechnen', n: 'stern', ds: '5', titel: 'Energiebilanz (Energieerhaltung)',
    formel: 'E_pot (oben) = E_kin (unten)',
    legende: [['gilt ohne Reibung', '', ''], ['Lageenergie oben', 'E_pot', 'J'], ['Bewegungsenergie unten', 'E_kin', 'J']],
    umstellen: [{ f: 'v = √{2 · E_kin : m}', n: 'stern' }],
    beispiel: { aufgabe: 'Ein Achterbahnwagen (400 kg) rollt 20 m tief ins Tal. Wie schnell ist er unten?',
      gegeben: 'm = 400 kg; h = 20 m; g = 9,81 m/s²', gesucht: 'v (unten)',
      rechnung: ['E_pot = m · g · h = 400 kg · 9,81 m/s² · 20 m = 78 480 J', 'unten gilt: E_kin = E_pot = 78 480 J',
        'v = √{2 · E_kin : m} = √{2 · 78 480 J : 400 kg} = √{392,4 m²/s²} ≈ 19,8 m/s'],
      antwort: 'Der Wagen ist unten etwa 19,8 m/s schnell, das sind etwa 71 km/h.' },
    hinweis: 'Mit Reibung wird ein Teil der Energie zu thermischer Energie. Dann ist der Wagen unten langsamer.' },

  { id: 'energie-leistung', r: 'strom', n: 'basis', ds: '7', titel: 'Energie und Leistung',
    formel: 'E = P · t',
    legende: [['Energie', 'E', 'kWh (oder J)'], ['Leistung', 'P', 'kW (oder W)'], ['Zeit', 't', 'h (oder s)']],
    umstellen: [{ f: 'P = E : t', n: 'basis' }, { f: 't = E : P', n: 'basis' }],
    beispiel: { aufgabe: 'Eine Konsole (200 W) läuft 3 Stunden. Wie viel elektrische Energie braucht sie?',
      gegeben: 'P = 200 W = 0,2 kW; t = 3 h', gesucht: 'E',
      rechnung: ['E = P · t', 'E = 0,2 kW · 3 h', 'E = 0,6 kWh'],
      antwort: 'Die Konsole braucht 0,6 kWh elektrische Energie.' },
    hinweis: 'Für kWh: Leistung in kW und Zeit in h einsetzen. 1000 W = 1 kW.' },

  { id: 'stromkosten', r: 'strom', n: 'basis', ds: '7', titel: 'Stromkosten',
    formel: 'Kosten = E · Preis',
    legende: [['Energie', 'E', 'kWh'], ['Strompreis', 'Preis', '0,37 € pro kWh']],
    umstellen: [],
    beispiel: { aufgabe: 'Ein Kühlschrank braucht laut Energielabel 120 kWh im Jahr. Was kostet das?',
      gegeben: 'E = 120 kWh; Preis = 0,37 € pro kWh', gesucht: 'Kosten',
      rechnung: ['Kosten = E · Preis', 'Kosten = 120 kWh · 0,37 €/kWh', 'Kosten = 44,40 €'],
      antwort: 'Der Kühlschrank kostet im Jahr 44,40 € Strom.' },
    hinweis: 'Für ein ganzes Jahr: Energie pro Tag · 365.' },

  { id: 'wirkungsgrad', r: 'wirkung', n: 'basis', ds: '8, 10', titel: 'Wirkungsgrad',
    formel: 'η = E_nutz : E_zu',
    legende: [['Wirkungsgrad', 'η (eta)', 'ohne Einheit oder in %'], ['genutzte Energie', 'E_nutz', 'J oder kWh'], ['zugeführte Energie', 'E_zu', 'J oder kWh']],
    umstellen: [{ f: 'E_nutz = η · E_zu', n: 'stern' }, { f: 'E_zu = E_nutz : η', n: 'stern' }],
    beispiel: { aufgabe: 'Eine Glühlampe bekommt 100 J elektrische Energie und gibt davon 5 J als Licht ab. Wie groß ist ihr Wirkungsgrad?',
      gegeben: 'E_zu = 100 J; E_nutz = 5 J', gesucht: 'η',
      rechnung: ['η = E_nutz : E_zu', 'η = 5 J : 100 J', 'η = 0,05 = 5 %'],
      antwort: 'Die Glühlampe hat einen Wirkungsgrad von 5 %. Der Rest wird zu thermischer Energie.' },
    hinweis: 'Der Wirkungsgrad ist immer kleiner als 100 %. Nicht genutzte Energie = E_zu − E_nutz.' },

  { id: 'gesamtwirkungsgrad', r: 'wirkung', n: 'stern', ds: '10, 14', titel: 'Gesamtwirkungsgrad',
    formel: 'η_ges = η_1 · η_2',
    legende: [['Gesamtwirkungsgrad', 'η_ges', 'in %'], ['Wirkungsgrade der einzelnen Stufen', 'η_1, η_2', 'als Dezimalzahl']],
    umstellen: [],
    beispiel: { aufgabe: 'Ein Kraftwerk hat einen Wirkungsgrad von 40 %. Auf dem Weg zur Steckdose gehen in den Leitungen 5 % verloren (η = 95 %). Wie groß ist der Gesamtwirkungsgrad?',
      gegeben: 'η_1 = 0,40; η_2 = 0,95', gesucht: 'η_ges',
      rechnung: ['η_ges = η_1 · η_2', 'η_ges = 0,40 · 0,95', 'η_ges = 0,38 = 38 %'],
      antwort: 'Nur 38 % der Energie aus der Kohle kommen als elektrische Energie an der Steckdose an.' },
    hinweis: 'Jede Stufe einer Umwandlungskette verringert den Gesamtwirkungsgrad.' }
];

window.UMRECHNUNGEN = [
  ['1 kJ', '1000 J'], ['1 MJ', '1000 kJ = 1 000 000 J'], ['1 kW', '1000 W'], ['1 W', '1 J pro Sekunde'],
  ['1 kWh', '3 600 000 J = 3,6 MJ'], ['1 m/s', '3,6 km/h'], ['1 t', '1000 kg'], ['1 m³ Wasser', 'etwa 1000 kg'],
  ['1 h', '3600 s'], ['50 %', '0,5']
];
