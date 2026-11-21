/* Inhalte der Hauptseite: Reihe Energie (Physik 9/10)
   Typen: zuordnen · rechnen · quiz · schaetzen · sim · extern
   n: 'basis' | 'stern' | 'beide';  ein: true = auch im Modus „Einstieg“;  href leer = in Arbeit */
window.SITE = {
  prefix: 'phy-ene',
  fach: 'Physik 9/10', rahmen: 'Rahmenthema 3', titel: 'Energie',
  /* Fachbegriffe, die in Übungen und im Kraftwerke-Labor fett hervorgehoben werden (aus dem Glossar; Energieformen werden automatisch farbig) */
  begriffe: ['Energiewandler', 'Energieumwandlungskette', 'Energieumwandlung', 'Umwandlungskette', 'Energieflussdiagramm', 'Energietransport', 'Energieentwertung', 'Energieerhaltung',
    'Perpetuum mobile', 'Ortsfaktor', 'Energiebilanz', 'Leistung', 'Kilowattstunde', 'Stromkosten', 'Energiekostenmessgerät', 'Energielabel', 'Energieeffizienz', 'Wirkungsgrad',
    'Nutzenergie', 'Wärmekraftwerk', 'Kessel', 'Turbine', 'Generator', 'Kühlturm', 'Kraft-Wärme-Kopplung', 'Fernwärme', 'fossile Energieträger', 'Treibhauseffekt', 'Treibhausgas',
    'Kohlenstoffdioxid', 'Rückstrahlvermögen', 'Kippelement', 'Klimawandel', 'erneuerbare Energien', 'Windkraftanlage', 'Photovoltaik', 'Solarthermie', 'Biogas', 'Geothermie',
    'Wärmepumpe', 'Strommix', 'Energiespeicher', 'Akku', 'Pumpspeicherkraftwerk', 'Elektrolyse', 'Wasserstoff'],
  leitfrage: 'Wie kommt Energie in unsere Steckdose – und wie bekommen wir sie klimafreundlich dorthin?',
  phasen: [
    { n: 1, name: 'Energie verstehen', ds: 'DS 1–6', anzahl: 6 },
    { n: 2, name: 'Messen und nutzen', ds: 'DS 7–9', anzahl: 3 },
    { n: 3, name: 'Versorgung und Klima', ds: 'DS 10–13', anzahl: 4 },
    { n: 4, name: 'Speichern', ds: 'DS 14–15', anzahl: 2 }
  ],
  werkzeuge: [
    { id: 'glossar', titel: 'Glossar', text: 'Alle Fachwörter mit Erklärung und Beispielsatz', href: 'glossar.html' },
    { id: 'formeln', titel: 'Formelsammlung', text: 'Formeln, Einheiten und Beispielrechnungen', href: 'formeln.html' },
    { id: 'formeltrainer', titel: 'Formel-Trainer', text: 'Rechnen mit Zufallswerten und Lösungsweg', href: 'formel-trainer.html' },
    { id: 'fachwort', titel: 'Fachwort-Trainer', text: 'Vokabelkasten mit fünf Fächern', href: 'fachwort-trainer.html' },
    { id: 'checkliste', titel: 'Checkliste', text: 'Bin ich fit für Lernkontrolle 1 und 2?', href: 'checkliste.html' },
    { id: 'test', titel: 'Fit für die Lernkontrolle', text: 'Beispielaufgaben für Lernkontrolle 1 und 2', href: 'test-training/kurztest.html' }
  ],
  bereiche: [
    { id: 'formen', phase: 1, ds: 'DS 1–3', titel: 'Energieformen & Umwandlung',
      text: 'Energieformen erkennen, Umwandlungsketten und Energieflussdiagramme, Energieerhaltung',
      items: [
        { typ: 'zuordnen', titel: 'Energieformen zuordnen', kurz: 'Bilder und Energieformen', n: 'basis', ein: true, href: 'uebung.html#energieformen' },
        { typ: 'zuordnen', titel: 'Umwandlungsketten sortieren', kurz: 'Vom Wasserrad bis zur Pumpe', n: 'beide', href: 'uebung.html#umwandlungsketten' },
        { typ: 'quiz', titel: 'Alltag oder Physik?', kurz: 'Zehn Sätze prüfen', n: 'basis', ein: true, href: 'uebung.html#alltag-physik' },
        { typ: 'quiz', titel: 'Energieflussdiagramm ergänzen', kurz: 'Pfeile und Prozente', n: 'beide', href: 'uebung.html#flussdiagramm' }
      ] },
    { id: 'berechnen', phase: 1, ds: 'DS 4–6', titel: 'Energie berechnen',
      text: 'Lageenergie und Bewegungsenergie berechnen, Energiebilanzen aufstellen',
      items: [
        { typ: 'rechnen', titel: 'Rechentrainer E_pot und E_kin', kurz: 'Zufallswerte, mit Lösungsweg', n: 'beide', ein: true, href: 'formel-trainer.html#berechnen' },
        { typ: 'quiz', titel: 'Lückentext Energieerhaltung', kurz: 'mit Wortspeicher', n: 'basis', ein: true, href: 'uebung.html#energieerhaltung' },
        { typ: 'schaetzen', titel: 'Crashtest-Schätzung', kurz: 'Aus welchem Stockwerk?', n: 'stern', href: 'uebung.html#crashtest' },
        { typ: 'sim', titel: 'Achterbahn-Prüfstand', kurz: 'Code aus 05A', n: 'beide', href: 'sim/achterbahn.html', lock: true }
      ] },
    { id: 'strom', phase: 2, ds: 'DS 7–9', titel: 'Stromkosten & Leistung',
      text: 'Leistung, Kilowattstunde, Stromkosten und Energielabel',
      items: [
        { typ: 'rechnen', titel: 'Rechentrainer Stromkosten', kurz: 'E = P · t und Kosten', n: 'basis', ein: true, href: 'formel-trainer.html#strom' },
        { typ: 'quiz', titel: 'Energielabel lesen', kurz: 'Effizienzklassen vergleichen', n: 'basis', ein: true, href: 'uebung.html#energielabel' },
        { typ: 'schaetzen', titel: 'Ein Jahr Zocken', kurz: 'Fermi-Aufgabe', n: 'beide', href: 'uebung.html#zocken' },
        { typ: 'sim', titel: 'Stromkosten-Detektiv', kurz: 'Code aus 07A', n: 'basis', lock: true, href: 'sim/stromkosten-detektiv.html' },
        { typ: 'sim', titel: 'Geräte-Duell', kurz: 'Wiederholung „Stromkreise“', n: 'basis', open: true, href: 'sim/geraete-duell.html' }
      ] },
    { id: 'wirkung', phase: 3, ds: 'DS 8, 10', titel: 'Wirkungsgrad & Kraftwerk',
      text: 'Wirkungsgrad berechnen, Wärmekraftwerk, Kraft-Wärme-Kopplung',
      items: [
        { typ: 'rechnen', titel: 'Rechentrainer Wirkungsgrad', kurz: 'η = E_nutz : E_zu', n: 'beide', ein: true, href: 'formel-trainer.html#wirkung' },
        { typ: 'zuordnen', titel: 'Kraftwerk-Kette', kurz: 'Kessel, Turbine, Generator, Kühlturm', n: 'basis', ein: true, href: 'uebung.html#kraftwerk-kette' },
        { typ: 'quiz', titel: 'Glühlampe oder LED?', kurz: 'Wirkungsgrade vergleichen', n: 'basis', href: 'uebung.html#gluehlampe-led' },
        { typ: 'sim', titel: 'Kraftwerke-Labor', kurz: 'Kohle, Wind, Wasser, Sonne und mehr', n: 'beide', open: true, href: 'kraftwerke.html#kohle' }
      ] },
    { id: 'klima', phase: 3, ds: 'DS 10–13', titel: 'Klima & Erneuerbare',
      text: 'Treibhauseffekt, Rückstrahlvermögen, Kippelemente, erneuerbare Energien, Quellen prüfen',
      items: [
        { typ: 'quiz', titel: 'Treibhauseffekt erklären', kurz: 'Lückentext mit Wortspeicher', n: 'basis', ein: true, href: 'uebung.html#treibhauseffekt' },
        { typ: 'zuordnen', titel: 'Erneuerbare zuordnen', kurz: 'Technik und Energieumwandlung', n: 'basis', ein: true, href: 'uebung.html#erneuerbare' },
        { typ: 'quiz', titel: 'Faktencheck', kurz: 'Ist die Quelle glaubwürdig?', n: 'beide', href: 'uebung.html#faktencheck' },
        { typ: 'sim', titel: 'Kraftwerke-Labor: Erneuerbare', kurz: 'Energiefluss und Wirkungsgrad', n: 'beide', open: true, href: 'kraftwerke.html#wind' },
        { typ: 'extern', titel: 'Treibhauseffekt (PhET)', kurz: 'Simulation der Uni Colorado', n: 'basis', href: 'https://phet.colorado.edu/de/simulations/greenhouse-effect' },
        { typ: 'sim', titel: 'Strommix-Planer Bremen', kurz: 'Code aus 12A', n: 'beide', lock: true, href: 'sim/strommix.html' }
      ] },
    { id: 'speichern', phase: 4, ds: 'DS 14', titel: 'Speichern',
      text: 'Akku, Pumpspeicher, Wasserstoff – warum wir Energie speichern müssen',
      items: [
        { typ: 'zuordnen', titel: 'Speicher vergleichen', kurz: 'Was speichert welche Energieform?', n: 'basis', ein: true, href: 'uebung.html#speicher' },
        { typ: 'rechnen', titel: 'Rechentrainer Pumpspeicher', kurz: 'Wassermenge und Verluste', n: 'stern', href: 'formel-trainer.html#speichern' },
        { typ: 'sim', titel: 'Kraftwerke-Labor: Pumpspeicher', kurz: 'Speichern und Erzeugen', n: 'beide', open: true, href: 'kraftwerke.html#pumpspeicher' },
        { typ: 'sim', titel: 'Strommix-Planer: Speicher-Regler', kurz: 'Code aus 12A', n: 'beide', lock: true, href: 'sim/strommix.html' },
        { typ: 'quiz', titel: 'Quiz Speicher', kurz: 'Elektrolyse, Wasserstoff, Akku', n: 'beide', href: 'uebung.html#quiz-speicher' }
      ] }
  ]
};
