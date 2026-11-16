/* Übungen in den Themenbereichen – Energie (Physik 9/10). Alle Texte, Zahlen und Abbildungen selbst erstellt.
   Typen: zuordnen · sortieren · quiz · luecke · schaetzen
   grafik (bei sortieren) = Umwandlungskette, die nach richtigem Sortieren erscheint; nurEin: true = nur im Niveau Einstieg.
   ohneMarke: true = Fragetexte nicht hervorheben (wenn die Hervorhebung die Antwort verraten würde).
   zuordnen mit modus: 'stapel' = eine Karte nach der anderen, Rückmeldung sofort (sonst alle Karten auf einmal).
   n = 'basis' | 'stern' | 'beide' (Übung);  bei Fragen/Elementen: stern: true = nur „Basis + ★“, ein: true = auch im Einstieg
   Schreibweise: E_pot -> tiefgestellt, √{…} -> Wurzel. */
window.UEBUNGEN = [

  // ======================= Energieformen & Umwandlung =======================
  { id: 'energieformen', r: 'formen', typ: 'zuordnen', modus: 'stapel', n: 'basis', ein: true, titel: 'Energieformen zuordnen',
    intro: 'In welcher Energieform steckt die Energie vor allem? Ordne jedes Beispiel der passenden Energieform zu.',
    kategorien: ['Lageenergie', 'Bewegungsenergie', 'Spannenergie', 'chemische Energie', 'elektrische Energie', 'Strahlungsenergie', 'thermische Energie'],
    elemente: [
      { t: 'Wasser in einem hoch gelegenen Stausee', k: 0, ein: true, b: 'stausee', e: 'Das Wasser liegt hoch oben. Energie, die in der Höhe steckt, ist Lageenergie.' },
      { t: 'ein Radfahrer, der schnell fährt', k: 1, ein: true, b: 'radfahrer', e: 'Der Radfahrer bewegt sich schnell. Darin steckt Bewegungsenergie.',
        k2: 3, e2: 'Auch richtig: In seinen Muskeln steckt chemische Energie aus der Nahrung. Weil er gerade schnell fährt, steckt die Energie aber vor allem in der Bewegung.' },
      { t: 'die gespannte Feder in einem Kugelschreiber', k: 2, b: 'feder', e: 'Die Feder ist zusammengedrückt, also gespannt. Darin steckt Spannenergie.' },
      { t: 'ein Butterbrot in der Brotdose', k: 3, ein: true, b: 'butterbrot', e: 'Nahrung enthält chemische Energie. Unser Körper kann sie nutzen.' },
      { t: 'eine geladene Batterie im Schrank', k: 3, b: 'batterie', e: 'In der Batterie ist die Energie chemisch gespeichert. Erst beim Benutzen wird daraus elektrische Energie.' },
      { t: 'Sonnenlicht, das auf ein Dach fällt', k: 5, ein: true, b: 'sonnedach', e: 'Licht ist Strahlungsenergie.' },
      { t: 'eine Tasse heißer Tee', k: 6, ein: true, b: 'tee', e: 'Der Tee ist heiß. Darin steckt thermische Energie.' },
      { t: 'Strom im Ladekabel des Handys', k: 4, b: 'ladekabel', e: 'Durch das Kabel fließt elektrischer Strom. Er transportiert elektrische Energie.' },
      { t: 'ein Apfel, der oben am Baum hängt', k: 0, b: 'apfelbaum', e: 'Der Apfel hängt hoch oben und kann herunterfallen. Darin steckt Lageenergie.',
        k2: 3, e2: 'Auch richtig: Im Apfel steckt als Nahrung chemische Energie. Hier geht es aber vor allem um die Höhe am Baum.' },
      { t: 'ein gedehntes Gummiband', k: 2, b: 'gummiband', e: 'Das Gummiband ist gedehnt, also gespannt. Darin steckt Spannenergie.' },
      { t: 'ein rollender Fußball', k: 1, ein: true, b: 'fussball', e: 'Der Ball rollt, er bewegt sich also. Darin steckt Bewegungsenergie.' },
      { t: 'Holz, das neben dem Kamin liegt', k: 3, b: 'holz', e: 'Holz ist ein Brennstoff. Darin steckt chemische Energie. Erst beim Verbrennen wird daraus thermische Energie.' }
    ] },

  { id: 'umwandlungsketten', r: 'formen', typ: 'sortieren', n: 'beide', titel: 'Umwandlungsketten sortieren',
    intro: 'Bringe die Schritte jeder Kette in die richtige Reihenfolge.',
    ketten: [
      { titel: 'Wasserkraftwerk', grafik: ['LE', 'Lageenergie (Wasser oben)', [['Turbine', 'BE', ''], ['Generator', 'EE', ''], ['Lampe', 'StE', 'Strahlungsenergie (Licht)']]], schritte: [
        'Das Wasser im Stausee hat Lageenergie.',
        'Das Wasser strömt nach unten: Lageenergie wird zu Bewegungsenergie.',
        'Das strömende Wasser dreht die Turbine.',
        'Der Generator wandelt Bewegungsenergie in elektrische Energie um.',
        'Eine Lampe wandelt elektrische Energie in Strahlungsenergie (Licht) und thermische Energie um.'] },
      { titel: 'Fahrrad mit Dynamo', grafik: ['CE', 'chemische Energie (Nahrung)', [['Muskeln', 'BE', ''], ['Dynamo', 'EE', ''], ['Fahrradlicht', 'StE', 'Strahlungsenergie (Licht)']]], schritte: [
        'In der Nahrung steckt chemische Energie.',
        'Die Muskeln treten die Pedale: Das Rad bekommt Bewegungsenergie.',
        'Der Dynamo wandelt Bewegungsenergie in elektrische Energie um.',
        'Das Fahrradlicht gibt Strahlungsenergie ab.'] },
      { titel: '★ Vom Sonnenlicht zum Kohlestrom', stern: true, grafik: ['StE', 'Strahlungsenergie (Sonne)', [['Pflanzen', 'CE', 'chemische Energie (Kohle)'], ['Kessel', 'TE', 'thermische Energie (Dampf)'], ['Turbine und\nGenerator', 'EE', '']]], schritte: [
        'Die Sonne strahlt Strahlungsenergie ab.',
        'Pflanzen speichern die Energie als chemische Energie.',
        'Über Millionen Jahre entsteht aus den Pflanzen Kohle.',
        'Im Kraftwerk verbrennt die Kohle: chemische Energie wird zu thermischer Energie.',
        'Turbine und Generator wandeln die thermische Energie in elektrische Energie um.'] },
      /* nur im Niveau Einstieg: kurze Ketten mit Bild */
      { titel: 'Taschenlampe', ein: true, nurEin: true, grafik: ['CE', 'chemische Energie (Batterie)', [['Batterie', 'EE', ''], ['Lampe', 'StE', 'Strahlungsenergie (Licht)']]], schritte: [
        { t: 'Die Batterie hat chemische Energie.', b: 'batterie' },
        { t: 'Im Kabel fließt elektrische Energie.', b: 'ladekabel' },
        { t: 'Die Lampe leuchtet: Strahlungsenergie.', b: 'lampe' }] },
      { titel: 'Fahrrad', ein: true, nurEin: true, grafik: ['CE', 'chemische Energie (Brot)', [['Muskeln', 'BE', ''], ['Dynamo', 'EE', '']]], schritte: [
        { t: 'Ich esse ein Brot: chemische Energie.', b: 'butterbrot' },
        { t: 'Ich trete in die Pedale: Bewegungsenergie.', b: 'radfahrer' },
        { t: 'Der Dynamo liefert elektrische Energie für das Licht.', b: 'dynamo' }] },
      { titel: 'Wasserkraftwerk', ein: true, nurEin: true, grafik: ['LE', 'Lageenergie (Wasser oben)', [['Turbine', 'BE', ''], ['Generator', 'EE', '']]], schritte: [
        { t: 'Das Wasser ist oben im Stausee: Lageenergie.', b: 'stausee' },
        { t: 'Das Wasser fließt nach unten: Bewegungsenergie.', b: 'wasserfall' },
        { t: 'Der Generator liefert elektrische Energie.', b: 'generator' }] }
    ] },

  { id: 'alltag-physik', r: 'formen', typ: 'quiz', ohneMarke: true, n: 'basis', ein: true, titel: 'Alltag oder Physik?',
    intro: 'Ist der Satz physikalisch richtig oder Alltagssprache? Lies danach die Erklärung.',
    fragen: [
      { f: '„Mein Handy-Akku ist leer, die Energie ist weg.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 1, ein: true,
        e: 'Die Energie ist nicht weg. Sie wurde in Licht, Schall und thermische Energie umgewandelt.' },
      { f: '„Ein Föhn wandelt elektrische Energie in thermische Energie und Bewegungsenergie um.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 0, ein: true,
        e: 'Richtig: Die Heizdrähte werden heiß, der Motor bewegt die Luft.' },
      { f: '„Solarzellen erzeugen Energie aus dem Nichts.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 1, ein: true,
        e: 'Energie entsteht nie aus dem Nichts. Solarzellen wandeln Strahlungsenergie in elektrische Energie um.' },
      { f: '„Beim Bremsen wird Bewegungsenergie in thermische Energie umgewandelt.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 0, ein: true,
        e: 'Richtig: Die Bremsen und Reifen werden warm.' },
      { f: '„Der Kühlschrank verbraucht Strom.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 1, ein: true,
        e: 'Physikalisch: Der Kühlschrank wandelt elektrische Energie um. Am Ende wird sie zu thermischer Energie in der Küche.' },
      { f: '„Energie misst man in Joule.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 0,
        e: 'Richtig: Die Einheit der Energie ist das Joule (J).' },
      { f: '„Heute bin ich total energielos.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 1,
        e: 'Gemeint ist: Ich bin müde. Ein Mensch hat immer Energie, zum Beispiel thermische und chemische Energie.' },
      { f: '„Bei jeder Umwandlung bleibt die Gesamtenergie erhalten.“', o: ['physikalisch richtig', 'Alltagssprache'], r: 0,
        e: 'Richtig: Das ist der Energieerhaltungssatz.' }
    ] },

  { id: 'flussdiagramm', r: 'formen', typ: 'quiz', n: 'beide', titel: 'Energieflussdiagramm ergänzen',
    intro: 'Schau dir das Energieflussdiagramm an. Welcher Wert gehört an das Fragezeichen?',
    fragen: [
      { dia: { w: 'LED-Lampe', zu: ['elektrische Energie', 100], raus: [['Licht', 40], ['thermische Energie', '?']] },
        f: 'Eine LED-Lampe bekommt 100 J. Wie viel Joule werden zu thermischer Energie?', o: ['40 J', '60 J', '100 J', '140 J'], r: 1, ein: true,
        e: 'Die Summe bleibt gleich: 100 J − 40 J = 60 J.' },
      { dia: { w: 'Elektromotor', zu: ['elektrische Energie', 1000], raus: [['Bewegungsenergie', 850], ['thermische Energie', '?']] },
        f: 'Ein Elektromotor bekommt 1000 J. Wie viel Joule werden zu thermischer Energie?', o: ['150 J', '850 J', '1850 J', '15 J'], r: 0, ein: true,
        e: '1000 J − 850 J = 150 J. Diese Energie erwärmt den Motor.' },
      { dia: { w: 'Glühlampe', zu: ['elektrische Energie', 100], raus: [['Licht', 5], ['thermische Energie', 95]] },
        f: 'Welcher Pfeil ist bei der Glühlampe am breitesten?', o: ['der Pfeil für Licht', 'der Pfeil für thermische Energie', 'beide sind gleich breit'], r: 1,
        e: 'Die Breite zeigt die Energiemenge. 95 J werden zu thermischer Energie, nur 5 J zu Licht.' },
      { dia: { w: 'Auto (Benzinmotor)', zu: ['chemische Energie', '100 %'], raus: [['Bewegungsenergie', '25 %'], ['thermische Energie', '?']] },
        f: 'Ein Benzinmotor wandelt nur 25 % der chemischen Energie in Bewegungsenergie um. Wie viel Prozent werden zu thermischer Energie?', o: ['25 %', '50 %', '75 %', '125 %'], r: 2, stern: true,
        e: '100 % − 25 % = 75 %. Der größte Teil der Energie erwärmt Motor, Abgas und Umgebung.' },
      { dia: { w: 'Wasserkocher', zu: ['elektrische Energie', 200000], raus: [['thermische Energie im Wasser', 180000], ['thermische Energie der Umgebung', '?']] },
        f: 'Ein Wasserkocher bekommt 200 000 J. 180 000 J erwärmen das Wasser. Wie viel Energie geht an die Umgebung?', o: ['2000 J', '20 000 J', '180 000 J', '380 000 J'], r: 1, stern: true,
        e: '200 000 J − 180 000 J = 20 000 J. Das ist ein Zehntel der zugeführten Energie.' }
    ] },

  // ======================= Energie berechnen =======================
  { id: 'energieerhaltung', r: 'berechnen', typ: 'luecke', n: 'basis', ein: true, titel: 'Lückentext Energieerhaltung',
    intro: 'Eine Schaukel schwingt hin und her. Wähle für jede Lücke das passende Wort aus dem Wortspeicher.',
    text: 'Am höchsten Punkt hat die Schaukel die meiste {Lageenergie}. Beim Herunterschwingen wird diese in {Bewegungsenergie} umgewandelt. Am tiefsten Punkt ist die Schaukel am {schnellsten}. Durch Reibung wird ein Teil der Energie zu {thermischer Energie}. Deshalb schwingt die Schaukel jedes Mal etwas {weniger} hoch. Die Gesamtenergie bleibt aber {erhalten}.',
    extra: ['langsamsten', 'höher', 'verloren', 'elektrischer Energie'] },

  { id: 'crashtest', r: 'berechnen', typ: 'schaetzen', n: 'stern', titel: 'Crashtest-Schätzung',
    intro: 'Ein Radfahrer prallt mit 25 km/h gegen eine Wand. Aus welcher Höhe müsste er fallen, um genauso schnell aufzuschlagen? Schätze zuerst, dann rechne.',
    schritte: [
      { l: 'Deine Schätzung: Aus welcher Höhe?', u: 'm', frei: true },
      { l: 'Rechne die Geschwindigkeit in m/s um (25 km/h : 3,6).', u: 'm/s', w: 25 / 3.6, tol: 0.02, tipp: '25 : 3,6' },
      { l: 'Unten gilt E_kin = E_pot. Daraus folgt h = v² : (2 · g). Berechne h.', u: 'm', w: Math.pow(25 / 3.6, 2) / (2 * 9.81), tol: 0.03, tipp: 'h = (6,94 m/s)² : (2 · 9,81 m/s²)' }
    ],
    loesung: ['v = 25 km/h : 3,6 ≈ 6,94 m/s', 'h = v² : (2 · g) = (6,94 m/s)² : (2 · 9,81 m/s²) ≈ 2,46 m',
      'Antwort: Der Aufprall entspricht einem Sturz aus etwa 2,5 m Höhe – so hoch wie ein Garagendach. Die Masse spielt keine Rolle, sie kürzt sich weg.'] },

  // ======================= Stromkosten & Leistung =======================
  { id: 'energielabel', r: 'strom', typ: 'quiz', n: 'basis', ein: true, titel: 'Energielabel lesen',
    intro: 'Zwei Kühlschränke im Vergleich. Die Werte stehen auf dem Energielabel. Strompreis: 0,37 € pro kWh.',
    label: [ { name: 'Kühlschrank A', klasse: 'B', kwh: 120 }, { name: 'Kühlschrank B', klasse: 'E', kwh: 230 } ],
    fragen: [
      { f: 'Welcher Kühlschrank braucht weniger elektrische Energie?', o: ['Kühlschrank A', 'Kühlschrank B'], r: 0, ein: true,
        e: 'Kühlschrank A braucht 120 kWh im Jahr, Kühlschrank B 230 kWh.' },
      { f: 'Was bedeutet die Angabe „120 kWh/Jahr“?', o: ['die Leistung des Geräts', 'die elektrische Energie, die das Gerät in einem Jahr braucht', 'die Kosten pro Jahr'], r: 1, ein: true,
        e: 'Kilowattstunden geben eine Energiemenge an. Hier: Energie pro Jahr.' },
      { f: 'Wie viele kWh spart Kühlschrank A pro Jahr gegenüber B?', o: ['110 kWh', '120 kWh', '230 kWh', '350 kWh'], r: 0, ein: true,
        e: '230 kWh − 120 kWh = 110 kWh.' },
      { f: 'Wie viel Geld spart Kühlschrank A pro Jahr?', o: ['4,07 €', '40,70 €', '44,40 €', '110,00 €'], r: 1,
        e: '110 kWh · 0,37 €/kWh = 40,70 €.' },
      { f: 'Ein Kühlschrank hält etwa 10 Jahre. Wie viel spart A in dieser Zeit?', o: ['40,70 €', '110 €', '407 €', '4070 €'], r: 2, stern: true,
        e: '40,70 € · 10 = 407 €. Ein teureres, sparsames Gerät kann sich deshalb lohnen.' },
      { f: 'Welche Effizienzklassen hat das aktuelle EU-Energielabel?', o: ['A+++ bis D', 'A bis G', '1 bis 10'], r: 1,
        e: 'Seit 2021 gilt die Skala A (sehr sparsam) bis G.' }
    ] },

  { id: 'zocken', r: 'strom', typ: 'schaetzen', n: 'beide', titel: 'Ein Jahr Zocken',
    intro: 'Was kostet ein Jahr Zocken mit Konsole und Fernseher? Schätze die Werte für dich selbst. Die Seite rechnet mit deinen Annahmen.',
    schritte: [
      { id: 'pk', l: 'Leistung der Konsole beim Spielen', u: 'W', frei: true, hinweis: 'typisch 150 bis 250 W' },
      { id: 'pf', l: 'Leistung des Fernsehers', u: 'W', frei: true, hinweis: 'typisch 80 bis 150 W' },
      { id: 'h', l: 'Spielzeit pro Tag (Durchschnitt über die Woche)', u: 'h', frei: true, hinweis: 'ehrlich schätzen' },
      { id: 'tage', l: 'Tage pro Jahr', u: 'Tage', frei: true, hinweis: '365' }
    ],
    rechnung: 'zocken',
    loesung: ['Beispiel: (200 W + 100 W) = 0,3 kW · 2 h · 365 = 219 kWh', 'Kosten: 219 kWh · 0,37 €/kWh ≈ 81 € pro Jahr',
      '★ CO₂: 219 kWh · 0,34 kg/kWh ≈ 74 kg CO₂ pro Jahr (Emissionsfaktor des deutschen Strommix, Schätzwert)',
      'Je nach Annahmen sind 50 € bis 150 € plausibel. Entscheidend ist, dass du deine Annahmen begründen kannst.'] },

  // ======================= Wirkungsgrad & Kraftwerk =======================
  { id: 'kraftwerk-kette', r: 'wirkung', typ: 'sortieren', n: 'basis', ein: true, titel: 'Kraftwerk-Kette',
    intro: 'So kommt die Energie aus der Kohle in die Steckdose. Bringe die Schritte in die richtige Reihenfolge.',
    ketten: [
      { titel: 'Kohlekraftwerk', schritte: [
        'Im Kessel verbrennt Kohle: chemische Energie wird zu thermischer Energie.',
        'Wasser verdampft. Der heiße Dampf steht unter hohem Druck.',
        'Der Dampf strömt durch die Turbine und dreht sie: Bewegungsenergie.',
        'Der Generator wandelt die Bewegungsenergie in elektrische Energie um.',
        'Über Leitungen gelangt die elektrische Energie zur Steckdose.'] },
      { titel: 'Was passiert mit dem Rest?', schritte: [
        'Der Dampf hat die Turbine verlassen und ist noch warm.',
        'Im Kühlturm oder mit Flusswasser wird er abgekühlt.',
        'Die thermische Energie geht als Abwärme an die Umgebung.'] }
    ] },

  { id: 'gluehlampe-led', r: 'wirkung', typ: 'quiz', n: 'basis', titel: 'Glühlampe oder LED?',
    intro: 'Eine Glühlampe hat einen Wirkungsgrad von etwa 5 %, eine LED-Lampe von etwa 40 %. Strompreis: 0,37 € pro kWh.',
    fragen: [
      { f: 'Eine Glühlampe bekommt 60 J elektrische Energie. Wie viel davon wird zu Licht?', o: ['3 J', '6 J', '30 J', '57 J'], r: 0, ein: true,
        e: '5 % von 60 J: 0,05 · 60 J = 3 J.' },
      { f: 'Warum wird eine Glühlampe beim Leuchten heiß?', o: ['Weil sie Licht speichert.', 'Weil der größte Teil der Energie zu thermischer Energie wird.', 'Weil Glas Wärme erzeugt.'], r: 1, ein: true,
        e: 'Etwa 95 % der elektrischen Energie werden zu thermischer Energie.' },
      { f: 'Eine LED-Lampe bekommt 10 J. Wie viel wird zu Licht?', o: ['0,4 J', '4 J', '6 J', '40 J'], r: 1,
        e: '40 % von 10 J: 0,4 · 10 J = 4 J.' },
      { f: 'Glühlampe (60 W) und gleich helle LED-Lampe (8 W) leuchten je 1000 Stunden. Wie viel Energie spart die LED?', o: ['8 kWh', '52 kWh', '60 kWh', '52 000 kWh'], r: 1,
        e: 'Glühlampe: 0,06 kW · 1000 h = 60 kWh. LED: 0,008 kW · 1000 h = 8 kWh. Ersparnis: 52 kWh.' },
      { f: 'Wie viel Geld spart die LED in diesen 1000 Stunden?', o: ['1,92 €', '19,24 €', '22,20 €', '52,00 €'], r: 1,
        e: '52 kWh · 0,37 €/kWh = 19,24 €.' },
      { f: 'Welche Lampe hat den höheren Wirkungsgrad?', o: ['Glühlampe', 'LED-Lampe', 'beide gleich'], r: 1,
        e: 'Die LED wandelt einen viel größeren Anteil in Licht um.' }
    ] },

  // ======================= Klima & Erneuerbare =======================
  { id: 'treibhauseffekt', r: 'klima', typ: 'luecke', n: 'basis', ein: true, titel: 'Treibhauseffekt erklären',
    intro: 'Ergänze den Text mit Wörtern aus dem Wortspeicher.',
    text: 'Die Sonne schickt {Strahlungsenergie} zur Erde. Der Erdboden {erwärmt} sich und gibt {Wärmestrahlung} ab. {Treibhausgase} wie Kohlenstoffdioxid halten einen Teil dieser Strahlung in der {Atmosphäre} zurück. Ohne diesen natürlichen Treibhauseffekt wäre es auf der Erde im Mittel etwa {−18 °C} kalt. Beim Verbrennen von Kohle, Öl und Gas gelangt mehr {Kohlenstoffdioxid} in die Luft. Dadurch wird der Treibhauseffekt {verstärkt}.',
    extra: ['Sauerstoff', 'abgeschwächt', '+30 °C', 'kühlt'] },

  { id: 'erneuerbare', r: 'klima', typ: 'zuordnen', n: 'basis', ein: true, titel: 'Erneuerbare zuordnen',
    intro: 'Welche Technik passt zur Beschreibung? Ordne jede Karte der passenden Technik zu.',
    kategorien: ['Windkraftanlage', 'Photovoltaik', 'Solarthermie', 'Wasserkraftwerk', 'Biogasanlage', 'Wärmepumpe'],
    elemente: [
      { t: 'wandelt die Bewegungsenergie der Luft in elektrische Energie um', k: 0, ein: true },
      { t: 'wandelt Strahlungsenergie direkt in elektrische Energie um, ohne bewegte Teile', k: 1, ein: true },
      { t: 'erwärmt mit Sonnenlicht Wasser zum Duschen', k: 2, ein: true },
      { t: 'nutzt die Lageenergie von aufgestautem Wasser', k: 3, ein: true },
      { t: 'verbrennt Gas aus vergorenen Pflanzen und Gülle', k: 4, ein: true },
      { t: 'holt mit elektrischer Energie thermische Energie aus der Außenluft ins Haus', k: 5 },
      { t: 'liefert nur Strom, wenn der Wind weht', k: 0 },
      { t: 'liefert nachts keinen Strom', k: 1 },
      { t: 'kann auch bei Windstille und nachts Strom und Wärme liefern', k: 4 }
    ] },

  { id: 'faktencheck', r: 'klima', typ: 'quiz', n: 'beide', titel: 'Faktencheck',
    intro: 'Ist eine Quelle glaubwürdig? Prüfe: Wer schreibt? Welche Belege gibt es? Wie aktuell ist sie? Welche Absicht steckt dahinter?',
    fragen: [
      { f: 'Welche Quelle ist für Messwerte zur Erderwärmung am glaubwürdigsten?', o: ['ein Post ohne Namen in einem sozialen Netzwerk', 'die Werbung eines Heizungsherstellers', 'ein Bericht des Deutschen Wetterdienstes', 'ein Kommentar unter einem Video'], r: 2, ein: true,
        e: 'Der Deutsche Wetterdienst misst selbst, nennt seine Daten und hat keine Verkaufsabsicht.' },
      { f: 'Ein Beitrag nennt den Anteil der erneuerbaren Energien am deutschen Strom. Er ist von 2009. Was solltest du prüfen?', o: ['die Schriftgröße', 'ob es neuere Zahlen gibt', 'ob der Beitrag Bilder hat'], r: 1, ein: true,
        e: 'Der Anteil hat sich seitdem stark verändert. Prüfe immer, wie aktuell eine Zahl ist.' },
      { f: '„Kohlenstoffdioxid ist harmlos, Pflanzen brauchen es doch.“ Was ist das Problem an dieser Aussage?', o: ['Sie ist komplett erfunden.', 'Sie ist nur halb richtig: Pflanzen brauchen CO₂, aber mehr CO₂ verstärkt den Treibhauseffekt.', 'Es gibt kein Problem.'], r: 1,
        e: 'Eine richtige Teilaussage wird genutzt, um von der wichtigen Folge abzulenken.' },
      { f: 'Woran erkennst du, dass ein Text vor allem etwas verkaufen will?', o: ['Er nennt Messwerte mit Quelle.', 'Er wirbt mit Rabatten und lobt nur ein Produkt.', 'Er ist in einer Fachzeitschrift erschienen.'], r: 1,
        e: 'Werbung zeigt nur Vorteile eines Produkts. Das ist keine neutrale Information.' },
      { f: 'Eine Grafik zeigt nur drei besonders kalte Winter. Warum ist sie kein Beleg gegen den Klimawandel?', o: ['Weil Winter immer kalt sind.', 'Weil Klima der Durchschnitt über viele Jahre ist und einzelne Jahre ausgewählt wurden.', 'Weil Grafiken nie stimmen.'], r: 1, stern: true,
        e: 'Wetter ist der Zustand an einzelnen Tagen. Klima beschreibt den Mittelwert über mindestens 30 Jahre. Ausgewählte Einzelwerte verzerren das Bild.' },
      { f: 'Zwei Quellen widersprechen sich. Was ist ein sinnvoller nächster Schritt?', o: ['die Quelle mit mehr Likes nehmen', 'eine dritte, unabhängige Quelle suchen und die Belege vergleichen', 'beide ignorieren'], r: 1, stern: true,
        e: 'Unabhängige Quellen und nachprüfbare Belege helfen bei der Entscheidung.' }
    ] },

  // ======================= Speichern =======================
  { id: 'speicher', r: 'speichern', typ: 'zuordnen', n: 'basis', ein: true, titel: 'Speicher vergleichen',
    intro: 'In welcher Energieform speichert der Speicher die Energie? Ordne jede Karte der passenden Energieform zu.',
    kategorien: ['chemische Energie', 'Lageenergie', 'thermische Energie', 'Spannenergie'],
    elemente: [
      { t: 'Akku eines Handys', k: 0, ein: true },
      { t: 'Pumpspeicherkraftwerk (Wasser im oberen Becken)', k: 1, ein: true },
      { t: 'Tank mit Wasserstoff', k: 0, ein: true },
      { t: 'Warmwasserspeicher im Keller', k: 2, ein: true },
      { t: 'Batterie in einer Taschenlampe', k: 0 },
      { t: 'großer Heißwassertank für die Fernwärme', k: 2 },
      { t: 'aufgezogenes Spielzeugauto mit Feder', k: 3, ein: true },
      { t: 'Stausee in den Bergen', k: 1 }
    ] },

  { id: 'quiz-speicher', r: 'speichern', typ: 'quiz', n: 'beide', titel: 'Quiz Speicher',
    intro: 'Fragen zu Akku, Pumpspeicher und Wasserstoff.',
    fragen: [
      { f: 'Warum brauchen wir mehr Energiespeicher, wenn wir mehr Wind- und Solarstrom nutzen?', o: ['Weil Wind und Sonne nicht immer dann Energie liefern, wenn sie gebraucht wird.', 'Weil Windstrom schlechter ist.', 'Weil Kohle knapp wird.'], r: 0, ein: true,
        e: 'Die Erzeugung schwankt mit Wetter und Tageszeit. Speicher gleichen das aus.' },
      { f: 'Was passiert bei der Elektrolyse?', o: ['Wasserstoff wird verbrannt.', 'Wasser wird mit elektrischer Energie in Wasserstoff und Sauerstoff zerlegt.', 'Ein Akku wird geladen.'], r: 1, ein: true,
        e: 'So kann überschüssiger Strom als chemische Energie im Wasserstoff gespeichert werden.' },
      { f: 'Beim Laden wird ein Akku warm. Was bedeutet das?', o: ['Er speichert besonders viel.', 'Ein Teil der elektrischen Energie wird zu thermischer Energie und ist entwertet.', 'Der Akku ist kaputt.'], r: 1,
        e: 'Kein Speicher hat einen Wirkungsgrad von 100 %.' },
      { f: 'Ein Pumpspeicher gibt von 100 kWh nur 75 kWh zurück. Wie groß ist sein Wirkungsgrad?', o: ['25 %', '75 %', '133 %'], r: 1,
        e: 'η = 75 kWh : 100 kWh = 0,75 = 75 %.' },
      { f: 'Ein Speicher hat einen Wirkungsgrad von 80 %. Wie viel Energie muss man hineinstecken, um 8 kWh zurückzubekommen?', o: ['6,4 kWh', '8,8 kWh', '10 kWh', '16 kWh'], r: 2, stern: true,
        e: 'E_zu = E_nutz : η = 8 kWh : 0,8 = 10 kWh.' },
      { f: 'Ein Wasserstoffspeicher gibt nur etwa 30 bis 40 % der Energie zurück. Warum kann er trotzdem sinnvoll sein?', o: ['Er speichert große Mengen über Wochen und Monate.', 'Wasserstoff ist kostenlos.', 'Er hat gar keine Verluste.'], r: 0, stern: true,
        e: 'Akkus eignen sich für Stunden, Wasserstoff auch für lange Zeiträume und große Mengen.' }
    ] }
];
