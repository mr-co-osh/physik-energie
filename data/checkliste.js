/* Checklisten „Bin ich fit für die Lernkontrolle 1 / 2?“ – entsprechen PHY-ENE-09C_CHECKLISTE und PHY-ENE-15D_CHECKLISTE
   ab = Arbeitsblätter zum Wiederholen; links = Übungen auf dieser Seite */
window.CHECKLISTEN = {};
window.CHECKLISTEN.lk1 = {
  tab: 'Lernkontrolle 1 (DS 9)', training: 'test-training/kurztest.html',
  titel: 'Bin ich fit für die Lernkontrolle 1?',
  info: 'Die Lernkontrolle 1 findet in DS 9 statt (40 Minuten, Taschenrechner und Formelsammlung erlaubt). Sie prüft Phase 1 und 2: Energie verstehen, berechnen, messen und nutzen. Tippe ehrlich an, wie sicher du bist. Wo du „fast“ oder „noch nicht“ wählst, übst du mit den Links.',
  gruppen: [
    { titel: 'Basis', punkte: 24, n: 'basis', items: [
      { id: 'l1', t: 'erklären, warum Energie nicht verbraucht, sondern umgewandelt wird', ab: '01A, 03B', links: [['Alltag oder Physik?', 'uebung.html#alltag-physik'], ['Fachwort-Trainer', 'fachwort-trainer.html']] },
      { id: 'l2', t: 'Energieformen erkennen und mit Abkürzungen benennen (LE, BE, EE …)', ab: '01B', links: [['Energieformen zuordnen', 'uebung.html#energieformen'], ['Glossar: Energieformen', 'glossar.html#formen']] },
      { id: 'l3', t: 'eine Energieumwandlungskette zeichnen und nicht genutzte Energie ergänzen', ab: '01B, 02C', links: [['Umwandlungsketten sortieren', 'uebung.html#umwandlungsketten']] },
      { id: 'l4', t: 'ein Energieflussdiagramm mit Prozentwerten lesen', ab: '02C, 08A', links: [['Energieflussdiagramm ergänzen', 'uebung.html#flussdiagramm']] },
      { id: 'l5', t: 'mit dem Energieerhaltungssatz begründen, warum keine Maschine ewig läuft', ab: '02B, 03B, 03C', links: [['Lückentext Energieerhaltung', 'uebung.html#energieerhaltung'], ['Merkwürdige Maschine', 'sim/maschine.html']] },
      { id: 'l6', t: 'die Lageenergie berechnen', ab: '04A, 05A', links: [['Formel-Trainer', 'formel-trainer.html#berechnen'], ['Formel', 'formeln.html#lageenergie']] },
      { id: 'l7', t: 'mit E = P · t und dem Rechendreieck Energie, Leistung oder Zeit berechnen', ab: '07A', links: [['Formel-Trainer', 'formel-trainer.html#strom'], ['Rechendreieck', 'herleitung/rechendreieck.html']] },
      { id: 'l8', t: 'Stromkosten berechnen und zwei Geräte mit dem Energielabel vergleichen', ab: '07A, 07B', links: [['Energielabel lesen', 'uebung.html#energielabel'], ['Formel', 'formeln.html#stromkosten']] }
    ] },
    { titel: '★ Erweitertes Niveau', punkte: 6, n: 'stern', items: [
      { id: 'ls1', t: 'E_pot = m · g · h nach der Höhe h umstellen', ab: '04A ★', links: [['Formel-Trainer', 'formel-trainer.html#berechnen'], ['Formel', 'formeln.html#lageenergie']] },
      { id: 'ls2', t: 'die Geschwindigkeit nach einem Fall mit der Formelsammlung berechnen', ab: '04A, 05A ★', links: [['Formel-Trainer', 'formel-trainer.html#berechnen'], ['Formel', 'formeln.html#energieerhaltung']] }
    ] }
  ],
  tipps: [
    'Lies die Merkkästen auf 01A, 02C, 03B, 04A und 07A noch einmal.',
    'Rechne zu jeder Formel eine Aufgabe und nutze dabei die Formelsammlung – so findest du dich in der Arbeit schnell zurecht.',
    'Übe hier unter „Fit für die Lernkontrolle“ und im Formel-Trainer.'
  ]
};
window.CHECKLISTEN.lk2 = {
  tab: 'Lernkontrolle 2 (DS 15)', training: 'test-training/index.html',
  titel: 'Bin ich fit für die Lernkontrolle 2?',
  info: 'Die Lernkontrolle 2 findet in DS 15 statt (45 Minuten, Taschenrechner erlaubt). Sie prüft die ganze Reihe. Tippe ehrlich an, wie sicher du bist. Wo du „fast“ oder „noch nicht“ wählst, übst du mit den Links.',
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
    'Rechne die Beispielaufgaben unter „Fit für die Lernkontrolle“ und vergleiche mit den Lösungen.'
  ]
};
