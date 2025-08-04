import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./FAQ.scss";

const FAQ = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const faqItemHeaders = document.querySelectorAll(".js-faq__item-header");
		faqItemHeaders.forEach((faqItemHeader, index) => {
			const classBtn = document.querySelectorAll(".faq__btn");
			const classGridLine = document.querySelectorAll(".grid-line");
			faqItemHeader.addEventListener("click", () => {
				// Close old items when click on new
				for (let i = 0; i < faqItemHeaders.length; i++) {
					classBtn[i].classList.remove("faq__btn--active");
					classGridLine[i].classList.remove("grid-line--active");
				}
				classBtn[index].classList.toggle("faq__btn--active");
				classGridLine[index].classList.toggle("grid-line--active");
			});
		});

		document.addEventListener("scroll", () => {
			const faqSection = document.querySelectorAll(".js-faq-section");
			const faqSectionLink = document.querySelectorAll(".js-link-section");
			for (let i = 0; i < faqSectionLink.length; i++) {
				faqSectionLink[i].classList.remove("faq-section-link--active");
			}
			faqSection.forEach((section, index) => {
				const sectionRect = section.getBoundingClientRect();
				if (sectionRect.top <= 120 && sectionRect.bottom > 120) {
					faqSectionLink[index].classList.add("faq-section-link--active");
				}
			});
		});
	}, []);
	return (
		<>
			<h2 className="home__faq-title" id="faq">
				{t("faq_title")}
			</h2>
			<div className="faq">
				<div className="faq__nav">
					<ul className="faq__nav-list">
						<li>
							<a className="js-link-section" href="#faq1">
								O fyzioterapii
							</a>
						</li>
						<li>
							<a className="js-link-section" href="#faq2">
								Výběr fyzioterapeuta
							</a>
						</li>
						<li>
							<a className="js-link-section" href="#faq3">
								Fyzioterapie na klinice
							</a>
						</li>
						<li>
							<a className="js-link-section" href="#faq4">
								Fyzioterapie doma
							</a>
						</li>
						<li>
							<a className="js-link-section" href="#faq5">
								Platba a fakturace
							</a>
						</li>
					</ul>
				</div>
				<div>
					<div className="js-faq-section" id="faq1">
						<p className="faq__section-title">O fyzioterapii</p>
						<div className="home__faq">
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Co je fyzioterapie?</p>
									<div className="faq__btn faq__btn--active"></div>
								</div>
								<div className="grid-line grid-line--active">
									<p>
										Fyzioterapie, také nazývaná fyzikální terapie, je léčba k
										obnovení, udržení a maximálnímu využití mobility, funkce a
										pohody pacienta. Fyzioterapie pomáhá prostřednictvím fyzické
										rehabilitace, prevence zranění a zdraví a kondice.
										Fyzioterapeuti vás zapojí do vašeho vlastního zotavení tím,
										že nastaví předem definovanou dráhu léčby. Fyzioterapeut vás
										může požádat, abyste dělali určitá cvičení sami, abyste se
										rychle zotavili. Fyzioterapeuti využívají manuální terapii a
										různé modality podle stavu pacienta.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jaké problémy může léčit fyzioterapeut?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Fyzioterapeut může léčit různé problémy, jako jsou sportovní
										úrazy, muskuloskeletální, neurologické problémy, dětská péče
										a další problémy v závislosti na specializaci
										fyzioterapeuta. Některé běžné problémy, které může léčit
										fyzioterapeut, jsou následující: Bolesti šíje a zad jsou
										způsobeny problémy ve svalech a kostře. Problémy s kostmi,
										klouby, svaly a vazy, jako je artritida. Únava, bolest,
										otok, ztuhlost a ztráta svalové síly. Ztráta pohyblivosti v
										důsledku traumatu mozku (mrtvice) nebo páteře nebo v
										důsledku onemocnění, jako je Parkinsonova choroba a
										roztroušená skleróza.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jaké postupy se používají ve fyzioterapii?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Posouzení pacienta provádí v prvé řadě fyzioterapeut, který
										určuje průběh léčby. Ve fyzioterapeutické léčbě se používají
										různé přístupy, které se však mohou u jednotlivých pacientů
										lišit v závislosti na stavu pacienta a typu potřebné léčby.
										Společný postup zahrnuje následující: - Manuální cvičení -
										Mobilizace měkkých tkání - Elektroléčba - Tepelná terapie -
										Tejpování sportovních zranění - Ultrazvuk
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Existují specializace ve fyzioterapii?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Muskuloskeletální/ortopedická fyzioterapie: Používá se k
										léčbě stavů, jako jsou poranění kostí, podvrtnutí, bolesti
										zad, artritida, natažení, problémy s držením těla, sporty a
										úrazy na pracovišti. Neurologická fyzioterapie: Používá se k
										léčbě poruch nervového systému včetně mrtvice, poranění
										míchy, získaných poranění mozku, roztroušené sklerózy a
										Parkinsonovy choroby. Kromě toho se fyzioterapeuti na
										základě osobního zájmu, zkušeností a certifikovaných
										tréninkových fyzioterapeutů mohou specializovat na jednu
										nebo více z následujících specializací Dětská fyzioterapie,
										Geriatrická fyzioterapie, Vestibulární rehabilitace,
										Kardiovaskulární fyzioterapie, Fyzioterapie plic, Sportovní
										fyzioterapie, Zdravotní fyzioterapie žen, Fyzioterapie pro
										ženy, Úpravy fyzioterapie Akupunkturní terapie, baňkování
										atd.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="js-faq-section" id="faq2">
						<p className="faq__section-title">Výběr fyzioterapeuta</p>
						<div className="home__faq">
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jak se liší chiropraktik od fyzioterapeuta?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Fyzioterapeuti i chiropraktici pracují s pacienty, kteří
										pociťují bolest nebo mají potíže s prováděním různých
										fyzických úkolů. Jediný rozdíl mezi těmito dvěma jsou jejich
										léčebné metody. Chiropraktici většinou spoléhají na
										zarovnání částí těla (úpravy) s hlavním zaměřením na páteř,
										zatímco fyzioterapeuti používají cvičební programy a pomocná
										zařízení ke zlepšení mobility pacientů nebo ke snížení
										úrovně bolesti.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Kdo je pro mě správný fyzioterapeut?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Nalezení správné fyzioterapie závisí na stavu pacienta a
										typu léčby, kterou musí pacient projít. Předpokládejme, že
										existuje případ po operaci, takže tento pacient bude
										přidělen k orto fyzioterapeutovi a v některých kritických
										případech, jako je pacient s po mrtvici, není přidělen pouze
										neurofyzioterapeut, ale CBP se postará o to, aby dostal
										zkušeného fyzioterapeuta. Vysvětleme to ještě na jednom
										příkladu; předpokládejme, že existuje dítě, které trpí
										fyzickou bolestí nebo zraněním, takže bude přiděleno k
										dětskému fyzioterapeutovi. V některých případech si pacient
										neuvědomuje, s čím přesně se potýká, zda se jedná o svalové
										křeče nebo svalové namožení, takže v takovém případě
										fyzioterapeut podstoupí posouzení, ve kterém se seznámí s
										přístupem léčby.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jak je fyzioterapie přiřazena CB fyzioterapií?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										CB Physiotherapy má síť zkušených fyzioterapeutů dostupných
										v mnoha oblastech. Spolu s požadavky na stav pacienta/léčbu
										se ptáme i na vaši polohu. Na základě kombinace těchto dvou
										najdeme to nejvhodnější pro vaši léčbu. Mezi další faktory
										patří preference pohlaví, tj. ženské fyzioterapeuty jsou
										určeny pro léčbu pacientek, pokud pacient nedá souhlas s
										mužským fyzioterapeutem. Dáváme také přednost vyslání
										blízkého dostupného fyzioterapeuta, aby se u dlouhodobých
										ošetření nevynechávala sezení a pacientovi byla poskytnuta
										včasná léčba. CBP se stará o to, aby pacient dostal
										správného fyzioterapeuta, který dokáže velmi dobře léčit
										jeho problémy.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Mohu cvičit sám?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Ano, pokud fyzioterapeut navrhne, abyste cvičili sami,
										začněte dělat totéž. Někdy cvičení cvičí fyzioterapeut v
										době léčby, která by měla být prováděna na vlastní pěst,
										aniž byste měli oko nějakého fyzioterapeuta. Důvodem, proč
										navrhujete cvičení provádět sami, je pouze to, že zotavení
										probíhá rychlým tempem a dochází k úlevě od bolesti. Někdy
										mohou pacienti také nahlédnout do videí na YouTube nebo
										online cvičebních programů, důrazně to nedoporučujeme.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="js-faq-section" id="faq3">
						<p className="faq__section-title">Fyzioterapie na klinice</p>
						<div className="home__faq">
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Je nutný lékařský předpis?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Ne, fyzioterapii předepsanou lékařem není povinné. V
										některých případech lékař předepíše pacientovi fyzioterapii,
										která je dobrá, ale také dbáme na to, aby náš fyzioterapeut
										provedl posouzení pacienta, které mu pomůže diagnostikovat
										problém a podle toho zahájit léčbu. Naší praxí je poskytovat
										co nejbezpečnější a nejlepší možnou péči zaměřenou na
										pacienta.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Je léčba na klinice lepší než domácí péče?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										V některých případech, kdy je problém s mobilitou pacienta,
										není jiná možnost, než absolvovat fyzioterapii doma. V
										ostatních případech záleží na volbě pacienta, zda chce léčbu
										provádět doma nebo na klinice. V některých případech však
										léčba vyžaduje jiný typ vybavení, které může být k dispozici
										pouze na klinice, pro kterou je pro lepší výsledky pro
										pacienty lepší kliniku navštívit. Kromě toho je na klinice k
										dispozici i senior fyzio, který může dohlížet na probíhající
										léčbu. Pokud však pacient chce, aby se léčba prováděla u něj
										doma a léčba vyžaduje pouze manuální terapii nebo přenosné
										nástroje, můžeme poskytnout domácí fyzioterapii. Pokud si
										nejste jisti, zda můžete kliniku pravidelně navštěvovat,
										měli byste se obvykle při dlouhodobé léčbě rozhodnout pro
										službu domácí péče.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Rezervace předem vs Walkins?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										V některých případech, kdy je problém s mobilitou pacienta,
										není jiná možnost, než absolvovat fyzioterapii doma. V
										ostatních případech záleží na volbě pacienta, zda chce léčbu
										provádět doma nebo na klinice. V některých případech však
										léčba vyžaduje jiný typ vybavení, které může být k dispozici
										pouze na klinice, pro kterou je pro lepší výsledky pro
										pacienty lepší kliniku navštívit. Kromě toho je na klinice k
										dispozici i senior fyzio, který může dohlížet na probíhající
										léčbu. Pokud však pacient chce, aby se léčba prováděla u něj
										doma a léčba vyžaduje pouze manuální terapii nebo přenosné
										nástroje, můžeme poskytnout domácí fyzioterapii. Pokud si
										nejste jisti, zda můžete kliniku pravidelně navštěvovat,
										měli byste se obvykle při dlouhodobé léčbě rozhodnout pro
										službu domácí péče.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Máte v mém okolí nějakou kliniku?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										You can directly visit our website, enter your location and
										you will find our experts nearby you. In case there is some
										difficulty you can directly share your location with us over
										WhatsApp and we will help you to find a nearby clinic to you
										in order to save time and to make sure that the sessions are
										not skipped. CBP makes sure that the patient gets the
										treatment at their convenient time.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="js-faq-section" id="faq4">
						<p className="faq__section-title">Fyzioterapie doma</p>
						<div className="home__faq">
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Kdy si vzít domácí fyzioterapeutickou službu?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Záleží na stavu a pohodlí pacienta. V některých případech je
										to pro pacienta jediná schůdná možnost, např. Pacient po
										mozkové příhodě, který má problémy s rovnováhou nebo
										paralýzu, je v takových případech lepší absolvovat
										fyzioterapii doma, ale pokud je problém mírný a můžete
										navštívit blízkou kliniku bez vynechání sezení, není na
										škodu kliniku navštívit. Pro pacienty s časovým omezením
										může být fyzioterapie doma také možností, která šetří čas.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Je v mém okolí k dispozici fyzioterapie doma?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Působíme ve více městech, např. Bangalore, Mumbai, Dillí-NCR
										a Ahmedabad, pokud chcete využít fyzioterapeutických služeb
										v takových oblastech, můžete přejít na naši webovou stránku,
										zadat svou polohu a zkontrolovat dostupnost fyzioterapie a
										podle toho si můžete naplánovat sezení. Je lepší poslat svou
										polohu přes WhatsApp a my vám pomůžeme najít správného
										fyzioterapeuta nebo blízkou kliniku.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jaká je délka každé relace?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Obvykle trvá sezení 30-45 minut, avšak v případě, že je
										ošetření potřeba delší dobu, lze délku sezení prodloužit až
										na 1 hodinu nebo 90 minut. Doba trvání sezení se obecně
										prodlužuje v několika případech, kdy má pacient
										závažné/vícenásobné problémy. Náš odborník může nastavit
										dobu trvání sezení po provedení posouzení pacienta. Vezměte
										prosím na vědomí, že standardní poplatky uvedené na našich
										webových stránkách jsou za 30-45 minutové sezení. U delších
										relací budou poplatky vyšší.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Kolik relací a v jaké frekvenci je potřeba?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Neexistuje žádný předem stanovený počet sezení pro konkrétní
										stav, protože zcela závisí na stavu pacienta. Pokud je
										problém mírný, může vám náš odborník navrhnout několik
										sezení, podobně v některých kritických případech (neuro,
										pooperační, péče o seniory atd.) jsou sezení obvykle na
										delší dobu a náš fyzioterapeut s vámi probere plán léčby. To
										může zahrnovat rady týkající se přibližného počtu relací,
										které můžete potřebovat. Náš expert bude také diskutovat o
										frekvenci sezení. Pacient může absolvovat léčebná sezení
										denně nebo střídavě, pokud vynechání relací mezi nimi
										nepoškodí léčebný proces.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="js-faq-section" id="faq5">
						<p className="faq__section-title">Platba a fakturace</p>
						<div className="home__faq">
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jaké jsou poplatky za fyzioterapii?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										CB fyzioterapie si klade za cíl učinit léčbu šetrnější.
										Poplatky se však v jednotlivých městech liší. Poplatky za
										domácí fyzioterapii jsou o něco vyšší než sazby na klinice.
										Pro dlouhodobé případy poskytuje CBP zvýhodněné ceny
										balíčků. Žádné další poplatky za použití modalit. Můžete
										také navštívit naše webové stránky a zkontrolovat ceny domů
										a klinik ve vašem městě.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jaké platební režimy jsou přijímány?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Způsob, jakým se pacient rozhodne kompenzovat CBP, je také
										přijatelný. Platební metody nabízené CB Physiotherapy
										zahrnují hotovost, kreditní nebo debetní karty, bankovní
										převody a online platební služby, jako je Paytm, Google Pay
										atd.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Budete poskytovat účty na proplacení pojištění?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										CB Physiotherapy poskytuje pacientům skutečné účty za léčbu,
										takže může být pohodlné a jednoduché uplatnit nárok na
										úhradu od poskytovatele pojištění. Sezení jsou vedena
										stejným fyzioterapeutem po celou dobu léčby, i když pacient
										má možnost změnit fyzioterapeuta v případě, že se vyskytne
										nějaký problém.
									</p>
								</div>
							</div>
							<div className="faq__item">
								<div className="faq__item-header js-faq__item-header">
									<p>Jaké jsou vaše zásady pro zrušení a vrácení peněz?</p>
									<div className="faq__btn"></div>
								</div>
								<div className="grid-line">
									<p>
										Za nevyužité služby účtujeme storno poplatky. Pokud pacient
										požádá o zrušení nevyužitých služeb, budou mu účtovány
										poplatky. Také v případech, kdy pacient vyjadřuje obavy
										ohledně kvality přijatých služeb, bereme tyto problémy vážně
										a řešíme je pro budoucí sezení. Je důležité si uvědomit, že
										za již navštívené relace nebudou vráceny peníze.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
