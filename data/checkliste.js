/* Checkliste „Bin ich fit für die Klassenarbeit Energie?“ – entspricht PHY-ENE-15D_CHECKLISTE
   ab = Arbeitsblätter zum Wiederholen; links = Übungen auf dieser Seite */
window.CHECKLISTEN = {};
window.CHECKLISTEN.kurztest = {
  tab: 'Kurztest (DS 9)', training: 'test-training/kurztest.html',
  titel: 'Bin ich fit für den Kurztest Energie?',
  info: 'Der Kurztest findet in DS 9 statt (etwa 25 Minuten, Taschenrechner erlaubt). Er prüft Energieformen, Energieflussdiagramme, Energieerhaltung, Lageenergie und Stromkosten. Tippe ehrlich an, wie sicher du bist, und übe mit den Links.',
  gruppen: [
    { titel: 'Basis', punkte: 12, n: 'basis', items: [
      { id: 't1', t: 'den physikalischen Energiebegriff von der Alltagssprache unterscheiden', ab: '01A', links: [['Fachwort-Trainer', 'fachwort-trainer.html'], ['Glossar', 'glossar.html#formen']] },
      { id: 't2', t: 'Energieformen und Energiewandler benennen', ab: '01A, 02B', links: [['Glossar: Energieformen', 'glossar.html#formen']] },
      { id: 't3', t: 'ein Energieflussdiagramm zeichnen und die nicht genutzte Energie ergänzen', ab: '02C', links: [['Test-Training Aufgabe 2', 'test-training/kurztest.html']] },
      { id: 't4', t: 'mit Energieerhaltung und Energieentwertung erklären, warum ein Ball nicht so hoch zurückspringt', ab: '03A', links: [['Glossar', 'glossar.html#formen']] },
      { id: 't5', t: 'die Lageenergie mit E_pot = m · g · h berechnen', ab: '04A, 05A', links: [['Formel-Trainer', 'formel-trainer.html#berechnen'], ['Formel', 'formeln.html#lageenergie']] },
      { id: 't6', t: 'Energie und Stromkosten mit E = P · t berechnen', ab: '07A', links: [['Formel-Trainer', 'formel-trainer.html#strom'], ['Formel', 'formeln.html#stromkosten']] }
    ] },
    { titel: '★ Erweitertes Niveau', punkte: 3, n: 'stern', items: [
      { id: 'ts1', t: 'die Geschwindigkeit aus einer Energiebilanz berechnen', ab: '05A', links: [['Formel-Trainer', 'formel-trainer.html#berechnen'], ['Formel', 'formeln.html#energieerhaltung']] }
    ] }
  ],
  tipps: [
    'Lies die Merkkästen auf 01A, 02C und 03A noch einmal.',
    'Zeichne ein Energieflussdiagramm (z. B. Föhn oder Fahrraddynamo) aus dem Gedächtnis.',
    'Übe im Formel-Trainer Lageenergie und Stromkosten, bis du dreimal hintereinander richtig liegst.',
    'Bearbeite die Beispielaufgaben im Test-Training und vergleiche mit den Lösungen.'
  ]
};
window.CHECKLISTEN.klassenarbeit = {
  tab: 'Klassenarbeit (DS 15)', training: 'test-training/index.html',
  titel: 'Bin ich fit für die Klassenarbeit Energie?',
  info: 'Die Klassenarbeit findet in DS 15 statt (45 Minuten, Taschenrechner erlaubt). Sie prüft die ganze Reihe. Tippe ehrlich an, wie sicher du bist. Wo du „fast“ oder „noch nicht“ wählst, übst du mit den Links.',
  gruppen: [
    { titel: 'Basis', punkte: 24, n: 'basis', items: [
      { id: 'k1', t: 'ein Energieflussdiagramm mit Prozentwerten zeichnen', ab: '02C, 08A', links: [['Glossar: Energieformen', 'glossar.html#formen']] },
      { id: 'k2', t: 'mit der Energieerhaltung erklären, wo „fehlende“ Energie bleibt', ab: '03A', links: [['Fachwort-Trainer', 'fachwort-trainer.html']] },
      { id: 'k3', t: 'die Umwandlungskette eines Kraftwerks mit Abkürzungen ergänzen', ab: '10A', links: [['Glossar: Kraftwerk', 'glossar.html#wirkung']] },
      { id: 'k4', t: 'den Wirkungsgrad eines Kraftwerks und die nicht genutzte Energie berechnen', ab: '10A', links: [['Formel-Trainer', 'formel-trainer.html#wirkung'], ['Formel', 'formeln.html#wirkungsgrad']] },
      { id: 'k5', t: 'den Strahlungshaushalt und den Treibhauseffekt beschreiben', ab: '10B', links: [['Glossar: Klima', 'glossar.html#klima']] },
      { id: 'k6', t: 'mit dem Rückstrahlvermögen erklären, warum dunkle Flächen wärmer werden', ab: '10B, 11A', links: [['Glossar: Klima', 'glossar.html#klima']] },
      { id: 'k7', t: 'erklären, was ein Kippelement ist (z. B. Grönland)', ab: '11A', links: [['Glossar: Klima', 'glossar.html#klima']] },
      { id: 'k8', t: 'Vorteile und Nachteile erneuerbarer Energien nennen', ab: '11B–11G, 12A', links: [['Glossar: Erneuerbare', 'glossar.html#klima']] },
      { id: 'k9', t: 'den Wirkungsgrad eines Speichers berechnen und sagen, warum wir Speicher brauchen', ab: '14A, 14B', links: [['Formel-Trainer', 'formel-trainer.html#speichern'], ['Glossar: Speichern', 'glossar.html#speichern']] }
    ] },
    { titel: '★ Erweitertes Niveau', punkte: 6, n: 'stern', items: [
      { id: 's1', t: 'die Lageenergie eines Pumpspeichers in kWh berechnen', ab: '04A, 14A', links: [['Formel-Trainer', 'formel-trainer.html#speichern'], ['Formel', 'formeln.html#lageenergie']] },
      { id: 's2', t: 'Aussagen über Energie auf Glaubwürdigkeit prüfen', ab: '09A, 11A', links: [['Glossar: Glaubwürdigkeit', 'glossar.html#klima']] }
    ] }
  ],
  tipps: [
    'Lies die Merkkästen auf 03A, 10A, 10B und 14A und die Steckbriefe (12A) noch einmal.',
    'Zeichne den Strahlungshaushalt aus dem Gedächtnis und vergleiche mit 10B.',
    'Übe im Formel-Trainer, bis du dreimal hintereinander richtig liegst.',
    'Rechne die Beispielaufgaben im Test-Training und vergleiche mit den Lösungen.'
  ]
};
