/* Kleine Piktogramme für Übungskarten (eigene Zeichnungen, 40 × 40).
   Linien in currentColor (passt sich hellem und dunklem Modus an), Flächen dezent.
   Farben verraten nicht die Lösung: keine Energieform-Farben als Hinweis. */
window.BILDER = {
  stausee: '<path d="M3 30 L14 12 L20 20 L26 10 L37 30 Z" fill="#B9C7B0" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M6 30 V24 H22 V30" fill="#9CC8EA" stroke="none"/><path d="M22 18 L28 18 L30 36 L20 36 Z" fill="#C9CED4" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M6 24 H22" stroke="currentColor" stroke-width="1.2"/><path d="M2 36 H38" stroke="currentColor" stroke-width="1.6"/>',
  radfahrer: '<circle cx="10" cy="28" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="30" cy="28" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '<path d="M10 28 L17 18 L27 18 L30 28 M17 18 L20 28 L27 18 M15 15 H19 M27 18 L26 13 H30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<path d="M1 14 H8 M3 19 H8 M1 24 H4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>',
  feder: '<rect x="15" y="2" width="10" height="36" rx="4" fill="#E8ECF0" stroke="currentColor" stroke-width="1.6"/>' +
    '<path d="M17 14 L23 16 L17 18 L23 20 L17 22 L23 24 L17 26 L23 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 30 V38" stroke="currentColor" stroke-width="1.6"/>',
  butterbrot: '<path d="M7 34 V16 C7 7 33 7 33 16 V34 Z" fill="#E9C98F" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M11 31 V18 C11 12 29 12 29 18 V31 Z" fill="#FFF3C9" stroke="none"/><circle cx="17" cy="21" r="1.4" fill="#C9A15A"/><circle cx="23" cy="25" r="1.4" fill="#C9A15A"/>',
  batterie: '<rect x="6" y="12" width="26" height="16" rx="2.5" fill="#E8ECF0" stroke="currentColor" stroke-width="1.8"/><rect x="32" y="16" width="3" height="8" rx="1" fill="currentColor"/>' +
    '<path d="M11 20 H16 M13.5 17.5 V22.5 M22 20 H27" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  sonnedach: '<circle cx="11" cy="11" r="5" fill="#FFD866" stroke="currentColor" stroke-width="1.4"/>' +
    '<path d="M11 2 V4 M2 11 H4 M4.6 4.6 L6 6 M17.4 4.6 L16 6 M4.6 17.4 L6 16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' +
    '<path d="M16 16 L23 24 M13 20 L19 28" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2"/>' +
    '<path d="M18 30 L29 19 L39 30 Z" fill="#C98B6B" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M21 30 V38 H37 V30" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  tee: '<path d="M8 18 H28 V28 C28 34 24 36 18 36 C12 36 8 34 8 28 Z" fill="#E8ECF0" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M28 21 C34 21 34 29 28 29" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 20 H26" stroke="#B5763C" stroke-width="2.5"/>' +
    '<path d="M13 14 C11 11 15 9 13 5 M18 14 C16 11 20 9 18 5 M23 14 C21 11 25 9 23 5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".7"/>',
  ladekabel: '<rect x="20" y="4" width="14" height="26" rx="2.5" fill="#E8ECF0" stroke="currentColor" stroke-width="1.6"/><rect x="22.5" y="7.5" width="9" height="17" rx="1" fill="#C9D6E2"/>' +
    '<path d="M27 30 V33 C27 37 20 37 14 34 C9 31 6 34 4 38" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="25" y="29" width="4" height="4" fill="currentColor"/>',
  apfelbaum: '<path d="M18 38 V24 M22 38 V24 M18 28 L13 24 M22 27 L27 23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' +
    '<circle cx="20" cy="14" r="12" fill="#B9D7A2" stroke="currentColor" stroke-width="1.6"/><circle cx="25" cy="10" r="3.6" fill="#E26B5B" stroke="currentColor" stroke-width="1.2"/>' +
    '<path d="M25 6.4 V5" stroke="currentColor" stroke-width="1.2"/><path d="M2 38 H38" stroke="currentColor" stroke-width="1.4"/>',
  gummiband: '<rect x="3" y="14" width="4" height="12" rx="1" fill="currentColor"/><rect x="33" y="14" width="4" height="12" rx="1" fill="currentColor"/>' +
    '<path d="M7 17 C16 15 24 15 33 17 M7 23 C16 25 24 25 33 23" fill="none" stroke="#C9A15A" stroke-width="2.4"/>' +
    '<path d="M12 9 H4 M28 9 H36 M4 9 L7 7 M4 9 L7 11 M36 9 L33 7 M36 9 L33 11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity=".7"/>',
  fussball: '<circle cx="22" cy="21" r="12" fill="#fff" stroke="currentColor" stroke-width="1.8"/><path d="M22 15 L27 18.5 L25 24.5 H19 L17 18.5 Z" fill="currentColor"/>' +
    '<path d="M22 15 V9.5 M27 18.5 L33 16.5 M25 24.5 L28.5 30 M19 24.5 L15.5 30 M17 18.5 L11 16.5" stroke="currentColor" stroke-width="1.2"/>' +
    '<path d="M2 14 H7 M1 20 H6 M2 26 H7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".6"/><path d="M4 36 H38" stroke="currentColor" stroke-width="1.4"/>',
  holz: '<path d="M6 30 L30 22 L33 30 L9 38 Z" fill="#C9935A" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="7.5" cy="34" rx="3.2" ry="4.2" fill="#E9C98F" stroke="currentColor" stroke-width="1.4"/>' +
    '<path d="M8 18 L32 10 L35 18 L11 26 Z" fill="#B57B45" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="9.5" cy="22" rx="3.2" ry="4.2" fill="#E9C98F" stroke="currentColor" stroke-width="1.4"/>'
};
