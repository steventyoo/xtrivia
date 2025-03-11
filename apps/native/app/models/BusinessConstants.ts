import { ImageProps } from "react-native";
import IconGeneral from '@assets/images/svgs/icon-cat-general-yellow.svg'
import IconSports from '@assets/images/svgs/icon-cat-sports-blue.svg'
import IconTech from '@assets/images/svgs/icon-cat-tech-green.svg'
import IconHistory from '@assets/images/svgs/icon-cat-history-yellow.svg'
import IconFoodDrink from '@assets/images/svgs/icon-cat-food-drinks-red.svg'
import IconDarkMode from '@assets/images/svgs/icon-cat-darkmode-green.svg'
import IconPopCulture from '@assets/images/svgs/icon-cat-pop-culture-blue.svg'
import IconMusicMovies from '@assets/images/svgs/icon-cat-music-movies-green.svg'
import IconAnimals from '@assets/images/svgs/icon-cat-animals-green.svg'
import IconEconomy from '@assets/images/svgs/icon-cat-economy-yellow.svg'
import IconGeography from '@assets/images/svgs/icon-cat-geography.svg'
import IconArtsLit from '@assets/images/svgs/icon-cat-arts-lit-green.svg'

import IconBlueDog from '@assets/images/svgs/icon-green-dog.svg'
import IconRedCat from '@assets/images/svgs/icon-red-cat.svg'
import IconYellowRat from '@assets/images/svgs/icon-yellow-rat.svg'

export const animals = [
  {
    slug: 'dog',
    image: IconBlueDog
  },
  {
    slug: 'cat',
    image: IconRedCat
  },
  {
    slug: 'rat',
    image: IconYellowRat
  }
]

export const Categories = [
  {
    slug: 'general',
    text: 'general',
    icon: IconGeneral
  },
  {
    slug: 'sports',
    text: 'sports',
    icon: IconSports
  },
  {
    slug: 'tech_science',
    text: 'tech & science',
    icon: IconTech
  },
  {
    slug: 'history',
    text: 'history',
    icon: IconHistory
  },
  {
    slug: 'food_drinks',
    text: 'food & drinks',
    icon: IconFoodDrink
  },
  {
    slug: 'dark_mode',
    text: 'dark mode',
    icon: IconDarkMode
  },
  {
    slug: 'music_movies',
    text: 'music & movies',
    icon: IconMusicMovies
  },
  {
    slug: 'pop_culture',
    text: 'pop culture',
    icon: IconPopCulture
  },
  {
    slug: 'animals',
    text: 'animals',
    icon: IconAnimals
  },
  {
    slug: 'economy',
    text: 'economy',
    icon: IconEconomy
  },
  {
    slug: 'geography',
    text: 'geography',
    icon: IconGeography
  },
  {
    slug: 'music_media',
    text: 'arts & lits',
    icon: IconArtsLit
  },
]