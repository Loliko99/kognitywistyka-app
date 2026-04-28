import type { Fact } from "@/domain/fact";

export const factsData: Fact[] = [
  {
    id: "efekt-stroopa",
    title: "Efekt Stroopa spowalnia Twoją reakcję",
    hook: "Gdy kolor tekstu nie pasuje do słowa, mózg potrzebuje dodatkowego czasu.",
    explanation:
      "Efekt Stroopa pokazuje konflikt miedzy automatycznym czytaniem słów a kontrolowanym nazywaniem koloru. To klasyczny test uwagi wykonawczej.",
    example:
      "Słowo 'CZERWONY' napisane zieloną czcionką powoduje więcej błędów przy szybkim odpowiadaniu.",
    whyItMatters:
      "Pomaga zrozumieć, dlaczego pod presją czasu łatwiej o pomyłki i dlaczego multitasking obciąża uwagę.",
    category: "psychologia_poznawcza",
  },
  {
    id: "ślepa-plamka-uwagi",
    title: "Możesz nie zauważyć oczywistej rzeczy",
    hook: "Silne skupienie na jednym zadaniu potrafi 'wyłączyć' inne bodzce.",
    explanation:
      "Ślepota nieuwagi pojawia sie, gdy zasoby uwagi sa zajęte. Mózg filtruje informacje, nawet jeśli sa one wyrazne sensorycznie.",
    example:
      "Podczas liczenia podań w eksperymencie część osób nie widzi osoby w kostiumie goryla przechodzącej przez scene.",
    whyItMatters:
      "To tłumaczy, czemu można przeoczyć błąd w dokumencie, kiedy uwaga jest przyklejona do jednego szczegółu.",
    category: "percepcja",
  },
  {
    id: "fałszywe-wspomnienia",
    title: "Pamięć nie jest nagraniem wideo",
    hook: "Wspomnienia są rekonstruowane, a nie odtwarzane 1:1.",
    explanation:
      "Badania nad fałszywymi wspomnieniami pokazują, że sugestia i kontekst mogą zmieniać treść pamiętanych zdarzeń.",
    example:
      "Po wielokrotnym usłyszeniu szczegółu, którego nie było, osoba może być pewna, że go pamięta.",
    whyItMatters:
      "Warto ostrożnie traktować pewność siebie przy przypominaniu sobie faktów z konfliktów czy spotkań.",
    category: "psychologia_poznawcza",
  },
  {
    id: "heurystyka-dostepnosci",
    title: "To, co łatwo wspomnieć, wydaje się częstsze",
    hook: "Mózg zawyża prawdopodobieństwo zdarzeń, o których słyszysz często.",
    explanation:
      "Heurystyka dostępności to skrót myślowy: oceniamy ryzyko na podstawie łatwości przywołania przykładów, nie statystyki.",
    example:
      "Po głośnym materiale o katastrofie lotniczej ludzie przeceniają ryzyko latania.",
    whyItMatters:
      "Pomaga odróżnić emocjonalne reakcje od danych przy podejmowaniu decyzji finansowych i zdrowotnych.",
    category: "psychologia_poznawcza",
  },
  {
    id: "potwierdzenie-przekonań",
    title: "Szukasz dowodów, które pasują do Twojej opinii",
    hook: "Efekt potwierdzenia wzmacnia to, w co już wierzysz.",
    explanation:
      "Bias potwierdzenia polega na preferowaniu informacji zgodnych z przekonaniami i ignorowaniu danych przeciwnych.",
    example:
      "Czytasz głównie artykuły, które wspierają Twój pogląd polityczny, pomijając źródła krytyczne.",
    whyItMatters:
      "Świadomość tego biasu pomaga podejmować bardziej wyważone decyzje i lepiej oceniać argumenty.",
    category: "filozofia_umyslu",
  },
  {
    id: "pamiec-robocza-limit",
    title: "Pamięć robocza ma twardy limit",
    hook: "Naraz utrzymujesz mniej informacji, niż Ci się wydaje.",
    explanation:
      "Pamięć robocza przechowuje ograniczoną liczbę elementów przez krótki czas. Przeciążenie pogarsza jakość myślenia.",
    example:
      "Przy próbie zapamiętania kilku numerów i jednoczesnym pisaniu rosnie liczba pomyłek.",
    whyItMatters:
      "Dlatego dzielenie zadań na kroki i notowanie odciąża mózg i zwiększa skuteczność.",
    category: "neurobiologia",
  },
  {
    id: "efekt-ramowania",
    title: "To samo, inny opis, inna decyzja",
    hook: "Sposób przedstawienia opcji zmienia wybor, mimo identycznych danych.",
    explanation:
      "Efekt ramowania pokazuje, że decyzje zależne są od kontekstu językowego, np. zysk vs strata.",
    example:
      "Ludzie chetniej wybierają leczenie z '90% przezyc' niz z '10% smiertelnosci'.",
    whyItMatters:
      "Warto analizować decyzje po przepisaniu problemu w kilku wariantach językowych.",
    category: "psychologia_poznawcza",
  },
  {
    id: "predykcyjne-postrzeganie",
    title: "Mózg zgaduje, zanim zobaczysz",
    hook: "Percepcja to połączenie sygnalu z oczu i przewidywan mózgu.",
    explanation:
      "W modelach predykcyjnych mózg stale tworzy hipotezy o świecie i koryguje je błędem predykcji.",
    example:
      "W niejednoznacznym obrazie najpierw widzisz to, czego się spodziewasz po kontekście.",
    whyItMatters:
      "To wyjaśnia, czemu oczekiwania i nastroj mogą zniekształcać odbiór rzeczywistości.",
    category: "percepcja",
  },
  {
    id: "neuroplastycznosc",
    title: "Mózg zmienia się przez trening",
    hook: "Regularne ćwiczenie wzmacnia połączenia neuronowe.",
    explanation:
      "Neuroplastyczność oznacza zdolność układu nerwowego do zmiany struktury i funkcji pod wpływem doświadczenia.",
    example:
      "Nauka nowej umiejętności przez kilka tygodni poprawia wydajność i automatyzuje ruchy.",
    whyItMatters:
      "Pokazuje, że nawyki i trening poznawczy mają biologiczne podstawy, a nie są tylko kwestia motywacji.",
    category: "neurobiologia",
  },
  {
    id: "decyzje-zmeczenie",
    title: "Im więcej wyborów, tym gorsze decyzje",
    hook: "Zmeczenie decyzyjne obniża jakość kolejnych wyborów.",
    explanation:
      "Po serii decyzji zasoby samokontroli i uwagi maleją, co sprzyja wyborom impulsywnym lub unikaniu decyzji.",
    example:
      "Pod koniec dnia łatwiej wybrać najprostsza opcje, nawet jeśli nie jest najlepsza.",
    whyItMatters:
      "Najważniejsze decyzje warto planować na moment najwyższej energii poznawczej.",
    category: "psychologia_poznawcza",
  },
  {
    id: "model-jezykowy-statystyka",
    title: "AI nie myśli jak człowiek",
    hook: "Modele językowe przewiduja tokeny, a nie rozumieja świata jak ludzie.",
    explanation:
      "LLM-y uczą się wzorców statystycznych w tekscie. Moga byc bardzo skuteczne językowo bez ludzkiej intencjonalnosci.",
    example:
      "Model generuje poprawną odpowiedź, ale potrafi też pewnie podać nieprawdę, gdy brakuje danych.",
    whyItMatters:
      "Ułatwia realistyczne oczekiwania wobec AI i konieczność weryfikacji krytycznych informacji.",
    category: "ai_i_umysl",
  },
  {
    id: "teoria-umyslu-u-krukowatych",
    title: "Krukowate planują, jakby przewidywali cudze intencje",
    hook: "Niektore ptaki ukrywaja jedzenie inaczej, gdy obserwuje je inny osobnik.",
    explanation:
      "Badania nad krukowatymi wskazuja zaawansowane strategie społeczne i pamięć epizodyczna podobna funkcjonalnie do planowania.",
    example:
      "Ptak, który był wczesniej okradany, pozniej zmienia kryjówke zapasow, gdy czuje obserwacje.",
    whyItMatters:
      "Rozszerza rozumienie inteligencji poza człowieka i pokazuje, że poznanie ma wiele form ewolucyjnych.",
    category: "zwierzeta",
  },
  {
    id: "luki-uwagowe-przy-jezdzie",
    title: "Doświadczenie za kierownica nie eliminuje ślepoty uwagi",
    hook: "Nawet wprawny kierowca może przeoczyć obiekt przy dużym obciążeniu poznawczym.",
    explanation:
      "Wysokie obciążenie uwagi i automatyzacja nawyków mogą współwystępować z błędami detekcji zagrożeń.",
    example:
      "Kierowca skupiony na nawigacji może z opóźnieniem zareagować na pieszego.",
    whyItMatters:
      "To argument za ograniczaniem rozpraszaczy i projektowaniem interfejsów zmniejszających obciĄŻenie uwagi.",
    category: "percepcja",
  },
  {
    id: "problem-kwalia",
    title: "Nauka mierzy mózg, ale nie czuje Twoich doświadczeń",
    hook: "Subiektywne 'jak to jest' pozostaje trudnym problemem świadomości.",
    explanation:
      "Filozofia umysłu odróżnia opisy funkcjonalne od jakościowego doświadczenia. To tzw. problem qualia.",
    example:
      "Możemy zmierzyć reakcje neuronalne na kolor czerwony, ale nie 'zobaczyć' cudzego odczucia czerwieni.",
    whyItMatters:
      "Pomaga rozumieć granice obecnych teorii świadomości i ostrożnie interpretować hasła o 'czytaniu myśli'.",
    category: "filozofia_umyslu",
  },
  {
    id: "hamowanie-reakcji",
    title: "Samokontrola to mierzalna funkcja poznawcza",
    hook: "Zdolność zatrzymania automatycznej reakcji można trenować i mierzyć.",
    explanation:
      "Testy typu Go/No-Go badają hamowanie reakcji i kontrole impulsów, związane m.in. z korą przedczołową.",
    example:
      "Gdy przez kilka prób naciskasz ten sam klawisz, nagła zmiana reguły powoduje odruchowe błędy.",
    whyItMatters:
      "To praktyczny model pracy nad impulsowością i uważnym podejmowaniem decyzji.",
    category: "neurobiologia",
  },
];
