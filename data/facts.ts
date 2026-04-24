import type { Fact } from "@/domain/fact";

export const factsData: Fact[] = [
  {
    id: "efekt-stroopa",
    title: "Efekt Stroopa spowalnia Twoja reakcje",
    hook: "Gdy kolor tekstu nie pasuje do slowa, mozg potrzebuje dodatkowego czasu.",
    explanation:
      "Efekt Stroopa pokazuje konflikt miedzy automatycznym czytaniem slow a kontrolowanym nazywaniem koloru. To klasyczny test uwagi wykonawczej.",
    example:
      "Slowo 'CZERWONY' napisane zielona czcionka powoduje wiecej bledow przy szybkim odpowiadaniu.",
    whyItMatters:
      "Pomaga zrozumiec, dlaczego pod presja czasu latwiej o pomylki i dlaczego multitasking obciaza uwage.",
    category: "psychologia_poznawcza",
  },
  {
    id: "slepa-plamka-uwagi",
    title: "Mozesz nie zauwazyc oczywistej rzeczy",
    hook: "Silne skupienie na jednym zadaniu potrafi 'wylaczyc' inne bodzce.",
    explanation:
      "Slepota nieuwagi pojawia sie, gdy zasoby uwagi sa zajete. Mozg filtruje informacje, nawet jesli sa one wyrazne sensorycznie.",
    example:
      "Podczas liczenia podan w eksperymencie czesc osob nie widzi osoby w kostiumie goryla przechodzacej przez scene.",
    whyItMatters:
      "To tlumaczy, czemu mozna przeoczyc blad w dokumencie, kiedy uwaga jest przyklejona do jednego szczegolu.",
    category: "percepcja",
  },
  {
    id: "falszywe-wspomnienia",
    title: "Pamiec nie jest nagraniem wideo",
    hook: "Wspomnienia sa rekonstruowane, a nie odtwarzane 1:1.",
    explanation:
      "Badania nad falszywymi wspomnieniami pokazuja, ze sugestia i kontekst moga zmieniac tresc pamietanych zdarzen.",
    example:
      "Po wielokrotnym uslyszeniu szczegolu, ktorego nie bylo, osoba moze byc pewna, ze go pamieta.",
    whyItMatters:
      "Warto ostroznie traktowac pewnosc siebie przy przypominaniu sobie faktow z konfliktow czy spotkan.",
    category: "psychologia_poznawcza",
  },
  {
    id: "heurystyka-dostepnosci",
    title: "To, co latwo przypomniec, wydaje sie czestsze",
    hook: "Mozg zawyza prawdopodobienstwo zdarzen, o ktorych slyszysz czesto.",
    explanation:
      "Heurystyka dostepnosci to skrot myslowy: oceniamy ryzyko na podstawie latwosci przywolania przykladow, nie statystyki.",
    example:
      "Po glosnym materiale o katastrofie lotniczej ludzie przeceniaja ryzyko latania.",
    whyItMatters:
      "Pomaga odroznic emocjonalna reakcje od danych przy podejmowaniu decyzji finansowych i zdrowotnych.",
    category: "psychologia_poznawcza",
  },
  {
    id: "potwierdzenie-przekonan",
    title: "Szukasz dowodow, ktore pasuja do Twojej opinii",
    hook: "Efekt potwierdzenia wzmacnia to, w co juz wierzysz.",
    explanation:
      "Bias potwierdzenia polega na preferowaniu informacji zgodnych z przekonaniami i ignorowaniu danych przeciwnych.",
    example:
      "Czytasz glownie artykuly, ktore wspieraja Twoj poglad polityczny, pomijajac zrodla krytyczne.",
    whyItMatters:
      "Swiadomosc tego biasu pomaga podejmowac bardziej wywazone decyzje i lepiej oceniac argumenty.",
    category: "filozofia_umyslu",
  },
  {
    id: "pamiec-robocza-limit",
    title: "Pamiec robocza ma twardy limit",
    hook: "Naraz utrzymujesz mniej informacji, niz Ci sie wydaje.",
    explanation:
      "Pamiec robocza przechowuje ograniczona liczbe elementow przez krotki czas. Przeciazenie pogarsza jakosc myslenia.",
    example:
      "Przy probie zapamietania kilku numerow i jednoczesnym pisaniu rosnie liczba pomylek.",
    whyItMatters:
      "Dlatego dzielenie zadan na kroki i notowanie odciaza mozg i zwieksza skutecznosc.",
    category: "neurobiologia",
  },
  {
    id: "efekt-ramowania",
    title: "To samo, inny opis, inna decyzja",
    hook: "Sposob przedstawienia opcji zmienia wybor, mimo identycznych danych.",
    explanation:
      "Efekt ramowania pokazuje, ze decyzje zalezne sa od kontekstu jezykowego, np. zysk vs strata.",
    example:
      "Ludzie chetniej wybieraja leczenie z '90% przezyc' niz z '10% smiertelnosci'.",
    whyItMatters:
      "Warto analizowac decyzje po przepisaniu problemu w kilku wariantach jezykowych.",
    category: "psychologia_poznawcza",
  },
  {
    id: "predykcyjne-postrzeganie",
    title: "Mozg zgaduje, zanim zobaczysz",
    hook: "Percepcja to polaczenie sygnalu z oczu i przewidywan mozgu.",
    explanation:
      "W modelach predykcyjnych mozg stale tworzy hipotezy o swiecie i koryguje je bledem predykcji.",
    example:
      "W niejednoznacznym obrazie najpierw widzisz to, czego sie spodziewasz po kontekście.",
    whyItMatters:
      "To wyjasnia, czemu oczekiwania i nastroj moga znieksztalcac odbior rzeczywistosci.",
    category: "percepcja",
  },
  {
    id: "neuroplastycznosc",
    title: "Mozg zmienia sie przez trening",
    hook: "Regularne cwiczenie wzmacnia polaczenia neuronalne.",
    explanation:
      "Neuroplastycznosc oznacza zdolnosc ukladu nerwowego do zmiany struktury i funkcji pod wplywem doswiadczen.",
    example:
      "Nauka nowej umiejetnosci przez kilka tygodni poprawia wydajnosc i automatyzuje ruchy.",
    whyItMatters:
      "Pokazuje, ze nawyki i trening poznawczy maja biologiczne podstawy, a nie sa tylko kwestia motywacji.",
    category: "neurobiologia",
  },
  {
    id: "decyzje-zmeczenie",
    title: "Im wiecej wyborow, tym slabsze decyzje",
    hook: "Zmeczenie decyzyjne obniza jakosc kolejnych wyborow.",
    explanation:
      "Po serii decyzji zasoby samokontroli i uwagi maleja, co sprzyja wyborom impulsywnym lub unikaniu decyzji.",
    example:
      "Pod koniec dnia latwiej wybrac najprostsza opcje, nawet jesli nie jest najlepsza.",
    whyItMatters:
      "Najwazniejsze decyzje warto planowac na moment najwyzszej energii poznawczej.",
    category: "psychologia_poznawcza",
  },
  {
    id: "model-jezykowy-statystyka",
    title: "AI nie mysli jak czlowiek",
    hook: "Modele jezykowe przewiduja tokeny, a nie rozumieja swiata jak ludzie.",
    explanation:
      "LLM-y ucza sie wzorcow statystycznych w tekscie. Moga byc bardzo skuteczne jezykowo bez ludzkiej intencjonalnosci.",
    example:
      "Model generuje poprawna odpowiedz, ale potrafi tez pewnie podac nieprawde, gdy brakuje danych.",
    whyItMatters:
      "Ulatwia realistyczne oczekiwania wobec AI i koniecznosc weryfikacji krytycznych informacji.",
    category: "ai_i_umysl",
  },
  {
    id: "teoria-umyslu-u-krukow",
    title: "Krukowate planuja, jakby przewidywaly cudze intencje",
    hook: "Niektore ptaki ukrywaja jedzenie inaczej, gdy obserwuje je inny osobnik.",
    explanation:
      "Badania nad krukowatymi wskazuja zaawansowane strategie spoleczne i pamiec epizodyczna podobna funkcjonalnie do planowania.",
    example:
      "Ptak, ktory byl wczesniej okradany, pozniej zmienia kryjowke zapasow, gdy czuje obserwacje.",
    whyItMatters:
      "Rozszerza rozumienie inteligencji poza czlowieka i pokazuje, ze poznanie ma wiele form ewolucyjnych.",
    category: "zwierzeta",
  },
  {
    id: "luki-uwagowe-przy-jezdzie",
    title: "Doswiadczenie za kierownica nie eliminuje slepoty uwagi",
    hook: "Nawet wprawny kierowca moze przeoczyc obiekt przy duzym obciazeniu poznawczym.",
    explanation:
      "Wysokie obciazenie uwagi i automatyzacja nawykow moga wspolwystepowac z bledami detekcji zagrozen.",
    example:
      "Kierowca skupiony na nawigacji moze z opoznieniem zareagowac na pieszego.",
    whyItMatters:
      "To argument za ograniczaniem rozpraszaczy i projektowaniem interfejsow zmniejszajacych obciazenie uwagi.",
    category: "percepcja",
  },
  {
    id: "problem-kwalia",
    title: "Nauka mierzy mozg, ale nie czuje Twoich doswiadczen",
    hook: "Subiektywne 'jak to jest' pozostaje trudnym problemem swiadomosci.",
    explanation:
      "Filozofia umyslu odroznia opisy funkcjonalne od jakosciowego doswiadczenia. To tzw. problem qualia.",
    example:
      "Mozemy zmierzyc reakcje neuronalne na kolor czerwony, ale nie 'zobaczyc' cudzego odczucia czerwieni.",
    whyItMatters:
      "Pomaga rozumiec granice obecnych teorii swiadomosci i ostroznie interpretowac hasla o 'czytaniu mysli'.",
    category: "filozofia_umyslu",
  },
  {
    id: "hamowanie-reakcji",
    title: "Samokontrola to mierzalna funkcja poznawcza",
    hook: "Zdolnosc zatrzymania automatycznej reakcji mozna trenowac i mierzyc.",
    explanation:
      "Testy typu Go/No-Go badaja hamowanie reakcji i kontrole impulsow, zwiazane m.in. z kora przedczolowa.",
    example:
      "Gdy przez kilka prob naciskasz ten sam klawisz, nagla zmiana reguly powoduje odruchowe bledy.",
    whyItMatters:
      "To praktyczny model pracy nad impulsywnoscia i uwaznym podejmowaniem decyzji.",
    category: "neurobiologia",
  },
];
