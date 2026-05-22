---
title: "S/4HANA-Rollout und Betriebsrat: Warum §87 BetrVG über Ihren Go-Live entscheidet"
meta_title: "S/4HANA & Betriebsrat: Was §87 BetrVG beim Rollout verlangt"
meta_description: "S/4HANA-Rollouts scheitern oft an der Mitbestimmung. Was §87 BetrVG fordert, wann der Betriebsrat zwingend an Bord muss – plus 10-Punkte-Checkliste."
slug: "s4hana-rollout-betriebsrat"
type: "pillar"
status: "draft"
keywords:
  - "Betriebsrat SAP Einführung"
  - "BetrVG §87 ERP"
  - "S/4HANA Mitbestimmung"
internal_links:
  - "/s4hana.html"
  - "/datenschutz.html"
---

# S/4HANA-Rollout und Betriebsrat: Warum §87 BetrVG über Ihren Go-Live entscheidet

Ein S/4HANA-Programm wird als IT- und Prozessprojekt geplant: Scope, Architektur, Datenmigration, Cutover. Die Mitbestimmung des Betriebsrats taucht im Projektplan – wenn überhaupt – als Zeile gegen Ende auf. Genau hier entsteht das Risiko, das den teuersten Effekt hat: Ein technisch fertiges System darf nicht produktiv gehen, weil die rechtlich erforderliche Beteiligung fehlt.

Für CIOs und Transformation Leads ist das keine juristische Randnotiz, sondern ein harter Termin- und Budgetfaktor. Dieser Artikel ordnet ein, was das Betriebsverfassungsgesetz (BetrVG) bei der Einführung von SAP S/4HANA konkret verlangt, wann der Betriebsrat zwingend eingebunden werden muss und wie Sie die Mitbestimmung als planbaren Projektschritt führen – statt als Eskalation kurz vor dem Go-Live.

## 1 · Warum §87 BetrVG bei S/4HANA-Rollouts systematisch unterschätzt wird

Die Fehlannahme ist immer dieselbe: „Wir führen ein ERP-System ein, keine Überwachungssoftware." Das BetrVG kennt diese Unterscheidung nicht. Maßgeblich ist nicht die Absicht, sondern die **Eignung** eines Systems, Verhalten oder Leistung von Beschäftigten zu erfassen.

S/4HANA erfüllt dieses Kriterium praktisch flächendeckend. Jede Transaktion ist einem Benutzer zugeordnet, Änderungsbelege protokollieren Wer-Wann-Was, Berichtswesen und eingebettete Analytik machen individuelle Bearbeitungszeiten, Mengen und Fehlerquoten sichtbar. Ob Sie diese Daten auswerten *wollen*, ist irrelevant – die technische Eignung genügt, um die Mitbestimmung auszulösen.

Hinzu kommt: S/4HANA verändert Arbeitsabläufe, Rollen- und Berechtigungskonzepte und damit die betriebliche Ordnung. Auch das ist mitbestimmungsrelevant. Ein S/4HANA-Rollout berührt deshalb nicht *einen* Mitbestimmungstatbestand, sondern mehrere gleichzeitig. Wer das erst im Cutover-Fenster bemerkt, verhandelt unter maximalem Zeitdruck – mit einem Gremium, das genau dann den größten Hebel hat.

## 2 · Was §87 Abs. 1 BetrVG konkret verlangt

§87 Abs. 1 BetrVG gibt dem Betriebsrat ein **erzwingbares** Mitbestimmungsrecht – kein bloßes Anhörungsrecht. Ohne Einigung entscheidet die Einigungsstelle. Drei Tatbestände sind bei S/4HANA zentral:

**Nr. 6 – Technische Überwachungseinrichtungen.** Der wichtigste Hebel. Mitbestimmungspflichtig ist die Einführung und Anwendung technischer Einrichtungen, die dazu *bestimmt oder geeignet* sind, Verhalten oder Leistung der Beschäftigten zu überwachen. SAP-Logging, Änderungsbelege, Workflow-Status, Reporting und Embedded Analytics fallen darunter. In der Praxis wird das über eine **Betriebsvereinbarung** (häufig eine IT-Rahmen-Betriebsvereinbarung plus systemspezifische Anlage) geregelt, die Zweckbindung, Auswertungsgrenzen, Aufbewahrung und Zugriffsrechte festlegt.

**Nr. 1 – Ordnung des Betriebs und Verhalten der Arbeitnehmer.** S/4HANA schreibt vor, *wie* gearbeitet wird: Pflichtfelder, Freigabe-Workflows, Sperren, Vier-Augen-Prinzipien. Wo das System Verhaltensregeln erzwingt, ist die Ordnung des Betriebs betroffen.

**Nr. 7 – Gesundheitsschutz.** Unterschätzt, aber relevant: Bildschirmarbeit, Ergonomie und vor allem psychische Belastung durch verdichtete Prozesse, Taktung und Leistungstransparenz. Spätestens seit der Pflicht zur Gefährdungsbeurteilung psychischer Belastung ist Nr. 7 ein realer Prüfpunkt – gerade in der Hochlastphase nach dem Go-Live.

Flankierend gelten **§ 90 BetrVG** (rechtzeitige Unterrichtung und Beratung schon bei der *Planung* technischer Anlagen und Arbeitsverfahren) und – sobald Beschäftigte qualitativ befragt werden – **§ 94 BetrVG** (Zustimmungsrecht bei Fragebögen). §90 ist der Grund, warum die Beteiligung nicht erst bei „Realize", sondern bereits im Blueprint beginnt.

## 3 · Typische Stolperfallen bei SAP-Rollouts

- **Mitbestimmung als Cutover-Aufgabe behandeln.** Eine Betriebsvereinbarung verhandelt sich nicht in zwei Wochen. Realistisch sind Wochen bis Monate – abhängig von Gremiengröße, Sachverstand und Konfliktlage.
- **„Greenfield = grüne Wiese" auch rechtlich denken.** Technisch mag der Brownfield-Altbestand verschwinden, die Mitbestimmungstatbestände bleiben. Greenfield erhöht eher den Beratungsbedarf nach §90, weil Prozesse neu geschnitten werden.
- **Standard-Reporting übersehen.** Teams gehen davon aus, „wir bauen ja keine Auswertungen". Embedded Analytics und Fiori-Apps liefern Leistungssichten ab Werk – die Eignung zur Überwachung besteht trotzdem.
- **Berechtigungs- und Rollenkonzept ohne BR-Blick.** Wer auf welche personenbezogenen Auswertungen zugreifen darf, ist Verhandlungsgegenstand – nicht nur eine Security-Frage.
- **Externe Berater als Datenzugang.** Zugriff externer Dienstleister auf produktive, personenbeziehbare Daten ist regelmäßig zustimmungs- und dokumentationspflichtig.
- **Den Betriebsrat informieren statt beteiligen.** §87 ist Mitbestimmung, nicht Information. Eine Präsentation „zur Kenntnis" heilt nichts.

## 4 · Wann der Betriebsrat zwingend an Bord muss – die Timeline

Mappen Sie die Beteiligung auf Ihre Projektphasen (hier am Beispiel SAP Activate), dann wird aus einem Risiko ein Termin:

| Phase | Mitbestimmungs-Schritt | Rechtsgrundlage |
|---|---|---|
| **Prepare / Explore** (Blueprint) | Rechtzeitige Unterrichtung & Beratung über Planung, Prozesse, Systemarchitektur. Mitbestimmungspflichtige Aspekte identifizieren. | §90 |
| **Explore → Realize** | Verhandlung der Betriebsvereinbarung: Logging, Auswertungen, Zweckbindung, Aufbewahrung, Zugriffe. Fragebögen/Interviews freigeben. | §87 Abs. 1 Nr. 6, §94 |
| **Realize** | Rollen-/Berechtigungskonzept und Reporting-Sichten abstimmen; Gesundheitsschutz-Aspekte (Nr. 7) bewerten. | §87 Abs. 1 Nr. 1 & 7 |
| **Vor Deploy / Cutover** | **Betriebsvereinbarung unterschrieben.** Ohne sie kein rechtssicherer Produktivstart der überwachungsgeeigneten Funktionen. | §87 Abs. 1 Nr. 6 |
| **Run** | Laufende Anpassungen (neue Reports, Module) erneut prüfen. | §87 |

Die Kernaussage: Der späteste belastbare Termin für die unterschriebene Betriebsvereinbarung ist **vor dem produktiven Go-Live** – und rückwärts geplant heißt das, die Verhandlung im „Realize" zu starten, nicht danach.

> **Wissen Sie, wo Ihr Rollout bei der Mitbestimmung wirklich steht?**
> Der kostenlose [S/4HANA-Readiness-Check](/s4hana.html) prüft in 5 Minuten auch die Betriebsrat- und Compliance-Dimension – und zeigt, wo nachzusteuern ist, bevor der Cutover-Termin sie einholt.
> → [S/4HANA-Readiness-Check starten](/s4hana.html)

## 5 · Was passiert, wenn man es vergisst

Mitbestimmung ist keine Formalie, deren Verletzung nur ein Bußgeldrisiko trägt. Die Folgen treffen direkt den Zeitplan:

- **Produktivstart-Stopp.** Maßnahmen, die ohne erforderliche Mitbestimmung umgesetzt werden, sind nach der Theorie der Wirksamkeitsvoraussetzung unwirksam. Der Betriebsrat kann die Nutzung überwachungsgeeigneter Funktionen untersagen lassen – im schlimmsten Fall steht ein technisch fertiges System.
- **Einigungsstelle.** Kommt keine Einigung zustande, entscheidet die Einigungsstelle. Das kostet Wochen und externe Beisitzer – und Sie geben Kontrolle über das Ergebnis ab.
- **Verwertungsverbot.** Daten aus einem ohne Mitbestimmung eingeführten System sind in arbeitsrechtlichen Auseinandersetzungen regelmäßig nicht verwertbar.
- **Verhandeln unter Zeitdruck.** Wer im Cutover-Fenster verhandelt, zahlt drauf – inhaltlich wie terminlich. Der Betriebsrat hat dann den maximalen Hebel.

In der Praxis sieht man wiederkehrende Muster (ohne Namen): Ein Reporting-Modul, dessen Aktivierung verschoben werden muss, weil die Auswertungsgrenzen ungeklärt sind. Eine Migration, die fertig ist, deren Leistungs-Dashboards aber nicht freigeschaltet werden dürfen. Ein Programm, das vier Wochen vor Go-Live in die Einigungsstelle rutscht, weil §90 nie sauber bedient wurde. Keiner dieser Fälle scheitert an der Technik.

## 6 · Checkliste: 10 Punkte für saubere Mitbestimmung

1. **Mitbestimmung im Projektplan verankern** – mit eigenem Workstream, Verantwortlichem und Terminen, rückwärts vom Go-Live geplant.
2. **§90-Unterrichtung früh dokumentieren** – Beratung im Blueprint, nicht nachträglich.
3. **Überwachungsgeeignete Funktionen inventarisieren** – Logging, Änderungsbelege, Reporting, Embedded Analytics, Fiori-Apps.
4. **Betriebsvereinbarung früh aufsetzen** – Zweckbindung, Auswertungsgrenzen, Aufbewahrungsfristen, Zugriffsrechte.
5. **Rollen-/Berechtigungskonzept gemeinsam abstimmen** – wer sieht welche personenbeziehbaren Sichten.
6. **Externen Datenzugang regeln** – Berater- und Dienstleisterzugriffe transparent und zustimmungsfähig machen.
7. **§94 für Befragungen klären** – Fragebögen und Interviews vorab freigeben lassen, inkl. Anonymisierungskonzept.
8. **Gesundheitsschutz (Nr. 7) mitdenken** – psychische Belastung in der Hochlastphase bewerten.
9. **Anonymität technisch nachweisen** – Mindestgruppengrößen, keine Einzelrückschlüsse, dokumentiert für das Gremium.
10. **Einen klaren Eskalationspfad definieren** – inkl. realistischem Puffer vor der Einigungsstelle.

Diese zehn Punkte sind kein Ersatz für die individuelle rechtliche Prüfung Ihres Falls – aber sie verhindern, dass die Mitbestimmung zum unkalkulierten Restrisiko wird. Wie die Compliance-Architektur dahinter aussieht, lesen Sie auf unserer [Compliance- und Datenschutz-Seite](/datenschutz.html).

## 7 · Wie Insivo BetrVG-Konformität von Tag 1 mitbringt

Insivo führt qualitative Interviews mit Projektbeteiligten durch, um die menschliche Seite eines S/4HANA-Rollouts messbar zu machen – Adoption-Risiken, Wissensträger-Lücken, Readiness. Genau dieser Schritt berührt §94, und Insivo ist dafür von Grund auf gebaut:

- **Anonymität by Design:** Zugriff über UUID-Token statt Klarnamen, maschinelle Entfernung personenbezogener Angaben, Auswertungen erst ab k-Anonymität ≥ 5. Einzelrückschlüsse sind ausgeschlossen – auch für den Auftraggeber.
- **Dokumentation für den Betriebsrat als Standard:** Anonymisierungskonzept, Mindestgruppengröße und Zweckbindung liegen dem Gremium vor, sodass die Freigabe Tage statt Wochen dauert.
- **Keine individuelle Leistungssicht:** Insivo erzeugt aggregierte Diagnostik, keine personenbezogene Bewertung – der Tatbestand der Überwachung wird strukturell vermieden.
- **EU-Hosting und EU-KI-Verarbeitung:** Daten verbleiben in der EU, kein Transfer in Drittländer; ausgelegt auf die Anforderungen an Hochrisiko-KI nach dem EU AI Act.

Damit wird der Betriebsrat vom Risiko zum Freigabeschritt – vorausgesetzt, er sitzt früh am Tisch. Wie der gesamte Ablauf bei einem Pilot aussieht, zeigt die [S/4HANA-Seite](/s4hana.html).

## 8 · Fazit

Ein S/4HANA-Rollout scheitert selten an der Migration. Er scheitert daran, dass die Organisation nicht mitzieht – und ein unterschätzter Teil davon ist die Mitbestimmung. §87 BetrVG ist kein Hindernis, sondern ein planbarer Projektschritt: Wer die Beteiligung rückwärts vom Go-Live terminiert, im Blueprint mit §90 beginnt und die Betriebsvereinbarung vor dem Cutover unterschrieben hat, nimmt sich das größte vermeidbare Terminrisiko aus dem Programm.

Behandeln Sie den Betriebsrat als Freigabeinstanz, nicht als Bedrohung – mit sauberer Dokumentation, nachweisbarer Anonymität und einer Diagnose, die zeigt, wo Sie wirklich stehen.

*Hinweis: Dieser Beitrag fasst die betriebsverfassungsrechtliche Praxis zusammen und ersetzt keine Rechtsberatung im Einzelfall.*

> **Sehen Sie in 5 Minuten, wie BetrVG-fest Ihr Rollout ist.**
> Der kostenlose [S/4HANA-Readiness-Check](/s4hana.html) liefert einen Risk-Score über Adoption, Key-User-Last, Datenqualität und Mitbestimmung – mit konkreten nächsten Schritten.
> → [Kostenlosen S/4HANA-Readiness-Check starten](/s4hana.html)

---

## Featured-Image-Konzepte

1. **„Gantt trifft Paragraf":** Eine reduzierte S/4HANA-Projekt-Timeline (Prepare→Run) in Insivo-Indigo, über der an der Cutover-Markierung ein §-Symbol als Meilenstein sitzt. Botschaft: Mitbestimmung ist ein Termin, kein Zufall.
2. **„Zwei Seiten der Migration":** Split-Screen – links saubere Systemarchitektur/Datenflüsse, rechts ein Organigramm/Menschen-Layer. Eine dünne Linie (§87) verbindet beide. Botschaft: Technik migriert, Organisation muss mit.
3. **„Ampel-Checkliste":** Abstrahierte Readiness-Karte mit Dimensionen (Adoption, Key-User, Daten, **Mitbestimmung**) in Rot/Gelb/Grün, „Mitbestimmung" visuell hervorgehoben. Botschaft: Compliance ist eine messbare Readiness-Dimension.
