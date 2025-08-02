const translations = {
  en: {
    // Английские имена (оригинальные)
    'Hillbilly': 'Hillbilly',
    'Nurse': 'Nurse',
    'Hag': 'Hag',
    'Shape': 'Shape',
    'Doctor': 'Doctor',
    'Clown': 'Clown',
    'Spirit': 'Spirit',
    'Legion': 'Legion',
    'Ghostface': 'Ghostface',
    'Demogorgon': 'Demogorgon',
    'Oni': 'Oni',
    'Deathslinger': 'Deathslinger',
    'Executioner': 'Executioner',
    'Blight': 'Blight',
    'Twins': 'Twins',
    'Trickster': 'Trickster',
    'Nemesis': 'Nemesis',
    'Cenobite': 'Cenobite',
    'Artist': 'Artist',
    'Onryō': 'Onryō',
    'Dredge': 'Dredge',
    'Mastermind': 'Mastermind',
    'Knight': 'Knight',
    'Skull Merchant': 'Skull Merchant',
    'Singularity': 'Singularity',
    'Xenomorph': 'Xenomorph',
    'Good Guy': 'Good Guy',
    'Unknown': 'Unknown',
    'Lich': 'Lich',
    'Dark Lord': 'Dark Lord',
    'Houndmaster': 'Houndmaster',
    'Ghoul': 'Ghoul',
    'Animatronic': 'Animatronic',
    // Интерфейс
    'game_title': 'DBD Guess Game',
    'far': 'Far',
    'approaching': 'Approaching',
    'close': 'Close',
    'chase': 'Chase',
    'guess': 'Guess',
    'restart': 'Restart',
    'input_placeholder': 'Enter killer name',
    'correct_label': 'Correct',
    'wrong_label': 'Wrong',
    'accuracy_label': 'Accuracy',
    'reset_stats': 'Reset stats',
    'footer_copyright': '© 2025 DBD Guess Game. All rights reserved.',
    'about': 'About',
    'help': 'Help',
    'contacts': 'Contacts',
    'correct': 'Correct!',
    'wrong': 'Wrong.',
    'it_was': 'It was',
    'level_opened': 'Level unlocked',
  },
  ru: {
    // Русские переводы
    'Hillbilly': 'Деревенщина',
    'Nurse': 'Медсестра',
    'Hag': 'Ведьма',
    'Shape': 'Тень',
    'Doctor': 'Доктор',
    'Clown': 'Клоун',
    'Spirit': 'Дух',
    'Legion': 'Легион',
    'Ghostface': 'Гоустфейс',
    'Demogorgon': 'Демогоргон',
    'Oni': 'Они',
    'Deathslinger': 'Стрелок',
    'Executioner': 'Палач',
    'Blight': 'Мор',
    'Twins': 'Близнецы',
    'Trickster': 'Трикстер',
    'Nemesis': 'Немезис',
    'Cenobite': 'Сенобит',
    'Artist': 'Художница',
    'Onryō': 'Онрё',
    'Dredge': 'Грязь',
    'Mastermind': 'Кукловод',
    'Knight': 'Рыцарь',
    'Skull Merchant': 'Торговка черепами',
    'Singularity': 'Сингулярность',
    'Xenomorph': 'Ксеноморф',
    'Good Guy': 'Хороший парень',
    'Unknown': 'Неизвестное',
    'Lich': 'Лич',
    'Dark Lord': 'Дракула',
    'Houndmaster': 'Егерь',
    'Ghoul': 'Гуль',
    'Animatronic': 'Аниматроник',
    // Интерфейс
    'game_title': 'DBD Guess Game',
    'far': 'Далеко',
    'approaching': 'Приближение',
    'close': 'Близко',
    'chase': 'Погоня',
    'guess': 'Угадать',
    'restart': 'Начать заново',
    'input_placeholder': 'Введи имя убийцы',
    'correct_label': 'Правильно',
    'wrong_label': 'Неправильно',
    'accuracy_label': 'Точность',
    'reset_stats': 'Сбросить статистику',
    'footer_copyright': '© 2025 DBD Guess Game. Все права защищены.',
    'about': 'О проекте',
    'help': 'Помощь',
    'contacts': 'Контакты',
    'correct': 'Правильно!',
    'wrong': 'Неправильно.',
    'it_was': 'Это был',
    'level_opened': 'Открыт уровень',
  }
};

// Функция для получения перевода
function getTranslation(name, language) {
  return translations[language][name] || name;
}

// Функция для получения обратного перевода (с русского на английский)
function getReverseTranslation(russianName, language) {
  if (language === 'en') return russianName;
  
  for (const [englishName, russianTranslation] of Object.entries(translations.ru)) {
    if (russianTranslation === russianName) {
      return englishName;
    }
  }
  return russianName;
} 