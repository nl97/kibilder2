import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <header className="w-full border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
            <p>
              Unsere Informationen zum Datenschutz erläutern den Umgang mit personenbezogenen Daten, 
              die sich aus dem Besuch dieser Website und der hier angebotenen Services ergeben (können).
              Weitergehende Informationen zu Verarbeitungstätigkeiten unseres Unternehmens (Relativity GmbH) 
              stellen wir Ihnen über unsere zentrale Website zur Verfügung{' '}
              <a href="https://www.mind-verse.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                (https://www.mind-verse.de/)
              </a>
            </p>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Name und Anschrift des Verantwortlichen</h2>
              <p>
                Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler 
                Datenschutzgesetze der Mitgliedsstaaten der EU sowie sonstiger datenschutzrechtlicher 
                Bestimmungen ist die:
              </p>
              <p className="mt-4">
                <strong>Relativity GmbH</strong><br />
                Breite Straße 25<br />
                13597 Berlin
              </p>
              <p className="mt-4">
                Vertreten durch ihren Geschäftsführer: Noel Lorenz<br />
                Kontakt: E-Mail:{' '}
                <a href="mailto:info@relativitygmbh.de" className="text-primary hover:underline">
                  info@relativitygmbh.de
                </a>
              </p>
              <p className="mt-4">
                Eintragung im Registergericht: Amtsgericht Berlin Charlottenburg unter HRB 215011
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt für Datenschutzanfragen</h2>
              <p>
                Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Datenschutzrechte wenden Sie sich
                bitte an die Relativity GmbH unter{' '}
                <a href="mailto:info@relativitygmbh.de" className="text-primary hover:underline">
                  info@relativitygmbh.de
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Ihre Rechte</h2>
              <p>
                Jeder Betroffene hat das Recht auf Auskunft nach Art. 15 DSGVO, das Recht auf Berichtigung 
                nach Art. 16 DSGVO, das Recht auf Löschung („Recht auf Vergessenwerden") nach Art. 17 DSGVO, 
                das Recht auf Einschränkung der Verarbeitung (Sperrung) nach Art. 18 DSGVO, das Recht auf 
                Widerspruch nach Art. 21 DSGVO sowie das Recht auf Datenübertragbarkeit aus Art. 20 DSGVO 
                sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen 
                haben. Beim Auskunftsrecht und beim Recht auf Löschung gelten die Einschränkungen nach §§ 34 
                und 35 BDSG. Letztlich haben Sie noch ein Beschwerderecht bei der Aufsichtsbehörde nach Art. 77 
                DSGVO in Verbindung mit § 19 BDSG.
              </p>
              <p className="mt-4">
                Soweit Sie uns eine Einwilligung in eine konkrete Verarbeitung Ihrer personenbezogenen Daten 
                erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Wann immer wir Ihre Daten 
                auf Basis eines berechtigten Interesses oder einer Interessenabwägung verarbeiten, können Sie 
                einer solchen Verarbeitung jederzeit für die Zukunft widersprechen.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-3">Unterschied zwischen Widerruf und Widerspruch</h3>
              <p>
                Der Widerruf ist auszusprechen, wenn eine Verarbeitung auf Basis einer Einwilligung erfolgt. 
                Dies ist immer dann der Fall, wenn Sie vor der Datenerfassung ausdrücklich gebeten worden, 
                Ihre Einwilligung zu erteilen (insb. Unterschrift oder Klick in Checkbox).
              </p>
              <p className="mt-4">
                Ein Widerspruch ist angezeigt, wenn eine Datenverarbeitung auf Basis einer Interessenabwägung 
                erfolgt. Hier mussten Sie nichts unterschreiben und gewöhnlich auch keine Zustimmung erteilen. 
                Die DSGVO verpflichtet jedoch jeden 'Datenverarbeiter', die Betroffenen über die Verarbeitung 
                zu informieren und hierbei auch die Rechtsgrundlage zu nennen; hierdurch sollten Sie wissen 
                (können), ob Sie der Datenverarbeitung formell mit einem Widerspruch begegnen können. Wir nutzen 
                im Übrigen insb. diese Datenschutzhinweise hier, um Sie über die Verarbeitungstätigkeiten zu 
                informieren, die wir auf Basis einer Interessenabwägung vornehmen.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-3">Muss ich den Unterschied zwischen Widerruf und Widerspruch kennen?</h3>
              <p>
                Wenn Ihnen eine Datenverarbeitung nicht behagt, dann wenden Sie sich bitte einfach an die im{' '}
                <a href="https://www.mind-verse.de/legals/impressum" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Impressum
                </a>{' '}
                genannten Kontaktadressen. Wir erläutern Ihnen dann gerne, ob die Verarbeitung gestoppt oder 
                zumindest eingeschränkt werden kann – hierzu muss von Ihnen nicht das Wort Widerruf oder 
                Widerspruch erwähnt werden.
              </p>
              <p className="mt-4">
                In einigen Fällen ist ein Stopp der Verarbeitung nicht möglich, weil ansonsten z.B. 
                Steuergesetze verletzt würden oder ein geschlossener Vertrag gar nicht mehr erfüllt werden 
                kann. Erfolgt die Verarbeitung auf Basis eines berechtigten Interesses, müssten Sie uns bitte 
                den Grund verraten, wieso die Verarbeitung unterbunden werden soll. Wir würden sodann erneut 
                Ihre und unsere Interessen sorgfältig gegeneinander abwägen und Ihnen das Ergebnis mitteilen.
              </p>
              <p className="mt-4">
                Sofern wir Sie vertrieblich ansprechen und Sie dies nicht wünschen, genügt im Übrigen ein 
                einfacher und klarer Hinweis für einen Stopp; eine Begründung ist in diesem Fall nicht 
                erforderlich.
              </p>
              <p className="mt-4">
                Sollten Sie trotz unserer Erläuterungen und Reaktionen den Eindruck haben, dass Ihnen Ihre 
                Datenschutzrechte vorenthalten werden, dann ist eine Beschwerde bei einer Datenschutz 
                Aufsichtsbehörde ein konsequenter nächster Schritt. Die DSGVO gibt Ihnen jederzeit das Recht, 
                sich an eine dieser Stellen zu wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Zuständige Aufsichtsbehörde</h2>
              <p>
                Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <p className="mt-4">
                <strong>Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
                Alt-Moabit 59-61<br />
                10555 Berlin<br />
                Tel.: +49 30 13889-0
              </p>
              <p className="mt-4">
                Eine Übersicht weiterer Aufsichtsbehörden wird vom BfDI (Der Bundesbeauftragte für den 
                Datenschutz und die Informationsfreiheit) bereitgestellt:{' '}
                <a 
                  href="https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Arten der Verarbeitung / Rechtsgrundlagen</h2>
              <p>
                Nach den Vorgaben der DSGVO sind alle Verarbeitungstätigkeiten einer sogenannten 
                Rechtsgrundlage aus dem Katalog aus Art. 6 (1) DSGVO zuzuordnen. Wir nennen hier einmalig 
                die genauen Stellen im Gesetz, falls Sie es dort nachlesen wollen. Ansonsten verweisen wir 
                in unseren Datenschutzhinweisen nur auf die umgangssprachliche ‚Rechtsgrundlage' jeweils in 
                kursiv ohne jeweils immer wieder die Fundstelle im Gesetz zu erwähnen.
              </p>
              <p className="mt-4">
                Die DSGVO bietet insgesamt sechs Varianten bzw. Rechtsgrundlagen an, von denen für uns jedoch 
                nur vier relevant sind:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Verarbeitung der Daten aufgrund einer Einwilligung; Art. 6 (1) a.</li>
                <li>Erforderliche Verarbeitung zur Vorbereitung oder Durchführung eines Vertrages; Art. 6 (1) b.</li>
                <li>Erforderliche Verarbeitung, um ein zwingendes Gesetz oder eine Verordnung zu verarbeiten; Art. 6 (1) c.</li>
                <li>Erforderliche Verarbeitung zur Wahrung legitimer und berechtigter Interessen; Art. 6 (1) f; auch Interessenabwägung genannt.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Besuch und Nutzung unserer Website</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeines</h3>
              <p>
                Wenn Sie auf unsere Website zugreifen, werden stets automatisch einige technische Daten 
                erfasst und verarbeitet – anders könnte unser Webserver Ihnen keine Seite in Ihrem Smartphone 
                oder auf Ihrem PC präsentieren. Diese Informationen beinhalten etwa die Art des Webbrowsers, 
                das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ihre 
                IP-Adresse (sozusagen Ihre persönliche Adresse im Internet). Damit haben all diese 
                Informationen einen Personenbezug (zu Ihnen). Diese Datenverarbeitung ist jedoch erforderlich, 
                denn ohne die jeweils geltende IP-Adresse würde der Webserver nicht wissen, wohin er die 
                angeforderte Website ausliefern soll.
              </p>
              <p className="mt-4">
                Neben dem eigentlichen Seitenaufbau werden die Daten aus dem Seitenabruf auch zu folgenden 
                Zwecken verarbeitet und sind hierfür erforderlich:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zur Optimierung unserer Website.</li>
              </ul>
              <p className="mt-4">
                <strong>Wichtig:</strong> Wir verwenden Ihre Daten (Ihre IP-Adresse) aus dem Seitenaufruf 
                grundsätzlich nicht, um Rückschlüsse auf Ihre Person zu ziehen.
              </p>
              <p className="mt-4">
                Dies gilt auch für die Nutzung unseres Services zur Erzeugung eines KI-generierten Bildes. 
                Die Erzeugung der Bilder erfolgt zweistufig: Im ersten Schritt ist ein Thema oder ein bzw. 
                mehrere Stichwörter einzugeben (Prompt). Aus diesen ‚Hinweisen' generiert eine KI einen 
                ausführlicheren Prompt. Diese erste KI ist darauf trainiert, möglichst gute Anweisungen an 
                die eigentliche KI für die Bilderzeugung zu erzeugen. Dieser erweiterte Prompt wird angezeigt 
                und zur Erzeugung des Bildes genutzt. Auch diese Prozesse erfolgen im Kontext Ihrer IP Adresse, 
                ohne die das Ergebnis des Zwischenschritts und des eigentlichen Bildes nicht auf Ihrem 
                Endgerät bereitgestellt werden könnte.
              </p>
              <p className="mt-4">
                Alle vorstehend genannten Verarbeitungstätigkeiten erfolgen somit aus dem{' '}
                <em>berechtigten Interesse</em>, weil sie erforderlich sind, die Website sicher und performant 
                zu betreiben und den angebotenen Service überhaupt bestimmungsgemäß zu erbringen.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
              <p>
                Wir haben keinen Cookie-Banner, weil wir keine sog. Cookies setzen, die einer Einwilligung 
                bedürfen.
              </p>
              <p className="mt-4">
                Ja, wir setzen trotzdem zwei Cookies. Diese Cookies sind relativ kleine Datenpakete, die in 
                Ihrem Browser für rund 24 Stunden gespeichert werden. Warum tun wir das? Die Cookies werden 
                ausschließlich zu dem Zweck eingesetzt, die Begrenzung unseres Services auf drei Vorgänge je 
                Tag zu beschränken.
              </p>
              <p className="mt-4">
                Wir bieten unseren Service auf dieser Seite kostenlos an. Dieses Angebot können wir nur 
                aufrechterhalten, wenn es von Einzelpersonen oder Robots nicht zu intensiv genutzt wird. 
                Deshalb ist die Nutzung pro Tag auf eine definierte Anzahl von Vorgängen beschränkt. Um diese 
                Beschränkung technisch auch tatsächlich anzuwenden, könnten wir die Nutzung von einer 
                Anmeldung abhängig machen. Um diesen Ansatz wirksam umzusetzen, müssten unsere Interessenten 
                also Zugänge registrieren, die keine Zweifel über ihre Identität belassen.
              </p>
              <p className="mt-4">
                Wir haben uns bewusst für eine datenschutzfreundlichere Variante entschieden: Niemand muss 
                für die Nutzung unseres Services auf der www.kibilder.de seine Identität offenlegen. Um 
                trotzdem eine rudimentäre Begrenzung der Nutzung durchzusetzen, speichern wir diese Cookies 
                auf den Geräten der Nutzer. Diese Cookies verbleiben lediglich 24h und löschen sich 
                anschließend automatisch. Wir wissen, dass diese Form der Begrenzung technisch umgangen 
                werden kann, vertrauen hier aber auf die Fairness unserer Interessenten. Bisher hat das 
                Modell zum Verhindern exzessiver Nutzung gut funktioniert. Wir hoffen, dass dies so bleibt.
              </p>
              <p className="mt-4">
                Für die Umsetzung dieser datenschutzfreundlichen Variante ist das Setzen von Cookies 
                erforderlich. Mithilfe der Cookies zählen wir die Anzahl der Nutzung zum Zweck der Begrenzung. 
                Weitere Zwecke werden mit den Cookies bzw. der damit verbundenen Datenverarbeitung nicht 
                verfolgt. Wir sind überzeugt, mit dieser (datenschutzfreundlichen) Lösung berechtigte 
                Interessen zu verfolgen.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-3">Zugriffe auf administrative Zugänge, Missbrauchsschutz</h3>
              <p>
                Die IP-Adressen und damit die Personenbeziehbarkeit der vorstehenden Daten werden spätestens 
                nach sieben Tagen anonymisiert oder gelöscht, sofern sie nicht Gegenstand der Aufklärung 
                eines Missbrauchs sind.
              </p>
              <p className="mt-4">
                Versuche, sich bei unseren Administrationszugängen anzumelden, werden nicht anonymisiert 
                protokolliert. Daten aus solchen und anderen Missbrauchsversuchen speichern und verarbeiten 
                wir, um einen möglichen Angriff etwa durch Sperren zu verhindern oder Strafverfolgungsbehörden 
                bei der Aufklärung zu unterstützen; denn das Hacking von Websites ist illegal (auch der Versuch).
              </p>
              <p className="mt-4">
                Derartige ‚Log Files' bewahren wir in der Regel mindestens vier Monate auf, da Cyberangriffe 
                vielfach langfristig angelegt sind. Die maximale Speicherdauer lehnen wir an den Vorgaben an, 
                die das BDSG für Betreiber von staatlichen Webservern in Deutschland vorschreibt (für 
                privatwirtschaftliche Webserver liefert das BDSG und die DSGVO keine konkreten Vorgaben). 
                § 76 (4) BDSG: „Die Protokolldaten sind am Ende des auf deren Generierung folgenden Jahres 
                zu löschen."
              </p>
              <p className="mt-4">
                Alle vorgenannten Verarbeitungstätigkeiten erfolgen auf Basis einer Interessenabwägung, also 
                des <em>berechtigten Interesses</em> am Betrieb einer sicheren Website und an der rechtlichen 
                Verfolgung von Personen, die unseren Kunden / Interessenten oder uns schaden wollen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Empfänger Ihrer Daten</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Auftragsverarbeiter</h3>
              <p>
                Zur Erbringung unserer Services binden wir sog. Auftragsverarbeiter ein. Auftragsverarbeiter 
                sind Dienstleister, die in unserem Auftrag uns bei der Datenverarbeitung behilflich sind. 
                Solche Auftragsverarbeiter dürfen die Daten nicht zu eigenen Zwecken verarbeiten, also nur 
                und ausschließlich nach unseren Weisungen verarbeiten. Auftragsverarbeiter dürfen die Daten 
                nicht eigenmächtig auswerten oder ohne unsere Weisung an Dritte übermitteln. Auftragsverarbeiter 
                sind eng über Verträge an uns gebunden, werden sorgfältig ausgewählt und von uns entsprechend 
                kontrolliert. Da wir im Fall von Auftragsverarbeitern die Hoheit über Ihre Daten behalten, 
                bleiben wir nach den Regeln der DSGVO Verantwortlicher und somit auch Ihr Ansprechpartner. 
                Aus diesem Grund veröffentlichen wir hier auch keine vollständige Liste der Auftragsverarbeiter.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-3">Verarbeitung außerhalb der EU und des EWR</h3>
              <p>
                Wir bevorzugen bei der Wahl unserer Dienstleister Unternehmen aus der EU. Einige der von uns 
                eingesetzten Dienstleister erbringen ihre Leistungen jedoch aus Ländern außerhalb der EU oder 
                des EWR. Im Falle der USA bevorzugen wir wiederum Partner, die nach den Regeln des Data 
                Privacy Framework (DPF) zertifiziert sind und für die daher ein Angemessenheitsbeschluss der 
                EU-Kommission gilt. Unabhängig davon regeln wir mit unseren Partnern die Übermittlung von 
                Daten in sogenannte Drittstaaten grundsätzlich mit Hilfe der verbindlichen Vereinbarung der 
                EU-Standardvertragsklauseln für Drittstaaten. Dieses Verfahren wenden wir auch dann an, wenn 
                Daten in der EU / im EWR verarbeitet werden, aber Wartungsarbeiten von außerhalb der EU/EWR 
                durchgeführt werden könnten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Änderung unserer Datenschutzhinweise</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten 
                Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="w-full border-t mt-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} KI-Bildgenerator. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

